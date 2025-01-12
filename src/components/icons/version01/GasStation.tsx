import { FC } from "react";

const IconGasStation: FC<IconProps> = ({
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
            d="M16 22.0005V8.00049C16 5.17206 16 3.75785 15.1213 2.87917C14.2426 2.00049 12.8284 2.00049 10 2.00049H9C6.17157 2.00049 4.75736 2.00049 3.87868 2.87917C3 3.75785 3 5.17206 3 8.00049V22.0005"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M11 6.00049H8C7.05719 6.00049 6.58579 6.00049 6.29289 6.29338C6 6.58627 6 7.05768 6 8.00049C6 8.9433 6 9.4147 6.29289 9.7076C6.58579 10.0005 7.05719 10.0005 8 10.0005H11C11.9428 10.0005 12.4142 10.0005 12.7071 9.7076C13 9.4147 13 8.9433 13 8.00049C13 7.05768 13 6.58627 12.7071 6.29338C12.4142 6.00049 11.9428 6.00049 11 6.00049Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7 17.0005H12"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M17 22.0005H2"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19.9685 3.41484C19.6451 3.15608 19.1731 3.20852 18.9143 3.53197C18.6556 3.85541 18.708 4.32738 19.0315 4.58614L19.9685 3.41484ZM20.7331 4.98696L21.2016 4.4013L21.2016 4.4013L20.7331 4.98696ZM16 16.2505C15.5858 16.2505 15.25 16.5863 15.25 17.0005C15.25 17.4147 15.5858 17.7505 16 17.7505V16.2505ZM21.0025 5.20854L20.5019 5.76699L20.5019 5.76699L21.0025 5.20854ZM21.9953 7.27413L22.7441 7.23207V7.23207L21.9953 7.27413ZM22 8.75049C22.4142 8.75049 22.75 8.4147 22.75 8.00049C22.75 7.58627 22.4142 7.25049 22 7.25049V8.75049ZM20.0257 13.3424L19.7885 14.0539H19.7885L20.0257 13.3424ZM21.7628 14.712C22.1558 14.843 22.5805 14.6306 22.7115 14.2377C22.8425 13.8447 22.6301 13.42 22.2372 13.289L21.7628 14.712ZM19.0315 4.58614L20.2646 5.57261L21.2016 4.4013L19.9685 3.41484L19.0315 4.58614ZM21.25 7.62293V18.5005H22.75V7.62293H21.25ZM19.75 18.5005V18.4291H18.25V18.5005H19.75ZM17.5714 16.2505H16V17.7505H17.5714V16.2505ZM19.75 18.4291C19.75 17.2259 18.7746 16.2505 17.5714 16.2505V17.7505C17.9462 17.7505 18.25 18.0543 18.25 18.4291H19.75ZM20.5 19.2505C20.0858 19.2505 19.75 18.9147 19.75 18.5005H18.25C18.25 19.7431 19.2574 20.7505 20.5 20.7505V19.2505ZM21.25 18.5005C21.25 18.9147 20.9142 19.2505 20.5 19.2505V20.7505C21.7426 20.7505 22.75 19.7431 22.75 18.5005H21.25ZM20.2646 5.57261C20.4091 5.6882 20.4585 5.72814 20.5019 5.76699L21.5031 4.65008C21.4211 4.57655 21.3328 4.50623 21.2016 4.4013L20.2646 5.57261ZM22.75 7.62293C22.75 7.45497 22.7503 7.34206 22.7441 7.23207L21.2465 7.31619C21.2497 7.3743 21.25 7.43789 21.25 7.62293H22.75ZM20.5019 5.76699C20.9453 6.16451 21.2131 6.7216 21.2465 7.31619L22.7441 7.23207C22.6884 6.24109 22.2422 5.3126 21.5031 4.65008L20.5019 5.76699ZM22 7.25049H20.5V8.75049H22V7.25049ZM18.25 9.50049V11.9193H19.75V9.50049H18.25ZM19.7885 14.0539L21.7628 14.712L22.2372 13.289L20.2628 12.6309L19.7885 14.0539ZM18.25 11.9193C18.25 12.8878 18.8697 13.7476 19.7885 14.0539L20.2628 12.6309C19.9566 12.5288 19.75 12.2422 19.75 11.9193H18.25ZM20.5 7.25049C19.2574 7.25049 18.25 8.25785 18.25 9.50049H19.75C19.75 9.08627 20.0858 8.75049 20.5 8.75049V7.25049Z"
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
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.75 2.00049H8.75C5.92157 2.00049 4.50736 2.00049 3.62868 2.87917C2.75 3.75785 2.75 5.17206 2.75 8.00049V21.2505H15.75V17.7505V16.2505V8.00049C15.75 5.17206 15.75 3.75785 14.8713 2.87917C13.9926 2.00049 12.5784 2.00049 9.75 2.00049Z"
            fill="currentColor"
          />
          <path
            d="M2.75 21.2505H1.75C1.33579 21.2505 1 21.5863 1 22.0005C1 22.4147 1.33579 22.7505 1.75 22.7505H16.8734C17.2876 22.7505 17.6234 22.4147 17.6234 22.0005C17.6234 21.5863 17.2876 21.2505 16.8734 21.2505H15.75H2.75Z"
            fill="currentColor"
          />
          <path
            d="M8 6.00049H11C11.9428 6.00049 12.4142 6.00049 12.7071 6.29338C13 6.58627 13 7.05768 13 8.00049C13 8.9433 13 9.4147 12.7071 9.70759C12.4142 10.0005 11.9428 10.0005 11 10.0005H8C7.05719 10.0005 6.58579 10.0005 6.29289 9.70759C6 9.4147 6 8.9433 6 8.00049C6 7.05768 6 6.58627 6.29289 6.29338C6.58579 6.00049 7.05719 6.00049 8 6.00049Z"
            fill="currentColor"
          />
          <path
            d="M7 16.2505C6.58579 16.2505 6.25 16.5863 6.25 17.0005C6.25 17.4147 6.58579 17.7505 7 17.7505H12C12.4142 17.7505 12.75 17.4147 12.75 17.0005C12.75 16.5863 12.4142 16.2505 12 16.2505H7Z"
            fill="currentColor"
          />
          <path
            d="M15.75 17.7505H17.3214C17.6962 17.7505 18 18.0543 18 18.4291V18.5005C18 19.7432 19.0074 20.7505 20.25 20.7505C21.4926 20.7505 22.5 19.7432 22.5 18.5005V7.60226C22.5 7.4456 22.5 7.33751 22.4941 7.2321C22.4384 6.24112 21.9922 5.31263 21.2531 4.65011C21.1745 4.57964 21.0901 4.51212 20.9678 4.41427L19.7185 3.41486C19.3951 3.15611 18.9231 3.20855 18.6643 3.53199C18.4056 3.85544 18.458 4.32741 18.7815 4.58617L20.0146 5.57263C20.1591 5.68823 20.2085 5.72817 20.2519 5.76702C20.6953 6.16453 20.9631 6.72163 20.9965 7.31622C20.9997 7.37432 21 7.43792 21 7.62296V8.00049H20.25C19.4216 8.00049 18.75 8.67206 18.75 9.50049V11.9193C18.75 12.565 19.1631 13.1382 19.7757 13.3424L21 13.7505V18.5005C21 18.9147 20.6642 19.2505 20.25 19.2505C19.8358 19.2505 19.5 18.9147 19.5 18.5005V18.4291C19.5 17.2259 18.5246 16.2505 17.3214 16.2505H15.75V17.7505Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.75 2.00049H9.75C12.5784 2.00049 13.9926 2.00049 14.8713 2.87917C15.75 3.75785 15.75 5.17206 15.75 8.00049V16.2505H17.3214C18.5246 16.2505 19.5 17.2259 19.5 18.4291V18.5005C19.5 18.9147 19.8358 19.2505 20.25 19.2505C20.6642 19.2505 21 18.9147 21 18.5005V13.7505L19.7757 13.3424C19.1631 13.1382 18.75 12.565 18.75 11.9193V9.50049C18.75 8.67206 19.4216 8.00049 20.25 8.00049H21V7.62296C21 7.43792 20.9997 7.37432 20.9965 7.31622C20.9631 6.72163 20.6953 6.16453 20.2519 5.76702C20.2085 5.72817 20.1591 5.68823 20.0146 5.57263L18.7815 4.58617C18.458 4.32741 18.4056 3.85544 18.6643 3.53199C18.9231 3.20855 19.3951 3.15611 19.7185 3.41486L20.9678 4.41427C21.0901 4.51212 21.1745 4.57964 21.2531 4.65011C21.9922 5.31263 22.4384 6.24112 22.4941 7.2321C22.5 7.33751 22.5 7.4456 22.5 7.60226V18.5005C22.5 19.7432 21.4926 20.7505 20.25 20.7505C19.0074 20.7505 18 19.7432 18 18.5005V18.4291C18 18.0543 17.6962 17.7505 17.3214 17.7505H15.75V21.2505H16.8734C17.2876 21.2505 17.6234 21.5863 17.6234 22.0005C17.6234 22.4147 17.2876 22.7505 16.8734 22.7505H1.75C1.33579 22.7505 1 22.4147 1 22.0005C1 21.5863 1.33579 21.2505 1.75 21.2505H2.75V8.00049C2.75 5.17206 2.75 3.75785 3.62868 2.87917C4.50736 2.00049 5.92157 2.00049 8.75 2.00049ZM7 16.2505C6.58579 16.2505 6.25 16.5863 6.25 17.0005C6.25 17.4147 6.58579 17.7505 7 17.7505H12C12.4142 17.7505 12.75 17.4147 12.75 17.0005C12.75 16.5863 12.4142 16.2505 12 16.2505H7ZM11 6.00049H8C7.05719 6.00049 6.58579 6.00049 6.29289 6.29338C6 6.58628 6 7.05768 6 8.00049C6 8.9433 6 9.4147 6.29289 9.70759C6.58579 10.0005 7.05719 10.0005 8 10.0005H11C11.9428 10.0005 12.4142 10.0005 12.7071 9.70759C13 9.4147 13 8.9433 13 8.00049C13 7.05768 13 6.58628 12.7071 6.29338C12.4142 6.00049 11.9428 6.00049 11 6.00049Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconGasStation as IconComponent).keywords = [
  "gas",
  "station",
  "natural gas",
  "gasoline",
  "petrol",
  "gasolene",
  "swash",
  "throttle",
  "gun",
  "gas pedal",
  "blow",
  "place",
  "send",
  "post",
  "base",
  "railroad",
  "railway",
  "points",
  "subway",
  "parking",
];

export default IconGasStation as IconComponent;
