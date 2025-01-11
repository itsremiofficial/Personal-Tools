import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBookBookmarkMinimalistic: FC<IconProps> = ({
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
            d="M4 8.00061C4 5.17218 4 3.75797 4.87868 2.87929C5.75736 2.00061 7.17157 2.00061 10 2.00061H14C16.8284 2.00061 18.2426 2.00061 19.1213 2.87929C20 3.75797 20 5.17218 20 8.00061V16.0006C20 18.829 20 20.2433 19.1213 21.1219C18.2426 22.0006 16.8284 22.0006 14 22.0006H10C7.17157 22.0006 5.75736 22.0006 4.87868 21.1219C4 20.2433 4 18.829 4 16.0006V8.00061Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M19.8978 16.0006H7.89778C6.96781 16.0006 6.50282 16.0006 6.12132 16.1028C5.08604 16.3802 4.2774 17.1889 4 18.2242"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7 16.0006V2.50061"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M13 16.0006V19.5315C13 19.8071 13 19.9449 12.9051 20.0006C12.8103 20.0563 12.6806 19.9947 12.4211 19.8714L11.1789 19.2814C11.0911 19.2397 11.0472 19.2188 11 19.2188C10.9528 19.2188 10.9089 19.2397 10.8211 19.2814L9.57889 19.8714C9.31943 19.9947 9.18971 20.0563 9.09485 20.0006C9 19.9449 9 19.8071 9 19.5315V16.4506"
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
            d="M7.31034 16.2308C7.32206 16.2308 7.33382 16.2308 7.34563 16.2308L20 16.2308V7.97722C20 6.3431 19.9982 5.20341 19.8862 4.3435C19.7773 3.50816 19.5782 3.0658 19.2728 2.75072C18.9674 2.43565 18.5387 2.23022 17.729 2.11791C16.8955 2.0023 15.7908 2.00049 14.2069 2.00049H9.7931C8.79138 2.00049 7.98133 2.00121 7.31034 2.03099V16.2308Z"
            fill="currentColor"
          />
          <path
            d="M5.65517 2.24007C5.2225 2.35912 4.9438 2.52744 4.72718 2.75093C4.42179 3.066 4.22268 3.50836 4.11382 4.34371C4.00176 5.20362 4 6.34331 4 7.97742V17.0005C4.38867 16.7203 4.82674 16.507 5.29899 16.3765C5.41296 16.345 5.53103 16.3203 5.65517 16.3009V2.24007Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6.27103 2.11527C5.46135 2.22505 5.03258 2.42584 4.72718 2.73381C4.42179 3.04178 4.22268 3.47417 4.11382 4.29069C4.00176 5.13122 4 6.24522 4 7.8425V19.7008C4 19.5691 4.02435 19.4372 4.09696 19.2402C4.22351 18.8968 4.27837 18.843 4.38811 18.7352C4.71351 18.4156 5.15982 18.179 5.67321 18.0686C5.96352 18.0062 6.34236 18.0005 7.42598 18.0005H8V20.0288C8 20.3059 8 20.4445 8.09485 20.5005C8.18971 20.5565 8.31943 20.4945 8.57888 20.3706L9.82112 19.7771C9.9089 19.7352 9.95279 19.7142 10 19.7142C10.0472 19.7142 10.0911 19.7352 10.1789 19.7771L11.4211 20.3706C11.6806 20.4945 11.8103 20.5565 11.9051 20.5005C12 20.4445 12 20.3059 12 20.0288V18.0005H20L20 7.8425C20 6.24522 19.9982 5.13122 19.8862 4.29069C19.7773 3.47417 19.5782 3.04178 19.2728 2.73381C18.9674 2.42584 18.5387 2.22505 17.729 2.11527C16.8955 2.00226 15.7908 2.00049 14.2069 2.00049H9.7931C8.2092 2.00049 7.10452 2.00226 6.27103 2.11527Z"
            fill="currentColor"
          />
          <path
            d="M8 18.0005H7.42598C6.34236 18.0005 5.96352 18.0062 5.67321 18.0686C5.15982 18.179 4.71351 18.4156 4.38811 18.7352C4.27837 18.843 4.22351 18.8968 4.09696 19.2402C3.97041 19.5836 3.99045 19.7293 4.03053 20.0205C4.03761 20.0719 4.04522 20.1221 4.05343 20.171C4.16271 20.8233 4.36259 21.1687 4.66916 21.4147C4.97573 21.6607 5.40616 21.8211 6.21896 21.9088C7.05566 21.9991 8.1646 22.0005 9.75461 22.0005H14.1854C15.7754 22.0005 16.8844 21.9991 17.7211 21.9088C18.5339 21.8211 18.9643 21.6607 19.2709 21.4147C19.5774 21.1687 19.7773 20.8233 19.8866 20.171C19.9784 19.6233 19.9965 18.9301 20 18.0005H12V20.0288C12 20.3059 12 20.4445 11.9051 20.5005C11.8103 20.5565 11.6806 20.4945 11.4211 20.3706L10.1789 19.7771C10.0911 19.7352 10.0472 19.7142 10 19.7142C9.95279 19.7142 9.9089 19.7352 9.82112 19.7771L8.57888 20.3706C8.31943 20.4945 8.18971 20.5565 8.09485 20.5005C8 20.4445 8 20.3059 8 20.0288V18.0005Z"
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
            d="M5.65517 2.22781C5.2225 2.34086 4.9438 2.5007 4.72718 2.71293C4.42179 3.01213 4.22268 3.43221 4.11382 4.22548C4.00176 5.04208 4 6.12436 4 7.67616V16.2447C4.38867 15.9786 4.82674 15.7761 5.29899 15.6521C5.41296 15.6222 5.53103 15.5988 5.65517 15.5804V2.22781Z"
            fill="currentColor"
          />
          <path
            d="M7.31034 15.514C7.32206 15.514 7.33382 15.514 7.34563 15.514L20 15.514V7.67616C20 6.12436 19.9982 5.04208 19.8862 4.22548C19.7773 3.43221 19.5782 3.01213 19.2728 2.71293C18.9674 2.41373 18.5387 2.21865 17.729 2.112C16.8955 2.00221 15.7908 2.00049 14.2069 2.00049H9.7931C8.79138 2.00049 7.98133 2.00118 7.31034 2.02946V15.514Z"
            fill="currentColor"
          />
          <path
            d="M8.68976 17.1356H7.47352C6.39406 17.1356 6.01668 17.1426 5.72748 17.2185C4.93375 17.4269 4.30099 18.0049 4.02963 18.7563C4.04641 19.1387 4.0727 19.4751 4.11393 19.7755C4.22279 20.5688 4.4219 20.9888 4.72729 21.288C5.03269 21.5872 5.46145 21.7823 6.27114 21.889C7.10463 21.9988 8.2093 22.0005 9.79321 22.0005H14.207C15.7909 22.0005 16.8956 21.9988 17.7291 21.889C18.5388 21.7823 18.9675 21.5872 19.2729 21.288C19.5783 20.9888 19.7774 20.5688 19.8863 19.7755C19.9777 19.1093 19.9957 18.2662 19.9993 17.1356H13.1036V20.1422C13.1036 20.4402 13.1036 20.5891 12.9989 20.6493C12.8942 20.7095 12.7511 20.6429 12.4648 20.5097L11.0941 19.8718C10.9972 19.8267 10.9488 19.8041 10.8967 19.8041C10.8446 19.8041 10.7961 19.8267 10.6993 19.8718L9.32853 20.5097C9.04224 20.6429 8.8991 20.7095 8.79443 20.6493C8.68976 20.5891 8.68976 20.4402 8.68976 20.1422V17.1356Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBookBookmarkMinimalistic as IconComponentType).keywords = [
  "book",
  "bookmark",
  "minimalistic",
  "daybook",
  "record",
  "script",
  "playscript",
  "ledger",
  "account book",
  "volume",
  "reserve",
  "hold",
  "bookmarker",
  "marking",
  "caller",
  "dialing",
  "dialer",
  "maker",
  "add",
  "marker",
  "make",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
];

export default IconBookBookmarkMinimalistic as IconComponentType;