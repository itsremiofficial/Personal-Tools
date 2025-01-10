import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMicrophoneLarge: FC<IconProps> = ({
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
            d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V13C18 16.3137 15.3137 19 12 19C8.68629 19 6 16.3137 6 13V8Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 6.5C10 6.5 10.4727 6 12 6C13.5273 6 14 6.5 14 6.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 9.5C10 9.5 10.4727 9 12 9C13.5273 9 14 9.5 14 9.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M21 11V13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13V11"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0001 2C8.5589 2 5.76929 4.81123 5.76929 8.27907V12.9302C5.76929 16.3981 8.5589 19.2093 12.0001 19.2093C15.4412 19.2093 18.2308 16.3981 18.2308 12.9302V8.27907C18.2308 4.81124 15.4412 2 12.0001 2ZM9.67828 7.39068C9.40044 7.12597 9.38816 6.6844 9.65084 6.40441L10.1539 6.88372C9.65084 6.40441 9.65159 6.40361 9.65159 6.40361L9.65236 6.40279L9.65393 6.40114L9.65722 6.3977L9.66437 6.39036C9.6694 6.38527 9.67495 6.37977 9.68104 6.37391C9.69323 6.36218 9.70757 6.349 9.72418 6.33461C9.75744 6.3058 9.79967 6.27232 9.8519 6.23613C9.95664 6.16357 10.0998 6.0814 10.2888 6.00438C10.6676 5.84997 11.219 5.72093 12.0001 5.72093C12.7811 5.72093 13.3325 5.84997 13.7114 6.00438C13.9004 6.0814 14.0435 6.16357 14.1482 6.23613C14.2004 6.27232 14.2427 6.3058 14.2759 6.33461C14.2925 6.349 14.3069 6.36218 14.3191 6.37391C14.3252 6.37977 14.3307 6.38527 14.3357 6.39036L14.3429 6.3977L14.3462 6.40114L14.3478 6.40279L14.3485 6.40361C14.3485 6.40361 14.3493 6.40441 13.8563 6.87412L14.3493 6.40441C14.612 6.6844 14.5997 7.12597 14.3218 7.39068C14.0536 7.64624 13.6359 7.64354 13.371 7.39112L13.3638 7.38596C13.3427 7.37132 13.2886 7.33721 13.1922 7.29795C13.0005 7.2198 12.6288 7.11628 12.0001 7.11628C11.3713 7.11628 10.9996 7.2198 10.8079 7.29795C10.7115 7.33721 10.6575 7.37132 10.6363 7.38596L10.6291 7.39112C10.3642 7.64354 9.9465 7.64624 9.67828 7.39068ZM9.67828 10.1814C9.40044 9.91667 9.38816 9.4751 9.65084 9.19511L10.1539 9.67442C9.65084 9.19511 9.65159 9.1943 9.65159 9.1943L9.65236 9.19349L9.65393 9.19183L9.65722 9.1884L9.66437 9.18106C9.6694 9.17597 9.67495 9.17047 9.68104 9.16461C9.69323 9.15288 9.70757 9.13969 9.72418 9.1253C9.75744 9.0965 9.79967 9.06301 9.8519 9.02683C9.95664 8.95427 10.0998 8.8721 10.2888 8.79507C10.6676 8.64067 11.219 8.51163 12.0001 8.51163C12.7811 8.51163 13.3325 8.64067 13.7114 8.79507C13.9004 8.8721 14.0435 8.95427 14.1482 9.02683C14.2004 9.06301 14.2427 9.0965 14.2759 9.1253C14.2925 9.13969 14.3069 9.15288 14.3191 9.16461C14.3252 9.17047 14.3307 9.17597 14.3357 9.18106L14.3429 9.1884L14.3462 9.19183L14.3478 9.19349L14.3485 9.1943C14.3485 9.1943 14.3493 9.1951 13.8563 9.66482L14.3493 9.19511C14.612 9.4751 14.5997 9.91667 14.3218 10.1814C14.0536 10.4369 13.6359 10.4342 13.371 10.1818L13.3638 10.1767C13.3427 10.162 13.2886 10.1279 13.1922 10.0886C13.0005 10.0105 12.6288 9.90698 12.0001 9.90698C11.3713 9.90698 10.9996 10.0105 10.8079 10.0886C10.7115 10.1279 10.6575 10.162 10.6363 10.1767L10.6291 10.1818C10.3642 10.4342 9.9465 10.4369 9.67828 10.1814Z"
            fill="currentColor"
          />
          <path
            d="M9.65116 9.19488C9.38848 9.47487 9.40077 9.91644 9.6786 10.1812C9.94683 10.4367 10.3645 10.434 10.6294 10.1816L10.6366 10.1764C10.6578 10.1618 10.7119 10.1277 10.8082 10.0884C10.9999 10.0103 11.3716 9.90675 12.0004 9.90675C12.6291 9.90675 13.0008 10.0103 13.1926 10.0884C13.2889 10.1277 13.343 10.1618 13.3641 10.1764L13.3713 10.1816C13.6363 10.434 14.0539 10.4367 14.3222 10.1812C14.6 9.91644 14.6123 9.47487 14.3496 9.19488L13.8566 9.66459C14.3496 9.19488 14.3488 9.19408 14.3488 9.19408L14.3481 9.19326L14.3465 9.19161L14.3432 9.18817L14.3361 9.18083C14.331 9.17574 14.3255 9.17024 14.3194 9.16438C14.3072 9.15265 14.2929 9.13947 14.2763 9.12508C14.243 9.09627 14.2008 9.06279 14.1485 9.0266C14.0438 8.95404 13.9007 8.87187 13.7117 8.79485C13.3328 8.64044 12.7814 8.5114 12.0004 8.5114C11.2193 8.5114 10.6679 8.64044 10.2891 8.79485C10.1001 8.87187 9.95696 8.95404 9.85222 9.0266C9.8 9.06279 9.75776 9.09627 9.7245 9.12508C9.70789 9.13947 9.69355 9.15265 9.68136 9.16438C9.67527 9.17024 9.66972 9.17574 9.66469 9.18083L9.65754 9.18817L9.65425 9.19161L9.65268 9.19326L9.65192 9.19408C9.65192 9.19408 9.65116 9.19488 10.1542 9.67419L9.65116 9.19488Z"
            fill="currentColor"
          />
          <path
            d="M9.65116 6.40418C9.38848 6.68417 9.40077 7.12574 9.6786 7.39046C9.94683 7.64602 10.3645 7.64332 10.6294 7.39089L10.6366 7.38573C10.6578 7.37109 10.7119 7.33698 10.8082 7.29772C10.9999 7.21957 11.3716 7.11605 12.0004 7.11605C12.6291 7.11605 13.0008 7.21957 13.1926 7.29772C13.2889 7.33698 13.343 7.37109 13.3641 7.38573L13.3713 7.39089C13.6363 7.64332 14.0539 7.64602 14.3222 7.39046C14.6 7.12574 14.6123 6.68417 14.3496 6.40418L13.8566 6.87389C14.3496 6.40418 14.3488 6.40338 14.3488 6.40338L14.3481 6.40257L14.3465 6.40091L14.3432 6.39747L14.3361 6.39014C14.331 6.38504 14.3255 6.37955 14.3194 6.37368C14.3072 6.36195 14.2929 6.34877 14.2763 6.33438C14.243 6.30557 14.2008 6.27209 14.1485 6.23591C14.0438 6.16334 13.9007 6.08117 13.7117 6.00415C13.3328 5.84974 12.7814 5.7207 12.0004 5.7207C11.2193 5.7207 10.6679 5.84974 10.2891 6.00415C10.1001 6.08117 9.95696 6.16334 9.85222 6.23591C9.8 6.27209 9.75776 6.30557 9.7245 6.33438C9.70789 6.34877 9.69355 6.36195 9.68136 6.37368C9.67527 6.37955 9.66972 6.38504 9.66469 6.39014L9.65754 6.39747L9.65425 6.40091L9.65268 6.40257L9.65192 6.40338C9.65192 6.40338 9.65116 6.40418 10.1542 6.88349L9.65116 6.40418Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.69231 10.3721C4.07466 10.3721 4.38462 10.6844 4.38462 11.0697V12.9302C4.38462 17.1687 7.79414 20.6046 12 20.6046C16.2059 20.6046 19.6154 17.1687 19.6154 12.9302V11.0697C19.6154 10.6844 19.9253 10.3721 20.3077 10.3721C20.69 10.3721 21 10.6844 21 11.0697V12.9302C21 17.9393 16.9706 22 12 22C7.02944 22 3 17.9393 3 12.9302V11.0697C3 10.6844 3.30996 10.3721 3.69231 10.3721Z"
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
            d="M3.69231 10.3721C4.07466 10.3721 4.38462 10.6845 4.38462 11.0698V12.9302C4.38462 17.1687 7.79414 20.6047 12 20.6047C16.2059 20.6047 19.6154 17.1687 19.6154 12.9302V11.0698C19.6154 10.6845 19.9253 10.3721 20.3077 10.3721C20.69 10.3721 21 10.6845 21 11.0698V12.9302C21 17.9393 16.9706 22 12 22C7.02944 22 3 17.9393 3 12.9302V11.0698C3 10.6845 3.30996 10.3721 3.69231 10.3721Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C8.55884 2 5.76923 4.81123 5.76923 8.27907V12.9302C5.76923 16.3981 8.55884 19.2093 12 19.2093C15.4412 19.2093 18.2308 16.3981 18.2308 12.9302V8.27907C18.2308 4.81124 15.4412 2 12 2ZM9.67822 7.39068C9.40039 7.12597 9.3881 6.6844 9.65078 6.40441L10.1538 6.88372C9.65078 6.40441 9.65154 6.40361 9.65154 6.40361L9.65231 6.40279L9.65388 6.40114L9.65716 6.3977L9.66431 6.39036C9.66934 6.38527 9.67489 6.37977 9.68099 6.37391C9.69318 6.36218 9.70751 6.349 9.72413 6.33461C9.75739 6.3058 9.79962 6.27232 9.85184 6.23613C9.95658 6.16357 10.0997 6.0814 10.2887 6.00438C10.6676 5.84997 11.2189 5.72093 12 5.72093C12.7811 5.72093 13.3324 5.84997 13.7113 6.00438C13.9003 6.0814 14.0434 6.16357 14.1482 6.23613C14.2004 6.27232 14.2426 6.3058 14.2759 6.33461C14.2925 6.349 14.3068 6.36218 14.319 6.37391C14.3251 6.37977 14.3307 6.38527 14.3357 6.39036L14.3428 6.3977L14.3461 6.40114L14.3477 6.40279L14.3485 6.40361C14.3485 6.40361 14.3492 6.40441 13.8562 6.87412L14.3492 6.40441C14.6119 6.6844 14.5996 7.12597 14.3218 7.39068C14.0536 7.64624 13.6359 7.64354 13.371 7.39112L13.3637 7.38596C13.3426 7.37132 13.2885 7.33721 13.1922 7.29795C13.0004 7.2198 12.6287 7.11628 12 7.11628C11.3713 7.11628 10.9996 7.2198 10.8078 7.29795C10.7115 7.33721 10.6574 7.37132 10.6363 7.38596L10.629 7.39112C10.3641 7.64354 9.94645 7.64624 9.67822 7.39068ZM9.67822 10.1814C9.40039 9.91667 9.3881 9.4751 9.65078 9.19511L10.1538 9.67442C9.65078 9.19511 9.65154 9.1943 9.65154 9.1943L9.65231 9.19349L9.65388 9.19183L9.65716 9.1884L9.66431 9.18106C9.66934 9.17597 9.67489 9.17047 9.68099 9.16461C9.69318 9.15288 9.70751 9.13969 9.72413 9.1253C9.75739 9.0965 9.79962 9.06301 9.85184 9.02683C9.95658 8.95427 10.0997 8.8721 10.2887 8.79507C10.6676 8.64067 11.2189 8.51163 12 8.51163C12.7811 8.51163 13.3324 8.64067 13.7113 8.79507C13.9003 8.8721 14.0434 8.95427 14.1482 9.02683C14.2004 9.06301 14.2426 9.0965 14.2759 9.1253C14.2925 9.13969 14.3068 9.15288 14.319 9.16461C14.3251 9.17047 14.3307 9.17597 14.3357 9.18106L14.3428 9.1884L14.3461 9.19183L14.3477 9.19349L14.3485 9.1943C14.3485 9.1943 14.3492 9.1951 13.8562 9.66482L14.3492 9.19511C14.6119 9.4751 14.5996 9.91667 14.3218 10.1814C14.0536 10.4369 13.6359 10.4342 13.371 10.1818L13.3637 10.1767C13.3426 10.162 13.2885 10.1279 13.1922 10.0886C13.0004 10.0105 12.6287 9.90698 12 9.90698C11.3713 9.90698 10.9996 10.0105 10.8078 10.0886C10.7115 10.1279 10.6574 10.162 10.6363 10.1767L10.629 10.1818C10.3641 10.4342 9.94645 10.4369 9.67822 10.1814Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMicrophoneLarge as IconComponentType).keywords = [
  "microphone",
  "large",
  "mike",
  "loudspeaker",
  "mic",
  "wire",
  "speaker",
  "floor",
  "lavalier",
  "lavaliere",
  "boom",
  "great",
  "large-scale",
  "vast",
  "larger-than-life",
  "colossal",
  "huge",
  "prodigious",
  "humongous",
  "massive",
];

export default IconMicrophoneLarge as IconComponentType;
