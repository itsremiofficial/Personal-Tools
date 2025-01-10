import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDumbbell: FC<IconProps> = ({
  className,
  fill = false,
  duotone = true,
  width = "1.5",
}) => {
  return (
    <>
      {!fill ? (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.2346 16.8482L16.9476 17.5412L17.2346 16.8482ZM16 13.5005H16.75C16.75 13.0863 16.4142 12.7505 16 12.7505V13.5005ZM16.1522 15.7659L15.4593 16.0529L16.1522 15.7659ZM21.8478 15.7659L22.5407 16.0529L21.8478 15.7659ZM20.7654 16.8482L20.4784 16.1553L20.7654 16.8482ZM20.7654 7.15273L20.4784 7.84564V7.84564L20.7654 7.15273ZM21.8478 8.23512L22.5407 7.94811L21.8478 8.23512ZM17.2346 7.15273L16.9476 6.45982L16.9476 6.45982L17.2346 7.15273ZM16 10.5005V11.2505C16.4142 11.2505 16.75 10.9147 16.75 10.5005H16ZM16.1522 8.23512L15.4593 7.94811L16.1522 8.23512ZM3.23463 16.8482L2.94762 17.5412L3.23463 16.8482ZM2.15224 15.7659L1.45933 16.0529L1.45933 16.0529L2.15224 15.7659ZM8 13.5005V12.7505C7.58579 12.7505 7.25 13.0863 7.25 13.5005H8ZM7.84776 15.7659L8.54067 16.0529L7.84776 15.7659ZM6.76537 16.8482L7.05238 17.5412H7.05238L6.76537 16.8482ZM6.76537 7.15273L7.05238 6.45982V6.45982L6.76537 7.15273ZM8 10.5005H7.25C7.25 10.9147 7.58579 11.2505 8 11.2505V10.5005ZM7.84776 8.23512L8.54067 7.94811L7.84776 8.23512ZM3.23463 7.15273L2.94762 6.45982L3.23463 7.15273ZM2.15224 8.23512L1.45933 7.94811L2.15224 8.23512ZM21.25 10.0005V14.0005H22.75V10.0005H21.25ZM19 16.2505C18.5238 16.2505 18.2042 16.2501 17.9567 16.2332C17.716 16.2168 17.5988 16.1873 17.5216 16.1553L16.9476 17.5412C17.238 17.6614 17.5375 17.7081 17.8546 17.7297C18.165 17.7509 18.5443 17.7505 19 17.7505V16.2505ZM15.25 13.5005C15.25 13.9615 15.2498 14.455 15.2699 14.8801C15.2799 15.0933 15.2955 15.3019 15.3211 15.4893C15.3452 15.6659 15.3841 15.8711 15.4593 16.0529L16.8452 15.4788C16.847 15.4833 16.8416 15.4708 16.8329 15.4333C16.8247 15.3974 16.8159 15.349 16.8073 15.2864C16.7901 15.1602 16.7772 15.0002 16.7682 14.8095C16.7502 14.4268 16.75 13.9714 16.75 13.5005H15.25ZM17.5216 16.1553C17.2154 16.0285 16.972 15.7851 16.8452 15.4788L15.4593 16.0529C15.7384 16.7267 16.2738 17.262 16.9476 17.5412L17.5216 16.1553ZM21.25 14.0005C21.25 14.4767 21.2496 14.7963 21.2327 15.0437C21.2163 15.2845 21.1868 15.4017 21.1549 15.4788L22.5407 16.0529C22.661 15.7625 22.7076 15.463 22.7292 15.1459C22.7504 14.8355 22.75 14.4562 22.75 14.0005H21.25ZM19 17.7505C19.4557 17.7505 19.835 17.7509 20.1454 17.7297C20.4625 17.7081 20.762 17.6614 21.0524 17.5412L20.4784 16.1553C20.4012 16.1873 20.284 16.2168 20.0433 16.2332C19.7958 16.2501 19.4762 16.2505 19 16.2505V17.7505ZM21.1549 15.4788C21.028 15.7851 20.7846 16.0285 20.4784 16.1553L21.0524 17.5412C21.7262 17.262 22.2616 16.7267 22.5407 16.0529L21.1549 15.4788ZM19 7.75049C19.4762 7.75049 19.7958 7.75089 20.0433 7.76778C20.284 7.7842 20.4012 7.81368 20.4784 7.84564L21.0524 6.45982C20.762 6.33954 20.4625 6.29289 20.1454 6.27126C19.835 6.25008 19.4557 6.25049 19 6.25049V7.75049ZM22.75 10.0005C22.75 9.54481 22.7504 9.16549 22.7292 8.85512C22.7076 8.53802 22.661 8.2385 22.5407 7.94811L21.1549 8.52213C21.1868 8.59929 21.2163 8.7165 21.2327 8.95723C21.2496 9.20469 21.25 9.52429 21.25 10.0005H22.75ZM20.4784 7.84564C20.7846 7.97251 21.028 8.21585 21.1549 8.52213L22.5407 7.94811C22.2616 7.27428 21.7262 6.73893 21.0524 6.45982L20.4784 7.84564ZM19 6.25049C18.5443 6.25049 18.165 6.25008 17.8546 6.27126C17.5375 6.29289 17.238 6.33954 16.9476 6.45982L17.5216 7.84564C17.5988 7.81368 17.716 7.7842 17.9567 7.76778C18.2042 7.75089 18.5238 7.75049 19 7.75049V6.25049ZM16.75 10.5005C16.75 10.0296 16.7502 9.57419 16.7682 9.19147C16.7772 9.00075 16.7901 8.84075 16.8073 8.71455C16.8159 8.65196 16.8247 8.60356 16.8329 8.56772C16.8416 8.53017 16.847 8.51764 16.8452 8.52213L15.4593 7.94811C15.3841 8.12984 15.3452 8.33505 15.3211 8.51164C15.2955 8.69905 15.2799 8.90769 15.2699 9.12088C15.2498 9.54599 15.25 10.0395 15.25 10.5005H16.75ZM16.9476 6.45982C16.2738 6.73893 15.7384 7.27428 15.4593 7.94811L16.8452 8.52213C16.972 8.21585 17.2154 7.97251 17.5216 7.84564L16.9476 6.45982ZM2.75 14.0005V10.0005H1.25V14.0005H2.75ZM5 16.2505C4.5238 16.2505 4.20421 16.2501 3.95674 16.2332C3.71601 16.2168 3.5988 16.1873 3.52165 16.1553L2.94762 17.5412C3.23801 17.6614 3.53754 17.7081 3.85464 17.7297C4.165 17.7509 4.54432 17.7505 5 17.7505V16.2505ZM1.25 14.0005C1.25 14.4562 1.24959 14.8355 1.27077 15.1459C1.29241 15.463 1.33905 15.7625 1.45933 16.0529L2.84515 15.4788C2.81319 15.4017 2.78372 15.2845 2.76729 15.0437C2.75041 14.7963 2.75 14.4767 2.75 14.0005H1.25ZM3.52165 16.1553C3.21536 16.0285 2.97202 15.7851 2.84515 15.4788L1.45933 16.0529C1.73844 16.7267 2.27379 17.262 2.94762 17.5412L3.52165 16.1553ZM7.25 13.5005C7.25 13.9714 7.24983 14.4268 7.2318 14.8095C7.22282 15.0002 7.2099 15.1602 7.19267 15.2864C7.18412 15.349 7.17529 15.3974 7.16706 15.4333C7.15843 15.4708 7.15299 15.4833 7.15485 15.4788L8.54067 16.0529C8.61595 15.8711 8.65477 15.6659 8.67888 15.4893C8.70447 15.3019 8.72009 15.0933 8.73014 14.8801C8.75017 14.455 8.75 13.9615 8.75 13.5005H7.25ZM5 17.7505C5.45568 17.7505 5.835 17.7509 6.14536 17.7297C6.46246 17.7081 6.76199 17.6614 7.05238 17.5412L6.47835 16.1553C6.4012 16.1873 6.28399 16.2168 6.04326 16.2332C5.79579 16.2501 5.4762 16.2505 5 16.2505V17.7505ZM7.15485 15.4788C7.02798 15.7851 6.78464 16.0285 6.47835 16.1553L7.05238 17.5412C7.72621 17.262 8.26156 16.7267 8.54067 16.0529L7.15485 15.4788ZM5 7.75049C5.4762 7.75049 5.79579 7.75089 6.04326 7.76778C6.28399 7.7842 6.4012 7.81368 6.47835 7.84564L7.05238 6.45982C6.76199 6.33954 6.46246 6.29289 6.14536 6.27126C5.835 6.25008 5.45568 6.25049 5 6.25049V7.75049ZM8.75 10.5005C8.75 10.0395 8.75017 9.54599 8.73014 9.12088C8.72009 8.90769 8.70447 8.69905 8.67888 8.51164C8.65477 8.33505 8.61595 8.12984 8.54067 7.94811L7.15485 8.52213C7.15299 8.51764 7.15843 8.53017 7.16706 8.56772C7.17529 8.60356 7.18412 8.65196 7.19267 8.71455C7.2099 8.84075 7.22282 9.00075 7.2318 9.19147C7.24983 9.57419 7.25 10.0296 7.25 10.5005H8.75ZM6.47835 7.84564C6.78464 7.97251 7.02798 8.21585 7.15485 8.52213L8.54067 7.94811C8.26156 7.27428 7.72621 6.73893 7.05238 6.45982L6.47835 7.84564ZM5 6.25049C4.54432 6.25049 4.165 6.25008 3.85464 6.27126C3.53754 6.29289 3.23801 6.33954 2.94762 6.45982L3.52165 7.84564C3.5988 7.81368 3.71601 7.7842 3.95674 7.76778C4.20421 7.75089 4.5238 7.75049 5 7.75049V6.25049ZM2.75 10.0005C2.75 9.52428 2.75041 9.20469 2.76729 8.95723C2.78372 8.7165 2.81319 8.59929 2.84515 8.52213L1.45933 7.94811C1.33905 8.2385 1.29241 8.53802 1.27077 8.85512C1.24959 9.16549 1.25 9.54481 1.25 10.0005H2.75ZM2.94762 6.45982C2.27379 6.73893 1.73844 7.27428 1.45933 7.94811L2.84515 8.52213C2.97202 8.21585 3.21536 7.97251 3.52165 7.84564L2.94762 6.45982ZM8 11.2505H16V9.75049H8V11.2505ZM16 12.7505H8V14.2505H16V12.7505Z"
            fill="currentColor"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 10.0005V14.0005C22 14.9324 22 15.3983 21.8478 15.7659C21.6448 16.2559 21.2554 16.6453 20.7654 16.8482C20.3978 17.0005 19.9319 17.0005 19 17.0005C18.0681 17.0005 17.6022 17.0005 17.2346 16.8482C16.7446 16.6453 16.3552 16.2559 16.1522 15.7659C16 15.3983 16 14.4324 16 13.5005V10.5005C16 9.5686 16 8.60266 16.1522 8.23512C16.3552 7.74507 16.7446 7.35572 17.2346 7.15273C17.6022 7.00049 18.0681 7.00049 19 7.00049C19.9319 7.00049 20.3978 7.00049 20.7654 7.15273C21.2554 7.35572 21.6448 7.74507 21.8478 8.23512C22 8.60266 22 9.0686 22 10.0005ZM8 10.5005V13.5005C8 14.4324 8 15.3983 7.84776 15.7659C7.64477 16.2559 7.25542 16.6453 6.76537 16.8482C6.39782 17.0005 5.93188 17.0005 5 17.0005C4.06812 17.0005 3.60218 17.0005 3.23463 16.8482C2.74458 16.6453 2.35523 16.2559 2.15224 15.7659C2 15.3983 2 14.9324 2 14.0005V10.0005C2 9.0686 2 8.60266 2.15224 8.23512C2.35523 7.74507 2.74458 7.35572 3.23463 7.15273C3.60218 7.00049 4.06812 7.00049 5 7.00049C5.93188 7.00049 6.39782 7.00049 6.76537 7.15273C7.25542 7.35572 7.64477 7.74507 7.84776 8.23512C8 8.60266 8 9.5686 8 10.5005Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16 10.5005H8V13.5005H16V10.5005Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 14.0005V10.0005C22 9.0686 22 8.60266 21.8478 8.23512C21.6448 7.74507 21.2554 7.35572 20.7654 7.15273C20.3978 7.00049 19.9319 7.00049 19 7.00049C18.0681 7.00049 17.6022 7.00049 17.2346 7.15273C16.7446 7.35572 16.3552 7.74507 16.1522 8.23512C16 8.60266 16 9.5686 16 10.5005H8C8 9.5686 8 8.60266 7.84776 8.23512C7.64477 7.74507 7.25542 7.35572 6.76537 7.15273C6.39782 7.00049 5.93188 7.00049 5 7.00049C4.06812 7.00049 3.60218 7.00049 3.23463 7.15273C2.74458 7.35572 2.35523 7.74507 2.15224 8.23512C2 8.60266 2 9.0686 2 10.0005V14.0005C2 14.9324 2 15.3983 2.15224 15.7659C2.35523 16.2559 2.74458 16.6453 3.23463 16.8482C3.60218 17.0005 4.06812 17.0005 5 17.0005C5.93188 17.0005 6.39782 17.0005 6.76537 16.8482C7.25542 16.6453 7.64477 16.2559 7.84776 15.7659C8 15.3983 8 14.4324 8 13.5005H16C16 14.4324 16 15.3983 16.1522 15.7659C16.3552 16.2559 16.7446 16.6453 17.2346 16.8482C17.6022 17.0005 18.0681 17.0005 19 17.0005C19.9319 17.0005 20.3978 17.0005 20.7654 16.8482C21.2554 16.6453 21.6448 16.2559 21.8478 15.7659C22 15.3983 22 14.9324 22 14.0005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDumbbell as IconComponentType).keywords = [
  "dumbbell",
  "dope",
  "boob",
  "booby",
  "dummy",
  "pinhead",
  "jerk",
  "jackass",
  "arsehole",
  "sucker",
];

export default IconDumbbell as IconComponentType;
