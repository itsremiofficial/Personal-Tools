import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSmartphoneRotateOrientation: FC<IconProps> = ({
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
            d="M2 8.00012C2 5.17169 2 3.75748 2.87868 2.8788C3.75736 2.00012 5.17157 2.00012 8 2.00012H9C11.8284 2.00012 13.2426 2.00012 14.1213 2.8788C15 3.75748 15 5.17169 15 8.00012V16.0001C15 18.8285 15 20.2428 14.1213 21.1214C13.2426 22.0001 11.8284 22.0001 9 22.0001H8C5.17157 22.0001 3.75736 22.0001 2.87868 21.1214C2 20.2428 2 18.8285 2 16.0001V8.00012Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M17.5 10.0066C19.3597 10.0335 20.414 10.1714 21.1213 10.8788C22 11.7574 22 13.1717 22 16.0001C22 18.8285 22 20.2427 21.1213 21.1214C20.414 21.8287 19.3597 21.9667 17.5 21.9936"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M11 5.00012H6"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19 18.0001V14.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 17.5001C10 18.3285 9.32843 19.0001 8.5 19.0001C7.67157 19.0001 7 18.3285 7 17.5001C7 16.6717 7.67157 16.0001 8.5 16.0001C9.32843 16.0001 10 16.6717 10 17.5001Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M20.5 6.9861L22 8.00012C22 4.98544 19.8377 2.48287 17 2.00012"
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
            d="M20.4302 21.1528C21.2771 20.3059 21.2771 18.9428 21.2771 16.2167C21.2771 13.4905 21.2771 12.1274 20.4302 11.2805C19.9791 10.8293 18.7484 10.6212 17.448 10.5245C16.5561 10.4582 16.1101 10.4251 15.802 10.7111C15.494 10.9971 15.494 11.4653 15.494 12.4018V20.0439C15.494 20.9804 15.494 21.4487 15.803 21.7348C16.1121 22.021 16.5573 21.9866 17.4478 21.9179C18.7483 21.8175 19.979 21.604 20.4302 21.1528Z"
            fill="currentColor"
          />
          <path
            d="M19.1089 14.2894C19.1089 13.8902 18.7852 13.5665 18.386 13.5665C17.9867 13.5665 17.6631 13.8902 17.6631 14.2894V18.1448C17.6631 18.5441 17.9867 18.8677 18.386 18.8677C18.7852 18.8677 19.1089 18.5441 19.1089 18.1448V14.2894Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M2 8.50588C2 5.7797 2 4.41661 2.84692 3.56969C3.69384 2.72278 5.05694 2.72278 7.78313 2.72278H8.74699C11.4732 2.72278 12.8363 2.72278 13.6832 3.56969C14.5301 4.41661 14.5301 5.7797 14.5301 8.50588V16.2167C14.5301 18.9429 14.5301 20.3059 13.6832 21.1529C12.8363 21.9998 11.4732 21.9998 8.74699 21.9998H7.78313C5.05694 21.9998 3.69384 21.9998 2.84692 21.1529C2 20.3059 2 18.9429 2 16.2167V8.50588Z"
              fill="currentColor"
            />
          </g>
          <path
            d="M5.8557 4.89172C5.45646 4.89172 5.13281 5.21537 5.13281 5.61461C5.13281 6.01385 5.45646 6.3375 5.8557 6.3375H10.675C11.0742 6.3375 11.3979 6.01385 11.3979 5.61461C11.3979 5.21537 11.0742 4.89172 10.675 4.89172H5.8557Z"
            fill="currentColor"
          />
          <path
            d="M8.26534 19.1085C9.06383 19.1085 9.71113 18.4612 9.71113 17.6627C9.71113 16.8643 9.06383 16.217 8.26534 16.217C7.46686 16.217 6.81956 16.8643 6.81956 17.6627C6.81956 18.4612 7.46686 19.1085 8.26534 19.1085Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.7447 2.60189C15.8117 2.2083 16.185 1.94352 16.5786 2.01048C19.6626 2.53512 21.9996 5.24946 21.9996 8.50622C21.9996 8.77366 21.8519 9.01924 21.6157 9.14467C21.3795 9.2701 21.0934 9.25488 20.8718 9.10511L19.426 8.12774C19.0953 7.90415 19.0084 7.45476 19.232 7.12401C19.4556 6.79325 19.905 6.70638 20.2357 6.92998L20.3317 6.99486C19.7756 5.15452 18.2308 3.75809 16.3361 3.43577C15.9426 3.36882 15.6778 2.99547 15.7447 2.60189Z"
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
            d="M2.84692 3.57004C2 4.41696 2 5.78005 2 8.50622V16.217C2 18.9432 2 20.3063 2.84692 21.1532C3.69384 22.0001 5.05694 22.0001 7.78313 22.0001H8.74699C11.4732 22.0001 12.8363 22.0001 13.6832 21.1532C14.5301 20.3063 14.5301 18.9432 14.5301 16.217V8.50622C14.5301 5.78005 14.5301 4.41696 13.6832 3.57004C12.8363 2.72313 11.4732 2.72313 8.74699 2.72313H7.78313C5.05694 2.72313 3.69384 2.72313 2.84692 3.57004ZM5.85542 4.89179C5.45618 4.89179 5.13253 5.21544 5.13253 5.61467C5.13253 6.01391 5.45618 6.33756 5.85542 6.33756H10.6747C11.0739 6.33756 11.3976 6.01391 11.3976 5.61467C11.3976 5.21544 11.0739 4.89179 10.6747 4.89179H5.85542ZM8.26506 19.1086C9.06354 19.1086 9.71084 18.4613 9.71084 17.6628C9.71084 16.8643 9.06354 16.217 8.26506 16.217C7.46658 16.217 6.81928 16.8643 6.81928 17.6628C6.81928 18.4613 7.46658 19.1086 8.26506 19.1086Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.2771 16.2166C21.2771 18.9428 21.2771 20.3059 20.4302 21.1528C19.979 21.604 18.7482 21.8175 17.4478 21.9179C16.5573 21.9866 16.1121 22.0209 15.803 21.7348C15.494 21.4487 15.494 20.9804 15.494 20.0439V12.4018C15.494 11.4653 15.494 10.9971 15.802 10.7111C16.1101 10.425 16.5561 10.4582 17.448 10.5245C18.7484 10.6212 19.9791 10.8293 20.4302 11.2804C21.2771 12.1274 21.2771 13.4905 21.2771 16.2166ZM19.1084 14.2893C19.1084 13.8901 18.7848 13.5664 18.3855 13.5664C17.9863 13.5664 17.6627 13.8901 17.6627 14.2893V18.1447C17.6627 18.544 17.9863 18.8676 18.3855 18.8676C18.7848 18.8676 19.1084 18.544 19.1084 18.1447V14.2893Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.7452 2.60189C15.8121 2.2083 16.1855 1.94352 16.5791 2.01048C19.663 2.53512 22 5.24946 22 8.50622C22 8.77366 21.8524 9.01924 21.6162 9.14467C21.38 9.2701 21.0938 9.25488 20.8723 9.10511L19.4265 8.12774C19.0957 7.90415 19.0088 7.45476 19.2324 7.12401C19.456 6.79325 19.9054 6.70638 20.2362 6.92998L20.3322 6.99486C19.776 5.15452 18.2312 3.75809 16.3366 3.43577C15.943 3.36882 15.6782 2.99547 15.7452 2.60189Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSmartphoneRotateOrientation as IconComponentType).keywords = [
  "smartphone",
  "rotate",
  "orientation",
  "intelligent",
  "smart",
  "screenphone",
  "featurephone",
  "superphone",
  "touchphone",
  "mobile device",
  "cellular phone",
  "smartwatch",
  "go around",
  "revolve",
  "rotation",
  "rotational",
  "slue",
  "turn",
  "tilt",
  "spinning",
  "counterclockwise",
  "orientation course",
  "oriented",
  "reorientation",
  "directional",
  "alignment",
  "positioning",
  "position",
  "pathfinder",
  "trajectory",
];

export default IconSmartphoneRotateOrientation as IconComponentType;
