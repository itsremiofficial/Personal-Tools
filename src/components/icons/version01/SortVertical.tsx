import { FC } from "react";

const IconSortVertical: FC<IconProps> = ({
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
            opacity={duotone ? "0.5" : "1"}
            d="M16 18L16 6M16 6L20 10.125M16 6L12 10.125"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 6L8 18M8 18L12 13.875M8 18L4 13.875"
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
            d="M20 10.875C20.3013 10.875 20.5733 10.6948 20.6907 10.4173C20.8081 10.1399 20.7482 9.81916 20.5384 9.60289L16.5384 5.47789C16.3972 5.33222 16.2029 5.25 16 5.25C15.7971 5.25 15.6029 5.33222 15.4616 5.47789L11.4616 9.60289C11.2519 9.81916 11.1919 10.1399 11.3093 10.4173C11.4268 10.6948 11.6988 10.875 12 10.875H15.25V18C15.25 18.4142 15.5858 18.75 16 18.75C16.4142 18.75 16.75 18.4142 16.75 18L16.75 10.875H20Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 13.125C12.3013 13.125 12.5733 13.3052 12.6907 13.5827C12.8081 13.8601 12.7482 14.1808 12.5384 14.3971L8.53844 18.5221C8.39719 18.6678 8.20293 18.75 8.00002 18.75C7.79711 18.75 7.60285 18.6678 7.46159 18.5221L3.46159 14.3971C3.25188 14.1808 3.19192 13.8601 3.30934 13.5827C3.42676 13.3052 3.69877 13.125 4.00002 13.125H7.25002L7.25002 6C7.25002 5.58579 7.5858 5.25 8.00002 5.25C8.41423 5.25 8.75002 5.58579 8.75002 6L8.75002 13.125L12 13.125Z"
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
            d="M12 13.125C12.3013 13.125 12.5733 13.3052 12.6907 13.5827C12.8081 13.8601 12.7482 14.1808 12.5384 14.3971L8.53844 18.5221C8.39719 18.6678 8.20293 18.75 8.00002 18.75C7.79711 18.75 7.60285 18.6678 7.46159 18.5221L3.46159 14.3971C3.25188 14.1808 3.19192 13.8601 3.30934 13.5827C3.42676 13.3052 3.69877 13.125 4.00002 13.125H7.25002V6C7.25002 5.58579 7.5858 5.25 8.00002 5.25C8.41423 5.25 8.75002 5.58579 8.75002 6V13.125H12Z"
            fill="currentColor"
          />
          <path
            d="M20 10.875C20.3013 10.875 20.5733 10.6948 20.6907 10.4173C20.8081 10.1399 20.7482 9.81916 20.5384 9.60289L16.5384 5.47789C16.3972 5.33222 16.2029 5.25 16 5.25C15.7971 5.25 15.6029 5.33222 15.4616 5.47789L11.4616 9.60289C11.2519 9.81916 11.1919 10.1399 11.3093 10.4173C11.4268 10.6948 11.6988 10.875 12 10.875H15.25V18C15.25 18.4142 15.5858 18.75 16 18.75C16.4142 18.75 16.75 18.4142 16.75 18L16.75 10.875H20Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconSortVertical as IconComponent).keywords = [
  "sort",
  "vertical",
  "classify",
  "assort",
  "class",
  "form",
  "kind",
  "sort out",
  "variety",
  "separate",
  "screen",
  "perpendicular",
  "plumb",
  "upright",
  "stand-up",
  "standing",
  "straight",
  "rearing",
  "erect",
  "erectile",
];

export default IconSortVertical as IconComponent;
