import { motion } from "framer-motion";

const Reveal = ({ children, delay = 0, className = "", as = "div" }) => {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
