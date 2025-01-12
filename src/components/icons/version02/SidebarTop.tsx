import { FC } from "react";

const IconSidebarTop: FC<IconProps> = ({
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
            d="M22.6399 15V9C22.6399 4 20.6399 2 15.6399 2H9.63989C4.63989 2 2.63989 4 2.63989 9V15C2.63989 20 4.63989 22 9.63989 22H15.6399C20.6399 22 22.6399 20 22.6399 15Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6699 8.5H2.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.2299 15.4999L12.6699 12.9399L10.1099 15.4999"
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
            d="M8.47992 22H16.8599C20.4999 22 22.6699 19.83 22.6699 16.19V7.81C22.6699 7.61 22.6599 7.41 22.6499 7.22C22.5699 5.99 22.2199 4.95 21.6199 4.13C21.3299 3.71 20.9599 3.34 20.5399 3.05C19.5899 2.36 18.3499 2 16.8599 2H8.47992C5.03992 2 2.90992 3.94 2.69992 7.22C2.67992 7.41 2.66992 7.61 2.66992 7.81V16.19C2.66992 17.68 3.02992 18.92 3.71992 19.87C4.00992 20.29 4.37992 20.66 4.79992 20.95C5.74992 21.64 6.98992 22 8.47992 22Z"
            fill="currentColor"
          />
          <path
            d="M2.66992 8.71997H22.6699V7.80997C22.6699 7.60997 22.6599 7.40997 22.6499 7.21997H2.69992C2.67992 7.40997 2.66992 7.60997 2.66992 7.80997V8.71997Z"
            fill="currentColor"
          />
          <path
            d="M15.9798 14.9701C15.9798 14.7801 15.9098 14.5901 15.7598 14.4401L13.1998 11.8801C12.9098 11.5901 12.4298 11.5901 12.1398 11.8801L9.5798 14.4401C9.2898 14.7301 9.2898 15.2101 9.5798 15.5001C9.8698 15.7901 10.3498 15.7901 10.6398 15.5001L12.6698 13.4801L14.6998 15.5101C14.9898 15.8001 15.4698 15.8001 15.7598 15.5101C15.9098 15.3601 15.9798 15.1701 15.9798 14.9701Z"
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
            d="M21.62 4.13C21.33 3.71 20.96 3.34 20.54 3.05C19.59 2.36 18.35 2 16.86 2H8.47995C5.03995 2 2.90995 3.94 2.69995 7.22H22.65C22.57 5.99 22.22 4.95 21.62 4.13Z"
            fill="currentColor"
          />
          <path
            d="M2.66992 16.19C2.66992 17.68 3.02992 18.92 3.71992 19.87C4.00992 20.29 4.37992 20.66 4.79992 20.95C5.74992 21.64 6.98992 22 8.47992 22H16.8599C20.4999 22 22.6699 19.83 22.6699 16.19V8.71997H2.66992V16.19ZM9.57992 14.44L12.1399 11.88C12.4299 11.59 12.9099 11.59 13.1999 11.88L15.7599 14.44C15.9099 14.59 15.9799 14.78 15.9799 14.97C15.9799 15.16 15.9099 15.35 15.7599 15.5C15.4699 15.79 14.9899 15.79 14.6999 15.5L12.6699 13.48L10.6399 15.5C10.3499 15.79 9.86992 15.79 9.57992 15.5C9.28992 15.21 9.28992 14.74 9.57992 14.44Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSidebarTop as IconComponent).keywords = [
  "sidebar",
  "top",
  "billet",
  "margin",
  "textbox",
  "supervised",
  "inset",
  "banknote",
  "vertical",
  "ticket",
  "fare",
  "upper side",
  "upside",
  "elevation",
  "uppermost",
  "height",
  "pinnacle",
  "peak",
  "upper",
  "topmost",
];

export default IconSidebarTop as IconComponent;
