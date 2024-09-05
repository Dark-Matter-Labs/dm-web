import { sanityFetch } from '@/sanity/lib/client';
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
        <main className="">
          <Navbar numberOfJobs={jobs.length} />
          <div className="global-margin">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Dark Matter Labs',
  description: 'We are building options for the next economies',
};
