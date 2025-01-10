import { FC } from "react";

const IconHeadphonesRound: FC<IconProps> = ({
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
            d="M21 17V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V17"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M22 15.5V17.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 15.5V17.5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M8 13.8446C8 13.0802 8 12.698 7.82526 12.4323C7.73733 12.2985 7.62061 12.188 7.4844 12.1095C7.21371 11.9535 6.84812 11.9896 6.11694 12.0617C4.88487 12.1831 4.26884 12.2439 3.82737 12.5764C3.60394 12.7448 3.41638 12.9593 3.27646 13.2067C3 13.6955 3 14.3395 3 15.6276V17.1933C3 18.4685 3 19.1061 3.28198 19.5986C3.38752 19.7829 3.51981 19.9491 3.67416 20.0913C4.08652 20.4714 4.68844 20.5901 5.89227 20.8275C6.73944 20.9945 7.16302 21.078 7.47564 20.9021C7.591 20.8372 7.69296 20.7493 7.77572 20.6434C8 20.3565 8 19.9078 8 19.0104V13.8446Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M16 13.8446C16 13.0802 16 12.698 16.1747 12.4323C16.2627 12.2985 16.3794 12.188 16.5156 12.1095C16.7863 11.9535 17.1519 11.9896 17.8831 12.0617C19.1151 12.1831 19.7312 12.2439 20.1726 12.5764C20.3961 12.7448 20.5836 12.9593 20.7235 13.2067C21 13.6955 21 14.3395 21 15.6276V17.1933C21 18.4685 21 19.1061 20.718 19.5986C20.6125 19.7829 20.4802 19.9491 20.3258 20.0913C19.9135 20.4714 19.3116 20.5901 18.1077 20.8275C17.2606 20.9945 16.837 21.078 16.5244 20.9021C16.409 20.8372 16.307 20.7493 16.2243 20.6434C16 20.3565 16 19.9078 16 19.0104V13.8446Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12V14.7927C21.8282 14.765 21.9123 14.75 22 14.75C22.4142 14.75 22.75 15.0858 22.75 15.5V17.5C22.75 17.9142 22.4142 18.25 22 18.25C21.5858 18.25 21.25 17.9142 21.25 17.5V17H20.25V12C20.25 7.44365 16.5563 3.75 12 3.75C7.44365 3.75 3.75 7.44365 3.75 12V17H2.75V17.5C2.75 17.9142 2.41421 18.25 2 18.25C1.58579 18.25 1.25 17.9142 1.25 17.5V15.5C1.25 15.0858 1.58579 14.75 2 14.75C2.08766 14.75 2.17181 14.765 2.25 14.7927V12Z"
            fill="currentColor"
          />
          <path
            d="M8 14.0496C8 13.2003 8 12.7756 7.79032 12.4803C7.6848 12.3317 7.54473 12.2089 7.38127 12.1217C7.05645 11.9484 6.61775 11.9884 5.74033 12.0685C4.26185 12.2035 3.5226 12.271 2.99285 12.6405C2.72473 12.8275 2.49965 13.0659 2.33175 13.3408C2 13.8839 2 14.5995 2 16.0307V17.7703C2 19.1872 2 19.8957 2.33837 20.4428C2.46502 20.6476 2.62377 20.8323 2.80899 20.9904C3.30383 21.4126 4.02613 21.5445 5.47073 21.8083C6.48732 21.9939 6.99562 22.0867 7.37077 21.8912C7.5092 21.8191 7.63155 21.7214 7.73086 21.6038C8 21.285 8 20.7864 8 19.7893V14.0496Z"
            fill="currentColor"
          />
          <path
            d="M16 14.0496C16 13.2003 16 12.7756 16.2097 12.4803C16.3152 12.3317 16.4553 12.2089 16.6187 12.1217C16.9435 11.9484 17.3823 11.9884 18.2597 12.0685C19.7382 12.2035 20.4774 12.271 21.0072 12.6405C21.2753 12.8275 21.5003 13.0659 21.6682 13.3408C22 13.8839 22 14.5995 22 16.0307V17.7703C22 19.1872 22 19.8957 21.6616 20.4428C21.535 20.6476 21.3762 20.8323 21.191 20.9904C20.6962 21.4126 19.9739 21.5445 18.5293 21.8083C17.5127 21.9939 17.0044 22.0867 16.6292 21.8912C16.4908 21.8191 16.3685 21.7214 16.2691 21.6038C16 21.285 16 20.7864 16 19.7893V14.0496Z"
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
            d="M2 12.124C2 6.53269 6.47713 2 11.9999 2C17.5228 2 21.9999 6.53269 21.9999 12.124L21.9999 17.3675C22.0002 18.1844 22.0004 18.7446 21.8568 19.2364C21.576 20.1982 20.9046 20.9937 20.01 21.4245C19.5525 21.6449 19.0059 21.732 18.2088 21.8591L18.0789 21.8799C17.7954 21.9252 17.5532 21.9639 17.3522 21.9839C17.1431 22.0047 16.9299 22.0111 16.7118 21.9676C15.9942 21.8245 15.4024 21.3126 15.1508 20.6172C15.0744 20.4059 15.0474 20.1916 15.035 19.9793C15.0232 19.7753 15.0232 19.527 15.0232 19.2365L15.0231 15.0641C15.0226 14.6386 15.0222 14.2725 15.1195 13.959C15.3422 13.2416 15.9238 12.6975 16.6477 12.5292C16.9641 12.4556 17.3246 12.4849 17.7435 12.5189L17.8367 12.5264L17.9465 12.5352C18.7302 12.5975 19.2664 12.6402 19.7216 12.8106C20.0415 12.9304 20.3381 13.0953 20.6046 13.2976V12.124C20.6046 7.31288 16.7521 3.41266 11.9999 3.41266C7.24776 3.41266 3.39534 7.31288 3.39534 12.124V13.2976C3.66176 13.0953 3.95843 12.9304 4.27829 12.8106C4.73345 12.6402 5.26965 12.5975 6.05335 12.5352L6.16318 12.5264L6.25641 12.5189C6.67534 12.4849 7.03581 12.4556 7.35224 12.5292C8.07612 12.6975 8.65766 13.2416 8.88039 13.959C8.97774 14.2725 8.9773 14.6386 8.97678 15.0641L8.97671 19.2365C8.97671 19.527 8.97672 19.7753 8.96487 19.9793C8.95254 20.1916 8.9255 20.4059 8.84906 20.6172C8.59754 21.3126 8.00574 21.8245 7.28812 21.9676C7.07001 22.0111 6.85675 22.0047 6.64768 21.9839C6.44671 21.9639 6.20449 21.9252 5.92102 21.8799L5.79106 21.8591C4.99399 21.732 4.44737 21.6449 3.98991 21.4245C3.09534 20.9937 2.42388 20.1982 2.14308 19.2364C2.02467 18.8309 2.00404 18.3788 2.0006 17.7747L2 17.5803V12.124Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHeadphonesRound as IconComponent).keywords = [
  "headphones",
  "round",
  "earpiece",
  "earphone",
  "phone",
  "earphones",
  "headset",
  "phones",
  "canceling",
  "handsets",
  "headsets",
  "orbicular",
  "rotund",
  "orbiculate",
  "discoidal",
  "disklike",
  "discoid",
  "ringlike",
  "globular",
  "globose",
];

export default IconHeadphonesRound as IconComponent;
