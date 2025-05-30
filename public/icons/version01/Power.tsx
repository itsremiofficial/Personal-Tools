import { FC } from "react";

const IconPower: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            d="M12 2V6"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M8.5 3.70593C5.26806 5.07145 3 8.27087 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 8.27087 18.7319 5.07145 15.5 3.70593"
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
            d="M8.7919 5.14693C9.17345 4.98572 9.35208 4.54573 9.19087 4.16417C9.02966 3.78262 8.58966 3.60399 8.2081 3.7652C4.70832 5.24388 2.25 8.70906 2.25 12.7502C2.25 18.1349 6.61522 22.5002 12 22.5002C17.3848 22.5002 21.75 18.1349 21.75 12.7502C21.75 8.70906 19.2917 5.24388 15.7919 3.7652C15.4103 3.60399 14.9703 3.78262 14.8091 4.16417C14.6479 4.54573 14.8265 4.98572 15.2081 5.14693C18.1722 6.39928 20.25 9.33294 20.25 12.7502C20.25 17.3065 16.5563 21.0002 12 21.0002C7.44365 21.0002 3.75 17.3065 3.75 12.7502C3.75 9.33294 5.82779 6.39928 8.7919 5.14693Z"
            fill="currentColor"
          />
          <path
            d="M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V6.75C11.25 7.16421 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.16421 12.75 6.75V2.75Z"
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
          <path d="M12 2V6" strokeWidth={width} strokeLinecap="round" />
          <path
            d="M12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75V6.75C11.25 7.16421 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.16421 12.75 6.75V2.75Z"
            fill="currentColor"
          />
          <path
            d="M8.7919 5.14692C9.17345 4.98571 9.35208 4.54571 9.19087 4.16416C9.02966 3.7826 8.58966 3.60398 8.2081 3.76519C4.70832 5.24386 2.25 8.70905 2.25 12.7501C2.25 18.1349 6.61522 22.5001 12 22.5001C17.3848 22.5001 21.75 18.1349 21.75 12.7501C21.75 8.70905 19.2917 5.24386 15.7919 3.76519C15.4103 3.60398 14.9703 3.7826 14.8091 4.16416C14.6479 4.54571 14.8265 4.98571 15.2081 5.14692C18.1722 6.39927 20.25 9.33293 20.25 12.7501C20.25 17.3065 16.5563 21.0001 12 21.0001C7.44365 21.0001 3.75 17.3065 3.75 12.7501C3.75 9.33293 5.82779 6.39927 8.7919 5.14692Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPower as IconComponent).keywords = [
  "power",
  "might",
  "powerfulness",
  "force",
  "potency",
  "ability",
  "mightiness",
  "superpower",
  "exponent",
  "tycoon",
];

export default IconPower as IconComponent;
