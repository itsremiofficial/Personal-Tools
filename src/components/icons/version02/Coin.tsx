import { FC } from "react";

const IconCoin: FC<IconProps> = ({
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M8.66992 11.4002C8.66992 12.1702 9.26992 12.8002 9.99992 12.8002H11.4999C12.1399 12.8002 12.6599 12.2502 12.6599 11.5802C12.6599 10.8502 12.3399 10.5902 11.8699 10.4202L9.46992 9.5802C8.98992 9.4102 8.66992 9.1502 8.66992 8.4202C8.66992 7.7502 9.18992 7.2002 9.82992 7.2002H11.3299C12.0699 7.2102 12.6699 7.8302 12.6699 8.6002"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6699 12.8496V13.5896"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6699 6.41016V7.19016"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M10.6599 17.98C15.0727 17.98 18.6499 14.4028 18.6499 9.99C18.6499 5.57724 15.0727 2 10.6599 2C6.24717 2 2.66992 5.57724 2.66992 9.99C2.66992 14.4028 6.24717 17.98 10.6599 17.98Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.6504 19.88C14.5504 21.15 16.0204 21.98 17.7004 21.98C20.4304 21.98 22.6504 19.76 22.6504 17.03C22.6504 15.37 21.8304 13.9 20.5804 13"
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
            d="M10.6599 17.98C15.0727 17.98 18.6499 14.4028 18.6499 9.99C18.6499 5.57724 15.0727 2 10.6599 2C6.24717 2 2.66992 5.57724 2.66992 9.99C2.66992 14.4028 6.24717 17.98 10.6599 17.98Z"
            fill="currentColor"
          />
          <path
            d="M22.64 15.99C22.64 19.29 19.96 21.97 16.66 21.97C14.62 21.97 12.83 20.95 11.75 19.4C16.11 18.91 19.58 15.44 20.07 11.08C21.62 12.16 22.64 13.95 22.64 15.99Z"
            fill="currentColor"
          />
          <path
            d="M12.1199 9.71003L9.71992 8.87003C9.47992 8.79003 9.42992 8.77003 9.42992 8.42003C9.42992 8.16003 9.60992 7.95003 9.83992 7.95003H11.3399C11.6599 7.95003 11.9199 8.24003 11.9199 8.60003C11.9199 9.01003 12.2599 9.35003 12.6699 9.35003C13.0799 9.35003 13.4199 9.01003 13.4199 8.60003C13.4199 7.45003 12.5299 6.51003 11.4199 6.46003V6.41003C11.4199 6.00003 11.0799 5.66003 10.6699 5.66003C10.2599 5.66003 9.91992 5.99003 9.91992 6.41003V6.46003H9.82992C8.77992 6.46003 7.91992 7.34003 7.91992 8.43003C7.91992 9.38003 8.33992 9.99003 9.20992 10.29L11.6199 11.13C11.8599 11.21 11.9099 11.23 11.9099 11.58C11.9099 11.84 11.7299 12.05 11.4999 12.05H9.99992C9.67992 12.05 9.41992 11.76 9.41992 11.4C9.41992 10.99 9.07992 10.65 8.66992 10.65C8.25992 10.65 7.91992 10.99 7.91992 11.4C7.91992 12.55 8.80992 13.49 9.91992 13.54V13.6C9.91992 14.01 10.2599 14.35 10.6699 14.35C11.0799 14.35 11.4199 14.01 11.4199 13.6V13.55H11.5099C12.5599 13.55 13.4199 12.67 13.4199 11.58C13.4199 10.63 12.9899 10.02 12.1199 9.71003Z"
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
            d="M22.5917 16.75C22.2617 19.41 20.0817 21.59 17.4217 21.92C15.8117 22.12 14.3117 21.68 13.1417 20.82C12.4717 20.33 12.6317 19.29 13.4317 19.05C16.4417 18.14 18.8117 15.76 19.7317 12.75C19.9717 11.96 21.0117 11.8 21.5017 12.46C22.3517 13.64 22.7917 15.14 22.5917 16.75Z"
            fill="currentColor"
          />
          <path
            d="M10.6619 2C6.25187 2 2.67188 5.58 2.67188 9.99C2.67188 14.4 6.25187 17.98 10.6619 17.98C15.0719 17.98 18.6519 14.4 18.6519 9.99C18.6419 5.58 15.0719 2 10.6619 2ZM9.72188 8.87L12.1319 9.71C13.0019 10.02 13.4219 10.63 13.4219 11.57C13.4219 12.65 12.5619 13.54 11.5119 13.54H11.4219V13.59C11.4219 14 11.0819 14.34 10.6719 14.34C10.2619 14.34 9.92188 14 9.92188 13.59V13.53C8.81187 13.48 7.92188 12.55 7.92188 11.39C7.92188 10.98 8.26188 10.64 8.67188 10.64C9.08187 10.64 9.42188 10.98 9.42188 11.39C9.42188 11.75 9.68187 12.04 10.0019 12.04H11.5019C11.7319 12.04 11.9119 11.83 11.9119 11.57C11.9119 11.22 11.8519 11.2 11.6219 11.12L9.21187 10.28C8.35187 9.98 7.92188 9.37 7.92188 8.42C7.92188 7.34 8.78187 6.45 9.83187 6.45H9.92188V6.41C9.92188 6 10.2619 5.66 10.6719 5.66C11.0819 5.66 11.4219 6 11.4219 6.41V6.47C12.5319 6.52 13.4219 7.45 13.4219 8.61C13.4219 9.02 13.0819 9.36 12.6719 9.36C12.2619 9.36 11.9219 9.02 11.9219 8.61C11.9219 8.25 11.6619 7.96 11.3419 7.96H9.84188C9.61188 7.96 9.43188 8.17 9.43188 8.43C9.42188 8.77 9.48188 8.79 9.72188 8.87Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCoin as IconComponent).keywords = [
  "coin",
  "mint",
  "strike",
  "coinage",
  "euro",
  "bullion",
  "voucher",
  "currency",
  "money",
  "suite",
];

export default IconCoin as IconComponent;
