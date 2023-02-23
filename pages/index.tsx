import Head from 'next/head'
import Image from 'next/image'
import About from '../components/organisms/About';
import Service from '../components/organisms/Service';
import Portfolio from '../components/organisms/Portfolio';
import styles from '../styles/Home.module.css'
import Contact from '../components/organisms/Contact';
import Footer from '../components/organisms/Footer';
import Banner from '../components/organisms/Banner';

export default function Home() {
  const handleClickScroll = (value: string) => {
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <section className="w-full lg:w-[1280px] lg:mx-auto">
        <nav className="flex w-[100%] m-auto px-7 lg:px-32 py-7 justify-between items-center z-10 text-center top-0 transition-all" id="navbar">
          <div className="">
            <img src="/assets/text_logo_c.png" alt="Software House Difersoft Indonesia" className="h-10 lg:h-14 w-auto" />
          </div>

          {/* <!-- Desktop Nav Menu --> */}
          <div className="menu-navbar w-96 lg:grid grid-cols-5 justify-between gap-10 hidden ">
            <button className="text-right text-main-yellow hover:text-dark-purple hover:font-bold transition-colors nav-menu " onClick={() => {
              handleClickScroll('home');
            }}>Home </button>
            <button className="text-right text-main-yellow hover:text-dark-purple hover:font-bold transition-colors nav-menu" onClick={() => {
              handleClickScroll('about');
            }}>About</button>
            <button className="text-right text-main-yellow hover:text-dark-purple hover:font-bold transition-colors nav-menu " onClick={() => {
              handleClickScroll('service');
            }}>Services</button>
            <button className="text-right text-main-yellow hover:text-dark-purple hover:font-bold transition-colors nav-menu" onClick={() => {
              handleClickScroll('portfolio');
            }}>Portfolio</button>
            <button className="text-right text-main-yellow hover:text-dark-purple hover:font-bold transition-colors nav-menu"
              onClick={() => {
                handleClickScroll('contact');
              }}>Contact</button>
          </div>

          {/* <!-- Hamburget Menu --> */}
          <div className="hamburger-menu lg:hidden">
            <div className="w-5 h-1 bg-main-purple rounded-lg mb-1"></div>
            <div className="w-5 h-1 bg-main-purple rounded-lg mb-1"></div>
            <div className="w-5 h-1 bg-main-purple rounded-lg"></div>
          </div>
        </nav>
      </section>
      {/* <!-- END: Navigation Top-- > */}

      {/* < !--START : Mobile Nav Menu-- > */}
      <div className="w-screen h-screen lg:hidden  bg-main-yellow fixed px-8 py-32 hidden mobile-nav transition-opacity ">
        <div className="grid grid-row-4 justify-around h-full w-full mx-auto text-center">
          <a href="#home" className="text-dark-purple text-[32px] font-bold menu-list scroll-m-[-20px]">Home</a>
          <a href="#about" className="text-dark-purple text-[32px] font-bold menu-list scroll-m-3">About</a>
          <a href="#portfolio" className="text-dark-purple text-[32px] font-bold menu-listz">Portfolio</a>
          <a href="#contact" className="text-dark-purple text-[32px] font-bold menu-list">Contact</a>
        </div>
      </div>
      {/* <!--END : Mobile Nav Menu-- > */}


      <Banner />
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />

    </>
  )
}
