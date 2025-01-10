import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconPill: FC<IconProps> = ({
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
            d="M3.99057 13.6021C1.33648 10.948 1.33648 6.64491 3.99057 3.99081C6.64466 1.33672 10.9478 1.33672 13.6019 3.99081L20.0094 10.3984C22.6635 13.0525 22.6635 17.3556 20.0094 20.0097C17.3553 22.6638 13.0522 22.6638 10.3981 20.0097L3.99057 13.6021Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16.8057 7.19458C16.8057 7.19458 16.2649 10.0002 13.1322 13.1329C9.99952 16.2656 7.19434 16.8059 7.19434 16.8059"
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
            opacity={duotone ? "0.5" : "1"}
            d="M3.99057 13.6021C1.33648 10.948 1.33648 6.64491 3.99057 3.99081C6.64466 1.33672 10.9478 1.33672 13.6019 3.99081L20.0094 10.3984C22.6635 13.0525 22.6635 17.3556 20.0094 20.0097C17.3553 22.6638 13.0522 22.6638 10.3981 20.0097L3.99057 13.6021Z"
            fill="currentColor"
          />
          <path
            d="M7.80729 17.4188L6.55383 16.1654L7.04936 16.07C7.04904 16.07 7.04942 16.0699 7.05034 16.0698L7.0642 16.0668C7.07858 16.0636 7.10318 16.0579 7.1374 16.0493C7.20584 16.032 7.31273 16.0029 7.45332 15.958C7.73451 15.8682 8.15025 15.7154 8.66277 15.4684C9.68695 14.9749 11.1004 14.1038 12.6017 12.6025C14.103 11.1012 14.9742 9.68761 15.4679 8.6633C15.715 8.15071 15.8678 7.7349 15.9576 7.45365C16.0025 7.31303 16.0317 7.20612 16.049 7.13766C16.0576 7.10343 16.0633 7.07882 16.0665 7.06444L16.0694 7.05061C16.0696 7.04969 16.0697 7.04927 16.0697 7.04958L16.1652 6.55408L17.4185 7.80745C17.4086 7.84012 17.3979 7.87433 17.3865 7.91004C17.277 8.25275 17.0989 8.73414 16.8192 9.31455C16.2593 10.4762 15.2937 12.0318 13.6624 13.6632C12.031 15.2945 10.4755 16.2599 9.31396 16.8197C8.7336 17.0994 8.25226 17.2775 7.90959 17.3869C7.87398 17.3983 7.83986 17.4089 7.80729 17.4188Z"
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
            d="M3.99057 3.99081C1.33648 6.64491 1.33648 10.948 3.99057 13.6021L6.55391 16.1655L7.0495 16.07C7.04919 16.0701 7.04956 16.07 7.05049 16.0698L7.06435 16.0668C7.07872 16.0636 7.10332 16.058 7.13754 16.0493C7.20599 16.0321 7.31287 16.003 7.45346 15.9581C7.73465 15.8683 8.1504 15.7155 8.66292 15.4685C9.68709 14.975 11.1005 14.1039 12.6019 12.6026C14.1032 11.1012 14.9744 9.68768 15.468 8.66337C15.7151 8.15078 15.8679 7.73496 15.9578 7.45371C16.0027 7.3131 16.0318 7.20619 16.0491 7.13772C16.0577 7.1035 16.0634 7.07889 16.0666 7.06451L16.0696 7.05067C16.0698 7.04976 16.0699 7.04934 16.0698 7.04965L16.1653 6.55421L13.6019 3.99081C10.9478 1.33672 6.64466 1.33672 3.99057 3.99081Z"
            fill="currentColor"
          />
          <path
            d="M17.4187 7.80758C17.4087 7.84022 17.398 7.87442 17.3866 7.91011C17.2772 8.25282 17.099 8.73421 16.8193 9.31462C16.2594 10.4763 15.2939 12.0319 13.6625 13.6632C12.0312 15.2946 10.4757 16.26 9.31411 16.8198C8.73375 17.0995 8.2524 17.2776 7.90973 17.387C7.8741 17.3984 7.83996 17.409 7.80737 17.4189L10.3981 20.0097C13.0522 22.6638 17.3553 22.6638 20.0094 20.0097C22.6635 17.3556 22.6635 13.0525 20.0094 10.3984L17.4187 7.80758Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPill as IconComponentType).keywords = [
  "pill",
  "tablet",
  "lozenge",
  "anovulatory drug",
  "birth control pill",
  "contraceptive pill",
  "oral contraceptive",
  "oral contraceptive pill",
  "drug",
  "medication",
];

export default IconPill as IconComponentType;
