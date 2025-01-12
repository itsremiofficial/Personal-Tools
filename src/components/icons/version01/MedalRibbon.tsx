import { FC } from "react";

const IconMedalRibbon: FC<IconProps> = ({
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
          <circle
            cx="12"
            cy="9.00037"
            r="7"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7.35111 15.0004L6.71424 17.3233C6.0859 19.6152 5.77173 20.7611 6.19097 21.3884C6.3379 21.6083 6.535 21.7847 6.76372 21.9012C7.41635 22.2335 8.42401 21.7084 10.4393 20.6583C11.1099 20.3089 11.4452 20.1342 11.8014 20.0963C11.9335 20.0822 12.0665 20.0822 12.1986 20.0963C12.5548 20.1342 12.8901 20.3089 13.5607 20.6583C15.576 21.7084 16.5837 22.2335 17.2363 21.9012C17.465 21.7847 17.6621 21.6083 17.809 21.3884C18.2283 20.7611 17.9141 19.6152 17.2858 17.3233L16.6489 15.0004"
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
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="9.00037"
            r="7"
            fill="currentColor"
          />
          <path
            d="M7.54572 14.4006L7.35111 15.0004L6.71424 17.3233C6.0859 19.6152 5.77173 20.7611 6.19097 21.3884C6.3379 21.6083 6.535 21.7847 6.76372 21.9012C7.41634 22.2335 8.424 21.7084 10.4393 20.6583C11.1099 20.3089 11.4452 20.1342 11.8014 20.0963C11.9335 20.0822 12.0665 20.0822 12.1986 20.0963C12.5548 20.1342 12.8901 20.3089 13.5607 20.6583C15.576 21.7084 16.5837 22.2335 17.2363 21.9012C17.465 21.7847 17.6621 21.6083 17.809 21.3884C18.2283 20.7611 17.9141 19.6152 17.2858 17.3233L16.6489 15.0004L16.4543 14.4006C15.244 15.4 13.6921 16.0004 12 16.0004C10.3079 16.0004 8.75597 15.4 7.54572 14.4006Z"
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
            d="M19 9.00037C19 12.8664 15.866 16.0004 12 16.0004C8.13401 16.0004 5 12.8664 5 9.00037C5 5.13437 8.13401 2.00037 12 2.00037C15.866 2.00037 19 5.13437 19 9.00037Z"
            fill="currentColor"
          />
          <path
            d="M7.09301 15.9418L6.71424 17.3233C6.0859 19.6152 5.77173 20.7611 6.19097 21.3884C6.3379 21.6083 6.535 21.7847 6.76372 21.9012C7.41634 22.2335 8.424 21.7084 10.4393 20.6583C11.1099 20.3089 11.4452 20.1342 11.8014 20.0963C11.9335 20.0822 12.0665 20.0822 12.1986 20.0963C12.5548 20.1342 12.8901 20.3089 13.5607 20.6583C15.576 21.7084 16.5837 22.2335 17.2363 21.9012C17.465 21.7847 17.6621 21.6083 17.809 21.3884C18.2283 20.7611 17.9141 19.6152 17.2858 17.3233L16.907 15.9418C15.5208 16.9234 13.8278 17.5004 12 17.5004C10.1722 17.5004 8.47915 16.9234 7.09301 15.9418Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMedalRibbon as IconComponent).keywords = [
  "medal",
  "ribbon",
  "medallion",
  "decoration",
  "laurel wreath",
  "palm",
  "medalist",
  "decorating",
  "décor",
  "plaque",
  "thread",
  "typewriter ribbon",
  "webbing",
  "shield",
];

export default IconMedalRibbon as IconComponent;
