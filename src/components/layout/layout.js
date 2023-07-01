/** @jsxImportSource theme-ui */

import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

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
      {/* <Footer /> */}
    </div>
  );
}
export default Layout;
