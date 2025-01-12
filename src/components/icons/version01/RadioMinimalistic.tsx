import { FC } from "react";

const IconRadioMinimalistic: FC<IconProps> = ({
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
            d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="8"
            cy="14"
            r="3"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M13.5 11H19"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M13.5 14H19"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M13.5 17H19"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M6.5 6L15 2"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
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
            opacity={duotone ? "0.5" : "1"}
            d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 11.75C6.75736 11.75 5.75 12.7574 5.75 14C5.75 15.2426 6.75736 16.25 8 16.25C9.24264 16.25 10.25 15.2426 10.25 14C10.25 12.7574 9.24264 11.75 8 11.75ZM4.25 14C4.25 11.9289 5.92893 10.25 8 10.25C10.0711 10.25 11.75 11.9289 11.75 14C11.75 16.0711 10.0711 17.75 8 17.75C5.92893 17.75 4.25 16.0711 4.25 14Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.75 11C12.75 10.5858 13.0858 10.25 13.5 10.25H19C19.4142 10.25 19.75 10.5858 19.75 11C19.75 11.4142 19.4142 11.75 19 11.75H13.5C13.0858 11.75 12.75 11.4142 12.75 11Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.75 14C12.75 13.5858 13.0858 13.25 13.5 13.25H19C19.4142 13.25 19.75 13.5858 19.75 14C19.75 14.4142 19.4142 14.75 19 14.75H13.5C13.0858 14.75 12.75 14.4142 12.75 14Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.75 17C12.75 16.5858 13.0858 16.25 13.5 16.25H19C19.4142 16.25 19.75 16.5858 19.75 17C19.75 17.4142 19.4142 17.75 19 17.75H13.5C13.0858 17.75 12.75 17.4142 12.75 17Z"
            fill="currentColor"
          />
          <path
            d="M15.3803 2.64645C15.7373 2.43643 15.8565 1.97676 15.6464 1.61973C15.4364 1.26271 14.9768 1.14353 14.6197 1.35355L6.63031 6.05321C7.47491 6.00429 8.47742 6.00034 9.67918 6.00003L15.3803 2.64645Z"
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
            d="M5.75 14C5.75 12.7574 6.75736 11.75 8 11.75C9.24264 11.75 10.25 12.7574 10.25 14C10.25 15.2426 9.24264 16.25 8 16.25C6.75736 16.25 5.75 15.2426 5.75 14Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.3195 3.67879C15.6943 3.50242 15.8552 3.05562 15.6788 2.68083C15.5024 2.30604 15.0556 2.14519 14.6808 2.32156L6.76692 6.04575C5.03147 6.13486 3.94566 6.39749 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14C22 10.2288 22 8.34314 20.8284 7.17157C19.6569 6 17.7712 6 14 6H10.387L15.3195 3.67879ZM8 10.25C5.92893 10.25 4.25 11.9289 4.25 14C4.25 16.0711 5.92893 17.75 8 17.75C10.0711 17.75 11.75 16.0711 11.75 14C11.75 11.9289 10.0711 10.25 8 10.25ZM12.75 11C12.75 10.5858 13.0858 10.25 13.5 10.25H19C19.4142 10.25 19.75 10.5858 19.75 11C19.75 11.4142 19.4142 11.75 19 11.75H13.5C13.0858 11.75 12.75 11.4142 12.75 11ZM13.5 13.25C13.0858 13.25 12.75 13.5858 12.75 14C12.75 14.4142 13.0858 14.75 13.5 14.75H19C19.4142 14.75 19.75 14.4142 19.75 14C19.75 13.5858 19.4142 13.25 19 13.25H13.5ZM12.75 17C12.75 16.5858 13.0858 16.25 13.5 16.25H19C19.4142 16.25 19.75 16.5858 19.75 17C19.75 17.4142 19.4142 17.75 19 17.75H13.5C13.0858 17.75 12.75 17.4142 12.75 17Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRadioMinimalistic as IconComponent).keywords = [
  "radio",
  "minimalistic",
  "radiocommunication",
  "tuner",
  "wireless",
  "radio receiver",
  "radio set",
  "receiving set",
  "radiotelegraph",
  "radiotelephone",
  "walkie-talkie",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
];

export default IconRadioMinimalistic as IconComponent;
