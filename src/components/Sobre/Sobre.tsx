import SobreImage from '../../assets/AboutImages.png'


const links = [
    { name: 'Serviços oferecidos', href: '#' },
    { name: 'Agendar consulta', href: '#' },
    { name: 'Depoimentos de clientes', href: '#' },
    { name: 'Contato', href: '#' },
  ]
  const stats = [
    { name: 'Parceiros e colaborações', value: '12' },
    { name: 'Projetos Completados', value: '300+' },
    { name: 'Horas por semana', value: '40' },
    { name: 'Flexibilidade de horários', value: 'Total' },
  ]
  
  export default function Sobre() {
    return (
      <div className="relative w-full isolate overflow-hidden py-24 sm:py-32  bg-[#e5faf7] " id='Sobre'>
     
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="mx-auto lg:mx-0 flex w-full">
            <div className='w-3/4 text-left'>
            <p className='text-regal-blue text-xl'>Sobre Mim</p>
            <h2 className="text-4xl tracking-tight sm:text-6xl ">O Melhor Fisioterapeuta da Cidade</h2>
            <p className="mt-6 text-lg leading-8 ">
            Sou um fisioterapeuta em formação na Universidade Uninassau, dedicado a aprender e aplicar os conhecimentos mais avançados em reabilitação e cuidados com a saúde para ajudar meus futuros pacientes a recuperar sua qualidade de vida.
            </p>
            </div>
            <img className = 'w-3/5 object-contain max-md:w-2/5 max-md:absolute max-md:right-0 -z-20' src={SobreImage} alt="" />
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-regal-blue sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 ">{stat.name}</dt>
                  <dd className="text-3xl text-regal-blue font-medium leading-9 tracking-tight ">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  