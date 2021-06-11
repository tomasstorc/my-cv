import React, { useState } from "react";
import Header from "../componenets/Header/Header";
import Navbar from "../componenets/Navbar/Navbar";
import NavMobile from "../componenets/NavMobile/NavMobile";
import AboutMe from "../componenets/AboutMe/AboutMe";
import Experience from "../componenets/Experience/Experience";
import Skills from "../componenets/Skills/Skills";
import Portfolio from "../componenets/Portfolio/Portfolio";
import Contact from "../componenets/Contact/Contact";
import NavIcon from "../componenets/NavMobile/NavIcon";
import Head from "next/head";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Head>
        <title>Tomáš Štorc | Web developer and Linux Specialist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Navbar />
      {!open && <NavIcon open={open} setOpen={setOpen} />}
      {open && <NavMobile open={open} setOpen={setOpen} />}
      <Header />
      <AboutMe />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
