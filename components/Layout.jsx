import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollProgress from "./ScrollProgress.jsx";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-secondary text-secondary-900">
      <ScrollProgress />
      <Navbar />
      <main className="pt-20 pb-16 px-4 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
