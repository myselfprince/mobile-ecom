import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { IoIosCloseCircle } from "react-icons/io";
import { useRef } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
const Header = () => {

  const toggleCart = ()=>{
    if(ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if(!ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }

  }

  const ref = useRef()

  return (

    <>
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image height={40} width={40} src={"/logo png.png"} alt="logo"/>
      <span className="ml-3 text-xl">MobileMart</span>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
    <Link href={"/"}className="mr-5 hover:text-gray-900">Home</Link>
      <Link href={"/mobile"}className="mr-5 hover:text-gray-900">Mobiles</Link>
      <Link href={"/brands"}className="mr-5 hover:text-gray-900">Brands</Link>
      <Link href={"/accessories"}className="mr-5 hover:text-gray-900">Accessories</Link>
    </nav>

    

    <div className='flex'>

    <div className="relative mx-auto text-gray-600 border-2 rounded-xl mr-5">
            <input
              type="search"
              placeholder="Search"
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border-1"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <ImSearch />
            </button>
          </div>


      <button onClick={toggleCart} className="cursor-pointer inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-xl mt-4 md:mt-0 text-black">
        <AiOutlineShoppingCart />
      </button>
    </div>


    <div ref={ref} className="z-20 h-fit w-72 sideCart absolute top-0 right-0 bg-gray-200 px-8 py-10 transform transition-transform translate-x-full">
      <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
      <span onClick={toggleCart} className='absolute top-2 right-2 text-xl cursor-pointer text-gray-500'><IoIosCloseCircle />
        </span>

    <ol className='list-decimal font-semibold'>
      <li> 
        <div className="item flex my-5">
        <div className='w-2/3 font-semibold'>This is my Shopping cart Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        <div className='flex items-center justify-center w-1/3 font-semibold'><CiCircleMinus className='text-xl cursor-pointer text-gray-900'/><span className='mx-2'>1</span><CiCirclePlus className='text-xl cursor-pointer text-gray-900'/></div>
        </div>
      </li>
      <li> 
        <div className="item flex my-5">
        <div className='w-2/3 font-semibold'>This is my Shopping cart Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        <div className='flex items-center justify-center w-1/3 font-semibold'><CiCircleMinus className='text-xl cursor-pointer text-gray-900'/><span className='mx-2'>1</span><CiCirclePlus className='text-xl cursor-pointer text-gray-900'/></div>
        </div>
      </li>
      <li> 
        <div className="item flex my-5">
        <div className='w-2/3 font-semibold'>This is my Shopping cart Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        <div className='flex items-center justify-center w-1/3 font-semibold'><CiCircleMinus className='text-xl cursor-pointer text-gray-900'/><span className='mx-2'>1</span><CiCirclePlus className='text-xl cursor-pointer text-gray-900'/></div>
        </div>
      </li>
      <li> 
        <div className="item flex my-5">
        <div className='w-2/3 font-semibold'>This is my Shopping cart Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        <div className='flex items-center justify-center w-1/3 font-semibold'><CiCircleMinus className='text-xl cursor-pointer text-gray-900'/><span className='mx-2'>1</span><CiCirclePlus className='text-xl cursor-pointer text-gray-900'/></div>
        </div>
      </li>
      <li> 
        <div className="item flex my-5">
        <div className='w-2/3 font-semibold'>This is my Shopping cart Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        <div className='flex items-center justify-center w-1/3 font-semibold'><CiCircleMinus className='text-xl cursor-pointer text-gray-900'/><span className='mx-2'>1</span><CiCirclePlus className='text-xl cursor-pointer text-gray-900'/></div>
        </div>
      </li>
     
    </ol>

    <button className="flex mx-auto mt-9 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Checkout</button>
    <button className="flex mx-auto mt-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Clear Cart</button>

     
    </div>
  </div>
</header>
    
    
</>
  )
}

export default Header