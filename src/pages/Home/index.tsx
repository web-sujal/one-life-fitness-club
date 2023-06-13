import { SelectedPage } from "@/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="min-h-screen w-full bg-lightCream pt-32"
      >
        {/* IMAGE AND HEADINGS */}
        <div className="mx-auto flex w-5/6 flex-col items-center justify-between gap-8 pt-12 md:flex-row">
          {/* HEADING */}
          <div className="flex flex-col items-center justify-center gap-2 text-center font-heading text-4xl font-extrabold text-primary-500 md:text-left">
            <span>Transform Your Body, Transform Your Life!</span>
            <p className="max-w-xs text-base text-secondary-100 md:max-w-lg">
              Unleash Your Full Potential at One Life Fitness Club
            </p>
          </div>

          {/* IMAGE */}
        </div>
      </motion.div>
    </section>
  );
};

export default Home;

// Headline: "Transform Your Body, Transform Your Life!"
// Subheadline: "Unleash Your Full Potential at One Life Fitness Club"
