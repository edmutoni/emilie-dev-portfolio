import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import Button from "react-bootstrap/Button";
import "../globals.css";
import "./overlay.css";
import WorkCarousel from "./work-carousel";
import { Star } from "lucide-react";

interface OverlayProps {
  isOpen: boolean; // boolean to control visibility of the overlay
  onClose: () => void; // function to close overlay
  zIndex: number;
  bringToFront: () => void;
}

const MyWork: React.FC<OverlayProps> = ({
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
        x: window.innerWidth * 0.1,
        y: window.innerHeight * 0.1,
      });
    }
  }, [isOpen, position]);

  if (!isOpen || position === null) return null;
  return (
    <div
      className="overlay"
      ref={popupRef}
      onClick={(e) => e.stopPropagation()}
      onMouseDown={bringToFront}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: zIndex,
        position: "fixed",
      }}
    >
      <div className="overlay-header" onMouseDown={onMouseDown}>
        <div>
          <a>My Work</a>
        </div>
        <div>
          <button onClick={onClose}>
            <X />
          </button>
        </div>
      </div>
      <div className="overlay-row">
        <div
          className="overlay-col"
          style={{
            gap: 10,
            alignItems: "stretch",
            padding: 0,
          }}
        >
          <div className="overlay-row" style={{ flex: 1, padding: 0 }}>
            <div>
              <h1 style={{ color: "black", fontSize: 20 }}>tools</h1>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <Button variant="secondary">figma</Button>
              <Button variant="secondary">unity</Button>
              <Button variant="secondary">onshape</Button>
              <Button variant="secondary">mudbox</Button>
              <Button variant="secondary">maya</Button>
              <Button variant="secondary">adobe premier pro</Button>
              <Button variant="secondary">adobe after effects</Button>
              <Button variant="secondary">next js</Button>
              <Button variant="secondary">bootstrap</Button>
              <Button variant="secondary">gamemaker</Button>
              <Button variant="secondary">github</Button>
            </div>
          </div>
          <div
            className="overlay-row"
            style={{
              flex: 1,
              padding: 0,
            }}
          >
            <h1 style={{ color: "black", fontSize: 20 }}>languages</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <Button variant="secondary">python</Button>
              <Button variant="secondary">java</Button>
              <Button variant="secondary">C</Button>
              <Button variant="secondary">C#</Button>
              <Button variant="secondary">C++</Button>
              <Button variant="secondary">CSS</Button>
              <Button variant="secondary">HTML</Button>
              <Button variant="secondary">javascript</Button>
              <Button variant="secondary">typescript</Button>
            </div>
          </div>
        </div>
        <br></br>
        <h1 style={{ color: "black", fontSize: 20 }}>current work</h1>
        <div className="place-self-center">
          <WorkCarousel />
        </div>
        <h1 style={{ color: "black", fontSize: 20 }}>
          things i want to work on in the future
        </h1>
        <div>
          <ul>
            <li style={{ color: "black", fontSize: 16 }}>
              • making fun web-apps and web-exentsions
            </li>
            <li style={{ color: "black", fontSize: 16 }}>
              • stregthening my modeling and animating skills in mudbox and
              maya.
            </li>
            <li style={{ color: "black", fontSize: 16 }}>
              • learning and making a 2D game in unity. i also want to dabble
              with unreal engine for more 3D development.
            </li>
          </ul>
        </div>
      </div>
      <br></br>
      <footer className="place-self-center">
        <Star color="black" strokeWidth={2} />
      </footer>
      <br></br>
    </div>
  );
};

export default MyWork;
