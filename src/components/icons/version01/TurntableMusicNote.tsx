import { FC } from "react";

const IconTurntableMusicNote: FC<IconProps> = ({
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
            d="M12 22.0001C7.28595 22.0001 4.92893 22.0001 3.46447 20.5357C2 19.0712 2 16.7142 2 12.0001C2 7.28608 2 4.92905 3.46447 3.46459C4.92893 2.00012 7.28595 2.00012 12 2.00012C16.714 2.00012 19.0711 2.00012 20.5355 3.46459C21.7764 4.70541 21.9658 6.587 21.9948 10.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M19 20.0001V16.0001V12.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <circle
            cx="17"
            cy="20.0001"
            r="2"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M22 15.0001C20.3431 15.0001 19 13.657 19 12.0001"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9 12.0001C9 10.3433 10.3431 9.00012 12 9.00012C13.6569 9.00012 15 10.3433 15 12.0001C15 13.657 13.6569 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001Z"
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
            d="M3.17157 3.46459C2 4.92905 2 7.28608 2 12.0001C2 16.7142 2 19.0712 3.17157 20.5357C4.34315 22.0001 6.22876 22.0001 10 22.0001H13.3759C13.1344 21.4664 13 20.874 13 20.2501C13 17.9868 14.7692 16.1368 17 16.0074V12.2501C17 11.0075 18.0074 10.0001 19.25 10.0001C20.4926 10.0001 21.5 11.0075 21.5 12.2501C21.5 12.5765 21.7085 12.8542 21.9996 12.9573C22 12.6495 22 12.3306 22 12.0001C22 7.28608 22 4.92905 20.8284 3.46459C19.6569 2.00012 17.7712 2.00012 14 2.00012H10C6.22876 2.00012 4.34315 2.00012 3.17157 3.46459Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25 12.0001C8.25 9.92905 9.92893 8.25012 12 8.25012C14.0711 8.25012 15.75 9.92905 15.75 12.0001C15.75 14.0712 14.0711 15.7501 12 15.7501C9.92893 15.7501 8.25 14.0712 8.25 12.0001ZM12 9.75012C10.7574 9.75012 9.75 10.7575 9.75 12.0001C9.75 13.2428 10.7574 14.2501 12 14.2501C13.2426 14.2501 14.25 13.2428 14.25 12.0001C14.25 10.7575 13.2426 9.75012 12 9.75012Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.25 11.5001C19.6642 11.5001 20 11.8359 20 12.2501C20 13.4928 21.0074 14.5001 22.25 14.5001C22.6642 14.5001 23 14.8359 23 15.2501C23 15.6643 22.6642 16.0001 22.25 16.0001C21.4058 16.0001 20.6267 15.7212 20 15.2504V20.2501C20 21.7689 18.7688 23.0001 17.25 23.0001C15.7312 23.0001 14.5 21.7689 14.5 20.2501C14.5 18.7313 15.7312 17.5001 17.25 17.5001C17.7001 17.5001 18.125 17.6083 18.5 17.8V12.2501C18.5 11.8359 18.8358 11.5001 19.25 11.5001ZM18.5 20.2501C18.5 19.5598 17.9404 19.0001 17.25 19.0001C16.5596 19.0001 16 19.5598 16 20.2501C16 20.9405 16.5596 21.5001 17.25 21.5001C17.9404 21.5001 18.5 20.9405 18.5 20.2501Z"
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
            d="M19.25 11.5001C19.6642 11.5001 20 11.8359 20 12.2501C20 13.4928 21.0074 14.5001 22.25 14.5001C22.6642 14.5001 23 14.8359 23 15.2501C23 15.6643 22.6642 16.0001 22.25 16.0001C21.4058 16.0001 20.6267 15.7212 20 15.2504V20.2501C20 21.7689 18.7688 23.0001 17.25 23.0001C15.7312 23.0001 14.5 21.7689 14.5 20.2501C14.5 18.7313 15.7312 17.5001 17.25 17.5001C17.7001 17.5001 18.125 17.6083 18.5 17.8V12.2501C18.5 11.8359 18.8358 11.5001 19.25 11.5001ZM18.5 20.2501C18.5 19.5598 17.9404 19.0001 17.25 19.0001C16.5596 19.0001 16 19.5598 16 20.2501C16 20.9405 16.5596 21.5001 17.25 21.5001C17.9404 21.5001 18.5 20.9405 18.5 20.2501Z"
            fill="currentColor"
          />
          <path
            d="M12 9.75012C10.7574 9.75012 9.75 10.7575 9.75 12.0001C9.75 13.2428 10.7574 14.2501 12 14.2501C13.2426 14.2501 14.25 13.2428 14.25 12.0001C14.25 10.7575 13.2426 9.75012 12 9.75012Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12.0001C2 7.28608 2 4.92905 3.17157 3.46459C4.34315 2.00012 6.22876 2.00012 10 2.00012H14C17.7712 2.00012 19.6569 2.00012 20.8284 3.46459C22 4.92905 22 7.28608 22 12.0001C22 12.3306 22 12.6495 21.9996 12.9573C21.7085 12.8542 21.5 12.5765 21.5 12.2501C21.5 11.0075 20.4926 10.0001 19.25 10.0001C18.0074 10.0001 17 11.0075 17 12.2501V16.0074C14.7692 16.1368 13 17.9868 13 20.2501C13 20.874 13.1344 21.4664 13.3759 22.0001H10C6.22876 22.0001 4.34315 22.0001 3.17157 20.5357C2 19.0712 2 16.7142 2 12.0001ZM12 8.25012C9.92893 8.25012 8.25 9.92905 8.25 12.0001C8.25 14.0712 9.92893 15.7501 12 15.7501C14.0711 15.7501 15.75 14.0712 15.75 12.0001C15.75 9.92905 14.0711 8.25012 12 8.25012Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTurntableMusicNote as IconComponent).keywords = [
  "turntable",
  "music",
  "note",
  "lazy susan",
  "rotary",
  "revolving",
  "gateway",
  "hub",
  "carousel",
  "shelf",
  "plateau",
  "sinker",
  "sheet music",
  "euphony",
  "medicine",
  "melody",
  "symphony",
  "orchestra",
  "musician",
  "song",
  "singing",
  "annotation",
  "notation",
  "mention",
  "remark",
  "notice",
  "observe",
  "take note",
  "distinction",
  "bank note",
];

export default IconTurntableMusicNote as IconComponent;
