import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconScale: FC<IconProps> = ({
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
            d="M11.0001 2C6.94506 2.0073 4.82162 2.10686 3.46459 3.46389C2.00012 4.92835 2.00012 7.28538 2.00012 11.9994C2.00012 16.7135 2.00012 19.0705 3.46459 20.535C4.92905 21.9994 7.28608 21.9994 12.0001 21.9994C16.7142 21.9994 19.0712 21.9994 20.5357 20.535C21.8927 19.1779 21.9922 17.0545 21.9995 12.9994"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M13 11L22 2M22 2H16.6562M22 2V7.34375M21 3L12 12M12 12H16M12 12V8"
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.6562 2.75C16.242 2.75 15.9062 2.41421 15.9062 2C15.9062 1.58579 16.242 1.25 16.6562 1.25H22C22.4142 1.25 22.75 1.58579 22.75 2V7.34375C22.75 7.75796 22.4142 8.09375 22 8.09375C21.5858 8.09375 21.25 7.75796 21.25 7.34375V3.81066L13.8107 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H12C11.5858 12.75 11.25 12.4142 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V10.1893L20.1893 2.75H16.6562Z"
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
            d="M15.9062 2C15.9062 2.41421 16.242 2.75 16.6562 2.75H20.1893L12.75 10.1893V8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8V12C11.25 12.4142 11.5858 12.75 12 12.75H16C16.4142 12.75 16.75 12.4142 16.75 12C16.75 11.5858 16.4142 11.25 16 11.25H13.8107L21.25 3.81066V7.34375C21.25 7.75796 21.5858 8.09375 22 8.09375C22.4142 8.09375 22.75 7.75796 22.75 7.34375V2C22.75 1.58579 22.4142 1.25 22 1.25H16.6562C16.242 1.25 15.9062 1.58579 15.9062 2Z"
            fill="currentColor"
          />
          <path
            d="M19.7516 7.43034C19.797 8.62969 20.7812 9.5887 21.9904 9.59373C22 10.3198 22 11.1187 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C12.8813 2 13.6802 2 14.4063 2.00957C14.4113 3.21884 15.3703 4.20298 16.5697 4.24836L13.9468 6.87122C13.5572 6.20078 12.8313 5.75 12 5.75C10.7574 5.75 9.75 6.75736 9.75 8V12C9.75 13.2426 10.7574 14.25 12 14.25H16C17.2426 14.25 18.25 13.2426 18.25 12C18.25 11.1687 17.7992 10.4428 17.1288 10.0532L19.7516 7.43034Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconScale as IconComponentType).keywords = [
  "scale",
  "weighing machine",
  "descale",
  "plate",
  "surmount",
  "scale leaf",
  "scurf",
  "musical scale",
  "shell",
  "graduated table",
];

export default IconScale as IconComponentType;