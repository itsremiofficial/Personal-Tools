import { FC } from "react";

const IconTrash: FC<IconProps> = ({
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
            d="M21.6699 5.98C18.3399 5.65 14.9899 5.48 11.6499 5.48C9.66992 5.48 7.68992 5.58 5.70992 5.78L3.66992 5.98"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M9.16992 4.97L9.38992 3.66C9.54992 2.71 9.66992 2 11.3599 2H13.9799C15.6699 2 15.7999 2.75 15.9499 3.67L16.1699 4.97"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5203 9.14L18.8703 19.21C18.7603 20.78 18.6703 22 15.8803 22H9.46031C6.67031 22 6.58031 20.78 6.47031 19.21L5.82031 9.14"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M11 16.5H14.33"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.34" : "1"}
            d="M10.1699 12.5H15.1699"
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
            d="M21.7396 5.23C20.1296 5.07 18.5196 4.95 16.8996 4.86V4.85L16.6796 3.55C16.5296 2.63 16.3096 1.25 13.9696 1.25H11.3496C9.01959 1.25 8.79959 2.57 8.63959 3.54L8.42959 4.82C7.49959 4.88 6.56959 4.94 5.63959 5.03L3.59959 5.23C3.17959 5.27 2.87959 5.64 2.91959 6.05C2.95959 6.46 3.31959 6.76 3.73959 6.72L5.77959 6.52C11.0196 6 16.2996 6.2 21.5996 6.73C21.6296 6.73 21.6496 6.73 21.6796 6.73C22.0596 6.73 22.3896 6.44 22.4296 6.05C22.4596 5.64 22.1596 5.27 21.7396 5.23Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.3991" : "1"}
            d="M19.8997 8.14C19.6597 7.89 19.3297 7.75 18.9897 7.75H6.34967C6.00967 7.75 5.66967 7.89 5.43967 8.14C5.20967 8.39 5.07967 8.73 5.09967 9.08L5.71967 19.34C5.82967 20.86 5.96967 22.76 9.45967 22.76H15.8797C19.3697 22.76 19.5097 20.87 19.6197 19.34L20.2397 9.09C20.2597 8.73 20.1297 8.39 19.8997 8.14Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.25 17C10.25 16.5858 10.5858 16.25 11 16.25H14.33C14.7442 16.25 15.08 16.5858 15.08 17C15.08 17.4142 14.7442 17.75 14.33 17.75H11C10.5858 17.75 10.25 17.4142 10.25 17Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.41992 13C9.41992 12.5858 9.75571 12.25 10.1699 12.25H15.1699C15.5841 12.25 15.9199 12.5858 15.9199 13C15.9199 13.4142 15.5841 13.75 15.1699 13.75H10.1699C9.75571 13.75 9.41992 13.4142 9.41992 13Z"
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
            d="M21.7396 5.23C20.1296 5.07 18.5196 4.95 16.8996 4.86V4.85L16.6796 3.55C16.5296 2.63 16.3096 1.25 13.9696 1.25H11.3496C9.01959 1.25 8.79959 2.57 8.63959 3.54L8.42959 4.82C7.49959 4.88 6.56959 4.94 5.63959 5.03L3.59959 5.23C3.17959 5.27 2.87959 5.64 2.91959 6.05C2.95959 6.46 3.31959 6.76 3.73959 6.72L5.77959 6.52C11.0196 6 16.2996 6.2 21.5996 6.73C21.6296 6.73 21.6496 6.73 21.6796 6.73C22.0596 6.73 22.3896 6.44 22.4296 6.05C22.4596 5.64 22.1596 5.27 21.7396 5.23Z"
            fill="currentColor"
          />
          <path
            d="M19.8997 8.14C19.6597 7.89 19.3297 7.75 18.9897 7.75H6.34967C6.00967 7.75 5.66967 7.89 5.43967 8.14C5.20967 8.39 5.07967 8.73 5.09967 9.08L5.71967 19.34C5.82967 20.86 5.96967 22.76 9.45967 22.76H15.8797C19.3697 22.76 19.5097 20.87 19.6197 19.34L20.2397 9.09C20.2597 8.73 20.1297 8.39 19.8997 8.14ZM14.3297 17.75H10.9997C10.5897 17.75 10.2497 17.41 10.2497 17C10.2497 16.59 10.5897 16.25 10.9997 16.25H14.3297C14.7397 16.25 15.0797 16.59 15.0797 17C15.0797 17.41 14.7397 17.75 14.3297 17.75ZM15.1697 13.75H10.1697C9.75967 13.75 9.41967 13.41 9.41967 13C9.41967 12.59 9.75967 12.25 10.1697 12.25H15.1697C15.5797 12.25 15.9197 12.59 15.9197 13C15.9197 13.41 15.5797 13.75 15.1697 13.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTrash as IconComponent).keywords = [
  "trash",
  "junk",
  "rubbish",
  "scum",
  "trumpery",
  "folderol",
  "scrap",
  "tear apart",
  "wish-wash",
  "tripe",
];

export default IconTrash as IconComponent;
