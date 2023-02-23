export default function About() {
    return (
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
    )
}
