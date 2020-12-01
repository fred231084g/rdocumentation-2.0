import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-dc-beige100 text-dc-navy dark:bg-dc-navy dark:text-white">
      <div className="flex flex-col min-h-screen container mx-auto px-10">
        <Navbar />
        <div className="flex flex-col flex-grow">{children}</div>
        <Footer />
      </div>
    </div>
  );
}