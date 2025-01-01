import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHeartPulse: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 12.0002H17.1986C16.3689 12.0002 15.9541 12.0002 15.6102 12.1949C15.2664 12.3896 15.0529 12.7454 14.6261 13.4568L14.5952 13.5082C14.1976 14.171 13.9987 14.5023 13.7095 14.4969C13.4202 14.4915 13.2339 14.1529 12.8615 13.4757L11.1742 10.4079C10.8269 9.77642 10.6533 9.46071 10.3759 9.44573C10.0986 9.43076 9.892 9.72594 9.47875 10.3163L9.19573 10.7206C8.75681 11.3477 8.53734 11.6612 8.21173 11.8307C7.88612 12.0002 7.50342 12.0002 6.73803 12.0002H6" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M8.96173 19.371L9.43571 18.7897L9.43571 18.7897L8.96173 19.371ZM12 5.49901L11.4509 6.00991C11.5928 6.1624 11.7917 6.24901 12 6.24901C12.2083 6.24901 12.4072 6.1624 12.5491 6.00991L12 5.49901ZM15.0383 19.371L15.5123 19.9522L15.0383 19.371ZM9.43571 18.7897C7.98585 17.6074 6.29293 16.057 4.96881 14.36C3.63045 12.6447 2.75 10.8824 2.75 9.26068H1.25C1.25 11.3865 2.37926 13.4796 3.7862 15.2827C5.20736 17.1042 6.99532 18.7352 8.48775 19.9522L9.43571 18.7897ZM2.75 9.26068C2.75 6.53081 4.0079 4.70479 5.60065 4.04216C7.17297 3.38803 9.35285 3.75504 11.4509 6.00991L12.5491 4.98812C10.1473 2.40686 7.32719 1.69923 5.02447 2.65723C2.74218 3.60673 1.25 6.07961 1.25 9.26068H2.75ZM15.5123 19.9522C17.0047 18.7352 18.7926 17.1042 20.2138 15.2828C21.6207 13.4796 22.75 11.3865 22.75 9.26064H21.25C21.25 10.8824 20.3695 12.6448 19.0312 14.36C17.7071 16.0571 16.0142 17.6074 14.5643 18.7897L15.5123 19.9522ZM22.75 9.26064C22.75 6.0795 21.2578 3.60663 18.9755 2.65715C16.6728 1.69918 13.8527 2.40686 11.4509 4.98812L12.5491 6.00991C14.6472 3.75503 16.827 3.38798 18.3994 4.04209C19.9921 4.70469 21.25 6.5307 21.25 9.26064H22.75ZM8.48775 19.9522C9.7587 20.9886 10.641 21.7502 12 21.7502L12 20.2502C11.2785 20.2502 10.8287 19.9257 9.43571 18.7897L8.48775 19.9522ZM14.5643 18.7897C13.1713 19.9257 12.7216 20.2502 12 20.2502L12 21.7502C13.359 21.7502 14.2413 20.9886 15.5123 19.9522L14.5643 18.7897Z" fill="currentColor" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M2 9.26068C2 13.0082 6.01943 16.9716 8.96173 19.371C10.2937 20.4571 10.9597 21.0002 12 21.0002C13.0403 21.0002 13.7063 20.4572 15.0383 19.371C17.9806 16.9717 22 13.0082 22 9.26064C22 3.34956 16.4998 0.662881 12 5.49901C7.50016 0.662881 2 3.34974 2 9.26068Z" fill="currentColor" /><path d="M10.0932 10.7466C10.1827 10.6187 10.2571 10.5125 10.3233 10.4216C10.3793 10.5191 10.4418 10.6327 10.517 10.7695L12.2273 13.879C12.3933 14.1811 12.5562 14.4774 12.7197 14.6924C12.8947 14.9224 13.2023 15.2377 13.6954 15.2469C14.1884 15.2562 14.5077 14.9527 14.6912 14.7294C14.8627 14.5207 15.0365 14.2308 15.2138 13.9352L15.2692 13.8428C15.49 13.4748 15.629 13.2447 15.752 13.0785C15.8654 12.9254 15.9309 12.8754 15.9798 12.8478C16.0286 12.8201 16.1052 12.7897 16.2948 12.7712C16.5006 12.7512 16.7694 12.7504 17.1986 12.7504H18C18.4142 12.7504 18.75 12.4146 18.75 12.0004C18.75 11.5862 18.4142 11.2504 18 11.2504L17.1662 11.2504C16.7791 11.2504 16.4367 11.2504 16.1497 11.2783C15.8385 11.3085 15.5357 11.3754 15.2407 11.5425C14.9457 11.7095 14.7325 11.9347 14.5465 12.186C14.3749 12.4177 14.1988 12.7113 13.9996 13.0433L13.9996 13.0433L13.9521 13.1225C13.8654 13.2671 13.793 13.3875 13.7284 13.4909C13.6676 13.3852 13.5999 13.2621 13.5186 13.1144L11.8092 10.0063C11.6551 9.7259 11.5015 9.44656 11.3458 9.24177C11.1756 9.01806 10.8839 8.72225 10.4164 8.697C9.94887 8.67176 9.62698 8.93444 9.43373 9.13853C9.25683 9.32536 9.0741 9.58655 8.89069 9.84871L8.58131 10.2907C8.35416 10.6152 8.21175 10.8174 8.08848 10.9632C7.975 11.0974 7.91193 11.1414 7.86538 11.1656C7.81882 11.1899 7.74663 11.2163 7.57159 11.2323C7.38144 11.2497 7.13413 11.2504 6.73803 11.2504H6C5.58579 11.2504 5.25 11.5862 5.25 12.0004C5.25 12.4146 5.58579 12.7504 6 12.7504L6.76812 12.7504H6.76813C7.12509 12.7504 7.44153 12.7505 7.70801 12.7261C7.99707 12.6997 8.27904 12.6414 8.55809 12.4961C8.83714 12.3508 9.04661 12.1533 9.234 11.9316C9.40676 11.7272 9.58821 11.468 9.79291 11.1755L10.0932 10.7466Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.96173 19.371C6.01943 16.9716 2 13.0082 2 9.26068C2 3.34974 7.50016 0.662881 12 5.49901C16.4998 0.662881 22 3.34956 22 9.26064C22 13.0082 17.9806 16.9717 15.0383 19.371C13.7063 20.4572 13.0403 21.0002 12 21.0002C10.9597 21.0002 10.2937 20.4571 8.96173 19.371ZM10.0932 10.7465C10.1827 10.6186 10.2571 10.5125 10.3233 10.4215C10.3793 10.5191 10.4418 10.6326 10.517 10.7694L12.2273 13.879C12.3933 14.1811 12.5562 14.4773 12.7197 14.6923C12.8947 14.9224 13.2023 15.2376 13.6954 15.2469C14.1884 15.2562 14.5077 14.9527 14.6912 14.7294C14.8627 14.5207 15.0365 14.2307 15.2138 13.9351L15.2692 13.8428C15.49 13.4748 15.629 13.2447 15.752 13.0785C15.8654 12.9253 15.9309 12.8754 15.9798 12.8477C16.0286 12.82 16.1052 12.7896 16.2948 12.7712C16.5006 12.7512 16.7694 12.7504 17.1986 12.7504H18C18.4142 12.7504 18.75 12.4146 18.75 12.0004C18.75 11.5861 18.4142 11.2504 18 11.2504L17.1662 11.2504C16.7791 11.2503 16.4367 11.2503 16.1497 11.2782C15.8385 11.3085 15.5357 11.3754 15.2407 11.5424C14.9457 11.7094 14.7325 11.9347 14.5465 12.1859C14.3749 12.4177 14.1988 12.7113 13.9996 13.0433L13.9521 13.1225C13.8654 13.267 13.793 13.3875 13.7284 13.4908C13.6676 13.3851 13.5999 13.262 13.5186 13.1143L11.8092 10.0062C11.6551 9.72584 11.5015 9.4465 11.3458 9.24172C11.1756 9.018 10.8839 8.72219 10.4164 8.69695C9.94887 8.6717 9.62698 8.93438 9.43373 9.13848C9.25683 9.3253 9.0741 9.58649 8.89069 9.84865L8.58131 10.2906C8.35416 10.6151 8.21175 10.8173 8.08848 10.9632C7.975 11.0974 7.91193 11.1414 7.86538 11.1656C7.81882 11.1898 7.74663 11.2163 7.57159 11.2323C7.38144 11.2496 7.13413 11.2504 6.73803 11.2504H6C5.58579 11.2504 5.25 11.5861 5.25 12.0004C5.25 12.4146 5.58579 12.7504 6 12.7504L6.76812 12.7504C7.12509 12.7504 7.44153 12.7504 7.70801 12.7261C7.99707 12.6997 8.27904 12.6413 8.55809 12.4961C8.83714 12.3508 9.04661 12.1532 9.234 11.9315C9.40676 11.7272 9.58821 11.4679 9.79291 11.1755L10.0932 10.7465Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHeartPulse as IconComponentType).keywords = [
  "heart",
  "pulse",
  "nerve",
  "marrow",
  "eye",
  "nub",
  "pith",
  "bosom",
  "spunk",
  "core",
  "meat",
  "heartbeat",
  "pulsation",
  "heart rate",
  "pulsate",
  "throb",
  "beat",
  "impulse",
  "oximetry",
  "oximeter"
];

export default IconHeartPulse as IconComponentType;