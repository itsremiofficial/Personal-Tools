import { FC } from "react";

const IconPills: FC<IconProps> = ({
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
            d="M17.8445 6.15571C17.8445 6.15571 17.4119 8.40024 14.9057 10.9064C12.3996 13.4125 10.1555 13.8448 10.1555 13.8448M20.4075 16.4078C18.2843 18.5311 14.8418 18.5311 12.7185 16.4078L7.59246 11.2818C5.46918 9.15848 5.46918 5.71597 7.59246 3.5927C9.71573 1.46943 13.1582 1.46943 15.2815 3.5927L20.4075 8.71874C22.5308 10.842 22.5308 14.2845 20.4075 16.4078Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14.5 6.50024L13 5.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6.73022 10.1349C4.02637 10.7175 2 13.1222 2 16.0003C2 19.314 4.68629 22.0003 8 22.0003C10.8911 22.0003 13.3046 19.9555 13.8732 17.2332"
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
            d="M10.0103 13.109L9.51514 13.2044L7.59246 11.2818C5.46918 9.15848 5.46918 5.71597 7.59246 3.5927C9.71573 1.46943 13.1582 1.46943 15.2815 3.5927L17.204 5.51521L17.1085 6.01068L17.1067 6.01925C17.1044 6.02937 17.1002 6.04764 17.0937 6.07359C17.0806 6.12549 17.0581 6.20803 17.0232 6.31745C16.9532 6.5363 16.8335 6.86239 16.6391 7.26568C16.2508 8.0714 15.5633 9.18805 14.3752 10.3761C13.1872 11.5642 12.0706 12.2516 11.265 12.6398C10.8618 12.8341 10.5358 12.9538 10.317 13.0237C10.2076 13.0586 10.125 13.0811 10.0732 13.0941C10.0472 13.1007 10.029 13.1049 10.0189 13.1071L10.0103 13.109ZM13.5303 4.46991C13.2374 4.17702 12.7626 4.17702 12.4697 4.46991C12.1768 4.76281 12.1768 5.23768 12.4697 5.53057L13.9697 7.03057C14.2626 7.32347 14.7374 7.32347 15.0303 7.03057C15.3232 6.73768 15.3232 6.26281 15.0303 5.96991L13.5303 4.46991Z"
            fill="currentColor"
          />
          <path
            d="M20.4075 8.71874L18.4546 6.76579L18.452 6.77384C18.3625 7.05415 18.2174 7.44583 17.9904 7.91693C17.5359 8.86002 16.754 10.1187 15.4359 11.4368C14.1178 12.7548 12.8592 13.5366 11.9162 13.9911C11.4452 14.2181 11.0535 14.3631 10.7732 14.4526L10.7658 14.455L12.7185 16.4078C14.8418 18.5311 18.2843 18.5311 20.4075 16.4078C22.5308 14.2845 22.5308 10.842 20.4075 8.71874Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6.71656 10.1378C6.951 10.547 7.24297 10.9323 7.59245 11.2817L12.7185 16.4078C13.068 16.7573 13.4532 17.0492 13.8624 17.2837C13.6136 18.4254 13.0397 19.4458 12.2426 20.2429C11.1569 21.3287 9.65685 22.0002 8 22.0002C4.68629 22.0002 2 19.3139 2 16.0002C2 14.3434 2.67157 12.8434 3.75736 11.7576C4.55447 10.9605 5.57481 10.3866 6.71656 10.1378Z"
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
            d="M7.59246 11.2818C5.46918 9.15848 5.46918 5.71597 7.59246 3.5927C9.71573 1.46943 13.1582 1.46943 15.2815 3.5927L17.204 5.51518L17.1085 6.01066L17.1066 6.01923C17.1044 6.02936 17.1002 6.04763 17.0936 6.07357C17.0805 6.12547 17.0581 6.20801 17.0231 6.31743C16.9532 6.53628 16.8335 6.86238 16.6391 7.26567C16.2508 8.07138 15.5633 9.18803 14.3752 10.3761C13.1872 11.5641 12.0706 12.2516 11.265 12.6398C10.8618 12.8341 10.5358 12.9538 10.3169 13.0237C10.2076 13.0586 10.125 13.081 10.0731 13.0941C10.0472 13.1007 10.0289 13.1049 10.0188 13.1071L10.0103 13.109L9.51505 13.2043L7.59246 11.2818ZM13.5303 4.46991C13.2374 4.17702 12.7626 4.17702 12.4697 4.46991C12.1768 4.76281 12.1768 5.23768 12.4697 5.53057L13.9697 7.03057C14.2626 7.32347 14.7374 7.32347 15.0303 7.03057C15.3232 6.73768 15.3232 6.26281 15.0303 5.96991L13.5303 4.46991Z"
            fill="currentColor"
          />
          <path
            d="M18.452 6.77382L18.4546 6.76577L20.4075 8.71874C22.5308 10.842 22.5308 14.2845 20.4075 16.4078C18.2843 18.5311 14.8418 18.5311 12.7185 16.4078L10.7657 14.455L10.7732 14.4526C11.0535 14.3631 11.4451 14.2181 11.9162 13.9911C12.8592 13.5366 14.1178 12.7548 15.4359 11.4368C16.754 10.1187 17.5358 8.86 17.9904 7.91692C18.2174 7.44581 18.3625 7.05413 18.452 6.77382Z"
            fill="currentColor"
          />
          <path
            d="M5.28563 10.6479C3.33589 11.6387 2 13.6635 2 16.0003C2 19.314 4.68629 22.0003 8 22.0003C10.3368 22.0003 12.3616 20.6644 13.3523 18.7147C12.7425 18.3961 12.1701 17.9807 11.6578 17.4685L6.5318 12.3425C6.01955 11.8302 5.60416 11.2578 5.28563 10.6479Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPills as IconComponent).keywords = [
  "pills",
  "tablet",
  "lozenge",
  "anovulatory drug",
  "birth control pill",
  "contraceptive pill",
  "oral contraceptive",
  "oral contraceptive pill",
  "antibilious",
  "aspirins",
];

export default IconPills as IconComponent;