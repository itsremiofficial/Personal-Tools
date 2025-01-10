import { FC } from "react";

const IconCheck: FC<IconProps> = ({
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
            d="M10.1672 15.6477L17.4933 8.33325"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6.50647 12L10.1562 15.6405"
            stroke="currentColor"
            strokeWidth="2"
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
            d="M10.1065 16.7732C9.83988 16.7732 9.58655 16.6666 9.39988 16.4799L5.62655 12.7066C5.23988 12.3199 5.23988 11.6799 5.62655 11.2932C6.01321 10.9066 6.65321 10.9066 7.03988 11.2932L10.1065 14.3599L16.9599 7.50655C17.3465 7.11989 17.9865 7.11989 18.3732 7.50655C18.7599 7.89322 18.7599 8.53322 18.3732 8.91989L10.8132 16.4799C10.6265 16.6666 10.3732 16.7732 10.1065 16.7732Z"
            fill="currentColor"
          />
          <path
            d="M9.3999 16.4799C9.58657 16.6666 9.8399 16.7732 10.1066 16.7732C10.3732 16.7732 10.6266 16.6666 10.8132 16.4799L18.3732 8.91989C18.7599 8.53322 18.7599 7.89322 18.3732 7.50655C17.9866 7.11989 17.3466 7.11989 16.9599 7.50655L10.1066 14.3599L8.69324 15.7732L9.3999 16.4799Z"
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
            d="M10.1065 16.7732C9.83988 16.7732 9.58655 16.6666 9.39988 16.4799L5.62655 12.7066C5.23988 12.3199 5.23988 11.6799 5.62655 11.2932C6.01321 10.9066 6.65321 10.9066 7.03988 11.2932L10.1065 14.3599L16.9599 7.50655C17.3465 7.11989 17.9865 7.11989 18.3732 7.50655C18.7599 7.89322 18.7599 8.53322 18.3732 8.91989L10.8132 16.4799C10.6265 16.6666 10.3732 16.7732 10.1065 16.7732Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCheck as IconComponent).keywords = [
  "check",
  "match",
  "hitch",
  "check out",
  "curb",
  "check into",
  "checkout",
  "turn back",
  "arrest",
  "hold",
];

export default IconCheck as IconComponent;
