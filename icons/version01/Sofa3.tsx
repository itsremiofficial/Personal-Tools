import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSofa3: FC<IconProps> = ({
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
            d="M4 18.0001H20C21.1046 18.0001 22 17.1047 22 16.0001C22 14.8956 21.1046 14.0001 20 14.0001H4C2.89543 14.0001 2 14.8956 2 16.0001C2 17.1047 2.89543 18.0001 4 18.0001Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4.49993 14.0001L4.42528 13.7015C3.33845 9.35422 2.79504 7.18055 3.86584 5.67834C3.93339 5.58358 4.00504 5.49181 4.08059 5.4033C5.27824 4.00012 7.5188 4.00012 11.9999 4.00012C16.4811 4.00012 18.7216 4.00012 19.9193 5.4033C19.9948 5.49181 20.0665 5.58358 20.134 5.67834C21.2048 7.18055 20.6614 9.35422 19.5746 13.7015L19.4999 14.0001"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M20 20.0001V18.0001M4 20.0001V18.0001"
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
            d="M4.75 17.7501V19.7502C4.75 20.1644 4.41421 20.5002 4 20.5002C3.58579 20.5002 3.25 20.1644 3.25 19.7502V17.6047C2.51704 17.308 2 16.5895 2 15.7501C2 14.6456 2.89543 13.7501 4 13.7501H20C21.1046 13.7501 22 14.6456 22 15.7501C22 16.5895 21.483 17.308 20.75 17.6047V19.7502C20.75 20.1644 20.4142 20.5002 20 20.5002C19.5858 20.5002 19.25 20.1644 19.25 19.7502V17.7501H4.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19.7497 12.7501C20.7166 8.8659 21.1456 6.84749 20.134 5.42834C20.0665 5.33358 19.9948 5.24181 19.9193 5.1533C18.7216 3.75012 16.4811 3.75012 11.9999 3.75012C7.5188 3.75012 5.27824 3.75012 4.08059 5.1533C4.00504 5.24181 3.93339 5.33358 3.86584 5.42834C2.85424 6.84749 3.28329 8.8659 4.25017 12.7501L4.45003 13.7501H19.5499L19.7497 12.7501Z"
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
            d="M19.7497 12.7501C20.7166 8.8659 21.1456 6.84749 20.134 5.42834C20.0665 5.33358 19.9948 5.24181 19.9193 5.1533C18.7216 3.75012 16.4811 3.75012 11.9999 3.75012C7.5188 3.75012 5.27824 3.75012 4.08059 5.1533C4.00504 5.24181 3.93339 5.33358 3.86584 5.42834C2.85424 6.84749 3.28329 8.8659 4.25017 12.7501H19.7497Z"
            fill="currentColor"
          />
          <path
            d="M4.75 17.7501V19.7502C4.75 20.1644 4.41421 20.5002 4 20.5002C3.58579 20.5002 3.25 20.1644 3.25 19.7502V17.6047C2.51704 17.308 2 16.5895 2 15.7501C2 14.6456 2.89543 13.7501 4 13.7501H20C21.1046 13.7501 22 14.6456 22 15.7501C22 16.5895 21.483 17.308 20.75 17.6047V19.7502C20.75 20.1644 20.4142 20.5002 20 20.5002C19.5858 20.5002 19.25 20.1644 19.25 19.7502V17.7501H4.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSofa3 as IconComponentType).keywords = [
  "sofa",
  "3",
  "couch",
  "lounge",
  "chesterfield",
  "armchair",
  "chair",
  "furniture",
  "wheelchair",
  "spot",
  "toast",
  "omega",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down",
];

export default IconSofa3 as IconComponentType;
