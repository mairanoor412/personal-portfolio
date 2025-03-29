import { motion } from "framer-motion";

interface ButtonPropType {
    text: string;
}


const Button = ({ text }: ButtonPropType) => {
    return (
        <motion.button
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.8, ease:"easeIn" }}

            className="px-5 py-2 bg-[#FDC435] border-[1px] shadow-lg rounded-[5px] text-[15px] text-primary transition-all duration-300  hover:border-[1px] hover:text-primary">
            {text}
        </motion.button>
    )
};
export default Button;

