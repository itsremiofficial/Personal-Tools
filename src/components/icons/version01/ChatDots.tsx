import { FC } from "react";

const IconChatDots: FC<IconProps> = ({
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
            d="M13.0867 21.3879L13.7321 21.77L13.0867 21.3879ZM13.6288 20.4721L12.9833 20.0901L13.6288 20.4721ZM10.3712 20.4721L9.72579 20.8541H9.72579L10.3712 20.4721ZM10.9133 21.3879L11.5587 21.0059L10.9133 21.3879ZM2.3806 15.9137L3.07351 15.6266V15.6266L2.3806 15.9137ZM7.78958 18.9917L7.77666 19.7416L7.78958 18.9917ZM5.08658 18.6196L4.79957 19.3126H4.79957L5.08658 18.6196ZM21.6194 15.9137L22.3123 16.2007V16.2007L21.6194 15.9137ZM16.2104 18.9917L16.1975 18.2418L16.2104 18.9917ZM18.9134 18.6196L19.2004 19.3126H19.2004L18.9134 18.6196ZM19.6125 2.73704L19.2206 3.37652L19.6125 2.73704ZM21.2632 4.38775L21.9027 3.99588V3.99588L21.2632 4.38775ZM4.38751 2.73704L3.99563 2.09756V2.09756L4.38751 2.73704ZM2.7368 4.38775L2.09732 3.99588H2.09732L2.7368 4.38775ZM9.40279 19.2101L9.77986 18.5618L9.77986 18.5618L9.40279 19.2101ZM13.7321 21.77L14.2742 20.8541L12.9833 20.0901L12.4412 21.0059L13.7321 21.77ZM9.72579 20.8541L10.2679 21.77L11.5587 21.0059L11.0166 20.0901L9.72579 20.8541ZM12.4412 21.0059C12.2485 21.3316 11.7515 21.3316 11.5587 21.0059L10.2679 21.77C11.0415 23.0769 12.9585 23.0769 13.7321 21.77L12.4412 21.0059ZM10.5 2.75024H13.5V1.25024H10.5V2.75024ZM21.25 10.5002V11.5002H22.75V10.5002H21.25ZM2.75 11.5002V10.5002H1.25V11.5002H2.75ZM1.25 11.5002C1.25 12.6548 1.24959 13.5583 1.29931 14.2871C1.3495 15.0225 1.45323 15.6346 1.68769 16.2007L3.07351 15.6266C2.92737 15.2738 2.84081 14.8441 2.79584 14.185C2.75041 13.5191 2.75 12.6754 2.75 11.5002H1.25ZM7.8025 18.2418C6.54706 18.2202 5.88923 18.1403 5.37359 17.9267L4.79957 19.3126C5.60454 19.646 6.52138 19.72 7.77666 19.7416L7.8025 18.2418ZM1.68769 16.2007C2.27128 17.6096 3.39066 18.729 4.79957 19.3126L5.3736 17.9267C4.33223 17.4954 3.50486 16.668 3.07351 15.6266L1.68769 16.2007ZM21.25 11.5002C21.25 12.6754 21.2496 13.5191 21.2042 14.185C21.1592 14.8441 21.0726 15.2738 20.9265 15.6266L22.3123 16.2007C22.5468 15.6346 22.6505 15.0225 22.7007 14.2871C22.7504 13.5583 22.75 12.6548 22.75 11.5002H21.25ZM16.2233 19.7416C17.4786 19.72 18.3955 19.646 19.2004 19.3126L18.6264 17.9267C18.1108 18.1403 17.4529 18.2202 16.1975 18.2418L16.2233 19.7416ZM20.9265 15.6266C20.4951 16.668 19.6678 17.4954 18.6264 17.9267L19.2004 19.3126C20.6093 18.729 21.7287 17.6096 22.3123 16.2007L20.9265 15.6266ZM13.5 2.75024C15.1512 2.75024 16.337 2.75104 17.2619 2.83898C18.1757 2.92586 18.7571 3.09247 19.2206 3.37652L20.0044 2.09756C19.2655 1.64481 18.4274 1.44303 17.4039 1.34571C16.3915 1.24945 15.1222 1.25024 13.5 1.25024V2.75024ZM22.75 10.5002C22.75 8.87805 22.7508 7.60874 22.6545 6.59635C22.5572 5.5728 22.3554 4.7347 21.9027 3.99588L20.6237 4.77962C20.9078 5.24315 21.0744 5.82458 21.1613 6.73833C21.2492 7.66325 21.25 8.84901 21.25 10.5002H22.75ZM19.2206 3.37652C19.7925 3.72696 20.2733 4.20776 20.6237 4.77963L21.9027 3.99588C21.4286 3.22218 20.7781 2.57168 20.0044 2.09756L19.2206 3.37652ZM10.5 1.25024C8.87781 1.25024 7.6085 1.24945 6.59611 1.34571C5.57256 1.44303 4.73445 1.64481 3.99563 2.09756L4.77938 3.37652C5.24291 3.09247 5.82434 2.92586 6.73809 2.83898C7.663 2.75104 8.84876 2.75024 10.5 2.75024V1.25024ZM2.75 10.5002C2.75 8.84901 2.75079 7.66325 2.83873 6.73833C2.92561 5.82458 3.09223 5.24315 3.37628 4.77963L2.09732 3.99588C1.64457 4.7347 1.44279 5.5728 1.34547 6.59635C1.24921 7.60874 1.25 8.87805 1.25 10.5002H2.75ZM3.99563 2.09756C3.22194 2.57168 2.57144 3.22218 2.09732 3.99588L3.37628 4.77963C3.72672 4.20776 4.20752 3.72696 4.77938 3.37652L3.99563 2.09756ZM11.0166 20.0901C10.8136 19.747 10.6354 19.4444 10.4621 19.2066C10.2795 18.9562 10.0702 18.7306 9.77986 18.5618L9.02572 19.8584C9.07313 19.886 9.13772 19.9362 9.24985 20.0901C9.37122 20.2566 9.50835 20.4867 9.72579 20.8541L11.0166 20.0901ZM7.77666 19.7416C8.21575 19.7492 8.49387 19.7547 8.70588 19.7782C8.90399 19.8001 8.98078 19.8323 9.02572 19.8584L9.77986 18.5618C9.4871 18.3915 9.18246 18.3218 8.87097 18.2873C8.57339 18.2543 8.21375 18.2489 7.8025 18.2418L7.77666 19.7416ZM14.2742 20.8541C14.4916 20.4867 14.6287 20.2566 14.7501 20.0901C14.8622 19.9362 14.9268 19.886 14.9742 19.8584L14.2201 18.5618C13.9298 18.7306 13.7204 18.9562 13.5379 19.2066C13.3646 19.4444 13.1864 19.747 12.9833 20.0901L14.2742 20.8541ZM16.1975 18.2418C15.7862 18.2489 15.4266 18.2543 15.129 18.2873C14.8175 18.3218 14.5129 18.3915 14.2201 18.5618L14.9742 19.8584C15.0192 19.8323 15.096 19.8001 15.2941 19.7782C15.5061 19.7547 15.7842 19.7492 16.2233 19.7416L16.1975 18.2418Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M9 11.0002C9 11.5525 8.55228 12.0002 8 12.0002C7.44772 12.0002 7 11.5525 7 11.0002C7 10.448 7.44772 10.0002 8 10.0002C8.55228 10.0002 9 10.448 9 11.0002Z"
              fill="currentColor"
            />
            <path
              d="M13 11.0002C13 11.5525 12.5523 12.0002 12 12.0002C11.4477 12.0002 11 11.5525 11 11.0002C11 10.448 11.4477 10.0002 12 10.0002C12.5523 10.0002 13 10.448 13 11.0002Z"
              fill="currentColor"
            />
            <path
              d="M17 11.0002C17 11.5525 16.5523 12.0002 16 12.0002C15.4477 12.0002 15 11.5525 15 11.0002C15 10.448 15.4477 10.0002 16 10.0002C16.5523 10.0002 17 10.448 17 11.0002Z"
              fill="currentColor"
            />
          </g>
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
            d="M13.6288 20.4721L13.0867 21.3879C12.6035 22.2042 11.3965 22.2042 10.9133 21.3879L10.3712 20.4721C9.95073 19.7617 9.74049 19.4065 9.40279 19.2101C9.06509 19.0137 8.63992 19.0063 7.78958 18.9917C6.53422 18.9701 5.74689 18.8931 5.08658 18.6196C3.86144 18.1122 2.88807 17.1388 2.3806 15.9137C2 14.9948 2 13.83 2 11.5002V10.5002C2 7.22681 2 5.5901 2.7368 4.38775C3.14908 3.71497 3.71473 3.14932 4.38751 2.73704C5.58985 2.00024 7.22657 2.00024 10.5 2.00024H13.5C16.7734 2.00024 18.4101 2.00024 19.6125 2.73704C20.2853 3.14932 20.8509 3.71497 21.2632 4.38775C22 5.5901 22 7.22681 22 10.5002V11.5002C22 13.83 22 14.9948 21.6194 15.9137C21.1119 17.1388 20.1386 18.1122 18.9134 18.6196C18.2531 18.8932 17.4658 18.9701 16.2104 18.9917C15.36 19.0063 14.9349 19.0137 14.5972 19.2101C14.2595 19.4065 14.0492 19.7617 13.6288 20.4721Z"
            fill="currentColor"
          />
          <path
            d="M17 11.0002C17 11.5525 16.5523 12.0002 16 12.0002C15.4477 12.0002 15 11.5525 15 11.0002C15 10.448 15.4477 10.0002 16 10.0002C16.5523 10.0002 17 10.448 17 11.0002Z"
            fill="currentColor"
          />
          <path
            d="M13 11.0002C13 11.5525 12.5523 12.0002 12 12.0002C11.4477 12.0002 11 11.5525 11 11.0002C11 10.448 11.4477 10.0002 12 10.0002C12.5523 10.0002 13 10.448 13 11.0002Z"
            fill="currentColor"
          />
          <path
            d="M9 11.0002C9 11.5525 8.55228 12.0002 8 12.0002C7.44772 12.0002 7 11.5525 7 11.0002C7 10.448 7.44772 10.0002 8 10.0002C8.55228 10.0002 9 10.448 9 11.0002Z"
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
            d="M13.0867 21.3879L13.6288 20.4721C14.0492 19.7617 14.2595 19.4065 14.5972 19.2101C14.9349 19.0137 15.36 19.0063 16.2104 18.9917C17.4658 18.9701 18.2531 18.8932 18.9134 18.6196C20.1386 18.1122 21.1119 17.1388 21.6194 15.9137C22 14.9948 22 13.83 22 11.5002V10.5002C22 7.22681 22 5.5901 21.2632 4.38775C20.8509 3.71497 20.2853 3.14932 19.6125 2.73704C18.4101 2.00024 16.7734 2.00024 13.5 2.00024H10.5C7.22657 2.00024 5.58985 2.00024 4.38751 2.73704C3.71473 3.14932 3.14908 3.71497 2.7368 4.38775C2 5.5901 2 7.22681 2 10.5002V11.5002C2 13.83 2 14.9948 2.3806 15.9137C2.88807 17.1388 3.86144 18.1122 5.08658 18.6196C5.74689 18.8931 6.53422 18.9701 7.78958 18.9917C8.63992 19.0063 9.06509 19.0137 9.40279 19.2101C9.74049 19.4065 9.95073 19.7617 10.3712 20.4721L10.9133 21.3879C11.3965 22.2042 12.6035 22.2042 13.0867 21.3879ZM16 12.0002C16.5523 12.0002 17 11.5525 17 11.0002C17 10.448 16.5523 10.0002 16 10.0002C15.4477 10.0002 15 10.448 15 11.0002C15 11.5525 15.4477 12.0002 16 12.0002ZM13 11.0002C13 11.5525 12.5523 12.0002 12 12.0002C11.4477 12.0002 11 11.5525 11 11.0002C11 10.448 11.4477 10.0002 12 10.0002C12.5523 10.0002 13 10.448 13 11.0002ZM8 12.0002C8.55228 12.0002 9 11.5525 9 11.0002C9 10.448 8.55228 10.0002 8 10.0002C7.44772 10.0002 7 10.448 7 11.0002C7 11.5525 7.44772 12.0002 8 12.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChatDots as IconComponent).keywords = [
  "chat",
  "dots",
  "confabulate",
  "confab",
  "confabulation",
  "chitchat",
  "natter",
  "gossip",
  "visit",
  "chatter",
  "claver",
  "sprinkle",
  "scatter",
  "disperse",
  "dust",
  "dit",
  "stud",
  "point",
  "constellate",
  "pts",
];

export default IconChatDots as IconComponent;
