import { FC } from "react";

const IconTranslation: FC<IconProps> = ({
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
            opacity={duotone ? "0.4" : "1"}
            d="M19.1414 5.0004C20.9097 6.80415 22 9.27495 22 12.0004C22 14.7582 20.8836 17.2553 19.0782 19.0644M5 19.1418C3.14864 17.3269 2 14.7978 2 12.0004C2 9.23537 3.12222 6.73244 4.93603 4.92224"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            d="M16.2849 8.04434C17.3458 9.05914 18 10.4492 18 11.9826C18 13.5341 17.3302 14.939 16.2469 15.9568M7.8 16.0004C6.68918 14.9793 6 13.5564 6 11.9826C6 10.4269 6.67333 9.01879 7.76162 8.00037"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="12.0004"
            r="2"
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
            d="M12 14.0004C13.1046 14.0004 14 13.1049 14 12.0004C14 10.8958 13.1046 10.0004 12 10.0004C10.8954 10.0004 10 10.8958 10 12.0004C10 13.1049 10.8954 14.0004 12 14.0004Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M5.46689 4.39232C5.75949 4.6855 5.75902 5.16038 5.46583 5.45298C3.78722 7.12824 2.75 9.44242 2.75 12.0003C2.75 14.588 3.81163 16.9265 5.52503 18.6061C5.82082 18.8961 5.82554 19.371 5.53557 19.6667C5.24561 19.9625 4.77076 19.9673 4.47497 19.6773C2.48564 17.7271 1.25 15.0073 1.25 12.0003C1.25 9.02807 2.45721 6.3364 4.40623 4.39126C4.69941 4.09866 5.17429 4.09913 5.46689 4.39232Z"
              fill="currentColor"
            />
            <path
              d="M18.6164 4.4647C18.9122 4.17473 19.387 4.17945 19.677 4.47524C21.5771 6.41351 22.75 9.07067 22.75 12.0003C22.75 14.9647 21.5491 17.6501 19.609 19.594C19.3164 19.8872 18.8415 19.8877 18.5484 19.5951C18.2552 19.3025 18.2547 18.8276 18.5473 18.5344C20.2182 16.8602 21.25 14.5515 21.25 12.0003C21.25 9.47897 20.2422 7.19455 18.6059 5.52531C18.3159 5.22952 18.3206 4.75467 18.6164 4.4647Z"
              fill="currentColor"
            />
          </g>
          <g opacity={duotone ? "0.8" : "1"}>
            <path
              d="M8.30923 7.48791C8.59226 7.79035 8.57652 8.26496 8.27408 8.54798C7.32517 9.43598 6.75 10.6506 6.75 11.9826C6.75 13.3301 7.33869 14.5576 8.30756 15.4482C8.61251 15.7285 8.63248 16.203 8.35216 16.5079C8.07185 16.8129 7.59739 16.8328 7.29244 16.5525C6.03967 15.401 5.25 13.7827 5.25 11.9826C5.25 10.2033 6.02148 8.60162 7.24916 7.45275C7.5516 7.16973 8.02621 7.18547 8.30923 7.48791Z"
              fill="currentColor"
            />
            <path
              d="M15.7429 7.52593C16.0292 7.2266 16.5039 7.21604 16.8033 7.50235C18.0005 8.64748 18.75 10.2289 18.75 11.9826C18.75 13.7571 17.9825 15.3552 16.7604 16.5034C16.4586 16.787 15.9839 16.7722 15.7003 16.4703C15.4167 16.1685 15.4315 15.6938 15.7333 15.4102C16.6778 14.5228 17.25 13.3111 17.25 11.9826C17.25 10.6695 16.6911 9.4708 15.7664 8.58633C15.4671 8.30002 15.4566 7.82526 15.7429 7.52593Z"
              fill="currentColor"
            />
          </g>
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
            d="M5.46689 4.39232C5.75949 4.6855 5.75902 5.16038 5.46583 5.45298C3.78722 7.12824 2.75 9.44242 2.75 12.0003C2.75 14.588 3.81163 16.9265 5.52503 18.6061C5.82082 18.8961 5.82554 19.371 5.53557 19.6667C5.24561 19.9625 4.77076 19.9673 4.47497 19.6773C2.48564 17.7271 1.25 15.0073 1.25 12.0003C1.25 9.02807 2.45721 6.3364 4.40623 4.39126C4.69941 4.09866 5.17429 4.09913 5.46689 4.39232Z"
            fill="currentColor"
          />
          <path
            d="M18.6164 4.4647C18.9122 4.17473 19.387 4.17945 19.677 4.47524C21.5771 6.41351 22.75 9.07067 22.75 12.0003C22.75 14.9647 21.5491 17.6501 19.609 19.594C19.3164 19.8872 18.8415 19.8877 18.5484 19.5951C18.2552 19.3025 18.2547 18.8276 18.5473 18.5344C20.2182 16.8602 21.25 14.5515 21.25 12.0003C21.25 9.47897 20.2422 7.19455 18.6059 5.52531C18.3159 5.22952 18.3206 4.75467 18.6164 4.4647Z"
            fill="currentColor"
          />
          <path
            d="M8.30923 7.48784C8.59226 7.79028 8.57652 8.2649 8.27408 8.54792C7.32517 9.43591 6.75 10.6505 6.75 11.9825C6.75 13.33 7.33869 14.5575 8.30756 15.4481C8.61251 15.7285 8.63248 16.2029 8.35216 16.5079C8.07185 16.8128 7.59739 16.8328 7.29244 16.5525C6.03967 15.4009 5.25 13.7827 5.25 11.9825C5.25 10.2033 6.02148 8.60155 7.24916 7.45269C7.5516 7.16966 8.02621 7.1854 8.30923 7.48784Z"
            fill="currentColor"
          />
          <path
            d="M15.7429 7.52587C16.0292 7.22653 16.5039 7.21598 16.8033 7.50229C18.0005 8.64742 18.75 10.2289 18.75 11.9825C18.75 13.7571 17.9825 15.3551 16.7604 16.5033C16.4586 16.7869 15.9839 16.7722 15.7003 16.4703C15.4167 16.1684 15.4315 15.6938 15.7333 15.4101C16.6778 14.5228 17.25 13.311 17.25 11.9825C17.25 10.6695 16.6911 9.47073 15.7664 8.58626C15.4671 8.29995 15.4566 7.8252 15.7429 7.52587Z"
            fill="currentColor"
          />
          <path
            d="M12 14.0003C13.1046 14.0003 14 13.1049 14 12.0003C14 10.8957 13.1046 10.0003 12 10.0003C10.8954 10.0003 10 10.8957 10 12.0003C10 13.1049 10.8954 14.0003 12 14.0003Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTranslation as IconComponent).keywords = [
  "translation",
  "version",
  "transformation",
  "rendering",
  "displacement",
  "interlingual rendition",
  "traduction",
  "translate",
  "sic",
  "translator",
];

export default IconTranslation as IconComponent;
