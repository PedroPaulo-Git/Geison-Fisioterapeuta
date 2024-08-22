
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

export const Footer = () => {
    return (

        <footer className="relative bg-regal-blue pt-20 pb-6 w-full">
            <div className="container m-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl fonat-semibold text-white">Let's keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-white">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <div className="flex">
                                <a className="w-10 h-10 bg-white mx-2 flex text-center justify-center items-center rounded-full" href=""><span className=""><FaInstagram /></span> </a>
                                <a className="w-10 h-10 bg-white mx-2 flex text-center justify-center items-center rounded-full" href=""><span className=""><FaFacebookF /></span></a>
                                <a className="w-10 h-10 bg-white mx-2 flex text-center justify-center items-center rounded-full" href=""><span className=""><FaLinkedinIn /></span>    </a>
                                <a className="w-10 h-10 bg-white mx-2 flex text-center justify-center items-center rounded-full" href=""><span className=""><FaWhatsapp /></span>   </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block uppercase text-blue-light text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-normal block pb-2 text-sm" href="9">About Us</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-normal block pb-2 text-sm" href="">Blog</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-normal block pb-2 text-sm" href="">Github</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-normal block pb-2 text-sm" href="">Free Products</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blue-light text-sm font-semibold mb-2">Other Resources</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-normal block pb-2 text-sm" href="">MIT License</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-normal block pb-2 text-sm" href="">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-normal block pb-2 text-sm" href="">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a className="text-white hover:text-blueGray-800 font-normal block pb-2 text-sm" href="">Contact Us</a>
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
                            Copyright © <span id="get-current-year">2021</span><a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank" /> PortSoftware by
                            <a href="https://www.creative-tim.com?ref=njs-profile" className="text-blueGray-500 hover:text-blueGray-800"> Estudando Geison</a>.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
