import React from 'react'

export default function Banner() {
    return (
        <section className="w-full lg:w-[1280px] lg:mx-auto mt-14 scroll-mt-48" id="home">
            <div className="m-auto w-full px-8 lg:px-32 py-7 grid lg:grid-cols-2 items-center">
                <div >
                    <h1 className="text-[40px] lg:text-[46px] text-main-purple mb-12">Empowering your business with <span className="text-main-yellow font-bold italic">innovative technology</span> </h1>
                    <button className="rounded-br-xl w-44 h-9 mt-12 bg-main-yellow px-4 border-2 border-main-purple rounded-tl-xl py-2 text-white font-bold hover:bg-main-purple transition-colors" onClick={() => {
                        handleClickScroll('about');
                    }}> What is Difersoft</button>
                </div>
                <div >
                    <img src="/assets/banner-img.png" alt="Best Software House Indonesia" className="w-[90%] ml-auto hidden lg:block" />
                </div>
            </div>
        </section>
    )
}
