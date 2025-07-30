import React from "react";
import "./globals.css";
import image from "./images/sample.png";
import { NavButton } from "./components/button";

export default function Home() {
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
        <div className="buttons-container">
          <div className="button-single">
            <div>
              <img src="star.png" alt="about me" width={75} height={75} />
            </div>
            <div>
              <p style={{ color: "black", fontSize: 18 }}>about me</p>
            </div>
          </div>
          <div className="button-single">
            <div>
              <img src="star.png" alt="my work" width={75} height={75} />
            </div>
            <div>
              <p style={{ color: "black", fontSize: 18 }}>my work</p>
            </div>
          </div>
          <div className="button-single">
            <div>
              <img src="star.png" alt="contact me" width={75} height={75} />
            </div>
            <div>
              <p style={{ color: "black", fontSize: 18 }}>contact me</p>
            </div>
          </div>
          <div className="button-single">
            <div className="resume-position">
              <img src="star.png" alt="my resume" width={75} height={75} />
              <div>
                <p style={{ color: "black", fontSize: 15 }}>my resume</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="text-white p-10 text-center">
        Made with 🪼 by Emilie
      </footer>
    </div>
  );
}
