import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");

  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
