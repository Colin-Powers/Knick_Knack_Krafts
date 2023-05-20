import React from "react";
import { BsFacebook } from "react-icons/bs";
import { SiEtsy } from "react-icons/si";

const Footer = () => {
  return (
    <footer class="bg-[#008B8B] text-center items-center justify-center text-white text-2xl pt-20">
      <div>
        <p>inquiry@knicknackrafts.com</p>
      </div>
      <div>
        <ul className="flex justify-center items-center py-5">
          <li>
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-[#fff]"
              href="https://www.facebook.com/KnicKnacKraftsByJennie"
            >
              <BsFacebook size={30} />
            </a>
          </li>
          <li>
            {" "}
            <a
              className="flex justify-between items-center w-full text-[#fff] py-1"
              href="https://www.etsy.com/shop/KnicKnacksByJennie"
              target="_blank"
            >
              <SiEtsy size={28} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
