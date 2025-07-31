import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
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

  // State to keep track of the popup's position
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: window.innerWidth * 0.3,
    y: window.innerHeight * 0.2,
  });

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
    startPos.current = { x: e.clientX - position.x, y: e.clientY - position.y };
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
    if (isOpen) {
      setPosition({
        x: window.innerWidth * 0.3,
        y: window.innerHeight * 0.2,
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;
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
      <div className="overlay-content">
        <p style={{ color: "black", fontSize: 18 }}>
          This is the about me page.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
