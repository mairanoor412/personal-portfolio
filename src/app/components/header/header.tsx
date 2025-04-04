"use client"
import { useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveMenu from "../responsiveMenu/responsiveMenu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";


const Header = () => {
    const [open, setopen] = useState(false)
    const router = useRouter(); // ✅ use the hook here

    // Disable scroll when menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"; // Disable scrolling when menu is open
        } else {
            document.body.style.overflow = "auto"; // Enable scrolling when menu is closed
        }

        return () => {
            document.body.style.overflow = "auto"; // Cleanup when component unmounts
        };
    }, [open]);




      // ✅ Close mobile nav on route change
     useEffect(() => {
         const handleRouteChange = () => {
             setopen(false);
         };
 
         router.events.on("routeChangeStart", handleRouteChange);
 
         return () => {
             router.events.off("routeChangeStart", handleRouteChange);
         };
     }, [router]);

    

    return (
        <header className="overflow-x-hidden ">
            <div className="md:absolute md:top-0 md:left-0  md:z-50  hidden md:w-[769px] lg:w-full xl:w-[1440px] md:mx-auto md:flex  md:p-5  md:flex-row md:items-center">
                <a className="md:flex md:title-font md:font-medium md:items-center md:text-gray-900 md:mb-0">

                    <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
                        className="md:ml-5 lg:ml-32 md:text-xl">
                        Portfolio
                    </motion.span>
                </a>
                <nav className="lg:ml-auto   lg:mr-80 md:relative md:z-10  md:flex md:flex-wrap md:items-center md:mx-auto md:gap-5 lg:gap-10 md:text-base md:justify-center">

                    
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        >
                       <Link href="/"  className="text-[15px]  relative after:block after:content-[''] after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">
                        Home
                        </Link>
                    </motion.div>
                    


                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        >
                       <Link href="#project"  className="text-[15px]  relative after:block after:content-[''] after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">
                        Projects
                        </Link>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        >
                       <Link href="/about-me"  className="text-[15px]  relative after:block after:content-[''] after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">
                        About Me
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        >
                       <Link href="/contact"  className="text-[15px]  relative after:block after:content-[''] after:w-0 after:h-[2px] after:bg-yellow-500 after:transition-all after:duration-300 hover:after:w-full">
                        Contact
                        </Link>
                    </motion.div>
                </nav>

            </div>

            {/*Mobile Hamburger */}
            <div className=" fixed top-5 left-5 z-30 md:hidden overflow-hidden" onClick={() =>
                setopen(!open)}>
                {open ? (
                    <IoClose className="size-6 text-primary cursor-pointer" /> // Close Icon
                ) : (
                    <GiHamburgerMenu className="size-6 text-primary cursor-pointer" /> // Hamburger Icon
                )}
            </div>



            {/* Mobile Sidebar */}
            <ResponsiveMenu open={open} />

        </header>






    )
}

export default Header;












{/* <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#F1C21B" d="M46,-47.5C61.8,-41.6,78.1,-29.1,77,-16.4C75.9,-3.6,57.3,9.4,45.9,24C34.4,38.6,30.1,54.8,20.7,59.3C11.3,63.7,-3.3,56.4,-9.4,45.6C-15.5,34.8,-13.2,20.5,-15,11.5C-16.8,2.5,-22.7,-1.3,-31.5,-15C-40.4,-28.8,-52.3,-52.6,-47.5,-60.4C-42.8,-68.1,-21.4,-59.9,-3.1,-56.1C15.1,-52.4,30.3,-53.3,46,-47.5Z" transform="translate(100 100)" />
  </svg>
  
  <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#F1C21B" d="M34.4,-40.5C42.9,-33.9,47,-21.4,52.7,-6.7C58.4,8.1,65.7,25.1,59.3,32.4C52.9,39.6,32.7,37,17.9,37.3C3,37.7,-6.5,40.9,-11.3,36.7C-16,32.5,-15.9,20.8,-18.7,12.5C-21.5,4.2,-27.3,-0.8,-31.6,-10.7C-35.9,-20.5,-38.9,-35.2,-33.4,-42.3C-27.9,-49.4,-13.9,-49,-0.5,-48.4C13,-47.8,25.9,-47.1,34.4,-40.5Z" transform="translate(100 100)" />
  </svg>
  
  
  {/* ok */}
{/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#F1C21B" d="M18.3,-22.8C26,-23.5,36.2,-22.4,40.8,-17.2C45.3,-12.1,44.1,-2.9,47.1,9.8C50,22.6,57,39,52,45.5C47,52,30.2,48.6,15.5,53.1C0.7,57.7,-11.8,70.2,-25.4,72.6C-39.1,75,-53.8,67.2,-56.8,54.4C-59.8,41.6,-51,23.9,-51.4,8.5C-51.8,-6.8,-61.4,-19.6,-59.6,-28.7C-57.8,-37.9,-44.6,-43.3,-32.7,-40.7C-20.9,-38.1,-10.4,-27.4,-2.6,-23.4C5.3,-19.4,10.6,-22,18.3,-22.8Z" transform="translate(100 100)" />
  </svg>
  
  
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#F1C21B" d="M48.2,-58.9C61.4,-56.7,70.4,-41.2,69.3,-26.8C68.1,-12.3,56.8,1.2,52.5,17.9C48.2,34.5,51,54.3,43.4,60.1C35.9,65.8,17.9,57.6,-0.5,58.2C-18.9,58.9,-37.8,68.5,-45,62.6C-52.2,56.7,-47.7,35.4,-43.4,20.7C-39.2,6,-35.2,-2.1,-36.1,-15.7C-37.1,-29.2,-43,-48.3,-37.9,-53.2C-32.7,-58.1,-16.3,-48.8,0.6,-49.6C17.5,-50.3,34.9,-61.2,48.2,-58.9Z" transform="translate(100 100)" />
  </svg>
  
  
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#F1C21B" d="M22.1,-33.6C26.9,-27,27.8,-18.1,29.9,-10.1C31.9,-2.1,35.1,5.2,36.9,15.8C38.7,26.3,39,40.2,32.6,45.6C26.2,50.9,13.1,47.7,-2.7,51.3C-18.5,55,-36.9,65.6,-43.1,60.2C-49.3,54.8,-43.2,33.5,-46.4,16.7C-49.6,0,-62,-12.1,-63.5,-24.7C-64.9,-37.3,-55.5,-50.4,-43.1,-54.5C-30.7,-58.7,-15.4,-53.9,-3.4,-49.3C8.7,-44.7,17.3,-40.2,22.1,-33.6Z" transform="translate(100 100)" />
  </svg>
  
  
  <svg width="600" height="600" viewBox="0 0 316 221" fill="#F1C21B" xmlns="http://www.w3.org/2000/svg">
  <path d="M307 100C239 -2 285 55 159 75C33 95 33 5 33 5C33 5 3.99998 -25 0.999981 75C-1.37644 154.214 36.4062 134.913 52.2159 123.466C62.6587 98.6609 59 118 59 118C59 118 56.3644 120.463 52.2159 123.466C48.2143 132.972 42.1421 148.959 33 175C-2.28882e-05 269 375 202 307 100Z" fill="#F1C21B"/>
  <path d="M52.2159 123.466C36.4062 134.913 -1.37644 154.214 0.999981 75C3.99998 -25 33 5 33 5C33 5 33 95 159 75C285 55 239 -2 307 100C375 202 -2.28882e-05 269 33 175C42.1421 148.959 48.2143 132.972 52.2159 123.466ZM52.2159 123.466C62.6587 98.6609 59 118 59 118C59 118 56.3644 120.463 52.2159 123.466Z" stroke="#F1C21B"/>
  </svg> */}

// figma
{/* <svg width="563" height="474" viewBox="0 0 563 474" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M562 345V1.00006H105C102 6 105 37.8308 105 75C105 134 76.9999 155 25.9999 198C13.9999 203 -61.6388 305.167 132 317C312 328 226 455 357 473C479 473 527 393 562 345Z" fill="#F7F70C" stroke="#EEF522"/>
  </svg> */}


{/* figma 2 done */ }
{/* <svg width="556" height="477" viewBox="0 0 556 477" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M555 347V1.00006H98.0001C95 6 103.898 38.3017 98.0001 75C89.0001 131 71.0001 139 22.0001 192C10.0001 197 -57.9734 294.138 135 314.067C329 334.103 242 453 376 476C483 470 513 400 555 347Z" fill="#F7F70C" stroke="#EEF522"/>
  </svg>
   */}
