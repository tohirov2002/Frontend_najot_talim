import React from 'react'
import Layout from '../Layout/Index'
import {AiOutlineHome} from "react-icons/ai"
const Elon = () => {
  return (
    <Layout>
        <div className='container'>
            <div className='flex items-center pt-8 gap-2'>
            <AiOutlineHome className='text-blue-500 w-[25px] h-[25px]'/>
            <h1 className='text-xl'>E'lon berish</h1>
            </div>
            <div className='pl-[140px]'>
            <h1 className='text-2xl pt-8'>E'lon berish</h1>
            <div className='pl-[60px]'>
                <h1 className='text-2xl pt-[50px]'>Vaqt to'nalishlarini tanlang</h1>
                <p className='text-xl pt-[10px]'>O'tkaziladigan sanani tanlang</p>
                <select className='mt-[20px]'>
                    <option>22/02/2022</option>
                    <option>22/02/2022</option>
                    <option>22/02/2022</option>
                    <option>22/02/2023</option>
                </select>
                <select className='pl-5'>
                    <option>13:00</option>
                    <option>13:00</option>
                    <option>13:00</option>
                </select>
                <div className='flex items-center mt-[30px]'>
               <div>
               <p className='text-[16px] pb-2'>Yo'nalishlarni belgilang</p>
                <select className='text-[18px] bg-[#3333] p-3 rounded gap-2'>
                    <option>Information tections</option>
                    <option>Frontend</option>
                    <option>Foundition</option>
                </select>
               </div>
                <div className='pl-[40px]'>
                <h1 className='text-[16px] pb-2'>Ichki yunalishlar</h1>
                <select className='text-[18px] bg-[#3333] p-3 rounded gap-2'>
                    <option>Java Developer</option>
                    <option>Frontend Developer</option>
                    <option>Bacend Developer</option>
                </select>
                </div>
                </div>
                <div  className='flex pt-5'>
                    <div>
                    <h1>Tadbir turi</h1>
                    <button className='bg-blue-500 w-[100px] p-2 text-white rounded-md'>Onlein</button>
                    <button className='bg-[#3333] w-[100px] p-2 text-black rounded-md ml-2'>Oflein</button>
                    </div>
                    <div className='pl-[40px]'>
                    <h1>Link kiriting</h1>
                      <div className='w-[400px]'>
                      <form className='pt-2 w-[100%]'>
                      <input className='w-[100%] max-w-[300px] p-1 bg-[#3333] rounded-md' type="text" />
                      </form>
                      </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-[32px] pt-9'>Tashkilotchi</h1>
                    <div className='flex pt-3'>
                        <div className='pl-[50px] flex items-center gap-2'>
                        <h1 className='text-[18px]'>Jismoniy shaxs</h1>
                        <input name='radio' type="radio" className='pt-[2px]' />
                        </div>
                        <div className='pl-[50px] flex items-center gap-2'>
                        <h1 className='text-[18px] pt-[2px]'>Yuridik shaxs</h1>
                        <input name='radio' type="radio" /> 
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='w-full'>
                            <h1 className='pt-3 text-xl pb-2'>Yurdik nomi</h1>
                            <h1 className='bg-[#3333] text-black w-full max-w-[300px] pl-3 pt-2 pb-2'>Najot Ta’lim MCHJ</h1>
                            <h1 className='pt-3 text-xl pb-2'>Professiya</h1>
                            <h1 className='bg-[#3333] w-full text-black max-w-[300px] pl-3 pt-2 pb-2'>Product designer</h1>
                        </div>
                        <div className='w-[100%]'>
                            <h1 className='pt-3 text-xl pb-2'>Ism Sharifi</h1>
                            <div className='w-[100%] max-w-[300px]'>
                                <input className='bg-[#3333] text-black w-[100%] max-w-[300px] pl-3 pt-2 pb-2' type="text" placeholder='Abbos Jazikov' />
                            </div>
                            <h1 className='pt-3 text-xl pb-2'>Telfon raqami</h1>
                            <div className='max-w-[300px]'>
                                <input className='bg-[#3333] text-black w-[100%] max-w-[300px] pl-3 pt-2 pb-2' type="text" placeholder='+998' />
                            </div>
                        </div>
                    </div>
                        <div className='pt-[30px] w-full'>
                            <h1>Qo'shimcha tel raqam</h1>
                            <div className='max-w-[300px] mt-2'>
                                <input className='bg-[#3333] text-black w-[100%] max-w-[300px] pl-3 pt-2 pb-2' type="text" placeholder='+998' />
                            </div>
                        </div>
                        <div>
                            <h1 className='text-xl pt-6 pb-5'>Post</h1>
                            <h1 className='text-[24px] text-[#3333]'>MAVZUNI SARLAVHASI</h1>
                        </div>
                        <h1>Description</h1>
                        <div className='max-w-[700px]'>
                            <input className='pl-2 bg-[#3333] w-[100%] max-w-[700px] p-2 rounded-md mt-2' type="text" placeholder='Description' />
                        </div>
                </div>
            </div>
            </div>
        </div>
    </Layout>
  )
}

export default Elon