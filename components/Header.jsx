/* eslint-disable @next/next/no-img-element */
import React, {useState} from "react"
import Link from "next/link"
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai"
import { FiMenu } from "react-icons/fi"
import { useStateContext } from "../context/StateContext"
import Cart from '../components/Cart'
const Header = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()
  return (
    <header className=" h-20 ">
      <nav className="max-w-7xl mx-auto flex gap-6 items-center h-full px-5 justify-between">
        <Link href={`/`}>
          <div className="flex-1">
            <img src="/logo.png" className="w-16 cursor-pointer dark:invert" alt="" />
          </div>
        </Link>
        <div className="relative cursor-pointer" onClick={() => setShowCart(true)}>
          <AiOutlineShopping size={24} />{" "}
          <span className="absolute -bottom-1 -right-1 bg-red-500 text-white rounded-full h-4 w-4 text-xs grid place-items-center">
            {totalQuantities}
          </span>
        </div>
        <AiOutlineSearch size={24} />
        <FiMenu className="lg:hidden" size={24} />
      </nav>
      <Cart />
    </header>
  )
}

export default Header
