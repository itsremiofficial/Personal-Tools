import { FC } from "react";

const IconFigma: FC<IconProps> = ({
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
            d="M12 2H8.66671C6.82576 2 5.33337 3.49238 5.33337 5.33333C5.33337 7.17428 6.82576 8.66667 8.66671 8.66667H12V2Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M12 8.66675H8.66671C6.82576 8.66675 5.33337 10.1591 5.33337 12.0001C5.33337 13.841 6.82576 15.3334 8.66671 15.3334H12V8.66675Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18.6667 12.0001C18.6667 13.841 17.1743 15.3334 15.3333 15.3334C13.4924 15.3334 12 13.841 12 12.0001C12 10.1591 13.4924 8.66675 15.3333 8.66675C17.1743 8.66675 18.6667 10.1591 18.6667 12.0001Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8.66671 15.3333H12V18.6666C12 20.5075 10.5077 21.9999 8.66671 21.9999C6.82576 21.9999 5.33337 20.5075 5.33337 18.6666C5.33337 16.8256 6.82576 15.3333 8.66671 15.3333Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M12 2H15.3333C17.1743 2 18.6667 3.49238 18.6667 5.33333C18.6667 7.17428 17.1743 8.66667 15.3333 8.66667H12V2Z"
            stroke="currentColor"
            strokeWidth={width}
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
            d="M11.6667 2H8.33333C6.49238 2 5 3.49238 5 5.33333C5 7.17428 6.49238 8.66667 8.33333 8.66667H11.6667V2Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.6667 8.6665H8.33333C6.49238 8.6665 5 10.1589 5 11.9998C5 13.8408 6.49238 15.3332 8.33333 15.3332H11.6667V8.6665Z"
            fill="currentColor"
          />
          <path
            d="M18.3327 11.9998C18.3327 13.8408 16.8403 15.3332 14.9993 15.3332C13.1584 15.3332 11.666 13.8408 11.666 11.9998C11.666 10.1589 13.1584 8.6665 14.9993 8.6665C16.8403 8.6665 18.3327 10.1589 18.3327 11.9998Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.2" : "1"}
            d="M8.33333 15.3335H11.6667V18.6668C11.6667 20.5078 10.1743 22.0002 8.33333 22.0002C6.49238 22.0002 5 20.5078 5 18.6668C5 16.8259 6.49238 15.3335 8.33333 15.3335Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.8" : "1"}
            d="M11.666 2H14.9993C16.8403 2 18.3327 3.49238 18.3327 5.33333C18.3327 7.17428 16.8403 8.66667 14.9993 8.66667H11.666V2Z"
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
            d="M8.66699 9.41667C7.24021 9.41667 6.08366 10.5731 6.08366 11.9998C6.08366 13.4266 7.24026 14.5832 8.66699 14.5832H11.2503V12.0519C11.2501 12.0346 11.25 12.0172 11.25 11.9998C11.25 11.9825 11.2501 11.9651 11.2503 11.9478V9.41667H8.66699ZM11.2503 7.91667H8.66699C7.24026 7.91667 6.08366 6.76007 6.08366 5.33333C6.08366 3.9066 7.24026 2.75 8.66699 2.75H11.2503V7.91667ZM12.7503 2.75V7.91663L15.333 7.9165C16.7597 7.9165 17.9167 6.76002 17.9167 5.33333C17.9167 3.9066 16.7601 2.75 15.3333 2.75H12.7503ZM15.3331 9.4165C13.9203 9.41664 12.7724 10.5509 12.7503 11.9584V12.0412C12.7724 13.4489 13.9204 14.5832 15.3333 14.5832C16.7601 14.5832 17.9167 13.4266 17.9167 11.9998C17.9167 10.5731 16.7598 9.41652 15.3331 9.4165ZM8.66699 16.0832C7.2403 16.0832 6.0835 17.24 6.0835 18.6668C6.0835 20.0936 7.24009 21.2502 8.66683 21.2502C10.0936 21.2502 11.2502 20.0936 11.2502 18.6668L11.2503 16.0832H8.66699Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFigma as IconComponent).keywords = [
  "figma",
  "nendoroid",
  "kubrick",
  "marvel legends",
  "marvel universe",
  "shinkansen henkei robo shinkalion",
  "dinozaurs",
  "dc universe classics",
  "batman unlimited",
  "hikarian",
];

export default IconFigma as IconComponent;
