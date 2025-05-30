import { FC } from "react";

const IconMusicNote: FC<IconProps> = ({
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
            d="M9 19C9 20.6569 7.65685 22 6 22C4.34315 22 3 20.6569 3 19C3 17.3431 4.34315 16 6 16C7.65685 16 9 17.3431 9 19Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M21 17C21 18.6569 19.6569 20 18 20C16.3431 20 15 18.6569 15 17C15 15.3431 16.3431 14 18 14C19.6569 14 21 15.3431 21 17Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9 19V8"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M21 17V6"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M15.7351 3.7549L11.7351 5.08824C10.4151 5.52825 9.75503 5.74826 9.37752 6.27203C9 6.79581 9 7.49153 9 8.88297V11.9999L21 7.99993V7.54964C21 5.01718 21 3.75095 20.1694 3.1523C19.3388 2.55365 18.1376 2.95407 15.7351 3.7549Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.091 11.9629L19.3637 8.63087L21 7.95235V7.49236C21.0001 6.37238 21.0001 5.4331 20.9123 4.68472C20.8999 4.57895 20.8852 4.4738 20.8691 4.37569C20.7846 3.86441 20.6352 3.38745 20.347 2.98917C20.2029 2.79002 20.024 2.61055 19.8012 2.45628C19.7594 2.42736 19.7161 2.39932 19.6712 2.3722L19.6621 2.36679C18.8906 1.90553 18.0233 1.93852 17.1298 2.14305C16.2657 2.34086 15.1945 2.74368 13.8808 3.23763L11.5964 4.09656C10.9806 4.32806 10.4589 4.52419 10.0495 4.72734C9.6138 4.94348 9.23854 5.1984 8.95711 5.57828C8.67568 5.95817 8.5588 6.36756 8.50506 6.81203C8.45455 7.22978 8.45457 7.7378 8.45459 8.33743V12.6016L10.091 11.9629Z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.5" : "1"}>
            <path
              d="M8.45455 16.1305C7.90347 15.8136 7.24835 15.6298 6.54545 15.6298C4.58735 15.6298 3 17.0558 3 18.8148C3 20.5738 4.58735 21.9998 6.54545 21.9998C8.50355 21.9998 10.0909 20.5738 10.0909 18.8148L10.0909 11.9627L8.45455 12.6014V16.1305Z"
              fill="currentColor"
            />
            <path
              d="M19.3636 8.63067V14.1705C18.8126 13.8536 18.1574 13.6698 17.4545 13.6698C15.4964 13.6698 13.9091 15.0958 13.9091 16.8548C13.9091 18.6138 15.4964 20.0398 17.4545 20.0398C19.4126 20.0398 21 18.6138 21 16.8548L21 7.95215L19.3636 8.63067Z"
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
            d="M10.0909 11.9629L19.3636 8.63087V14.1707C18.8126 13.8538 18.1574 13.67 17.4545 13.67C15.4964 13.67 13.9091 15.096 13.9091 16.855C13.9091 18.614 15.4964 20.04 17.4545 20.04C19.4126 20.04 21 18.614 21 16.855C21 16.855 21 16.8551 21 16.855L21 7.49236C21 6.37238 21 5.4331 20.9123 4.68472C20.8999 4.57895 20.8852 4.4738 20.869 4.37569C20.7845 3.86441 20.6352 3.38745 20.347 2.98917C20.2028 2.79002 20.024 2.61055 19.8012 2.45628C19.7594 2.42736 19.716 2.39932 19.6711 2.3722L19.6621 2.36679C18.8906 1.90553 18.0233 1.93852 17.1298 2.14305C16.2657 2.34086 15.1944 2.74368 13.8808 3.23763L11.5963 4.09656C10.9806 4.32806 10.4589 4.52419 10.0494 4.72734C9.61376 4.94348 9.23849 5.1984 8.95707 5.57828C8.67564 5.95817 8.55876 6.36756 8.50501 6.81203C8.4545 7.22978 8.45452 7.7378 8.45455 8.33743V16.1307C7.90347 15.8138 7.24835 15.63 6.54545 15.63C4.58735 15.63 3 17.056 3 18.815C3 20.574 4.58735 22 6.54545 22C8.50355 22 10.0909 20.574 10.0909 18.815C10.0909 18.815 10.0909 18.8151 10.0909 18.815L10.0909 11.9629Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMusicNote as IconComponent).keywords = [
  "music",
  "note",
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

export default IconMusicNote as IconComponent;
