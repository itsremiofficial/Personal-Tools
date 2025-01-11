import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconObjectScan: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            d="M22 14.0005C22 17.7717 22 19.6573 20.8284 20.8289C19.6569 22.0005 17.7712 22.0005 14 22.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 22.0005C6.22876 22.0005 4.34315 22.0005 3.17157 20.8289C2 19.6573 2 17.7717 2 14.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 2.00049C6.22876 2.00049 4.34315 2.00049 3.17157 3.17206C2 4.34363 2 6.22925 2 10.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14 2.00049C17.7712 2.00049 19.6569 2.00049 20.8284 3.17206C22 4.34363 22 6.22925 22 10.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M4 11.5005C4 11.5005 6.4 9.50049 12 9.50049C17.6 9.50049 20 11.5005 20 11.5005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            d="M5.25 10.0005C5.25 10.4147 5.58579 10.7505 6 10.7505C6.41421 10.7505 6.75 10.4147 6.75 10.0005H5.25ZM17.4142 6.08627L16.8839 6.6166L16.8839 6.61661L17.4142 6.08627ZM10 6.25049H14V4.75049H10V6.25049ZM6.75 10.0005V9.50049H5.25V10.0005H6.75ZM17.25 9.50049V10.0005H18.75V9.50049H17.25ZM14 6.25049C14.964 6.25049 15.6116 6.25208 16.0946 6.31702C16.5561 6.37907 16.7536 6.48629 16.8839 6.6166L17.9445 5.55594C17.4891 5.10047 16.9223 4.9148 16.2945 4.8304C15.6883 4.7489 14.9216 4.75049 14 4.75049V6.25049ZM18.75 9.50049C18.75 8.57888 18.7516 7.81223 18.6701 7.20601C18.5857 6.57821 18.4 6.01141 17.9445 5.55594L16.8839 6.61661C17.0142 6.74692 17.1214 6.94442 17.1835 7.40588C17.2484 7.88892 17.25 8.53648 17.25 9.50049H18.75ZM10 4.75049C9.07839 4.75049 8.31174 4.7489 7.70552 4.8304C7.07773 4.9148 6.51093 5.10047 6.05546 5.55594L7.11612 6.6166C7.24643 6.48629 7.44393 6.37907 7.90539 6.31702C8.38843 6.25208 9.03599 6.25049 10 6.25049V4.75049ZM6.75 9.50049C6.75 8.53648 6.75159 7.88892 6.81654 7.40588C6.87858 6.94442 6.9858 6.74692 7.11612 6.6166L6.05546 5.55594C5.59999 6.01141 5.41432 6.57821 5.32991 7.20601C5.24841 7.81223 5.25 8.57888 5.25 9.50049H6.75Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            d="M18 10.5005V14.0005V14.5005C18 16.3861 18 17.3289 17.4142 17.9147C16.8284 18.5005 15.8856 18.5005 14 18.5005H10C8.11438 18.5005 7.17157 18.5005 6.58579 17.9147C6 17.3289 6 16.3861 6 14.5005V14.0005V10.0005"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.94358 1.25049L10 1.25049C10.4142 1.25049 10.75 1.58628 10.75 2.00049C10.75 2.4147 10.4142 2.75049 10 2.75049C8.09318 2.75049 6.73851 2.75208 5.71085 2.89025C4.70476 3.02551 4.12511 3.27918 3.7019 3.70239C3.27869 4.1256 3.02502 4.70525 2.88976 5.71134C2.75159 6.739 2.75 8.09367 2.75 10.0005C2.75 10.4147 2.41421 10.7505 2 10.7505C1.58579 10.7505 1.25 10.4147 1.25 10.0005L1.25 9.94407C1.24998 8.10631 1.24997 6.65068 1.40314 5.51147C1.56076 4.33904 1.89288 3.39009 2.64124 2.64173C3.38961 1.89337 4.33856 1.56125 5.51098 1.40362C6.65019 1.25046 8.10582 1.25047 9.94358 1.25049ZM18.2892 2.89025C17.2615 2.75208 15.9068 2.75049 14 2.75049C13.5858 2.75049 13.25 2.4147 13.25 2.00049C13.25 1.58628 13.5858 1.25049 14 1.25049L14.0564 1.25049C15.8942 1.25047 17.3498 1.25046 18.489 1.40362C19.6614 1.56125 20.6104 1.89337 21.3588 2.64173C22.1071 3.39009 22.4392 4.33904 22.5969 5.51147C22.75 6.65068 22.75 8.10632 22.75 9.94408V10.0005C22.75 10.4147 22.4142 10.7505 22 10.7505C21.5858 10.7505 21.25 10.4147 21.25 10.0005C21.25 8.09367 21.2484 6.739 21.1102 5.71134C20.975 4.70525 20.7213 4.1256 20.2981 3.70239C19.8749 3.27918 19.2952 3.02551 18.2892 2.89025ZM2 13.2505C2.41421 13.2505 2.75 13.5863 2.75 14.0005C2.75 15.9073 2.75159 17.262 2.88976 18.2896C3.02502 19.2957 3.27869 19.8754 3.7019 20.2986C4.12511 20.7218 4.70476 20.9755 5.71085 21.1107C6.73851 21.2489 8.09318 21.2505 10 21.2505C10.4142 21.2505 10.75 21.5863 10.75 22.0005C10.75 22.4147 10.4142 22.7505 10 22.7505H9.94359C8.10583 22.7505 6.65019 22.7505 5.51098 22.5974C4.33856 22.4397 3.38961 22.1076 2.64124 21.3592C1.89288 20.6109 1.56076 19.6619 1.40314 18.4895C1.24997 17.3503 1.24998 15.8947 1.25 14.0569L1.25 14.0005C1.25 13.5863 1.58579 13.2505 2 13.2505ZM22 13.2505C22.4142 13.2505 22.75 13.5863 22.75 14.0005V14.0569C22.75 15.8947 22.75 17.3503 22.5969 18.4895C22.4392 19.6619 22.1071 20.6109 21.3588 21.3592C20.6104 22.1076 19.6614 22.4397 18.489 22.5974C17.3498 22.7505 15.8942 22.7505 14.0564 22.7505H14C13.5858 22.7505 13.25 22.4147 13.25 22.0005C13.25 21.5863 13.5858 21.2505 14 21.2505C15.9068 21.2505 17.2615 21.2489 18.2892 21.1107C19.2952 20.9755 19.8749 20.7218 20.2981 20.2986C20.7213 19.8754 20.975 19.2957 21.1102 18.2896C21.2484 17.262 21.25 15.9073 21.25 14.0005C21.25 13.5863 21.5858 13.2505 22 13.2505Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 5.50049H14C15.8856 5.50049 16.8284 5.50049 17.4142 6.08627C17.9642 6.63624 17.9978 7.50088 17.9999 9.16497L18 12.0172V14.5005C18 16.3861 18 17.3289 17.4142 17.9147C16.8284 18.5005 15.8856 18.5005 14 18.5005H10C8.11438 18.5005 7.17157 18.5005 6.58579 17.9147C6 17.3289 6 16.3861 6 14.5005V12.0172L6.00013 9.16498C6.00219 7.50089 6.03582 6.63624 6.58579 6.08627C7.17157 5.50049 8.11438 5.50049 10 5.50049Z"
            fill="currentColor"
          />
          <path
            d="M18.3693 9.30042C18.2513 9.25504 18.1281 9.20977 17.9999 9.16494C16.1667 8.38644 11.2002 7.29654 6.00013 9.16495C5.87187 9.20978 5.74878 9.25504 5.63078 9.30042C4.9385 9.56669 4.42459 9.83605 4.07665 10.0448C3.90273 10.1492 3.77043 10.2383 3.67815 10.3042C3.63202 10.3372 3.59589 10.3643 3.56958 10.3846C3.55642 10.3948 3.54572 10.4033 3.53745 10.4099L3.52685 10.4185L3.52291 10.4218L3.52128 10.4231L3.51988 10.4243C3.20167 10.6894 3.15868 11.1624 3.42385 11.4806C3.68807 11.7976 4.15855 11.8415 4.47672 11.5794L4.4871 11.5713C4.49868 11.5623 4.51958 11.5465 4.55001 11.5248C4.61086 11.4813 4.7098 11.4142 4.84839 11.3311C5.12545 11.1648 5.56153 10.9342 6.16925 10.7004C7.38288 10.2337 9.29159 9.75043 12 9.75043C14.7085 9.75043 16.6172 10.2337 17.8308 10.7004C18.4385 10.9342 18.8746 11.1648 19.1516 11.3311C19.2902 11.4142 19.3892 11.4813 19.45 11.5248C19.4805 11.5465 19.5014 11.5623 19.5129 11.5713L19.5233 11.5795C19.8415 11.8415 20.312 11.7976 20.5762 11.4806C20.8414 11.1624 20.7984 10.6894 20.4802 10.4243L20 11.0004C20.4802 10.4243 20.4788 10.4231 20.4788 10.4231L20.4771 10.4218L20.4732 10.4185L20.4626 10.4099C20.4543 10.4033 20.4436 10.3948 20.4305 10.3846C20.4041 10.3643 20.368 10.3371 20.3219 10.3042C20.2296 10.2383 20.0973 10.1492 19.9234 10.0448C19.5755 9.83605 19.0615 9.56669 18.3693 9.30042Z"
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
            d="M22 13.2505C22.4142 13.2505 22.75 13.5863 22.75 14.0005V14.0569C22.75 15.8947 22.75 17.3503 22.5969 18.4895C22.4392 19.6619 22.1071 20.6109 21.3588 21.3592C20.6104 22.1076 19.6614 22.4397 18.489 22.5974C17.3498 22.7505 15.8942 22.7505 14.0564 22.7505H14C13.5858 22.7505 13.25 22.4147 13.25 22.0005C13.25 21.5863 13.5858 21.2505 14 21.2505C15.9068 21.2505 17.2615 21.2489 18.2892 21.1107C19.2952 20.9755 19.8749 20.7218 20.2981 20.2986C20.7213 19.8754 20.975 19.2957 21.1102 18.2896C21.2484 17.262 21.25 15.9073 21.25 14.0005C21.25 13.5863 21.5858 13.2505 22 13.2505Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 13.2505C2.41421 13.2505 2.75 13.5863 2.75 14.0005C2.75 15.9073 2.75159 17.262 2.88976 18.2896C3.02502 19.2957 3.27869 19.8754 3.7019 20.2986C4.12511 20.7218 4.70476 20.9755 5.71085 21.1107C6.73851 21.2489 8.09318 21.2505 10 21.2505C10.4142 21.2505 10.75 21.5863 10.75 22.0005C10.75 22.4147 10.4142 22.7505 10 22.7505H9.94359C8.10583 22.7505 6.65019 22.7505 5.51098 22.5974C4.33856 22.4397 3.38961 22.1076 2.64124 21.3592C1.89288 20.6109 1.56076 19.6619 1.40314 18.4895C1.24997 17.3503 1.24998 15.8947 1.25 14.0569C1.25 14.0381 1.25 14.0193 1.25 14.0005C1.25 13.5863 1.58579 13.2505 2 13.2505Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.94358 1.25049L10 1.25049C10.4142 1.25049 10.75 1.58628 10.75 2.00049C10.75 2.4147 10.4142 2.75049 10 2.75049C8.09318 2.75049 6.73851 2.75208 5.71085 2.89025C4.70476 3.02551 4.12511 3.27918 3.7019 3.70239C3.27869 4.1256 3.02502 4.70525 2.88976 5.71134C2.75159 6.739 2.75 8.09367 2.75 10.0005C2.75 10.4147 2.41421 10.7505 2 10.7505C1.58579 10.7505 1.25 10.4147 1.25 10.0005L1.25 9.94407C1.24998 8.10631 1.24997 6.65068 1.40314 5.51147C1.56076 4.33904 1.89288 3.39009 2.64124 2.64173C3.38961 1.89337 4.33856 1.56125 5.51098 1.40362C6.65019 1.25046 8.10582 1.25047 9.94358 1.25049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.2892 2.89025C17.2615 2.75208 15.9068 2.75049 14 2.75049C13.5858 2.75049 13.25 2.4147 13.25 2.00049C13.25 1.58628 13.5858 1.25049 14 1.25049C14.0188 1.25049 14.0377 1.25049 14.0564 1.25049C15.8942 1.25047 17.3498 1.25046 18.489 1.40362C19.6614 1.56125 20.6104 1.89337 21.3588 2.64173C22.1071 3.39009 22.4392 4.33904 22.5969 5.51147C22.75 6.65068 22.75 8.10632 22.75 9.94408V10.0005C22.75 10.4147 22.4142 10.7505 22 10.7505C21.5858 10.7505 21.25 10.4147 21.25 10.0005C21.25 8.09367 21.2484 6.739 21.1102 5.71134C20.975 4.70525 20.7213 4.1256 20.2981 3.70239C19.8749 3.27918 19.2952 3.02551 18.2892 2.89025Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.02473 13.1093C6.77595 12.7465 8.44304 11.5005 12.0005 11.5005C15.5579 11.5005 17.2246 12.7465 17.9758 13.1093C17.9796 13.1111 17.9838 13.1131 17.9883 13.1153C18.0426 13.1413 18.1502 13.1929 18.2508 13.2665C18.383 13.3635 18.48 13.4774 18.5591 13.6033C18.7531 13.9126 18.7514 14.207 18.7504 14.3808C18.7504 14.3927 18.7503 14.404 18.7503 14.4147L18.7503 14.5525C18.7503 15.451 18.7503 16.2002 18.6704 16.795C18.586 17.4228 18.4003 17.9896 17.9448 18.445C17.4894 18.9005 16.9226 19.0862 16.2948 19.1706C15.7 19.2505 14.9508 19.2505 14.0523 19.2505H9.9483C9.04981 19.2505 8.30059 19.2505 7.70581 19.1706C7.07802 19.0862 6.51122 18.9005 6.05575 18.445C5.60028 17.9896 5.41461 17.4228 5.3302 16.795C5.25024 16.2002 5.25026 15.451 5.25029 14.5525C5.25029 14.5352 5.25029 14.5179 5.25029 14.5005V14.4147C5.25029 14.404 5.25023 14.3927 5.25016 14.3808C5.24915 14.207 5.24744 13.9126 5.44152 13.6033C5.52054 13.4774 5.61754 13.3635 5.74981 13.2665C5.85036 13.1929 5.95802 13.1413 6.0123 13.1153C6.01683 13.1131 6.02098 13.1111 6.02473 13.1093Z"
            fill="currentColor"
          />
          <path
            d="M16.2945 4.8304C15.6997 4.75044 14.9505 4.75046 14.052 4.75049H9.948C9.04952 4.75046 8.3003 4.75044 7.70552 4.8304C7.07773 4.91481 6.51093 5.10048 6.05546 5.55595C5.59999 6.01142 5.41432 6.57822 5.32991 7.20601C5.24995 7.80079 5.24997 8.55001 5.25 9.44849L5.25 9.73434C5.05617 9.85831 4.89117 9.97524 4.75411 10.0793C4.59445 10.2005 4.47278 10.3042 4.38764 10.3811C4.34507 10.4196 4.31162 10.4514 4.28713 10.4754C4.27488 10.4874 4.26486 10.4974 4.25706 10.5053L4.24702 10.5156L4.24323 10.5195L4.24165 10.5212L4.24027 10.5227C3.93064 10.8491 3.91869 11.3917 4.21357 11.7345C4.50722 12.0758 4.99442 12.0904 5.30425 11.7681L5.31242 11.76C5.32215 11.7505 5.34022 11.7332 5.3668 11.7091C5.41997 11.6611 5.50717 11.5862 5.62976 11.4931C5.87486 11.307 6.26181 11.048 6.80186 10.7852C7.87931 10.2608 9.5798 9.71478 12 9.71478C14.4202 9.71478 16.1207 10.2608 17.1981 10.7852C17.7382 11.048 18.1251 11.307 18.3702 11.4931C18.4928 11.5862 18.58 11.6611 18.6332 11.7091C18.6598 11.7332 18.6779 11.7505 18.6876 11.76L18.6958 11.7681C19.0056 12.0904 19.4928 12.0758 19.7864 11.7345C20.0813 11.3917 20.0694 10.8491 19.7597 10.5227L19.7129 10.4754C19.6884 10.4514 19.6549 10.4196 19.6124 10.3811C19.5272 10.3042 19.4056 10.2005 19.2459 10.0793C19.1088 9.97523 18.9438 9.85831 18.75 9.73434L18.75 9.4485C18.75 8.55001 18.7501 7.80079 18.6701 7.20601C18.5857 6.57822 18.4 6.01142 17.9445 5.55595C17.4891 5.10048 16.9223 4.91481 16.2945 4.8304Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconObjectScan as IconComponentType).keywords = [
  "object",
  "scan",
  "objective",
  "aim",
  "target",
  "physical object",
  "item",
  "thing",
  "subject-matter",
  "intention",
  "considered",
  "read",
  "run down",
  "glance over",
  "skim",
  "rake",
  "examine",
  "inspect",
  "finding",
  "scrutinize",
];

export default IconObjectScan as IconComponentType;