import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import OurClasses from "@/pages/OurClasses";
import Testimonials from "@/pages/Testimonials";
import { useState } from "react";
import { SelectedPage } from "./types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <div className="app">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <Testimonials setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
