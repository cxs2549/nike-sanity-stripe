import React from "react"
import { client } from "../lib/client"
import Product from "../components/Product"
import Hero from "../components/Hero"
const Home = ({ products }) => {
  return (
    <div>
      <Hero />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 p-5 max-w-7xl mx-auto items-center justify-center">
        {products.map((prod) => (
          <Product key={prod._id} {...prod} />
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  return {
    props: { products },
  }
}

export default Home
