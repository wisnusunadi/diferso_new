
export default function Service() {
    return (
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
    )
}
