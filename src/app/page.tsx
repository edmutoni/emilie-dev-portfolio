"use client";
import React from "react";
import { useState } from "react";
import "./globals.css";
import NavButtons from "./components/nav-buttons";
import AboutMe from "./components/about-me";
import MyWork from "./components/my-work";
import ContactMe from "./components/contact-me";

//render the sub pages in here based on triggers sent out by the nav button component

export default function Home() {
  // state control for about me overlay
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  const openAboutMe = () => setIsAboutMeOpen(true);
  const closeAboutMe = () => setIsAboutMeOpen(false);

  // state control for my work overlay
  const [isMyWorkOpen, setIsMyWorkOpen] = useState(false);
  const openMyWork = () => setIsMyWorkOpen(true);
  const closeMyWork = () => setIsMyWorkOpen(false);

  // state control for contact me overlay
  const [isContactMeOpen, setIsContactMeOpen] = useState(false);
  const openContactMe = () => setIsContactMeOpen(true);
  const closeContactMe = () => setIsContactMeOpen(false);

  return (
    <div>
      <div className="card">
        <div>
          <nav className="headerbar">
            <div>
              <a className="">Home</a>
            </div>
          </nav>
        </div>
        <div className="content">
          <div>
            <main>
              <h1 style={{ color: "black", fontSize: 48 }}>
                hello, i'm emilie!
              </h1>
              <br></br>
              <h2 style={{ color: "black", fontSize: 36 }}>
                welcome to my website
              </h2>
              <br></br>
              <p style={{ color: "black", fontSize: 18 }}>
                junior computer scientist, developer, and artist
              </p>
            </main>
          </div>
          <div>
            <img src="sample.png" alt="Sample Image" width={300} height={300} />
          </div>
        </div>
        <NavButtons
          openAboutMe={openAboutMe}
          openMyWork={openMyWork}
          openContactMe={openContactMe}
        />
      </div>
      <footer className="text-white p-10 text-center" style={{ color: "gray" }}>
        Made with 🪼 by Emilie
      </footer>
      <AboutMe isOpen={isAboutMeOpen} onClose={closeAboutMe} />
      <MyWork isOpen={isMyWorkOpen} onClose={closeMyWork} />
      <ContactMe isOpen={isContactMeOpen} onClose={closeContactMe} />
    </div>
  );
}
