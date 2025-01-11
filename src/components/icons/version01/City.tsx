import { FC } from "react";

const IconCity: FC<IconProps> = ({
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
            d="M17 22V16C17 14.1144 17 13.1716 16.4142 12.5858C15.8284 12 14.8856 12 13 12H11C9.11438 12 8.17157 12 7.58579 12.5858C7 13.1716 7 14.1144 7 16V22"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M21 22.0001V7.77207C21 6.43122 21 5.7608 20.6439 5.24688C20.2877 4.73296 19.66 4.49756 18.4045 4.02675C15.9492 3.10604 14.7216 2.64568 13.8608 3.24222C13 3.83876 13 5.14986 13 7.77207V12.0001"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M3.25 8C3.25 8.41421 3.58579 8.75 4 8.75C4.41421 8.75 4.75 8.41421 4.75 8H3.25ZM9.25 8C9.25 8.41421 9.58579 8.75 10 8.75C10.4142 8.75 10.75 8.41421 10.75 8H9.25ZM9.70711 4.79289L9.17678 5.32322L9.17678 5.32322L9.70711 4.79289ZM6.25 4C6.25 4.41421 6.58579 4.75 7 4.75C7.41421 4.75 7.75 4.41421 7.75 4H6.25ZM7.75 2C7.75 1.58579 7.41421 1.25 7 1.25C6.58579 1.25 6.25 1.58579 6.25 2H7.75ZM3.75 22V12H2.25V22H3.75ZM7 8.75C7.96401 8.75 8.61157 8.75159 9.09461 8.81654C9.55607 8.87858 9.75357 8.9858 9.88388 9.11612L10.9445 8.05546C10.4891 7.59999 9.92227 7.41432 9.29448 7.32991C8.68826 7.24841 7.92161 7.25 7 7.25V8.75ZM11.75 12C11.75 11.0784 11.7516 10.3117 11.6701 9.70552C11.5857 9.07773 11.4 8.51093 10.9445 8.05546L9.88388 9.11612C10.0142 9.24643 10.1214 9.44393 10.1835 9.90539C10.2484 10.3884 10.25 11.036 10.25 12H11.75ZM7 7.25C6.07839 7.25 5.31174 7.24841 4.70552 7.32991C4.07773 7.41432 3.51093 7.59999 3.05546 8.05546L4.11612 9.11612C4.24643 8.9858 4.44393 8.87858 4.90539 8.81654C5.38843 8.75159 6.03599 8.75 7 8.75V7.25ZM3.75 12C3.75 11.036 3.75159 10.3884 3.81654 9.90539C3.87858 9.44393 3.9858 9.24643 4.11612 9.11612L3.05546 8.05546C2.59999 8.51093 2.41432 9.07773 2.32991 9.70552C2.24841 10.3117 2.25 11.0784 2.25 12H3.75ZM4.75 8V6.5H3.25V8H4.75ZM6 5.25H8V3.75H6V5.25ZM9.25 6.5V8H10.75V6.5H9.25ZM8 5.25C8.49261 5.25 8.78661 5.25159 8.99734 5.27992C9.09389 5.29291 9.14226 5.3082 9.16404 5.31716C9.16908 5.31923 9.1724 5.32085 9.17433 5.32186C9.17624 5.32286 9.17708 5.32341 9.17717 5.32347C9.17723 5.32351 9.177 5.32335 9.17665 5.32307C9.1763 5.32279 9.17632 5.32277 9.17678 5.32322L10.2374 4.26256C9.92841 3.95354 9.55269 3.84109 9.19721 3.7933C8.8633 3.74841 8.4502 3.75 8 3.75V5.25ZM10.75 6.5C10.75 6.0498 10.7516 5.6367 10.7067 5.30279C10.6589 4.94731 10.5465 4.57159 10.2374 4.26256L9.17678 5.32322C9.17723 5.32368 9.17721 5.3237 9.17693 5.32335C9.17665 5.323 9.17649 5.32277 9.17653 5.32283C9.17659 5.32292 9.17714 5.32376 9.17814 5.32567C9.17915 5.3276 9.18077 5.33092 9.18284 5.33596C9.1918 5.35774 9.20709 5.40611 9.22008 5.50266C9.24841 5.71339 9.25 6.00739 9.25 6.5H10.75ZM4.75 6.5C4.75 6.00739 4.75159 5.71339 4.77992 5.50266C4.79291 5.40611 4.8082 5.35774 4.81716 5.33596C4.81923 5.33092 4.82085 5.3276 4.82186 5.32567C4.82286 5.32376 4.82341 5.32292 4.82347 5.32283C4.82351 5.32277 4.82335 5.323 4.82307 5.32335C4.82279 5.3237 4.82277 5.32368 4.82322 5.32322L3.76256 4.26256C3.45354 4.57159 3.34109 4.94731 3.2933 5.30279C3.24841 5.6367 3.25 6.0498 3.25 6.5H4.75ZM6 3.75C5.5498 3.75 5.1367 3.74841 4.80279 3.7933C4.44731 3.84109 4.07159 3.95354 3.76256 4.26256L4.82322 5.32322C4.82368 5.32277 4.8237 5.32279 4.82335 5.32307C4.823 5.32335 4.82277 5.32351 4.82283 5.32347C4.82292 5.32341 4.82376 5.32286 4.82567 5.32186C4.8276 5.32085 4.83092 5.31923 4.83596 5.31716C4.85774 5.3082 4.90611 5.29291 5.00266 5.27992C5.21339 5.25159 5.50739 5.25 6 5.25V3.75ZM7.75 4V2H6.25V4H7.75Z"
            fill="currentColor"
          />
          <path
            d="M22 22L2 22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 15H14"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 18H14"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 21.25C1.58579 21.25 1.25 21.5858 1.25 22C1.25 22.4142 1.58579 22.75 2 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H21H18.5H17V16C17 14.1144 17 13.1716 16.4142 12.5858C15.8284 12 14.8856 12 13 12H11C9.11438 12 8.17157 12 7.58579 12.5858C7 13.1716 7 14.1144 7 16V21.25H5.5H3H2ZM9.25 15C9.25 14.5858 9.58579 14.25 10 14.25H14C14.4142 14.25 14.75 14.5858 14.75 15C14.75 15.4142 14.4142 15.75 14 15.75H10C9.58579 15.75 9.25 15.4142 9.25 15ZM9.25 18C9.25 17.5858 9.58579 17.25 10 17.25H14C14.4142 17.25 14.75 17.5858 14.75 18C14.75 18.4142 14.4142 18.75 14 18.75H10C9.58579 18.75 9.25 18.4142 9.25 18Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M8 4.5C8.94281 4.5 9.41421 4.5 9.70711 4.79289C10 5.08579 10 5.55719 10 6.5L9.99999 8.29243C10.1568 8.36863 10.2931 8.46469 10.4142 8.58579C10.8183 8.98987 10.9436 9.56385 10.9825 10.5V12C9.10855 12 8.16976 12.0018 7.58579 12.5858C7 13.1716 7 14.1144 7 16V21.25H3V12C3 10.1144 3 9.17157 3.58579 8.58579C3.70688 8.46469 3.84322 8.36864 4 8.29243V6.5C4 5.55719 4 5.08579 4.29289 4.79289C4.58579 4.5 5.05719 4.5 6 4.5H6.25V3C6.25 2.58579 6.58579 2.25 7 2.25C7.41421 2.25 7.75 2.58579 7.75 3V4.5H8Z"
              fill="currentColor"
            />
            <path
              d="M20.6439 5.24676C20.2877 4.73284 19.66 4.49743 18.4045 4.02663C15.9493 3.10592 14.7216 2.64555 13.8608 3.2421C13 3.83864 13 5.14974 13 7.77195V12C14.8856 12 15.8284 12 16.4142 12.5858C17 13.1716 17 14.1144 17 16V21.25H21V7.77195C21 6.4311 21 5.76068 20.6439 5.24676Z"
              fill="currentColor"
            />
          </g>
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
            d="M9.70711 4.79289C9.41421 4.5 8.94281 4.5 8 4.5H7.75V3C7.75 2.58579 7.41421 2.25 7 2.25C6.58579 2.25 6.25 2.58579 6.25 3V4.5H6C5.05719 4.5 4.58579 4.5 4.29289 4.79289C4 5.08579 4 5.55719 4 6.5V6.7038C4.20249 6.65059 4.40564 6.61348 4.60559 6.5866C5.25121 6.4998 6.04487 6.49989 6.9105 6.49999H7.0895C7.95513 6.49989 8.74879 6.4998 9.39441 6.5866C9.59436 6.61348 9.79751 6.65059 9.99999 6.7038L10 6.5C10 5.55719 10 5.08579 9.70711 4.79289Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 21.25C1.58579 21.25 1.25 21.5858 1.25 22C1.25 22.4142 1.58579 22.75 2 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H21V7.77195C21 6.4311 21 5.76068 20.6439 5.24676C20.2877 4.73283 19.66 4.49743 18.4045 4.02663C15.9492 3.10591 14.7216 2.64555 13.8608 3.2421C13 3.83864 13 5.14974 13 7.77195V10.5L13.0895 10.5C13.9551 10.4999 14.7488 10.4998 15.3944 10.5866C16.1054 10.6822 16.8568 10.9071 17.4749 11.5251C18.0929 12.1432 18.3178 12.8946 18.4134 13.6056C18.5002 14.2512 18.5001 15.0449 18.5 15.9105L18.5 16V21.25H17V16C17 14.1144 17 13.1716 16.4142 12.5858C15.8284 12 14.8856 12 13 12H11C9.11438 12 8.17157 12 7.58579 12.5858C7 13.1716 7 14.1144 7 16V21.25H5.5V16L5.49999 15.9105C5.49989 15.0449 5.4998 14.2512 5.5866 13.6056C5.68219 12.8946 5.90708 12.1432 6.52513 11.5251C7.14317 10.9071 7.89462 10.6822 8.60558 10.5866C9.25121 10.4998 10.0449 10.4999 10.9105 10.5L10.9825 10.5C10.9436 9.56385 10.8183 8.98987 10.4142 8.58579C9.82843 8 8.88562 8 7 8C5.11438 8 4.17157 8 3.58579 8.58579C3 9.17157 3 10.1144 3 12V21.25H2ZM9.25 15C9.25 14.5858 9.58579 14.25 10 14.25H14C14.4142 14.25 14.75 14.5858 14.75 15C14.75 15.4142 14.4142 15.75 14 15.75H10C9.58579 15.75 9.25 15.4142 9.25 15ZM9.25 18C9.25 17.5858 9.58579 17.25 10 17.25H14C14.4142 17.25 14.75 17.5858 14.75 18C14.75 18.4142 14.4142 18.75 14 18.75H10C9.58579 18.75 9.25 18.4142 9.25 18Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCity as IconComponent).keywords = [
  "city",
  "metropolis",
  "urban center",
  "conurbation",
  "urban",
  "town",
  "urbanization",
  "midtown",
  "downtown",
  "village",
];

export default IconCity as IconComponent;