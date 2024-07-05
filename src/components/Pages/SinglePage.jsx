import React from "react";

import Layout from "../Layout/Index";
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  BsFillStopwatchFill,
  BsFillShareFill,
  BsYoutube,
} from "react-icons/bs";
import { MdOnlinePrediction } from "react-icons/md";
import { CgTwitter } from "react-icons/cg";
import { FaFacebookF, FaTelegram } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { GoCommentDiscussion } from "react-icons/go";
import Images from "../../assets/images/dizayner.svg";
// import Siveper from "./Sliyder";

const SinglePage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="pt-[40px]">
          <div className="flex items-center gap-4">
            <AiOutlineHome className="w-[30px] h-[30px] text-blue-600" />
            <p className="text-[24px] text-[#000000]">Bizes</p>
          </div>
        </div>
        <div className="pt-[30px] flex ">
          <div className="border-r-4 border-[#3333]">
            <h1 className="text-[24px] text-[#333333] max-w-[300px]">
              Alisher Isaevdan biznes va IT bo’yicha master klass
            </h1>
            <div className="flex items-center pt-5">
              <div className="flex items-center gap-2">
                <AiOutlineCalendar className="text-blue-500 w-[20px] h-[20px]" />
                <p>17 / 01 / 2022</p>
              </div>
              <div className="flex items-center gap-2 pl-[40px]">
                <BsFillStopwatchFill className="text-blue-500 w-[20px] h-[20px]" />
                <p>15:00</p>
              </div>
            </div>
            <div className="flex items-center pt-3">
              <MdOnlinePrediction className="text-blue-500 w-[20px] h-[20px]" />
              <p className="pl-3">Onlein</p>
            </div>
            <div className="flex items-center pt-9">
              <BsFillShareFill />
              <p className="pl-4">Ulashing</p>
            </div>
            <div className="flex items-center pt-3 gap-2">
              <FaFacebookF className="text-blue-500 w-[15px] h-[15px]" />
              <CgTwitter className="text-blue-500 w-[15px] h-[15px]" />
              <AiOutlineInstagram className="text-blue-500 w-[15px] h-[15px]" />
              <AiOutlineTwitter className="text-blue-500 w-[15px] h-[15px]" />
              <FaTelegram className="text-blue-500 w-[15px] h-[15px]" />
            </div>
          </div>
          <div className="pl-[100px]">
            <h1 className="text-[36px] max-w-[500px] mb-3 text-[#33333]">
              Alisher Isaevdan biznes va IT bo’yicha master klass
            </h1>
            <p className="max-w-[550px]">
              Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
              musobaqalarni tashkil etishda davom etadi. Biz bu gal
              markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner, frontend
              va backend dasturchilarni "bir dasturxon atrofida" to'plashga
              qaror qildik.
            </p>
            <img
              className="max-w-[400px] h-[400px] mt-4"
              src={Images}
              alt="images"
            />
            <p className="max-w-[550px] pt-7">
              Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
              musobaqalarni tashkil etishda davom etadi. Biz bu gal
              markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner, frontend
              va backend dasturchilarni "bir dasturxon atrofida" to'plashga
              qaror qildik.
            </p>
            <p className="max-w-[550px] pt-7">
              Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan iborat 8 ta
              guruh tashkil qilinib, ularga ikki hafta muddat ichida Toshkent
              shahridagi har qanday onlayn va oflayn tadbirlar to'g'risida
              e'lonli ma'lumot beruvchi uch bosqichli veb sahifa tayyorlash
              vazifasi topshirildi.
            </p>
            <p className="max-w-[550px] pt-7">
              Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan
              ishlari chetdan kelgan mehmonlar tomonidan xolis baholanib,
              dastlabki uchta o'rin egalari qimmatbaho sovg'alar bilan
              taqdirlanadi. Biz barchaga omad tilab qolamiz.
            </p>
            <div className="flex items-center gap-3 pt-4">
              <SiGooglemaps className="text-blue-500 w-[20px] h-[20px] " />
              <p className="text-blue-500">Google kartadan aniqlash</p>
              <BsYoutube className="text-blue-500 w-[20px] h-[20px] " />
              <p className="text-blue-500">Youtubedan tomosha qilish</p>
            </div>
            <div className="mt-[70px]">
              <div className=" flex items-center gap-3">
              <GoCommentDiscussion className="text-blue-500 w-[20px] h-[20px] "/>
              <p className="text-xl">izohlar</p>
              </div>
              <form className="w-[100%] flex flex-col gap-3 mt-5"> 
                <input placeholder="izoh kiriting" type="text" className="pl-3 border-black w-[100%] max-w-[300px] p-2"/>
                <button className="text-white bg-blue-500 pt-1 pb-1 w-[70px] rounded text-md">Yuborish</button>
              </form>
              {/* <Siveper/> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SinglePage;
