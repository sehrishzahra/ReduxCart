import React from 'react'
import apple from '../../assets/1200px-Apple_gray_logo 1.png'
import arrow from '../../assets/icons arrow-right.png'
import mobile from '../../assets/hero_endframe__cvklg0xk3w6e_large 2.svg'
import { Link } from 'react-router-dom'
function Banner() {
    return (
        <div className="flex justify-center items-center w-full h-[65vh]">
            <div className='bg-black w-11/12 flex xl:gap-28 gap-8 p-8 pl-14'>
                <div className=" flex flex-col gap-5 xl:ml-10">
                    <div className="flex items-center gap-5 ">
                        <img src={apple} alt="" />
                        <p className='text-white text-sm font-normal'>Iphone 14 Series</p>
                    </div>
                    <div className="">
                        <h1 className='text-white text-5xl font-semibold leading-normal'>Up to 10% <br/> off Voucher </h1>
                    </div>
                    <div className="">
                        <Link to={"/products"}>
                        <button className='flex items-center gap-2 justify-center'>
                           <p className='text-white text-sm font-normal underline underline-offset-8 tracking-wide'> Shop now</p>
                            <img src={arrow} alt="" className='mt-2.5' />
                        </button>
                        </Link>
 
                    </div>
                </div>
                <div className="">
                    <img src={mobile} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner
