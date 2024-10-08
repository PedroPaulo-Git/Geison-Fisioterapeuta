import './Header.css'
import Logo from '../../assets/Estudante Geison.png'
import LogoMobile from '../../assets/IconMobile.png'
import { Link } from 'react-scroll';

'use client'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  // Popover,
  // PopoverButton,
  PopoverGroup,
  // PopoverPanel,
} from '@headlessui/react'
import {
  // ArrowPathIcon,
   Bars3Icon,
  // ChartPieIcon,
  // CursorArrowRaysIcon,
  // FingerPrintIcon,
  // SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

// const products = [
//   { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
//   { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
//   { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
//   { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
//   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
// ]
const services = [
  {
    name: 'Ventosaterapia',
    description: 'Aplicação de ventosas para melhorar a circulação e aliviar tensões musculares.',
    href: '#Serviços',
    // icon: VentosatherapyIcon substitua pelo ícone que você está utilizando
  },
  {
    name: 'Auriculoterapia',
    description: 'Estimulação de pontos na orelha para equilibrar energia e aliviar sintomas.',
    href: '#Serviços',
    //icon: AuriculotherapyIcon // Substitua pelo ícone que você está utilizando
  },
  {
    name: 'Cinesioterapia',
    description: 'Exercícios terapêuticos para melhorar mobilidade, força e flexibilidade.',
    href: '#Serviços',
    //icon: CinesiotherapyIcon // Substitua pelo ícone que você está utilizando
  },
  {
    name: 'Kinesioterapia',
    description: 'Técnicas de movimento para reabilitar e melhorar a funcionalidade corporal.',
    href: '#Serviços',
    //icon: KinesiotherapyIcon // Substitua pelo ícone que você está utilizando
  },
];

// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className=" bg-[#e5faf7] w-full">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-8 lg:px-8 mt-[-40px]">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="" src={Logo} className="w-56" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {/* <Popover className="relative">
          <PopoverButton className="flex items-center gap-x-1 text-sm font-normal leading-6 text-gray-900">
            Serviços
          <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" /> 
          </PopoverButton>

          <PopoverPanel
            transition
            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="p-4">
              {products.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                  </div>
                  <div className="flex-auto">
                    <a href={item.href} className="block font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                >
                  <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                  {item.name}
                </a>
              ))}
            </div>
          </PopoverPanel>
        </Popover> */}
          <Link
            className="text-sm font-normal leading-6 cursor-pointer text-gray-900"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            to="Serviços">Serviços</Link>
          <Link
            className="text-sm font-normal leading-6 cursor-pointer text-gray-900"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            to="Sobre">Sobre</Link>
          <Link
            className="text-sm font-normal leading-6 cursor-pointer text-gray-900"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            to="Parceria">Parceria</Link>
          <Link
            className="text-sm font-normal leading-6 cursor-pointer text-gray-900"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            to="Depoimentos">Depoimentos</Link>


          <Link
            className="text-sm font-normal leading-6 cursor-pointer text-gray-900"
            spy={true}
            smooth={true}
            offset={600}
            duration={500}
            to="Habilidades">Habilidades</Link>

          <Link
            className="text-sm font-normal leading-6 cursor-pointer text-gray-900"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            to="Contato">Contato</Link>
        </PopoverGroup>
      </nav>
      <hr className='pb-5 mt-[-50px]' />
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src={LogoMobile}
                className="h-16 "
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Serviços
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...services].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  to="Depoimentos">Depoimentos</Link>
                <Link
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  to="Habilidades">Habilidades</Link>

                <Link
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  to="Parceria">Parceria</Link>
                <Link
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  to="Contato">Contato</Link>
                <Link
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  to="Sobre">Sobre</Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
