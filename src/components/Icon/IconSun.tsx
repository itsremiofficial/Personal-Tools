import { FC } from "react";
import { IconProps } from "../../types";

const IconSun: FC<IconProps> = ({
  className,
  fill = false,
  duotone = true,
  width = "1.5",
}) => {
  return (
    <>
      {!fill ? (
        <svg
          fill="none"
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="5"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M12 2V4"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M12 20V22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M4 12L2 12"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M22 12L20 12"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19.7778 4.22266L17.5558 6.25424"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M4.22217 4.22266L6.44418 6.25424"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6.44434 17.5547L4.22211 19.7769"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19.7778 19.7773L17.5558 17.5551"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          className={className}
          fill="currentColor"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3C12.75 3.41421 12.4142 3.75 12 3.75C11.5858 3.75 11.25 3.41421 11.25 3V2C11.25 1.58579 11.5858 1.25 12 1.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H3C3.41421 11.25 3.75 11.5858 3.75 12C3.75 12.4142 3.41421 12.75 3 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM20.25 12C20.25 11.5858 20.5858 11.25 21 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H21C20.5858 12.75 20.25 12.4142 20.25 12ZM12 20.25C12.4142 20.25 12.75 20.5858 12.75 21V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V21C11.25 20.5858 11.5858 20.25 12 20.25Z"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path d="M4.39838 4.39936C4.69127 4.10646 5.16615 4.10646 5.45904 4.39936L5.85188 4.79219C6.14477 5.08509 6.14477 5.55996 5.85188 5.85285C5.55898 6.14575 5.08411 6.14575 4.79122 5.85285L4.39838 5.46002C4.10549 5.16712 4.10549 4.69225 4.39838 4.39936Z" />
            <path d="M19.6009 4.39962C19.8938 4.69251 19.8938 5.16738 19.6009 5.46028L19.2081 5.85311C18.9152 6.14601 18.4403 6.14601 18.1474 5.85311C17.8545 5.56022 17.8545 5.08535 18.1474 4.79245L18.5402 4.39962C18.8331 4.10672 19.308 4.10672 19.6009 4.39962Z" />
            <path d="M18.1474 18.1484C18.4403 17.8555 18.9152 17.8555 19.2081 18.1484L19.6009 18.5412C19.8938 18.8341 19.8938 19.309 19.6009 19.6019C19.308 19.8948 18.8331 19.8948 18.5402 19.6019L18.1474 19.209C17.8545 18.9161 17.8545 18.4413 18.1474 18.1484Z" />
            <path d="M5.85188 18.1486C6.14477 18.4415 6.14477 18.9164 5.85188 19.2093L5.45904 19.6021C5.16615 19.895 4.69127 19.895 4.39838 19.6021C4.10549 19.3092 4.10549 18.8344 4.39838 18.5415L4.79122 18.1486C5.08411 17.8557 5.55898 17.8557 5.85188 18.1486Z" />
          </g>
        </svg>
      )}
    </>
  );
};

export default IconSun;