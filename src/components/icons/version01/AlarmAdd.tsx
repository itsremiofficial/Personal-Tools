import { FC } from "react";

const IconAlarmAdd: FC<IconProps> = ({
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
          <circle
            opacity={duotone ? "0.5" : "1"}
            cx="12"
            cy="13.0005"
            r="9"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M15 13.0005L12 13.0005M12 13.0005L9 13.0005M12 13.0005L12 10.0005M12 13.0005L12 16.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M3.5 4.50049L7.50002 2.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5 4.50049L16.5 2.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M12 22.0005C16.9706 22.0005 21 17.9711 21 13.0005C21 8.02993 16.9706 4.00049 12 4.00049C7.02944 4.00049 3 8.02993 3 13.0005C3 17.9711 7.02944 22.0005 12 22.0005Z"
            fill="currentColor"
          />
          <path
            d="M12 9.25049C12.4142 9.25049 12.75 9.58627 12.75 10.0005V12.2505H15C15.4142 12.2505 15.75 12.5863 15.75 13.0005C15.75 13.4147 15.4142 13.7505 15 13.7505H12.75V16.0005C12.75 16.4147 12.4142 16.7505 12 16.7505C11.5858 16.7505 11.25 16.4147 11.25 16.0005V13.7505H9C8.58579 13.7505 8.25 13.4147 8.25 13.0005C8.25 12.5863 8.58579 12.2505 9 12.2505H11.25V10.0005C11.25 9.58627 11.5858 9.25049 12 9.25049Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.2405 2.34034C8.45409 2.6789 8.3502 3.12489 8.00844 3.33648L4.11657 5.74611C3.77481 5.9577 3.32461 5.85478 3.11102 5.51623C2.89742 5.17767 3.00131 4.73169 3.34307 4.52009L7.23494 2.11046C7.5767 1.89887 8.0269 2.00179 8.2405 2.34034Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.7595 2.34034C15.9731 2.00179 16.4233 1.89887 16.7651 2.11047L20.6569 4.52009C20.9987 4.73169 21.1026 5.17767 20.889 5.51623C20.6754 5.85478 20.2252 5.9577 19.8834 5.74611L15.9916 3.33648C15.6498 3.12488 15.5459 2.6789 15.7595 2.34034Z"
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
            d="M12 22.0006C16.9705 22.0006 21 17.9712 21 13.0006C21 8.03003 16.9705 4.00059 12 4.00059C7.02942 4.00059 2.99998 8.03003 2.99998 13.0006C2.99998 17.9712 7.02942 22.0006 12 22.0006ZM12 9.25059C12.4142 9.25059 12.75 9.58638 12.75 10.0006V12.2506H15C15.4142 12.2506 15.75 12.5864 15.75 13.0006C15.75 13.4148 15.4142 13.7506 15 13.7506H12.75L12.75 16.0006C12.75 16.4148 12.4142 16.7506 12 16.7506C11.5858 16.7506 11.25 16.4148 11.25 16.0006V13.7506H8.99998C8.58576 13.7506 8.24998 13.4148 8.24998 13.0006C8.24998 12.5864 8.58576 12.2506 8.99998 12.2506H11.25L11.25 10.0006C11.25 9.58638 11.5858 9.25059 12 9.25059Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.136 1.60309C8.35553 1.95434 8.24875 2.41706 7.8975 2.63659L3.89748 5.13659C3.54622 5.35612 3.08351 5.24934 2.86398 4.89809C2.64445 4.54683 2.75123 4.08412 3.10248 3.86459L7.1025 1.36459C7.45376 1.14506 7.91647 1.25184 8.136 1.60309ZM15.864 1.60309C16.0835 1.25184 16.5462 1.14506 16.8975 1.36459L20.8975 3.86459C21.2487 4.08412 21.3555 4.54684 21.136 4.89809C20.9164 5.24934 20.4537 5.35612 20.1025 5.13659L16.1025 2.63659C15.7512 2.41705 15.6444 1.95434 15.864 1.60309Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAlarmAdd as IconComponent).keywords = [
  "alarm",
  "add",
  "alarum",
  "alarm system",
  "alert",
  "consternation",
  "alarm clock",
  "horrify",
  "appall",
  "dismay",
  "appal",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply",
];

export default IconAlarmAdd as IconComponent;
