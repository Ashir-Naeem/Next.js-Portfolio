import Image from 'next/image'
import React from 'react'

import aboutImg from '../../public/about-img.png'
import Link from 'next/link'
const About = () => {
  return (
    <>
        <div className='about' id='about'>
            <div className='heading-container'>
            <h1>About Me</h1>
            </div>
            <div className='aboutBody'>
            <div className='aboutImage'>
                <Image className='aboutImg' src={aboutImg}  alt='Ashir_Naeem'/>
            </div>
            <div className='aboutText'>
                <h1>Ashir Naeem</h1>
                <h2>Frontend Developer &#124; Next&#46;Js Developer</h2>
                <p>    
                I am a passionate frontend developer specializing in building intuitive and responsive web applications using modern technologies&#46; With a strong foundation in front&#45;end technologies like HTML&#44; CSS&#44; JavaScript&#44; and TypeScript&#44; I transform design concepts into seamless digital experiences&#46; My focus is on writing clean&#44; maintainable code&#44; optimizing performance&#44; and delivering user&#45;friendly interfaces&#46;
                </p>
                <div className='aboutLinks'>
                <button><Link href={"https://www.linkedin.com/?original_referer="}>LinkedIn</Link></button>
                <button><Link href={"https://github.com/Ashir-Naeem/Ashir-Naeem"}>Github</Link></button>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default About