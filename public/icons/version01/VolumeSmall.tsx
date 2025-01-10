import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconVolumeSmall: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
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
            d="M3.00312 11.7155C3.0421 9.87326 3.06159 8.95215 3.70045 8.16363C3.81705 8.0197 3.98814 7.8487 4.13153 7.73274C4.91718 7.09741 5.95444 7.09741 8.02898 7.09741C8.77015 7.09741 9.14074 7.09741 9.49401 7.00452C9.56741 6.98522 9.64004 6.96296 9.71173 6.93781C10.0567 6.81674 10.3661 6.60837 10.985 6.19161C13.4265 4.54738 14.6473 3.72527 15.672 4.08241C15.8684 4.15088 16.0586 4.24972 16.2284 4.37162C17.1142 5.00744 17.1815 6.48675 17.3161 9.44537C17.3659 10.5409 17.3999 11.4785 17.3999 12C17.3999 12.5215 17.3659 13.4591 17.3161 14.5546C17.1815 17.5132 17.1142 18.9926 16.2284 19.6284C16.0586 19.7503 15.8684 19.8491 15.672 19.9176C14.6473 20.2747 13.4265 19.4526 10.985 17.8084C10.3661 17.3916 10.0567 17.1833 9.71173 17.0622C9.64004 17.037 9.56741 17.0148 9.49401 16.9955C9.14074 16.9026 8.77016 16.9026 8.02898 16.9026C5.95444 16.9026 4.91718 16.9026 4.13153 16.2673C3.98814 16.1513 3.81705 15.9803 3.70045 15.8364C3.06159 15.0478 3.0421 14.1267 3.00312 12.2845C3.00107 12.1878 3 12.0928 3 12C3 11.9072 3.00107 11.8122 3.00312 11.7155Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.4505 8.41592C19.7981 8.21868 20.2365 8.34659 20.4296 8.70163L19.8002 9.05876C20.4296 8.70163 20.4296 8.70163 20.4296 8.70163L20.4303 8.70291L20.431 8.70428L20.4326 8.70727L20.4363 8.71425L20.4456 8.73224C20.4525 8.74604 20.4611 8.76345 20.4709 8.78454C20.4906 8.82672 20.5155 8.88359 20.5437 8.95571C20.6002 9.1 20.6699 9.30487 20.7376 9.57473C20.8733 10.1149 21.0002 10.9118 21.0002 12.0003C21.0002 13.0888 20.8733 13.8857 20.7376 14.4259C20.6699 14.6958 20.6002 14.9006 20.5437 15.0449C20.5155 15.117 20.4906 15.1739 20.4709 15.2161C20.4611 15.2372 20.4525 15.2546 20.4456 15.2684L20.4363 15.2864L20.4326 15.2934L20.431 15.2963L20.4303 15.2977C20.4303 15.2977 20.4296 15.299 19.8002 14.9419L20.4296 15.299C20.2365 15.654 19.7981 15.782 19.4505 15.5847C19.1059 15.3891 18.9798 14.9474 19.166 14.5938L19.1708 14.5838C19.1774 14.5696 19.1899 14.5415 19.2067 14.4987C19.2402 14.4132 19.2905 14.2687 19.3428 14.0606C19.4472 13.6448 19.5602 12.9709 19.5602 12.0003C19.5602 11.0297 19.4472 10.3558 19.3428 9.94003C19.2905 9.73189 19.2402 9.58745 19.2067 9.50194C19.1899 9.45915 19.1774 9.43099 19.1708 9.41687L19.166 9.40684C18.9798 9.05328 19.1059 8.61149 19.4505 8.41592Z"
              fill="currentColor"
            />
          </g>
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
            d="M3.00312 11.7155C3.0421 9.87326 3.06159 8.95215 3.70045 8.16363C3.81705 8.0197 3.98814 7.8487 4.13153 7.73274C4.91718 7.09741 5.95444 7.09741 8.02898 7.09741C8.77015 7.09741 9.14074 7.09741 9.49401 7.00452C9.56741 6.98522 9.64004 6.96296 9.71173 6.93781C10.0567 6.81674 10.3661 6.60837 10.985 6.19161C13.4265 4.54738 14.6473 3.72527 15.672 4.08241C15.8684 4.15088 16.0586 4.24972 16.2284 4.37162C17.1142 5.00744 17.1815 6.48675 17.3161 9.44537C17.3659 10.5409 17.3999 11.4785 17.3999 12C17.3999 12.5215 17.3659 13.4591 17.3161 14.5546C17.1815 17.5132 17.1142 18.9926 16.2284 19.6284C16.0586 19.7503 15.8684 19.8491 15.672 19.9176C14.6473 20.2747 13.4265 19.4526 10.985 17.8084C10.3661 17.3916 10.0567 17.1833 9.71173 17.0622C9.64004 17.037 9.56741 17.0148 9.49401 16.9955C9.14074 16.9026 8.77016 16.9026 8.02898 16.9026C5.95444 16.9026 4.91718 16.9026 4.13153 16.2673C3.98814 16.1513 3.81705 15.9803 3.70045 15.8364C3.06159 15.0478 3.0421 14.1267 3.00312 12.2845C3.00107 12.1878 3 12.0928 3 12C3 11.9072 3.00107 11.8122 3.00312 11.7155Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.4503 8.41595C19.7979 8.21871 20.2363 8.34663 20.4294 8.70166L19.8 9.0588C20.4294 8.70166 20.4294 8.70166 20.4294 8.70166L20.4301 8.70295L20.4308 8.70432L20.4324 8.7073L20.4361 8.71428L20.4454 8.73227C20.4523 8.74607 20.4609 8.76348 20.4707 8.78457C20.4904 8.82676 20.5153 8.88363 20.5435 8.95574C20.6 9.10004 20.6697 9.3049 20.7374 9.57476C20.8731 10.115 21 10.9119 21 12.0003C21 13.0888 20.8731 13.8857 20.7374 14.4259C20.6697 14.6958 20.6 14.9007 20.5435 15.045C20.5153 15.1171 20.4904 15.1739 20.4707 15.2161C20.4609 15.2372 20.4523 15.2546 20.4454 15.2684L20.4361 15.2864L20.4324 15.2934L20.4308 15.2964L20.4301 15.2978C20.4301 15.2978 20.4294 15.299 19.8 14.9419L20.4294 15.299C20.2363 15.6541 19.7979 15.782 19.4503 15.5847C19.1057 15.3892 18.9797 14.9474 19.1658 14.5938L19.1706 14.5838C19.1772 14.5697 19.1898 14.5415 19.2065 14.4987C19.24 14.4132 19.2903 14.2688 19.3426 14.0606C19.447 13.6448 19.56 12.9709 19.56 12.0003C19.56 11.0298 19.447 10.3559 19.3426 9.94007C19.2903 9.73193 19.24 9.58748 19.2065 9.50197C19.1898 9.45918 19.1772 9.43102 19.1706 9.41691L19.1658 9.40687C18.9797 9.05332 19.1057 8.61152 19.4503 8.41595Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVolumeSmall as IconComponentType).keywords = [
  "volume",
  "small",
  "loudness",
  "book",
  "mass",
  "bulk",
  "intensity",
  "quantum",
  "weight",
  "density",
  "potentiometer",
  "undersize",
  "small-scale",
  "undersized",
  "lowercase",
  "puny",
  "lesser",
  "petty",
  "diminutive",
  "inferior",
];

export default IconVolumeSmall as IconComponentType;
