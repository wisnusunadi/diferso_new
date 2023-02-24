import Head from 'next/head'
import Image from 'next/image'
import About from '../components/organisms/About';
import Service from '../components/organisms/Service';
import Portfolio from '../components/organisms/Portfolio';
import styles from '../styles/Home.module.css'
import Contact from '../components/organisms/Contact';
import Footer from '../components/organisms/Footer';
import Banner from '../components/organisms/Banner';
import Navbar from '../components/organisms/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}
