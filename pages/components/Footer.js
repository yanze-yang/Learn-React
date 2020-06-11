import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <Link href="/main">
        <a>-&gt; Go Home</a>
      </Link>
    </div>
  );
};

export default Footer;
