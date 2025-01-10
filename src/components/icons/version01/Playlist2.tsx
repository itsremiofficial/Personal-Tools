import { FC } from "react";

const IconPlaylist2: FC<IconProps> = ({
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
            d="M16 16.4288C16 17.849 14.8807 19.0002 13.5 19.0002C12.1193 19.0002 11 17.849 11 16.4288C11 15.0087 12.1193 13.8574 13.5 13.8574C14.8807 13.8574 16 15.0087 16 16.4288ZM16 16.4288V10.0002"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M18.675 7.11622L16.9205 7.95839C16.5788 8.12241 16.408 8.20441 16.2845 8.33082C16.1855 8.43226 16.1091 8.55361 16.0605 8.68681C16 8.8528 16 9.04231 16 9.42133C16 10.2978 16 10.736 16.1911 10.9989C16.3421 11.2067 16.5673 11.3485 16.8201 11.3947C17.1397 11.4532 17.5348 11.2635 18.325 10.8843L20.0795 10.0421C20.4212 9.87809 20.592 9.79608 20.7155 9.66967C20.8145 9.56823 20.8909 9.44688 20.9395 9.31368C21 9.14769 21 8.95818 21 8.57916C21 7.70271 21 7.26449 20.8089 7.00159C20.6579 6.79376 20.4327 6.65203 20.1799 6.6058C19.8603 6.54732 19.4652 6.73696 18.675 7.11622Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M15 5.00024L3 5.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M13 9.00024L3 9.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9 13.0002H3"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8 17.0002H3"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.25 5.00024C2.25 4.58603 2.58579 4.25024 3 4.25024H15C15.4142 4.25024 15.75 4.58603 15.75 5.00024C15.75 5.41446 15.4142 5.75024 15 5.75024H3C2.58579 5.75024 2.25 5.41446 2.25 5.00024ZM2.25 9.00024C2.25 8.58603 2.58579 8.25024 3 8.25024H13C13.4142 8.25024 13.75 8.58603 13.75 9.00024C13.75 9.41446 13.4142 9.75024 13 9.75024H3C2.58579 9.75024 2.25 9.41446 2.25 9.00024ZM2.25 13.0002C2.25 12.586 2.58579 12.2502 3 12.2502H9C9.41421 12.2502 9.75 12.586 9.75 13.0002C9.75 13.4145 9.41421 13.7502 9 13.7502H3C2.58579 13.7502 2.25 13.4145 2.25 13.0002ZM2.25 17.0002C2.25 16.586 2.58579 16.2502 3 16.2502H8C8.41421 16.2502 8.75 16.586 8.75 17.0002C8.75 17.4145 8.41421 17.7502 8 17.7502H3C2.58579 17.7502 2.25 17.4145 2.25 17.0002Z"
            fill="currentColor"
          />
          <path
            d="M19.3446 5.99317C19.6232 5.8905 19.9559 5.80242 20.3149 5.8681C20.7572 5.949 21.1513 6.19703 21.4156 6.56074C21.6302 6.856 21.6948 7.19397 21.7228 7.48959C21.75 7.7773 21.75 8.13609 21.75 8.54491L21.75 8.57922L21.7501 8.65484C21.7509 8.95494 21.7518 9.27546 21.644 9.57074C21.559 9.80384 21.4254 10.0162 21.252 10.1937C21.0324 10.4186 20.7431 10.5565 20.4722 10.6857L20.404 10.7183L18.6185 11.5753C18.25 11.7523 17.9266 11.9075 17.6554 12.0074C17.3936 12.1039 17.0842 12.1875 16.75 12.1428V16.4289C16.75 18.2432 15.3147 19.7503 13.5 19.7503C11.6853 19.7503 10.25 18.2432 10.25 16.4289C10.25 14.6146 11.6853 13.1074 13.5 13.1074C14.1477 13.1074 14.747 13.2994 15.25 13.6288V10.0003H15.2529C15.25 9.83147 15.25 9.64919 15.25 9.45572L15.25 9.42139L15.2499 9.34577C15.2491 9.04567 15.2482 8.72516 15.356 8.42987C15.441 8.19677 15.5746 7.98441 15.748 7.80688C15.9676 7.58201 16.2569 7.44407 16.5278 7.31491L16.596 7.28231L18.3814 6.42528C18.75 6.24836 19.0734 6.09308 19.3446 5.99317Z"
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
            d="M19.3446 5.99311C19.6232 5.89044 19.9559 5.80237 20.3149 5.86804C20.7572 5.94894 21.1513 6.19697 21.4156 6.56068C21.6302 6.85594 21.6948 7.19391 21.7228 7.48953C21.75 7.77724 21.75 8.13603 21.75 8.54485L21.75 8.57916L21.7501 8.65478C21.7509 8.95488 21.7518 9.2754 21.644 9.57068C21.559 9.80378 21.4254 10.0161 21.252 10.1937C21.0324 10.4185 20.7431 10.5565 20.4722 10.6856L20.404 10.7182L18.6185 11.5753C18.25 11.7522 17.9266 11.9075 17.6554 12.0074C17.3936 12.1038 17.0842 12.1874 16.75 12.1427V16.4288C16.75 18.2431 15.3147 19.7502 13.5 19.7502C11.6853 19.7502 10.25 18.2431 10.25 16.4288C10.25 14.6145 11.6853 13.1074 13.5 13.1074C14.1477 13.1074 14.747 13.2994 15.25 13.6287V10.0002H15.2529C15.25 9.83141 15.25 9.64913 15.25 9.45566L15.25 9.42133L15.2499 9.34571C15.2491 9.04561 15.2482 8.7251 15.356 8.42981C15.441 8.19671 15.5746 7.98435 15.748 7.80683C15.9676 7.58195 16.2569 7.44401 16.5278 7.31485L16.596 7.28225L18.3814 6.42523C18.75 6.2483 19.0734 6.09302 19.3446 5.99311Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.25 5.00024C2.25 4.58603 2.58579 4.25024 3 4.25024H15C15.4142 4.25024 15.75 4.58603 15.75 5.00024C15.75 5.41446 15.4142 5.75024 15 5.75024H3C2.58579 5.75024 2.25 5.41446 2.25 5.00024ZM2.25 9.00024C2.25 8.58603 2.58579 8.25024 3 8.25024H13C13.4142 8.25024 13.75 8.58603 13.75 9.00024C13.75 9.41446 13.4142 9.75024 13 9.75024H3C2.58579 9.75024 2.25 9.41446 2.25 9.00024ZM2.25 13.0002C2.25 12.586 2.58579 12.2502 3 12.2502H9C9.41421 12.2502 9.75 12.586 9.75 13.0002C9.75 13.4145 9.41421 13.7502 9 13.7502H3C2.58579 13.7502 2.25 13.4145 2.25 13.0002ZM2.25 17.0002C2.25 16.586 2.58579 16.2502 3 16.2502H8C8.41421 16.2502 8.75 16.586 8.75 17.0002C8.75 17.4145 8.41421 17.7502 8 17.7502H3C2.58579 17.7502 2.25 17.4145 2.25 17.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPlaylist2 as IconComponent).keywords = [
  "playlist",
  "2",
  "playback",
  "replay",
  "list",
  "reproductive",
  "reproduction",
  "soundtrack",
  "song",
  "tunes",
  "songs",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconPlaylist2 as IconComponent;
