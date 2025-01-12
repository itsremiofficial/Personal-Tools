import { FC } from "react";

const IconRadio: FC<IconProps> = ({
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
          <path
            d="M5 11C5 9.89543 5.89543 9 7 9H17C18.1046 9 19 9.89543 19 11C19 12.1046 18.1046 13 17 13H7C5.89543 13 5 12.1046 5 11Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9 17C9 17.8284 8.32843 18.5 7.5 18.5C6.67157 18.5 6 17.8284 6 17C6 16.1716 6.67157 15.5 7.5 15.5C8.32843 15.5 9 16.1716 9 17Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15 11.5V13"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M13 17H18"
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
            d="M7.5 16.25C7.08579 16.25 6.75 16.5858 6.75 17C6.75 17.4142 7.08579 17.75 7.5 17.75C7.91421 17.75 8.25 17.4142 8.25 17C8.25 16.5858 7.91421 16.25 7.5 16.25ZM5.25 17C5.25 15.7574 6.25736 14.75 7.5 14.75C8.74264 14.75 9.75 15.7574 9.75 17C9.75 18.2426 8.74264 19.25 7.5 19.25C6.25736 19.25 5.25 18.2426 5.25 17Z"
            fill="currentColor"
          />
          <path
            d="M7 9C5.89543 9 5 9.89543 5 11C5 12.1046 5.89543 13 7 13H14.25V11.5C14.25 11.0858 14.5858 10.75 15 10.75C15.4142 10.75 15.75 11.0858 15.75 11.5V13H17C18.1046 13 19 12.1046 19 11C19 9.89543 18.1046 9 17 9H7Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.25 17C12.25 16.5858 12.5858 16.25 13 16.25H18C18.4142 16.25 18.75 16.5858 18.75 17C18.75 17.4142 18.4142 17.75 18 17.75H13C12.5858 17.75 12.25 17.4142 12.25 17Z"
            fill="currentColor"
          />
          <path
            d="M15.3642 2.65563C15.7263 2.45447 15.8568 1.99787 15.6556 1.63578C15.4545 1.27369 14.9978 1.14324 14.6358 1.3444L6.088 6.09315C6.96406 6.01296 8.02954 6.00181 9.34389 6.00026L15.3642 2.65563Z"
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
            d="M15.75 12.25V11.5C15.75 11.0858 15.4142 10.75 15 10.75C14.5858 10.75 14.25 11.0858 14.25 11.5V12.25H7C6.30964 12.25 5.75 11.6904 5.75 11C5.75 10.3096 6.30964 9.75 7 9.75H17C17.6904 9.75 18.25 10.3096 18.25 11C18.25 11.6904 17.6904 12.25 17 12.25H15.75Z"
            fill="currentColor"
          />
          <path
            d="M6.75 17C6.75 16.5858 7.08579 16.25 7.5 16.25C7.91421 16.25 8.25 16.5858 8.25 17C8.25 17.4142 7.91421 17.75 7.5 17.75C7.08579 17.75 6.75 17.4142 6.75 17Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.3195 3.67879C15.6943 3.50242 15.8552 3.05562 15.6788 2.68083C15.5024 2.30604 15.0556 2.14519 14.6808 2.32156L6.76692 6.04575C5.03147 6.13486 3.94566 6.39749 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14C22 10.2288 22 8.34314 20.8284 7.17157C19.6569 6 17.7712 6 14 6H10.387L15.3195 3.67879ZM7 8.25C5.48122 8.25 4.25 9.48122 4.25 11C4.25 12.5188 5.48122 13.75 7 13.75H17C18.5188 13.75 19.75 12.5188 19.75 11C19.75 9.48122 18.5188 8.25 17 8.25H7ZM5.25 17C5.25 15.7574 6.25736 14.75 7.5 14.75C8.74264 14.75 9.75 15.7574 9.75 17C9.75 18.2426 8.74264 19.25 7.5 19.25C6.25736 19.25 5.25 18.2426 5.25 17ZM12.25 17C12.25 16.5858 12.5858 16.25 13 16.25H18C18.4142 16.25 18.75 16.5858 18.75 17C18.75 17.4142 18.4142 17.75 18 17.75H13C12.5858 17.75 12.25 17.4142 12.25 17Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRadio as IconComponent).keywords = [
  "radio",
  "radiocommunication",
  "tuner",
  "wireless",
  "radio receiver",
  "radio set",
  "receiving set",
  "radiotelegraph",
  "radiotelephone",
  "walkie-talkie",
];

export default IconRadio as IconComponent;
