import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <main className="py-20">{children}</main>
    </>
  );
};

export default Layout;
