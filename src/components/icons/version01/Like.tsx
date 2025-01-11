import { FC } from "react";

const IconLike: FC<IconProps> = ({
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
            d="M20.9751 12.1856L20.2361 12.0578L20.9751 12.1856ZM20.2696 16.2653L19.5306 16.1375L20.2696 16.2653ZM6.93776 20.4774L6.19055 20.542H6.19055L6.93776 20.4774ZM6.1256 11.0848L6.87281 11.0202L6.1256 11.0848ZM13.9949 5.22179L14.7351 5.34305V5.34305L13.9949 5.22179ZM13.3323 9.26635L14.0724 9.38761V9.38761L13.3323 9.26635ZM6.69813 9.67785L6.20854 9.1097H6.20854L6.69813 9.67785ZM8.13687 8.43806L8.62646 9.00621H8.62646L8.13687 8.43806ZM10.518 4.78411L9.79207 4.59579L10.518 4.78411ZM10.9938 2.95025L11.7197 3.13857L11.7197 3.13857L10.9938 2.95025ZM12.6676 2.06472L12.4382 2.77878L12.4382 2.77878L12.6676 2.06472ZM12.8126 2.11129L13.0419 1.39723L13.0419 1.39723L12.8126 2.11129ZM9.86194 6.46298L10.5235 6.81636V6.81636L9.86194 6.46298ZM13.9047 3.24789L13.1787 3.43621V3.43621L13.9047 3.24789ZM11.6742 2.13276L11.3486 1.45711L11.3486 1.45711L11.6742 2.13276ZM20.2361 12.0578L19.5306 16.1375L21.0086 16.3931L21.7142 12.3134L20.2361 12.0578ZM13.245 21.2504H8.59634V22.7504H13.245V21.2504ZM7.68497 20.4128L6.87281 11.0202L5.37839 11.1494L6.19055 20.542L7.68497 20.4128ZM19.5306 16.1375C19.0238 19.0681 16.3813 21.2504 13.245 21.2504V22.7504C17.0712 22.7504 20.3708 20.0814 21.0086 16.3931L19.5306 16.1375ZM13.2548 5.10052L12.5921 9.14508L14.0724 9.38761L14.7351 5.34305L13.2548 5.10052ZM7.18772 10.246L8.62646 9.00621L7.64728 7.8699L6.20854 9.1097L7.18772 10.246ZM11.244 4.97243L11.7197 3.13857L10.2678 2.76193L9.79207 4.59579L11.244 4.97243ZM12.4382 2.77878L12.5832 2.82535L13.0419 1.39723L12.897 1.35066L12.4382 2.77878ZM10.5235 6.81636C10.8354 6.23234 11.0777 5.61376 11.244 4.97243L9.79207 4.59579C9.65572 5.12144 9.45698 5.62929 9.20041 6.10961L10.5235 6.81636ZM12.5832 2.82535C12.8896 2.92379 13.1072 3.16045 13.1787 3.43621L14.6306 3.05957C14.4252 2.26756 13.819 1.64685 13.0419 1.39723L12.5832 2.82535ZM11.7197 3.13857C11.7547 3.00357 11.8522 2.87949 11.9998 2.80841L11.3486 1.45711C10.8166 1.71346 10.417 2.18663 10.2678 2.76194L11.7197 3.13857ZM11.9998 2.80841C12.1345 2.74348 12.2931 2.73218 12.4382 2.77878L12.897 1.35066C12.3872 1.18691 11.8312 1.22456 11.3486 1.45711L11.9998 2.80841ZM14.1537 10.9846H19.3348V9.48457H14.1537V10.9846ZM14.7351 5.34305C14.8596 4.58293 14.824 3.80514 14.6306 3.05957L13.1787 3.43621C13.3197 3.9796 13.3456 4.5465 13.2548 5.10052L14.7351 5.34305ZM8.59634 21.2504C8.12243 21.2504 7.726 20.8873 7.68497 20.4128L6.19055 20.542C6.29851 21.7906 7.34269 22.7504 8.59634 22.7504V21.2504ZM8.62646 9.00621C9.30632 8.42037 10.0391 7.72304 10.5235 6.81636L9.20041 6.10961C8.85403 6.75804 8.30249 7.30529 7.64728 7.8699L8.62646 9.00621ZM21.7142 12.3134C21.9695 10.8369 20.8341 9.48457 19.3348 9.48457V10.9846C19.9014 10.9846 20.3332 11.4963 20.2361 12.0578L21.7142 12.3134ZM12.5921 9.14508C12.4344 10.1079 13.1766 10.9846 14.1537 10.9846V9.48457C14.1038 9.48457 14.0639 9.43937 14.0724 9.38761L12.5921 9.14508ZM6.87281 11.0202C6.84739 10.7262 6.96474 10.4382 7.18772 10.246L6.20854 9.1097C5.62021 9.61667 5.31148 10.3757 5.37839 11.1494L6.87281 11.0202Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M3.9716 21.4713L3.22439 21.5359L3.9716 21.4713ZM3 10.2347L3.74721 10.1701C3.71261 9.76999 3.36893 9.46812 2.96767 9.48544C2.5664 9.50275 2.25 9.8331 2.25 10.2347L3 10.2347ZM4.71881 21.4067L3.74721 10.1701L2.25279 10.2994L3.22439 21.5359L4.71881 21.4067ZM3.75 21.5133V10.2347H2.25V21.5133H3.75ZM3.22439 21.5359C3.2112 21.3833 3.33146 21.2505 3.48671 21.2505V22.7505C4.21268 22.7505 4.78122 22.1284 4.71881 21.4067L3.22439 21.5359ZM3.48671 21.2505C3.63292 21.2505 3.75 21.369 3.75 21.5133H2.25C2.25 22.1958 2.80289 22.7505 3.48671 22.7505V21.2505Z"
            fill="currentColor"
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
            d="M20.2696 16.2653L20.9751 12.1856C21.1514 11.1666 20.3677 10.2346 19.3348 10.2346H14.1537C13.6402 10.2346 13.2491 9.77365 13.3323 9.26635L13.9949 5.22179C14.1026 4.56471 14.0719 3.89237 13.9047 3.24789C13.7662 2.71401 13.3543 2.28532 12.8126 2.11129L12.6676 2.06472C12.3402 1.95955 11.9829 1.98402 11.6742 2.13276C11.3344 2.29648 11.0859 2.5951 10.9938 2.95025L10.518 4.78411C10.3667 5.3676 10.1462 5.93082 9.86194 6.46298C9.44659 7.24054 8.8044 7.86283 8.13687 8.43806L6.69813 9.67785C6.29247 10.0274 6.07944 10.5509 6.1256 11.0848L6.93776 20.4774C7.01226 21.339 7.73256 22.0004 8.59634 22.0004H13.245C16.7263 22.0004 19.6973 19.5748 20.2696 16.2653Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.96767 9.48543C3.36893 9.46812 3.71261 9.76998 3.74721 10.1701L4.71881 21.4066C4.78122 22.1284 4.21268 22.7505 3.48671 22.7505C2.80289 22.7505 2.25 22.1958 2.25 21.5133V10.2347C2.25 9.8331 2.5664 9.50275 2.96767 9.48543Z"
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
            d="M20.2696 16.2653L20.9751 12.1856C21.1514 11.1666 20.3677 10.2346 19.3348 10.2346H14.1537C13.6402 10.2346 13.2491 9.77365 13.3323 9.26635L13.9949 5.22179C14.1026 4.56471 14.0719 3.89237 13.9047 3.24789C13.7662 2.71401 13.3543 2.28532 12.8126 2.11129L12.6676 2.06472C12.3402 1.95955 11.9829 1.98402 11.6742 2.13276C11.3344 2.29648 11.0859 2.5951 10.9938 2.95025L10.518 4.78411C10.3667 5.3676 10.1462 5.93082 9.86194 6.46298C9.44659 7.24054 8.8044 7.86283 8.13687 8.43806L6.69813 9.67785C6.29247 10.0274 6.07944 10.5509 6.1256 11.0848L6.93776 20.4774C7.01226 21.339 7.73256 22.0004 8.59634 22.0004H13.245C16.7263 22.0004 19.6973 19.5748 20.2696 16.2653Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.96767 9.48543C3.36893 9.46812 3.71261 9.76998 3.74721 10.1701L4.71881 21.4066C4.78122 22.1284 4.21268 22.7505 3.48671 22.7505C2.80289 22.7505 2.25 22.1958 2.25 21.5133V10.2347C2.25 9.8331 2.5664 9.50275 2.96767 9.48543Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLike as IconComponent).keywords = [
  "like",
  "wish",
  "ish",
  "like-minded",
  "suchlike",
  "corresponding",
  "similar",
  "alike",
  "equal",
  "comparable",
];

export default IconLike as IconComponent;