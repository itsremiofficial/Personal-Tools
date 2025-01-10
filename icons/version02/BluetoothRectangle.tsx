import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBluetoothRectangle: FC<IconProps> = ({
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
            d="M15.6699 22H9.66992C6.66992 22 4.66992 20 4.66992 17V7C4.66992 4 6.66992 2 9.66992 2H15.6699C18.6699 2 20.6699 4 20.6699 7V17C20.6699 20 18.6699 22 15.6699 22Z"
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
            d="M15.6699 22H9.66992C6.66992 22 4.66992 20 4.66992 17V7C4.66992 4 6.66992 2 9.66992 2H15.6699C18.6699 2 20.6699 4 20.6699 7V17C20.6699 20 18.6699 22 15.6699 22Z"
            fill="currentColor"
          />
          <path
            d="M13.27 18.1101C13.05 18.1101 12.88 18.0501 12.78 18.0101C12.56 17.9101 12.06 17.5801 12.06 16.6701V14.0001L9.75996 16.1101C9.45996 16.3901 8.97996 16.3701 8.69996 16.0601C8.41996 15.7501 8.43995 15.2801 8.74995 15.0001L12.03 11.9901L8.74995 8.98012C8.43995 8.70012 8.41996 8.23012 8.69996 7.92012C8.97996 7.62012 9.45996 7.5901 9.75996 7.8701L12.06 9.98012V7.32011C12.06 6.42011 12.56 6.09012 12.78 5.98012C12.99 5.88012 13.57 5.7001 14.27 6.2801L16.33 8.00011C16.63 8.25011 16.81 8.62011 16.82 9.00011C16.83 9.38011 16.67 9.76009 16.38 10.0201L14.25 11.9701L16.38 13.9201C16.67 14.1901 16.83 14.5601 16.82 14.9401C16.81 15.3201 16.63 15.6901 16.33 15.9401L14.27 17.6601C13.89 18.0201 13.54 18.1101 13.27 18.1101ZM13.57 13.4101V16.3301L15.24 14.9401L13.57 13.4101ZM13.57 7.67012V10.5901L15.24 9.0601L13.57 7.67012Z"
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
            d="M13.5698 16.3299L15.2398 14.9399L13.5698 13.4099V16.3299Z"
            fill="currentColor"
          />
          <path
            d="M13.5698 10.5899L15.2398 9.05992L13.5698 7.66992V10.5899Z"
            fill="currentColor"
          />
          <path
            d="M15.6699 2H9.66992C6.66992 2 4.66992 4 4.66992 7V17C4.66992 20 6.66992 22 9.66992 22H15.6699C18.6699 22 20.6699 20 20.6699 17V7C20.6699 4 18.6699 2 15.6699 2ZM16.3899 13.95C16.6799 14.22 16.8399 14.59 16.8299 14.97C16.8199 15.35 16.6399 15.72 16.3399 15.97L14.2699 17.7C13.8899 18.02 13.5399 18.11 13.2699 18.11C13.0499 18.11 12.8799 18.05 12.7799 18.01C12.5599 17.91 12.0599 17.58 12.0599 16.67V14L9.75992 16.11C9.45992 16.39 8.97992 16.37 8.69992 16.06C8.41992 15.75 8.43992 15.28 8.74992 15L12.0299 12L8.74992 8.99C8.44992 8.71 8.42992 8.24 8.70992 7.93C8.98992 7.63 9.46992 7.6 9.76992 7.88L12.0699 10V7.33C12.0699 6.43 12.5699 6.1 12.7899 5.99C12.9999 5.89 13.5799 5.71 14.2799 6.29L16.3399 8.01C16.6399 8.26 16.8199 8.63 16.8299 9.01C16.8399 9.39 16.6799 9.77 16.3899 10.03L14.2499 12L16.3899 13.95Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBluetoothRectangle as IconComponentType).keywords = [
  "bluetooth",
  "rectangle",
  "teeth",
  "tooth",
  "handsfree",
  "wireless",
  "ipod",
  "wifi",
  "stereo",
  "speakerphone",
  "headset",
  "rectangular",
  "rect",
  "badge",
  "box",
  "square",
  "trapezoid",
  "triangle",
  "ellipse",
  "hexagon",
];

export default IconBluetoothRectangle as IconComponentType;
