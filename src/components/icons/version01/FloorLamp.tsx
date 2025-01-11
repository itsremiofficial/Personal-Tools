import { FC } from "react";

const IconFloorLamp: FC<IconProps> = ({
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
          <path
            d="M9 22.0001H15"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M12 22.0001V7.00012"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M12.0001 7.00012C13.313 7.00012 14.429 6.15666 14.8357 4.98202C15.0164 4.46013 14.5523 4.00012 14.0001 4.00012H10.0001C9.44777 4.00012 8.98374 4.46013 9.16442 4.98202C9.57111 6.15666 10.6871 7.00012 12.0001 7.00012Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M10 4.00012C10 2.89555 10.8954 2.00012 12 2.00012C13.1046 2.00012 14 2.89555 14 4.00012"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 18.0001V16.9369C12 15.6556 11.4101 14.4469 10.4035 13.6656L6.52181 10.891M2.7793 10.6846L5.31139 7.4431M2.7793 10.6846C2.4297 11.1321 2.50541 11.8019 3.03895 11.9889C4.2398 12.4095 5.62367 12.0439 6.45481 10.9799C6.47776 10.9506 6.50009 10.9209 6.52181 10.891M2.7793 10.6846C1.89216 9.97906 1.73982 8.68152 2.43904 7.78642C3.13825 6.89132 4.42425 6.73761 5.31139 7.4431M5.31139 7.4431C5.661 6.99555 6.3242 6.91332 6.62898 7.39308C7.29602 8.44308 7.28701 9.83656 6.52181 10.891"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 18.0001V16.9369C12 15.6556 12.5899 14.4469 13.5965 13.6656L17.4782 10.891M21.2207 10.6846L18.6886 7.4431M21.2207 10.6846C21.5703 11.1321 21.4946 11.8019 20.9611 11.9889C19.7602 12.4095 18.3763 12.0439 17.5452 10.9799C17.5222 10.9506 17.4999 10.9209 17.4782 10.891M21.2207 10.6846C22.1078 9.97906 22.2602 8.68152 21.561 7.78642C20.8617 6.89132 19.5757 6.73761 18.6886 7.4431M18.6886 7.4431C18.339 6.99555 17.6758 6.91332 17.371 7.39308C16.704 8.44308 16.713 9.83656 17.4782 10.891"
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
            d="M11.9998 7.00012C13.3128 7.00012 14.4288 6.15666 14.8354 4.98202C15.0161 4.46013 14.5521 4.00012 13.9998 4.00012H9.99981C9.44752 4.00012 8.98349 4.46013 9.16418 4.98202C9.57086 6.15666 10.6868 7.00012 11.9998 7.00012Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 2.00012C13.1046 2.00012 14 2.89555 14 4.00012H10C10 2.89555 10.8954 2.00012 12 2.00012Z"
            fill="currentColor"
          />
          <path
            d="M6.45475 10.98C6.4777 10.9506 6.50003 10.9209 6.52175 10.891C7.28695 9.83658 7.29596 8.44309 6.62892 7.39309C6.32414 6.91334 5.66094 6.99556 5.31133 7.44312L2.77924 10.6846C2.42963 11.1321 2.50535 11.802 3.03889 11.9889C4.23974 12.4096 5.62361 12.0439 6.45475 10.98Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2.43904 7.78642C3.13826 6.89132 4.42425 6.73761 5.31139 7.4431L2.7793 10.6846C1.89216 9.97906 1.73982 8.68152 2.43904 7.78642Z"
            fill="currentColor"
          />
          <path
            d="M17.5452 10.98C17.5223 10.9506 17.5 10.9209 17.4783 10.891C16.713 9.83658 16.704 8.44309 17.3711 7.39309C17.6759 6.91334 18.3391 6.99556 18.6887 7.44312L21.2208 10.6846C21.5704 11.1321 21.4947 11.802 20.9611 11.9889C19.7603 12.4096 18.3764 12.0439 17.5452 10.98Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M21.561 7.78642C20.8617 6.89132 19.5757 6.73761 18.6886 7.4431L21.2207 10.6846C22.1078 9.97906 22.2602 8.68152 21.561 7.78642Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25 22.0001C8.25 21.5859 8.58579 21.2501 9 21.2501H15C15.4142 21.2501 15.75 21.5859 15.75 22.0001C15.75 22.4143 15.4142 22.7501 15 22.7501H9C8.58579 22.7501 8.25 22.4143 8.25 22.0001Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.55" : "1"}>
            <path
              d="M12 7.00013C12.2571 7.00013 12.5066 6.9678 12.7447 6.90698C12.7485 6.9375 12.7504 6.96859 12.7504 7.00013V13.4071C12.8727 13.2897 13.0016 13.1782 13.1369 13.0731L13.1486 13.0641L17.0893 10.1714C17.1847 10.4224 17.3141 10.6645 17.4785 10.891C17.5002 10.9209 17.5225 10.9506 17.5455 10.98C17.6676 11.1363 17.8017 11.2776 17.9454 11.4036L14.0455 14.2667C13.23 14.9052 12.7506 15.8904 12.7506 16.937V18.0001L12.7504 18.016V21.2501H11.2504V16.9034C11.2403 15.8695 10.7623 14.8984 9.95535 14.2667L6.05518 11.4034C6.19882 11.2775 6.33287 11.1363 6.45499 10.98C6.47793 10.9506 6.50026 10.9209 6.52198 10.891C6.68638 10.6645 6.81587 10.4223 6.91126 10.1712L10.8523 13.0641L10.864 13.0731C10.9993 13.1782 11.1282 13.2897 11.2504 13.4071V7.00013C11.2504 6.96865 11.2524 6.93763 11.2561 6.90718C11.494 6.96787 11.7433 7.00013 12 7.00013Z"
              fill="currentColor"
            />
            <path
              d="M11.9977 22.7501L12.0004 22.7501L12.0031 22.7501H11.9977Z"
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
            d="M13.7467 3.06169L10.1539 3.04324C10.5034 2.41721 11.1746 1.99618 11.9466 2.00015C12.7186 2.00412 13.3927 2.43205 13.7467 3.06169Z"
            fill="currentColor"
          />
          <path
            d="M12.7498 7.03425C13.7456 6.77832 14.5426 6.03631 14.8733 5.07497C15.0572 4.54038 14.5784 4.0659 14.0105 4.06298L9.89732 4.04185C9.32941 4.03894 8.85393 4.50852 9.04163 5.04501C9.38712 6.03249 10.2196 6.7952 11.2498 7.04416V13.4071C11.1276 13.2897 10.9987 13.1781 10.8634 13.0731L10.8517 13.0641L6.96472 10.2857L6.88855 10.2286C7.26391 9.29712 7.16361 8.23476 6.62892 7.39309C6.32414 6.91334 5.66094 6.99556 5.31133 7.44312L2.77924 10.6846C2.42963 11.1321 2.50535 11.802 3.03889 11.9889C4.04436 12.3411 5.17814 12.1421 6.00834 11.4435L6.07892 11.4963L9.95475 14.2667C10.7617 14.8984 11.2397 15.8695 11.2498 16.9034V21.2501H8.99984C8.58563 21.2501 8.24984 21.5859 8.24984 22.0001C8.24984 22.4143 8.58563 22.7501 8.99984 22.7501H14.9998C15.4141 22.7501 15.7498 22.4143 15.7498 22.0001C15.7498 21.5859 15.4141 21.2501 14.9998 21.2501H12.7498V18.016L12.75 18.0001V16.937C12.75 15.8904 13.2294 14.9052 14.0449 14.2667L17.9208 11.4963L18.0521 11.398C18.8866 12.1333 20.0474 12.3486 21.0744 11.9889C21.6079 11.802 21.6836 11.1321 21.334 10.6846L18.8019 7.44312C18.4523 6.99556 17.7891 6.91334 17.4844 7.39309C16.9622 8.21499 16.8543 9.24734 17.1991 10.1628L17.035 10.2857L13.148 13.0641L13.1363 13.0731C13.001 13.1782 12.8721 13.2897 12.7498 13.4071V7.03425Z"
            fill="currentColor"
          />
          <path
            d="M2.15682 9.85707L4.36852 7.02576C3.66061 6.91215 2.91429 7.17803 2.43904 7.78642C1.96379 8.39481 1.88194 9.18911 2.15682 9.85707Z"
            fill="currentColor"
          />
          <path
            d="M19.7448 7.02576L21.9565 9.85707C22.2313 9.18911 22.1495 8.39481 21.6742 7.78642C21.199 7.17803 20.4527 6.91215 19.7448 7.02576Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFloorLamp as IconComponent).keywords = [
  "floor",
  "lamp",
  "deck",
  "storey",
  "dump",
  "level",
  "coldcock",
  "knock down",
  "base",
  "story",
  "shock",
  "bulb",
  "flashlight",
  "lamppost",
  "lantern",
  "lighting",
  "dimmer",
  "searchlight",
  "wick",
  "lighter",
];

export default IconFloorLamp as IconComponent;