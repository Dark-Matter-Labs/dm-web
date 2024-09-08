import { Suspense } from 'react';
import { sanityFetch } from '@/sanity/lib/client';
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
    </html>
  );
}

export const metadata = {
  title: 'Dark Matter Labs',
  description: 'We are building options for the next economies',
};
