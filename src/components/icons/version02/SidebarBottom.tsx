import { FC } from "react";

const IconSidebarBottom: FC<IconProps> = ({
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
            d="M22.6699 15.5H2.66992"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.2299 8.5L12.6699 11.06L10.1099 8.5"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.19C2.66992 16.39 2.67992 16.59 2.68992 16.78C2.76992 18.01 3.11992 19.05 3.71992 19.87C4.00992 20.29 4.37992 20.66 4.79992 20.95C5.74992 21.64 6.98992 22 8.47992 22H16.8599C20.2999 22 22.4299 20.06 22.6399 16.78C22.6599 16.59 22.6699 16.39 22.6699 16.19V7.81C22.6699 6.32 22.3099 5.08 21.6199 4.13C21.3299 3.71 20.9599 3.34 20.5399 3.05C19.5899 2.36 18.3499 2 16.8599 2Z"
            fill="currentColor"
          />
          <path
            d="M22.6699 15.28H2.66992V16.19C2.66992 16.39 2.67992 16.59 2.68992 16.78H22.6399C22.6599 16.59 22.6699 16.39 22.6699 16.19V15.28Z"
            fill="currentColor"
          />
          <path
            d="M9.35986 9.0299C9.35986 9.2199 9.42986 9.4099 9.57986 9.5599L12.1399 12.1199C12.4299 12.4099 12.9099 12.4099 13.1999 12.1199L15.7599 9.5599C16.0499 9.2699 16.0499 8.7899 15.7599 8.4999C15.4699 8.2099 14.9899 8.2099 14.6999 8.4999L12.6699 10.5199L10.6399 8.4999C10.3499 8.1999 9.86986 8.1999 9.57986 8.4999C9.42986 8.6399 9.35986 8.8299 9.35986 9.0299Z"
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
            d="M3.71994 19.87C4.00994 20.29 4.37994 20.66 4.79994 20.95C5.74994 21.64 6.98994 22 8.47994 22H16.8599C20.2999 22 22.4299 20.06 22.6399 16.78H2.68994C2.76994 18.01 3.11994 19.05 3.71994 19.87Z"
            fill="currentColor"
          />
          <path
            d="M21.6199 4.13C21.3299 3.71 20.9599 3.34 20.5399 3.05C19.5899 2.36 18.3499 2 16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V15.28H22.6699V7.81C22.6699 6.32 22.3099 5.08 21.6199 4.13ZM15.7599 9.56L13.1999 12.12C12.9099 12.41 12.4299 12.41 12.1399 12.12L9.57992 9.56C9.42992 9.41 9.35992 9.22 9.35992 9.03C9.35992 8.84 9.42992 8.64 9.57992 8.5C9.86992 8.2 10.3499 8.2 10.6399 8.5L12.6699 10.52L14.6999 8.49C14.9899 8.2 15.4699 8.2 15.7599 8.49C16.0499 8.78 16.0499 9.26 15.7599 9.56Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSidebarBottom as IconComponent).keywords = [
  "sidebar",
  "bottom",
  "billet",
  "margin",
  "textbox",
  "supervised",
  "inset",
  "banknote",
  "vertical",
  "ticket",
  "fare",
  "ass",
  "bed",
  "backside",
  "underside",
  "undersurface",
  "penetrate",
  "derriere",
  "fathom",
  "seat",
];

export default IconSidebarBottom as IconComponent;
