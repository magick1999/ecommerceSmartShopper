import React from "react";
import Link from "next/link";

import SocialIcons from "../../other/SocialIcons";

export default function FooterInfomation() {
  return (
    <div className="footer-info">
      <Link href={process.env.PUBLIC_URL + "/"}>
        <a className="footer-info__logo">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
            alt="Ogami Logo"
          />
        </a>
      </Link>
      <ul>
        <li>Address: Bucharest, Romania</li>
        <li>Phone: +00 123 456 789</li>
        <li>Email: tianbogdan@gmail.com</li>
      </ul>
      <SocialIcons type="primary" shape="circle" className="-btn-light" />
    </div>
  );
}
