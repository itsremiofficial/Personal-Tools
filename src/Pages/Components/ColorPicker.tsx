// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useRef, useState } from "react";
// import { useOutsideClick } from "../utils/outsideClick";
// import ColorPicker from "react-best-gradient-color-picker";

// interface ColorPickerProps {
//   color: string;
//   onChange: (color: any) => void;
//   isVisible: boolean;
//   onToggle: () => void;
// }

// export const ColorPickerComponent: React.FC<ColorPickerProps> = ({
//   color,
//   onChange,
//   isVisible,
//   onToggle,
// }) => {
//   const [colorState, setColorState] = useState(color);

//   const handleChange = (newColor: any) => {
//     setColorState(newColor);
//     onChange(newColor);
//   };

//   const drawerRef = useRef<HTMLDivElement | null>(null);
//   useOutsideClick(drawerRef, () => {
//     if (isVisible) onToggle();
//   });
//   return (
//     <div className="relative">
//       <div
//         className="size-14 rounded-full cursor-pointer border-2 border-icu-200 hover:border-icu-300 dark:border-icu-800 dark:hover:border-icu-700/70 transition-colors"
//         style={{ backgroundColor: color }}
//         onClick={onToggle}
//       />
//       {isVisible && (
//         <div
//           ref={drawerRef}
//           className="absolute z-10 mt-2 w-72 custom-picker"
//           style={{ top: "48px", left: "0" }}
//         >
//           <ColorPicker
//             value={colorState}
//             onChange={handleChange}
//             hideInputs
//             hideOpacity
//             hidePresets
//             hideColorGuide
//             hideInputType
//             hideGradientType
//             hideGradientAngle
//             hideGradientStop
//             hideGradientControls
//           />
//         </div>
//       )}
//     </div>
//   );
// };
