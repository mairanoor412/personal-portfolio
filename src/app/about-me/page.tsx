"use client"
import { motion } from "framer-motion";
import Button from "../button/button";



const AboutMe = () => {

    const cardVariantsLeft = {
        offscreen: {
            opacity: 0,
            x: -100, // Start from the left side
        },
        onscreen: {
            opacity: 1,
            x: 0, // Move to the original position
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <section className="overflow-hidden bg-[#F9FAFF] h-auto lg:h-screen">
            {/* heading */}
            <motion.div 
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.1 }} // Set once: false for animation on every scroll
                variants={cardVariantsLeft}
                className="flex justify-center items-center pb-12 md:pb-10 pt-20 lg:pb-8 ">
                <h1 className="text-primary text-[25px] md:text-[30px]  font-bold border-b-4 border-[#FDC435] inline-block pb-1"> About Me </h1>
            </motion.div>


            {/* left Section introduction*/}
            <div className=" md:h-screen grid md:grid-cols-2 md:w-[700px] lg:w-[1100px] m-auto gap-10 sm:gap-14 md:gap-16 ">
                <div className="order-2 px-3 sm:px-4 md:pt-8 lg:pt-14">
                    <motion.p 
                     initial={{ opacity: 0, x: -50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 1, delay: 0.5 }}
                     className="text-primary text-[14px] lg:text-[16px] tracking-normal leading-[1.56] pb-9 sm:pb-12 lg:w-[450px]  ">I am a passionate Front-End Developer with expertise in Next.js, TypeScript, Redux Toolkit, Tailwind CSS, and UI/UX design. I specialize in building pixel-perfect and responsive web applications with a strong focus on performance. Currently, I am expanding my skills by learning Python. My portfolio showcases various projects, from e-commerce platforms to interactive web applications and CLI tools.</motion.p>
                    <Button text="Resume"></Button>
                </div>

                {/* Right Section Image */}
                <div className="w-[240px] h-[240px] sm:w-[350px] sm:h-[350px] m-auto md:mx-auto  md:w-[600px] md:h-[600px] lg:w-[250px] lg:h-[650px]  md:order-2">
                <motion.svg
                 initial={{ opacity: 0, x:50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1, delay:0.5 }}
                  className="w-[240px] h-[240px] sm:w-[350px] sm:h-[350px]  md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px]  " width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg ">
                    <path d="M499.5 250C499.5 387.795 387.795 499.5 250 499.5C112.205 499.5 0.5 387.795 0.5 250C0.5 112.205 112.205 0.5 250 0.5C387.795 0.5 499.5 112.205 499.5 250Z" fill="#FDC435" stroke="#FDC435" />
                </motion.svg>
                </div>
            </div>


        </section>
    )
}

export default AboutMe;