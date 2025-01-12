import { FC } from "react";

const IconHourglass: FC<IconProps> = ({
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
            d="M14.9577 9.07156L12 12.0005L9.0423 9.07156L9.0423 9.07155C6.11981 6.17749 4.65857 4.73045 5.06765 3.48197C5.10282 3.37466 5.14649 3.27026 5.19825 3.16975C5.80046 2.00049 7.86697 2.00049 12 2.00049C16.133 2.00049 18.1995 2.00049 18.8017 3.16975C18.8535 3.27026 18.8972 3.37466 18.9323 3.48197C19.3414 4.73045 17.8802 6.17749 14.9577 9.07156Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M9.0423 14.9294L12 12.0005L14.9577 14.9294C17.8802 17.8235 19.3414 19.2705 18.9323 20.519C18.8972 20.6263 18.8535 20.7307 18.8017 20.8312C18.1995 22.0005 16.133 22.0005 12 22.0005C7.86697 22.0005 5.80046 22.0005 5.19825 20.8312C5.14649 20.7307 5.10282 20.6263 5.06765 20.519C4.65857 19.2705 6.11981 17.8235 9.04229 14.9294L9.0423 14.9294Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2.00049C7.86697 2.00049 5.80046 2.00049 5.19825 3.29967C5.14649 3.41134 5.10282 3.52734 5.06765 3.64658C4.65857 5.03378 6.11981 6.6416 9.0423 9.85723L11 12.0005H13L14.9577 9.85723C17.8802 6.6416 19.3414 5.03378 18.9323 3.64658C18.8972 3.52734 18.8535 3.41134 18.8017 3.29967C18.1995 2.00049 16.133 2.00049 12 2.00049Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5.19825 20.7013C5.80046 22.0005 7.86697 22.0005 12 22.0005C16.133 22.0005 18.1995 22.0005 18.8017 20.7013C18.8535 20.5896 18.8972 20.4736 18.9323 20.3544C19.3414 18.9672 17.8802 17.3594 14.9577 14.1437L13 12.0005H11L9.0423 14.1437C6.11981 17.3594 4.65857 18.9672 5.06765 20.3544C5.10282 20.4736 5.14649 20.5896 5.19825 20.7013Z"
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
            d="M5.19825 3.29967C5.80046 2.00049 7.86697 2.00049 12 2.00049C16.133 2.00049 18.1995 2.00049 18.8017 3.29967C18.8535 3.41134 18.8972 3.52734 18.9323 3.64658C19.3414 5.03378 17.8802 6.6416 14.9577 9.85723L13 12.0005L14.9577 14.1437C17.8802 17.3594 19.3414 18.9672 18.9323 20.3544C18.8972 20.4736 18.8535 20.5896 18.8017 20.7013C18.1995 22.0005 16.133 22.0005 12 22.0005C7.86697 22.0005 5.80046 22.0005 5.19825 20.7013C5.14649 20.5896 5.10282 20.4736 5.06765 20.3544C4.65857 18.9672 6.11981 17.3594 9.0423 14.1437L11 12.0005L9.0423 9.85723C6.11981 6.6416 4.65857 5.03378 5.06765 3.64658C5.10282 3.52734 5.14649 3.41134 5.19825 3.29967Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHourglass as IconComponent).keywords = [
  "hourglass",
  "sandglass",
  "glass",
  "silhouette",
  "sands",
  "sand",
  "crescent",
  "beachball",
  "rectangle",
  "shape",
];

export default IconHourglass as IconComponent;
