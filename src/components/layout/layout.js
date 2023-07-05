/** @jsxImportSource theme-ui */

import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import Celebrities from '../celebrities/celebrities';
function Layout({ children, className }) {
  return (
    <div
      sx={{ backgroundColor: "background", transition: ".3s ease-in-out" }}
      className="main__layout"
    >
      <header>
        <Navbar />
      </header>
      <main className={className}>{children}</main>
      <Celebrities />
      <Footer />
    </div>
  );
}
export default Layout;
