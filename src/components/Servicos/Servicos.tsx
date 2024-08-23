import ServicosBackground from '../../assets/backgroundservices.jpeg'
import './Servicos.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Servicos = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
    };
    return (
        <>
        <div className='w-full ' >
            <div className='relative py-32 w-full bg-[#0d94896c] flex justify-center flex-col items-center'>
                <div className='w-full flex flex-col justify-center items-center'>
                    <h4 className='text-[#30e9d9] text-xl font-semibold'>Serviços</h4>
                    <h1 className='text-4xl mb-44 tracking-tight sm:text-7xl font-semibold text-white'>Serviços que ofereço:</h1>
                    <span className='w-72 h-[4px] mt-6 bg-regal-blue absolute'></span>
                </div>
               
                <Slider className='slide-servicos' {...settings}>
                    
                    <div className="group relative bg-black mx-10 ">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-1 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                                        quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative bg-black mx-10 ">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-1 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                                        quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative bg-black mx-10 ">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-1 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                                        quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative bg-black mx-10 ">
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-1 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Developer</p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores
                                        quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                 
                </Slider>
                
            </div>
            
        </div>
        <img className='w-full z-[-1] fixed top-0 left-0  ' src={ServicosBackground} alt="" />
</>
    )
}
