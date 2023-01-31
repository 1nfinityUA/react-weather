import React from "react";
import "./footer.css";
import { useSelector } from "react-redux";

const Footer = () => {
    const black = useSelector((state) => state.weatherSlice.black);
    return (
        <div className={black ? "footer-black" : "footer"}>
            <div className="footer__prosto">© All rights reserved</div>
            <div className="footer__author">Vadym Bobra</div>
        </div>
    );
};

export default Footer;
