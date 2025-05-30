import { FC } from "react";

const IconBarChair: FC<IconProps> = ({
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
            d="M5.0315 6.93763C4.75731 4.7287 6.30192 2.69778 8.54207 2.32181L8.93963 2.25508C10.9651 1.91514 13.0349 1.91514 15.0604 2.25508L15.4579 2.32181C17.6981 2.69778 19.2427 4.72869 18.9685 6.93763L18.9505 7.08285C18.8855 7.60642 18.4315 8.00012 17.8928 8.00012H6.10719C5.56847 8.00012 5.11452 7.60642 5.04953 7.08285L5.0315 6.93763Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M9 8.00012L6 22.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M15 8.00012L18 22.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16.5 17.0001H7.5"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.45974 6.73356C5.20239 4.61592 6.65212 2.66895 8.75467 2.30851L9.12781 2.24454C11.0289 1.91865 12.9715 1.91865 14.8726 2.24454L15.2457 2.30851C17.3483 2.66895 18.798 4.61592 18.5406 6.73356L18.5237 6.87277C18.4627 7.37471 18.0367 7.75213 17.531 7.75213H15.7672H14.25H9.75031H8.2331H6.46936C5.96373 7.75213 5.53766 7.37471 5.47666 6.87278L5.45974 6.73356Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8.2331 7.75208L5.2668 21.5948C5.18001 21.9998 5.43799 22.3985 5.84301 22.4853C6.24803 22.5721 6.64672 22.3141 6.73351 21.9091L7.6779 17.5019H16.3224L17.2668 21.9091C17.3536 22.3141 17.7523 22.5721 18.1573 22.4853C18.5623 22.3985 18.8203 21.9998 18.7335 21.5948L15.7672 7.75208H14.25C14.2501 7.80385 14.2555 7.85641 14.2668 7.90907L16.001 16.0019H7.99932L9.73351 7.90907C9.74479 7.85641 9.75025 7.80385 9.75031 7.75208H8.2331Z"
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
            d="M8.75467 2.30851C6.65212 2.66895 5.20239 4.61592 5.45974 6.73356L5.47666 6.87278C5.53766 7.37471 5.96373 7.75213 6.46936 7.75213H8.2331L5.2668 21.5948C5.18001 21.9999 5.43799 22.3985 5.84301 22.4853C6.24803 22.5721 6.64672 22.3142 6.73351 21.9091L7.6779 17.502H16.3224L17.2668 21.9091C17.3536 22.3142 17.7523 22.5721 18.1573 22.4853C18.5623 22.3985 18.8203 21.9999 18.7335 21.5948L15.7672 7.75213H17.531C18.0367 7.75213 18.4627 7.37471 18.5237 6.87277L18.5406 6.73356C18.798 4.61592 17.3483 2.66895 15.2457 2.30851L14.8726 2.24454C12.9715 1.91865 11.0289 1.91865 9.12781 2.24454L8.75467 2.30851ZM14.25 7.75213H9.75031C9.75025 7.80391 9.74479 7.85647 9.73351 7.90913L7.99932 16.002H16.001L14.2668 7.90913C14.2555 7.85647 14.2501 7.80391 14.25 7.75213Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBarChair as IconComponent).keywords = [
  "bar",
  "chair",
  "block",
  "barricade",
  "ginmill",
  "blockade",
  "saloon",
  "taproom",
  "barroom",
  "block up",
  "block off",
  "electric chair",
  "hot seat",
  "chairwoman",
  "chairman",
  "preside",
  "professorship",
  "chairperson",
  "president",
  "moderate",
];

export default IconBarChair as IconComponent;
