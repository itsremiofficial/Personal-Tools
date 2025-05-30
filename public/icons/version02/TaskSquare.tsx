import { FC } from "react";

const IconTaskSquare: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M13.04 8.88H18.29"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.0498 8.88L7.7998 9.63L10.0498 7.38"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.04 15.88H18.29"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.0498 15.88L7.7998 16.63L10.0498 14.38"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.66992 22H15.6699C20.6699 22 22.6699 20 22.6699 15V9C22.6699 4 20.6699 2 15.6699 2H9.66992C4.66992 2 2.66992 4 2.66992 9V15C2.66992 20 4.66992 22 9.66992 22Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.19C2.66992 19.83 4.83992 22 8.47992 22H16.8599C20.4999 22 22.6699 19.83 22.6699 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M18.98 8.87C18.98 9.28 18.65 9.62 18.23 9.62H12.98C12.57 9.62 12.23 9.28 12.23 8.87C12.23 8.46 12.57 8.12 12.98 8.12H18.23C18.65 8.12 18.98 8.46 18.98 8.87Z"
            fill="currentColor"
          />
          <path
            d="M10.64 7.90006L8.38998 10.1501C8.23998 10.3001 8.04998 10.3701 7.85998 10.3701C7.66998 10.3701 7.46998 10.3001 7.32998 10.1501L6.57998 9.40006C6.27998 9.11006 6.27998 8.63006 6.57998 8.34006C6.86998 8.05006 7.33998 8.05006 7.63998 8.34006L7.85998 8.56006L9.57998 6.84006C9.86998 6.55006 10.34 6.55006 10.64 6.84006C10.93 7.13006 10.93 7.61006 10.64 7.90006Z"
            fill="currentColor"
          />
          <path
            d="M18.98 15.87C18.98 16.28 18.65 16.62 18.23 16.62H12.98C12.57 16.62 12.23 16.28 12.23 15.87C12.23 15.46 12.57 15.12 12.98 15.12H18.23C18.65 15.12 18.98 15.46 18.98 15.87Z"
            fill="currentColor"
          />
          <path
            d="M10.64 14.9001L8.38998 17.1501C8.23998 17.3001 8.04998 17.3701 7.85998 17.3701C7.66998 17.3701 7.46998 17.3001 7.32998 17.1501L6.57998 16.4001C6.27998 16.1101 6.27998 15.6301 6.57998 15.3401C6.86998 15.0501 7.33998 15.0501 7.63998 15.3401L7.85998 15.5601L9.57998 13.8401C9.86998 13.5501 10.34 13.5501 10.64 13.8401C10.93 14.1301 10.93 14.6101 10.64 14.9001Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.19C2.66992 19.83 4.83992 22 8.47992 22H16.8599C20.4999 22 22.6699 19.83 22.6699 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM10.6399 14.9L8.38992 17.15C8.23992 17.3 8.04992 17.37 7.85992 17.37C7.66992 17.37 7.46992 17.3 7.32992 17.15L6.57992 16.4C6.27992 16.11 6.27992 15.63 6.57992 15.34C6.86992 15.05 7.33992 15.05 7.63992 15.34L7.85992 15.56L9.57992 13.84C9.86992 13.55 10.3399 13.55 10.6399 13.84C10.9299 14.13 10.9299 14.61 10.6399 14.9ZM10.6399 7.9L8.38992 10.15C8.23992 10.3 8.04992 10.37 7.85992 10.37C7.66992 10.37 7.46992 10.3 7.32992 10.15L6.57992 9.4C6.27992 9.11 6.27992 8.63 6.57992 8.34C6.86992 8.05 7.33992 8.05 7.63992 8.34L7.85992 8.56L9.57992 6.84C9.86992 6.55 10.3399 6.55 10.6399 6.84C10.9299 7.13 10.9299 7.61 10.6399 7.9ZM18.2299 16.62H12.9799C12.5699 16.62 12.2299 16.28 12.2299 15.87C12.2299 15.46 12.5699 15.12 12.9799 15.12H18.2299C18.6499 15.12 18.9799 15.46 18.9799 15.87C18.9799 16.28 18.6499 16.62 18.2299 16.62ZM18.2299 9.62H12.9799C12.5699 9.62 12.2299 9.28 12.2299 8.87C12.2299 8.46 12.5699 8.12 12.9799 8.12H18.2299C18.6499 8.12 18.9799 8.46 18.9799 8.87C18.9799 9.28 18.6499 9.62 18.2299 9.62Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTaskSquare as IconComponent).keywords = [
  "task",
  "square",
  "job",
  "chore",
  "project",
  "labor",
  "tax",
  "undertaking",
  "work",
  "assignment",
  "mission",
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

export default IconTaskSquare as IconComponent;
