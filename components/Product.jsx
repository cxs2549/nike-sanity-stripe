/* eslint-disable @next/next/no-img-element */
import React from "react"
import { urlFor } from "../lib/client"
import Link from "next/link"

const Product = ({ name, image, price, details, slug }) => {
  console.log(image)
  return (
    <Link href={`/product/${slug.current}`}>
        <div className="rounded-2xl hover:-translate-y-2  transition-transform duration-200 cursor-pointer overflow-hidden border max-w-xs relative">
          <div className="absolute top-2 left-2">
            <h1 className="text-xl font-extrabold dark:text-neutral-900">{name}</h1>
            <h2 className=" text-lg opacity-50 text-neutral-900">{details}</h2>
            <h3 className="font-medium text-neutral-900">${price}</h3>
          </div>
          <img src={urlFor(image[0])} alt="" />
        </div>
    </Link>
  )
}

export default Product
