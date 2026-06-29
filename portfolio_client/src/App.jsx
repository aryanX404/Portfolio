import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/Techstack";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import { Helmet } from "react-helmet-async";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <>
        <Helmet>
          <title>Aryan Singh | Full Stack Developer</title>
          <meta
            name="description"
            content="Portfolio of Aryan Singh, Full Stack MERN Developer specializing in React, Node.js, Express and MongoDB."
          />
          <meta
            name="keywords"
            content="Aryan Singh, MERN Developer, React Developer, Portfolio, Node.js, MongoDB, Full Stack Developer"
          />

          <meta name="author" content="Aryan Singh" />
        </Helmet>
        <Navbar />
        <Profile />
        <About />
        <Projects />
        <TechStack />
        <Contact />
        <Footer />
      </>
    </div>
  );
}

export default App;
