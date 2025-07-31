"use client";
import { useState } from "react";

//instead of rendering sub pages here, we will send out the isOpen etc props to the main page component

interface NavButtonsProps {
  openAboutMe: () => void; // function to open About Me overlay
}

export default function NavButtons({ openAboutMe }: NavButtonsProps) {
  return (
    <div>
      <div className="buttons-container">
        <div className="button-single">
          <div>
            <img
              src="star.png"
              alt="about me"
              width={75}
              height={75}
              onClick={() => {
                console.log("clicked about me");
                openAboutMe();
              }}
            />
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
  );
}
