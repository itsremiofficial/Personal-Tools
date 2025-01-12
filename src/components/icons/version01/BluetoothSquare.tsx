import { FC } from "react";

const IconBluetoothSquare: FC<IconProps> = ({
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
            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M11 11.9999L13.9333 9.79988C14.4222 9.43322 14.6667 9.24988 14.6667 8.99988C14.6667 8.74988 14.4222 8.56655 13.9333 8.19988L12.6 7.19988C11.9019 6.67628 11.5528 6.41447 11.2764 6.55267C11 6.69087 11 7.1272 11 7.99988V11.9999ZM11 11.9999V15.9999C11 16.8726 11 17.3089 11.2764 17.4471C11.5528 17.5853 11.9019 17.3235 12.6 16.7999L13.9333 15.7999C14.4222 15.4332 14.6667 15.2499 14.6667 14.9999C14.6667 14.7499 14.4222 14.5665 13.9333 14.1999L11 11.9999ZM11 11.9999L8 9.49988M11 11.9999L8 14.4999"
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
            opacity={duotone ? "0.5" : "1"}
            d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z"
            fill="currentColor"
          />
          <path
            d="M12.448 16.7737L12.4469 16.7706C12.4477 16.7735 12.4483 16.7748 12.4483 16.7748L12.448 16.7737Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7884 6.19606C13.0413 6.33106 13.3347 6.54734 13.6423 6.77412L15.0204 7.78954C15.2311 7.94468 15.4485 8.10475 15.6067 8.26104C15.786 8.43823 16 8.71598 16 9.11283C16 9.50969 15.786 9.78744 15.6067 9.96462C15.4485 10.1209 15.2311 10.281 15.0204 10.4361L12.898 12L15.0204 13.5639C15.2311 13.719 15.4485 13.8791 15.6067 14.0354C15.786 14.2126 16 14.4903 16 14.8872C16 15.284 15.786 15.5618 15.6067 15.739C15.4485 15.8953 15.2311 16.0553 15.0204 16.2105L13.6423 17.2259C13.3347 17.4527 13.0413 17.6689 12.7884 17.8039C12.5296 17.9421 12.087 18.1195 11.6157 17.8879C11.1443 17.6564 11.0232 17.2022 10.9804 16.9158C10.9386 16.6361 10.9387 16.2757 10.9388 15.8979L10.9388 13.5411L9.20505 14.9605C8.89334 15.2157 8.43007 15.1743 8.1703 14.8681C7.91054 14.5618 7.95266 14.1067 8.26437 13.8515L10.5259 12L8.26437 10.1485C7.95266 9.89332 7.91054 9.43819 8.1703 9.13195C8.43007 8.82571 8.89334 8.78433 9.20505 9.03953L10.9388 10.4589L10.9388 8.10214C10.9387 7.72428 10.9386 7.36392 10.9804 7.08419C11.0232 6.79781 11.1443 6.34362 11.6157 6.11207C12.087 5.88052 12.5296 6.05786 12.7884 6.19606ZM12.4082 15.8496V13.4436L14.1061 14.6947C14.2085 14.7701 14.2926 14.8321 14.3646 14.8872C14.2926 14.9422 14.2085 15.0042 14.1061 15.0796L12.8 16.042C12.6437 16.1572 12.5166 16.2504 12.4109 16.3254C12.4085 16.1973 12.4082 16.0415 12.4082 15.8496ZM12.448 16.7737L12.4469 16.7706C12.4477 16.7735 12.4483 16.7748 12.4483 16.7748L12.448 16.7737ZM12.4082 8.15044V10.5564L14.1061 9.30531C14.2085 9.2299 14.2926 9.16786 14.3646 9.11283C14.2926 9.0578 14.2085 8.99577 14.1061 8.92035L12.8 7.95796C12.6437 7.84278 12.5166 7.74958 12.4109 7.67458C12.4085 7.80267 12.4082 7.95848 12.4082 8.15044Z"
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
            d="M11.75 16.0001V13.5001L13.4834 14.8001C13.5878 14.8785 13.6737 14.9429 13.7472 15.0001C13.6737 15.0573 13.5878 15.1217 13.4834 15.2001L12.15 16.2001C11.9904 16.3198 11.8607 16.4166 11.7528 16.4946C11.7504 16.3615 11.75 16.1996 11.75 16.0001Z"
            fill="currentColor"
          />
          <path
            d="M11.7906 16.9603C11.7904 16.9596 11.7901 16.9585 11.7895 16.9571C11.7904 16.9602 11.7909 16.9616 11.7909 16.9615C11.791 16.9614 11.7909 16.9611 11.7906 16.9603Z"
            fill="currentColor"
          />
          <path
            d="M11.75 8.00011V10.5001L13.4834 9.20011C13.5878 9.12175 13.6737 9.05729 13.7472 9.00011C13.6737 8.94293 13.5878 8.87847 13.4834 8.80011L12.15 7.80011C11.9904 7.68043 11.8607 7.58358 11.7528 7.50565C11.7504 7.63874 11.75 7.80064 11.75 8.00011Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM13.0099 6.57C12.6958 6.33435 12.3963 6.10963 12.1382 5.96935C11.8739 5.82574 11.4222 5.64148 10.941 5.88207C10.4598 6.12267 10.3362 6.59462 10.2925 6.89218C10.2499 7.18285 10.2499 7.55729 10.25 7.94992L10.25 10.3988L8.48016 8.92394C8.16195 8.65877 7.68903 8.70176 7.42385 9.01997C7.15868 9.33818 7.20167 9.8111 7.51988 10.0763L9.82848 12.0001L7.51988 13.9239C7.20167 14.1891 7.15868 14.662 7.42385 14.9802C7.68903 15.2985 8.16195 15.3414 8.48016 15.0763L10.25 13.6014L10.25 16.0503C10.2499 16.4429 10.2499 16.8174 10.2925 17.108C10.3362 17.4056 10.4598 17.8775 10.941 18.1181C11.4222 18.3587 11.8739 18.1745 12.1382 18.0309C12.3963 17.8906 12.6958 17.6659 13.0099 17.4302L14.4167 16.3751C14.6318 16.2139 14.8537 16.0476 15.0152 15.8852C15.1982 15.7011 15.4167 15.4125 15.4167 15.0001C15.4167 14.5877 15.1982 14.2991 15.0152 14.115C14.8537 13.9526 14.6318 13.7863 14.4167 13.6251L12.25 12.0001L14.4167 10.3751C14.6318 10.2139 14.8537 10.0476 15.0152 9.88518C15.1982 9.70108 15.4167 9.41247 15.4167 9.00011C15.4167 8.58774 15.1982 8.29914 15.0152 8.11503C14.8537 7.95263 14.6318 7.7863 14.4167 7.6251L13.0099 6.57Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBluetoothSquare as IconComponent).keywords = [
  "bluetooth",
  "square",
  "teeth",
  "tooth",
  "handsfree",
  "wireless",
  "ipod",
  "wifi",
  "stereo",
  "speakerphone",
  "headset",
  "quadrate",
  "right-angled",
  "squarely",
  "foursquare",
  "squarish",
  "conventional",
  "paid",
  "honorable",
  "honest",
];

export default IconBluetoothSquare as IconComponent;
