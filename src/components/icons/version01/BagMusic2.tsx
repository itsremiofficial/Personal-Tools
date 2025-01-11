import { FC } from "react";

const IconBagMusic2: FC<IconProps> = ({
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
            d="M3.74157 20.555C4.94119 22.0005 7.17389 22.0005 11.6393 22.0005H12.3605C16.8259 22.0005 19.0586 22.0005 20.2582 20.555M3.74157 20.555C2.54194 19.1096 2.9534 16.9151 3.77633 12.5262C4.36155 9.405 4.65416 7.84441 5.76506 6.92245M3.74157 20.555C3.74156 20.555 3.74157 20.555 3.74157 20.555ZM20.2582 20.555C21.4578 19.1096 21.0464 16.9151 20.2235 12.5262C19.6382 9.405 19.3456 7.84441 18.2347 6.92245M20.2582 20.555C20.2582 20.555 20.2582 20.555 20.2582 20.555ZM18.2347 6.92245C17.1238 6.00049 15.5361 6.00049 12.3605 6.00049H11.6393C8.46374 6.00049 6.87596 6.00049 5.76506 6.92245M18.2347 6.92245C18.2347 6.92245 18.2347 6.92245 18.2347 6.92245ZM5.76506 6.92245C5.76506 6.92245 5.76506 6.92245 5.76506 6.92245Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9 6.00049V5.00049C9 3.34363 10.3431 2.00049 12 2.00049C13.6569 2.00049 15 3.34363 15 5.00049V6.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M13 16.0005C13 17.1051 12.1046 18.0005 11 18.0005C9.89543 18.0005 9 17.1051 9 16.0005C9 14.8959 9.89543 14.0005 11 14.0005C12.1046 14.0005 13 14.8959 13 16.0005ZM13 16.0005V10.0005C13 11.1051 13.8954 12.0005 15 12.0005"
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
            d="M4.08231 10.8948C4.52122 8.55388 4.74068 7.38343 5.57386 6.69196C6.40703 6.00049 7.59787 6.00049 9.97954 6.00049H14.0204C16.4021 6.00049 17.5929 6.00049 18.4261 6.69196C19.2593 7.38343 19.4787 8.55387 19.9177 10.8948L20.6677 14.8948C21.2849 18.1865 21.5935 19.8323 20.6937 20.9164C19.794 22.0005 18.1195 22.0005 14.7704 22.0005H9.22954C5.88048 22.0005 4.20595 22.0005 3.30624 20.9164C2.40652 19.8323 2.71512 18.1865 3.33231 14.8948L4.08231 10.8948Z"
            fill="currentColor"
          />
          <path
            d="M9.75 5.00049C9.75 3.75785 10.7574 2.75049 12 2.75049C13.2426 2.75049 14.25 3.75785 14.25 5.00049V6.00049C14.25 6.00048 14.25 6.0005 14.25 6.00049C14.816 6.00067 15.3119 6.00223 15.7499 6.01537C15.75 6.01042 15.75 6.00546 15.75 6.00049V5.00049C15.75 2.92942 14.0711 1.25049 12 1.25049C9.92893 1.25049 8.25 2.92942 8.25 5.00049V6.00049C8.25 6.00547 8.25005 6.01044 8.25015 6.0154C8.68814 6.00224 9.18397 6.00069 9.75 6.00051C9.75 6.0005 9.75 6.00052 9.75 6.00051V5.00049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.75 10.0005C13.75 9.58627 13.4142 9.25049 13 9.25049C12.5858 9.25049 12.25 9.58627 12.25 10.0005V13.5503C11.875 13.3586 11.4501 13.2505 11 13.2505C9.48122 13.2505 8.25 14.4817 8.25 16.0005C8.25 17.5193 9.48122 18.7505 11 18.7505C12.5188 18.7505 13.75 17.5193 13.75 16.0005V12.4506C14.125 12.6423 14.5499 12.7505 15 12.7505C15.4142 12.7505 15.75 12.4147 15.75 12.0005C15.75 11.5863 15.4142 11.2505 15 11.2505C14.3096 11.2505 13.75 10.6908 13.75 10.0005ZM11 14.7505C10.3096 14.7505 9.75 15.3101 9.75 16.0005C9.75 16.6908 10.3096 17.2505 11 17.2505C11.6904 17.2505 12.25 16.6908 12.25 16.0005C12.25 15.3101 11.6904 14.7505 11 14.7505Z"
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
            d="M11 14.7505C10.3096 14.7505 9.74998 15.3101 9.74998 16.0005C9.74998 16.6908 10.3096 17.2505 11 17.2505C11.6903 17.2505 12.25 16.6908 12.25 16.0005C12.25 15.3101 11.6903 14.7505 11 14.7505Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25014 6.01538C8.25005 6.01043 8.25 6.00546 8.25 6.00049V5.00049C8.25 2.92942 9.92893 1.25049 12 1.25049C14.0711 1.25049 15.75 2.92942 15.75 5.00049V6.00049C15.75 6.00547 15.75 6.01043 15.7499 6.01538C17.0371 6.05402 17.8248 6.19289 18.4261 6.69196C19.2593 7.38343 19.4787 8.55387 19.9177 10.8948L20.6677 14.8948C21.2849 18.1865 21.5934 19.8323 20.6937 20.9164C19.794 22.0005 18.1195 22.0005 14.7704 22.0005H9.22954C5.88048 22.0005 4.20595 22.0005 3.30624 20.9164C2.40652 19.8323 2.71512 18.1865 3.33231 14.8948L4.08231 10.8948C4.52122 8.55388 4.74068 7.38343 5.57386 6.69196C6.17521 6.19288 6.96288 6.05402 8.25014 6.01538ZM9.75 5.00049C9.75 3.75785 10.7574 2.75049 12 2.75049C13.2426 2.75049 14.25 3.75785 14.25 5.00049V6.00049C14.25 6.00048 14.25 6.0005 14.25 6.00049C14.1747 6.00046 14.0982 6.00049 14.0204 6.00049H9.97954C9.90177 6.00049 9.82526 6.00049 9.75 6.00051C9.75 6.0005 9.75 6.00052 9.75 6.00051V5.00049ZM13.75 10.0005C13.75 9.58628 13.4142 9.25049 13 9.25049C12.5858 9.25049 12.25 9.58628 12.25 10.0005V13.5503C11.8749 13.3586 11.4501 13.2505 11 13.2505C9.4812 13.2505 8.24998 14.4817 8.24998 16.0005C8.24998 17.5193 9.4812 18.7505 11 18.7505C12.5188 18.7505 13.75 17.5193 13.75 16.0005V12.4506C14.125 12.6423 14.5499 12.7505 15 12.7505C15.4142 12.7505 15.75 12.4147 15.75 12.0005C15.75 11.5863 15.4142 11.2505 15 11.2505C14.3096 11.2505 13.75 10.6908 13.75 10.0005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBagMusic2 as IconComponent).keywords = [
  "bag",
  "music",
  "2",
  "purse",
  "pocketbook",
  "handbag",
  "pocket",
  "bagful",
  "suitcase",
  "dish",
  "grip",
  "cup of tea",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconBagMusic2 as IconComponent;