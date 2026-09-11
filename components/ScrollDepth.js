'use client';

import { useEffect } from 'react';

/**
 * Reports how far down a page visitors actually scroll, as Simple Analytics
 * custom events. Nothing in the dashboard answers this today, and several
 * open editorial questions depend on it - above all whether the ~1,700 words
 * of Contexts and Paradigms belong on the homepage or on their own page.
 *
 * Depth buckets rather than element visibility on purpose: the Matrix is
 * `position: sticky`, so an IntersectionObserver over it would report
 * "reached" for every visitor the moment the page loads. Percentages are also
 * content-independent and mean the same thing on mobile, where the document
 * is a different height.
 *
 * On the homepage at the time of writing (document ~8,900px) the buckets land
 * roughly like this:
 *
 *   25%  into the Matrix sequence, which runs 1100-4700px
 *   50%  through the Matrix
 *   75%  reached Paradigms - i.e. the deep copy
 *   100% reached the bottom
 *
 * Anonymous and aggregate: no identifiers, no cookies, nothing per-visitor.
 * Simple Analytics honours Do Not Track for events as it does for pageviews,
 * and if the script is blocked or never loads these calls are discarded.
 *
 * Only reports on pages that are actually taller than the viewport. A page
 * that fits on screen has no depth to measure, and more importantly a page
 * mid-load briefly reports `scrollHeight === innerHeight` - counting that as
 * "saw everything" would report every visitor as reaching 100%.
 */

const BUCKETS = [25, 50, 75, 100];

export default function ScrollDepth({ prefix }) {
  useEffect(() => {
    // The analytics script is loaded with strategy="lazyOnload", so it may not
    // be there yet. This is Simple Analytics' documented queue shim: events
    // buffer on the function itself and the script drains them once it loads.
    window.sa_event =
      window.sa_event ||
      function () {
        (window.sa_event.q = window.sa_event.q || []).push(arguments);
      };

    const pending = new Set(BUCKETS);
    let observer;

    const stop = () => {
      window.removeEventListener('scroll', report);
      if (observer) observer.disconnect();
    };

    function report() {
      const doc = document.documentElement;
      const viewport = window.innerHeight;

      // Not measurable yet, or not scrollable at all. Bail rather than
      // guess - see the note above about mid-load layout.
      if (doc.scrollHeight <= viewport) return;

      const depth = ((window.scrollY + viewport) / doc.scrollHeight) * 100;

      for (const bucket of BUCKETS) {
        if (pending.has(bucket) && depth >= bucket) {
          pending.delete(bucket);
          window.sa_event(`${prefix}_depth_${bucket}`);
        }
      }

      if (pending.size === 0) stop();
    }

    window.addEventListener('scroll', report, { passive: true });

    // The document's height is not final when this effect runs: images, fonts
    // and the Matrix all change it. A ResizeObserver re-checks as it settles,
    // which also covers a visitor whose browser restored a scroll position
    // partway down, where no scroll event ever fires.
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(report);
      observer.observe(document.documentElement);
    } else {
      report();
    }

    return stop;
  }, [prefix]);

  return null;
}
