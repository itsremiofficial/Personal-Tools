import { FC } from "react";

const IconRefresh2: FC<IconProps> = ({
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
            d="M2.66992 12C2.66992 6.48 7.10992 2 12.6699 2C19.3399 2 22.6699 7.56 22.6699 7.56M22.6699 7.56V2.56M22.6699 7.56H18.2299"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.5599 12C22.5599 17.52 18.0799 22 12.5599 22C7.03992 22 3.66992 16.44 3.66992 16.44M3.66992 16.44H8.18992M3.66992 16.44V21.44"
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
            d="M22.6699 7.81V16.18C22.6699 19.82 20.4999 21.99 16.8599 21.99H8.47992C4.83992 22 2.66992 19.83 2.66992 16.19V7.81C2.66992 4.17 4.83992 2 8.47992 2H16.8499C20.4999 2 22.6699 4.17 22.6699 7.81Z"
            fill="currentColor"
          />
          <path
            d="M12.6699 18.25C10.8799 18.25 9.47992 17.36 8.52992 16.48V17.19C8.52992 17.6 8.18992 17.94 7.77992 17.94C7.36992 17.94 7.02992 17.6 7.02992 17.19V14.44C7.02992 14.03 7.36992 13.69 7.77992 13.69H10.2599C10.6699 13.69 11.0099 14.03 11.0099 14.44C11.0099 14.85 10.6699 15.19 10.2599 15.19H9.35992C10.0999 15.93 11.2499 16.75 12.6699 16.75C15.2899 16.75 17.4199 14.62 17.4199 12C17.4199 11.59 17.7599 11.25 18.1699 11.25C18.5799 11.25 18.9199 11.59 18.9199 12C18.9199 15.45 16.1199 18.25 12.6699 18.25ZM7.16992 12.75C6.75992 12.75 6.41992 12.41 6.41992 12C6.41992 8.55 9.21992 5.75 12.6699 5.75C14.8199 5.75 16.3999 6.68 17.4199 7.57V6.81C17.4199 6.4 17.7599 6.06 18.1699 6.06C18.5799 6.06 18.9199 6.4 18.9199 6.81V9.55C18.9199 9.58 18.9199 9.61 18.9199 9.63C18.9099 9.74 18.8799 9.84 18.8299 9.93C18.7799 10.02 18.7099 10.1 18.6199 10.17C18.5499 10.22 18.4699 10.26 18.3799 10.29C18.3099 10.31 18.2399 10.32 18.1699 10.32H15.7399C15.3299 10.32 14.9899 9.98 14.9899 9.57C14.9899 9.16 15.3299 8.82 15.7399 8.82H16.5699C15.7699 8.08 14.4799 7.26 12.6899 7.26C10.0699 7.26 7.93992 9.39 7.93992 12.01C7.91992 12.41 7.57992 12.75 7.16992 12.75Z"
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
            d="M16.8599 2H8.47992C4.83992 2 2.66992 4.17 2.66992 7.81V16.18C2.66992 19.83 4.83992 22 8.47992 22H16.8499C20.4899 22 22.6599 19.83 22.6599 16.19V7.81C22.6699 4.17 20.4999 2 16.8599 2ZM12.6699 18.25C10.8799 18.25 9.47992 17.36 8.52992 16.48V17.19C8.52992 17.6 8.18992 17.94 7.77992 17.94C7.36992 17.94 7.02992 17.6 7.02992 17.19V14.44C7.02992 14.03 7.36992 13.69 7.77992 13.69H10.2599C10.6699 13.69 11.0099 14.03 11.0099 14.44C11.0099 14.85 10.6699 15.19 10.2599 15.19H9.35992C10.0999 15.93 11.2499 16.75 12.6699 16.75C15.2899 16.75 17.4199 14.62 17.4199 12C17.4199 11.59 17.7599 11.25 18.1699 11.25C18.5799 11.25 18.9199 11.59 18.9199 12C18.9199 15.45 16.1199 18.25 12.6699 18.25ZM18.9199 9.54C18.9199 9.57 18.9199 9.6 18.9199 9.62C18.9099 9.73 18.8799 9.83 18.8299 9.92C18.7799 10.01 18.7099 10.09 18.6199 10.16C18.5499 10.21 18.4699 10.25 18.3799 10.28C18.3099 10.3 18.2399 10.31 18.1699 10.31H15.7399C15.3299 10.31 14.9899 9.97 14.9899 9.56C14.9899 9.15 15.3299 8.81 15.7399 8.81H16.5699C15.7699 8.07 14.4799 7.25 12.6899 7.25C10.0699 7.25 7.93992 9.38 7.93992 12C7.93992 12.41 7.59992 12.75 7.18992 12.75C6.77992 12.75 6.41992 12.41 6.41992 12C6.41992 8.55 9.21992 5.75 12.6699 5.75C14.8199 5.75 16.3999 6.68 17.4199 7.57V6.81C17.4199 6.4 17.7599 6.06 18.1699 6.06C18.5799 6.06 18.9199 6.4 18.9199 6.81V9.54Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRefresh2 as IconComponent).keywords = [
  "refresh",
  "2",
  "refreshen",
  "freshen",
  "review",
  "freshen up",
  "brush up",
  "refresher",
  "refreshment",
  "rejuvenate",
  "revive",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconRefresh2 as IconComponent;
