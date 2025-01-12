import { FC } from "react";

const IconUserPlus: FC<IconProps> = ({
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
            d="M21 10.0005H19M19 10.0005H17M19 10.0005L19 8.00049M19 10.0005L19 12.0005"
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
            d="M16.5 22.0005C14.8501 22.0005 14.0251 22.0005 13.5126 21.4879C13 20.9754 13 20.1504 13 18.5005C13 16.8506 13 16.0256 13.5126 15.5131C14.0251 15.0005 14.8501 15.0005 16.5 15.0005C18.1499 15.0005 18.9749 15.0005 19.4874 15.5131C20 16.0256 20 16.8506 20 18.5005C20 20.1504 20 20.9754 19.4874 21.4879C18.9749 22.0005 18.1499 22.0005 16.5 22.0005ZM17.0833 16.9449C17.0833 16.6228 16.8222 16.3616 16.5 16.3616C16.1778 16.3616 15.9167 16.6228 15.9167 16.9449V17.9172H14.9444C14.6223 17.9172 14.3611 18.1783 14.3611 18.5005C14.3611 18.8227 14.6223 19.0838 14.9444 19.0838H15.9167V20.056C15.9167 20.3782 16.1778 20.6394 16.5 20.6394C16.8222 20.6394 17.0833 20.3782 17.0833 20.056V19.0838H18.0556C18.3777 19.0838 18.6389 18.8227 18.6389 18.5005C18.6389 18.1783 18.3777 17.9172 18.0556 17.9172H17.0833V16.9449Z"
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
          <circle cx="10" cy="6.00049" r="4" fill="currentColor" />
          <path
            d="M18 17.5005C18 19.9858 18 22.0005 10 22.0005C2 22.0005 2 19.9858 2 17.5005C2 15.0152 5.58172 13.0005 10 13.0005C14.4183 13.0005 18 15.0152 18 17.5005Z"
            fill="currentColor"
          />
          <path
            d="M21 10.0005H19M19 10.0005H17M19 10.0005L19 8.00049M19 10.0005L19 12.0005"
            strokeWidth={width}
            strokeLinecap="round"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUserPlus as IconComponent).keywords = [
  "user",
  "plus",
  "exploiter",
  "enjoyer",
  "drug user",
  "substance abuser",
  "customer",
  "client",
  "employer",
  "consumer",
  "employee",
  "addition",
  "summation",
  "advantageous",
  "positive",
  "asset",
  "nonnegative",
  "additional",
  "add",
  "along",
];

export default IconUserPlus as IconComponent;
