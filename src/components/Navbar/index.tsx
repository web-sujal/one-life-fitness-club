type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = `flex items-center justify-between`;

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
              <p className="duration-250 cursor-pointer transition hover:text-white">
                Home
              </p>
              <p className="duration-250 cursor-pointer text-[#ffd8b1] transition hover:text-white hover:underline hover:underline-offset-2">
                Our Classes
              </p>
              <p className="duration-250 cursor-pointer transition hover:text-white">
                Testimonials
              </p>
              <p className="duration-250 cursor-pointer transition hover:text-white">
                Contact Us
              </p>
            </div>

            {/* INNER RIGHT SIDE */}
            <div className={`${flexBetween} gap-6`}>
              <p>Sign Up</p>
              <p>Become a Member</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
