import { SelectedPage } from "@/types";
import Link from "./Link";
import ActionButton from "../ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = `flex items-center justify-between`;
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
