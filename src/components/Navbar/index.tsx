import { SelectedPage } from "@/types";
import Link from "./Link";
import ActionButton from "../ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import { HiBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = `flex items-center justify-between`;
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-30 flex w-full bg-secondary-300 py-4 text-gray-50 drop-shadow`}
      >
        <div className={`${flexBetween} mx-auto flex w-5/6 gap-8`}>
          {/* LOGO */}
          <div className="flex w-1/3 min-w-fit flex-1 flex-col font-heading font-extrabold uppercase text-primary-300">
            <span>ONE LIFE</span>
            <span>FITNESS CLUB</span>
          </div>

          {/* RIGHT SIDE */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} flex-2 w-full gap-16 text-sm`}>
              {/* INNER LEFT SIDE */}
              <div className={`${flexBetween} gap-6`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Testimonials"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>

              {/* INNER RIGHT SIDE */}
              <div className={`${flexBetween} gap-6`}>
                <p>Sign Up</p>
                <ActionButton>Become a Member</ActionButton>
              </div>
            </div>
          ) : (
            <div className="">
              <HiBars3
                className="text-2xl text-lightCream"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              />
            </div>
          )}
        </div>

        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="absolute right-0 top-0 z-40 h-screen w-[300px]  bg-secondary-100 text-lightCream drop-shadow-xl">
            <div className="mx-auto my-10 flex w-5/6 items-center justify-end pr-2">
              <AiOutlineClose
                className="text-2xl text-lightCream transition duration-150 hover:scale-105 hover:text-white"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              />
            </div>
            <div className="mx-auto flex w-3/5 flex-col items-start justify-center gap-6 text-lg">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
