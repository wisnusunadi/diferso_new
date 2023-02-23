import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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

      {/* < !--START : Section Banner-- > */}
      <section className="w-full lg:w-[1280px] lg:mx-auto mt-14 scroll-mt-48" id="home">
        <div className="m-auto w-full px-8 lg:px-32 py-7 grid lg:grid-cols-2 items-center">
          <div >
            <h1 className="text-[40px] lg:text-[46px] text-main-purple mb-12">Empowering your business with <span className="text-main-yellow font-bold italic">innovative technology</span> </h1>
            <a href="#about" className="rounded-br-xl w-44 h-9 mt-12 bg-main-yellow px-4 border-2 border-main-purple rounded-tl-xl py-2 text-white font-bold hover:bg-main-purple transition-colors">What is Difersoft</a>
          </div>
          <div >
            <img src="/assets/banner-img.png" alt="Best Software House Indonesia" className="w-[90%] ml-auto hidden lg:block" />
          </div>
        </div>
      </section>
      {/* <!--END : Section Banner-- > */}

      {/* < !--START : Section Who-- > */}
      <section className="w-full py-8 bg-main-yellow mt-24 mb-12 scroll-mt-48" id="about">
        <div className="w-full lg:w-[1280px] lg:mx-auto">
          <div className="grid px-8 lg:px-32 grid-cols-12 justify-between items-center">
            <div className="col-span-12">
              <h2 className="text-[46px] mb-6 text-white">Who is <br /><span className="text-main-purple font-bold italic">Difersoft</span> ?</h2>
              <p className="text-[14px] leading-loose text-white text-justify">Difersoft is a software development company that specializes in creating custom software solutions for businesses of all sizes. They offer a wide range of services including web and mobile development, e-commerce solutions, and software consulting. Difersofts team of experienced developers and designers work closely with clients to understand their unique needs and create tailored software solutions that drive business growth and success. They are known for their high-quality work and attention to detail, and their goal is to help businesses to streamline their operations and stay competitive in todays fast-paced digital world. </p>
            </div>
            <div className="col-span-12 mt-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-10">
                <div className="text-center">
                  <img className="h-20 m-auto w-20 mb-5 bg-dark-purple rounded-full " src="/assets/custom.png" alt="Customized Software" />
                  <div className="w-72">
                    <p className="text-[14px] text-white text-justify">Customized solutions: A software development company like Difersoft can create a software solution tailored to the specific needs and requirements of a business. This can help businesses streamline their operations and increase efficiency, leading to cost savings and increased productivity.</p>
                  </div>
                </div>
                <div className="text-center">
                  <img className="h-20 m-auto w-20 mb-5 bg-dark-purple rounded-full " src="/assets/expertise.png" alt="Expertise Team" />
                  <div className="w-72">
                    <p className="text-[14px] text-white text-justify">Expertise and experience: Working with a software development company provides access to a team of experienced developers and designers who can bring a wealth of knowledge and technical expertise to a project. This can help ensure that the final product is of high quality and meets the needs of the business.</p>
                  </div>
                </div>
                <div className="text-center ">
                  <img className="h-20 m-auto w-20 mb-5 bg-dark-purple rounded-full " src="/assets/flexible.png" alt="flexibility Software" />
                  <div className="w-72">
                    <p className="text-[14px] text-white text-justify">Scalability and flexibility: Software solutions developed by a software development company can be designed to be scalable and flexible. This means that as a business grows and evolves, the software can be updated and expanded to meet those changing needs. This can help a business stay competitive and adapt to changes in the market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--END : Section Who-- > */}

      {/* < !--START : Section Services-- > */}
      <section className="w-full lg:w-[1280px] lg:mx-auto scroll-mt-48" id="service">
        <div className="m-auto w-full px-8 lg:px-32 py-7">
          <p className="text-[16px] text-main-yellow mb-2">Our Services</p>
          <h2 className="text-[36px] text-main-purple font-bold mb-8">What can we do ?</h2>

          {/* <!-- Services List --> */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-8">
            <div className="w-[280px] border-2 border-dark-purple rounded-tr-3xl rounded-bl-3xl px-5 py-6">
              <img src="/assets/services-web.jpg" alt="Website Developer Agency" className="rounded-tr-3xl mb-3" />
              <div className="grid grid-cols-2 justify-between items-end">
                <h3 className="text-dark-purple text-[20px] font-bold">
                  <span className="text-[32px] text-main-yellow">W</span>ebsite <br />
                  <span className="text-[32px] text-main-yellow">D</span>evelopment
                </h3>
                <div className="w-10 h-10 rounded-full bg-main-yellow ml-auto servicesBall"></div>
              </div>

            </div>

            <div className="w-[280px] border-2 border-dark-purple rounded-tr-3xl rounded-bl-3xl px-5 py-6 mx-auto">
              <img src="/assets/services-soft.jpg" alt="Website Developer Agency" className="rounded-tr-3xl mb-3" />
              <div className="grid grid-cols-2 justify-between items-end">
                <h3 className="text-dark-purple text-[20px] font-bold">
                  <span className="text-[32px] text-main-yellow">S</span>oftware <br />
                  <span className="text-[32px] text-main-yellow">D</span>evelopment
                </h3>
                <div className="w-10 h-10 rounded-full bg-main-yellow ml-auto servicesBall"></div>
              </div>

            </div>

            <div className="w-[280px] border-2 border-dark-purple rounded-tr-3xl rounded-bl-3xl px-5 py-6 lg:ml-auto">
              <img src="/assets/services-mobile.jpg" alt="Website Developer Agency" className="rounded-tr-3xl mb-3" />
              <div className="grid grid-cols-2 justify-between items-end">
                <h3 className="text-dark-purple text-[20px] font-bold">
                  <span className="text-[32px] text-main-yellow">M</span>obile <br />
                  <span className="text-[32px] text-main-yellow">A</span>pplication
                </h3>
                <div className="w-10 h-10 rounded-full bg-main-yellow ml-auto servicesBall "></div>
              </div>

            </div>


          </div>

        </div>
      </section>
      {/* <!--END : Section Services-- > */}

      {/* < !--START : Section Portfolio-- > */}
      <section className="w-full lg:w-[1280px] lg:mx-auto mt-10 scroll-mt-48" id="portfolio">
        <div className="m-auto lg:w-[60%] px-8 lg:px-32 py-7 lg:text-center">
          <p className="text-[16px] text-main-yellow mb-2">Our Portfolio</p>
          <h2 className="text-[36px] text-main-purple font-bold mb-8">The result of the projects we have worked on</h2>
        </div>
        <div className="grid grid-cols-12 px-8 lg:px-32 gap-6 items-center justify-between">
          <div className="col-span-12 lg:col-span-7">
            <img src="/assets/tekenens.jpg" alt="Tekenens Illustration Studio" className="rounded-2xl h-auto w-[560px]" />
          </div>
          <div className="col-span-12 md:col-span-8  lg:col-span-4">
            <h3 className="text-main-yellow text-[28px] font-bold">Tekenens Studio</h3>
            <h4 className="text-dark-purple text-[16px] font-bold">Website Development</h4>
            <p className="mt-4 text-main-purple text-[14px] leading-normal">
              Tekenens is an illustration and character design service for professional and experienced artists to produce the best quality images. And also Can create illustrations with various themes and genres for various needs
            </p>
            <a href="https://tekenens.com/" className="block w-fit">
              <div className="mt-10 lg:mt-4 h-10 w-40 bg-main-yellow rounded-full px-3 cursor-pointer">
                <div className="grid grid-cols-3 items-center h-full">
                  <div className="h-7 w-7 bg-main-purple rounded-full"></div>
                  <p className="col-span-2 text-[14px] text-main-purple">Live Website</p>
                </div>
              </div>
            </a>
          </div>
          <div className="ml-auto lg:block hidden">
            <div className="h-7 w-7 bg-main-purple rounded-full mb-10 hover:bg-dark-purple transition-colors">
              <img src="/assets/arrow_up.jpg" alt="" className="px-[6px] py-2 cursor-pointer" />
            </div>
            <div className="h-7 w-7 bg-main-purple rounded-full hover:bg-dark-purple transition-colors">
              <img src="/assets/arrow_down.png" alt="" className="px-[6px] py-[10px] cursor-pointer" />
            </div>
          </div>
        </div>
      </section>
      {/* <!--END : Section Portfolio-- > */}

      {/* < !--START : Section Contact-- > */}
      <section className="w-full lg:w-[1280px] lg:mx-auto mt-10 scroll-mt-48" id="contact">
        <div className="m-auto w-full px-8 lg:px-32 py-7">
          <div className="w-full">
            <p className="text-[16px] text-main-yellow mb-2">Our Contact</p>
            <h2 className="text-[32px] text-main-purple font-bold mb-8">How to get in touch with us</h2>
          </div>
          <div className="mt-10 grid lg:grid-cols-2 gap-5 justify-between">
            {/* <!-- START : Contact Form --> */}
            <div className="pr-6">
              <form action="">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="font-bold text-[16px] text-main-yellow mb-4">Full Name</p>
                    <input type="text" name="name" id="name" className="border-2 px-4 border-main-purple rounded-xl py-1 w-full" />
                  </div>
                  <div>
                    <p className="font-bold text-[16px] text-main-yellow mb-4">Email </p>
                    <input type="text" name="email" id="email" className="border-2 px-4 border-main-purple rounded-xl py-1 w-full" placeholder="Your Email" />
                  </div>
                  <div className="col-span-2">
                    <p className="font-bold text-[16px] text-main-yellow mb-4">Messages </p>
                    <textarea name="messages" id="messages" className="border-2 px-4 border-main-purple rounded-xl py-1 w-full"></textarea>
                  </div>
                </div>
                <button type="submit" className="bg-main-yellow text-white text-[16px] px-9 py-2 rounded-xl font-bold mt-8">Send</button>
              </form>
            </div>
            {/* <!-- END : Contact Form --> */}

            {/* <!-- START : Contact Information --> */}
            <div className="mt-5 lg:mt-0 ">
              <div className="grid grid-rows-3 gap-9">
                <div className="w-80 h-16 bg-main-yellow py-3 px-6 lg:mx-auto rounded-xl inline-flex items-center">
                  <img src="/assets/location.png" alt="" className="h-full mr-5" />
                  <div>
                    <p className="text-dark-purple font-bold text-[16px]">Location</p>
                    <p className="text-dark-purple text-[16px]">Surabaya, Indonesia</p>
                  </div>
                </div>

                <div className="w-80 h-16 bg-main-yellow py-3 px-6 lg:mx-auto rounded-xl inline-flex items-center">
                  <img src="/assets/phone.png" alt="" className="h-full mr-5" />
                  <div>
                    <p className="text-dark-purple font-bold text-[16px]">Whatsapp</p>
                    <a href="" className="text-dark-purple text-[16px] hover:text-white">+62 899 399 4131</a>
                  </div>
                </div>

                <div className="w-80 h-16 bg-main-yellow py-3 px-6 lg:mx-auto rounded-xl inline-flex items-center">
                  <img src="/assets/main.png" alt="" className="h-full mr-5" />
                  <div>
                    <p className="text-dark-purple font-bold text-[16px]">Email</p>
                    <a href="mailto:difersoft.agency@gmail.com" className="text-dark-purple hover:text-white text-[16px]">difersoft.agency@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- END : Contact Information --> */}
          </div>
        </div>
      </section>

      {/* <!-- END : Section Contact --> */}
      <footer className="w-full bg-dark-purple mt-5 py-12">
        <div className="grid lg:grid-cols-12 w-full lg:w-[1280px] lg:mx-auto px-8 lg:px-32 ">
          <div className="col-span-4">
            <img src="/assets/text_logo_w.png" alt="Difersoft Software House Indonesia" className="w-72" />
            <p className="text-white text-[14px] mt-4 leading-loose">
              Difersoft is a software development company that specializes in creating custom software solutions
              for businesses of all sizes. They offer a wide range of services including web and mobile
              development, e-commerce solutions, and software consulting.
            </p>
          </div>
          <div className="col-span-4"></div>
          <div className="col-span-2 mt-10 lg:mt-0">
            <h3 className="text-main-yellow font-bold text-[20px]">Our Menu</h3>
            <a href="#about" className="text-white text-[14px] flex mt-5">About Us</a>
            <a href="#service" className="text-white text-[14px] flex mt-3">Services</a>
            <a href="#portfolio" className="text-white text-[14px] flex mt-3">Portfolio</a>
            <a href="#contact" className="text-white text-[14px] flex mt-3">Contact</a>
          </div>
        </div>
      </footer>
      <div className="bg-main-yellow w-full py-3 text-center">
        <p className="text-main-purple text-[16px]">Copyright © 20233. Tekensens Studio. All Rights Reserved. Powered by
          Difersoft Agency</p>
      </div>
    </>
  )
}
