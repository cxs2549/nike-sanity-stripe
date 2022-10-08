/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react"
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai"

import { client, urlFor } from "../../lib/client"
import { useStateContext } from "../../context/StateContext"

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product
  const { onAdd } = useStateContext()
  return (
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-2 mt-8">
      <img src={urlFor(image[0])} alt="" className="max-w-lg rounded-2xl px-5" />
      <div className="px-5 lg:px-0">
        <h1 className="text-lg lg:text-3xl font-extrabold">{name}</h1>
        <h2 className="text-base lg:text-xl opacity-50">{details}</h2>
        <h3 className="font-medium lg:text-xl">${price}</h3>
        <button className="bg-black dark:bg-white dark:text-black text-white rounded-full px-4 py-2 font-medium mt-8" onClick={() => onAdd(product, 1)}>Add to Cart</button>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `

  const products = await client.fetch(query)

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query)
  const products = await client.fetch(productsQuery)


  return {
    props: { products, product },
  }
}

export default ProductDetails
