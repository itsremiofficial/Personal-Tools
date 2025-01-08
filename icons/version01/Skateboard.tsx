import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconSkateboard: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 7.00049L2.81253 8.21929C3.5544 9.33208 4.80332 10.0005 6.14073 10.0005H17.8593C19.1967 10.0005 20.4456 9.33208 21.1875 8.21929L22 7.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><circle cx="7" cy="15.0005" r="2" stroke="currentColor" strokeWidth={width} /><circle cx="17" cy="15.0005" r="2" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 15.0005C9 16.1051 8.10457 17.0005 7 17.0005C5.89543 17.0005 5 16.1051 5 15.0005C5 13.8959 5.89543 13.0005 7 13.0005C8.10457 13.0005 9 13.8959 9 15.0005Z" fill="currentColor" /><path d="M19 15.0005C19 16.1051 18.1046 17.0005 17 17.0005C15.8954 17.0005 15 16.1051 15 15.0005C15 13.8959 15.8954 13.0005 17 13.0005C18.1046 13.0005 19 13.8959 19 15.0005Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path fillRule="evenodd" clipRule="evenodd" d="M1.58405 6.37653C1.9287 6.14677 2.39435 6.2399 2.62412 6.58454L3.43665 7.80334C4.03942 8.70749 5.05417 9.25057 6.14081 9.25057H17.8593C18.946 9.25057 19.9607 8.70749 20.5635 7.80334L21.376 6.58454C21.6058 6.2399 22.0715 6.14677 22.4161 6.37653C22.7608 6.60629 22.8539 7.07195 22.6241 7.41659L21.8116 8.63539C20.9306 9.95684 19.4475 10.7506 17.8593 10.7506H6.14081C4.55264 10.7506 3.06954 9.95684 2.18858 8.63539L1.37604 7.41659C1.14628 7.07195 1.23941 6.60629 1.58405 6.37653Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.58405 6.37653C1.9287 6.14677 2.39435 6.2399 2.62412 6.58454L3.43665 7.80334C4.03942 8.70749 5.05417 9.25057 6.14081 9.25057H17.8593C18.946 9.25057 19.9607 8.70749 20.5635 7.80334L21.376 6.58454C21.6058 6.2399 22.0715 6.14677 22.4161 6.37653C22.7608 6.60629 22.8539 7.07195 22.6241 7.41659L21.8116 8.63539C20.9306 9.95684 19.4475 10.7506 17.8593 10.7506H6.14081C4.55264 10.7506 3.06954 9.95684 2.18858 8.63539L1.37604 7.41659C1.14628 7.07195 1.23941 6.60629 1.58405 6.37653Z" fill="currentColor" /><path d="M9.00008 15.0006C9.00008 16.1051 8.10465 17.0006 7.00008 17.0006C5.89551 17.0006 5.00008 16.1051 5.00008 15.0006C5.00008 13.896 5.89551 13.0006 7.00008 13.0006C8.10465 13.0006 9.00008 13.896 9.00008 15.0006Z" fill="currentColor" /><path d="M19.0001 15.0006C19.0001 16.1051 18.1046 17.0006 17.0001 17.0006C15.8955 17.0006 15.0001 16.1051 15.0001 15.0006C15.0001 13.896 15.8955 13.0006 17.0001 13.0006C18.1046 13.0006 19.0001 13.896 19.0001 15.0006Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSkateboard as IconComponentType).keywords = [
  "skateboard",
  "skate",
  "surfboard",
  "plank",
  "board",
  "self-defence",
  "self-defense",
  "plate",
  "vigilante",
  "longboard"
];

export default IconSkateboard as IconComponentType;