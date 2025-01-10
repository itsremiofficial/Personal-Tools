import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconMagicStick2: FC<IconProps> = ({
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
            d="M13.0356 3.6516C15.2506 2.33983 16.3582 1.68395 17.1715 2.14931C17.9849 2.61468 17.9655 3.8931 17.9266 6.44993L17.9166 7.11142C17.9055 7.83799 17.9 8.20128 18.0354 8.52053C18.1708 8.83978 18.4318 9.07886 18.9538 9.55701L19.4291 9.99233C21.266 11.675 22.1845 12.5163 21.9691 13.4611C21.7538 14.4059 20.5474 14.8284 18.1344 15.6735L17.5101 15.8921C16.8244 16.1322 16.4816 16.2523 16.2186 16.4931C15.9555 16.7338 15.8021 17.0679 15.4953 17.7362L15.2159 18.3446C14.1362 20.6963 13.5963 21.8722 12.6498 21.9907C11.7034 22.1092 10.9772 21.092 9.52473 19.0574L9.14897 18.5311C8.73623 17.9529 8.52986 17.6638 8.2319 17.4934C7.93394 17.3229 7.57813 17.2903 6.8665 17.2252L6.21861 17.1659C3.71436 16.9367 2.46223 16.8221 2.0926 15.9505C1.72297 15.079 2.48063 14.0278 3.99594 11.9253L4.38797 11.3813C4.81858 10.7839 5.03388 10.4851 5.11275 10.139C5.19162 9.79295 5.12513 9.43869 4.99216 8.73015L4.87109 8.08509C4.40313 5.59173 4.16916 4.34505 4.88716 3.68788C5.60517 3.03072 6.79965 3.39828 9.18861 4.13342L9.80666 4.32361C10.4855 4.53251 10.825 4.63696 11.1717 4.59353C11.5184 4.55011 11.8331 4.36373 12.4625 3.99097L13.0356 3.6516Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M17.5303 16.4697C17.2374 16.1768 16.7626 16.1768 16.4697 16.4697C16.1768 16.7626 16.1768 17.2374 16.4697 17.5303L17.5303 16.4697ZM20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L20.4697 21.5303ZM16.4697 17.5303L20.4697 21.5303L21.5303 20.4697L17.5303 16.4697L16.4697 17.5303Z"
            fill="currentColor"
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
            d="M16.7137 2.12656C15.8784 1.69663 14.7918 2.39036 12.6187 3.77783L12.0565 4.13679C11.4389 4.53106 11.1301 4.7282 10.7836 4.78478C10.4371 4.84135 10.092 4.75097 9.40191 4.57019L8.77361 4.4056C6.34506 3.76944 5.13079 3.45136 4.43551 4.1312C3.74024 4.81103 4.02442 6.03855 4.59279 8.4936L4.73983 9.12875C4.90135 9.82639 4.9821 10.1752 4.91653 10.5216C4.85096 10.868 4.64648 11.1727 4.23754 11.7821L3.86521 12.3369C2.42609 14.4815 1.70653 15.5538 2.11218 16.4039C2.51782 17.254 3.78002 17.3189 6.30442 17.4487L6.95753 17.4823C7.67487 17.5192 8.03356 17.5377 8.33956 17.6952C8.64557 17.8526 8.86425 18.1314 9.30163 18.6888L9.69981 19.1963C11.2389 21.1578 12.0085 22.1386 12.9545 21.9842C13.9005 21.8297 14.3964 20.6423 15.3882 18.2675L15.6448 17.6531C15.9266 16.9783 16.0675 16.6409 16.3222 16.3918C16.5769 16.1428 16.9165 16.0104 17.5958 15.7454L18.2142 15.5043C20.6046 14.572 21.7997 14.1059 21.9787 13.1603C22.1577 12.2148 21.202 11.416 19.2906 9.81846L18.7961 9.40516C18.2529 8.9512 17.9813 8.7242 17.8327 8.4128C17.6841 8.10139 17.6753 7.74082 17.6578 7.01967L17.6418 6.36312C17.58 3.82537 17.5491 2.5565 16.7137 2.12656Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15.9307 16.9913C16.057 16.7234 16.169 16.5416 16.3222 16.3918C16.4939 16.2239 16.7043 16.109 17.0314 15.9707L21.5303 20.4696C21.8232 20.7625 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7625 21.8232 20.4697 21.5303L15.9307 16.9913Z"
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
            d="M13.0356 3.6516L12.4625 3.99097C11.8331 4.36373 11.5184 4.55011 11.1717 4.59353C10.825 4.63696 10.4855 4.53251 9.80666 4.3236L9.18861 4.13342C6.79965 3.39828 5.60517 3.03072 4.88716 3.68788C4.16916 4.34505 4.40313 5.59173 4.87109 8.08509L4.99216 8.73015C5.12513 9.43868 5.19162 9.79295 5.11275 10.139C5.03388 10.4851 4.81858 10.7839 4.38797 11.3813L3.99594 11.9253C2.48063 14.0278 1.72297 15.079 2.0926 15.9505C2.46223 16.8221 3.71435 16.9367 6.2186 17.1659L6.8665 17.2252C7.57812 17.2903 7.93394 17.3229 8.2319 17.4934C8.52986 17.6638 8.73623 17.9529 9.14897 18.5311L9.52473 19.0574C10.9772 21.092 11.7034 22.1092 12.6498 21.9907C13.5963 21.8722 14.1362 20.6963 15.2159 18.3446L15.4953 17.7362C15.6521 17.3947 15.7688 17.1404 15.8806 16.9413L20.4697 21.5303C20.7626 21.8232 21.2374 21.8232 21.5303 21.5303C21.8232 21.2374 21.8232 20.7626 21.5303 20.4697L17.0986 16.0379C17.2206 15.9935 17.3568 15.9458 17.5101 15.8921L18.1344 15.6735C20.5474 14.8284 21.7538 14.4059 21.9691 13.4611C22.1845 12.5163 21.266 11.675 19.4291 9.99234L18.9538 9.55701C18.4318 9.07887 18.1708 8.83978 18.0354 8.52053C17.9 8.20128 17.9055 7.838 17.9166 7.11145L17.9266 6.44993C17.9655 3.8931 17.9849 2.61468 17.1715 2.14931C16.3582 1.68395 15.2506 2.33983 13.0356 3.6516Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMagicStick2 as IconComponentType).keywords = [
  "magic",
  "stick",
  "2",
  "sorcerous",
  "wizardly",
  "wizard",
  "supernatural",
  "magic trick",
  "legerdemain",
  "witching",
  "charming",
  "illusion",
  "cling",
  "billy",
  "deposit",
  "pin",
  "wedge",
  "peg",
  "adhere",
  "truncheon",
  "nightstick",
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

export default IconMagicStick2 as IconComponentType;
