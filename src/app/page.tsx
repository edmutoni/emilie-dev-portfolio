"use client";
import React from "react";
import "./globals.css";
import NavButtons from "./components/nav-buttons";
import AboutMe from "./components/about-me";
import { useState } from "react";

//render the sub pages in here based on triggers sent out by the nav button component

export default function Home() {
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(false);
  const openAboutMe = () => setIsAboutMeOpen(true);
  const closeAboutMe = () => setIsAboutMeOpen(false);

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
        <NavButtons openAboutMe={openAboutMe} />
      </div>
      <footer className="text-white p-10 text-center" style={{ color: "gray" }}>
        Made with 🪼 by Emilie
      </footer>
      <AboutMe isOpen={isAboutMeOpen} onClose={closeAboutMe} />
    </div>
  );
}
