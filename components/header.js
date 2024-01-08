import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link href="/">Personal</Link>
      </div>
      <div className="header-items">
        <div className="header-item">
          <Link href="/">Home</Link>
        </div>
      </div>
      <div className="header-items">
        <div className="header-item">
          <Link href="/about">About</Link>
        </div>
      </div>
      <div className="header-items">
        <div className="header-item">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
