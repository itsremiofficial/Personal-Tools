import { FC } from "react";

const IconSpedometerMax: FC<IconProps> = ({
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
            d="M22 12.0005C22 17.5233 17.5228 22.0005 12 22.0005C6.47715 22.0005 2 17.5233 2 12.0005C2 6.47764 6.47715 2.00049 12 2.00049C17.5228 2.00049 22 6.47764 22 12.0005Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19 19.0005L17.5 17.5005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19 5.00049L17.5 6.50049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5 19.0005L6.5 17.5005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5 5.00049L6.5 6.50049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 12.0005H4"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19.9998 12.0005L21.9998 12.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 4.0007L12 2.0007"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M10.1212 14.3642C8.94966 13.1927 8.94966 11.2932 10.1212 10.1216C11.2928 8.95003 13.1923 8.95003 14.3639 10.1216C14.8095 10.5672 15.1208 11.4924 15.3354 12.4677C15.6563 13.9262 15.8167 14.6555 15.2359 15.2363C14.6551 15.8171 13.9259 15.6566 12.4673 15.3357C11.492 15.1211 10.5669 14.8099 10.1212 14.3642Z"
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
            d="M10.115 14.353C8.94018 13.1798 8.94018 11.2777 10.115 10.1045C11.2898 8.93131 13.1946 8.93131 14.3694 10.1045C14.8163 10.5508 15.1284 11.4772 15.3436 12.4539C15.6654 13.9144 15.8263 14.6447 15.2439 15.2263C14.6615 15.8079 13.9302 15.6472 12.4676 15.3259C11.4896 15.111 10.5619 14.7993 10.115 14.353Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M22 12.0005C22 17.5233 17.5228 22.0005 12 22.0005C6.47715 22.0005 2 17.5233 2 12.0005C2 6.47764 6.47715 2.00049 12 2.00049C17.5228 2.00049 22 6.47764 22 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M4.42077 5.47679C4.74602 5.09926 5.09899 4.74629 5.47653 4.42106C5.49505 4.43633 5.51301 4.45262 5.53033 4.46994L7.03033 5.96994C7.32322 6.26284 7.32322 6.73771 7.03033 7.0306C6.73744 7.3235 6.26256 7.3235 5.96967 7.0306L4.46967 5.5306C4.45234 5.51328 4.43604 5.49532 4.42077 5.47679Z"
            fill="currentColor"
          />
          <path
            d="M2.02769 12.7503C2.00934 12.5027 2 12.2527 2 12.0005C2 11.7481 2.00935 11.4979 2.02772 11.2503H4C4.41421 11.2503 4.75 11.5861 4.75 12.0003C4.75 12.4145 4.41421 12.7503 4 12.7503H2.02769Z"
            fill="currentColor"
          />
          <path
            d="M5.47628 19.5797C5.09877 19.2545 4.74581 18.9015 4.42059 18.524C4.43591 18.5054 4.45228 18.4873 4.46967 18.4699L5.96967 16.9699C6.26256 16.6771 6.73744 16.6771 7.03033 16.9699C7.32322 17.2628 7.32322 17.7377 7.03033 18.0306L5.53033 19.5306C5.51293 19.548 5.49489 19.5644 5.47628 19.5797Z"
            fill="currentColor"
          />
          <path
            d="M19.5794 18.524C19.2542 18.9015 18.9012 19.2545 18.5237 19.5797C18.5051 19.5644 18.4871 19.548 18.4697 19.5306L16.9697 18.0306C16.6768 17.7377 16.6768 17.2628 16.9697 16.9699C17.2626 16.6771 17.7374 16.6771 18.0303 16.9699L19.5303 18.4699C19.5477 18.4873 19.5641 18.5054 19.5794 18.524Z"
            fill="currentColor"
          />
          <path
            d="M21.9723 11.2503C21.9907 11.4979 22 11.7481 22 12.0005C22 12.2527 21.9907 12.5027 21.9723 12.7503H19.9998C19.5856 12.7503 19.2498 12.4145 19.2498 12.0003C19.2498 11.5861 19.5856 11.2503 19.9998 11.2503H21.9723Z"
            fill="currentColor"
          />
          <path
            d="M18.5235 4.42106C18.901 4.74629 19.254 5.09926 19.5792 5.47679C19.564 5.49532 19.5477 5.51328 19.5303 5.5306L18.0303 7.0306C17.7374 7.3235 17.2626 7.3235 16.9697 7.0306C16.6768 6.73771 16.6768 6.26284 16.9697 5.96994L18.4697 4.46994C18.487 4.45262 18.5049 4.43633 18.5235 4.42106Z"
            fill="currentColor"
          />
          <path
            d="M12.75 2.02819V4.00049C12.75 4.4147 12.4142 4.75049 12 4.75049C11.5858 4.75049 11.25 4.4147 11.25 4.00049V2.02819C11.4976 2.00983 11.7477 2.00049 12 2.00049C12.2523 2.00049 12.5024 2.00983 12.75 2.02819Z"
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
            d="M12.7521 3.97574C12.7521 4.39052 12.4154 4.72678 12 4.72678C11.5846 4.72678 11.2479 4.39052 11.2479 3.97574V2.00049C9.04427 2.16365 7.03884 3.03799 5.46094 4.3945L7.01653 5.94792C7.31023 6.24122 7.31023 6.71676 7.01653 7.01006C6.72282 7.30335 6.24663 7.30335 5.95292 7.01006L4.39733 5.45663C3.03895 7.03234 2.16339 9.03499 2 11.2356H3.97778C4.39314 11.2356 4.72986 11.5718 4.72986 11.9866C4.72986 12.4014 4.39314 12.7377 3.97778 12.7377H2C2.16339 14.9382 3.03895 16.9409 4.39733 18.5166L5.95292 16.9632C6.24663 16.6699 6.72282 16.6699 7.01653 16.9632C7.31023 17.2565 7.31023 17.732 7.01653 18.0253L5.46094 19.5787C7.21662 21.0881 9.50161 22.0005 12 22.0005C14.4984 22.0005 16.7834 21.0881 18.5391 19.5787L16.9835 18.0253C16.6898 17.732 16.6898 17.2565 16.9835 16.9632C17.2772 16.6699 17.7534 16.6699 18.0471 16.9632L19.6027 18.5166C20.9611 16.9409 21.8366 14.9382 22 12.7377H20.022C19.6066 12.7377 19.2699 12.4014 19.2699 11.9866C19.2699 11.5718 19.6066 11.2356 20.022 11.2356H22C21.8366 9.03499 20.9611 7.03234 19.6027 5.45663L18.0471 7.01006C17.7534 7.30335 17.2772 7.30335 16.9835 7.01006C16.6898 6.71676 16.6898 6.24122 16.9835 5.94792L18.5391 4.3945C16.9612 3.03799 14.9557 2.16365 12.7521 2.00049V3.97574ZM10.1149 10.1046C8.94008 11.2778 8.94008 13.1799 10.1149 14.3531C10.5618 14.7994 11.4895 15.1111 12.4675 15.326C13.9301 15.6473 14.6614 15.808 15.2438 15.2264C15.8262 14.6448 15.6653 13.9145 15.3435 12.454C15.1283 11.4773 14.8162 10.5509 14.3693 10.1046C13.1945 8.9314 11.2897 8.9314 10.1149 10.1046Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSpedometerMax as IconComponent).keywords = [
  "spedometer",
  "max",
  "maximize",
  "tops",
  "maximum",
  "maximal",
  "most",
  "lot",
  "best",
  "paramount",
  "utmost",
];

export default IconSpedometerMax as IconComponent;
