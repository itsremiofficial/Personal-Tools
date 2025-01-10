import { FC } from "react";

const IconRoundTransferVertical: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M10 7L10 17L7 13.5625"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 17L14 7L17 10.4375"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            opacity={duotone ? "0.5" : "1"}
            d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
            fill="currentColor"
          />
          <path
            d="M7.56508 13.0693C7.29272 12.7572 6.81894 12.725 6.50686 12.9974C6.19478 13.2698 6.16258 13.7435 6.43494 14.0556L9.43494 17.4931C9.64051 17.7287 9.97063 17.812 10.2634 17.7022C10.5561 17.5924 10.75 17.3126 10.75 17L10.75 6.99997C10.75 6.58575 10.4142 6.24997 10 6.24997C9.5858 6.24997 9.25001 6.58575 9.25001 6.99997L9.25001 15L7.56508 13.0693Z"
            fill="currentColor"
          />
          <path
            d="M14.75 17L14.75 8.99997L16.4349 10.9306C16.7073 11.2427 17.1811 11.2749 17.4932 11.0025C17.8052 10.7302 17.8374 10.2564 17.5651 9.94431L14.5651 6.50681C14.3595 6.27127 14.0294 6.18795 13.7367 6.29772C13.4439 6.40749 13.25 6.68733 13.25 6.99997L13.25 12L13.25 17C13.25 17.4142 13.5858 17.75 14 17.75C14.4142 17.75 14.75 17.4142 14.75 17Z"
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
            d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM14.75 17L14.75 9L16.4349 10.9307C16.7073 11.2427 17.1811 11.2749 17.4931 11.0026C17.8052 10.7302 17.8374 10.2564 17.5651 9.94435L14.5651 6.50685C14.3595 6.2713 14.0294 6.18798 13.7367 6.29775C13.4439 6.40753 13.25 6.68737 13.25 7L13.25 17C13.25 17.4142 13.5858 17.75 14 17.75C14.4142 17.75 14.75 17.4142 14.75 17ZM6.50685 12.9974C6.81893 12.7251 7.29271 12.7573 7.56507 13.0693L9.25 15V7C9.25 6.58579 9.58579 6.25 10 6.25C10.4142 6.25 10.75 6.58579 10.75 7V17C10.75 17.3126 10.5561 17.5925 10.2633 17.7022C9.97061 17.812 9.6405 17.7287 9.43493 17.4932L6.43493 14.0557C6.16257 13.7436 6.19477 13.2698 6.50685 12.9974Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRoundTransferVertical as IconComponent).keywords = [
  "round",
  "transfer",
  "vertical",
  "orbicular",
  "rotund",
  "orbiculate",
  "discoidal",
  "disklike",
  "discoid",
  "ringlike",
  "globular",
  "globose",
  "transference",
  "transport",
  "transpose",
  "change",
  "transferral",
  "reassign",
  "remove",
  "transmit",
  "conveyance",
  "perpendicular",
  "plumb",
  "upright",
  "stand-up",
  "standing",
  "straight",
  "rearing",
  "erect",
  "erectile",
];

export default IconRoundTransferVertical as IconComponent;
