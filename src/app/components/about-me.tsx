import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Columns, X } from "lucide-react";
import * as motion from "motion/react-client";
import { Star } from "lucide-react";
import "../globals.css";
import "./overlay.css";

interface OverlayProps {
  isOpen: boolean; // boolean to control visibility of the overlay
  onClose: () => void; // function to close overlay
  zIndex: number;
  bringToFront: () => void;
}

const AboutMe: React.FC<OverlayProps> = ({
  isOpen,
  onClose,
  zIndex,
  bringToFront,
}) => {
  // State to determine if the popup is being dragged
  const [isDragging, setIsDragging] = useState(false);

  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null
  );

  // Ref to store the initial mouse position when dragging starts
  const startPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Ref to store the popup element
  const popupRef = useRef<HTMLDivElement | null>(null);

  // Function to handle mouse movement while dragging
  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !popupRef.current) return;

      const overlayRect = popupRef.current.getBoundingClientRect();
      const overlayWidth = overlayRect.width;
      const overlayHeight = overlayRect.height;

      const newX = e.clientX - startPos.current.x;
      const newY = e.clientY - startPos.current.y;

      const maxX = window.innerWidth - overlayWidth;
      const maxY = window.innerHeight - overlayHeight;

      const clampedX = Math.max(0, Math.min(newX, maxX));
      const clampedY = Math.max(0, Math.min(newY, maxY));

      setPosition({ x: clampedX, y: clampedY });
    },
    [isDragging]
  );

  // Function to handle the end of a drag event
  const onMouseUp = () => {
    setIsDragging(false);
  };

  // Function to handle the start of a drag event
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    bringToFront();
    setIsDragging(true);
    if (position) {
      startPos.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
    }
  };

  // Effect to add and clean up event listeners for dragging
  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [onMouseMove]);

  // Reset position when the popup is closed
  useEffect(() => {
    if (isOpen && position === null) {
      setPosition({
        x: window.innerWidth * 0.3,
        y: window.innerHeight * 0.2,
      });
    }
  }, [isOpen, position]);

  if (!isOpen || position === null) return null;
  return (
    <div
      className="overlay"
      ref={popupRef}
      onClick={(e) => e.stopPropagation()}
      onMouseDown={bringToFront} // <-- important line
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: zIndex,
        position: "fixed",
      }}
    >
      <div className="overlay-header" onMouseDown={onMouseDown}>
        <div>
          <a>About Me</a>
        </div>
        <div>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
      </div>
      <div className="overlay-col" style={{ gap: 60 }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>
            <span style={{ color: "black", fontSize: 36 }}>
              Emilie Mutoniwabo
            </span>
            <span style={{ color: "black", fontSize: 16 }}> they/them</span>
          </h1>
          <div>
            <h2 style={{ color: "blue", fontSize: 13 }}>
              third year student at the university of north carolina at chapel
              hill
            </h2>
          </div>
        </div>
        <div className="buttons-container">
          <div className="button-single" style={{ gap: 10 }}>
            <div>
              <a href="https://www.linkedin.com/in/emilie-mutoniwabo/">
                <img src="star.png" alt="linkedin" width={20} height={20} />
              </a>
            </div>
            <div style={{ color: "black", fontSize: 14 }}>linkedin</div>
          </div>
          <div className="button-single" style={{ gap: 10 }}>
            <a href="https://github.com/edmutoni">
              <img src="star.png" alt="github" width={20} height={20} />
            </a>

            <div style={{ color: "black", fontSize: 14 }}>github</div>
          </div>
        </div>
      </div>
      <hr className="solid" />
      <div className="overlay-col">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ color: "black", fontSize: 20 }}>
            a little bit about me
          </h1>
          <ul>
            <li style={{ color: "black", fontSize: 16 }}>
              • Currently pursuing a Computer Science BS and Information and
              Library Sciences BS (Interactive media concentration).
            </li>
            <li style={{ color: "black", fontSize: 16 }}>
              • As a creative in tech, I am drawn to working in the intersection
              of development and design ~
              <ul style={{ paddingLeft: 15 }}>
                <li style={{ color: "black", fontSize: 16 }}>
                  • Designing and developing video games
                </li>
                <li style={{ color: "black", fontSize: 16 }}>
                  • Front-end web development and design and wire framing
                </li>
                <li style={{ color: "black", fontSize: 16 }}>
                  • 3D modeling, rigging, and animation
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <img src="web-headshot.png" alt="headshot" width={500} height={500} />
        </div>
      </div>
      <div className="overlay-row">
        <h1 style={{ color: "black", fontSize: 20 }}>other interests</h1>
        <ul>
          <li>
            <span style={{ color: "black", fontSize: 16 }}>
              • Playing video games
            </span>
            <span style={{ color: "black", fontSize: 10 }}>
              {" "}
              especially the Legend of Zelda series
            </span>
          </li>
          <li style={{ color: "black", fontSize: 16 }}>
            • Running and listening to podcasts
          </li>
          <li style={{ color: "black", fontSize: 16 }}>
            • Being involved in my comp-sci community!
            <ul style={{ paddingLeft: 15 }}>
              <li style={{ color: "black", fontSize: 16 }}>
                • Hackathon director to create spaces for women and gender
                minorities in tech (check out Pearl Hacks)
              </li>
              <li style={{ color: "black", fontSize: 16 }}>
                • Programming events for CS students to foster inclusivity and
                student wellness
              </li>
              <li style={{ color: "black", fontSize: 16 }}>
                • Collaborate to develop video games for VR with UNC&apos;s
                AR&VR club
              </li>
            </ul>
          </li>
        </ul>
        <br></br>
        <footer style={{ alignSelf: "center" }}>
          <Star color="black" strokeWidth={2} />
        </footer>
        <br></br>
      </div>
    </div>
  );
};

export default AboutMe;
