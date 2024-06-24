import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import pantanal from '../assets/pantanal.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const Main = () => {
  return (
    <div id="main">
      <img className='w-full h-screen object-cover object-left' src={pantanal} alt="pantanal" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/45'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl txt-5xl font-bold text-gray-800'>
            Meu nome é
          </h1>
          <h1 className='sm:text-5xl txt-5xl font-bold text-gray-800'>
            Ricardo Laranjeira
          </h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            Eu sou
            <TypeAnimation
            sequence={[
              'Programador', 2000,
              'Entusiasta por tecnologia', 2000,
              'Professor', 2000                      
            ]}
            wrapper="div"
            cursor={true}                    
            repeat={Infinity}
            style={{ fontSize: '1em', paddingLeft: '5px' }}
          />
          </h2>
          <div className='flex justify-between pt-6 max-w-[300px] w-full cursor-pointer'>            
            <FaFacebook className='hover:scale-125 ease-in duration-300' size={30} />
            <FaInstagram className='hover:scale-125 ease-in duration-300' size={30} />
            <FaWhatsapp className='hover:scale-125 ease-in duration-300' size={30} />
            <FaLinkedin className='hover:scale-125 ease-in duration-300' size={30} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main