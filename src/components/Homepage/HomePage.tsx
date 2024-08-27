import './HomePage.css';
import { Header } from '../Header/Header';
import BackgroundFisio from '../../assets/BackgroundGeison.png'
import { MdPhone } from "react-icons/md";
import { Parceiros } from '../Parceiros/Parceiros';
import Sobre from '../Sobre/Sobre';
import { Footer } from '../Footer/Footer';
import { Testemunhas } from '../Testemunhas/Testemunhas';
import { Servicos } from '../Servicos/Servicos';
import { Escolha } from '../Escolha/Escolha';


export const HomePage = () => {
  return (
    <div className=' homepage w-full flex items-center flex-col max-w-full '>

      <Header/>
      <div className="
      bg-[#e5faf7]
      pb-40
      px-28
      grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 max-sm:px-12 max-sm:py-16">
        <div className="h-[48rem] rounded-lg "  >
          <div className='justify-center flex flex-col items-center gap-6 h-full px-10 max-sm:justify-start'>
            <h5 className='text-regal-blue text-xl'>Seja Bem-Vindo</h5>
            <h2 className='text-black text-6xl w-96'>Destino Para Alívio e <br />Bem-Estar</h2>
            <span className='w-3/5 h-1 bg-regal-blue'></span>
            <p>Este é o meu site, onde compartilho informações sobre meus serviços de fisioterapia, dicas de saúde e bem-estar, e minha jornada como futuro profissional na área. Aqui você poderá conhecer melhor meu trabalho e como posso ajudar você a alcançar uma vida mais saudável.</p>
            <button className=' items-center relative inline-flex text-sm sm:text-base rounded-full font-medium border-2 border-transparent 
            transition-colors outline-transparent focus:outline-transparent disabled:opacity-50 disabled:pointer-events-none 
            disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-white bg-regal-blue hover:bg-[#1e6e64] focus:bg-[#1e6e64]  px-4 py-1 sm:py-1.5 sm:px-5'>
              <MdPhone className='mr-2' /> <a href="https://api.whatsapp.com/send?phone=8199049803&text=Olá,%20gostaria%20de%20entrar%20em%20contato."> Atendimento</a>
             
            </button>
          </div>
        </div>
        <div className="h-[48rem]  rounded-lg "><img className='rounded-[110px]' src={BackgroundFisio} alt="" /></div>
        <div className="h-[48rem] rounded-lg flex justify-center">
          <div className=' flex grid-cols-3 gap-32 flex-col justify-center'>
            <div className='flex justify-center items-center flex-col'>
              <h1 className='text-regal-blue text-6xl mb-4'>+23</h1>
              <p className='text-sm sm:text-base font-medium'>Trabalhos Concluídos</p>
            </div>
            <div className='flex justify-center items-center flex-col'>
              <h1 className='text-regal-blue text-6xl mb-4 '>3</h1>
              <p className='text-sm sm:text-base font-medium'>Anos de Experiência</p></div>
            <div className='flex justify-center items-center flex-col'>
              <h1 className='text-regal-blue text-6xl mb-4'>+120</h1>
              <p className='text-sm sm:text-base font-medium'>Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
      </div>
    <Parceiros/>
    <Sobre/>
    <Servicos/>
    <Escolha/>
    <Testemunhas/>
    <Footer/>
    </div>
  )
}
