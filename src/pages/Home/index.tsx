import ActionButton from "@/components/ActionButton";
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
        className="min-h-screen bg-lightCream pt-28"
      >
        {/* IMAGE AND HEADINGS */}
        <div className="mx-auto flex w-[80vw] basis-1/2 flex-col items-center justify-center pt-12 md:flex-row md:gap-6 md:pt-0">
          {/* HEADING */}
          <div className="flex flex-col items-center justify-center gap-2 text-center font-heading text-5xl font-extrabold text-primary-500 md:w-1/2 md:max-w-lg md:items-start md:pt-0 md:text-left md:text-6xl">
            <h2>
              Transform Your <span className="text-secondary-300">Body</span>,
              Transform Your <span className="text-secondary-300">Life</span>!
            </h2>

            {/* SUBHEADING */}
            <div className="my-4 flex flex-col text-base text-secondary-100 md:mt-0 md:text-lg">
              <p>Unleash Your Full Potential at</p>
              <span className="underline-secondary-500 underline">
                One Life Fitness Club
              </span>
            </div>

            {/* CTA BUTTON */}
            <div className="text-lg">
              <ActionButton>Join Now</ActionButton>
            </div>
          </div>

          {/* IMAGE */}

          <div className="basis-1/2 md:w-1/2">
            <img
              src="/images/ronit.png"
              className=" object-cover"
              alt="trainer-img"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;

// Headline: "Transform Your Body, Transform Your Life!"
// Subheadline: "Unleash Your Full Potential at One Life Fitness Club"
