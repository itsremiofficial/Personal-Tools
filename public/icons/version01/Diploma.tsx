import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDiploma: FC<IconProps> = ({
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
            cy="16.0005"
            r="3"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M12 19.2605L9.73713 21.4299C9.41306 21.7406 9.25102 21.8959 9.1138 21.9497C8.80111 22.0722 8.45425 21.9674 8.28977 21.7006C8.21758 21.5836 8.19509 21.3725 8.1501 20.9503C8.1247 20.7119 8.112 20.5927 8.07345 20.4928C7.98715 20.2693 7.80579 20.0955 7.57266 20.0127C7.46853 19.9758 7.3442 19.9636 7.09553 19.9392C6.65512 19.8961 6.43491 19.8745 6.31283 19.8053C6.03463 19.6476 5.92529 19.3151 6.05306 19.0153C6.10913 18.8838 6.27116 18.7284 6.59523 18.4177L8.07345 17.0006L9.1138 15.9602"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M12 19.2604L14.2629 21.4299C14.5869 21.7406 14.749 21.8959 14.8862 21.9497C15.1989 22.0722 15.5457 21.9673 15.7102 21.7006C15.7824 21.5836 15.8049 21.3725 15.8499 20.9502C15.8753 20.7118 15.888 20.5926 15.9265 20.4928C16.0129 20.2693 16.1942 20.0954 16.4273 20.0127C16.5315 19.9757 16.6558 19.9636 16.9045 19.9392C17.3449 19.8961 17.5651 19.8745 17.6872 19.8053C17.9654 19.6476 18.0747 19.3151 17.9469 19.0153C17.8909 18.8837 17.7288 18.7284 17.4048 18.4177L15.9265 17.0005L15 16.074"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M17.3197 17.9962C19.2921 17.9753 20.3915 17.8517 21.1213 17.1218C22 16.2431 22 14.8289 22 12.0005V8.00049C22 5.17206 22 3.75785 21.1213 2.87917C20.2426 2.00049 18.8284 2.00049 16 2.00049L8 2.00049C5.17157 2.00049 3.75736 2.00049 2.87868 2.87917C2 3.75785 2 5.17206 2 8.00049L2 12.0005C2 14.8289 2 16.2431 2.87868 17.1218C3.64706 17.8902 4.82497 17.9866 7 17.9987"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9 6.00049L15 6.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7 9.50049H17"
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
            opacity={duotone ? "0.5" : "1"}
            d="M2 8.00049V12.0005C2 14.8289 2 16.2431 2.87868 17.1218C3.35503 17.5982 3.98877 17.8163 4.9199 17.9161C4.9939 17.8162 5.06395 17.7375 5.11392 17.6826C5.23008 17.5548 5.37739 17.4096 5.5202 17.2688L7.01311 15.7967L7.56446 15.2381C7.9268 13.1156 9.77461 11.5005 12.0001 11.5005C14.2255 11.5005 16.0733 13.1156 16.4357 15.2381L16.987 15.7967L18.48 17.2689C18.6228 17.4097 18.7701 17.5549 18.8862 17.6826C18.9362 17.7375 19.0062 17.8162 19.0802 17.9161C20.0113 17.8163 20.645 17.5981 21.1213 17.1218C22 16.2431 22 14.8289 22 12.0005V8.00049C22 5.17206 22 3.75785 21.1213 2.87917C20.2426 2.00049 18.8284 2.00049 16 2.00049H8C5.17157 2.00049 3.75736 2.00049 2.87868 2.87917C2 3.75785 2 5.17206 2 8.00049Z"
            fill="currentColor"
          />
          <path
            d="M7 8.75049C6.58579 8.75049 6.25 9.08627 6.25 9.50049C6.25 9.9147 6.58579 10.2505 7 10.2505H17C17.4142 10.2505 17.75 9.9147 17.75 9.50049C17.75 9.08627 17.4142 8.75049 17 8.75049H7Z"
            fill="currentColor"
          />
          <path
            d="M8.25 6.00049C8.25 5.58627 8.58579 5.25049 9 5.25049H15C15.4142 5.25049 15.75 5.58627 15.75 6.00049C15.75 6.4147 15.4142 6.75049 15 6.75049H9C8.58579 6.75049 8.25 6.4147 8.25 6.00049Z"
            fill="currentColor"
          />
          <path
            d="M9.00111 15.9179C9.00037 15.9453 9 15.9729 9 16.0005C9 17.6573 10.3431 19.0005 12 19.0005C13.6569 19.0005 15 17.6573 15 16.0005C15 15.9729 14.9996 15.9453 14.9989 15.9179C14.9551 14.2992 13.6292 13.0005 12 13.0005C10.4467 13.0005 9.16912 14.181 9.01549 15.6938C9.00798 15.7677 9.00315 15.8425 9.00111 15.9179Z"
            fill="currentColor"
          />
          <path
            d="M7.6757 17.2498L6.59523 18.3153C6.27116 18.6349 6.10913 18.7946 6.05306 18.93C5.92529 19.2383 6.03463 19.5803 6.31283 19.7425C6.43491 19.8137 6.65512 19.8359 7.09553 19.8803C7.3442 19.9053 7.46853 19.9178 7.57266 19.9559C7.80579 20.041 7.98715 20.2198 8.07345 20.4497C8.112 20.5524 8.1247 20.675 8.1501 20.9202C8.19509 21.3545 8.21758 21.5716 8.28977 21.692C8.45425 21.9663 8.80111 22.0742 9.1138 21.9482C9.25102 21.8929 9.41306 21.7331 9.73713 21.4135L10.8175 20.3435C9.30505 19.9327 8.10917 18.7529 7.6757 17.2498Z"
            fill="currentColor"
          />
          <path
            d="M13.1825 20.3435L14.2629 21.4135C14.5869 21.7331 14.749 21.8929 14.8862 21.9482C15.1989 22.0742 15.5457 21.9663 15.7102 21.692C15.7824 21.5716 15.8049 21.3545 15.8499 20.9202C15.8753 20.675 15.888 20.5524 15.9265 20.4497C16.0129 20.2198 16.1942 20.041 16.4273 19.9559C16.5315 19.9178 16.6558 19.9053 16.9045 19.8803C17.3449 19.8359 17.5651 19.8137 17.6872 19.7425C17.9654 19.5803 18.0747 19.2383 17.9469 18.93C17.8909 18.7946 17.7288 18.6349 17.4048 18.3153L16.3243 17.2498C15.8908 18.7529 14.6949 19.9327 13.1825 20.3435Z"
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
            d="M2 12.0005V8.00049C2 5.17206 2 3.75785 2.87868 2.87917C3.75736 2.00049 5.17157 2.00049 8 2.00049H16C18.8284 2.00049 20.2426 2.00049 21.1213 2.87917C22 3.75785 22 5.17206 22 8.00049V12.0005C22 14.8289 22 16.2431 21.1213 17.1218C20.645 17.5981 20.0113 17.8163 19.0802 17.9161C19.0062 17.8162 18.9362 17.7375 18.8862 17.6826C18.7701 17.5549 18.6228 17.4097 18.48 17.2689L16.987 15.7967L16.4357 15.2381C16.0733 13.1156 14.2255 11.5005 12.0001 11.5005C9.77461 11.5005 7.9268 13.1156 7.56446 15.2381L7.01311 15.7967L5.5202 17.2688C5.37739 17.4096 5.23008 17.5548 5.11392 17.6826C5.06395 17.7375 4.9939 17.8162 4.9199 17.9161C3.98877 17.8163 3.35503 17.5982 2.87868 17.1218C2 16.2431 2 14.8289 2 12.0005ZM9 5.25049C8.58579 5.25049 8.25 5.58627 8.25 6.00049C8.25 6.4147 8.58579 6.75049 9 6.75049H15C15.4142 6.75049 15.75 6.4147 15.75 6.00049C15.75 5.58627 15.4142 5.25049 15 5.25049H9ZM6.25 9.50049C6.25 9.08627 6.58579 8.75049 7 8.75049H17C17.4142 8.75049 17.75 9.08627 17.75 9.50049C17.75 9.9147 17.4142 10.2505 17 10.2505H7C6.58579 10.2505 6.25 9.9147 6.25 9.50049Z"
            fill="currentColor"
          />
          <path
            d="M15 16.0005C15 17.6573 13.6569 19.0005 12 19.0005C10.3431 19.0005 9 17.6573 9 16.0005C9 14.3436 10.3431 13.0005 12 13.0005C13.6569 13.0005 15 14.3436 15 16.0005Z"
            fill="currentColor"
          />
          <path
            d="M9.00111 15.9179C9.00037 15.9453 9 15.9729 9 16.0005C9 17.6573 10.3431 19.0005 12 19.0005C13.6569 19.0005 15 17.6573 15 16.0005C15 15.9729 14.9996 15.9453 14.9989 15.9179C14.9551 14.2992 13.6292 13.0005 12 13.0005C10.4467 13.0005 9.16912 14.181 9.01549 15.6938C9.00798 15.7677 9.00315 15.8425 9.00111 15.9179Z"
            fill="currentColor"
          />
          <path
            d="M7.6757 17.2498L6.59523 18.3153C6.27116 18.6349 6.10913 18.7946 6.05306 18.93C5.92529 19.2383 6.03463 19.5803 6.31283 19.7425C6.43492 19.8137 6.65512 19.8359 7.09553 19.8803C7.3442 19.9053 7.46853 19.9178 7.57266 19.9559C7.80579 20.041 7.98715 20.2198 8.07345 20.4497C8.112 20.5524 8.1247 20.675 8.1501 20.9202C8.19509 21.3545 8.21758 21.5716 8.28977 21.692C8.45425 21.9663 8.80111 22.0742 9.1138 21.9482C9.25102 21.8929 9.41306 21.7331 9.73713 21.4135L10.8175 20.3435C9.30505 19.9327 8.10917 18.7529 7.6757 17.2498Z"
            fill="currentColor"
          />
          <path
            d="M13.1825 20.3435L14.2629 21.4135C14.5869 21.7331 14.749 21.8929 14.8862 21.9482C15.1989 22.0742 15.5457 21.9663 15.7102 21.692C15.7824 21.5716 15.8049 21.3545 15.8499 20.9202C15.8753 20.675 15.888 20.5524 15.9265 20.4497C16.0129 20.2198 16.1942 20.041 16.4273 19.9559C16.5315 19.9178 16.6558 19.9053 16.9045 19.8803C17.3449 19.8359 17.5651 19.8137 17.6872 19.7425C17.9654 19.5803 18.0747 19.2383 17.9469 18.93C17.8909 18.7946 17.7288 18.6349 17.4048 18.3153L16.3243 17.2498C15.8908 18.7529 14.6949 19.9327 13.1825 20.3435Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDiploma as IconComponentType).keywords = [
  "diploma",
  "sheepskin",
  "degree",
  "graduation",
  "postgraduate",
  "graduate",
  "university",
  "graduated",
  "educated",
  "baccalaureate",
];

export default IconDiploma as IconComponentType;
