import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconAlarmTurnOff: FC<IconProps> = ({
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
            d="M14.1213 15.1218L12 13.0005M12 13.0005L9.87866 10.8792M12 13.0005L14.1213 10.8792M12 13.0005L9.87868 15.1218"
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
            d="M14.6514 10.3491C14.9443 10.642 14.9443 11.1168 14.6514 11.4097L13.0604 13.0007L14.6514 14.5917C14.9443 14.8846 14.9443 15.3595 14.6514 15.6524C14.3585 15.9453 13.8836 15.9453 13.5907 15.6524L11.9997 14.0614L10.4088 15.6524C10.1159 15.9453 9.641 15.9453 9.34811 15.6524C9.05521 15.3595 9.05521 14.8846 9.34811 14.5917L10.9391 13.0007L9.34809 11.4097C9.05519 11.1168 9.05519 10.642 9.34809 10.3491C9.64098 10.0562 10.1159 10.0562 10.4087 10.3491L11.9997 11.9401L13.5907 10.3491C13.8836 10.0562 14.3585 10.0562 14.6514 10.3491Z"
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
            d="M12 22.0006C16.9706 22.0006 21 17.9712 21 13.0006C21 8.03003 16.9706 4.00059 12 4.00059C7.02943 4.00059 2.99999 8.03003 2.99999 13.0006C2.99999 17.9712 7.02943 22.0006 12 22.0006ZM14.6516 10.3489C14.9445 10.6418 14.9445 11.1167 14.6516 11.4096L13.0606 13.0006L14.6516 14.5916C14.9445 14.8845 14.9445 15.3594 14.6516 15.6523C14.3587 15.9452 13.8839 15.9452 13.591 15.6523L12 14.0613L10.409 15.6522C10.1161 15.9451 9.64124 15.9451 9.34834 15.6522C9.05545 15.3593 9.05545 14.8845 9.34834 14.5916L10.9393 13.0006L9.34833 11.4096C9.05543 11.1167 9.05543 10.6418 9.34833 10.349C9.64122 10.0561 10.1161 10.0561 10.409 10.349L12 11.9399L13.591 10.3489C13.8839 10.056 14.3588 10.056 14.6516 10.3489Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.13602 1.60309C8.35555 1.95434 8.24877 2.41706 7.89751 2.63659L3.89749 5.13659C3.54624 5.35612 3.08353 5.24934 2.86399 4.89809C2.64446 4.54683 2.75124 4.08412 3.1025 3.86459L7.10252 1.36459C7.45377 1.14506 7.91649 1.25184 8.13602 1.60309ZM15.864 1.60309C16.0835 1.25184 16.5462 1.14506 16.8975 1.36459L20.8975 3.86459C21.2487 4.08412 21.3555 4.54684 21.136 4.89809C20.9165 5.24934 20.4537 5.35612 20.1025 5.13659L16.1025 2.63659C15.7512 2.41705 15.6445 1.95434 15.864 1.60309Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconAlarmTurnOff as IconComponentType).keywords = [
  "alarm",
  "turn",
  "off",
  "alarum",
  "alarm system",
  "alert",
  "consternation",
  "alarm clock",
  "horrify",
  "appall",
  "dismay",
  "appal",
  "reverse",
  "turn to",
  "bend",
  "move around",
  "crook",
  "turn into",
  "twist",
  "grow",
  "wrick",
  "away",
  "cancelled",
  "forth",
  "inactive",
  "disconnected",
  "unsatisfactory",
  "soured",
  "sour",
  "off-duty",
];

export default IconAlarmTurnOff as IconComponentType;
