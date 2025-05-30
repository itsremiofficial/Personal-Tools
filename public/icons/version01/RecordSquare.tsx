import { FC } from "react";

const IconRecordSquare: FC<IconProps> = ({
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
            d="M18.5 12.0001C18.5 13.3808 17.3807 14.5001 16 14.5001C14.6193 14.5001 13.5 13.3808 13.5 12.0001C13.5 10.6194 14.6193 9.50012 16 9.50012C17.3807 9.50012 18.5 10.6194 18.5 12.0001Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M10.5 12.0001C10.5 13.3808 9.38071 14.5001 8 14.5001C6.61929 14.5001 5.5 13.3808 5.5 12.0001C5.5 10.6194 6.61929 9.50012 8 9.50012C9.38071 9.50012 10.5 10.6194 10.5 12.0001Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M8 14.5001H16"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 12.0001C2 7.28608 2 4.92905 3.46447 3.46459C4.92893 2.00012 7.28595 2.00012 12 2.00012C16.714 2.00012 19.0711 2.00012 20.5355 3.46459C22 4.92905 22 7.28608 22 12.0001C22 16.7142 22 19.0712 20.5355 20.5357C19.0711 22.0001 16.714 22.0001 12 22.0001C7.28595 22.0001 4.92893 22.0001 3.46447 20.5357C2 19.0712 2 16.7142 2 12.0001Z"
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
            d="M3.46447 3.46459C2 4.92905 2 7.28608 2 12.0001C2 16.7142 2 19.0712 3.46447 20.5357C4.92893 22.0001 7.28595 22.0001 12 22.0001C16.714 22.0001 19.0711 22.0001 20.5355 20.5357C22 19.0712 22 16.7142 22 12.0001C22 7.28608 22 4.92905 20.5355 3.46459C19.0711 2.00012 16.714 2.00012 12 2.00012C7.28595 2.00012 4.92893 2.00012 3.46447 3.46459Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.75 12.0001C12.75 12.6444 12.9375 13.245 13.2609 13.7501H10.7391C11.0625 13.245 11.25 12.6444 11.25 12.0001C11.25 10.2052 9.79493 8.75012 8 8.75012C6.20507 8.75012 4.75 10.2052 4.75 12.0001C4.75 13.795 6.20507 15.2501 8 15.2501H16C17.7949 15.2501 19.25 13.795 19.25 12.0001C19.25 10.2052 17.7949 8.75012 16 8.75012C14.2051 8.75012 12.75 10.2052 12.75 12.0001ZM14.25 12.0001C14.25 11.0336 15.0335 10.2501 16 10.2501C16.9665 10.2501 17.75 11.0336 17.75 12.0001C17.75 12.9666 16.9665 13.7501 16 13.7501C15.0335 13.7501 14.25 12.9666 14.25 12.0001ZM9.75 12.0001C9.75 12.9666 8.9665 13.7501 8 13.7501C7.0335 13.7501 6.25 12.9666 6.25 12.0001C6.25 11.0336 7.0335 10.2501 8 10.2501C8.9665 10.2501 9.75 11.0336 9.75 12.0001Z"
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
            d="M14.25 12.0001C14.25 11.0336 15.0335 10.2501 16 10.2501C16.9665 10.2501 17.75 11.0336 17.75 12.0001C17.75 12.9666 16.9665 13.7501 16 13.7501C15.0335 13.7501 14.25 12.9666 14.25 12.0001Z"
            fill="currentColor"
          />
          <path
            d="M8 13.7501C8.9665 13.7501 9.75 12.9666 9.75 12.0001C9.75 11.0336 8.9665 10.2501 8 10.2501C7.0335 10.2501 6.25 11.0336 6.25 12.0001C6.25 12.9666 7.0335 13.7501 8 13.7501Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.46447 3.46459C2 4.92905 2 7.28608 2 12.0001C2 16.7142 2 19.0712 3.46447 20.5357C4.92893 22.0001 7.28595 22.0001 12 22.0001C16.714 22.0001 19.0711 22.0001 20.5355 20.5357C22 19.0712 22 16.7142 22 12.0001C22 7.28608 22 4.92905 20.5355 3.46459C19.0711 2.00012 16.714 2.00012 12 2.00012C7.28595 2.00012 4.92893 2.00012 3.46447 3.46459ZM13.2609 13.7501C12.9375 13.245 12.75 12.6444 12.75 12.0001C12.75 10.2052 14.2051 8.75012 16 8.75012C17.7949 8.75012 19.25 10.2052 19.25 12.0001C19.25 13.795 17.7949 15.2501 16 15.2501H8C6.20507 15.2501 4.75 13.795 4.75 12.0001C4.75 10.2052 6.20507 8.75012 8 8.75012C9.79493 8.75012 11.25 10.2052 11.25 12.0001C11.25 12.6444 11.0625 13.245 10.7391 13.7501H13.2609Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRecordSquare as IconComponent).keywords = [
  "record",
  "square",
  "phonograph record",
  "book",
  "register",
  "read",
  "disk",
  "disc",
  "show",
  "memorialize",
  "commemorate",
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

export default IconRecordSquare as IconComponent;
