import { FC } from "react";

const IconHeadphonesSquareSound: FC<IconProps> = ({
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
            d="M8 15.1871C8 14.6088 8 14.3196 7.93097 14.0899C7.77135 13.5588 7.35457 13.156 6.83579 13.0313C6.61143 12.9775 6.33578 13.0002 5.78447 13.0457C4.82772 13.1247 4.34935 13.1642 3.95934 13.3151C3.06004 13.6629 2.3739 14.4394 2.1131 15.4044C2 15.8229 2 16.3248 2 17.3285V17.514C2 18.5431 2 19.0577 2.12305 19.493C2.36454 20.3475 2.942 21.0543 3.71133 21.437C4.10333 21.632 4.58932 21.7123 5.56129 21.8728C6.20632 21.9793 6.52883 22.0326 6.78984 21.9788C7.30414 21.8729 7.72826 21.4938 7.90852 20.9791C8 20.7178 8 20.3763 8 19.6934V15.1871Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M16 15.1871C16 14.6088 16 14.3196 16.069 14.0899C16.2286 13.5588 16.6454 13.156 17.1642 13.0313C17.3886 12.9775 17.6642 13.0002 18.2155 13.0457C19.1723 13.1247 19.6506 13.1642 20.0407 13.3151C20.94 13.6629 21.6261 14.4394 21.8869 15.4044C22 15.8229 22 16.3248 22 17.3285V17.514C22 18.5431 22 19.0577 21.877 19.493C21.6355 20.3475 21.058 21.0543 20.2887 21.437C19.8967 21.632 19.4107 21.7123 18.4387 21.8728C17.7937 21.9793 17.4712 22.0326 17.2102 21.9788C16.6959 21.8729 16.2717 21.4938 16.0915 20.9791C16 20.7178 16 20.3763 16 19.6934V15.1871Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M22 17V12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12V17"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M12 6.5L12 11.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M15 8L15 10"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M9 8L9 10"
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
            d="M12.0534 2C14.2007 1.99999 15.8835 1.99998 17.1965 2.1787C18.5405 2.36163 19.6009 2.74337 20.4333 3.58607C21.2657 4.42878 21.6428 5.50242 21.8234 6.86303C22 8.19233 22 9.89603 21.9999 12.07L22 17.3675C22.0003 18.1844 22.0005 18.7446 21.8569 19.2364C21.5761 20.1982 20.9046 20.9937 20.01 21.4245C19.5526 21.6449 19.006 21.732 18.2089 21.8591L18.0789 21.8799C17.7955 21.9252 17.5532 21.9639 17.3523 21.9839C17.1432 22.0047 16.9299 22.0111 16.7118 21.9676C15.9942 21.8245 15.4024 21.3126 15.1509 20.6172C15.0744 20.4059 15.0474 20.1916 15.0351 19.9793C15.0232 19.7753 15.0232 19.527 15.0232 19.2365L15.0232 15.0641C15.0226 14.6386 15.0222 14.2725 15.1196 13.959C15.3423 13.2416 15.9238 12.6975 16.6477 12.5292C16.9641 12.4556 17.3246 12.4849 17.7435 12.5189L17.8368 12.5264L17.9466 12.5352C18.7303 12.5975 19.2665 12.6402 19.7217 12.8106C20.0415 12.9304 20.3382 13.0953 20.6046 13.2976V12.124C20.6046 9.8843 20.6031 8.27554 20.4405 7.05126C20.2807 5.8473 19.9766 5.12146 19.4467 4.58497C18.9167 4.04848 18.1998 3.74063 17.0106 3.57876C15.8013 3.41416 14.2123 3.41266 12 3.41266C9.78771 3.41266 8.19868 3.41416 6.9894 3.57876C5.80019 3.74063 5.08325 4.04848 4.55334 4.58497C4.02343 5.12146 3.71934 5.8473 3.55946 7.05126C3.39688 8.27554 3.39539 9.8843 3.39539 12.124V13.2976C3.66181 13.0953 3.95848 12.9304 4.27834 12.8106C4.73351 12.6402 5.2697 12.5975 6.05341 12.5352L6.16324 12.5264L6.25647 12.5189C6.6754 12.4849 7.03586 12.4556 7.35229 12.5292C8.07617 12.6975 8.65772 13.2416 8.88044 13.959C8.9778 14.2725 8.97735 14.6386 8.97684 15.0641L8.97676 19.2365C8.97677 19.527 8.97677 19.7753 8.96492 19.9793C8.95259 20.1916 8.92556 20.4059 8.84911 20.6172C8.59759 21.3126 8.0058 21.8245 7.28817 21.9676C7.07006 22.0111 6.8568 22.0047 6.64773 21.9839C6.44676 21.9639 6.20454 21.9252 5.92107 21.8799L5.79111 21.8591C4.99404 21.732 4.44742 21.6449 3.98996 21.4245C3.09539 20.9937 2.42393 20.1982 2.14313 19.2364C1.99954 18.7446 1.99973 18.1844 2.00003 17.3675L2.00005 12.07C2.00004 9.89602 2.00003 8.19233 2.17656 6.86303C2.35725 5.50242 2.73431 4.42878 3.56668 3.58607C4.39906 2.74337 5.45954 2.36163 6.80347 2.1787C8.11648 1.99998 9.79929 1.99999 11.9466 2H12.0534Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 5.75C12.4142 5.75 12.75 6.08579 12.75 6.5V11.5C12.75 11.9142 12.4142 12.25 12 12.25C11.5858 12.25 11.25 11.9142 11.25 11.5V6.5C11.25 6.08579 11.5858 5.75 12 5.75Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 7.25C15.4142 7.25 15.75 7.58579 15.75 8L15.75 10C15.75 10.4142 15.4142 10.75 15 10.75C14.5858 10.75 14.25 10.4142 14.25 10L14.25 8C14.25 7.58579 14.5858 7.25 15 7.25Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 7.25C9.41421 7.25 9.75 7.58579 9.75 8V10C9.75 10.4142 9.41421 10.75 9 10.75C8.58579 10.75 8.25 10.4142 8.25 10V8C8.25 7.58579 8.58579 7.25 9 7.25Z"
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
            d="M12.0534 2C14.2007 1.99999 15.8835 1.99998 17.1965 2.1787C18.5405 2.36163 19.6009 2.74337 20.4333 3.58607C21.2657 4.42878 21.6428 5.50242 21.8234 6.86303C22 8.19233 22 9.89603 21.9999 12.07L22 17.3675C22.0003 18.1844 22.0005 18.7446 21.8569 19.2364C21.5761 20.1982 20.9046 20.9937 20.01 21.4245C19.5526 21.6449 19.006 21.732 18.2089 21.8591L18.0789 21.8799C17.7955 21.9252 17.5532 21.9639 17.3523 21.9839C17.1432 22.0047 16.9299 22.0111 16.7118 21.9676C15.9942 21.8245 15.4024 21.3126 15.1509 20.6172C15.0744 20.4059 15.0474 20.1916 15.0351 19.9793C15.0232 19.7753 15.0232 19.527 15.0232 19.2365L15.0232 15.0641C15.0226 14.6386 15.0222 14.2725 15.1196 13.959C15.3423 13.2416 15.9238 12.6975 16.6477 12.5292C16.9641 12.4556 17.3246 12.4849 17.7435 12.5189L17.8368 12.5264L17.9466 12.5352C18.7303 12.5975 19.2665 12.6402 19.7217 12.8106C20.0415 12.9304 20.3382 13.0953 20.6046 13.2976V12.124C20.6046 9.8843 20.6031 8.27554 20.4405 7.05126C20.2807 5.8473 19.9766 5.12146 19.4467 4.58497C18.9167 4.04848 18.1998 3.74063 17.0106 3.57876C15.8013 3.41416 14.2123 3.41266 12 3.41266C9.78771 3.41266 8.19868 3.41416 6.9894 3.57876C5.80019 3.74063 5.08325 4.04848 4.55334 4.58497C4.02343 5.12146 3.71934 5.8473 3.55946 7.05126C3.39688 8.27554 3.39539 9.8843 3.39539 12.124V13.2976C3.66181 13.0953 3.95848 12.9304 4.27834 12.8106C4.73351 12.6402 5.2697 12.5975 6.05341 12.5352L6.16324 12.5264L6.25647 12.5189C6.6754 12.4849 7.03586 12.4556 7.35229 12.5292C8.07617 12.6975 8.65772 13.2416 8.88044 13.959C8.9778 14.2725 8.97735 14.6386 8.97684 15.0641L8.97676 19.2365C8.97677 19.527 8.97677 19.7753 8.96492 19.9793C8.95259 20.1916 8.92556 20.4059 8.84911 20.6172C8.59759 21.3126 8.0058 21.8245 7.28817 21.9676C7.07006 22.0111 6.8568 22.0047 6.64773 21.9839C6.44676 21.9639 6.20454 21.9252 5.92107 21.8799L5.79111 21.8591C4.99404 21.732 4.44742 21.6449 3.98996 21.4245C3.09539 20.9937 2.42393 20.1982 2.14313 19.2364C1.99954 18.7446 1.99973 18.1844 2.00003 17.3675L2.00005 12.07C2.00004 9.89602 2.00003 8.19233 2.17656 6.86303C2.35725 5.50242 2.73431 4.42878 3.56668 3.58607C4.39906 2.74337 5.45954 2.36163 6.80347 2.1787C8.11648 1.99998 9.79929 1.99999 11.9466 2H12.0534Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 5.75C12.4142 5.75 12.75 6.08579 12.75 6.5V11.5C12.75 11.9142 12.4142 12.25 12 12.25C11.5858 12.25 11.25 11.9142 11.25 11.5V6.5C11.25 6.08579 11.5858 5.75 12 5.75Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 7.25C15.4142 7.25 15.75 7.58579 15.75 8L15.75 10C15.75 10.4142 15.4142 10.75 15 10.75C14.5858 10.75 14.25 10.4142 14.25 10L14.25 8C14.25 7.58579 14.5858 7.25 15 7.25Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 7.25C9.41421 7.25 9.75 7.58579 9.75 8V10C9.75 10.4142 9.41421 10.75 9 10.75C8.58579 10.75 8.25 10.4142 8.25 10V8C8.25 7.58579 8.58579 7.25 9 7.25Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHeadphonesSquareSound as IconComponent).keywords = [
  "headphones",
  "square",
  "sound",
  "earpiece",
  "earphone",
  "phone",
  "earphones",
  "headset",
  "phones",
  "canceling",
  "handsets",
  "headsets",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
  "healthy",
  "strong",
  "intelligent",
  "good",
  "dependable",
  "sensible",
  "levelheaded",
  "substantial",
  "well-grounded",
];

export default IconHeadphonesSquareSound as IconComponent;