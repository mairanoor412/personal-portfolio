"use client"
import { motion } from "framer-motion";
import Button from "../button/button";


const Contact = () => {

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

        <section className="overflow-x-hidden bg-[#F9FAFF] h-screen">

            {/* heading */}
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.1 }} // Set once: false for animation on every scroll
                variants={cardVariantsLeft}
                className="flex justify-center items-center pb-12 md:pb-10 pt-20 lg:pb-8 ">
                <h1 className="text-primary text-[25px] md:text-[30px]  font-bold border-b-4 border-[#FDC435] inline-block pb-1"> Contact </h1>
            </motion.div>

            {/* input fields */}
            <form action="https://formspree.io/f/xgvalyvd"
                method="POST">
                <div className="grid grid-cols-1 justify-items-center">

                    {/* name */}
                    <motion.div className=""
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-[14px] text-primary"> Name</h1>
                        <input className="h-9 w-72 md:w-80  border-primary border-[1px] px-4 py-2 text-primary text-[13px] rounded-[4px]" type="text" name="Username" id="username" placeholder="Full Name" required />
                    </motion.div>
                    <br />


                    {/* email */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-[14px] text-primary"> Email </h1>
                        <input className="h-9  w-72 md:w-80 border-primary border-[1px] px-4 py-2 text-primary text-[13px] rounded-[4px]" type="email" name="Email" id="email" placeholder="email123@gmail.com" required />
                    </motion.div>
                    <br />


                    {/* Phone */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-[14px] text-primary "> Phone </h1>
                        <input className="h-9  w-72 md:w-80 border-primary border-[1px] px-4 py-2 text-primary text-[13px] rounded-[4px]" type="tel" name="PhoneNumber" id="phone" placeholder="Phone Number"   pattern="^(\+?[1-9]\d{0,2})?[0-9]{10,15}$"   title="Enter a valid phone number (e.g., 03001234567 or +923001234567)" required />
                    </motion.div>
                    <br />


                    {/* Message */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-[14px] text-primary "> Message </h1>
                        <textarea className="h-32 w-72 md:w-80 border-primary border-[1px] px-4 py-2 text-primary text-[13px] rounded-[4px] text-start" id="textarea" name="Message" cols={30} rows={10} placeholder="Write your message here.." minLength={5} required />
                    </motion.div>

                    {/* button */}
                    <motion.div className=" w-72 pt-2 md:w-80 text-end"
                        initial={{ opacity: 0, scale: 0.5, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <Button text="Submit"></Button>
                    </motion.div>
                </div>
            </form>
        </section>

    )
}

export default Contact;