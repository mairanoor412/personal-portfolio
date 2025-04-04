import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open }: any) => {
    return (
        <AnimatePresence mode="wait">

            {open && (
                <motion.div
                key="mobile-menu" // ensures correct animation
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -200 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 w-[250px] h-screen z-20 bg-[#FDC435]  border-[2px] border-secondary opacity-90 py-10 md:hidden"
                >
                    <div className=" opacity-80 py-10 m-6 rounded-3xl md:hidden">
                        <ul className="flex flex-col justify-center items-center gap-10 ">
                            <li className="text-[16px] font-[500] text-primary">
                                <Link href="/"  className="hover:underline hover:text-black"> Home </Link>
                            </li>
                            <li className="text-[16px] font-[500] text-primary">
                                <Link href="projects-page"  className="hover:underline hover:text-black">  Projects</Link>
                            </li>
                            <li className="text-[16px] font-[500] text-primary">
                                <Link href="/about-me"  className="hover:underline hover:text-black"> About Me </Link>
                            </li>
                            <li className="text-[16px] font-[500] text-primary">
                                <Link href="/contact"  className="hover:underline hover:text-black"> Contact </Link>
                            </li>

                        </ul>
                    </div>
                </motion.div>

            )}


        </AnimatePresence>
    )
}

export default ResponsiveMenu;






// transition={{ duration: 0.5 }}
