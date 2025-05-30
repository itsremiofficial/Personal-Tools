import { FC } from "react";

const IconPlaylistMinimalistic3: FC<IconProps> = ({
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
            d="M20 4.00024L3 4.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8 14.0002H3"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 9.00024L3 9.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M16 17.4288C16 18.849 14.8807 20.0002 13.5 20.0002C12.1193 20.0002 11 18.849 11 17.4288C11 16.0087 12.1193 14.8574 13.5 14.8574C14.8807 14.8574 16 16.0087 16 17.4288ZM16 17.4288V11.0002"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M18.675 8.11622L16.9205 8.95839C16.5788 9.12241 16.408 9.20441 16.2845 9.33082C16.1855 9.43226 16.1091 9.55361 16.0605 9.68681C16 9.8528 16 10.0423 16 10.4213C16 11.2978 16 11.736 16.1911 11.9989C16.3421 12.2067 16.5673 12.3485 16.8201 12.3947C17.1397 12.4532 17.5348 12.2635 18.325 11.8843L20.0795 11.0421C20.4212 10.8781 20.592 10.7961 20.7155 10.6697C20.8145 10.5682 20.8909 10.4469 20.9395 10.3137C21 10.1477 21 9.95818 21 9.57916C21 8.70271 21 8.26449 20.8089 8.00159C20.6579 7.79376 20.4327 7.65203 20.1799 7.6058C19.8603 7.54732 19.4652 7.73696 18.675 8.11622Z"
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
            d="M2.25 4.00024C2.25 3.58603 2.58579 3.25024 3 3.25024H20C20.4142 3.25024 20.75 3.58603 20.75 4.00024C20.75 4.41446 20.4142 4.75024 20 4.75024H3C2.58579 4.75024 2.25 4.41446 2.25 4.00024ZM2.25 9.00024C2.25 8.58603 2.58579 8.25024 3 8.25024H12C12.4142 8.25024 12.75 8.58603 12.75 9.00024C12.75 9.41446 12.4142 9.75024 12 9.75024H3C2.58579 9.75024 2.25 9.41446 2.25 9.00024ZM2.25 14.0002C2.25 13.586 2.58579 13.2502 3 13.2502H8C8.41421 13.2502 8.75 13.586 8.75 14.0002C8.75 14.4145 8.41421 14.7502 8 14.7502H3C2.58579 14.7502 2.25 14.4145 2.25 14.0002Z"
            fill="currentColor"
          />
          <path
            d="M19.3446 6.99317C19.6232 6.8905 19.9559 6.80242 20.3149 6.8681C20.7572 6.949 21.1513 7.19703 21.4156 7.56074C21.6302 7.856 21.6948 8.19397 21.7228 8.48959C21.75 8.7773 21.75 9.13609 21.75 9.54491L21.75 9.57922L21.7501 9.65484C21.7509 9.95494 21.7518 10.2755 21.644 10.5707C21.559 10.8038 21.4254 11.0162 21.252 11.1937C21.0324 11.4186 20.7431 11.5565 20.4722 11.6857L20.404 11.7183L18.6185 12.5753C18.25 12.7523 17.9266 12.9075 17.6554 13.0074C17.3936 13.1039 17.0842 13.1875 16.75 13.1428V17.4289C16.75 19.2432 15.3147 20.7503 13.5 20.7503C11.6853 20.7503 10.25 19.2432 10.25 17.4289C10.25 15.6146 11.6853 14.1074 13.5 14.1074C14.1477 14.1074 14.747 14.2994 15.25 14.6288V11.0003H15.2529C15.25 10.8315 15.25 10.6492 15.25 10.4557L15.25 10.4214L15.2499 10.3458C15.2491 10.0457 15.2482 9.72516 15.356 9.42987C15.441 9.19677 15.5746 8.98441 15.748 8.80688C15.9676 8.58201 16.2569 8.44407 16.5278 8.31491L16.596 8.28231L18.3814 7.42528C18.75 7.24836 19.0734 7.09308 19.3446 6.99317Z"
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
            d="M2.25 4.00024C2.25 3.58603 2.58579 3.25024 3 3.25024H20C20.4142 3.25024 20.75 3.58603 20.75 4.00024C20.75 4.41446 20.4142 4.75024 20 4.75024H3C2.58579 4.75024 2.25 4.41446 2.25 4.00024ZM2.25 9.00024C2.25 8.58603 2.58579 8.25024 3 8.25024H12C12.4142 8.25024 12.75 8.58603 12.75 9.00024C12.75 9.41446 12.4142 9.75024 12 9.75024H3C2.58579 9.75024 2.25 9.41446 2.25 9.00024ZM2.25 14.0002C2.25 13.586 2.58579 13.2502 3 13.2502H8C8.41421 13.2502 8.75 13.586 8.75 14.0002C8.75 14.4145 8.41421 14.7502 8 14.7502H3C2.58579 14.7502 2.25 14.4145 2.25 14.0002Z"
            fill="currentColor"
          />
          <path
            d="M19.3446 6.99311C19.6232 6.89044 19.9559 6.80237 20.3149 6.86804C20.7572 6.94894 21.1513 7.19697 21.4156 7.56068C21.6302 7.85594 21.6948 8.19391 21.7228 8.48953C21.75 8.77724 21.75 9.13603 21.75 9.54485L21.75 9.57916L21.7501 9.65478C21.7509 9.95488 21.7518 10.2754 21.644 10.5707C21.559 10.8038 21.4254 11.0161 21.252 11.1937C21.0324 11.4185 20.7431 11.5565 20.4722 11.6856L20.404 11.7182L18.6185 12.5753C18.25 12.7522 17.9266 12.9075 17.6554 13.0074C17.3936 13.1038 17.0842 13.1874 16.75 13.1427V17.4288C16.75 19.2431 15.3147 20.7502 13.5 20.7502C11.6853 20.7502 10.25 19.2431 10.25 17.4288C10.25 15.6145 11.6853 14.1074 13.5 14.1074C14.1477 14.1074 14.747 14.2994 15.25 14.6287V11.0002H15.2529C15.25 10.8314 15.25 10.6491 15.25 10.4557L15.25 10.4213L15.2499 10.3457C15.2491 10.0456 15.2482 9.7251 15.356 9.42981C15.441 9.19671 15.5746 8.98435 15.748 8.80683C15.9676 8.58195 16.2569 8.44401 16.5278 8.31485L16.596 8.28225L18.3814 7.42523C18.75 7.2483 19.0734 7.09302 19.3446 6.99311Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPlaylistMinimalistic3 as IconComponent).keywords = [
  "playlist",
  "minimalistic",
  "3",
  "playback",
  "replay",
  "list",
  "reproductive",
  "reproduction",
  "soundtrack",
  "song",
  "tunes",
  "songs",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
  "omega",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down",
];

export default IconPlaylistMinimalistic3 as IconComponent;
