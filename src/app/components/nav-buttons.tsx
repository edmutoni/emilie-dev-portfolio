"use client";
import { useState } from "react";

//instead of rendering sub pages here, we will send out the isOpen etc props to the main page component

interface NavButtonsProps {
  openAboutMe: () => void; // function to open About Me overlay
  openMyWork: () => void;
  openContactMe: () => void;
  openResume: () => void;
}

export default function NavButtons({
  openAboutMe,
  openMyWork,
  openContactMe,
  openResume,
}: NavButtonsProps) {
  return (
    <div>
      <div className="buttons-container">
        <div className="button-single">
          <div>
            <img
              src="about_me.png"
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
            <img
              src="my_work.png"
              alt="my work"
              width={75}
              height={75}
              onClick={() => {
                console.log("clicked my work");
                openMyWork();
              }}
            />
          </div>
          <div>
            <p style={{ color: "black", fontSize: 18 }}>my work</p>
          </div>
        </div>
        <div className="button-single">
          <div>
            <img
              src="contact_me.png"
              alt="contact me"
              width={75}
              height={75}
              onClick={() => {
                console.log("clicked contact me");
                openContactMe();
              }}
            />
          </div>
          <div>
            <p style={{ color: "black", fontSize: 18 }}>contact me</p>
          </div>
        </div>
        <div className="button-single">
          <div className="resume-position">
            <img
              src="resume.png"
              alt="my resume"
              width={75}
              height={75}
              onClick={() => {
                openResume();
              }}
            />
            <div>
              <p style={{ color: "black", fontSize: 15 }}>my resume</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
