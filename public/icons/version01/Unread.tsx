import { FC } from "react";

const IconUnread: FC<IconProps> = ({
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
            d="M7 12.9002L10.1429 16.5002L18 7.50024"
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
            d="M20.5355 20.5358C22 19.0713 22 16.7143 22 12.0002C22 7.2862 22 4.92918 20.5355 3.46471C19.0711 2.00024 16.714 2.00024 12 2.00024C7.28595 2.00024 4.92893 2.00024 3.46447 3.46471C2 4.92918 2 7.2862 2 12.0002C2 16.7143 2 19.0713 3.46447 20.5358C4.92893 22.0002 7.28595 22.0002 12 22.0002C16.714 22.0002 19.0711 22.0002 20.5355 20.5358Z"
            fill="currentColor"
          />
          <path
            d="M17.4545 6.90371C17.784 7.15474 17.8476 7.62534 17.5966 7.95482L10.7394 16.9548C10.6029 17.134 10.393 17.2424 10.1678 17.2499C9.94267 17.2574 9.72605 17.1633 9.57788 16.9935L6.43502 13.3935C6.16261 13.0815 6.19473 12.6077 6.50677 12.3353C6.8188 12.0629 7.29259 12.095 7.565 12.407L10.1034 15.3146L16.4034 7.04575C16.6545 6.71627 17.1251 6.65268 17.4545 6.90371Z"
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
            d="M22 12.0002C22 16.7143 22 19.0713 20.5355 20.5358C19.0711 22.0002 16.714 22.0002 12 22.0002C7.28595 22.0002 4.92893 22.0002 3.46447 20.5358C2 19.0713 2 16.7143 2 12.0002C2 7.2862 2 4.92918 3.46447 3.46471C4.92893 2.00024 7.28595 2.00024 12 2.00024C16.714 2.00024 19.0711 2.00024 20.5355 3.46471C22 4.92918 22 7.2862 22 12.0002ZM17.4545 6.90367C17.784 7.1547 17.8476 7.6253 17.5966 7.95478L10.7394 16.9548C10.6029 17.134 10.393 17.2423 10.1678 17.2498C9.94266 17.2573 9.72604 17.1632 9.57787 16.9935L6.43501 13.3935C6.1626 13.0815 6.19472 12.6077 6.50676 12.3353C6.81879 12.0628 7.29258 12.095 7.56499 12.407L10.1033 15.3146L16.4034 7.04571C16.6545 6.71623 17.1251 6.65264 17.4545 6.90367Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconUnread as IconComponent).keywords = [
  "unread",
  "uninformed",
  "unused",
  "unutilized",
  "unspent",
  "unencumbered",
  "unwatched",
  "unplayed",
  "unsent",
  "unreviewed",
];

export default IconUnread as IconComponent;
