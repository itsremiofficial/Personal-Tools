import { FC } from "react";

const IconPenTool: FC<IconProps> = ({
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
              d="M11.4202 22.5001H13.9402C14.9002 22.5001 15.5202 21.8201 15.3402 20.9901L14.9303 19.1802H10.4303L10.0202 20.9901C9.84025 21.7701 10.5202 22.5001 11.4202 22.5001Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.9305 19.1702L16.6605 17.6301C17.6305 16.7701 17.6705 16.1701 16.9005 15.2001L13.8505 11.3302C13.2105 10.5202 12.1605 10.5202 11.5205 11.3302L8.47047 15.2001C7.70047 16.1701 7.70046 16.8001 8.71046 17.6301L10.4405 19.1702"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6797 11.1201V13.6501"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M11.82 5.19015L11.04 4.41012C10.57 3.94012 10.57 3.18017 11.04 2.71017L11.82 1.93014C12.29 1.46014 13.05 1.46014 13.52 1.93014L14.3 2.71017C14.77 3.18017 14.77 3.94012 14.3 4.41012L13.52 5.19015C13.05 5.66015 12.29 5.66015 11.82 5.19015Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.1199 9.81006H21.2199C21.8799 9.81006 22.4199 10.3501 22.4199 11.0101V12.11C22.4199 12.77 21.8799 13.3101 21.2199 13.3101H20.1199C19.4599 13.3101 18.9199 12.77 18.9199 12.11V11.0101C18.9199 10.3501 19.4599 9.81006 20.1199 9.81006Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.21992 9.81006H4.11992C3.45992 9.81006 2.91992 10.3501 2.91992 11.0101V12.11C2.91992 12.77 3.45992 13.3101 4.11992 13.3101H5.21992C5.87992 13.3101 6.41992 12.77 6.41992 12.11V11.0101C6.41992 10.3501 5.87992 9.81006 5.21992 9.81006Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.2102 10.1L13.9102 4.80005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.12988 10.1L11.4299 4.80005"
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
            d="M11.82 5.19015L11.04 4.41012C10.57 3.94012 10.57 3.18017 11.04 2.71017L11.82 1.93014C12.29 1.46014 13.05 1.46014 13.52 1.93014L14.3 2.71017C14.77 3.18017 14.77 3.94012 14.3 4.41012L13.52 5.19015C13.05 5.66015 12.29 5.66015 11.82 5.19015Z"
            fill="currentColor"
          />
          <path
            d="M12.6698 5.91013C12.2698 5.91013 11.8598 5.76016 11.5598 5.45016L10.7798 4.67013C10.1698 4.06013 10.1698 3.06015 10.7798 2.44015L11.5598 1.66013C12.1498 1.06013 13.1898 1.07013 13.7898 1.66013L14.5698 2.44015C15.1798 3.05015 15.1798 4.05013 14.5698 4.67013L13.7898 5.45016C13.4798 5.76016 13.0698 5.91013 12.6698 5.91013ZM12.6698 1.96017C12.4598 1.96017 12.2498 2.04016 12.0898 2.20016L11.3098 2.98013C10.9898 3.30013 10.9898 3.83018 11.3098 4.15018L12.0898 4.93014C12.4098 5.25014 12.9298 5.25014 13.2598 4.93014L14.0398 4.15018C14.3598 3.83018 14.3598 3.31013 14.0398 2.98013L13.2598 2.20016C13.0898 2.04016 12.8798 1.96017 12.6698 1.96017Z"
            fill="currentColor"
          />
          <path
            d="M20.1199 9.81006H21.2199C21.8799 9.81006 22.4199 10.3501 22.4199 11.0101V12.11C22.4199 12.77 21.8799 13.3101 21.2199 13.3101H20.1199C19.4599 13.3101 18.9199 12.77 18.9199 12.11V11.0101C18.9199 10.3501 19.4599 9.81006 20.1199 9.81006Z"
            fill="currentColor"
          />
          <path
            d="M21.22 13.6899H20.12C19.25 13.6899 18.54 12.9799 18.54 12.1099V11.0099C18.54 10.1399 19.25 9.42993 20.12 9.42993H21.22C22.09 9.42993 22.8 10.1399 22.8 11.0099V12.1099C22.79 12.9799 22.09 13.6899 21.22 13.6899ZM20.12 10.1899C19.66 10.1899 19.29 10.56 19.29 11.02V12.1199C19.29 12.5799 19.66 12.95 20.12 12.95H21.22C21.68 12.95 22.05 12.5799 22.05 12.1199V11.02C22.05 10.56 21.68 10.1899 21.22 10.1899H20.12Z"
            fill="currentColor"
          />
          <path
            d="M5.21992 9.81006H4.11992C3.45992 9.81006 2.91992 10.3501 2.91992 11.0101V12.11C2.91992 12.77 3.45992 13.3101 4.11992 13.3101H5.21992C5.87993 13.3101 6.41992 12.77 6.41992 12.11V11.0101C6.41992 10.3501 5.87993 9.81006 5.21992 9.81006Z"
            fill="currentColor"
          />
          <path
            d="M5.22004 13.6899H4.12003C3.25003 13.6899 2.54004 12.9799 2.54004 12.1099V11.0099C2.54004 10.1399 3.25003 9.42993 4.12003 9.42993H5.22004C6.09004 9.42993 6.80003 10.1399 6.80003 11.0099V12.1099C6.79003 12.9799 6.09004 13.6899 5.22004 13.6899ZM4.12003 10.1899C3.66003 10.1899 3.29004 10.56 3.29004 11.02V12.1199C3.29004 12.5799 3.66003 12.95 4.12003 12.95H5.22004C5.68004 12.95 6.05003 12.5799 6.05003 12.1199V11.02C6.05003 10.56 5.68004 10.1899 5.22004 10.1899H4.12003Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3798 4.26972C13.6727 3.97683 14.1476 3.97683 14.4405 4.26972L19.7405 9.56971C20.0334 9.8626 20.0334 10.3375 19.7405 10.6304C19.4476 10.9233 18.9727 10.9233 18.6798 10.6304L13.3798 5.33038C13.0869 5.03749 13.0869 4.56261 13.3798 4.26972Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9602 4.26972C12.2531 4.56261 12.2531 5.03749 11.9602 5.33038L6.66021 10.6304C6.36732 10.9233 5.89244 10.9233 5.59955 10.6304C5.30666 10.3375 5.30666 9.8626 5.59955 9.56971L10.8996 4.26972C11.1925 3.97683 11.6673 3.97683 11.9602 4.26972Z"
            fill="currentColor"
          />
          <path
            d="M13.9292 22.0099H11.3692C10.4492 22.0099 9.76923 21.2698 9.93923 20.4698L10.3592 18.6199H14.9492L15.3692 20.4698C15.5592 21.3198 14.9092 22.0099 13.9292 22.0099Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.7095 17.0499L14.9395 18.6199H10.3495L8.57946 17.0499C7.54946 16.2099 7.54946 15.5599 8.32946 14.5699L11.4495 10.6299C11.6695 10.3599 11.9195 10.1699 12.1895 10.0799C12.4795 9.97988 12.7995 9.97988 13.0895 10.0799C13.3595 10.1799 13.6095 10.3599 13.8295 10.6299L16.9495 14.5699C17.7395 15.5599 17.6995 16.1799 16.7095 17.0499Z"
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
            d="M21.22 9.44004H20.12C19.97 9.44004 19.82 9.47004 19.68 9.51004L14.69 4.52004C15.17 3.90004 15.13 3.01004 14.56 2.45004L13.78 1.67004C13.19 1.08004 12.15 1.08004 11.55 1.67004L10.77 2.45004C10.21 3.01004 10.17 3.90004 10.65 4.52004L5.66004 9.51004C5.52004 9.47004 5.37004 9.44004 5.22004 9.44004H4.12004C3.25004 9.44004 2.54004 10.15 2.54004 11.02V12.12C2.54004 12.99 3.25004 13.7 4.12004 13.7H5.22004C6.09004 13.7 6.80004 12.99 6.80004 12.12V11.02C6.80004 10.87 6.77004 10.72 6.73004 10.58L11.72 5.59004C11.99 5.80004 12.33 5.91004 12.67 5.91004C13.01 5.91004 13.35 5.79004 13.63 5.58004L18.62 10.57C18.58 10.71 18.55 10.86 18.55 11.01V12.11C18.55 12.98 19.26 13.69 20.13 13.69H21.23C22.1 13.69 22.81 12.98 22.81 12.11V11.01C22.79 10.14 22.09 9.44004 21.22 9.44004Z"
            fill="currentColor"
          />
          <path
            d="M16.42 16.55L14.78 18H10.52L8.87997 16.55C7.92997 15.77 7.92997 15.17 8.64997 14.25L11.54 10.59C11.74 10.34 11.97 10.17 12.23 10.08C12.5 9.98995 12.79 9.98995 13.07 10.08C13.32 10.17 13.55 10.34 13.76 10.59L16.65 14.25C17.37 15.16 17.34 15.73 16.42 16.55Z"
            fill="currentColor"
          />
          <path
            d="M13.9598 22.0001H11.3698C10.4498 22.0001 9.75982 21.2501 9.93982 20.4501L10.2498 19.0601C10.3098 18.7801 10.5598 18.5901 10.8398 18.5901H14.4898C14.7698 18.5901 15.0098 18.7801 15.0798 19.0601L15.3898 20.4501C15.5898 21.3001 14.9398 22.0001 13.9598 22.0001Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPenTool as IconComponent).keywords = [
  "pen",
  "tool",
  "playpen",
  "penitentiary",
  "compose",
  "indite",
  "write",
  "paddock",
  "corral",
  "basin",
  "sty",
  "pecker",
  "shaft",
  "prick",
  "joyride",
  "puppet",
  "tool around",
  "creature",
  "drive",
  "dick",
];

export default IconPenTool as IconComponent;