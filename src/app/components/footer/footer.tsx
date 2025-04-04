"use client"
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-[#F9FAFF] overflow-hidden pt-52">

            {/* linkdin/ gitHup/ Contact */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex justify-center items-center gap-3"
            >
                <motion.div
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                    className="cursor-pointer"
                >
                    <BsLinkedin className="text-primary size-5" />
                </motion.div>

                <motion.div
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                    className="cursor-pointer"
                >
                    <FaSquareGithub className="text-primary size-6" />
                </motion.div>

                <motion.div
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                    className="cursor-pointer"
                >
                    <MdOutlineContactPhone className="text-primary size-6" />
                </motion.div>
            </motion.div>



            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-primary text-center text-[12px] md:text-[15px] pt-4"
            >
                © 2025 Maira Naeem. All rights reserved.
            </motion.p>



            {/* <svg className="w-[100%] h-[280px]" width="100%" height="auto" preserveAspectRatio="xMinYMin slice" viewBox="0 0 829 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 158C106 113 170 65 246 100C280.564 115.918 322.61 156.563 418 136C454.994 128.025 491.614 98.0388 549 69C655.56 15.0781 783.792 3.71139 828 1V195L1 190V158Z" fill="#FDC435" stroke="#FDC435" />
            </svg> */}

            {/* <motion.svg
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-[100%] h-[100px] md:h-[220px]" width="100%" height="auto" preserveAspectRatio="xMinYMin slice" viewBox="0 0 829 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M458 101C494.994 93.0251 503.614 85.0388 561 56C667.56 2.07811 783.792 3.71139 828 1V171L1 166V134C76 101 161 56 238 77C339.516 104.686 362.61 121.563 458 101Z" fill="#FDC435" stroke="#FDC435" />
            </motion.svg> */}

            <motion.svg
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-[100%] h-[100px] md:h-[220px]"
                width="100%"
                height="auto"
                preserveAspectRatio="xMinYMin slice"
                viewBox="0 0 829 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M458 101C494.994 93.0251 503.614 85.0388 561 56C667.56 2.07811 783.792 3.71139 828 1V171L1 166V134C76 101 161 56 238 77C339.516 104.686 362.61 121.563 458 101Z"
                    fill="#FDC435"
                    stroke="#FDC435"
                />
            </motion.svg>



        </footer>
    )
}
export default Footer;





// © 2025 Your Name. All rights reserved.