import { FC } from "react";

const IconMinimize: FC<IconProps> = ({
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
            opacity={duotone ? "0.6" : "1"}
            d="M2 22L9 15M9 15H3.14286M9 15V20.8571"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 2L15 9M15 9H20.8571M15 9V3.14286"
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
            opacity={duotone ? "0.6" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.39286 15C2.39286 14.5858 2.72864 14.25 3.14286 14.25H9C9.41421 14.25 9.75 14.5858 9.75 15V20.8571C9.75 21.2714 9.41421 21.6071 9 21.6071C8.58579 21.6071 8.25 21.2714 8.25 20.8571V16.8107L2.53033 22.5303C2.23744 22.8232 1.76256 22.8232 1.46967 22.5303C1.17678 22.2374 1.17678 21.7626 1.46967 21.4697L7.18934 15.75H3.14286C2.72864 15.75 2.39286 15.4142 2.39286 15Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.6071 9C21.6071 9.41421 21.2714 9.75 20.8571 9.75H15C14.5858 9.75 14.25 9.41421 14.25 9V3.14286C14.25 2.72864 14.5858 2.39286 15 2.39286C15.4142 2.39286 15.75 2.72864 15.75 3.14286V7.18934L21.4697 1.46967C21.7626 1.17678 22.2374 1.17678 22.5303 1.46967C22.8232 1.76256 22.8232 2.23744 22.5303 2.53033L16.8107 8.25H20.8571C21.2714 8.25 21.6071 8.58579 21.6071 9Z"
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
            d="M20.8571 9.75C21.2714 9.75 21.6071 9.41421 21.6071 9C21.6071 8.58579 21.2714 8.25 20.8571 8.25H16.8107L22.5303 2.53033C22.8232 2.23744 22.8232 1.76256 22.5303 1.46967C22.2374 1.17678 21.7626 1.17678 21.4697 1.46967L15.75 7.18934V3.14286C15.75 2.72864 15.4142 2.39286 15 2.39286C14.5858 2.39286 14.25 2.72864 14.25 3.14286V9C14.25 9.41421 14.5858 9.75 15 9.75H20.8571Z"
            fill="currentColor"
          />
          <path
            d="M3.14286 14.25C2.72864 14.25 2.39286 14.5858 2.39286 15C2.39286 15.4142 2.72864 15.75 3.14286 15.75H7.18934L1.46967 21.4697C1.17678 21.7626 1.17678 22.2374 1.46967 22.5303C1.76256 22.8232 2.23744 22.8232 2.53033 22.5303L8.25 16.8107V20.8571C8.25 21.2714 8.58579 21.6071 9 21.6071C9.41421 21.6071 9.75 21.2714 9.75 20.8571V15C9.75 14.5858 9.41421 14.25 9 14.25H3.14286Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMinimize as IconComponent).keywords = [
  "minimize",
  "derogate",
  "belittle",
  "denigrate",
  "understate",
  "lessen",
  "reduced",
  "diminish",
  "lessening",
  "reduce",
];

export default IconMinimize as IconComponent;
