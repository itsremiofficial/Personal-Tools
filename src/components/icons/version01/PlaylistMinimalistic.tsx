import { FC } from "react";

const IconPlaylistMinimalistic: FC<IconProps> = ({
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
            d="M20 6.00024L3 6.00024"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 16.0002H3"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 11.0002H3"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M19.125 10.6856C20.767 11.6336 21.588 12.1076 21.8478 12.7349C22.0507 13.2249 22.0507 13.7755 21.8478 14.2656C21.588 14.8928 20.767 15.3668 19.125 16.3148C17.483 17.2628 16.662 17.7368 15.9889 17.6482C15.4631 17.5789 14.9862 17.3036 14.6633 16.8828C14.25 16.3442 14.25 15.3962 14.25 13.5002C14.25 11.6042 14.25 10.6563 14.6633 10.1176C14.9862 9.69682 15.4631 9.42151 15.9889 9.35228C16.662 9.26366 17.483 9.73766 19.125 10.6856Z"
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
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H20C20.4142 5.25024 20.75 5.58603 20.75 6.00024C20.75 6.41446 20.4142 6.75024 20 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 11.0002C2.25 10.586 2.58579 10.2502 3 10.2502H10C10.4142 10.2502 10.75 10.586 10.75 11.0002C10.75 11.4145 10.4142 11.7502 10 11.7502H3C2.58579 11.7502 2.25 11.4145 2.25 11.0002ZM2.25 16.0002C2.25 15.586 2.58579 15.2502 3 15.2502H10C10.4142 15.2502 10.75 15.586 10.75 16.0002C10.75 16.4145 10.4142 16.7502 10 16.7502H3C2.58579 16.7502 2.25 16.4145 2.25 16.0002Z"
              fill="currentColor"
            />
          </g>
          <path
            d="M19.125 10.6854C20.767 11.6334 21.588 12.1074 21.8478 12.7347C22.0507 13.2247 22.0507 13.7753 21.8478 14.2654C21.588 14.8926 20.767 15.3666 19.125 16.3146C17.483 17.2626 16.662 17.7366 15.9889 17.648C15.4631 17.5787 14.9862 17.3034 14.6633 16.8826C14.25 16.344 14.25 15.396 14.25 13.5C14.25 11.604 14.25 10.656 14.6633 10.1174C14.9862 9.69661 15.4631 9.4213 15.9889 9.35206C16.662 9.26345 17.483 9.73744 19.125 10.6854Z"
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
            d="M2.25 6.00024C2.25 5.58603 2.58579 5.25024 3 5.25024H20C20.4142 5.25024 20.75 5.58603 20.75 6.00024C20.75 6.41446 20.4142 6.75024 20 6.75024H3C2.58579 6.75024 2.25 6.41446 2.25 6.00024ZM2.25 11.0002C2.25 10.586 2.58579 10.2502 3 10.2502H10C10.4142 10.2502 10.75 10.586 10.75 11.0002C10.75 11.4145 10.4142 11.7502 10 11.7502H3C2.58579 11.7502 2.25 11.4145 2.25 11.0002ZM2.25 16.0002C2.25 15.586 2.58579 15.2502 3 15.2502H10C10.4142 15.2502 10.75 15.586 10.75 16.0002C10.75 16.4145 10.4142 16.7502 10 16.7502H3C2.58579 16.7502 2.25 16.4145 2.25 16.0002Z"
            fill="currentColor"
          />
          <path
            d="M19.125 10.6857C20.767 11.6337 21.588 12.1076 21.8478 12.7349C22.0507 13.2249 22.0507 13.7756 21.8478 14.2656C21.588 14.8928 20.767 15.3668 19.125 16.3148C17.483 17.2628 16.662 17.7368 15.9889 17.6482C15.4631 17.579 14.9862 17.3037 14.6633 16.8828C14.25 16.3442 14.25 15.3962 14.25 13.5002C14.25 11.6043 14.25 10.6563 14.6633 10.1177C14.9862 9.69684 15.4631 9.42153 15.9889 9.35229C16.662 9.26368 17.483 9.73767 19.125 10.6857Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPlaylistMinimalistic as IconComponent).keywords = [
  "playlist",
  "minimalistic",
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
];

export default IconPlaylistMinimalistic as IconComponent;
