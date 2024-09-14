import './Parceiros.css'
import Parceiro1 from '../../assets/parceiro1.png'
import Parceiro2 from '../../assets/PortICON.png'
import { useEffect, useState } from 'react';

export const Parceiros = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWindowWidth(window.innerWidth);
    };

    // Step 3: Use the useEffect hook to set up an event listener for window resize
    useEffect(() => {
        window.addEventListener('resize', updateWidth);

        // Cleanup function to remove event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);
    return (
        <div className=' flex justify-center w-full bg-white shadow-sm border-2 border-[#335f5b88]  shadow-[#335f5b88] ' id='Parceria'>

            <div className='logos-container w-3/4 whitespace-nowrap  overflow-hidden '>

                <div className='pt-6'>
                    <h3 className='text-xl font-normal  max-sm:text-sm'>Parcerias Feitas:</h3>
                </div>
                <div className=' logos  inline-flex  justify-center items-center  '>
                    <img className='h-32 max-sm:h-12  ' src={Parceiro1} alt="" />
                    <img className='h-52 max-sm:h-28  ' src={Parceiro2} alt="" />
                    {windowWidth < 650 ? null : <img className='h-32 max-sm:h-12  ' src={Parceiro1} alt="" />}
                    {windowWidth < 650 ? null : <img className='h-52 max-sm:h-28  ' src={Parceiro2} alt="" />}
                </div>
                <div className=' logos inline-flex justify-center items-center '>
                    <img className='h-32 max-sm:h-12 ' src={Parceiro1} alt="" />
                    <img className='h-52 max-sm:h-28  ' src={Parceiro2} alt="" />
                    {windowWidth < 650 ? null : <img className='h-32 max-sm:h-12  ' src={Parceiro1} alt="" />}
                    {windowWidth < 650 ? null : <img className='h-52 max-sm:h-28  ' src={Parceiro2} alt="" />}
                </div>
            </div>
        </div>
    )
}
