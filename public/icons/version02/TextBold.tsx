import { FC } from "react";

const IconTextBold: FC<IconProps> = ({
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
            d="M5.55176 4.5C5.55176 3.4 6.45176 2.5 7.55176 2.5H12.6718C15.2918 2.5 17.4218 4.63 17.4218 7.25C17.4218 9.87 15.2918 12 12.6718 12H5.55176V4.5Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.55176 12H15.0518C17.6718 12 19.8018 14.13 19.8018 16.75C19.8018 19.37 17.6718 21.5 15.0518 21.5H7.55176C6.45176 21.5 5.55176 20.6 5.55176 19.5V12V12Z"
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
            d="M22.6719 7.81V16.19C22.6719 19.83 20.5019 22 16.8619 22H8.48187C8.28188 22 8.08187 21.99 7.89187 21.98C6.66187 21.9 5.62188 21.55 4.80188 20.95C4.38188 20.66 4.01187 20.29 3.72187 19.87C3.03187 18.92 2.67188 17.68 2.67188 16.19V7.81C2.67188 4.37 4.61187 2.24 7.89187 2.03C8.08187 2.01 8.28188 2 8.48187 2H16.8619C18.3519 2 19.5919 2.36 20.5419 3.05C20.9619 3.34 21.3319 3.71 21.6219 4.13C22.3119 5.08 22.6719 6.32 22.6719 7.81Z"
            fill="currentColor"
          />
          <path
            d="M15.7019 11.49C16.3019 10.83 16.6719 9.96 16.6719 9C16.6719 6.93 14.9919 5.25 12.9219 5.25H9.68188C8.57188 5.25 7.67188 6.15 7.67188 7.26V16.74C7.67188 17.85 8.57188 18.75 9.68188 18.75H14.4219C16.4919 18.75 18.1719 17.07 18.1719 15C18.1719 13.38 17.1419 12.02 15.7019 11.49ZM9.17188 7.26C9.17188 6.98 9.40188 6.75 9.68188 6.75H12.9219C14.1619 6.75 15.1719 7.76 15.1719 9C15.1719 10.24 14.1619 11.25 12.9219 11.25H9.17188V7.26ZM14.4219 17.25H9.68188C9.40188 17.25 9.17188 17.02 9.17188 16.74V12.75H14.4219C15.6619 12.75 16.6719 13.76 16.6719 15C16.6719 16.24 15.6619 17.25 14.4219 17.25Z"
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
            d="M14.4219 12.75H12.9219H9.17188V16.74C9.17188 17.02 9.40188 17.25 9.68188 17.25H14.4219C15.6619 17.25 16.6719 16.24 16.6719 15C16.6719 13.76 15.6619 12.75 14.4219 12.75Z"
            fill="currentColor"
          />
          <path
            d="M15.1719 9C15.1719 7.76 14.1619 6.75 12.9219 6.75H9.68188C9.40188 6.75 9.17188 6.98 9.17188 7.26V11.25H12.9219C14.1619 11.25 15.1719 10.24 15.1719 9Z"
            fill="currentColor"
          />
          <path
            d="M21.6219 4.13C21.3319 3.71 20.9619 3.34 20.5419 3.05C19.5919 2.36 18.3519 2 16.8619 2H8.48187C8.28188 2 8.08187 2.01 7.89187 2.03C4.61187 2.24 2.67188 4.37 2.67188 7.81V16.19C2.67188 17.68 3.03187 18.92 3.72187 19.87C4.01187 20.29 4.38188 20.66 4.80188 20.95C5.62188 21.55 6.66187 21.9 7.89187 21.98C8.08187 21.99 8.28188 22 8.48187 22H16.8619C20.5019 22 22.6719 19.83 22.6719 16.19V7.81C22.6719 6.32 22.3119 5.08 21.6219 4.13ZM14.4219 18.75H9.68188C8.57188 18.75 7.67188 17.85 7.67188 16.74V12V7.26C7.67188 6.15 8.57188 5.25 9.68188 5.25H12.9219C14.9919 5.25 16.6719 6.93 16.6719 9C16.6719 9.96 16.3019 10.83 15.7019 11.49C17.1319 12.02 18.1719 13.38 18.1719 15C18.1719 17.07 16.4919 18.75 14.4219 18.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTextBold as IconComponent).keywords = [
  "text",
  "bold",
  "schoolbook",
  "textbook",
  "school text",
  "text edition",
  "textual matter",
  "writing",
  "letter",
  "paragraph",
  "manuscript",
  "vaulting",
  "heroic",
  "heroical",
  "steep",
  "overreaching",
  "enterprising",
  "bluff",
  "daredevil",
  "positive",
];

export default IconTextBold as IconComponent;
