import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright MayaDevⓒ {year}</p>
    </footer>
  );
}

export default Footer;
