import React from "react";
import Layout from "../Layout/Index";
import { AiOutlineHome } from "react-icons/ai";

const About = () => {
  return (
    <Layout>
      <div className="container">
        <div className="about">
          <div className="flex items-center pt-[50px] gap-3">
            <AiOutlineHome className="text-blue-600 w-[30px] h-[30px]" />
            <h1 className="text-[24px]">Biz haqimizda</h1>
          </div>
            <h1 className="text-[46px] pt-[30px]">Biz haqimizda</h1>
          <div className="pt-[30px] max-w-[700px]">
            <p className="text-[20px] pb-[22px] text-[#333333]">
              Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
              musobaqalarni tashkil etishda davom etadi. Biz bu gal
              markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner, frontend
              va backend dasturchilarni "bir dasturxon atrofida" to'plashga
              qaror qildik.
            </p>
            <p className="text-[20px] pb-[22px] text-[#333333]">
              Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
              musobaqalarni tashkil etishda davom etadi. Biz bu gal
              markazimizdagi uch soha vakillari, ya'ni UX/UI dizayner, frontend
              va backend dasturchilarni "bir dasturxon atrofida" to'plashga
              qaror qildik.
            </p>
            <p className="text-[20px] pb-[22px] text-[#333333]">
              Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan iborat 8 ta
              guruh tashkil qilinib, ularga ikki hafta muddat ichida Toshkent
              shahridagi har qanday onlayn va oflayn tadbirlar to'g'risida
              e'lonli ma'lumot beruvchi uch bosqichli veb sahifa tayyorlash
              vazifasi topshirildi.
            </p>
            <p className="text-[20px] pb-[22px] text-[#333333]">
                 Demak, roppa-rosa 2 haftadan
              keyin ishtirokchilarning qilgan ishlari chetdan kelgan mehmonlar
              tomonidan xolis baholanib, dastlabki uchta o'rin egalari
              qimmatbaho sovg'alar bilan taqdirlanadi. Biz barchaga omad tilab
              qolamiz.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
