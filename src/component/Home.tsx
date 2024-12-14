'use client';
import heroImg from "../../public/hero-img.png";
import Image from "next/image";
import Link from "next/link";
import Type from "./Type";

const Home = () => {
        
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1 style={{ fontSize: "50px" }}>Ashir Naeem</h1>
        <Type />
        <p>
        Hi&#44; I&rsquo;m Ashir Naeem&#44; a dedicated frontend developer specializing in HTML&#44; CSS&#44; JavaScript&#44; and Next&#46;js&#46; I focus on building scalable&#44; dynamic&#44; and responsive web applications using modern frameworks and libraries&#46; With expertise in frontend technologies such as HTML&#44; CSS&#44; JavaScript&#44; and Next&#46;js&#44; I create robust&#44; user&#45;centric interfaces that ensure seamless and engaging user experiences&#46; My goal is to combine functionality with clean&#44; efficient code to deliver powerful web solutions&#46;

        </p>
        <button className="btn">
          <Link
            href="https://www.google.com/"
            legacyBehavior>
            <a download>Download Resume</a>
          </Link>
        </button>
      </div>
      <div className="hero-img">
        <Image className="heroImg" src={heroImg} alt="hero-img" />
      </div>
    </section>
  );
};

export default Home;
