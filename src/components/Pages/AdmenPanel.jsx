import React from 'react'
import {AiFillHome,AiFillSetting,AiFillBoxPlot,AiOutlineSearch} from "react-icons/ai"
import {FcStatistics} from "react-icons/fc"
import {BsArrowLeftSquareFill} from "react-icons/bs"
import {BsFillBellFill} from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"
import Img from "../../assets/images/img.png"
const AdmenPanel = () => {
  return (
    <div>
        <div className='flex'>
            <div className='hero-wrap max-w-[300px] bg-blue-500 h-[500vh] flex flex-col pl-7 pr-5'>
                <h1 className='text-[36px] mt-5 text-white'>Pressa</h1>
                <div className='flex items-center gap-2 mt-[50px]'>
                    <AiFillHome className='text-white w-[20px] h-[20px]'/>
                    <h1 className='text-white text-[18px]'>Bosh sahifa</h1>
                </div>
                <div className='flex items-center gap-2 pt-5'>
                    <FcStatistics className='text-white w-[20px] h-[20px]'/>
                    <h1 className='text-white text-[18px]'>Statistik</h1>
                </div>
                <div className='flex items-center gap-2 pt-5'>
                    <AiFillBoxPlot className='text-white w-[20px] h-[20px]'/>
                    <h1 className='text-white text-[18px]'>O’chirilganlar</h1>
                </div>
                <div className='flex items-center gap-2 pt-5'>
                    <AiFillSetting className='text-white w-[20px] h-[20px]'/>
                    <h1 className='text-white text-[18px]'>Sozlamalar</h1>
                </div>
                <div className='flex items-center gap-2 pt-5'>
                    <BsArrowLeftSquareFill className='text-white w-[15px] h-[15px]'/>
                    <h1 className='text-white text-[18px]'>chiqish</h1>
                </div>
            </div>
            <div className='w-full pl-[44px] pt-5 pr-[80px]'>
                <div className='flex  justify-between bell'>
                    <div className='relative w-[100%] max-w-[500px] flex'>
                    <input className='pl-6 w-[100%] rounded max-w-[500px] pt-1 pb-1' type="text" placeholder='search'/> 
                    <AiOutlineSearch className='absolute top-2 left-1 text-blue-500'/>
                     <div className='hamburger pl-2'><GiHamburgerMenu className='text-blue-500 w-[30px] h-[30px]'/></div>
                    </div>
                    <div className='flex items-center gap-5'>
                    <div>
                    <BsFillBellFill className='text-blue-500  w-[25px] h-[25px]'/>
                    </div>
                    <img className='w-[50px] h-[50px]' src={Img} alt="img" />
                    <h1>Abbos Jazinikov</h1>
                    </div>
                </div>
                <div className='flex items-center justify-between pt-8 panel'>
                   <div className='flex items-center panel2'>
                   <button className='w-[150px] bg-blue-700 text-white pt-2 pb-2 rounded-xl'>Kutilmoqda</button>
                    <p className='pl-[50px] qabul'>Qabul qilingan</p>
                    <p className='pl-[50px] qabul'>Rad etilgan</p>
                   </div>
                   <div className='flex items-center gap-2 panel1'>
                    <p>oxirgilar</p>
                    <input type="radio" />
                    <p>Eng so'ngilar</p>
                    <input type="radio" />
                   </div>
                </div>
                <div className='pt-[50px]'>
                    <h1 className='title1'>Eng so'ngi xabarnomalar</h1>
                    <div className='flex items-center justify-between pt-5 wrapper'>
                        <h1 className='text-[28px] max-w-[700px] wrap-text'>Ux Ui dan masterklass o’tkazib yubormang Yoshlar telekanalida</h1>
                        <div className='wrapper-btn'>
                        <button className='wrap-btn w-[120px] rounded-md pt-2 pb-2 bg-[#D4E0E9] mr-10 text-[#333333]'>Bekor qilish</button>
                        <button className='w-[120px] rounded-md pt-2 pb-2 bg-blue-500 mt-2 text-white'>Tasdiqlash</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-around pt-5 box'>
                        <p className='text-blue-500 text-[18px]'>Abbos Janizakov</p>
                        <p className='text-blue-500 text-[18px]'>+998 90 123-45-67</p>
                        <p className='text-blue-500 text-[18px]'>30/01/2022</p>
                        <p className='text-blue-500 text-[18px]'>15:00</p>
                        <p className='text-blue-500 text-[18px]'>UI/UX dizayner</p>
                    </div>
                </div>
                <div className='pt-[50px]'>
                    <div className='flex items-center justify-between pt-5 wrapper'>
                        <h1 className='text-[28px] max-w-[700px] wrap-text'>Ux Ui dan masterklass o’tkazib yubormang Yoshlar telekanalida</h1>
                        <div className='wrapper-btn'>
                        <button className='wrap-btn w-[120px] rounded-md pt-2 pb-2 bg-[#D4E0E9] mr-10 text-[#333333]'>Bekor qilish</button>
                        <button className='w-[120px] rounded-md pt-2 pb-2 bg-blue-500 mt-2 text-white'>Tasdiqlash</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-around pt-5 box'>
                        <p className='text-blue-500 text-[18px]'>Abbos Janizakov</p>
                        <p className='text-blue-500 text-[18px]'>+998 90 123-45-67</p>
                        <p className='text-blue-500 text-[18px]'>30/01/2022</p>
                        <p className='text-blue-500 text-[18px]'>15:00</p>
                        <p className='text-blue-500 text-[18px]'>UI/UX dizayner</p>
                    </div>
                </div>
                <div className='pt-[50px]'>
                    <div className='flex items-center justify-between pt-5 wrapper'>
                        <h1 className='text-[28px] max-w-[700px] wrap-text'>Ux Ui dan masterklass o’tkazib yubormang Yoshlar telekanalida</h1>
                        <div className='wrapper-btn'>
                        <button className='wrap-btn w-[120px] rounded-md pt-2 pb-2 bg-[#D4E0E9] mr-10 text-[#333333]'>Bekor qilish</button>
                        <button className='w-[120px] rounded-md pt-2 pb-2 bg-blue-500 mt-2 text-white'>Tasdiqlash</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-around pt-5 box'>
                        <p className='text-blue-500 text-[18px]'>Abbos Janizakov</p>
                        <p className='text-blue-500 text-[18px]'>+998 90 123-45-67</p>
                        <p className='text-blue-500 text-[18px]'>30/01/2022</p>
                        <p className='text-blue-500 text-[18px]'>15:00</p>
                        <p className='text-blue-500 text-[18px]'>UI/UX dizayner</p>
                    </div>
                </div>
                <div className='pt-[50px]'>
                    <div className='flex items-center justify-between pt-5 wrapper'>
                        <h1 className='text-[28px] max-w-[700px] wrap-text'>Ux Ui dan masterklass o’tkazib yubormang Yoshlar telekanalida</h1>
                        <div className='wrapper-btn'>
                        <button className='wrap-btn w-[120px] rounded-md pt-2 pb-2 bg-[#D4E0E9] mr-10 text-[#333333]'>Bekor qilish</button>
                        <button className='w-[120px] rounded-md pt-2 pb-2 bg-blue-500 mt-2 text-white'>Tasdiqlash</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-around pt-5 box'>
                        <p className='text-blue-500 text-[18px]'>Abbos Janizakov</p>
                        <p className='text-blue-500 text-[18px]'>+998 90 123-45-67</p>
                        <p className='text-blue-500 text-[18px]'>30/01/2022</p>
                        <p className='text-blue-500 text-[18px]'>15:00</p>
                        <p className='text-blue-500 text-[18px]'>UI/UX dizayner</p>
                    </div>
                </div>
                <div className='pt-[50px]'>
                    <div className='flex items-center justify-between pt-5 wrapper'>
                        <h1 className='text-[28px] max-w-[700px] wrap-text'>Ux Ui dan masterklass o’tkazib yubormang Yoshlar telekanalida</h1>
                        <div className='wrapper-btn'>
                        <button className='wrap-btn w-[120px] rounded-md pt-2 pb-2 bg-[#D4E0E9] mr-10 text-[#333333]'>Bekor qilish</button>
                        <button className='w-[120px] rounded-md pt-2 pb-2 bg-blue-500 mt-2 text-white'>Tasdiqlash</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-around pt-5 box'>
                        <p className='text-blue-500 text-[18px]'>Abbos Janizakov</p>
                        <p className='text-blue-500 text-[18px]'>+998 90 123-45-67</p>
                        <p className='text-blue-500 text-[18px]'>30/01/2022</p>
                        <p className='text-blue-500 text-[18px]'>15:00</p>
                        <p className='text-blue-500 text-[18px]'>UI/UX dizayner</p>
                    </div>
                </div>
                <div className='pt-[50px]'>
                    <div className='flex items-center justify-between pt-5 wrapper'>
                        <h1 className='text-[28px] max-w-[700px] wrap-text'>Ux Ui dan masterklass o’tkazib yubormang Yoshlar telekanalida</h1>
                        <div className='wrapper-btn'>
                        <button className='wrap-btn w-[120px] rounded-md pt-2 pb-2 bg-[#D4E0E9] mr-10 text-[#333333]'>Bekor qilish</button>
                        <button className='w-[120px] rounded-md pt-2 pb-2 bg-blue-500 mt-2 text-white'>Tasdiqlash</button>
                        </div>
                    </div>
                    <div className='flex items-center justify-around pt-5 box'>
                        <p className='text-blue-500 text-[18px]'>Abbos Janizakov</p>
                        <p className='text-blue-500 text-[18px]'>+998 90 123-45-67</p>
                        <p className='text-blue-500 text-[18px]'>30/01/2022</p>
                        <p className='text-blue-500 text-[18px]'>15:00</p>
                        <p className='text-blue-500 text-[18px]'>UI/UX dizayner</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdmenPanel