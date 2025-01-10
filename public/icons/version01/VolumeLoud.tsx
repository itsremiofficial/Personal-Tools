import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconVolumeLoud: FC<IconProps> = ({
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
            d="M1.53479 10.9714C1.60847 9.76255 1.64531 9.15814 1.95854 8.57679C2.24473 8.04563 2.7923 7.53042 3.33988 7.27707C3.93921 6.99979 4.62617 6.99979 6.00008 6.99979C6.51215 6.99979 6.76819 6.99979 7.0162 6.95791C7.26138 6.9165 7.50046 6.84478 7.72795 6.74438C7.95806 6.64283 8.17181 6.50189 8.59932 6.22002L8.81825 6.07566C11.3612 4.39898 12.6327 3.56063 13.7001 3.92487C13.9047 3.9947 14.1028 4.09551 14.2797 4.21984C15.2024 4.86829 15.2725 6.37699 15.4127 9.3944C15.4646 10.5117 15.5 11.4679 15.5 11.9998C15.5 12.5317 15.4646 13.4879 15.4127 14.6052C15.2725 17.6226 15.2024 19.1313 14.2797 19.7797C14.1028 19.9041 13.9047 20.0049 13.7001 20.0747C12.6327 20.4389 11.3612 19.6006 8.81825 17.9239L8.59932 17.7796C8.17181 17.4977 7.95806 17.3567 7.72795 17.2552C7.50046 17.1548 7.26138 17.0831 7.0162 17.0417C6.76819 16.9998 6.51215 16.9998 6.00008 16.9998C4.62617 16.9998 3.93921 16.9998 3.33988 16.7225C2.7923 16.4692 2.24473 15.9539 1.95854 15.4228C1.64531 14.8414 1.60847 14.237 1.53479 13.0282C1.51299 12.6706 1.5 12.3222 1.5 11.9998C1.5 11.6774 1.51299 11.329 1.53479 10.9714Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 6C20 6 21.5 7.8 21.5 12C21.5 16.2 20 18 20 18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            d="M18 9C18 9 18.5 9.9 18.5 12C18.5 14.1 18 15 18 15"
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
            d="M2.00299 11.7155C2.04033 9.87326 2.059 8.95215 2.67093 8.16363C2.78262 8.0197 2.9465 7.8487 3.08385 7.73274C3.83639 7.09741 4.82995 7.09741 6.81706 7.09741C7.527 7.09741 7.88197 7.09741 8.22035 7.00452C8.29067 6.98522 8.36024 6.96296 8.4289 6.93781C8.75936 6.81674 9.05574 6.60837 9.64851 6.19161C11.9872 4.54738 13.1565 3.72527 14.138 4.08241C14.3261 4.15088 14.5083 4.24972 14.671 4.37162C15.5194 5.00744 15.5839 6.48675 15.7128 9.44537C15.7606 10.5409 15.7931 11.4785 15.7931 12C15.7931 12.5215 15.7606 13.4591 15.7128 14.5546C15.5839 17.5132 15.5194 18.9926 14.671 19.6284C14.5083 19.7503 14.3261 19.8491 14.138 19.9176C13.1565 20.2747 11.9872 19.4526 9.64851 17.8084C9.05574 17.3916 8.75936 17.1833 8.4289 17.0622C8.36024 17.037 8.29067 17.0148 8.22035 16.9955C7.88197 16.9026 7.52701 16.9026 6.81706 16.9026C4.82995 16.9026 3.83639 16.9026 3.08385 16.2673C2.9465 16.1513 2.78262 15.9803 2.67093 15.8364C2.059 15.0478 2.04033 14.1267 2.00299 12.2845C2.00103 12.1878 2 12.0928 2 12C2 11.9072 2.00103 11.8122 2.00299 11.7155Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.4896 5.5523C19.7822 5.29229 20.2171 5.33445 20.4609 5.64646L19.9311 6.11724C20.4609 5.64646 20.4609 5.64646 20.4609 5.64646L20.462 5.64781L20.4632 5.64933L20.4659 5.65286L20.4728 5.66195C20.478 5.66891 20.4845 5.67767 20.4922 5.68825C20.5075 5.7094 20.5276 5.73783 20.5516 5.77369C20.5996 5.8454 20.6636 5.94678 20.738 6.07901C20.8869 6.34356 21.0771 6.73103 21.2645 7.25049C21.6398 8.29118 22.0001 9.85148 22.0001 12.0003C22.0001 14.1492 21.6398 15.7095 21.2645 16.7502C21.0771 17.2697 20.8869 17.6571 20.738 17.9217C20.6636 18.0539 20.5996 18.1553 20.5516 18.227C20.5276 18.2629 20.5075 18.2913 20.4922 18.3124C20.4845 18.323 20.478 18.3318 20.4728 18.3387L20.4659 18.3478L20.4632 18.3514L20.462 18.3529C20.462 18.3529 20.4609 18.3542 19.9311 17.8834L20.4609 18.3542C20.2171 18.6662 19.7822 18.7084 19.4896 18.4484C19.1984 18.1896 19.1579 17.7291 19.3978 17.4172C19.3978 17.4172 19.3995 17.4149 19.401 17.4128C19.4059 17.4061 19.4155 17.3926 19.4292 17.3721C19.4566 17.3312 19.5004 17.2626 19.5553 17.165C19.665 16.9699 19.8196 16.6588 19.9771 16.2222C20.2914 15.3509 20.6208 13.9696 20.6208 12.0003C20.6208 10.031 20.2914 8.64979 19.9771 7.77847C19.8196 7.34192 19.665 7.03077 19.5553 6.83571C19.5004 6.73813 19.4566 6.66945 19.4292 6.62856C19.4155 6.60811 19.4059 6.5946 19.401 6.58789C19.3995 6.58572 19.3978 6.58351 19.3978 6.58351"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.7572 8.41592C18.0902 8.21868 18.51 8.34659 18.695 8.70163L18.0921 9.05876C18.695 8.70163 18.695 8.70163 18.695 8.70163L18.6957 8.70291L18.6964 8.70428L18.6979 8.70727L18.7014 8.71425L18.7103 8.73224C18.717 8.74604 18.7251 8.76345 18.7345 8.78454C18.7534 8.82672 18.7772 8.88359 18.8043 8.95571C18.8584 9.1 18.9252 9.30487 18.9901 9.57473C19.12 10.1149 19.2415 10.9118 19.2415 12.0003C19.2415 13.0888 19.12 13.8857 18.9901 14.4259C18.9252 14.6958 18.8584 14.9006 18.8043 15.0449C18.7772 15.117 18.7534 15.1739 18.7345 15.2161C18.7251 15.2372 18.717 15.2546 18.7103 15.2684L18.7014 15.2864L18.6979 15.2934L18.6964 15.2963L18.6957 15.2977C18.6957 15.2977 18.695 15.299 18.0921 14.9419L18.695 15.299C18.51 15.654 18.0902 15.782 17.7572 15.5847C17.4271 15.3891 17.3063 14.9474 17.4846 14.5938L17.4892 14.5838C17.4955 14.5696 17.5076 14.5415 17.5236 14.4987C17.5557 14.4132 17.6039 14.2687 17.654 14.0606C17.754 13.6448 17.8622 12.9709 17.8622 12.0003C17.8622 11.0297 17.754 10.3558 17.654 9.94003C17.6039 9.73189 17.5557 9.58745 17.5236 9.50194C17.5076 9.45915 17.4955 9.43099 17.4892 9.41687L17.4846 9.40684C17.3063 9.05328 17.4271 8.61149 17.7572 8.41592Z"
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
            d="M2.00299 11.7155C2.04033 9.87326 2.059 8.95215 2.67093 8.16363C2.78262 8.0197 2.9465 7.8487 3.08385 7.73274C3.83639 7.09741 4.82995 7.09741 6.81706 7.09741C7.527 7.09741 7.88198 7.09741 8.22035 7.00452C8.29067 6.98522 8.36024 6.96296 8.4289 6.93781C8.75936 6.81674 9.05574 6.60837 9.64851 6.19161C11.9872 4.54738 13.1565 3.72527 14.138 4.08241C14.3261 4.15088 14.5083 4.24972 14.671 4.37162C15.5194 5.00744 15.5839 6.48675 15.7128 9.44537C15.7606 10.5409 15.7931 11.4785 15.7931 12C15.7931 12.5215 15.7606 13.4591 15.7128 14.5546C15.5839 17.5132 15.5194 18.9926 14.671 19.6284C14.5083 19.7503 14.3261 19.8491 14.138 19.9176C13.1565 20.2747 11.9872 19.4526 9.64851 17.8084C9.05574 17.3916 8.75936 17.1833 8.4289 17.0622C8.36024 17.037 8.29067 17.0148 8.22035 16.9955C7.88198 16.9026 7.527 16.9026 6.81706 16.9026C4.82995 16.9026 3.83639 16.9026 3.08385 16.2673C2.9465 16.1513 2.78262 15.9803 2.67093 15.8364C2.059 15.0478 2.04033 14.1267 2.00299 12.2845C2.00103 12.1878 2 12.0928 2 12C2 11.9072 2.00103 11.8122 2.00299 11.7155Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.4895 5.55219C19.7821 5.29218 20.217 5.33434 20.4608 5.64635L19.931 6.11713C20.4608 5.64635 20.4606 5.64602 20.4608 5.64635L20.4619 5.6477L20.4631 5.64921L20.4658 5.65275L20.4727 5.66184C20.4779 5.6688 20.4844 5.67756 20.4921 5.68814C20.5075 5.70929 20.5275 5.73772 20.5515 5.77358C20.5995 5.84529 20.6635 5.94667 20.7379 6.07889C20.8868 6.34345 21.077 6.73092 21.2644 7.25038C21.6397 8.29107 22 9.85136 22 12.0002C22 14.1491 21.6397 15.7094 21.2644 16.7501C21.077 17.2695 20.8868 17.657 20.7379 17.9216C20.6635 18.0538 20.5995 18.1552 20.5515 18.2269C20.5275 18.2627 20.5075 18.2912 20.4921 18.3123C20.4844 18.3229 20.4779 18.3317 20.4727 18.3386L20.4658 18.3477L20.4631 18.3513L20.4619 18.3528C20.4616 18.3531 20.4608 18.3541 19.931 17.8833L20.4608 18.3541C20.217 18.6661 19.7821 18.7083 19.4895 18.4483C19.1983 18.1895 19.1578 17.729 19.3977 17.417C19.3983 17.4163 19.3994 17.4148 19.4009 17.4127C19.4058 17.406 19.4154 17.3925 19.4291 17.372C19.4565 17.3311 19.5003 17.2625 19.5552 17.1649C19.6649 16.9698 19.8195 16.6587 19.977 16.2221C20.2913 15.3508 20.6207 13.9695 20.6207 12.0002C20.6207 10.0309 20.2913 8.64968 19.977 7.77836C19.8195 7.34181 19.6649 7.03066 19.5552 6.8356C19.5003 6.73802 19.4565 6.66934 19.4291 6.62845C19.4154 6.608 19.4058 6.59449 19.4009 6.58778C19.3994 6.58561 19.3983 6.58416 19.3977 6.5834C19.3977 6.5834 19.3977 6.58341 19.3977 6.5834"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.7571 8.41595C18.0901 8.21871 18.51 8.34663 18.6949 8.70166L18.0921 9.0588C18.6949 8.70166 18.6948 8.70134 18.6949 8.70166L18.6956 8.70295L18.6963 8.70432L18.6978 8.7073L18.7014 8.71428L18.7102 8.73227C18.7169 8.74607 18.7251 8.76348 18.7345 8.78457C18.7533 8.82676 18.7772 8.88363 18.8042 8.95574C18.8584 9.10004 18.9251 9.3049 18.99 9.57476C19.1199 10.115 19.2415 10.9119 19.2415 12.0003C19.2415 13.0888 19.1199 13.8857 18.99 14.4259C18.9251 14.6958 18.8584 14.9007 18.8042 15.045C18.7772 15.1171 18.7533 15.1739 18.7345 15.2161C18.7251 15.2372 18.7169 15.2546 18.7102 15.2684L18.7014 15.2864L18.6978 15.2934L18.6963 15.2964L18.6956 15.2978C18.6954 15.2981 18.6949 15.299 18.0921 14.9419L18.6949 15.299C18.51 15.6541 18.0901 15.782 17.7571 15.5847C17.427 15.3892 17.3063 14.9474 17.4846 14.5938L17.4892 14.5838C17.4955 14.5697 17.5075 14.5415 17.5236 14.4987C17.5557 14.4132 17.6039 14.2688 17.6539 14.0606C17.7539 13.6448 17.8622 12.9709 17.8622 12.0003C17.8622 11.0298 17.7539 10.3559 17.6539 9.94007C17.6039 9.73193 17.5557 9.58748 17.5236 9.50197C17.5075 9.45918 17.4955 9.43102 17.4892 9.41691L17.4846 9.40687C17.3063 9.05332 17.427 8.61152 17.7571 8.41595Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVolumeLoud as IconComponentType).keywords = [
  "volume",
  "loud",
  "loudness",
  "book",
  "mass",
  "bulk",
  "intensity",
  "quantum",
  "weight",
  "density",
  "potentiometer",
  "aloud",
  "earsplitting",
  "tawdry",
  "garish",
  "gaudy",
  "roaring",
  "gimcrack",
  "tacky",
  "flashy",
];

export default IconVolumeLoud as IconComponentType;
