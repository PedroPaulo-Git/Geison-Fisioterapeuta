import ServicosBackground from '../../assets/backgroundservices.jpeg'
import ServicosAuriculotherapy from '../../assets/Auriculotherapy.jpg'
import ServicosCinesiotherapy from '../../assets/Cinesiotherapy.jpg'
import ServicosVentosatherapy from '../../assets/Ventosaterapia.jpg'
import ServicosKinesiología from '../../assets/Kinesiología.png'


import './Servicos.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Servicos = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4
    };
    return (
        <>
        <div className='w-full ' >
            <div className='relative py-32 w-full bg-[#043632af] flex justify-center flex-col items-center'>
            <img className='imageservices-background-static w-full z-[-1] absolute' src={ServicosBackground} alt="" />
                <div className='w-full flex flex-col justify-center items-center'>
                    <h4 className='text-blue-light text-xl font-normal'> Meus Serviços</h4>
                    <h1 className='text-4xl mb-44 tracking-tight sm:text-7xl text-white'>Promovendo os Melhores Serviços</h1>
                    <span className='w-48 h-[4px] mt-6 bg-blue-light absolute'>
                        
                    </span>
                </div>
               
                <Slider className='slide-servicos' {...settings}>
                    
                    <div className="group relative bg-black mx-10 ">
                        <img
                            alt=""
                            src={ServicosVentosatherapy}
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-1 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-blue-light">Revitalização</p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Ventosaterapia</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                    Vou aplicar ventosas em áreas específicas do seu corpo para melhorar a circulação sanguínea e liberar tensões musculares. Esse procedimento ajudará a aliviar dores e desconfortos, promovendo uma sensação de revitalização e bem-estar geral.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative bg-black mx-10 ">
                        <img
                            alt=""
                            src={ServicosAuriculotherapy}
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-1 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-blue-light">Equilíbrio</p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Auriculoterapia</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                    Irei estimular pontos específicos na sua orelha, que correspondem a diferentes partes do seu corpo, para ajudar a equilibrar sua energia e aliviar sintomas de dores, ansiedade ou outros desconfortos. Esse método é eficaz para promover o equilíbrio do corpo e da mente.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative bg-black mx-10 ">
                        <img
                            alt=""
                            src={ServicosCinesiotherapy}
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-1 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-blue-light">Movimento</p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Cinesioterapia</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                    Vou guiá-la através de exercícios terapêuticos específicos para melhorar a sua mobilidade, força e flexibilidade. Esses exercícios são fundamentais para recuperar funções motoras e promover a reabilitação das suas articulações e músculos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative bg-black mx-10 ">
                        <img
                            alt=""
                            src={ServicosKinesiología}
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-1 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-blue-light">Reabilitação</p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Kinesioterapia</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div
                                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                >
                                    <p className="text-sm text-white">
                                    Neste procedimento, utilizarei técnicas especializadas de movimento para reabilitar seu corpo, focando na prevenção de lesões e na melhora da funcionalidade geral. A abordagem é personalizada para atender às suas necessidades específicas de recuperação e bem-estar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                 
                </Slider>
                
            </div>
            
        </div>
        <img className='imageservices-background w-full z-[-1] fixed top-0 left-0' src={ServicosBackground} alt="" />
</>
    )
}
