export default function Footer() {
    return (
        <>
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
