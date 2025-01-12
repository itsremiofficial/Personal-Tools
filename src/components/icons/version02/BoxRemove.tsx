import { FC } from "react";

const IconBoxRemove: FC<IconProps> = ({
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
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M3.84082 7.43994L12.6708 12.5499L21.4408 7.46991"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.6709 21.61V12.54"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.281 9.17V14.83C22.281 14.88 22.281 14.92 22.271 14.97C21.571 14.36 20.671 14 19.671 14C18.731 14 17.861 14.33 17.171 14.88C16.251 15.61 15.671 16.74 15.671 18C15.671 18.75 15.881 19.46 16.251 20.06C16.341 20.22 16.451 20.37 16.571 20.51L14.741 21.52C13.601 22.16 11.741 22.16 10.601 21.52L5.26102 18.56C4.05102 17.89 3.06104 16.21 3.06104 14.83V9.17C3.06104 7.79 4.05102 6.11002 5.26102 5.44002L10.601 2.48C11.741 1.84 13.601 1.84 14.741 2.48L20.081 5.44002C21.291 6.11002 22.281 7.79 22.281 9.17Z"
              stroke="currentColor"
              strokeWidth={width}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M23.6709 18C23.6709 18.75 23.4609 19.46 23.0909 20.06C22.8809 20.42 22.6109 20.74 22.3009 21C21.6009 21.63 20.6809 22 19.6709 22C18.2109 22 16.9409 21.22 16.2509 20.06C15.8809 19.46 15.6709 18.75 15.6709 18C15.6709 16.74 16.2509 15.61 17.1709 14.88C17.8609 14.33 18.7309 14 19.6709 14C21.8809 14 23.6709 15.79 23.6709 18Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.7411 19.0402L18.6211 16.9302"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.7211 16.96L18.6011 19.0699"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.3498 15.3202C21.4598 14.4302 20.2798 13.9802 19.1098 14.0002C17.9798 14.0102 16.8498 14.4602 15.9898 15.3202C15.3898 15.9102 14.9998 16.6501 14.8098 17.4201C14.6998 17.8401 14.6598 18.2702 14.6898 18.7002V18.7502C14.6898 18.8202 14.6998 18.8802 14.7098 18.9602C14.7098 18.9602 14.7098 18.9601 14.7198 18.9701V19.0002C14.8098 19.9802 15.2298 20.9301 15.9898 21.6801C17.1498 22.8401 18.7798 23.2301 20.2498 22.8601C20.6898 22.7501 21.1198 22.5702 21.5198 22.3302C21.8198 22.1602 22.0998 21.9401 22.3498 21.6801C23.0998 20.9301 23.5298 19.9801 23.6198 18.9901C23.6298 18.9901 23.6298 18.9702 23.6298 18.9602C23.6498 18.8902 23.6498 18.8101 23.6498 18.7401C23.6498 18.7301 23.6598 18.7102 23.6598 18.6902C23.7198 17.4802 23.2798 16.2402 22.3498 15.3202ZM20.8998 20.2102C20.6098 20.5002 20.1398 20.5002 19.8398 20.2102L19.1798 19.5501L18.4998 20.2301C18.1998 20.5301 17.7298 20.5301 17.4398 20.2301C17.1398 19.9401 17.1398 19.4701 17.4398 19.1701L18.1198 18.4901L17.4598 17.8302C17.1698 17.5302 17.1698 17.0602 17.4598 16.7702C17.7598 16.4702 18.2298 16.4702 18.5298 16.7702L19.1798 17.4301L19.8098 16.7901C20.1098 16.5001 20.5798 16.5001 20.8798 16.7901C21.1698 17.0901 21.1698 17.5601 20.8798 17.8601L20.2398 18.4901L20.8998 19.1402C21.1998 19.4402 21.1998 19.9102 20.8998 20.2102Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.0198 5.65995L13.7298 2.27C13.0698 1.91 12.2698 1.91 11.5998 2.27L5.30984 5.65995C4.84984 5.90995 4.56982 6.39998 4.56982 6.93998C4.56982 7.47998 4.84984 7.96995 5.30984 8.21995L11.5998 11.61C11.9298 11.79 12.2998 11.88 12.6598 11.88C13.0198 11.88 13.3898 11.79 13.7198 11.61L20.0098 8.21995C20.4698 7.96995 20.7498 7.47998 20.7498 6.93998C20.7698 6.39998 20.4798 5.90995 20.0198 5.65995Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.5701 12.7899L4.72012 9.85989C4.27012 9.62989 3.75013 9.65989 3.32013 9.91989C2.89013 10.1799 2.64014 10.6399 2.64014 11.1399V16.6699C2.64014 17.6299 3.17012 18.4899 4.03012 18.9199L9.88013 21.8399C10.0801 21.9399 10.3001 21.9899 10.5201 21.9899C10.7801 21.9899 11.0401 21.9199 11.2701 21.7699C11.7001 21.5099 11.9501 21.0499 11.9501 20.5499V15.0199C11.9601 14.0799 11.4301 13.2199 10.5701 12.7899Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.6999 11.1502V15.7401C22.6899 15.7301 22.6799 15.7101 22.6699 15.7001C22.6699 15.6901 22.6599 15.6801 22.6499 15.6701C22.6099 15.6101 22.5599 15.5501 22.5099 15.5001C22.4999 15.4901 22.4899 15.4702 22.4799 15.4602C21.6699 14.5602 20.4799 14.0001 19.1699 14.0001C17.9099 14.0001 16.7599 14.5201 15.9399 15.3601C15.1499 16.1701 14.6699 17.2801 14.6699 18.5001C14.6699 19.3401 14.9099 20.1401 15.3199 20.8201C15.4899 21.1101 15.6999 21.3701 15.9299 21.6101L15.4599 21.8501C15.2599 21.9501 15.0399 22.0001 14.8199 22.0001C14.5599 22.0001 14.2999 21.9302 14.0599 21.7802C13.6399 21.5202 13.3799 21.0601 13.3799 20.5601V15.0401C13.3799 14.0801 13.9099 13.2201 14.7699 12.7901L20.6199 9.87013C21.0699 9.64013 21.5899 9.66012 22.0199 9.93012C22.4399 10.1901 22.6999 10.6502 22.6999 11.1502Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.2709 5.30979L12.6209 2.26979C12.0209 1.94979 11.3109 1.94979 10.7109 2.26979L5.07088 5.30979C4.66088 5.53979 4.40088 5.97978 4.40088 6.45978C4.40088 6.94979 4.65088 7.38979 5.07088 7.60979L10.7209 10.6498C11.0209 10.8098 11.3509 10.8898 11.6709 10.8898C11.9909 10.8898 12.3309 10.8098 12.6209 10.6498L18.2709 7.60979C18.6809 7.38979 18.9409 6.94979 18.9409 6.45978C18.9409 5.97978 18.6809 5.53979 18.2709 5.30979Z"
            fill="currentColor"
          />
          <path
            d="M9.7909 11.7096L4.5409 9.0896C4.1309 8.8796 3.6709 8.9096 3.2809 9.1396C2.9009 9.3796 2.6709 9.7896 2.6709 10.2396V15.1996C2.6709 16.0596 3.1509 16.8296 3.9209 17.2196L9.1709 19.8396C9.3509 19.9296 9.5509 19.9796 9.7509 19.9796C9.9809 19.9796 10.2209 19.9096 10.4309 19.7896C10.8109 19.5496 11.0409 19.1396 11.0409 18.6896V13.7296C11.0309 12.8696 10.5509 12.0996 9.7909 11.7096Z"
            fill="currentColor"
          />
          <path
            d="M20.671 10.2396V12.6996C20.191 12.5596 19.681 12.4996 19.171 12.4996C17.811 12.4996 16.481 12.9696 15.431 13.8096C13.991 14.9396 13.171 16.6496 13.171 18.4996C13.171 18.9896 13.231 19.4796 13.361 19.9496C13.211 19.9296 13.061 19.8696 12.921 19.7796C12.541 19.5496 12.311 19.1396 12.311 18.6896V13.7296C12.311 12.8696 12.791 12.0996 13.551 11.7096L18.801 9.0896C19.211 8.8796 19.671 8.9096 20.061 9.1396C20.441 9.3796 20.671 9.7896 20.671 10.2396Z"
            fill="currentColor"
          />
          <path
            d="M22.3508 15.3202C21.4608 14.4302 20.2808 13.9802 19.1108 14.0002C17.9808 14.0102 16.8508 14.4602 15.9908 15.3202C15.3908 15.9102 15.0008 16.6502 14.8108 17.4202C14.7008 17.8402 14.6608 18.2702 14.6908 18.7002V18.7502C14.6908 18.8202 14.7008 18.8801 14.7108 18.9601C14.7108 18.9601 14.7108 18.9601 14.7208 18.9701V19.0002C14.8108 19.9802 15.2308 20.9302 15.9908 21.6802C17.1508 22.8402 18.7808 23.2302 20.2508 22.8602C20.6908 22.7502 21.1208 22.5702 21.5208 22.3302C21.8208 22.1602 22.1008 21.9402 22.3508 21.6802C23.1008 20.9302 23.5308 19.9802 23.6208 18.9901C23.6308 18.9901 23.6308 18.9701 23.6308 18.9601C23.6508 18.8901 23.6508 18.8102 23.6508 18.7401C23.6508 18.7301 23.6608 18.7102 23.6608 18.6902C23.7208 17.4802 23.2808 16.2401 22.3508 15.3202ZM20.9008 20.2101C20.6108 20.5001 20.1408 20.5001 19.8408 20.2101L19.1808 19.5501L18.5008 20.2301C18.2008 20.5301 17.7308 20.5301 17.4408 20.2301C17.1408 19.9401 17.1408 19.4702 17.4408 19.1702L18.1208 18.4901L17.4608 17.8302C17.1708 17.5302 17.1708 17.0602 17.4608 16.7702C17.7608 16.4702 18.2308 16.4702 18.5308 16.7702L19.1808 17.4302L19.8108 16.7902C20.1108 16.5002 20.5808 16.5002 20.8808 16.7902C21.1708 17.0902 21.1708 17.5602 20.8808 17.8602L20.2408 18.4901L20.9008 19.1401C21.2008 19.4401 21.2008 19.9101 20.9008 20.2101Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBoxRemove as IconComponent).keywords = [
  "box",
  "remove",
  "package",
  "loge",
  "corner",
  "box seat",
  "boxwood",
  "bin",
  "chest",
  "toolbox",
  "shoebox",
  "take out",
  "get rid of",
  "take away",
  "move out",
  "bump off",
  "slay",
  "murder",
  "take",
  "transfer",
];

export default IconBoxRemove as IconComponent;
