import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  ChangeEvent,
} from "react";
import { useShaderAnimation } from "./comingSoonHooks";

// Memoized slider component to prevent re-renders when props haven't changed.
// const ControlSlider = React.memo(
//   ({ label, value, onChange, min, max, step }) => (
//     <div className="flex flex-col text-white">
//       <div className="flex justify-between items-center mb-1">
//         <label className="text-sm font-medium select-none">{label}</label>
//         <span className="text-sm bg-white/10 px-2 py-0.5 rounded-full select-none">
//           {value}
//         </span>
//       </div>
//       <input
//         type="range"
//         min={min}
//         max={max}
//         step={step}
//         value={value}
//         onChange={onChange}
//         className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
//       />
//     </div>
//   )
// );

interface ControlSliderProps {
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: number | string;
  max: number | string;
  step?: number | string;
}

const ControlSlider: React.FC<ControlSliderProps> = React.memo(
  ({ label, value, onChange, min, max, step = 1 }) => (
    <div className="flex flex-col text-white">
      <div className="flex justify-between items-center mb-1">
        <label className="text-sm font-medium select-none">{label}</label>
        <span className="text-sm bg-white/10 px-2 py-0.5 rounded-full select-none">
          {value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
      />
    </div>
  )
);
// The core canvas component, now cleaner by using the useShaderAnimation hook.
interface ShaderCanvasProps {
  hue: number;
  speed: number;
  intensity: number;
  complexity: number;
}

const ShaderCanvas: React.FC<ShaderCanvasProps> = React.memo(
  ({ hue, speed, intensity, complexity }) => {
    const canvasRef = useRef(null);
    useShaderAnimation(canvasRef, { hue, speed, intensity, complexity });
    return (
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    );
  }
);

// Main ShaderComponent
const ShaderComponent = () => {
  const [hue, setHue] = useState(355);
  const [speed, setSpeed] = useState(0.4);
  const [intensity, setIntensity] = useState(1.2);
  const [complexity, setComplexity] = useState(5.0);

  return (
    <div className="relative w-full h-screen bg-gray-900 font-sans overflow-hidden">
      <ShaderCanvas
        hue={hue}
        speed={speed}
        intensity={intensity}
        complexity={complexity}
      />
    </div>
  );
};

export default ShaderComponent;
