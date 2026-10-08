import { Suspense } from 'react';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd, { organisationSchema } from '@/components/JsonLd';
import JobsCount from '@/components/JobsCount';
import '../../styles/global.css';

export const metadata = {
  metadataBase: new URL('https://darkmatterlabs.org'),
  title: 'Dark Matter Labs',
  description: 'We are building options for the next economies',
  openGraph: {
    title: 'Dark Matter Labs',
    description: 'We are building options for the next economies',
    url: 'https://darkmatterlabs.org',
    siteName: 'Dark Matter Labs',
    type: 'website',
  },
};

/**
 * No longer async. The layout used to `await` the jobs query before
 * rendering anything, so one Sanity request for a superscript number in the
 * nav gated the first paint of every page. The counter now streams in on
 * its own, behind a null fallback, and the chrome paints immediately.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Navbar
            jobsCount={
              <Suspense fallback={null}>
                <JobsCount className="text-[9.5px]" />
              </Suspense>
            }
            jobsCountMobile={
              <Suspense fallback={null}>
                <JobsCount className="text-[12px]" />
              </Suspense>
            }
          />
          {/* Deliberately NOT wrapped in <Suspense>, and there is no
              loading.js in this segment. Either one is a boundary above the
              page, and a boundary lets the response start streaming - with a
              200 status line already sent - before a page has had the chance
              to call notFound(). Every unknown URL then came back 200 with
              the "Page not found" UI inside it: a soft 404. Removing both is
              what makes them real 404s; removing only one changes nothing.
              Nearly every route is prerendered, so the spinner these
              provided could only ever show for a page created in Sanity
              after the last deploy. */}
          <div className="global-margin">{children}</div>
          <Footer />
        </main>
        <JsonLd data={organisationSchema()} />
        {/* Points agents at the plain-text index of the site. llmstxt.org
            asks for rel="describedby"; the Markdown alternates live on the
            individual project and initiative pages. */}
        <link
          rel="describedby"
          type="text/plain"
          href="https://darkmatterlabs.org/llms.txt"
        />
        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
