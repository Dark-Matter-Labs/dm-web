import { Suspense } from 'react';
import { sanityFetch } from '@/sanity/lib/client';
import Script from 'next/script';
import Loading from './loading';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../../styles/global.css';

const jobsQuery = `
*[_type == 'jobObject']
`;

export default async function RootLayout({ children }) {
  const jobs = await sanityFetch({
    query: jobsQuery,
    tags: ['jobObject'],
  });
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          <main className="">
            <Navbar numberOfJobs={jobs.length} />
            <div className="global-margin">{children}</div>
            <Footer />
          </main>
        </Suspense>
      </body>
      <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </html>
  );
}

export const metadata = {
  title: 'Dark Matter Labs',
  description: 'We are building options for the next economies',
};
