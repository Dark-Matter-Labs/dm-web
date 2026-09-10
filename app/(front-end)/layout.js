import { Suspense } from 'react';
import { sanityFetch } from '@/sanity/lib/client';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Loading from './loading';
import '../../styles/global.css';

const jobsQuery = `
*[_type == 'jobObject']
`;

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

export default async function RootLayout({ children }) {
  const jobs = await sanityFetch({
    query: jobsQuery,
    tags: ['jobObject'],
  });

  return (
    <html lang="en">
      <body>
        <main>
          {/* The Suspense boundary wraps only the page content. It previously
              wrapped the navbar and footer too, so any slow page-level fetch
              replaced the whole site chrome with a bare spinner. */}
          <Navbar numberOfJobs={jobs.length} />
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
