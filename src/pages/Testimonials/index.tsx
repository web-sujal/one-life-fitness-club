import { SelectedPage } from "@/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Testimonials = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Testimonials)}
    >
      Testimonials
    </motion.div>
  );
};

export default Testimonials;
