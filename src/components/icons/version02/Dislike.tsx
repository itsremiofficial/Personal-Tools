import { FC } from "react";

const IconDislike: FC<IconProps> = ({
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
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.1897 5.65039L14.0897 3.25039C13.6897 2.85039 12.7897 2.65039 12.1897 2.65039H8.38965C7.18965 2.65039 5.88965 3.55039 5.58965 4.75039L3.18965 12.0504C2.68965 13.4504 3.58965 14.6504 5.08965 14.6504H9.08965C9.68965 14.6504 10.1897 15.1504 10.0897 15.8504L9.58965 19.0504C9.38965 19.9504 9.98965 20.9504 10.8897 21.2504C11.6897 21.5504 12.6897 21.1504 13.0897 20.5504L17.1897 14.4504"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
          />
          <path
            d="M22.29 5.65049V15.4505C22.29 16.8505 21.69 17.3505 20.29 17.3505H19.29C17.89 17.3505 17.29 16.8505 17.29 15.4505V5.65049C17.29 4.25049 17.89 3.75049 19.29 3.75049H20.29C21.69 3.75049 22.29 4.25049 22.29 5.65049Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.01994 13.9598C3.40994 14.5198 4.09994 14.8398 4.88994 14.8398H8.98994C9.25994 14.8398 9.50994 14.9498 9.67994 15.1498C9.85994 15.3498 9.92994 15.6298 9.88994 15.9198L9.37994 19.1998C9.15994 20.1798 9.80994 21.2798 10.7899 21.6098C11.6999 21.9498 12.7699 21.4898 13.1999 20.8398L17.4099 14.5698L17.5299 14.3698V5.52979L17.3799 5.37979L14.2099 2.92979C13.7899 2.50979 12.8399 2.27979 12.1699 2.27979H8.26994C6.92994 2.27979 5.57994 3.28979 5.27994 4.51979L2.81994 12.0098C2.56994 12.7198 2.63994 13.4198 3.01994 13.9598Z"
            fill="currentColor"
          />
          <path
            d="M19.4603 17.6099H20.4903C22.0403 17.6099 22.6703 17.0099 22.6703 15.5299V5.4799C22.6703 3.9999 22.0403 3.3999 20.4903 3.3999H19.4603C17.9103 3.3999 17.2803 3.9999 17.2803 5.4799V15.5399C17.2803 17.0099 17.9103 17.6099 19.4603 17.6099Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.2799 5.50002V15.66C16.2799 16.06 16.1599 16.45 15.9399 16.78L13.2099 20.84C12.7799 21.49 11.7099 21.95 10.7999 21.61C9.81994 21.28 9.16994 20.18 9.37994 19.2L9.89994 15.93C9.93994 15.63 9.85994 15.36 9.68994 15.15C9.51994 14.96 9.26994 14.84 8.99994 14.84H4.88994C4.09994 14.84 3.41994 14.52 3.01994 13.96C2.63994 13.42 2.56994 12.72 2.81994 12.01L5.27994 4.52002C5.58994 3.28002 6.93994 2.27002 8.27994 2.27002H12.1799C12.8499 2.27002 13.7899 2.50002 14.2199 2.93002L15.4999 3.92002C15.9899 4.30002 16.2799 4.88002 16.2799 5.50002Z"
            fill="currentColor"
          />
          <path
            d="M19.4603 17.6099H20.4903C22.0403 17.6099 22.6703 17.0099 22.6703 15.5299V5.4799C22.6703 3.9999 22.0403 3.3999 20.4903 3.3999H19.4603C17.9103 3.3999 17.2803 3.9999 17.2803 5.4799V15.5399C17.2803 17.0099 17.9103 17.6099 19.4603 17.6099Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDislike as IconComponent).keywords = [
  "dislike",
  "disfavour",
  "disfavor",
  "disapproval",
  "aversion",
  "displeasure",
  "distaste",
  "antipathy",
  "unpleasantness",
  "abhor",
];

export default IconDislike as IconComponent;
