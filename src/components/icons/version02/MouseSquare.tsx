import { FC } from "react";

const IconMouseSquare: FC<IconProps> = ({
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
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.6699 12V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22H12.6699"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.6296 17.84L19.9996 18.39C19.5496 18.54 19.1896 18.89 19.0396 19.35L18.4896 20.98C18.0196 22.39 16.0396 22.36 15.5996 20.95L13.7496 15C13.3896 13.82 14.4796 12.72 15.6496 13.09L21.6096 14.94C23.0096 15.38 23.0296 17.37 21.6296 17.84Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.1497 2H8.19969C4.73969 2 2.67969 4.05999 2.67969 7.51999V15.47C2.67969 18.93 4.74969 20.99 8.19969 20.99H16.1497C19.6097 20.99 21.6697 18.93 21.6697 15.47V7.51999C21.6697 4.05999 19.5997 2 16.1497 2Z"
            fill="currentColor"
          />
          <path
            d="M22.6296 18.84L20.9996 19.39C20.5496 19.54 20.1896 19.89 20.0396 20.35L19.4896 21.98C19.0196 23.39 17.0396 23.36 16.5996 21.95L14.7496 16C14.3896 14.82 15.4796 13.72 16.6496 14.09L22.6096 15.94C24.0096 16.38 24.0296 18.37 22.6296 18.84Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6699 7.52V13.4C21.6699 13.74 21.3399 13.98 21.0199 13.88L17.0899 12.66C16.0099 12.33 14.8499 12.61 14.0599 13.4C13.2599 14.2 12.9699 15.37 13.3099 16.45L14.5199 20.35C14.6199 20.67 14.3799 21 14.0399 21H8.18992C4.73992 21 2.66992 18.94 2.66992 15.48V7.52C2.66992 4.06 4.73992 2 8.18992 2H16.1499C19.5999 2 21.6699 4.06 21.6699 7.52Z"
            fill="currentColor"
          />
          <path
            d="M22.6296 18.84L20.9996 19.39C20.5496 19.54 20.1896 19.89 20.0396 20.35L19.4896 21.98C19.0196 23.39 17.0396 23.36 16.5996 21.95L14.7496 16C14.3896 14.82 15.4796 13.72 16.6496 14.09L22.6096 15.94C24.0096 16.38 24.0296 18.37 22.6296 18.84Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMouseSquare as IconComponent).keywords = [
  "mouse",
  "square",
  "creep",
  "pussyfoot",
  "sneak",
  "steal",
  "murine",
  "rodent",
  "rat",
  "weasel",
  "frog",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
];

export default IconMouseSquare as IconComponent;
