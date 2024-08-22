import './Parceiros.css'
import Parceiro1 from '../../assets/parceiro1.png'
import Parceiro2 from '../../assets/PortICON.png'

export const Parceiros = () => {
  return (
 <div className='flex justify-center w-full bg-white'>
    
    <div className='logos-container w-3/4 whitespace-nowrap  overflow-hidden '>
    <div className=' logos  inline-flex  justify-center items-center  '>
        <img className='h-32' src={Parceiro1} alt="" />
        <img className='h-52' src={Parceiro2} alt="" />
        <img className='h-32' src={Parceiro1} alt="" />
        <img className='h-52' src={Parceiro2} alt="" />

    </div>
    <div className=' logos inline-flex justify-center items-center '>
        <img className='h-32' src={Parceiro1} alt="" />
        <img className='h-52' src={Parceiro2} alt="" />
        <img className='h-32' src={Parceiro1} alt="" />
        <img className='h-52' src={Parceiro2} alt="" />
    </div>
    </div>
 </div>
  )
}
