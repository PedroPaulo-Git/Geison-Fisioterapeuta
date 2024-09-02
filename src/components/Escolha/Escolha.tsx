import EscolhaGeison from '../../assets/EscolhaGeisonWithBackground.jpg'
export const Escolha = () => {
    return (
        <div className=" bg-[#e5faf7] w-full pt-96" id='Habilidades'>
            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                        <div className="relative z-10 lg:py-16">
                            <div className="relative h-64 sm:h-80 lg:h-full">
                                <img
                                    alt=""
                                    src={EscolhaGeison}
                                    className="absolute h-full object-cover w-full lg:mb-56 "
                                />
                            </div>
                        </div>

                        <div className="relative bg-gray-100 shadow-lg">
                            <span
                                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                            ></span>

                            <div className="p-8 sm:p-16 lg:p-24">
                                <div className='w-full text-start '>
                                    <h4 className='text-regal-blue text-xl font-semibold'> Por Que Me Escolher </h4>
                                    <h1 className='text-4xl tracking-tight sm:text-5xl font-semibold text-black'>Tratamento Personalizado Individualmente: Seu Caminho Para o Bem-Estar</h1>
                                    <span className='w-56 h-[4px] mt-6 bg-regal-blue absolute'></span>
                                    <p className='pt-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis numquam eos modi mollitia itaque, amet recusandae sequi animi placeat. Sunt ipsa dolorum obcaecati labore laborum sit? Veritatis nobis perferendis eum!</p>
                                </div>
                                <div className=''>
                                    <>
                                        <div className="flex justify-between mb-1 mt-8">
                                            <span className="text-base font-medium text-black">Comunicação</span>
                                            <span className="text-sm font-medium text-regal-blue">85%</span>
                                        </div>
                                        <div className="w-full rounded-full h-2.5 bg-[#134141]">
                                            <div className="bg-regal-blue h-2.5 rounded-full" style={{ width: "85%" }}></div>
                                        </div>
                                    </>

                                    <>
                                        <div className="flex justify-between mb-1 mt-8">
                                            <span className="text-base font-medium text-black">Conhecimento em Anatomia</span>
                                            <span className="text-sm font-medium text-regal-blue">94%</span>
                                        </div>
                                        <div className="w-full rounded-full h-2.5 bg-[#134141]">
                                            <div className="bg-regal-blue h-2.5 rounded-full" style={{ width: "94%" }}></div>
                                        </div>
                                    </>

                                    <>
                                        <div className="flex justify-between mb-1 mt-8">
                                            <span className="text-base font-medium text-black">Empatia</span>
                                            <span className="text-sm font-medium text-regal-blue">90%</span>
                                        </div>
                                        <div className="w-full rounded-full h-2.5 bg-[#134141]">
                                            <div className="bg-regal-blue h-2.5 rounded-full" style={{ width: "90%" }}></div>
                                        </div>
                                    </>

                                    <>
                                        <div className="flex justify-between mb-1 mt-8">
                                            <span className="text-base font-medium text-black">Terapias Manuais</span>
                                            <span className="text-sm font-medium text-regal-blue">86%</span>
                                        </div>
                                        <div className="w-full rounded-full h-2.5 bg-[#134141]">
                                            <div className="bg-regal-blue h-2.5 rounded-full" style={{ width: "86%" }}></div>
                                        </div>
                                    </>

                                    <>
                                        <div className="flex justify-between mb-1 mt-8">
                                            <span className="text-base font-medium text-black">Avaliação Postural</span>
                                            <span className="text-sm font-medium text-regal-blue">91%</span>
                                        </div>
                                        <div className="w-full rounded-full h-2.5 bg-[#134141]">
                                            <div className="bg-regal-blue h-2.5 rounded-full" style={{ width: "91%" }}></div>
                                        </div>
                                    </>

                                    <>
                                        <div className="flex justify-between mb-1 mt-8">
                                            <span className="text-base font-medium text-black">Reabilitação Funcional</span>
                                            <span className="text-sm font-medium text-regal-blue">96%</span>
                                        </div>
                                        <div className="w-full rounded-full h-2.5 bg-[#134141]">
                                            <div className="bg-regal-blue h-2.5 rounded-full" style={{ width: "96%" }}></div>
                                        </div>
                                    </>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
