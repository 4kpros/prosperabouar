import { NextSeo } from "next-seo";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Layout({ children, title, description }) {
  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        openGraph={{ title, description }}
      />
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear", duration: 0.15 }}
      >
        {children}
      </motion.main>
    </div>
  );
}
