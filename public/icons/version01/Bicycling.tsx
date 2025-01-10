import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBicycling: FC<IconProps> = ({
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
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="15"
            cy="4.00049"
            r="2"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="6"
            cy="18.0005"
            r="3"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="18"
            cy="18.0005"
            r="3"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M18.5 10.0005H16.4744C15.2534 10.0005 14.6429 10.0005 14.0934 9.7739C13.544 9.54731 13.111 9.11694 12.2449 8.25622L11.6676 7.68243C10.8828 6.9025 10.4904 6.51253 10.0257 6.55487C9.56102 6.59722 9.24559 7.05168 8.61471 7.96061L7.38809 9.72787C6.74573 10.6534 6.42454 11.1161 6.55348 11.5708C6.68242 12.0255 7.1987 12.2508 8.23125 12.7014L9.70695 13.3453C11.0709 13.9404 11.7529 14.238 12.081 14.8379C12.4091 15.4377 12.2918 16.1725 12.0572 17.642L12 18.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 4.00049C17 5.10506 16.1045 6.00049 15 6.00049C13.8954 6.00049 13 5.10506 13 4.00049C13 2.89592 13.8954 2.00049 15 2.00049C16.1045 2.00049 17 2.89592 17 4.00049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.1609 7.11539L12.7736 7.72425C13.6828 8.62791 13.9992 8.92377 14.3794 9.08055C14.7595 9.23732 15.1925 9.25049 16.4744 9.25049H18.5C18.9142 9.25049 19.25 9.58627 19.25 10.0005C19.25 10.4147 18.9142 10.7505 18.5 10.7505H16.4744C16.4264 10.7505 16.3791 10.7505 16.3324 10.7505C15.2492 10.751 14.4965 10.7514 13.8075 10.4672C13.1185 10.1831 12.5848 9.65222 11.8169 8.8883C11.7838 8.85536 11.7502 8.82199 11.7162 8.78818L11.1389 8.21439C10.7301 7.8082 10.4796 7.56175 10.2781 7.41145C10.1847 7.34178 10.1308 7.31555 10.1052 7.30597C10.0998 7.30399 10.0961 7.30286 10.0938 7.30224C10.0916 7.30327 10.0882 7.30505 10.0833 7.30797C10.0598 7.32201 10.0115 7.35757 9.93223 7.44297C9.76124 7.6272 9.55938 7.91489 9.23082 8.38826L8.00419 10.1555C7.66978 10.6373 7.46679 10.933 7.352 11.162C7.29871 11.2683 7.28212 11.3272 7.27717 11.3546C7.27621 11.3599 7.27576 11.3636 7.27555 11.3661C7.277 11.368 7.27936 11.371 7.28295 11.375C7.30154 11.3957 7.34658 11.4371 7.44774 11.4996C7.66566 11.6343 7.99363 11.7794 8.53117 12.0139L10.0471 12.6754C10.6948 12.958 11.2408 13.1962 11.6615 13.4427C12.1082 13.7043 12.4856 14.0148 12.739 14.478C12.9923 14.9412 13.0501 15.4264 13.0295 15.9437C13.0101 16.4309 12.9162 17.0191 12.8047 17.717L12.7406 18.1187C12.6753 18.5278 12.2908 18.8064 11.8817 18.7411C11.4727 18.6758 11.194 18.2913 11.2593 17.8823L11.3166 17.5238C11.4367 16.7711 11.5153 16.2714 11.5307 15.884C11.5454 15.5165 11.4977 15.3345 11.423 15.1978C11.3482 15.0611 11.2206 14.9228 10.9033 14.7369C10.5687 14.5409 10.1056 14.3375 9.40698 14.0327L7.93128 13.3888C7.91587 13.382 7.9005 13.3753 7.88519 13.3687C7.40858 13.1608 6.97953 12.9736 6.65922 12.7757C6.31114 12.5606 5.96954 12.2608 5.8319 11.7754C5.69426 11.29 5.82768 10.8556 6.01104 10.4898C6.17977 10.1532 6.44672 9.76867 6.74325 9.34153C6.75278 9.32781 6.76234 9.31404 6.77193 9.30022L7.99855 7.53297C8.00804 7.5193 8.01749 7.50568 8.02691 7.4921C8.31788 7.0728 8.58033 6.69458 8.83278 6.42258C9.10758 6.12649 9.46226 5.85311 9.95763 5.80797C10.453 5.76283 10.8513 5.9676 11.175 6.20914C11.4725 6.43104 11.799 6.75559 12.1609 7.11539Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 14.2505C15.9289 14.2505 14.25 15.9294 14.25 18.0005C14.25 20.0716 15.9289 21.7505 18 21.7505C20.0711 21.7505 21.75 20.0716 21.75 18.0005C21.75 15.9294 20.0711 14.2505 18 14.2505ZM18 15.7505C16.7574 15.7505 15.75 16.7578 15.75 18.0005C15.75 19.2431 16.7574 20.2505 18 20.2505C19.2426 20.2505 20.25 19.2431 20.25 18.0005C20.25 16.7578 19.2426 15.7505 18 15.7505Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 14.2505C3.92893 14.2505 2.25 15.9294 2.25 18.0005C2.25 20.0716 3.92893 21.7505 6 21.7505C8.07107 21.7505 9.75 20.0716 9.75 18.0005C9.75 15.9294 8.07107 14.2505 6 14.2505ZM6 15.7505C4.75736 15.7505 3.75 16.7578 3.75 18.0005C3.75 19.2431 4.75736 20.2505 6 20.2505C7.24264 20.2505 8.25 19.2431 8.25 18.0005C8.25 16.7578 7.24264 15.7505 6 15.7505Z"
              fill="currentColor"
            />
          </g>
        </svg>
      ) : (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 4.00049C17 5.10506 16.1046 6.00049 15 6.00049C13.8954 6.00049 13 5.10506 13 4.00049C13 2.89592 13.8954 2.00049 15 2.00049C16.1046 2.00049 17 2.89592 17 4.00049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.161 7.11539L12.7736 7.72425C13.6829 8.62791 13.9992 8.92377 14.3794 9.08055C14.7595 9.23732 15.1925 9.25049 16.4744 9.25049H18.5C18.9142 9.25049 19.25 9.58627 19.25 10.0005C19.25 10.4147 18.9142 10.7505 18.5 10.7505H16.4744C16.4265 10.7505 16.3792 10.7505 16.3324 10.7505C15.2493 10.751 14.4965 10.7514 13.8075 10.4672C13.1185 10.1831 12.5848 9.65222 11.8169 8.8883C11.7838 8.85536 11.7502 8.82199 11.7162 8.78818L11.1389 8.21439C10.7302 7.8082 10.4796 7.56175 10.2782 7.41145C10.1848 7.34178 10.1308 7.31555 10.1052 7.30597C10.0999 7.30399 10.0961 7.30286 10.0938 7.30224C10.0917 7.30327 10.0882 7.30505 10.0833 7.30797C10.0599 7.32201 10.0115 7.35757 9.93226 7.44297C9.76128 7.6272 9.55941 7.91489 9.23085 8.38826L8.00422 10.1555C7.66981 10.6373 7.46682 10.933 7.35203 11.162C7.29874 11.2683 7.28215 11.3272 7.2772 11.3546C7.27625 11.3599 7.27579 11.3636 7.27558 11.3661C7.27703 11.368 7.2794 11.371 7.28298 11.375C7.30157 11.3957 7.34661 11.4371 7.44778 11.4996C7.66569 11.6343 7.99366 11.7794 8.5312 12.0139L10.0471 12.6754C10.6948 12.958 11.2408 13.1962 11.6615 13.4427C12.1082 13.7043 12.4856 14.0148 12.739 14.478C12.9924 14.9412 13.0502 15.4264 13.0295 15.9437C13.0101 16.4309 12.9162 17.0191 12.8048 17.717L12.7406 18.1187C12.6753 18.5278 12.2908 18.8064 11.8818 18.7411C11.4727 18.6758 11.1941 18.2913 11.2594 17.8823L11.3166 17.5238C11.4368 16.7711 11.5153 16.2714 11.5307 15.884C11.5454 15.5165 11.4978 15.3345 11.423 15.1978C11.3483 15.0611 11.2206 14.9228 10.9033 14.7369C10.5687 14.5409 10.1056 14.3375 9.40701 14.0327L7.93131 13.3888C7.9159 13.382 7.90053 13.3753 7.88522 13.3687C7.40861 13.1608 6.97956 12.9736 6.65926 12.7757C6.31117 12.5606 5.96957 12.2608 5.83193 11.7754C5.69429 11.29 5.82771 10.8556 6.01107 10.4898C6.1798 10.1532 6.44675 9.76867 6.74328 9.34153C6.75281 9.32781 6.76237 9.31404 6.77196 9.30022L7.99858 7.53297C8.00807 7.5193 8.01752 7.50568 8.02694 7.4921C8.31791 7.0728 8.58036 6.69458 8.83281 6.42258C9.10761 6.12649 9.46229 5.85311 9.95766 5.80797C10.453 5.76283 10.8513 5.9676 11.1751 6.20914C11.4725 6.43104 11.799 6.75559 12.161 7.11539ZM6 15.7505C4.75736 15.7505 3.75 16.7578 3.75 18.0005C3.75 19.2431 4.75736 20.2505 6 20.2505C7.24264 20.2505 8.25 19.2431 8.25 18.0005C8.25 16.7578 7.24264 15.7505 6 15.7505ZM2.25 18.0005C2.25 15.9294 3.92893 14.2505 6 14.2505C8.07107 14.2505 9.75 15.9294 9.75 18.0005C9.75 20.0716 8.07107 21.7505 6 21.7505C3.92893 21.7505 2.25 20.0716 2.25 18.0005ZM18 15.7505C16.7574 15.7505 15.75 16.7578 15.75 18.0005C15.75 19.2431 16.7574 20.2505 18 20.2505C19.2426 20.2505 20.25 19.2431 20.25 18.0005C20.25 16.7578 19.2426 15.7505 18 15.7505ZM14.25 18.0005C14.25 15.9294 15.9289 14.2505 18 14.2505C20.0711 14.2505 21.75 15.9294 21.75 18.0005C21.75 20.0716 20.0711 21.7505 18 21.7505C15.9289 21.7505 14.25 20.0716 14.25 18.0005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBicycling as IconComponentType).keywords = [
  "bicycling",
  "bike",
  "cycle",
  "pedal",
  "wheel",
  "biking",
  "cycling",
  "motorcycling",
  "bicyclists",
  "cyclist",
];

export default IconBicycling as IconComponentType;
