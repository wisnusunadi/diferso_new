export default function Contact() {
    return (
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

    )
}
