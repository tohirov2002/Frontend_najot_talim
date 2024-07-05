import React from "react";
import { BsTelephoneFill,BsInstagram,BsTelegram} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-700 mt-[70px] pt-4 pb-4">
      <div className="container">
        <div className="flex items-center justify-between footer">
          <h1 className="text-[36px]  text-[#FFFFFF]">Pressa</h1>
          <div className="flex  justify-center footer">
           <div className="flex items-center">
           <h1 className="text-white pr-[70px] footer-text">Biz haqimizda</h1>
            <h1 className="text-white pr-[70px] footer-text">Savol va Javoblar</h1>
           </div>
              <div className="flex items-center">
              <BsTelephoneFill className="text-white w-[20px] h-[20px]" />
              <p className="text-white pr-[40px]">+71 200-11-02</p>
           <FaFacebookF className="text-white w-[20px] h-[20px] mr-3 hover:cursor-pointer"/>
            <BsInstagram className="text-white w-[20px] h-[20px] mr-3 hover:cursor-pointer"/>
            <BsTelegram className="text-white w-[20px] h-[20px] hover:cursor-pointer"/>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
