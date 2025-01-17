import { FC } from "react";

const IconBluetoothCircle: FC<IconProps> = ({
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
            d="M9.25977 15.5599L15.8798 9.4899C16.1598 9.2399 16.1498 8.83992 15.8598 8.59992L13.7998 6.87992C13.2598 6.42992 12.8298 6.63991 12.8298 7.33991V16.6699C12.8298 17.3699 13.2698 17.5699 13.7998 17.1299L15.8598 15.4099C16.1498 15.1699 16.1598 14.7699 15.8798 14.5199L9.25977 8.44992"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
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
            d="M12.6699 22C18.1928 22 22.6699 17.5228 22.6699 12C22.6699 6.47715 18.1928 2 12.6699 2C7.14707 2 2.66992 6.47715 2.66992 12C2.66992 17.5228 7.14707 22 12.6699 22Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7885 6.00216C13.3692 5.72427 13.9366 6.01769 14.2799 6.30377L16.338 8.02214C16.3385 8.02256 16.339 8.02298 16.3395 8.02341C16.9749 8.5507 17.0062 9.48518 16.3836 10.0455L14.2466 12.0049L16.3836 13.9644C17.0062 14.5247 16.9749 15.4591 16.3395 15.9864C16.339 15.9869 16.3385 15.9873 16.338 15.9877L14.2805 17.7056L14.2788 17.707C13.9356 17.992 13.3735 18.276 12.7981 18.0067C12.2212 17.7367 12.0798 17.121 12.0798 16.6699V13.9918L9.76664 16.1127C9.46134 16.3927 8.98691 16.3721 8.70697 16.0668C8.42704 15.7615 8.4476 15.2871 8.7529 15.0071L12.0271 12.0049L8.7529 9.00274C8.4476 8.7228 8.42704 8.24837 8.70697 7.94307C8.98691 7.63777 9.46134 7.61721 9.76664 7.89714L12.0798 10.0181V7.33993C12.0798 6.89698 12.2138 6.27721 12.7885 6.00216ZM13.5798 13.4286L15.2397 14.9506L13.5798 16.3366V13.4286ZM13.5798 10.5813V7.6733L15.2397 9.05926L13.5798 10.5813Z"
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
            d="M13.5698 10.5899L15.2398 9.05992L13.5698 7.66992V10.5899Z"
            fill="currentColor"
          />
          <path
            d="M13.5698 16.3299L15.2398 14.9399L13.5698 13.4099V16.3299Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 2C7.14992 2 2.66992 6.48 2.66992 12C2.66992 17.52 7.14992 22 12.6699 22C18.1899 22 22.6699 17.52 22.6699 12C22.6699 6.48 18.1899 2 12.6699 2ZM16.3899 13.95C16.6799 14.22 16.8399 14.59 16.8299 14.97C16.8199 15.35 16.6399 15.72 16.3399 15.97L14.2699 17.7C13.8899 18.02 13.5399 18.11 13.2699 18.11C13.0499 18.11 12.8799 18.05 12.7799 18.01C12.5599 17.91 12.0599 17.58 12.0599 16.67V14L9.75992 16.11C9.45992 16.39 8.97992 16.37 8.69992 16.06C8.41992 15.75 8.43992 15.28 8.74992 15L12.0299 12L8.74992 8.99C8.44992 8.71 8.42992 8.24 8.70992 7.93C8.98992 7.63 9.46992 7.6 9.76992 7.88L12.0699 10V7.33C12.0699 6.43 12.5699 6.1 12.7899 5.99C12.9999 5.89 13.5799 5.72 14.2799 6.29L16.3399 8.01C16.6399 8.26 16.8199 8.63 16.8299 9.01C16.8399 9.39 16.6799 9.77 16.3899 10.03L14.2499 12L16.3899 13.95Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBluetoothCircle as IconComponent).keywords = [
  "bluetooth",
  "circle",
  "teeth",
  "tooth",
  "handsfree",
  "wireless",
  "ipod",
  "wifi",
  "stereo",
  "speakerphone",
  "headset",
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

export default IconBluetoothCircle as IconComponent;
