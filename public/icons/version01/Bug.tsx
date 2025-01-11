import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBug: FC<IconProps> = ({
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
            d="M19 15.0004V11.9379C19 9.76325 17.2371 8.00037 15.0625 8.00037H8.9375C6.76288 8.00037 5 9.76325 5 11.9379V15.0004C5 18.8664 8.13401 22.0004 12 22.0004C15.866 22.0004 19 18.8664 19 15.0004Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M16.5 8.50037V7.50037C16.5 5.01508 14.4853 3.00037 12 3.00037C9.51472 3.00037 7.5 5.01508 7.5 7.50037V8.50037"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19 14.0004H22"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5 14.0004H2"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14.5 3.50037L17 2.00037"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9.5 3.50037L7 2.00037"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M20.5 20.0006L18.5 19.2006"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M20.5 8.00017L18.5 8.80017"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M3.5 20.0006L5.5 19.2006"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M3.5 8.00017L5.5 8.80017"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 21.5004V15.0004"
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
            d="M19 11.9379V15.0004C19 18.613 16.2633 21.5864 12.75 21.9607V15.0004C12.75 14.5862 12.4142 14.2504 12 14.2504C11.5858 14.2504 11.25 14.5862 11.25 15.0004V21.9607C7.73668 21.5864 5 18.613 5 15.0004V11.9379C5 10.2705 6.03633 8.84525 7.5 8.27101C7.94533 8.0963 8.43021 8.00037 8.9375 8.00037H15.0625C15.5698 8.00037 16.0547 8.0963 16.5 8.27101C17.9637 8.84525 19 10.2705 19 11.9379Z"
            fill="currentColor"
          />
          <path
            d="M19 14.7504V13.2504H22C22.4142 13.2504 22.75 13.5861 22.75 14.0004C22.75 14.4146 22.4142 14.7504 22 14.7504H19Z"
            fill="currentColor"
          />
          <path
            d="M17.4955 19.3367C17.8063 18.9433 18.0758 18.5157 18.2974 18.0606L20.8354 19.3298C21.2059 19.515 21.3561 19.9655 21.1708 20.336C20.9855 20.7065 20.535 20.8566 20.1646 20.6714L17.4955 19.3367Z"
            fill="currentColor"
          />
          <path
            d="M5.70259 18.0606C5.92418 18.5157 6.19367 18.9433 6.50449 19.3367L3.83545 20.6714C3.46497 20.8566 3.01446 20.7065 2.8292 20.336C2.64394 19.9655 2.79408 19.515 3.16455 19.3298L5.70259 18.0606Z"
            fill="currentColor"
          />
          <path
            d="M5 13.2504H2C1.58579 13.2504 1.25 13.5861 1.25 14.0004C1.25 14.4146 1.58579 14.7504 2 14.7504H5V13.2504Z"
            fill="currentColor"
          />
          <path
            d="M17.3535 8.73509L20.1646 7.32936C20.535 7.1441 20.9855 7.29424 21.1708 7.66472C21.3561 8.03519 21.2059 8.48571 20.8354 8.67097L18.4195 9.87908C18.1437 9.43031 17.7805 9.04106 17.3535 8.73509Z"
            fill="currentColor"
          />
          <path
            d="M6.64654 8.73509C6.21954 9.04106 5.85627 9.43031 5.58046 9.87908L3.16455 8.67097C2.79408 8.48571 2.64394 8.03519 2.8292 7.66472C3.01446 7.29424 3.46497 7.1441 3.83545 7.32936L6.64654 8.73509Z"
            fill="currentColor"
          />
          <path
            d="M16.5 8.27101V7.50037C16.5 5.01508 14.4853 3.00037 12 3.00037C9.51472 3.00037 7.5 5.01508 7.5 7.50037V8.27101C7.94533 8.0963 8.43021 8.00037 8.9375 8.00037H15.0625C15.5698 8.00037 16.0547 8.0963 16.5 8.27101Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M6.37604 1.5843C6.14628 1.92895 6.23941 2.3946 6.58405 2.62436L8.94366 4.19743C9.34521 3.82567 9.81469 3.52623 10.3314 3.31981L7.4161 1.37629C7.07146 1.14652 6.60581 1.23965 6.37604 1.5843Z"
              fill="currentColor"
            />
            <path
              d="M15.0564 4.19749C14.6549 3.82573 14.1854 3.52628 13.6687 3.31985L16.5841 1.37629C16.9287 1.14652 17.3944 1.23965 17.6241 1.5843C17.8539 1.92895 17.7608 2.3946 17.4161 2.62436L15.0564 4.19749Z"
              fill="currentColor"
            />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 14.2504C12.4142 14.2504 12.75 14.5862 12.75 15.0004V22.0004H11.25V15.0004C11.25 14.5862 11.5858 14.2504 12 14.2504Z"
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
            d="M17.416 2.62436C17.7607 2.3946 17.8538 1.92895 17.624 1.5843C17.3943 1.23965 16.9286 1.14652 16.584 1.37629L13.6687 3.3198C13.1527 3.11367 12.5897 3.00031 12.0001 3.00031C11.4105 3.00031 10.8474 3.1137 10.3314 3.31986L7.41603 1.37629C7.07138 1.14652 6.60573 1.23965 6.37596 1.5843C6.1462 1.92895 6.23933 2.3946 6.58397 2.62436L8.9437 4.19751C8.24831 4.84134 7.75664 5.70205 7.57617 6.67215C8.01128 6.55997 8.46749 6.50031 8.93763 6.50031H15.0626C15.5328 6.50031 15.989 6.55997 16.4241 6.67215C16.2436 5.702 15.7519 4.84125 15.0564 4.19741L17.416 2.62436Z"
            fill="currentColor"
          />
          <path
            d="M1.25 14.0003C1.25 13.5861 1.58579 13.2503 2 13.2503H5V11.9378C5 11.1021 5.26034 10.3272 5.70435 9.68984L3.22141 8.69648C2.83684 8.54262 2.6498 8.10613 2.80366 7.72155C2.95752 7.33698 3.39401 7.14994 3.77859 7.3038L6.91514 8.55865C7.50624 8.20413 8.19807 8.00031 8.9375 8.00031H15.0625C15.8019 8.00031 16.4938 8.20413 17.0849 8.55865L20.2214 7.3038C20.606 7.14994 21.0425 7.33698 21.1963 7.72155C21.3502 8.10613 21.1632 8.54262 20.7786 8.69648L18.2957 9.68984C18.7397 10.3272 19 11.1021 19 11.9378V13.2503H22C22.4142 13.2503 22.75 13.5861 22.75 14.0003C22.75 14.4145 22.4142 14.7503 22 14.7503H19V15.0003C19 16.181 18.7077 17.2934 18.1915 18.2691L20.7786 19.3042C21.1632 19.458 21.3502 19.8945 21.1963 20.2791C21.0425 20.6637 20.606 20.8507 20.2214 20.6968L17.3288 19.5396C16.1974 20.8666 14.5789 21.7658 12.75 21.9606V15.0003C12.75 14.5861 12.4142 14.2503 12 14.2503C11.5858 14.2503 11.25 14.5861 11.25 15.0003V21.9606C9.42109 21.7658 7.80265 20.8666 6.67115 19.5396L3.77859 20.6968C3.39401 20.8507 2.95752 20.6637 2.80366 20.2791C2.6498 19.8945 2.83684 19.458 3.22141 19.3042L5.80852 18.2691C5.29231 17.2934 5 16.181 5 15.0003V14.7503H2C1.58579 14.7503 1.25 14.4145 1.25 14.0003Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBug as IconComponentType).keywords = [
  "bug",
  "hemipteran",
  "hemipteron",
  "badger",
  "germ",
  "microbe",
  "tap",
  "tease",
  "beleaguer",
  "harass",
];

export default IconBug as IconComponentType;