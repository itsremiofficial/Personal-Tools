import { FC } from "react";

const IconLinkCircle: FC<IconProps> = ({
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
            d="M8.6116 14.51C7.9916 14.28 7.4416 13.83 7.0916 13.19C6.2916 11.73 6.7816 9.83001 8.2016 8.95001L10.5416 7.5C11.9516 6.62 13.7716 7.09999 14.5716 8.54999C15.3716 10.01 14.8816 11.91 13.4616 12.79L13.1516 13.01"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.7821 9.44995C17.4021 9.67995 17.9521 10.1299 18.3021 10.7699C19.1021 12.2299 18.6121 14.1299 17.1921 15.0099L14.8521 16.4599C13.4421 17.3399 11.6221 16.8599 10.8221 15.4099C10.0221 13.9499 10.5121 12.05 11.9321 11.17L12.2421 10.95"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6719 22C18.1947 22 22.6719 17.5228 22.6719 12C22.6719 6.47715 18.1947 2 12.6719 2C7.14903 2 2.67188 6.47715 2.67188 12C2.67188 17.5228 7.14903 22 12.6719 22Z"
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
            d="M12.6719 22C18.1947 22 22.6719 17.5228 22.6719 12C22.6719 6.47715 18.1947 2 12.6719 2C7.14903 2 2.67188 6.47715 2.67188 12C2.67188 17.5228 7.14903 22 12.6719 22Z"
            fill="currentColor"
          />
          <path
            d="M8.61161 15.2599C8.52161 15.2599 8.4416 15.2499 8.3516 15.2099C7.5416 14.9099 6.86161 14.3199 6.43161 13.5499C5.43161 11.7499 6.05162 9.39992 7.80162 8.30992L10.1416 6.85991C11.0016 6.32991 12.0116 6.16994 12.9716 6.41994C13.9316 6.66994 14.7416 7.29992 15.2316 8.17992C16.2316 9.97992 15.6116 12.3299 13.8616 13.4199L13.6016 13.6099C13.2616 13.8499 12.7916 13.7699 12.5516 13.4399C12.3116 13.0999 12.3916 12.6299 12.7216 12.3899L13.0316 12.1699C14.1516 11.4699 14.5316 10.0199 13.9216 8.90993C13.6316 8.38993 13.1616 8.01992 12.6016 7.86992C12.0416 7.71992 11.4516 7.80993 10.9416 8.12993L8.6016 9.57991C7.5216 10.2499 7.14161 11.6999 7.75161 12.8199C8.00161 13.2699 8.40162 13.6199 8.88162 13.7999C9.27162 13.9399 9.47161 14.3699 9.32161 14.7599C9.21161 15.0699 8.92161 15.2599 8.61161 15.2599Z"
            fill="currentColor"
          />
          <path
            d="M13.3318 17.65C13.0318 17.65 12.7218 17.61 12.4218 17.53C11.4618 17.28 10.6518 16.65 10.1718 15.77C9.17184 13.97 9.79184 11.62 11.5418 10.53L11.8018 10.34C12.1418 10.1 12.6118 10.18 12.8518 10.51C13.0918 10.85 13.0118 11.32 12.6818 11.56L12.3718 11.78C11.2518 12.48 10.8718 13.93 11.4818 15.04C11.7718 15.56 12.2418 15.93 12.8018 16.08C13.3618 16.23 13.9518 16.14 14.4618 15.82L16.8018 14.37C17.8818 13.7 18.2618 12.25 17.6518 11.13C17.4018 10.68 17.0019 10.33 16.5219 10.15C16.1319 10.01 15.9318 9.57999 16.0818 9.18999C16.2218 8.79999 16.6618 8.59999 17.0418 8.74999C17.8518 9.04999 18.5318 9.63999 18.9618 10.41C19.9618 12.21 19.3418 14.56 17.5918 15.65L15.2518 17.1C14.6618 17.46 14.0018 17.65 13.3318 17.65Z"
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
            d="M12.6719 2C7.15188 2 2.67188 6.48 2.67188 12C2.67188 17.52 7.15188 22 12.6719 22C18.1919 22 22.6719 17.52 22.6719 12C22.6719 6.48 18.1919 2 12.6719 2ZM9.32187 14.77C9.21187 15.07 8.92188 15.26 8.62187 15.26C8.53187 15.26 8.45188 15.25 8.36188 15.21C7.55188 14.91 6.87187 14.32 6.44187 13.55C5.44187 11.75 6.06187 9.4 7.81187 8.31L10.1519 6.86C11.0119 6.33 12.0219 6.17 12.9819 6.42C13.9419 6.67 14.7519 7.3 15.2419 8.18C16.2419 9.98 15.6219 12.33 13.8719 13.42L13.6119 13.61C13.2719 13.85 12.8019 13.77 12.5619 13.44C12.3219 13.1 12.4019 12.63 12.7319 12.39L13.0419 12.17C14.1619 11.47 14.5419 10.02 13.9319 8.91C13.6419 8.39 13.1719 8.02 12.6119 7.87C12.0519 7.72 11.4619 7.81 10.9519 8.13L8.59188 9.59C7.51188 10.26 7.13188 11.71 7.74188 12.83C7.99188 13.28 8.39187 13.63 8.87187 13.81C9.26187 13.95 9.46187 14.38 9.32187 14.77ZM17.5919 15.65L15.2519 17.1C14.6619 17.47 14.0019 17.65 13.3319 17.65C13.0319 17.65 12.7219 17.61 12.4219 17.53C11.4619 17.28 10.6519 16.65 10.1719 15.77C9.17188 13.97 9.79187 11.62 11.5419 10.53L11.8019 10.34C12.1419 10.1 12.6119 10.18 12.8519 10.51C13.0919 10.85 13.0119 11.32 12.6819 11.56L12.3719 11.78C11.2519 12.48 10.8719 13.93 11.4819 15.04C11.7719 15.56 12.2419 15.93 12.8019 16.08C13.3619 16.23 13.9519 16.14 14.4619 15.82L16.8019 14.37C17.8819 13.7 18.2619 12.25 17.6519 11.13C17.4019 10.68 17.0019 10.33 16.5219 10.15C16.1319 10.01 15.9319 9.58 16.0819 9.19C16.2219 8.8 16.6619 8.6 17.0419 8.75C17.8519 9.05 18.5319 9.64 18.9619 10.41C19.9519 12.21 19.3419 14.56 17.5919 15.65Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLinkCircle as IconComponent).keywords = [
  "link",
  "circle",
  "linkup",
  "connection",
  "nexus",
  "connexion",
  "connectedness",
  "connect",
  "tie-in",
  "unite",
  "associate",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
];

export default IconLinkCircle as IconComponent;
