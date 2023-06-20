import { SelectedPage, OurClassesType } from "@/types";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ourClasses: Array<OurClassesType> = [
  {
    img: "/images/deadlift.jpg",
    title: "Strength Training",
    description:
      "Unleash your power and conquer new heights with our Strength Training classes. Transform your physique and build unwavering strength. Join us today and redefine your limits!",
  },
  {
    img: "/images/back.jpeg",
    title: "Exclusive Workout Plan",
    description:
      "Elevate your fitness journey with our Exclusive Workout Plan. Unlock personalized training, expert guidance, and state-of-the-art equipment. Experience the difference now!",
  },
  {
    img: "/images/abs.jpg",
    title: "Abs Core Classes",
    description:
      "Sculpt and define your core with our dynamic Abs Core Classes. Get those enviable six-pack abs while improving posture and stability. Join us for a core-blasting workout!",
  },
  {
    img: "/images/biceps.jpg",
    title: "Hypertrophy Training",
    description:
      "Maximize muscle growth and define your physique with our Hypertrophy Training. Unleash your strength potential under expert guidance. Start building your dream body!",
  },
  {
    img: "/images/diet.jpg",
    title: "Customized Diet Plan",
    description:
      "Fuel your fitness goals with a personalized Diet Plan. Optimize your nutrition and achieve results faster. Discover the power of a tailored diet today!",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="ourclasses">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        className="mt-4 py-14 text-secondary-100"
      >
        <div className="mx-auto w-5/6">
          {/* HEADING */}
          <motion.p
            initial={{ x: "-50px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, once: true }}
            className="py-4 font-heading text-3xl font-bold"
          >
            Unlock Your Potential with our Dynamic Classes
          </motion.p>
          <motion.p
            initial={{ x: "-50px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, once: true }}
            className="pb-8 text-justify font-body md:text-left"
          >
            Ignite your passion and achieve your fitness goals with our
            invigorating classes. Led by expert instructors, our high-energy
            workouts challenge your body and revitalize your spirit. From cardio
            to strength training and mind-body fusion, we offer something for
            everyone. Join us to sweat, conquer, and transform into the best
            version of yourself. Unleash your true potential today!
          </motion.p>

          {/* SWIPER CAROUSEL */}

          <motion.div
            initial={{ y: "50px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, amount: 0.5, once: true }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={isAboveMediumScreens ? 3 : 1}
              centeredSlides={true}
              navigation
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              className="mySwiper"
            >
              {ourClasses.map((classes) => (
                <SwiperSlide key={classes.title}>
                  <div className="relative">
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-primary-300 p-5 text-center text-white opacity-0 transition duration-500 hover:opacity-90">
                      <p className="text-2xl font-bold">{classes.title}</p>
                      <p className="mx-4 mt-5 max-w-lg">
                        {classes.description}
                      </p>
                    </div>
                    <img
                      src={classes.img}
                      className="mx-auto h-[353px] object-cover"
                      alt={`${classes.title}-img`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
