import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconOvenMittsMinimalistic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3341 4.77942C9.91482 3.15171 8.66759 1.97856 7.21305 2.00042C5.44093 2.02706 4.03217 3.81744 4.06648 5.99935L4.03433 9.34069C4.02705 10.0968 4.02341 10.4749 3.88968 10.8111C3.75595 11.1473 3.46036 11.4686 2.86916 12.1114C2.28972 12.7413 2 13.2091 2 13.7455C2 14.5631 2.67293 15.2211 4.0188 16.537L7.58758 20.0263C8.93345 21.3422 9.60638 22.0001 10.4426 22.0001C11.2788 22.0001 11.9518 21.3422 13.2976 20.0263L20.0783 13.3966C22.6406 10.8914 22.6406 6.82963 20.0783 4.32441C17.516 1.8192 13.3618 1.8192 10.7995 4.32442L10.3341 4.77942ZM10.3341 4.77942L9.37197 5.72014" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M10.7994 17.5838L6.51685 13.3966" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M7.58758 20.0263L4.0188 16.537C2.67293 15.2211 2 14.5631 2 13.7455C2 13.2091 2.28972 12.7413 2.86916 12.1114C3.46036 11.4686 3.75595 11.1473 3.88968 10.8111C4.02341 10.4749 4.02705 10.0968 4.03433 9.34069L4.06648 5.99935C4.03217 3.81744 5.44093 2.02706 7.21305 2.00042C8.66759 1.97856 9.91482 3.15171 10.3341 4.77942L10.7995 4.32442C13.3618 1.8192 17.516 1.8192 20.0783 4.32441C22.6406 6.82963 22.6406 10.8914 20.0783 13.3966L13.2976 20.0263C11.9518 21.3422 11.2788 22.0001 10.4426 22.0001C9.60638 22.0001 8.93345 21.3422 7.58758 20.0263Z" fill="currentColor" /><path d="M7.04093 12.8603C6.74476 12.5708 6.26991 12.5761 5.98033 12.8723C5.69076 13.1685 5.6961 13.6433 5.99228 13.9329L10.2748 18.12C10.571 18.4096 11.0458 18.4043 11.3354 18.1081C11.625 17.8119 11.6196 17.3371 11.3235 17.0475L7.04093 12.8603Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M7.58758 20.0263L4.0188 16.537C2.67293 15.2211 2 14.5631 2 13.7455C2 13.2091 2.28972 12.7413 2.86916 12.1114C3.46036 11.4686 3.75595 11.1473 3.88968 10.8111C4.02341 10.4749 4.02705 10.0968 4.03433 9.34069L4.06648 5.99935C4.03217 3.81744 5.44093 2.02706 7.21305 2.00042C8.66759 1.97856 9.91482 3.15171 10.3341 4.77942L10.7995 4.32442C13.3618 1.8192 17.516 1.8192 20.0783 4.32441C22.6406 6.82963 22.6406 10.8914 20.0783 13.3966L13.2976 20.0263C11.9518 21.3422 11.2788 22.0001 10.4426 22.0001C9.60638 22.0001 8.93345 21.3422 7.58758 20.0263ZM5.98033 12.8723C6.26991 12.5761 6.74475 12.5708 7.04093 12.8603L11.3235 17.0475C11.6196 17.3371 11.625 17.8119 11.3354 18.1081C11.0458 18.4043 10.571 18.4096 10.2748 18.12L5.99228 13.9329C5.6961 13.6433 5.69076 13.1685 5.98033 12.8723Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconOvenMittsMinimalistic as IconComponentType).keywords = [
  "oven",
  "mitts",
  "minimalistic",
  "cooking",
  "baked",
  "baking",
  "baker",
  "cooker",
  "greenhouse",
  "stove",
  "fur",
  "furnace",
  "glove",
  "hook",
  "mauler",
  "hand",
  "paw",
  "manus",
  "baseball mitt",
  "baseball glove",
  "gloves",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic"
];

export default IconOvenMittsMinimalistic as IconComponentType;