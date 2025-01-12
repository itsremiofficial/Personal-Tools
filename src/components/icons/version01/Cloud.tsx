import { FC } from "react";

const IconCloud: FC<IconProps> = ({
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
            d="M14.381 9.02714C14.9767 8.81904 15.6178 8.70581 16.2857 8.70581C16.9404 8.70581 17.5693 8.81461 18.1551 9.01491C20.393 9.78016 22 11.8811 22 14.3529C22 17.4717 19.4416 19.9999 16.2857 19.9999H6.28571C3.91878 19.9999 2 18.1037 2 15.7646C2 13.4255 3.91878 11.5293 6.28571 11.5293C6.56983 11.5293 6.8475 11.5567 7.11616 11.6088C7.68059 11.7183 8.20528 11.9373 8.66667 12.2425"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M7.11622 11.6089C6.88712 10.9978 6.76196 10.3369 6.76196 9.64706C6.76196 6.52827 9.32034 4 12.4762 4C15.4159 4 17.8372 6.19371 18.1551 9.01498"
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
            d="M22 14.3529C22 17.4717 19.4416 20 16.2857 20H10.4995C9.55792 18.7465 9 17.1884 9 15.5C9 11.3579 12.3579 8 16.5 8C17.009 8 17.5062 8.05071 17.9868 8.14736C18.0649 8.42841 18.1216 8.71822 18.1551 9.01498C20.393 9.78024 22 11.8811 22 14.3529Z"
            fill="currentColor"
          />
          <path
            d="M12.4762 4C9.32028 4 6.7619 6.52827 6.7619 9.64706C6.7619 10.3369 6.88706 10.9978 7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H10.4995C9.55792 18.7465 9 17.1884 9 15.5C9 11.3579 12.3579 8 16.5 8C17.009 8 17.5062 8.05071 17.9868 8.14736C17.9721 8.09441 17.9566 8.04178 17.9403 7.98948C17.2237 5.67956 15.0484 4 12.4762 4Z"
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
            d="M16.2857 20C19.4416 20 22 17.4717 22 14.3529C22 11.8811 20.393 9.78024 18.1551 9.01498C17.8371 6.19371 15.4159 4 12.4762 4C9.32028 4 6.7619 6.52827 6.7619 9.64706C6.7619 10.3369 6.88706 10.9978 7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H16.2857Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCloud as IconComponent).keywords = [
  "cloud",
  "fog",
  "mist",
  "befog",
  "haze over",
  "becloud",
  "dapple",
  "mottle",
  "sully",
  "defile",
];

export default IconCloud as IconComponent;
