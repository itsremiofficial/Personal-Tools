import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconHistory2: FC<IconProps> = ({
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
            d="M2 12.0005C2 17.5233 6.47715 22.0005 12 22.0005C17.5228 22.0005 22 17.5233 22 12.0005C22 6.47764 17.5228 2.00049 12 2.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 9.00049V13.0005H16"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="12.0005"
            r="10"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeDasharray="0.5 3.5"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.25 2.00049C11.25 1.58627 11.5858 1.25049 12 1.25049C17.9371 1.25049 22.75 6.06343 22.75 12.0005C22.75 17.9375 17.9371 22.7505 12 22.7505C6.06294 22.7505 1.25 17.9375 1.25 12.0005C1.25 11.5863 1.58579 11.2505 2 11.2505C2.41421 11.2505 2.75 11.5863 2.75 12.0005C2.75 17.1091 6.89137 21.2505 12 21.2505C17.1086 21.2505 21.25 17.1091 21.25 12.0005C21.25 6.89185 17.1086 2.75049 12 2.75049C11.5858 2.75049 11.25 2.4147 11.25 2.00049Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.09963 2.39808C9.24879 2.7845 9.05646 3.21868 8.67004 3.36785C8.52861 3.42245 8.38884 3.48042 8.25085 3.54168C7.87227 3.70975 7.42912 3.5391 7.26105 3.16051C7.09298 2.78193 7.26364 2.33878 7.64222 2.17071C7.80273 2.09946 7.96531 2.03201 8.12986 1.96849C8.51628 1.81932 8.95046 2.01166 9.09963 2.39808ZM5.64776 4.2408C5.93342 4.54075 5.92183 5.01549 5.62188 5.30115C5.51222 5.40559 5.40511 5.5127 5.30066 5.62237C5.015 5.92232 4.54027 5.93391 4.24032 5.64824C3.94037 5.36258 3.92878 4.88785 4.21445 4.5879C4.33571 4.46056 4.46008 4.3362 4.58741 4.21493C4.88736 3.92927 5.36209 3.94085 5.64776 4.2408ZM3.16002 7.26154C3.53861 7.42961 3.70926 7.87276 3.5412 8.25134C3.47994 8.38933 3.42196 8.52909 3.36736 8.67053C3.21819 9.05695 2.78401 9.24928 2.39759 9.10012C2.01117 8.95095 1.81884 8.51677 1.968 8.13035C2.03152 7.9658 2.09897 7.80321 2.17022 7.64271C2.33829 7.26412 2.78144 7.09347 3.16002 7.26154Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 8.25049C12.4142 8.25049 12.75 8.58627 12.75 9.00049V12.2505H16C16.4142 12.2505 16.75 12.5863 16.75 13.0005C16.75 13.4147 16.4142 13.7505 16 13.7505H12C11.5858 13.7505 11.25 13.4147 11.25 13.0005V9.00049C11.25 8.58627 11.5858 8.25049 12 8.25049Z"
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
            d="M11.25 2.00049C11.25 1.58627 11.5858 1.25049 12 1.25049C17.9371 1.25049 22.75 6.06343 22.75 12.0005C22.75 17.9375 17.9371 22.7505 12 22.7505C6.06294 22.7505 1.25 17.9375 1.25 12.0005C1.25 11.5863 1.58579 11.2505 2 11.2505C2.41421 11.2505 2.75 11.5863 2.75 12.0005C2.75 17.1091 6.89137 21.2505 12 21.2505C17.1086 21.2505 21.25 17.1091 21.25 12.0005C21.25 6.89185 17.1086 2.75049 12 2.75049C11.5858 2.75049 11.25 2.4147 11.25 2.00049ZM12 8.25049C12.4142 8.25049 12.75 8.58627 12.75 9.00049V12.2505H16C16.4142 12.2505 16.75 12.5863 16.75 13.0005C16.75 13.4147 16.4142 13.7505 16 13.7505H12C11.5858 13.7505 11.25 13.4147 11.25 13.0005V9.00049C11.25 8.58627 11.5858 8.25049 12 8.25049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.09958 2.39803C9.24874 2.78445 9.05641 3.21863 8.66999 3.3678C8.52855 3.42239 8.38879 3.48037 8.2508 3.54163C7.87221 3.7097 7.42906 3.53905 7.261 3.16046C7.09293 2.78188 7.26358 2.33873 7.64217 2.17066C7.80267 2.0994 7.96526 2.03196 8.1298 1.96844C8.51623 1.81927 8.95041 2.01161 9.09958 2.39803ZM5.6477 4.24075C5.93337 4.5407 5.92178 5.01544 5.62183 5.3011C5.51216 5.40554 5.40505 5.51265 5.30061 5.62232C5.01495 5.92227 4.54021 5.93385 4.24026 5.64819C3.94031 5.36253 3.92873 4.8878 4.21439 4.58785C4.33566 4.46051 4.46002 4.33615 4.58736 4.21488C4.88731 3.92922 5.36204 3.9408 5.6477 4.24075ZM3.15997 7.26149C3.53856 7.42955 3.70921 7.8727 3.54114 8.25129C3.47988 8.38928 3.42191 8.52904 3.36731 8.67048C3.21814 9.0569 2.78396 9.24923 2.39754 9.10006C2.01112 8.9509 1.81878 8.51672 1.96795 8.13029C2.03147 7.96575 2.09892 7.80316 2.17017 7.64266C2.33824 7.26407 2.78139 7.09342 3.15997 7.26149Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHistory2 as IconComponentType).keywords = [
  "history",
  "2",
  "chronicle",
  "story",
  "account",
  "historiography",
  "historical",
  "historically",
  "historian",
  "annals",
  "chronology",
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

export default IconHistory2 as IconComponentType;
