import { FC } from "react";

const IconUserMinus: FC<IconProps> = ({
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
            cx="10"
            cy="6.00049"
            r="4"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18 17.5005C18 19.9858 18 22.0005 10 22.0005C2 22.0005 2 19.9858 2 17.5005C2 15.0152 5.58172 13.0005 10 13.0005C14.4183 13.0005 18 15.0152 18 17.5005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M21 10.0005H19H17"
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
            d="M16 6.00049C16 8.20963 14.2091 10.0005 12 10.0005C9.79086 10.0005 8 8.20963 8 6.00049C8 3.79135 9.79086 2.00049 12 2.00049C14.2091 2.00049 16 3.79135 16 6.00049Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14.4774 21.9213C13.7513 21.9733 12.9296 22.0005 12 22.0005C4 22.0005 4 19.9858 4 17.5005C4 15.0152 7.58172 13.0005 12 13.0005C14.8806 13.0005 17.4056 13.8569 18.8142 15.1417C18.298 15.0005 17.5737 15.0005 16.5 15.0005C14.8501 15.0005 14.0251 15.0005 13.5126 15.5131C13 16.0256 13 16.8506 13 18.5005C13 20.1504 13 20.9754 13.5126 21.4879C13.7501 21.7254 14.0547 21.8529 14.4774 21.9213Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.5126 21.4879C14.0251 22.0005 14.8501 22.0005 16.5 22.0005C18.1499 22.0005 18.9749 22.0005 19.4874 21.4879C20 20.9754 20 20.1504 20 18.5005C20 16.8506 20 16.0256 19.4874 15.5131C18.9749 15.0005 18.1499 15.0005 16.5 15.0005C14.8501 15.0005 14.0251 15.0005 13.5126 15.5131C13 16.0256 13 16.8506 13 18.5005C13 20.1504 13 20.9754 13.5126 21.4879ZM15.9167 17.9172H14.9444C14.6223 17.9172 14.3611 18.1783 14.3611 18.5005C14.3611 18.8227 14.6223 19.0838 14.9444 19.0838H15.9167H17.0833H18.0556C18.3777 19.0838 18.6389 18.8227 18.6389 18.5005C18.6389 18.1783 18.3777 17.9172 18.0556 17.9172H17.0833H15.9167Z"
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
            d="M14 6.00049C14 8.20963 12.2091 10.0005 10 10.0005C7.79086 10.0005 6 8.20963 6 6.00049C6 3.79135 7.79086 2.00049 10 2.00049C12.2091 2.00049 14 3.79135 14 6.00049Z"
            fill="currentColor"
          />
          <path
            d="M10 13.0005C14.4183 13.0005 18 15.0152 18 17.5005C18 19.9858 18 22.0005 10 22.0005C2 22.0005 2 19.9858 2 17.5005C2 15.0152 5.58172 13.0005 10 13.0005Z"
            fill="currentColor"
          />
          <path
            d="M17 9.25049C16.5858 9.25049 16.25 9.58627 16.25 10.0005C16.25 10.4147 16.5858 10.7505 17 10.7505H21C21.4142 10.7505 21.75 10.4147 21.75 10.0005C21.75 9.58627 21.4142 9.25049 21 9.25049H17Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserMinus as IconComponent).keywords = [
  "user",
  "minus",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "subtraction",
  "negative",
  "disadvantageous",
  "harmful",
  "sans",
  "min",
  "least",
  "unary",
  "nec",
];

export default IconUserMinus as IconComponent;
