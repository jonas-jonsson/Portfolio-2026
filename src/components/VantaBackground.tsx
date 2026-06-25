import { useEffect, useRef, useState } from "react";

export const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scriptThree: HTMLScriptElement | null = null;
    let scriptVanta: HTMLScriptElement | null = null;

    const initVanta = () => {
      // @ts-ignore
      if (!vantaEffect && vantaRef.current && window.VANTA?.WAVES) {
        setVantaEffect(
          // @ts-ignore
          window.VANTA.WAVES({
            el: vantaRef.current,

            // No input based movements.
            mouseControls: false,
            touchControls: false,
            gyroControls: false,

            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,

            // --- The Tidy Theme Layer ---
            backgroundAlpha: 0.0, // No canvas color.
            color: 0x888888, // Neutral wires.
            shininess: 10.0,
            waveHeight: 12.0,
            waveSpeed: 0.6,
          }),
        );
      }
    };

    // Dev-stage script injection
    scriptThree = document.createElement("script");
    scriptThree.src =
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
    scriptThree.async = true;
    document.head.appendChild(scriptThree);

    scriptThree.onload = () => {
      scriptVanta = document.createElement("script");
      scriptVanta.src =
        "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js";
      scriptVanta.async = true;
      document.head.appendChild(scriptVanta);

      scriptVanta.onload = () => {
        initVanta();
      };
    };

    return () => {
      if (vantaEffect) vantaEffect.destroy();
      if (scriptThree && document.head.contains(scriptThree))
        document.head.removeChild(scriptThree);
      if (scriptVanta && document.head.contains(scriptVanta))
        document.head.removeChild(scriptVanta);
    };
  }, [vantaEffect]);

  // Self-contained container pinned to viewport.
  return (
    <div
      ref={vantaRef}
      className="fixed inset-0 -z-10 w-screen h-screen bg-transparent"
    />
  );
};
