import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconDNA: FC<IconProps> = ({
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
            d="M11.8476 12.1527L12.0462 12.2211C15.3052 13.343 19.2301 12.2702 22 9.50024M11.8476 12.1527L11.2902 11.9608C8.24848 10.9137 4.58525 11.915 2 14.5002M11.8476 12.1527L11.7792 11.954C10.6572 8.69505 11.7301 4.77016 14.5 2.00024M11.8476 12.1527L12.0394 12.7101C13.0866 15.7518 12.0853 19.415 9.5 22.0002"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6.76465 11.8435L11.8431 16.922"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M11.8438 6.76489L16.9222 11.8434"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M3.99976 13.0005L7.49976 16.5005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19.7783 10.8909L16.2783 7.39087"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9.30469 18.1917L10.8917 19.7787"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14.5869 5.58716L12.9999 4.00014"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.0303 1.46991C15.3232 1.76281 15.3232 2.23768 15.0303 2.53057C12.4724 5.08846 11.507 8.6436 12.439 11.5612C15.3566 12.4933 18.9118 11.5278 21.4697 8.96991C21.7626 8.67702 22.2374 8.67702 22.5303 8.96991C22.8232 9.26281 22.8232 9.73768 22.5303 10.0306C19.9077 12.6532 16.2665 13.8842 12.9736 13.2437C13.7235 16.4183 12.5739 19.987 10.0303 22.5306C9.73744 22.8235 9.26256 22.8235 8.96967 22.5306C8.67678 22.2377 8.67678 21.7628 8.96967 21.4699C11.3865 19.0531 12.2693 15.6817 11.3303 12.9542L11.2575 12.7427L11.046 12.67C8.31852 11.731 4.94716 12.6137 2.53033 15.0306C2.23744 15.3235 1.76256 15.3235 1.46967 15.0306C1.17678 14.7377 1.17678 14.2628 1.46967 13.9699C4.01326 11.4263 7.58195 10.2767 10.7566 11.0267C10.1161 7.73376 11.347 4.09259 13.9697 1.46991C14.2626 1.17702 14.7374 1.17702 15.0303 1.46991Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M20.0845 10.1365L16.8085 6.86054C16.5156 6.56765 16.0408 6.56765 15.7479 6.86054C15.455 7.15343 15.455 7.62831 15.7479 7.9212L18.7557 10.9291C19.2112 10.7027 19.6559 10.4382 20.0845 10.1365Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M13.1088 5.16959L14.0565 6.11738C14.3494 6.41027 14.8243 6.41027 15.1172 6.11738C15.4101 5.82448 15.4101 5.34961 15.1172 5.05672L13.9105 3.84998C13.606 4.27526 13.3385 4.71697 13.1088 5.16959Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10.8974 18.7238L9.83502 17.6614C9.54212 17.3685 9.06725 17.3685 8.77436 17.6614C8.48146 17.9543 8.48146 18.4292 8.77436 18.7221L10.1279 20.0756C10.4258 19.64 10.6827 19.1872 10.8974 18.7238Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M3.85742 13.9187L6.96965 17.0309C7.26254 17.3238 7.73742 17.3238 8.03031 17.0309C8.3232 16.738 8.3232 16.2631 8.03031 15.9702L5.19911 13.139C4.73885 13.3575 4.28944 13.6178 3.85742 13.9187Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6.50073 12.6404L11.3128 17.4524C11.3283 17.4679 11.3443 17.4826 11.3608 17.4965C11.5362 16.9011 11.6443 16.2983 11.6826 15.7009L8.29931 12.3176C7.70093 12.356 7.09707 12.4644 6.50073 12.6404Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M17.549 11.4315C17.5215 11.3897 17.4893 11.35 17.4525 11.3132L12.5743 6.43494C12.3813 7.00106 12.2451 7.57582 12.1675 8.14946L15.8508 11.8327C16.4189 11.7559 16.9882 11.6216 17.549 11.4315Z"
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
            d="M15.0303 1.46991C15.3232 1.76281 15.3232 2.23768 15.0303 2.53057C14.6145 2.94638 14.2408 3.38855 13.9105 3.85004L15.1172 5.05683C15.4101 5.34972 15.4101 5.82459 15.1172 6.11749C14.8244 6.41038 14.3495 6.41038 14.0566 6.11749L13.1088 5.16967C12.8987 5.58365 12.7203 6.00677 12.5743 6.43483L17.4526 11.313C17.4894 11.3499 17.5216 11.3896 17.5491 11.4314C17.957 11.2932 18.3604 11.1255 18.7558 10.929L15.748 7.9212C15.4551 7.62831 15.4551 7.15343 15.748 6.86054C16.0409 6.56765 16.5158 6.56765 16.8087 6.86054L20.0845 10.1364C20.5698 9.79475 21.0342 9.40541 21.4697 8.96991C21.7626 8.67702 22.2374 8.67702 22.5303 8.96991C22.8232 9.26281 22.8232 9.73768 22.5303 10.0306C19.9077 12.6532 16.2665 13.8842 12.9736 13.2437C13.7235 16.4183 12.5739 19.987 10.0303 22.5306C9.73744 22.8235 9.26256 22.8235 8.96967 22.5306C8.67678 22.2377 8.67678 21.7628 8.96967 21.4699C9.40642 21.0332 9.79308 20.5652 10.1279 20.0756L8.77436 18.722C8.48146 18.4291 8.48146 17.9542 8.77436 17.6613C9.06725 17.3684 9.54212 17.3684 9.83502 17.6613L10.8975 18.7238C11.084 18.3211 11.2387 17.9106 11.3608 17.4964C11.3443 17.4825 11.3283 17.4678 11.3128 17.4523L6.50083 12.6403C6.06113 12.7701 5.62552 12.9367 5.19921 13.139L8.03033 15.9702C8.32322 16.2631 8.32322 16.7379 8.03033 17.0308C7.73744 17.3237 7.26256 17.3237 6.96967 17.0308L3.85751 13.9187C3.3922 14.2427 2.94707 14.6138 2.53033 15.0306C2.23744 15.3235 1.76256 15.3235 1.46967 15.0306C1.17678 14.7377 1.17678 14.2628 1.46967 13.9699C4.01326 11.4263 7.58195 10.2767 10.7566 11.0267C10.1161 7.73376 11.347 4.09259 13.9697 1.46991C14.2626 1.17702 14.7374 1.17702 15.0303 1.46991ZM15.8509 11.8327L12.1675 8.14934C12.0094 9.31869 12.0947 10.4835 12.439 11.5612C13.5168 11.9055 14.6815 11.9909 15.8509 11.8327ZM11.3303 12.9542C11.629 13.8217 11.7433 14.7544 11.6826 15.7008L8.29943 12.3176C9.24581 12.2569 10.1785 12.3713 11.046 12.67L11.2575 12.7427L11.3303 12.9542Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDNA as IconComponentType).keywords = [];

export default IconDNA as IconComponentType;