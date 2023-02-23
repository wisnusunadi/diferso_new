
export default function Portfolio() {
    return (
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
    )
}
