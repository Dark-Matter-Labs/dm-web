import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.css';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body>
        <main className="">
          <Navbar />
          <div className='global-margin'>
          {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Dark Marrer Labs',
  description: 'We are building options for the next economies',
};
