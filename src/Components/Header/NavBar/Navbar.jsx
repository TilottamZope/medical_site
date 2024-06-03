import { Button } from "@mui/material";
import React from "react";
import { MdMenu } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { TbBrandSketch } from "react-icons/tb";
import { FcAbout } from "react-icons/fc";
import { FaRegNewspaper } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 navPart1">
              <Button className="allCatTab align-items-center">
                <span className="icon1 me-2">
                  <MdMenu />
                </span>
                <span className="text">ALL CATEGORIES</span>
                <span className="icon2 ms-2">
                  <FaAngleDown />
                </span>
              </Button>
            </div>
            <div className="col-sm-9 navPart2 d-flex align-items-center">
              <ul className="list list-inline ms-auto">
                <li className="list-inline-item">
                  <Link to="/">
                    <IoMdHome /> &nbsp;Home
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <FcAbout /> &nbsp;About Us
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <FaRegNewspaper /> &nbsp;Blog
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <MdCall /> &nbsp;Contact Us
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <TbBrandSketch /> &nbsp;Top Brands
                  </Link>
                  <div className="submenu">
                  <Link to="/">
                    Detol
                  </Link><Link to="/">
                    Nivea
                  </Link><Link to="/">
                    Himalaya
                  </Link><Link to="/">
                    Dabur
                  </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <BiSolidOffer /> &nbsp;Offers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
