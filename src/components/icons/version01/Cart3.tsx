import { FC } from "react";

const IconCart3: FC<IconProps> = ({
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
            d="M3.86376 16.4557C3.00581 13.0239 2.57684 11.308 3.47767 10.1543C4.3785 9.00049 6.14721 9.00049 9.68462 9.00049H14.3153C17.8527 9.00049 19.6214 9.00049 20.5222 10.1543C21.4231 11.308 20.9941 13.0239 20.1362 16.4557C19.5905 18.6384 19.3176 19.7297 18.5039 20.3651C17.6901 21.0005 16.5652 21.0005 14.3153 21.0005H9.68462C7.43476 21.0005 6.30983 21.0005 5.49605 20.3651C4.68227 19.7297 4.40943 18.6384 3.86376 16.4557Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M19.5 9.50049L18.7896 6.89514C18.5157 5.89054 18.3787 5.38824 18.0978 5.00995C17.818 4.63322 17.4378 4.34283 17.0008 4.17201C16.5619 4.00049 16.0413 4.00049 15 4.00049M4.5 9.50049L5.2104 6.89514C5.48432 5.89053 5.62128 5.38823 5.90221 5.00995C6.18199 4.63322 6.56216 4.34283 6.99922 4.17201C7.43808 4.00049 7.95872 4.00049 9 4.00049"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M9 4.00049C9 3.4482 9.44772 3.00049 10 3.00049H14C14.5523 3.00049 15 3.4482 15 4.00049C15 4.55277 14.5523 5.00049 14 5.00049H10C9.44772 5.00049 9 4.55277 9 4.00049Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8 13.0005V17.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16 13.0005V17.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12 13.0005V17.0005"
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
            d="M10 2.00049C9.0335 2.00049 8.25 2.78399 8.25 3.75049C8.25 4.71699 9.0335 5.50049 10 5.50049H14C14.9665 5.50049 15.75 4.71699 15.75 3.75049C15.75 2.78399 14.9665 2.00049 14 2.00049H10Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M3.86327 16.2057C3.00532 12.7739 2.57635 11.058 3.47718 9.90425C4.37801 8.75049 6.14672 8.75049 9.68413 8.75049H14.3148C17.8522 8.75049 19.6209 8.75049 20.5218 9.90425C21.4226 11.058 20.9936 12.7739 20.1357 16.2057C19.59 18.3884 19.3172 19.4797 18.5034 20.1151C17.6896 20.7505 16.5647 20.7505 14.3148 20.7505H9.68413C7.43427 20.7505 6.30935 20.7505 5.49556 20.1151C4.68178 19.4797 4.40894 18.3884 3.86327 16.2057Z"
            fill="currentColor"
          />
          <path
            d="M15.5805 4.50276C15.6892 4.27486 15.75 4.01976 15.75 3.75046C15.75 3.48241 15.6897 3.22843 15.582 3.00134C16.2655 3.00631 16.7983 3.03769 17.2738 3.22355C17.842 3.44562 18.3362 3.82312 18.6999 4.31288C19.0669 4.80696 19.2391 5.44025 19.4762 6.3119L19.5226 6.48226L20.0353 9.44525C19.6266 9.16332 19.0996 8.99579 18.418 8.89624L18.0567 6.80822C17.7729 5.76851 17.6699 5.44178 17.4957 5.2072C17.2999 4.94348 17.0337 4.74021 16.7278 4.62064C16.508 4.53473 16.2424 4.50945 15.5805 4.50276Z"
            fill="currentColor"
          />
          <path
            d="M8.41799 3.00134C8.31027 3.22843 8.25 3.48241 8.25 3.75046C8.25 4.01976 8.31083 4.27486 8.41951 4.50276C7.75766 4.50945 7.49208 4.53473 7.27227 4.62064C6.96633 4.74021 6.70021 4.94348 6.50436 5.2072C6.33015 5.44178 6.22715 5.76851 5.94337 6.80822L5.58207 8.89615C4.90053 8.99564 4.37353 9.16305 3.96484 9.44479L4.47748 6.48226L4.52387 6.31191C4.76095 5.44025 4.9332 4.80696 5.30013 4.31288C5.66384 3.82312 6.15806 3.44562 6.72624 3.22355C7.20177 3.0377 7.73449 3.00631 8.41799 3.00134Z"
            fill="currentColor"
          />
          <path
            d="M8.75 12.7505C8.75 12.3363 8.41421 12.0005 8 12.0005C7.58579 12.0005 7.25 12.3363 7.25 12.7505V16.7505C7.25 17.1647 7.58579 17.5005 8 17.5005C8.41421 17.5005 8.75 17.1647 8.75 16.7505V12.7505Z"
            fill="currentColor"
          />
          <path
            d="M16 12.0005C16.4142 12.0005 16.75 12.3363 16.75 12.7505V16.7505C16.75 17.1647 16.4142 17.5005 16 17.5005C15.5858 17.5005 15.25 17.1647 15.25 16.7505V12.7505C15.25 12.3363 15.5858 12.0005 16 12.0005Z"
            fill="currentColor"
          />
          <path
            d="M12.75 12.7505C12.75 12.3363 12.4142 12.0005 12 12.0005C11.5858 12.0005 11.25 12.3363 11.25 12.7505V16.7505C11.25 17.1647 11.5858 17.5005 12 17.5005C12.4142 17.5005 12.75 17.1647 12.75 16.7505V12.7505Z"
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
            d="M9.99976 2.25049C9.30136 2.25049 8.69851 2.65961 8.4178 3.25126C7.73426 3.25623 7.20152 3.28761 6.72597 3.47347C6.15778 3.69553 5.66357 4.07304 5.29985 4.56279C4.93292 5.05687 4.76067 5.69017 4.5236 6.56182L4.47721 6.73218L3.96448 9.69522C3.77895 9.8232 3.61781 9.97477 3.47767 10.1543C2.57684 11.308 3.00581 13.0239 3.86376 16.4557C4.40943 18.6384 4.68227 19.7297 5.49605 20.3651C6.30983 21.0005 7.43476 21.0005 9.68462 21.0005H14.3153C16.5652 21.0005 17.6901 21.0005 18.5039 20.3651C19.3176 19.7297 19.5905 18.6384 20.1362 16.4557C20.9941 13.0239 21.4231 11.308 20.5222 10.1543C20.382 9.97462 20.2207 9.82296 20.035 9.69491L19.5223 6.73218L19.4759 6.56181C19.2388 5.69017 19.0666 5.05687 18.6997 4.56279C18.336 4.07304 17.8417 3.69553 17.2736 3.47347C16.798 3.28761 16.2653 3.25623 15.5817 3.25126C15.301 2.65961 14.6982 2.25049 13.9998 2.25049H9.99976ZM18.4177 9.1462L18.0564 7.05814C17.7726 6.01843 17.6696 5.69169 17.4954 5.45711C17.2996 5.1934 17.0335 4.99013 16.7275 4.87055C16.5077 4.78465 16.2421 4.75937 15.5803 4.75268C15.299 5.34273 14.697 5.75049 13.9998 5.75049H9.99976C9.30252 5.75049 8.70052 5.34273 8.41921 4.75268C7.75738 4.75937 7.4918 4.78465 7.272 4.87055C6.96605 4.99013 6.69994 5.1934 6.50409 5.45711C6.32988 5.69169 6.22688 6.01843 5.9431 7.05814L5.58176 9.14626C6.57992 9.00049 7.9096 9.00049 9.68462 9.00049H14.3153C16.0901 9.00049 17.4196 9.00049 18.4177 9.1462ZM8 12.2505C8.41421 12.2505 8.75 12.5863 8.75 13.0005V17.0005C8.75 17.4147 8.41421 17.7505 8 17.7505C7.58579 17.7505 7.25 17.4147 7.25 17.0005V13.0005C7.25 12.5863 7.58579 12.2505 8 12.2505ZM16.75 13.0005C16.75 12.5863 16.4142 12.2505 16 12.2505C15.5858 12.2505 15.25 12.5863 15.25 13.0005V17.0005C15.25 17.4147 15.5858 17.7505 16 17.7505C16.4142 17.7505 16.75 17.4147 16.75 17.0005V13.0005ZM12 12.2505C12.4142 12.2505 12.75 12.5863 12.75 13.0005V17.0005C12.75 17.4147 12.4142 17.7505 12 17.7505C11.5858 17.7505 11.25 17.4147 11.25 17.0005V13.0005C11.25 12.5863 11.5858 12.2505 12 12.2505Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCart3 as IconComponent).keywords = [
  "cart",
  "3",
  "handcart",
  "pushcart",
  "go-cart",
  "haul",
  "drag",
  "dray",
  "wheelbarrow",
  "wagon",
  "bandwagon",
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

export default IconCart3 as IconComponent;