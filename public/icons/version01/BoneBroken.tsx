import { FC } from "react";

const IconBoneBroken: FC<IconProps> = ({
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
            d="M14.1374 2.73804C13.3942 3.48126 13.0092 4.77671 13.2895 5.78995C13.438 6.32627 13.4622 6.97565 13.0687 7.36914L11.7892 8.64861C11.7196 8.7183 11.7423 8.83632 11.8329 8.87514C13.3123 9.50917 14.4911 10.688 15.1251 12.1674C15.1639 12.258 15.2819 12.2807 15.3516 12.211L16.6311 10.9315C17.0246 10.538 17.674 10.5623 18.2103 10.7107C19.2235 10.9911 20.519 10.606 21.2622 9.86281C22.2459 8.87909 22.2459 7.28415 21.2622 6.30043C20.2785 5.3167 18.6835 5.3167 17.6998 6.30043C18.6835 5.3167 18.6835 3.72176 17.6998 2.73804C16.7161 1.75431 15.1212 1.75431 14.1374 2.73804Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.73779 17.7001C3.72152 18.6838 5.31646 18.6838 6.30018 17.7001C5.31646 18.6838 5.31645 20.2787 6.30018 21.2624C7.28391 22.2462 8.87884 22.2462 9.86257 21.2624C10.6058 20.5192 10.9908 19.2238 10.7105 18.2105C10.562 17.6742 10.5378 17.0248 10.9313 16.6313L12.2108 15.3519C12.2804 15.2822 12.2577 15.1642 12.1671 15.1253C10.6877 14.4913 9.50892 13.3125 8.8749 11.8331C8.83608 11.7425 8.71805 11.7198 8.64837 11.7895L7.3689 13.069C6.97541 13.4625 6.32603 13.4382 5.7897 13.2898C4.77646 13.0094 3.48101 13.3945 2.73779 14.1377C1.75407 15.1214 1.75407 16.7163 2.73779 17.7001Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M17.6572 17.657L19.0714 19.0712"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6.34314 6.34338L4.92893 4.92917"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15 19.0002V20.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5 9.00024L4 9.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19 15.0002H20"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9 5.00024L9 4.00024"
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
            d="M14.1374 2.73804C13.3942 3.48126 13.0092 4.77671 13.2895 5.78995C13.438 6.32627 13.4622 6.97565 13.0687 7.36914L11.7892 8.64861C11.7196 8.7183 11.7423 8.83632 11.8329 8.87514C13.3123 9.50917 14.4911 10.688 15.1251 12.1674C15.1639 12.258 15.2819 12.2807 15.3516 12.211L16.6311 10.9315C17.0246 10.538 17.674 10.5623 18.2103 10.7107C19.2235 10.9911 20.519 10.606 21.2622 9.86281C22.2459 8.87909 22.2459 7.28415 21.2622 6.30043C20.2785 5.3167 18.6835 5.3167 17.6998 6.30043C18.6835 5.3167 18.6835 3.72176 17.6998 2.73804C16.7161 1.75431 15.1212 1.75431 14.1374 2.73804Z"
            fill="currentColor"
          />
          <path
            d="M2.73779 17.7001C3.72152 18.6838 5.31646 18.6838 6.30018 17.7001C5.31646 18.6838 5.31645 20.2787 6.30018 21.2624C7.28391 22.2462 8.87884 22.2462 9.86257 21.2624C10.6058 20.5192 10.9908 19.2238 10.7105 18.2105C10.562 17.6742 10.5378 17.0248 10.9313 16.6313L12.2108 15.3519C12.2804 15.2822 12.2577 15.1642 12.1671 15.1253C10.6877 14.4913 9.50892 13.3125 8.8749 11.8331C8.83608 11.7425 8.71805 11.7198 8.64837 11.7895L7.3689 13.069C6.97541 13.4625 6.32603 13.4382 5.7897 13.2898C4.77646 13.0094 3.48101 13.3945 2.73779 14.1377C1.75407 15.1214 1.75407 16.7163 2.73779 17.7001Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M8.25 5.00024C8.25 5.41446 8.58579 5.75024 9 5.75024C9.41421 5.75024 9.75 5.41446 9.75 5.00024L9.75 4.00024C9.75 3.58603 9.41421 3.25024 9 3.25024C8.58579 3.25024 8.25 3.58603 8.25 4.00024L8.25 5.00024Z"
              fill="currentColor"
            />
            <path
              d="M6.87359 5.81318C7.16649 6.10607 7.16649 6.58094 6.87359 6.87384C6.5807 7.16673 6.10582 7.16673 5.81293 6.87384L4.39872 5.45962C4.10582 5.16673 4.10582 4.69186 4.39872 4.39896C4.69161 4.10607 5.16648 4.10607 5.45938 4.39896L6.87359 5.81318Z"
              fill="currentColor"
            />
            <path
              d="M18.1876 17.1267C17.8947 16.8338 17.4198 16.8338 17.1269 17.1267C16.834 17.4195 16.834 17.8944 17.1269 18.1873L18.5411 19.6015C18.834 19.8944 19.3089 19.8944 19.6018 19.6015C19.8947 19.3086 19.8947 18.8338 19.6018 18.5409L18.1876 17.1267Z"
              fill="currentColor"
            />
            <path
              d="M15 18.2502C15.4142 18.2502 15.75 18.586 15.75 19.0002V20.0002C15.75 20.4145 15.4142 20.7502 15 20.7502C14.5858 20.7502 14.25 20.4145 14.25 20.0002V19.0002C14.25 18.586 14.5858 18.2502 15 18.2502Z"
              fill="currentColor"
            />
            <path
              d="M5 9.75024C5.41421 9.75024 5.75 9.41446 5.75 9.00024C5.75 8.58603 5.41421 8.25024 5 8.25024H4C3.58579 8.25024 3.25 8.58603 3.25 9.00024C3.25 9.41446 3.58579 9.75024 4 9.75024H5Z"
              fill="currentColor"
            />
            <path
              d="M18.25 15.0002C18.25 14.586 18.5858 14.2502 19 14.2502H20C20.4142 14.2502 20.75 14.586 20.75 15.0002C20.75 15.4145 20.4142 15.7502 20 15.7502H19C18.5858 15.7502 18.25 15.4145 18.25 15.0002Z"
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
            d="M14.1374 2.73804C13.3942 3.48126 13.0092 4.77671 13.2895 5.78995C13.438 6.32627 13.4622 6.97565 13.0687 7.36914L11.7892 8.64861C11.7196 8.7183 11.7423 8.83632 11.8329 8.87514C13.3123 9.50917 14.4911 10.688 15.1251 12.1674C15.1639 12.258 15.2819 12.2807 15.3516 12.211L16.6311 10.9315C17.0246 10.538 17.674 10.5623 18.2103 10.7107C19.2235 10.9911 20.519 10.606 21.2622 9.86281C22.2459 8.87909 22.2459 7.28415 21.2622 6.30043C20.2785 5.3167 18.6835 5.3167 17.6998 6.30043C18.6835 5.3167 18.6835 3.72176 17.6998 2.73804C16.7161 1.75431 15.1212 1.75431 14.1374 2.73804Z"
            fill="currentColor"
          />
          <path
            d="M2.73779 17.7001C3.72152 18.6838 5.31646 18.6838 6.30018 17.7001C5.31646 18.6838 5.31645 20.2787 6.30018 21.2624C7.28391 22.2462 8.87884 22.2462 9.86257 21.2624C10.6058 20.5192 10.9908 19.2238 10.7105 18.2105C10.562 17.6742 10.5378 17.0248 10.9313 16.6313L12.2108 15.3519C12.2804 15.2822 12.2577 15.1642 12.1671 15.1253C10.6877 14.4913 9.50892 13.3125 8.8749 11.8331C8.83608 11.7425 8.71805 11.7198 8.64837 11.7895L7.3689 13.069C6.97541 13.4625 6.32603 13.4382 5.7897 13.2898C4.77646 13.0094 3.48101 13.3945 2.73779 14.1377C1.75407 15.1214 1.75407 16.7163 2.73779 17.7001Z"
            fill="currentColor"
          />
          <path
            d="M8.25 5.00024C8.25 5.41446 8.58579 5.75024 9 5.75024C9.41421 5.75024 9.75 5.41446 9.75 5.00024L9.75 4.00024C9.75 3.58603 9.41421 3.25024 9 3.25024C8.58579 3.25024 8.25 3.58603 8.25 4.00024L8.25 5.00024Z"
            fill="currentColor"
          />
          <path
            d="M6.87359 5.81318C7.16649 6.10607 7.16649 6.58094 6.87359 6.87384C6.5807 7.16673 6.10582 7.16673 5.81293 6.87384L4.39872 5.45962C4.10582 5.16673 4.10582 4.69186 4.39872 4.39896C4.69161 4.10607 5.16648 4.10607 5.45938 4.39896L6.87359 5.81318Z"
            fill="currentColor"
          />
          <path
            d="M18.1876 17.1267C17.8947 16.8338 17.4198 16.8338 17.1269 17.1267C16.834 17.4195 16.834 17.8944 17.1269 18.1873L18.5411 19.6015C18.834 19.8944 19.3089 19.8944 19.6018 19.6015C19.8947 19.3086 19.8947 18.8338 19.6018 18.5409L18.1876 17.1267Z"
            fill="currentColor"
          />
          <path
            d="M15 18.2502C15.4142 18.2502 15.75 18.586 15.75 19.0002V20.0002C15.75 20.4145 15.4142 20.7502 15 20.7502C14.5858 20.7502 14.25 20.4145 14.25 20.0002V19.0002C14.25 18.586 14.5858 18.2502 15 18.2502Z"
            fill="currentColor"
          />
          <path
            d="M5 9.75024C5.41421 9.75024 5.75 9.41446 5.75 9.00024C5.75 8.58603 5.41421 8.25024 5 8.25024H4C3.58579 8.25024 3.25 8.58603 3.25 9.00024C3.25 9.41446 3.58579 9.75024 4 9.75024H5Z"
            fill="currentColor"
          />
          <path
            d="M18.25 15.0002C18.25 14.586 18.5858 14.2502 19 14.2502H20C20.4142 14.2502 20.75 14.586 20.75 15.0002C20.75 15.4145 20.4142 15.7502 20 15.7502H19C18.5858 15.7502 18.25 15.4145 18.25 15.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBoneBroken as IconComponent).keywords = [
  "bone",
  "broken",
  "osseous tissue",
  "bony",
  "pearl",
  "ivory",
  "debone",
  "boney",
  "off-white",
  "cram",
  "get up",
  "fractured",
  "shattered",
  "fragmented",
  "crushed",
  "destroyed",
  "damaged",
  "chipped",
  "cracked",
  "rugged",
];

export default IconBoneBroken as IconComponent;
