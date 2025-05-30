import { FC } from "react";

const IconStructure: FC<IconProps> = ({
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
            d="M8 5.00037C8 6.65722 6.65685 8.00037 5 8.00037C3.34315 8.00037 2 6.65722 2 5.00037C2 3.34351 3.34315 2.00037 5 2.00037C6.65685 2.00037 8 3.34351 8 5.00037Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M22 5.00037C22 6.65722 20.6569 8.00037 19 8.00037C17.3431 8.00037 16 6.65722 16 5.00037C16 3.34351 17.3431 2.00037 19 2.00037C20.6569 2.00037 22 3.34351 22 5.00037Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M8 19.0004C8 20.6572 6.65685 22.0004 5 22.0004C3.34315 22.0004 2 20.6572 2 19.0004C2 17.3435 3.34315 16.0004 5 16.0004C6.65685 16.0004 8 17.3435 8 19.0004Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M22 19.0004C22 20.6572 20.6569 22.0004 19 22.0004C17.3431 22.0004 16 20.6572 16 19.0004C16 17.3435 17.3431 16.0004 19 16.0004C20.6569 16.0004 22 17.3435 22 19.0004Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8 19.0004H16"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8 5.00037H16"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19 16.0004L19 8.00037"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5 16.0004L5 8.00037"
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
            d="M8 5.00037C8 6.65722 6.65685 8.00037 5 8.00037C3.34315 8.00037 2 6.65722 2 5.00037C2 3.34351 3.34315 2.00037 5 2.00037C6.65685 2.00037 8 3.34351 8 5.00037Z"
            fill="currentColor"
          />
          <path
            d="M22 5.00037C22 6.65722 20.6569 8.00037 19 8.00037C17.3431 8.00037 16 6.65722 16 5.00037C16 3.34351 17.3431 2.00037 19 2.00037C20.6569 2.00037 22 3.34351 22 5.00037Z"
            fill="currentColor"
          />
          <path
            d="M8 19.0004C8 20.6572 6.65685 22.0004 5 22.0004C3.34315 22.0004 2 20.6572 2 19.0004C2 17.3435 3.34315 16.0004 5 16.0004C6.65685 16.0004 8 17.3435 8 19.0004Z"
            fill="currentColor"
          />
          <path
            d="M22 19.0004C22 20.6572 20.6569 22.0004 19 22.0004C17.3431 22.0004 16 20.6572 16 19.0004C16 17.3435 17.3431 16.0004 19 16.0004C20.6569 16.0004 22 17.3435 22 19.0004Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M16.093 4.25608C16.0626 4.25231 16.0315 4.25037 16 4.25037H8C7.96849 4.25037 7.93744 4.25231 7.90695 4.25608C7.9677 4.49407 8 4.74345 8 5.00037C8 5.25728 7.9677 5.50666 7.90695 5.74465C7.93744 5.74842 7.96849 5.75037 8 5.75037H16C16.0315 5.75037 16.0626 5.74842 16.093 5.74465C16.0323 5.50666 16 5.25728 16 5.00037C16 4.74345 16.0323 4.49407 16.093 4.25608Z"
              fill="currentColor"
            />
            <path
              d="M19 8.00037C19.2569 8.00037 19.5063 7.96807 19.7443 7.90732C19.7481 7.93781 19.75 7.96886 19.75 8.00037V16.0004C19.75 16.0319 19.7481 16.0629 19.7443 16.0934C19.5063 16.0327 19.2569 16.0004 19 16.0004C18.7431 16.0004 18.4937 16.0327 18.2557 16.0934C18.2519 16.0629 18.25 16.0319 18.25 16.0004V8.00037C18.25 7.96886 18.2519 7.93781 18.2557 7.90732C18.4937 7.96807 18.7431 8.00037 19 8.00037Z"
              fill="currentColor"
            />
            <path
              d="M16.0931 18.2561C16.0626 18.2523 16.0315 18.2504 16 18.2504H8C7.96849 18.2504 7.93744 18.2523 7.90695 18.2561C7.9677 18.4941 8 18.7435 8 19.0004C8 19.2573 7.9677 19.5067 7.90695 19.7447C7.93744 19.7484 7.96849 19.7504 8 19.7504H16C16.0315 19.7504 16.0626 19.7484 16.0931 19.7447C16.0323 19.5067 16 19.2573 16 19.0004C16 18.7435 16.0323 18.4941 16.0931 18.2561Z"
              fill="currentColor"
            />
            <path
              d="M5 8.00037C4.74308 8.00037 4.49371 7.96807 4.25572 7.90732C4.25194 7.9378 4.25 7.96886 4.25 8.00037V16.0004C4.25 16.0319 4.25194 16.0629 4.25572 16.0934C4.49371 16.0327 4.74308 16.0004 5 16.0004C5.25692 16.0004 5.50629 16.0327 5.74428 16.0934C5.74806 16.0629 5.75 16.0319 5.75 16.0004L5.75 8.00037C5.75 7.96886 5.74806 7.9378 5.74428 7.90732C5.50629 7.96807 5.25692 8.00037 5 8.00037Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.90695 4.25608C7.57591 2.95926 6.39994 2.00037 5 2.00037C3.34315 2.00037 2 3.34351 2 5.00037C2 6.4003 2.9589 7.57628 4.25572 7.90732C4.25194 7.93781 4.25 7.96886 4.25 8.00037V16.0004C4.25 16.0319 4.25195 16.0629 4.25572 16.0934C2.9589 16.4245 2 17.6004 2 19.0004C2 20.6572 3.34315 22.0004 5 22.0004C6.39994 22.0004 7.57591 21.0415 7.90695 19.7446C7.93744 19.7484 7.96849 19.7504 8 19.7504H16C16.0315 19.7504 16.0626 19.7484 16.093 19.7446C16.4241 21.0415 17.6001 22.0004 19 22.0004C20.6569 22.0004 22 20.6572 22 19.0004C22 17.6004 21.0411 16.4245 19.7443 16.0934C19.7481 16.0629 19.75 16.0319 19.75 16.0004V8.00037C19.75 7.96886 19.7481 7.93781 19.7443 7.90732C21.0411 7.57628 22 6.40031 22 5.00037C22 3.34351 20.6569 2.00037 19 2.00037C17.6001 2.00037 16.4241 2.95926 16.093 4.25609C16.0626 4.25231 16.0315 4.25037 16 4.25037H8C7.96849 4.25037 7.93744 4.25231 7.90695 4.25608ZM5.74428 7.90732C5.74806 7.93781 5.75 7.96886 5.75 8.00037L5.75 16.0004C5.75 16.0319 5.74805 16.0629 5.74428 16.0934C6.80311 16.3637 7.63667 17.1973 7.90695 18.2561C7.93744 18.2523 7.96849 18.2504 8 18.2504H16C16.0315 18.2504 16.0626 18.2523 16.093 18.2561C16.3633 17.1973 17.1969 16.3637 18.2557 16.0934C18.2519 16.0629 18.25 16.0319 18.25 16.0004V8.00037C18.25 7.96886 18.2519 7.93781 18.2557 7.90732C17.1969 7.63703 16.3633 6.80348 16.093 5.74465C16.0626 5.74842 16.0315 5.75037 16 5.75037H8C7.96849 5.75037 7.93744 5.74842 7.90695 5.74465C7.63666 6.80348 6.80311 7.63703 5.74428 7.90732Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStructure as IconComponent).keywords = [
  "structure",
  "construction",
  "architecture",
  "anatomical structure",
  "bodily structure",
  "body structure",
  "complex body part",
  "social organization",
  "social structure",
  "social system",
];

export default IconStructure as IconComponent;
