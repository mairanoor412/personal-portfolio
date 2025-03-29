"use client"
import Button from "@/app/button/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";



const HeroSection = () => {
    return (
        <section className="overflow-x-hidden md:h-screen md:grid md:grid-cols-2   ">

            {/* right section */}
            <div className="md:order-2 md:relative ">

                {/* image */}
                <div className=" ml-auto h-[330px] w-[400px] sm:w-[500px] md:w-[420px] md:h-auto lmd:w-[500px] lmd:h-auto lg:w-[600px] lg:h-auto md:absolute md:top-0 md:left-auto md:right-0  z-10">

                    <motion.svg
                        initial={{ opacity: 0, x:50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay:0.5 }}
                        width="399" height="330"
                        className="w-full h-auto md:h-auto lmd:h-auto  lg:h-auto"
                        viewBox="0 0 399 330" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M399.302 0.704282V258.261C374.548 294.508 302.702 335.839 267.317 328.49C169.147 308.101 228.159 240.137 85.1604 228.81C-64.8343 193.318 26.5 121 53 95C79.5 69 81.5 0.704282 81.5 0.704282H399.302Z" fill="#FDC435" stroke="#FDC435" stroke-width="0.755149" />
                    </motion.svg>

                </div>
            </div>



            {/* left section data */}
            <div className="px-3 sm:px-7 md:px-10 lmd:px-14 flex flex-col gap-5 sm:gap-6 md:gap-5 lmd:gap-7 py-10 sm:py-28 lg:py-28 lg:w-[600px]  lg:ml-24 ">
                <motion.h1
                    initial={{ opacity: 0, y:20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-[25px] lg:text-[30px] text-primary font-extrabold">
                    Hello, I'm Maira Naeem
                </motion.h1>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Frontend Developer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        ' Crafting Interactive',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    className="text-[20px] lg:text-[30px] inline-block text-[#FDC435] font-thin"
                    repeat={Infinity}
                />
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-[14px] lg:text-[16px] tracking-normal leading-normal">
                    I specialize in building responsive, user-friendly, and high-performance web applications using modern technologies like Next.js, TypeScript, and Redux Toolkit. Passionate about creating seamless digital experiences with clean and efficient code.
                </motion.p>

                {/* buttons */}
                <div className="flex gap-4 md:pt-4">
                    {/* projects button */}
                    <Link href="projects-page">
                <Button text="projects"></Button>
                </Link>

                {/* linkdin button */}
                    <motion.button
                     initial={{ opacity: 0, x: -100 }}
                     animate={{ opacity: 1, x: 0 }}
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     transition={{ duration: 0.8, ease:"easeIn" }}
                        >
                       <Link href="https://www.linkedin.com/in/maira-naeem-6765692b5/" className="px-5 py-2 border-[1px] shadow-lg rounded-[5px] text-[15px] text-primary transition-all duration-300 hover:bg-[#FDC435] hover:border-[#FDC435]"> LinkedIn </Link>
                       </motion.button>
                </div>
            </div>



        </section>
    )
}

export default HeroSection;


{/* <svg width="519" height="437" viewBox="0 0 519 437" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M518.485 342V0.932648H109C117.041 0.932648 118.075 12.0605 102.485 75C67.5017 137 100.572 85.0674 67.5017 125.067C55.5017 130.067 -96.1443 256 102.485 303C291.85 318 213.704 408 343.704 435C390.563 444.732 485.704 390 518.485 342Z" fill="#F7F70C" stroke="#EEF522"/>
</svg> */}

// xmlnsXlink="http://www.w3.org/1999/svg"




{/* <svg  width="400" height="330" 
                className="w-full h-auto lg:h-auto "
                 viewBox="0 0 519 437" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M518.485 342V0.932648H109C117.041 0.932648 118.075 12.0605 102.485 75C67.5017 137 100.572 85.0674 67.5017 125.067C55.5017 130.067 -96.1443 256 102.485 303C291.85 318 213.704 408 343.704 435C390.563 444.732 485.704 390 518.485 342Z" fill="#FDC435" stroke="#FDC435" />
                </svg> */}



