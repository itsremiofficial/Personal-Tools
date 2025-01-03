import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconOntologyOnt: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.4" : "1"} d="M18.5701 19.68C16.8501 21.18 14.5801 22.07 12.0901 22C6.92015 21.86 2.89014 17.41 2.89014 12.24V5.21C2.89014 4.76 3.43014 4.54 3.74014 4.86L18.5701 19.68Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.89014 4.3C8.60014 2.81 10.8501 1.92999 13.3201 1.99999C18.4501 2.13999 22.4401 6.54999 22.4401 11.68V18.64C22.4401 19.09 21.9001 19.31 21.5901 18.99L6.89014 4.3Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.58" : "1"} d="M24.6699 0H0.669922V24H24.6699V0Z" fill="none" /><path opacity={duotone ? "0.4" : "1"} d="M18.5696 19.68C16.8496 21.18 14.5797 22.07 12.0897 22C6.91966 21.86 2.88965 17.41 2.88965 12.24V5.21003C2.88965 4.76003 3.42965 4.54003 3.73965 4.86003L18.5696 19.68Z" fill="currentColor" /><path d="M6.88965 4.29998C8.59965 2.80998 10.8496 1.92998 13.3196 1.99998C18.4496 2.13998 22.4396 6.54998 22.4396 11.68V18.64C22.4396 19.09 21.8997 19.31 21.5897 18.99L6.88965 4.29998Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5701 19.68C16.8501 21.18 14.5801 22.07 12.0901 22C6.92015 21.86 2.89014 17.41 2.89014 12.24V5.21C2.89014 4.76 3.43014 4.54 3.74014 4.86L18.5701 19.68Z" fill="none" /><path d="M6.89014 4.3C8.60014 2.81 10.8501 1.92999 13.3201 1.99999C18.4501 2.13999 22.4401 6.54999 22.4401 11.68V18.64C22.4401 19.09 21.9001 19.31 21.5901 18.99L6.89014 4.3Z" fill="none" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconOntologyOnt as IconComponentType).keywords = [
  "ontology",
  "ont",
  "driven",
  "ontologies",
  "ontological",
  "ontologic",
  "epistemology",
  "metaphysics",
  "ontologists",
  "mereology",
  "metaphysic",
  "bce",
  "ltd",
  "are",
  "alb",
  "alta",
  "ils",
  "nta",
  "div",
  "had"
];

export default IconOntologyOnt as IconComponentType;