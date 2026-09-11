import { Suspense } from 'react';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JobsCount from '@/components/JobsCount';
import Loading from './loading';
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
          {/* Boundary wraps only the page content, so a slow page fetch
              never replaces the navbar and footer with a bare spinner. */}
          <div className="global-margin">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
          <Footer />
        </main>
        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
