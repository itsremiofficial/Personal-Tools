import { FC } from "react";

const IconPieChart3: FC<IconProps> = ({
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
            d="M6.4443 3.68542C6.97115 3.33339 7.52766 3.03395 8.10577 2.78953C9.50868 2.19639 10.2101 1.89982 11.1051 2.49309C12 3.08635 12 4.05761 12 6.00012V8.00012C12 9.88574 12 10.8285 12.5858 11.4143C13.1716 12.0001 14.1144 12.0001 16 12.0001H18C19.9425 12.0001 20.9138 12.0001 21.507 12.8951C22.1003 13.79 21.8037 14.4914 21.2106 15.8943C20.9662 16.4725 20.6667 17.029 20.3147 17.5558C19.2159 19.2003 17.6541 20.482 15.8268 21.2389C13.9996 21.9958 11.9889 22.1938 10.0491 21.808C8.10929 21.4221 6.32746 20.4697 4.92894 19.0712C3.53041 17.6727 2.578 15.8908 2.19215 13.951C1.8063 12.0112 2.00433 10.0005 2.76121 8.17328C3.51809 6.34602 4.79981 4.78424 6.4443 3.68542Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14.5 2.31494C18.014 3.21939 20.7805 5.98588 21.685 9.4999"
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
            d="M6.4443 3.68542C6.97115 3.33339 7.52766 3.03395 8.10577 2.78953C9.50868 2.19639 10.2101 1.89982 11.1051 2.49309C12 3.08635 12 4.05761 12 6.00012V8.00012C12 9.88574 12 10.8285 12.5858 11.4143C13.1716 12.0001 14.1144 12.0001 16 12.0001H18C19.9425 12.0001 20.9138 12.0001 21.507 12.8951C22.1003 13.79 21.8037 14.4914 21.2106 15.8943C20.9662 16.4725 20.6667 17.029 20.3147 17.5558C19.2159 19.2003 17.6541 20.482 15.8268 21.2389C13.9996 21.9958 11.9889 22.1938 10.0491 21.808C8.10929 21.4221 6.32746 20.4697 4.92894 19.0712C3.53041 17.6727 2.578 15.8908 2.19215 13.951C1.8063 12.0112 2.00433 10.0005 2.76121 8.17328C3.51809 6.34602 4.79981 4.78424 6.4443 3.68542Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.7736 2.12818C13.8769 1.72704 14.2857 1.48555 14.6869 1.58879C18.4655 2.56135 21.4387 5.53449 22.4112 9.31314C22.5145 9.71428 22.273 10.1232 21.8718 10.2264C21.4707 10.3297 21.0618 10.0882 20.9586 9.68702C20.1222 6.43763 17.5624 3.87779 14.313 3.04145C13.9119 2.9382 13.6704 2.52932 13.7736 2.12818Z"
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
            d="M6.4443 3.68542C6.97115 3.33339 7.52766 3.03395 8.10577 2.78953C9.50868 2.19639 10.2101 1.89982 11.1051 2.49309C12 3.08635 12 4.05761 12 6.00012V8.00012C12 9.88574 12 10.8285 12.5858 11.4143C13.1716 12.0001 14.1144 12.0001 16 12.0001H18C19.9425 12.0001 20.9138 12.0001 21.507 12.8951C22.1003 13.79 21.8037 14.4914 21.2106 15.8943C20.9662 16.4725 20.6667 17.029 20.3147 17.5558C19.2159 19.2003 17.6541 20.482 15.8268 21.2389C13.9996 21.9958 11.9889 22.1938 10.0491 21.808C8.10929 21.4221 6.32746 20.4697 4.92894 19.0712C3.53041 17.6727 2.578 15.8908 2.19215 13.951C1.8063 12.0112 2.00433 10.0005 2.76121 8.17328C3.51809 6.34602 4.79981 4.78424 6.4443 3.68542Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.7736 2.12818C13.8769 1.72704 14.2857 1.48555 14.6869 1.58879C18.4655 2.56135 21.4387 5.53449 22.4112 9.31314C22.5145 9.71428 22.273 10.1232 21.8718 10.2264C21.4707 10.3297 21.0618 10.0882 20.9586 9.68702C20.1222 6.43763 17.5624 3.87779 14.313 3.04145C13.9119 2.9382 13.6704 2.52932 13.7736 2.12818Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPieChart3 as IconComponent).keywords = [
  "pie",
  "chart",
  "3",
  "proto-indo european",
  "cookie",
  "pastry",
  "biscuit",
  "twinkie",
  "cheesecake",
  "cake",
  "cupcake",
  "pudding",
  "map",
  "cartography",
  "mapping",
  "cartographic",
  "plan",
  "diagram",
  "graphical",
  "diagrammatic",
  "blueprint",
  "omega",
  "wash out",
  "cut up",
  "pull out",
  "pull up",
  "pull over",
  "pull in",
  "work out",
  "ride down",
];

export default IconPieChart3 as IconComponent;
