/*import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'*/
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sales from '../components/Sales'
import Analytics from '../components/Analytics'
import Admin_op from '../components/Admin_op'
import Finances from '../components/Finances'
import Catalogue from '../components/Catalogue'
export default function Home() {
  return (
    <div>
    <Navbar/>
    <Sales/>
    <Analytics/>
    <Admin_op/>
    <Finances/>
    <Catalogue/>
    <Footer/>
    </div>
  )
}
