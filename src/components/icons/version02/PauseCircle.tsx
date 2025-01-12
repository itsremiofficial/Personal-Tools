import { FC } from "react";

const IconPauseCircle: FC<IconProps> = ({
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
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6396 22C18.1625 22 22.6396 17.5228 22.6396 12C22.6396 6.47715 18.1625 2 12.6396 2C7.1168 2 2.63965 6.47715 2.63965 12C2.63965 17.5228 7.1168 22 12.6396 22Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.3899 14.53V9.47C11.3899 8.99 11.1899 8.8 10.6799 8.8H9.37992C8.86992 8.8 8.66992 8.99 8.66992 9.47V14.53C8.66992 15.01 8.86992 15.2 9.37992 15.2H10.6699C11.1899 15.2 11.3899 15.01 11.3899 14.53Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.67 14.53V9.47C16.67 8.99 16.47 8.8 15.96 8.8H14.67C14.16 8.8 13.96 8.99 13.96 9.47V14.53C13.96 15.01 14.16 15.2 14.67 15.2H15.96C16.47 15.2 16.67 15.01 16.67 14.53Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.6396 22C18.1625 22 22.6396 17.5228 22.6396 12C22.6396 6.47715 18.1625 2 12.6396 2C7.1168 2 2.63965 6.47715 2.63965 12C2.63965 17.5228 7.1168 22 12.6396 22Z"
            fill="currentColor"
          />
          <path
            d="M11.3899 15.03V8.97C11.3899 8.49 11.1899 8.3 10.6799 8.3H9.37992C8.86992 8.3 8.66992 8.49 8.66992 8.97V15.03C8.66992 15.51 8.86992 15.7 9.37992 15.7H10.6699C11.1899 15.7 11.3899 15.51 11.3899 15.03Z"
            fill="currentColor"
          />
          <path
            d="M16.67 15.03V8.97C16.67 8.49 16.47 8.3 15.96 8.3H14.67C14.16 8.3 13.96 8.49 13.96 8.97V15.03C13.96 15.51 14.16 15.7 14.67 15.7H15.96C16.47 15.7 16.67 15.51 16.67 15.03Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          className={className}
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6396 2C7.11965 2 2.63965 6.48 2.63965 12C2.63965 17.52 7.11965 22 12.6396 22C18.1596 22 22.6396 17.52 22.6396 12C22.6396 6.48 18.1696 2 12.6396 2ZM11.3896 15.03C11.3896 15.51 11.1896 15.7 10.6796 15.7H9.37965C8.86965 15.7 8.66965 15.51 8.66965 15.03V8.97C8.66965 8.49 8.86965 8.3 9.37965 8.3H10.6696C11.1796 8.3 11.3796 8.49 11.3796 8.97V15.03H11.3896ZM16.6696 15.03C16.6696 15.51 16.4696 15.7 15.9596 15.7H14.6696C14.1596 15.7 13.9596 15.51 13.9596 15.03V8.97C13.9596 8.49 14.1596 8.3 14.6696 8.3H15.9596C16.4696 8.3 16.6696 8.49 16.6696 8.97V15.03Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPauseCircle as IconComponent).keywords = [
  "pause",
  "circle",
  "suspension",
  "intermit",
  "interruption",
  "hesitate",
  "break",
  "intermission",
  "respite",
  "hiatus",
  "stoppage",
  "round",
  "rotary",
  "environ",
  "roundabout",
  "circulate",
  "circuit",
  "encircle",
  "surround",
  "dress circle",
];

export default IconPauseCircle as IconComponent;
