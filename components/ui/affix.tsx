import React, { useRef, useState, useEffect } from "react";

interface AffixProps {
  children: React.ReactNode;
  offsetTop: number;
  target: React.RefObject<HTMLElement>;

}
const Affix = ({ children, offsetTop, target }: AffixProps) => {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!ref.current || !containerRef.current) return;

    const { top } = ref.current.getBoundingClientRect();
    const { top: containerTop } = containerRef.current.getBoundingClientRect();
    const shouldBeFixed = top <= offsetTop && containerTop < offsetTop;

    setIsFixed(shouldBeFixed);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offsetTop]);

  const affixStyles: React.CSSProperties = {
    position: isFixed ? "fixed" : "static",
    top: isFixed ? offsetTop + "px" : "auto",
    width: "100%",
    zIndex: 1000, // adjust z-index as needed
  };

  return (
    <div
      ref={containerRef}
      style={{ height: "300px", margin: "20px", width: "200px" }}
    >
      {/* Add a placeholder div with the same height as the affixed element */}
      {isFixed && <div style={{ height: "50px" }}></div>}
      <div ref={ref} style={affixStyles}>
        {children}
      </div>
    </div>
  );
};

export default Affix;
