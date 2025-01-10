import { FC } from "react";

const IconPaperclipRounded: FC<IconProps> = ({
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
            d="M12.6885 11.3954L9.85786 14.2516C9.50256 14.6101 9.32491 14.7893 9.1954 14.9596C8.30108 16.1356 8.30108 17.771 9.1954 18.947C9.32491 19.1173 9.50256 19.2966 9.85786 19.6551C10.2132 20.0135 10.3908 20.1928 10.5596 20.3235C11.7251 21.2258 13.346 21.2258 14.5115 20.3235C14.6802 20.1928 14.8579 20.0135 15.2132 19.655L18.8854 15.9498C20.3094 14.513 21.0214 13.7946 21.4104 13.0243C22.1965 11.4675 22.1965 9.62507 21.4104 8.06827C21.0214 7.29798 20.3094 6.57959 18.8854 5.14281C17.4615 3.70604 16.7495 2.98765 15.9861 2.59517C14.4431 1.80194 12.6171 1.80194 11.0741 2.59517C10.3107 2.98765 9.59873 3.70604 8.17476 5.14281L4.44515 8.90596C3.64545 9.71285 3.2456 10.1163 2.97158 10.513C1.67614 12.3884 1.67614 14.8796 2.97158 16.755C3.2456 17.1517 3.64545 17.5552 4.44515 18.3621"
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
            d="M3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471Z"
            fill="currentColor"
          />
          <path
            d="M11.1112 5.6728C12.2469 5.10939 13.5892 5.10939 14.7249 5.6728C15.2903 5.95328 15.797 6.44694 16.554 7.18441L16.554 7.18442L16.6544 7.28225L16.7578 7.38285C17.5124 8.11698 18.0208 8.61157 18.3107 9.16555C18.8964 10.2847 18.8964 11.6112 18.3107 12.7304C18.0208 13.2844 17.5124 13.7789 16.7578 14.5131L16.6544 14.6137L14.4511 16.7588L14.417 16.7921C14.2374 16.9671 14.0973 17.1035 13.9557 17.2093C12.9902 17.9306 11.6524 17.9306 10.6869 17.2093C10.5454 17.1035 10.4053 16.9671 10.2257 16.7921L10.1915 16.7588L10.157 16.7253C9.97767 16.5508 9.83724 16.4141 9.7282 16.2758C8.977 15.3226 8.977 13.9919 9.7282 13.0388C9.83724 12.9004 9.97768 12.7638 10.157 12.5893L10.157 12.5893L10.1915 12.5557L11.8899 10.9022C12.1867 10.6132 12.6616 10.6196 12.9505 10.9164C13.2395 11.2132 13.2331 11.688 12.9363 11.9769L11.2379 13.6305C11.0075 13.8548 10.9458 13.9172 10.9063 13.9673C10.5843 14.3758 10.5843 14.9387 10.9063 15.3473C10.9458 15.3974 11.0075 15.4598 11.2379 15.6841C11.468 15.9081 11.5325 15.9686 11.5846 16.0076C12.0177 16.3311 12.6249 16.3311 13.058 16.0076C13.1102 15.9686 13.1746 15.9081 13.4047 15.6841L15.6081 13.5389C16.5051 12.6656 16.8179 12.3479 16.9817 12.0349C17.3394 11.3514 17.3394 10.5446 16.9817 9.86107C16.8179 9.54806 16.5051 9.2303 15.6081 8.35701C14.7127 7.48524 14.3844 7.1783 14.0583 7.01655C13.3426 6.66148 12.4936 6.66148 11.7778 7.01655C11.4517 7.1783 11.1235 7.48524 10.228 8.35701L7.99027 10.5357C7.48707 11.0256 7.30854 11.2036 7.19279 11.3652C6.6024 12.19 6.6024 13.2812 7.19279 14.1059C7.30854 14.2676 7.48707 14.4456 7.99027 14.9355C8.28706 15.2245 8.29341 15.6993 8.00447 15.9961C7.71552 16.2929 7.24069 16.2992 6.9439 16.0103L6.88614 15.954C6.46183 15.5411 6.17705 15.264 5.9731 14.9791C5.00897 13.6323 5.00897 11.8389 5.9731 10.4921C6.17705 10.2072 6.46183 9.93006 6.88614 9.51713L6.88615 9.51712L6.9439 9.46091L9.18167 7.28225L9.28211 7.18441L9.28211 7.18441C10.0391 6.44694 10.5458 5.95328 11.1112 5.6728Z"
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
            d="M12 2.00024C7.28595 2.00024 4.92893 2.00024 3.46447 3.46471C2 4.92918 2 7.2862 2 12.0002C2 16.7143 2 19.0713 3.46447 20.5358C4.92893 22.0002 7.28595 22.0002 12 22.0002C16.714 22.0002 19.0711 22.0002 20.5355 20.5358C22 19.0713 22 16.7143 22 12.0002C22 7.2862 22 4.92918 20.5355 3.46471C19.0711 2.00024 16.714 2.00024 12 2.00024ZM11.1112 5.6728C12.2469 5.10939 13.5892 5.10939 14.7249 5.6728C15.2903 5.95328 15.797 6.44694 16.554 7.18442L16.6544 7.28225L16.7578 7.38285C17.5124 8.11698 18.0208 8.61158 18.3107 9.16555C18.8964 10.2847 18.8964 11.6112 18.3107 12.7304C18.0208 13.2844 17.5124 13.7789 16.7578 14.5131L16.6544 14.6137L14.4511 16.7588L14.417 16.7921C14.2374 16.9671 14.0973 17.1035 13.9557 17.2093C12.9902 17.9306 11.6524 17.9306 10.6869 17.2093C10.5454 17.1035 10.4053 16.9671 10.2257 16.7921L10.1915 16.7588L10.157 16.7253C9.97767 16.5508 9.83724 16.4141 9.7282 16.2758C8.977 15.3226 8.977 13.9919 9.7282 13.0388C9.83724 12.9004 9.97768 12.7638 10.157 12.5893L10.1915 12.5557L11.8899 10.9022C12.1867 10.6132 12.6616 10.6196 12.9505 10.9164C13.2395 11.2132 13.2331 11.688 12.9363 11.9769L11.2379 13.6305C11.0075 13.8548 10.9458 13.9172 10.9063 13.9673C10.5843 14.3758 10.5843 14.9387 10.9063 15.3473C10.9458 15.3974 11.0075 15.4598 11.2379 15.6841C11.468 15.9081 11.5325 15.9686 11.5846 16.0076C12.0177 16.3311 12.6249 16.3311 13.058 16.0076C13.1102 15.9686 13.1746 15.9081 13.4047 15.6841L15.6081 13.5389C16.5051 12.6656 16.8179 12.3479 16.9817 12.0349C17.3394 11.3514 17.3394 10.5446 16.9817 9.86107C16.8179 9.54806 16.5051 9.2303 15.6081 8.35701C14.7127 7.48524 14.3844 7.1783 14.0583 7.01655C13.3426 6.66148 12.4936 6.66148 11.7778 7.01655C11.4517 7.1783 11.1235 7.48524 10.228 8.35701L7.99027 10.5357C7.48707 11.0256 7.30854 11.2036 7.19279 11.3652C6.6024 12.19 6.6024 13.2812 7.19279 14.1059C7.30854 14.2676 7.48707 14.4456 7.99027 14.9355C8.28706 15.2245 8.29342 15.6993 8.00447 15.9961C7.71552 16.2929 7.24069 16.2992 6.9439 16.0103L6.88614 15.954C6.46183 15.5411 6.17705 15.264 5.9731 14.9791C5.00897 13.6323 5.00897 11.8389 5.9731 10.4921C6.17706 10.2072 6.46184 9.93006 6.88615 9.51712L6.9439 9.46091L9.18167 7.28225L9.28211 7.18441C10.0391 6.44694 10.5458 5.95328 11.1112 5.6728Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPaperclipRounded as IconComponent).keywords = [
  "paperclip",
  "rounded",
  "gem clip",
  "clip",
  "crisis",
  "video",
  "trombone",
  "thumbtack",
  "clothespin",
  "screwdriver",
  "ribbon",
  "ringed",
  "ring-shaped",
  "annulate",
  "annular",
  "circular",
  "rotund",
  "bowfront",
  "prolate",
  "domed",
];

export default IconPaperclipRounded as IconComponent;
