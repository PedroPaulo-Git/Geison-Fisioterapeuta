import Logo from '../../assets/Estudante Geison.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export const Footer = () => {
    return (
<footer className="relative bg-regal-blue pt-20 pb-6 w-full" id='Contato'>
    <div className="container m-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl font-normal pb-2 text-white">Vamos manter contato!</h4>
                <h5 className="text-lg mt-0 mb-2 text-white">
                    Projeto de landing page feito em React com Tailwindcss e Typescript !
                </h5>
                <div className="mt-6 lg:mb-0 mb-6">
                    <div className="flex">
                        <a className="w-10 h-10 bg-white mx-2 flex text-center justify-center items-center rounded-full" href= "https://www.instagram.com/pedro.paulo908/" target="_blank"><FaInstagram /></a>
                        <a className="w-10 h-10 bg-white mx-2 flex text-center justify-center items-center rounded-full" href="https://github.com/PedroPaulo-Git" target="_blank"><FaGithub /></a>
                        <a className="w-10 h-10 bg-white mx-2 flex text-center justify-center items-center rounded-full" href="https://www.linkedin.com/in/pedro-paulodev/" target="_blank"><FaLinkedinIn /></a>
                        <a className="w-10 h-10 bg-white mx-2 flex text-center justify-center items-center rounded-full" href="https://api.whatsapp.com/send?phone=8199049803&text=Olá,%20gostaria%20de%20entrar%20em%20contato." target="_blank"><FaWhatsapp /></a>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                    <div className="w-full lg:w-4/12 px-4 ml-auto">
                        <span className="block uppercase text-blue-light text-sm font-semibold mb-2">Links Úteis</span>
                        <ul className="list-unstyled">
                            <li>
                                <a className="text-white hover:text-blueGray-800 font-normal block pb-2 text-sm" href="#">Sobre Nós</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-blueGray-800 font-normal block pb-2 text-sm" href="#">Blog</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-blueGray-800 font-normal block pb-2 text-sm" href="#">Serviços</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-blueGray-800 font-normal block pb-2 text-sm" href="#">Contate-nos</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <span className="block uppercase text-blue-light text-sm font-semibold mb-2">Outros Recursos</span>
                        <ul className="list-unstyled">
                            <li>
                                <a className="text-white hover:text-blueGray-800 font-normal block pb-2 text-sm" href="#">Termos &amp; Condições</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-blueGray-800 font-normal block pb-2 text-sm" href="#">Política de Privacidade</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-blueGray-800 font-normal block pb-2 text-sm" href="#">Licenciamento</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-blueGray-800 font-normal block pb-2 text-sm" href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-white font-semibold py-1">
                    Copyright © <span id="get-current-year">2024</span> <a href="#" className="text-blueGray-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer">PortSoftware</a>. Todos os direitos reservados.
                </div>
            </div>
        </div>
    </div>
</footer>

    )
}
