import { FC } from "react";

const IconRuble: FC<IconProps> = ({
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
            cy="12.0005"
            r="10"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M9 14.0005H12"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M10 12.0005V8.20049C10 8.01469 10 7.92179 10.0123 7.84405C10.0801 7.41616 10.4157 7.08057 10.8436 7.0128C10.9213 7.00049 11.0142 7.00049 11.2 7.00049H13.5C14.8807 7.00049 16 8.11978 16 9.50049C16 10.8812 14.8807 12.0005 13.5 12.0005H10ZM10 12.0005V17.0005M10 12.0005H9"
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
            d="M22 12.0005C22 17.5233 17.5228 22.0005 12 22.0005C6.47715 22.0005 2 17.5233 2 12.0005C2 6.47764 6.47715 2.00049 12 2.00049C17.5228 2.00049 22 6.47764 22 12.0005Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 13.2506C8.58579 13.2506 8.25 13.5863 8.25 14.0006C8.25 14.4148 8.58579 14.7506 9 14.7506H9.25V17.0006C9.25 17.4148 9.58579 17.7506 10 17.7506C10.4142 17.7506 10.75 17.4148 10.75 17.0006V14.7506H12C12.4142 14.7506 12.75 14.4148 12.75 14.0006C12.75 13.5863 12.4142 13.2506 12 13.2506H10.75V12.7506H13.5C15.2949 12.7506 16.75 11.2955 16.75 9.50055C16.75 7.70562 15.2949 6.25055 13.5 6.25055L11.1615 6.25052C11.016 6.25035 10.8647 6.25016 10.7262 6.2721C9.97743 6.3907 9.39015 6.97798 9.27155 7.72679C9.24961 7.86526 9.24979 8.01653 9.24997 8.16206L9.25 11.2506H9C8.58579 11.2506 8.25 11.5863 8.25 12.0006C8.25 12.4148 8.58579 12.7506 9 12.7506H9.25V13.2506H9ZM13.5 11.2506H10.75V8.20055C10.75 8.10358 10.7501 8.04586 10.7513 8.00235C10.752 7.97474 10.7531 7.96274 10.7533 7.95985C10.7708 7.85417 10.8536 7.77132 10.9593 7.75389C10.9622 7.7536 10.9742 7.75256 11.0018 7.75181C11.0453 7.75062 11.103 7.75055 11.2 7.75055H13.5C14.4665 7.75055 15.25 8.53405 15.25 9.50055C15.25 10.467 14.4665 11.2506 13.5 11.2506Z"
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
            d="M13.5 11.2505H10.75V8.20049C10.75 8.10352 10.7501 8.0458 10.7513 8.00229C10.752 7.97468 10.7531 7.96268 10.7533 7.95979C10.7708 7.85411 10.8536 7.77126 10.9593 7.75382C10.9622 7.75354 10.9742 7.7525 11.0018 7.75175C11.0453 7.75055 11.103 7.75049 11.2 7.75049H13.5C14.4665 7.75049 15.25 8.53399 15.25 9.50049C15.25 10.467 14.4665 11.2505 13.5 11.2505Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 12.0005C22 17.5233 17.5228 22.0005 12 22.0005C6.47715 22.0005 2 17.5233 2 12.0005C2 6.47764 6.47715 2.00049 12 2.00049C17.5228 2.00049 22 6.47764 22 12.0005ZM8.25 14.0005C8.25 13.5863 8.58579 13.2505 9 13.2505H9.25V12.7505H9C8.58579 12.7505 8.25 12.4147 8.25 12.0005C8.25 11.5863 8.58579 11.2505 9 11.2505H9.25L9.24997 8.162C9.24979 8.01647 9.24961 7.8652 9.27155 7.72673C9.39015 6.97792 9.97743 6.39063 10.7262 6.27203C10.8647 6.2501 11.016 6.25028 11.1615 6.25046L13.5 6.25049C15.2949 6.25049 16.75 7.70556 16.75 9.50049C16.75 11.2954 15.2949 12.7505 13.5 12.7505H10.75V13.2505H12C12.4142 13.2505 12.75 13.5863 12.75 14.0005C12.75 14.4147 12.4142 14.7505 12 14.7505H10.75V17.0005C10.75 17.4147 10.4142 17.7505 10 17.7505C9.58579 17.7505 9.25 17.4147 9.25 17.0005V14.7505H9C8.58579 14.7505 8.25 14.4147 8.25 14.0005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRuble as IconComponent).keywords = [
  "ruble",
  "rouble",
  "zloty",
  "rupee",
  "kopeks",
  "manat",
  "tenge",
  "roubles",
  "dollar",
  "grivna",
];

export default IconRuble as IconComponent;
