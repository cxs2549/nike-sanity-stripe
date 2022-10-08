import Header from "../components/Header"
import "../styles/globals.scss"
import {StateContext} from '../context/StateContext'
import { Toaster } from "react-hot-toast"
import Footer from '../components/Footer'
function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Toaster />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </StateContext>
  )
}

export default MyApp
