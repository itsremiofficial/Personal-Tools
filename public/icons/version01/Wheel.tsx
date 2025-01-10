import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconWheel: FC<IconProps> = ({
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
            cx="12"
            cy="12.0005"
            r="10"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            cx="12"
            cy="12.0005"
            r="6"
            stroke="currentColor"
            strokeWidth={width}
          />
          <circle
            cx="12"
            cy="12.0005"
            r="2"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6 12.0005L10 12.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14 12.0005L18 12.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9 17.1968L11 13.7327"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12.9999 10.2686L14.9999 6.80445"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15 17.1968L13 13.7327"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M11 10.2686L9 6.80445"
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
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M12 15.0005C13.6569 15.0005 15 13.6573 15 12.0005C15 10.3436 13.6569 9.00049 12 9.00049C10.3431 9.00049 9 10.3436 9 12.0005C9 13.6573 10.3431 15.0005 12 15.0005Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 12.0005C22 17.5233 17.5228 22.0005 12 22.0005C6.47715 22.0005 2 17.5233 2 12.0005C2 6.47764 6.47715 2.00049 12 2.00049C17.5228 2.00049 22 6.47764 22 12.0005ZM12 18.0005C15.3137 18.0005 18 15.3142 18 12.0005C18 8.68678 15.3137 6.00049 12 6.00049C8.68629 6.00049 6 8.68678 6 12.0005C6 15.3142 8.68629 18.0005 12 18.0005ZM15 12.0005C15 13.6573 13.6569 15.0005 12 15.0005C10.3431 15.0005 9 13.6573 9 12.0005C9 10.3436 10.3431 9.00049 12 9.00049C13.6569 9.00049 15 10.3436 15 12.0005Z"
              fill="currentColor"
            />
          </g>
          <path
            d="M9.67217 17.5323L11.1967 14.8918C10.7001 14.7541 10.2553 14.492 9.89804 14.141L8.37377 16.7812C8.77077 17.0828 9.2065 17.3361 9.67217 17.5323Z"
            fill="currentColor"
          />
          <path
            d="M6.0464 12.7503H9.09446C9.0328 12.5107 9 12.2594 9 12.0005C9 11.7415 9.03283 11.4901 9.09456 11.2503H6.04644C6.01579 11.4961 6 11.7465 6 12.0005C6 12.2545 6.01577 12.5047 6.0464 12.7503Z"
            fill="currentColor"
          />
          <path
            d="M8.37388 7.21984L9.89814 9.85994C10.2555 9.50904 10.7003 9.24692 11.1968 9.10928L9.6723 6.46877C9.20662 6.66496 8.77089 6.91824 8.37388 7.21984Z"
            fill="currentColor"
          />
          <path
            d="M12.8031 9.10926L14.3276 6.46875C14.7933 6.66493 15.2291 6.91821 15.6261 7.2198L14.1018 9.8599C13.7445 9.50901 13.2997 9.24689 12.8031 9.10926Z"
            fill="currentColor"
          />
          <path
            d="M14.9055 12.7503C14.9672 12.5107 15 12.2594 15 12.0005C15 11.7415 14.9672 11.4901 14.9054 11.2503H17.9536C17.9842 11.4961 18 11.7465 18 12.0005C18 12.2545 17.9842 12.5047 17.9536 12.7503H14.9055Z"
            fill="currentColor"
          />
          <path
            d="M12.8034 14.8918C13.3 14.7541 13.7447 14.4919 14.102 14.141L15.6263 16.7811C15.2293 17.0827 14.7936 17.336 14.3279 17.5322L12.8034 14.8918Z"
            fill="currentColor"
          />
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22.0005C17.5228 22.0005 22 17.5233 22 12.0005C22 6.47764 17.5228 2.00049 12 2.00049C6.47715 2.00049 2 6.47764 2 12.0005C2 17.5233 6.47715 22.0005 12 22.0005ZM17.9536 12.7504H14.9055C14.7675 13.2866 14.485 13.7649 14.1019 14.1411L15.6262 16.7812C16.8809 15.828 17.7489 14.3922 17.9536 12.7504ZM14.3277 17.5322L12.8032 14.8917C12.5476 14.9626 12.2782 15.0005 12 15.0005C11.7218 15.0005 11.4524 14.9626 11.1967 14.8917L9.6722 17.5322C10.388 17.8338 11.1745 18.0005 12 18.0005C12.8255 18.0005 13.612 17.8338 14.3277 17.5322ZM8.37379 16.7811L9.89806 14.141C9.515 13.7648 9.23247 13.2866 9.09448 12.7504H6.0464C6.2511 14.3922 7.11911 15.828 8.37379 16.7811ZM17.9536 11.2504H14.9055C14.7674 10.7142 14.4849 10.236 14.1018 9.85986L15.6261 7.21977C16.8808 8.17289 17.7488 9.60863 17.9536 11.2504ZM14.3277 6.46871C13.6119 6.16717 12.8254 6.00049 12 6.00049C11.1746 6.00049 10.388 6.16718 9.67227 6.46873L11.1968 9.10923C11.4524 9.03836 11.7218 9.00049 12 9.00049C12.2782 9.00049 12.5475 9.03835 12.8032 9.10921L14.3277 6.46871ZM9.89812 9.85991L8.37385 7.2198C7.1192 8.17293 6.25119 9.60865 6.04644 11.2504H9.09455C9.23257 10.7142 9.51509 10.2361 9.89812 9.85991Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWheel as IconComponentType).keywords = [
  "wheel",
  "steering wheel",
  "wheel around",
  "pedal",
  "bicycle",
  "cycle",
  "rack",
  "bike",
  "roll",
  "roulette wheel",
];

export default IconWheel as IconComponentType;
