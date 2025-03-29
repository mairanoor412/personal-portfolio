"use client"
import { motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
   
    
     // Animation variants for the cards
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

    // Animation variants for scroll down (right se aana)
    const cardVariantsRight = {
        offscreen: {
            opacity: 0,
            x: 100, // Start from the right side
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

     

    const cardVariantsTop = {
        offscreen: {
            opacity: 0,
            y: -100, // Start from the top side
        },
        onscreen: {
            opacity: 1,
            y: 0, // Move to the original position
            transition: {
                type: "spring",
                bounce: 0.5,
                duration: 0.8
            }
        }
    };

    const cardVariantsBottom = {
        offscreen: {
            opacity: 0,
            y: 100, // Start from the bottom side
        },
        onscreen: {
            opacity: 1,
            y: 0, // Move to the original position
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <section id="project" className="overflow-x-hidden  py-10 md:py-20">
            {/* heading */}
            <motion.div 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.6 }} // Set once: false for animation on every scroll
            variants={cardVariantsTop}
             className="flex justify-center items-center pb-10 md:pb-14">
                <h1 className="text-[30px] font-bold border-b-4 border-[#FDC435] inline-block mt-20  mb-8  md:pt-5"> Projects </h1>
            </motion.div>

            {/* card 1*/}
            <motion.div 
             initial="offscreen"
             whileInView="onscreen"
             viewport={{ once: false, amount: 0.4 }} // Set once: false for animation on every scroll
             variants={cardVariantsRight}
            className=" w-full flex justify-center items-center pb-16  ">
                <div className="w-[280px] grid md:grid-cols-2  md:w-[760px]  h-auto shadow-xl rounded-[10px]">
                    {/* image */}
                    <div className="">
                        <Image src="/images/projects/E-commerce.png" alt="image" width={350} height={200} className="h-[200px] w-full md:h-[300px] rounded-[10px]" ></Image>
                    </div>

                    {/* description */}
                    <div className="px-4 py-5 md:px-5 md:py-16 flex flex-col gap-3 bg-secondary ">
                        <h1 className="text-[20px] md:text-[22px] font-bold">  E-Commerce Website </h1>
                        <p className="text-[14px] text-justify">A modern, fully responsive e-commerce platform built with Next.js, Redux Toolkit, and Tailwind CSS. Users can browse and select products, add them to the cart, update quantities, and remove items as needed. Features include a dynamic cart and checkout system.</p>

                        <motion.button
                        
                            whileHover={{borderColor: "#FDC435", color: "#000"}}
                            whileTap={{scale:0.9}}
                            transition={{  duration: 0.4, ease: "easeInOut"}}
                            className="flex justify-start">
                            <Link href="https://hackathon-3-blond-three.vercel.app/" className=" text-left mt-2 py-2 px-6 border-[1px] hover:border-[1px] shadow-lg hover:border-[#FDC435] rounded-[5px] text-[13px] text-primary transition-all duration-300 hover:bg-[#FDC435] "> View Projects</Link> </motion.button>
                    </div>
                </div>
            </motion.div>



             {/* Card 2 */}
             <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.4 }} // Set once: false for animation on every scroll
              variants={cardVariantsLeft}
              className="w-full flex justify-center items-center pb-16  ">
                <div className="w-[280px] grid md:grid-cols-2  md:w-[760px]  h-auto shadow-xl rounded-[10px]">
                    {/* image */}
                    <div className="md:order-2">
                        <Image src="/images/projects/travel-blog.png" alt="image" width={350} height={200} className="h-[200px] w-full md:h-[300px] rounded-[10px]" ></Image>
                    </div>

                    {/* description */}
                    <div className="px-4 py-5 md:px-5 md:py-16 flex flex-col gap-3 bg-secondary ">
                        <h1 className="text-[20px] md:text-[22px] font-bold">  Blog Website </h1>
                        <p className="text-[14px] text-justify"> A modern blogging website built with Next.js, Tailwind CSS, and Sanity CMS. It offers a clean UI, dynamic blog posts, and seamless content management with a mobile-friendly design.</p>

                        <motion.button
                            whileHover={{borderColor: "#FDC435", color: "#000"}}
                            
                            transition={{  duration: 0.4, ease: "easeInOut"}}
                            className="flex justify-start">
                            <Link href="https://assignment-8-blog-website.vercel.app/" className=" text-left mt-2 py-2 px-6 border-[1px] hover:border-[1px] shadow-lg hover:border-[#FDC435] rounded-[5px] text-[13px] text-primary transition-all duration-300 hover:bg-[#FDC435] "> View Projects</Link> </motion.button>
                    </div>
                </div>
            </motion.div>



             {/* card 3*/}
             <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.4 }} // Set once: false for animation on every scroll
              variants={cardVariantsRight} 
             className="w-full flex justify-center items-center pb-16  ">
                <div className="w-[280px] grid md:grid-cols-2  md:w-[760px]  h-auto shadow-xl rounded-[10px]">
                    {/* image */}
                    <div className="">
                        <Image src="/images/projects/clone-figma.png" alt="image" width={350} height={200} className="h-[200px] w-full md:h-[300px] rounded-[10px]" ></Image>
                    </div>

                    {/* description */}
                    <div className="px-4 py-5 md:px-5 md:py-16 flex flex-col gap-3 bg-secondary ">
                        <h1 className="text-[20px] md:text-[22px] font-bold">   Figma Design Clone </h1>
                        <p className="text-[14px] text-justify">A responsive Figma design clone built using Next.js and Tailwind CSS.
                             Optimized for desktop and mobile screens, ensuring a clean UI with pixel-perfect accuracy and smooth responsiveness.</p>

                        <motion.button
                            whileHover={{borderColor: "#FDC435", color: "#000"}}
                            
                            transition={{  duration: 0.4, ease: "easeInOut"}}
                            className="flex justify-start">
                            <Link href="https://assignment-6-figma-design.vercel.app/" className=" text-left mt-2 py-2 px-6 border-[1px] hover:border-[1px] shadow-lg hover:border-[#FDC435] rounded-[5px] text-[13px] text-primary transition-all duration-300 hover:bg-[#FDC435] "> View Projects</Link> </motion.button>
                    </div>
                </div>
            </motion.div>



             {/* card 4 */}
             <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.4 }} // Set once: false for animation on every scroll
              variants={cardVariantsLeft} 
             className="w-full flex justify-center items-center pb-16  ">
                <div className="w-[280px] grid md:grid-cols-2  md:w-[760px]  h-auto shadow-xl rounded-[10px]">
                    {/* image */}
                    <div className="md:order-2">
                        <Image src="/images/projects/static-resume.png" alt="image" width={350} height={200} className="h-[200px] w-full md:h-[300px] rounded-[10px]" ></Image>
                    </div>

                    {/* description */}
                    <div className="px-4 py-5 md:px-5 md:py-16 flex flex-col gap-3 bg-secondary ">
                        <h1 className="text-[20px] md:text-[22px] font-bold">  Static Resume Builder </h1>
                        <p className="text-[14px] text-justify">A structured, well-formatted static resume built with HTML and CSS. Features a clean layout with sections for personal details, education, skills, and work experience. Includes an interactive toggle button to show or hide skills dynamically.</p>

                        <motion.button
                            whileHover={{borderColor: "#FDC435", color: "#000"}}
                            
                            transition={{  duration: 0.4, ease: "easeInOut"}}
                            className="flex justify-start">
                            <Link href="https://hackathon-milestone-1-2-qgdp.vercel.app/" className=" text-left mt-2 py-2 px-6 border-[1px] hover:border-[1px] shadow-lg hover:border-[#FDC435] rounded-[5px] text-[13px] text-primary transition-all duration-300 hover:bg-[#FDC435] "> View Projects</Link> </motion.button>
                    </div>
                </div>
            </motion.div>



             {/* card 5*/}
             <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.4 }} // Set once: false for animation on every scroll
              variants={cardVariantsRight}
              className="w-full flex justify-center items-center pb-16  ">
                <div className="w-[280px] grid md:grid-cols-2  md:w-[760px]  h-auto shadow-xl rounded-[10px]">
                    {/* image */}
                    <div className="">
                        <Image src="/images/projects/dynamic-resume-builder.png" alt="image" width={350} height={200} className="h-[200px] w-full md:h-[300px] rounded-[10px]" ></Image>
                    </div>

                    {/* description */}
                    <div className="px-4 py-5 md:px-5 md:py-16 flex flex-col gap-3 bg-secondary ">
                        <h1 className="text-[20px] md:text-[22px] font-bold"> Dynamic Resume Builder </h1>
                        <p className="text-[14px] text-justify"> A web application that allows users to create and preview resumes dynamically. Features an interactive UI, enabling users to input details and generate a well-formatted resume instantly. Built with HTML, CSS, and TypeScript.</p>

                        <motion.button
                            whileHover={{borderColor: "#FDC435", color: "#000"}}
                            
                            transition={{  duration: 0.4, ease: "easeInOut"}}
                            className="flex justify-start">
                            <Link href="https://hackathon-milestone-3-kohl-three.vercel.app/" className=" text-left mt-2 py-2 px-6 border-[1px] hover:border-[1px] shadow-lg hover:border-[#FDC435] rounded-[5px] text-[13px] text-primary transition-all duration-300 hover:bg-[#FDC435] "> View Projects</Link> </motion.button>
                    </div>
                </div>
            </motion.div>




             {/* card 6*/}
             <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.4 }} // Set once: false for animation on every scroll
              variants={cardVariantsLeft}
              className="w-full flex justify-center items-center pb-16  ">
                <div className="w-[280px] grid md:grid-cols-2  md:w-[760px]  h-auto shadow-xl rounded-[10px]">
                    {/* image */}
                    <div className="md:order-2">
                        <Image src="/images/projects/calculator.jpg" alt="image" width={350} height={200} className="h-[200px] w-full md:h-[300px] rounded-[10px]" ></Image>
                    </div>

                    {/* description */}
                    <div className="px-4 py-5 md:px-5 md:py-16 flex flex-col gap-3 bg-secondary ">
                        <h1 className="text-[20px] md:text-[22px] font-bold"> CLI Calculator </h1>
                        <p className="text-[14px] text-justify"> A simple and interactive CLI calculator built with TypeScript &
                             Node.js, allowing users to perform Addition, Subtraction, Multiplication, and Division through a user-friendly terminal interface.</p>

                        <motion.button
                            whileHover={{borderColor: "#FDC435", color: "#000"}}
                            
                            transition={{  duration: 0.4, ease: "easeInOut"}}
                            className="flex justify-start">
                            <Link href="https://hackathon-3-blond-three.vercel.app/" className=" text-left mt-2 py-2 px-6 border-[1px] hover:border-[1px] shadow-lg hover:border-[#FDC435] rounded-[5px] text-[13px] text-primary transition-all duration-300 hover:bg-[#FDC435] "> View Projects</Link> </motion.button>
                    </div>
                </div>
            </motion.div>



             {/* card 7*/}
             <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.4 }} // Set once: false for animation on every scroll
              variants={cardVariantsRight} 
             className="w-full flex justify-center items-center pb-16  ">
                <div className="w-[280px] grid md:grid-cols-2  md:w-[760px]  h-auto shadow-xl rounded-[10px]">
                    {/* image */}
                    <div className="">
                        <Image src="/images/projects/number-guessing-game.png" alt="image" width={350} height={200} className="h-[200px] w-full md:h-[300px] rounded-[10px]" ></Image>
                    </div>

                    {/* description */}
                    <div className="px-4 py-5 md:px-5 md:py-16 flex flex-col gap-3 bg-secondary ">
                        <h1 className="text-[20px] md:text-[22px] font-bold">  CLI Number Guessing Game </h1>
                        <p className="text-[14px] text-justify">A simple CLI-based game built with TypeScript & Node.js, where users guess
                             a random number between 1-6. Provides instant feedback on whether the guess is correct or not.</p>

                        <motion.button
                            whileHover={{borderColor: "#FDC435", color: "#000"}}
                            
                            transition={{  duration: 0.4, ease: "easeInOut"}}
                            className="flex justify-start">
                            <Link href="https://hackathon-3-blond-three.vercel.app/" className=" text-left mt-2 py-2 px-6 border-[1px] hover:border-[1px] shadow-lg hover:border-[#FDC435] rounded-[5px] text-[13px] text-primary transition-all duration-300 hover:bg-[#FDC435] "> View Projects</Link> </motion.button>
                    </div>
                </div>
            </motion.div>





             {/* card 8*/}
             <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.4 }} // Set once: false for animation on every scroll
              variants={cardVariantsLeft}
              className="w-full flex justify-center items-center pb-16  ">
                <div className="w-[280px] grid md:grid-cols-2  md:w-[760px]  h-auto shadow-xl rounded-[10px]">
                    {/* image */}
                    <div className="md:order-2">
                        <Image src="/images/projects/Todo-List.jpg" alt="image" width={350} height={200} className="h-[200px] w-full md:h-[300px] rounded-[10px]" ></Image>
                    </div>

                    {/* description */}
                    <div className="px-4 py-5 md:px-5 md:py-16 flex flex-col gap-3 bg-secondary ">
                        <h1 className="text-[20px] md:text-[22px] font-bold"> CLI To-Do List </h1>
                        <p className="text-[14px] text-justify"> A simple CLI-based to-do list built with TypeScript & Node.js, allowing users to add multiple tasks
                             dynamically and view their updated list in the terminal.</p>

                        <motion.button
                            whileHover={{borderColor: "#FDC435", color: "#000"}}
                            
                            transition={{  duration: 0.4, ease: "easeInOut"}}
                            className="flex justify-start">
                            <Link href="https://hackathon-3-blond-three.vercel.app/" className=" text-left mt-2 py-2 px-6 border-[1px] hover:border-[1px] shadow-lg hover:border-[#FDC435] rounded-[5px] text-[13px] text-primary transition-all duration-300 hover:bg-[#FDC435] "> View Projects</Link> </motion.button>
                    </div>
                </div>
            </motion.div>



             {/* card 9*/}
             <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.4 }} // Set once: false for animation on every scroll
              variants={cardVariantsRight}
              className="w-full flex justify-center items-center pb-16 ">
                <div className="w-[280px] grid md:grid-cols-2  md:w-[760px]  h-auto shadow-xl rounded-[10px]">
                    {/* image */}
                    <div className="">
                        <Image src="/images/projects/atm.png" alt="image" width={350} height={200} className="h-[200px] w-full md:h-[300px] rounded-[10px]" ></Image>
                    </div>

                    {/* description */}
                    <div className="px-4 py-5 md:px-5 md:py-16 flex flex-col gap-3 bg-secondary ">
                        <h1 className="text-[20px] md:text-[22px] font-bold"> CLI ATM Simulator </h1>
                        <p className="text-[14px] text-justify"> A CLI-based ATM system built with TypeScript & Node.js, allowing users to authenticate via PIN, check balance,
                             withdraw cash, and use fast cash options. Provides a simple banking experience directly in the terminal.</p>

                        <motion.button
                            whileHover={{borderColor: "#FDC435", color: "#000"}}
                            
                            transition={{  duration: 0.4, ease: "easeInOut"}}
                            className="flex justify-start">
                            <Link href="https://hackathon-3-blond-three.vercel.app/" className=" text-left mt-2 py-2 px-6 border-[1px] hover:border-[1px] shadow-lg hover:border-[#FDC435] rounded-[5px] text-[13px] text-primary transition-all duration-300 hover:bg-[#FDC435] "> View Projects</Link> </motion.button>
                    </div>
                </div>
            </motion.div>



        </section>
    )
}

export default Projects;