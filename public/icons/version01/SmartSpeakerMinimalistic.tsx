import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconSmartSpeakerMinimalistic: FC<IconProps> = ({
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
            d="M3.32102 6.6583C3.56225 4.55379 5.15124 2.85188 7.23935 2.46152L7.4544 2.42132C10.4585 1.85972 13.541 1.85972 16.5451 2.42132L16.8681 2.48169C18.8934 2.86032 20.4367 4.50777 20.6774 6.54822C21.0957 10.0926 21.1072 13.673 20.712 17.22L20.6948 17.374C20.4473 19.5952 18.7041 21.3571 16.48 21.6343L15.5738 21.7473C15.079 21.8089 14.8316 21.8398 14.5845 21.8656C12.866 22.045 11.1335 22.045 9.41505 21.8656C9.16792 21.8398 8.92051 21.8089 8.42569 21.7473L7.41019 21.6207C5.24868 21.3513 3.55266 19.6424 3.30532 17.4845C2.89823 13.933 2.89823 10.3468 3.30532 6.79528L3.32102 6.6583Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M17 6.00012C16.2804 6.60275 14.49 7.50012 12 7.50012C9.51 7.50012 7.71957 6.60275 7 6.00012"
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
            d="M7.4544 2.42132L7.23936 2.46152C5.15124 2.85188 3.56225 4.55379 3.32102 6.6583L3.30532 6.79528C2.89823 10.3468 2.89823 13.933 3.30532 17.4845C3.55266 19.6424 5.24868 21.3513 7.41019 21.6207L8.42569 21.7473L8.42598 21.7473C8.92061 21.8089 9.16797 21.8398 9.41505 21.8656C11.1335 22.045 12.866 22.045 14.5845 21.8656C14.8315 21.8398 15.0789 21.8089 15.5735 21.7473L15.5738 21.7473L16.48 21.6343C18.7041 21.3571 20.4473 19.5952 20.6948 17.374L20.712 17.22C21.1072 13.673 21.0957 10.0926 20.6774 6.54821C20.4367 4.50777 18.8934 2.86032 16.8681 2.48169L16.5451 2.42132C13.541 1.85972 10.4585 1.85972 7.4544 2.42132Z"
            fill="currentColor"
          />
          <path
            d="M7.48156 5.42515C7.164 5.1592 6.69098 5.20104 6.42503 5.51859C6.15908 5.83615 6.20091 6.30918 6.51847 6.57513C7.38044 7.29702 9.34385 8.25014 12 8.25014C14.6562 8.25014 16.6196 7.29702 17.4816 6.57513C17.7991 6.30918 17.841 5.83615 17.575 5.51859C17.3091 5.20104 16.836 5.1592 16.5185 5.42515C15.9413 5.90851 14.3238 6.75014 12 6.75014C9.67619 6.75014 8.05873 5.90851 7.48156 5.42515Z"
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
            d="M7.23936 2.46152C5.15124 2.85188 3.56225 4.55379 3.32102 6.6583L3.30532 6.79528C2.89823 10.3468 2.89823 13.933 3.30532 17.4845C3.55266 19.6424 5.24868 21.3513 7.41019 21.6207L8.42569 21.7473C8.92051 21.8089 9.16792 21.8398 9.41505 21.8656C11.1335 22.045 12.866 22.045 14.5845 21.8656C14.8316 21.8398 15.079 21.8089 15.5738 21.7473L16.48 21.6343C18.7041 21.3571 20.4473 19.5952 20.6948 17.374L20.712 17.22C21.1072 13.673 21.0957 10.0926 20.6774 6.54821C20.4367 4.50777 18.8934 2.86032 16.8681 2.48169L16.5451 2.42132C13.541 1.85972 10.4585 1.85972 7.4544 2.42132L7.23936 2.46152ZM6.42501 5.51858C6.69096 5.20102 7.16399 5.15918 7.48154 5.42513C8.05871 5.9085 9.67617 6.75012 12 6.75012C14.3238 6.75012 15.9413 5.9085 16.5185 5.42513C16.836 5.15918 17.309 5.20102 17.575 5.51858C17.8409 5.83614 17.7991 6.30916 17.4815 6.57511C16.6196 7.297 14.6562 8.25012 12 8.25012C9.34383 8.25012 7.38043 7.297 6.51845 6.57511C6.2009 6.30916 6.15906 5.83614 6.42501 5.51858Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSmartSpeakerMinimalistic as IconComponentType).keywords = [
  "smart",
  "speaker",
  "minimalistic",
  "hurt",
  "ache",
  "raffish",
  "rakish",
  "snappy",
  "cagy",
  "impertinent",
  "dashing",
  "impudent",
  "talker",
  "loudspeaker",
  "loudspeaker system",
  "speaker system",
  "speaker unit",
  "speaking",
  "orator",
  "speak",
  "speech",
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

export default IconSmartSpeakerMinimalistic as IconComponentType;
