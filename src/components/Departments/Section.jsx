import React from "react";
import { AiOutlineCalendar,AiFillEye } from "react-icons/ai";
import { HiStatusOnline } from "react-icons/hi";
import { FcBusinessman } from "react-icons/fc";
import { GiDwennimmen } from "react-icons/gi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { BsFillStopwatchFill} from "react-icons/bs";
import Dizayner from "../../assets/images/dizayner.svg";
import Image from "../../assets/images/image.svg"
import Image1 from "../../assets/images/image1.svg"
import { Link } from "react-router-dom";
const Section = () => {
  return (  
      <section>
      <div className="hero-top flex items-center justify-center mt-[-30px]">
        <div className="hero pl-5 bg-white  shadow-2xl  max-w-[990px] rounded-md flex  items-center justify-center gap-5">
          <div className="flex items-center gap-2">
            <AiOutlineCalendar className="text-blue-500" />
            <select>
              <option>22 / 02 / 2022</option>
              <option>16 / 06 / 2023</option>
              <option>17 / 07 / 2023</option>
              <option>16 / 06 / 2023</option>
            </select>
          </div>
          <div className="flex items-center gap-2 ">
            <GiDwennimmen className="text-blue-500" />
            <select>
              <option>Bo’lim tanlang</option>
              <option>web dasturlash</option>
              <option>Mobile dasturlash</option>
              <option>Grafik dizayn</option>
              <option>Menejment</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <HiStatusOnline className="text-blue-500" />
            <select>
              <option>Online / Offline</option>
              <option>onlein</option>
              <option>Offline</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <FcBusinessman className="text-blue-500" />
            <select>
              <option>Ism familya</option>
              <option>Akbar Turdiyev</option>
              <option>Yoqubov Temur</option>
              <option>Sohib Sharipov</option>
              <option>Sardor Qodirov</option>
              <option>Dilshod Rahmanov</option>
            </select>
          </div>
          <button className="rounded bg-blue-500 text-white pt-5 pb-5 w-[70px]">
            Izlash
          </button>
        </div>
      </div>
      <div className="container">
        <div>
          <h1 className="title text-[32px] pt-[70px]">Oxirgi e’lonlar</h1>
        </div>
        <div className="hero-div pt-[50px] flex items-center justify-between">
          <Link to={'/singlePage'} className="max-w-[400px] shadow-xl rounded-xl">
            <img
              className="max-w-[350px] h-[350px] rounded hero-img"
              src={Dizayner}
              alt="dizayner"
            />
            <h1 className="text-[24px] max-w-[350px] text-center hero-title">
              Alisher Isaevdan biznes va IT bo’yicha master klass
            </h1>
             <div className="flex items-center justify-around">
             <div>
             <div className="flex items-center gap-2 pt-2">
            <FcBusinessman className="icon text-blue-500 w-[25px] h-[25px]" />
            <p className="text-[15px] icon-text">Alisher Isaev</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <AiOutlineCalendar className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">17 / 07 / 2023</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <HiStatusOnline className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">onlein</p>
             </div>
             </div>
             <div>
             <div className="flex items-center gap-2 pt-2">
            <HiOutlinePresentationChartLine className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">tadbirkor</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <BsFillStopwatchFill className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">15:00</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <AiFillEye className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">2550</p>
             </div>
             </div>            
             </div>
          </Link>
          <Link to={'/singlePage'} className="max-w-[400px] shadow-xl rounded-xl">
            <img
              className="max-w-[350px] h-[350px] rounded hero-img"
              src={Dizayner}
              alt="dizayner"
            />
            <h1 className="text-[24px] max-w-[350px] text-center hero-title">
              Alisher Isaevdan biznes va IT bo’yicha master klass
            </h1>
             <div className="flex items-center justify-around">
             <div>
             <div className="flex items-center gap-2 pt-2">
            <FcBusinessman className="text-blue-500 w-[25px] h-[25px]" />
            <p className="text-[15px]">Alisher Isaev</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <AiOutlineCalendar className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">17 / 07 / 2023</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <HiStatusOnline className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">onlein</p>
             </div>
             </div>
             <div>
             <div className="flex items-center gap-2 pt-2">
            <HiOutlinePresentationChartLine className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">tadbirkor</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <BsFillStopwatchFill className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">15:00</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <AiFillEye className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">2550</p>
             </div>
             </div>            
             </div>
          </Link>
          <Link to={'/singlePage'} className="max-w-[400px] shadow-xl rounded-xl">
            <img
              className="max-w-[350px] h-[350px] rounded hero-img"
              src={Dizayner}
              alt="dizayner"
            />
            <h1 className="text-[24px] max-w-[350px] text-center hero-title">
              Alisher Isaevdan biznes va IT bo’yicha master klass
            </h1>
             <div className="flex items-center justify-around">
             <div>
             <div className="flex items-center gap-2 pt-2">
            <FcBusinessman className="text-blue-500 w-[25px] h-[25px]" />
            <p className="text-[15px]">Alisher Isaev</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <AiOutlineCalendar className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">17 / 07 / 2023</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <HiStatusOnline className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">onlein</p>
             </div>
             </div>
             <div>
             <div className="flex items-center gap-2 pt-2">
            <HiOutlinePresentationChartLine className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">tadbirkor</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <BsFillStopwatchFill className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">15:00</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <AiFillEye className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">2550</p>
             </div>
             </div>            
             </div>
          </Link>
        </div>
        <div className="hero-div pt-[50px] flex items-center justify-between">
          <Link to={'/singlePage'} className="max-w-[400px] shadow-xl rounded-xl">
            <img
              className="max-w-[350px] h-[350px] rounded hero-img"
              src={Dizayner}
              alt="dizayner"
            />
            <h1 className="text-[24px] max-w-[350px] text-center hero-title">
              Alisher Isaevdan biznes va IT bo’yicha master klass
            </h1>
             <div className="flex items-center justify-around">
             <div>
             <div className="flex items-center gap-2 pt-2">
            <FcBusinessman className="icon text-blue-500 w-[25px] h-[25px]" />
            <p className="text-[15px] icon-text">Alisher Isaev</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <AiOutlineCalendar className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">17 / 07 / 2023</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <HiStatusOnline className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">onlein</p>
             </div>
             </div>
             <div>
             <div className="flex items-center gap-2 pt-2">
            <HiOutlinePresentationChartLine className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">tadbirkor</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <BsFillStopwatchFill className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">15:00</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <AiFillEye className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">2550</p>
             </div>
             </div>            
             </div>
          </Link>
          <Link to={'/singlePage'} className="max-w-[400px] shadow-xl rounded-xl">
            <img
              className="max-w-[350px] h-[350px] rounded hero-img"
              src={Dizayner}
              alt="dizayner"
            />
            <h1 className="text-[24px] max-w-[350px] text-center hero-title">
              Alisher Isaevdan biznes va IT bo’yicha master klass
            </h1>
             <div className="flex items-center justify-around">
             <div>
             <div className="flex items-center gap-2 pt-2">
            <FcBusinessman className="text-blue-500 w-[25px] h-[25px]" />
            <p className="text-[15px]">Alisher Isaev</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <AiOutlineCalendar className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">17 / 07 / 2023</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <HiStatusOnline className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">onlein</p>
             </div>
             </div>
             <div>
             <div className="flex items-center gap-2 pt-2">
            <HiOutlinePresentationChartLine className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">tadbirkor</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <BsFillStopwatchFill className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">15:00</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <AiFillEye className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">2550</p>
             </div>
             </div>            
             </div>
          </Link>
          <Link to={'/singlePage'} className="max-w-[400px] shadow-xl rounded-xl">
            <img
              className="max-w-[350px] h-[350px] rounded hero-img"
              src={Dizayner}
              alt="dizayner"
            />
            <h1 className="text-[24px] max-w-[350px] text-center hero-title">
              Alisher Isaevdan biznes va IT bo’yicha master klass
            </h1>
             <div className="flex items-center justify-around">
             <div>
             <div className="flex items-center gap-2 pt-2">
            <FcBusinessman className="text-blue-500 w-[25px] h-[25px]" />
            <p className="text-[15px]">Alisher Isaev</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <AiOutlineCalendar className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">17 / 07 / 2023</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <HiStatusOnline className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">onlein</p>
             </div>
             </div>
             <div>
             <div className="flex items-center gap-2 pt-2">
            <HiOutlinePresentationChartLine className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">tadbirkor</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <BsFillStopwatchFill className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">15:00</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <AiFillEye className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">2550</p>
             </div>
             </div>            
             </div>
          </Link>
        </div>
        <div className="hero-div pt-[50px] flex items-center justify-between">
          <Link to={'/singlePage'} className="max-w-[400px] shadow-xl rounded-xl">
            <img
              className="max-w-[350px] h-[350px] rounded hero-img"
              src={Dizayner}
              alt="dizayner"
            />
            <h1 className="text-[24px] max-w-[350px] text-center hero-title">
              Alisher Isaevdan biznes va IT bo’yicha master klass
            </h1>
             <div className="flex items-center justify-around">
             <div>
             <div className="flex items-center gap-2 pt-2">
            <FcBusinessman className="icon text-blue-500 w-[25px] h-[25px]" />
            <p className="text-[15px] icon-text">Alisher Isaev</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <AiOutlineCalendar className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">17 / 07 / 2023</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <HiStatusOnline className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">onlein</p>
             </div>
             </div>
             <div>
             <div className="flex items-center gap-2 pt-2">
            <HiOutlinePresentationChartLine className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">tadbirkor</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <BsFillStopwatchFill className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">15:00</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <AiFillEye className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">2550</p>
             </div>
             </div>            
             </div>
          </Link>
          <Link to={'/singlePage'} className="max-w-[400px] shadow-xl rounded-xl">
            <img
              className="max-w-[350px] h-[350px] rounded hero-img"
              src={Dizayner}
              alt="dizayner"
            />
            <h1 className="text-[24px] max-w-[350px] text-center hero-title">
              Alisher Isaevdan biznes va IT bo’yicha master klass
            </h1>
             <div className="flex items-center justify-around">
             <div>
             <div className="flex items-center gap-2 pt-2">
            <FcBusinessman className="text-blue-500 w-[25px] h-[25px]" />
            <p className="text-[15px]">Alisher Isaev</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <AiOutlineCalendar className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">17 / 07 / 2023</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <HiStatusOnline className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">onlein</p>
             </div>
             </div>
             <div>
             <div className="flex items-center gap-2 pt-2">
            <HiOutlinePresentationChartLine className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">tadbirkor</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <BsFillStopwatchFill className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">15:00</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <AiFillEye className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">2550</p>
             </div>
             </div>            
             </div>
          </Link>
          <Link to={'/singlePage'} className="max-w-[400px] shadow-xl rounded-xl">
            <img
              className="max-w-[350px] h-[350px] rounded hero-img"
              src={Dizayner}
              alt="dizayner"
            />
            <h1 className="text-[24px] max-w-[350px] text-center hero-title">
              Alisher Isaevdan biznes va IT bo’yicha master klass
            </h1>
             <div className="flex items-center justify-around">
             <div>
             <div className="flex items-center gap-2 pt-2">
            <FcBusinessman className="text-blue-500 w-[25px] h-[25px]" />
            <p className="text-[15px]">Alisher Isaev</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <AiOutlineCalendar className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">17 / 07 / 2023</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <HiStatusOnline className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">onlein</p>
             </div>
             </div>
             <div>
             <div className="flex items-center gap-2 pt-2">
            <HiOutlinePresentationChartLine className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">tadbirkor</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <BsFillStopwatchFill className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">15:00</p>
             </div>
             <div className="flex items-center gap-2 pt-2">
            <AiFillEye className="text-blue-500 w-[20px] h-[20px]" />
            <p className="text-[15px]">2550</p>
             </div>
             </div>            
             </div>
          </Link>
        </div>
       <div  className="flex justify-center items-center pt-[50px] pb-[90px]">
       <button className="bg-blue-500 text-white text-[18px] rounded-md w-[150px] text-center pt-1 pb-1">Ko’proq ko’rish</button>
       </div>
       <div className="flex items-center justify-between logo">
        <div className="w-[100%] max-w-[500px]  bg-blue-700 flex items-center justify-center rounded-md">
          <h1 className="logo-text text-white text-[26px] pl-2 max-w-[200px]">E’LONLARINGIZNI BIZNI SAYTDA BERING</h1>
          <img className="logo-img max-w-[300px] h-[300px] mt-[-57px] pl-4" src={Image} alt="image" />
        </div>
        <div className="w-[100%] max-w-[500px] bg-blue-700 flex items-center justify-center rounded-md ml-2">
          <h1 className="logo-text text-white text-[26px] pl-5 max-w-[300px] texts">ENG SO’NGI MASTER KLASLAR BIZNING SAYTDA</h1>
          <img className="logo-img max-w-[300px] h-[300px] mt-[-62px] " src={Image1} alt="image1" />
        </div>
       </div>
      </div>
    </section>
  );
};

export default Section;
