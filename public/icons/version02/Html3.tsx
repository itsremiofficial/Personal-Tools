import { FC } from "react";

const IconHtml3: FC<IconProps> = ({
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
            d="M4.79002 2H20.56C21.16 2 21.62 2.51999 21.55 3.10999L19.75 19.33C19.71 19.73 19.42 20.07 19.03 20.18L12.95 21.92C12.77 21.97 12.58 21.97 12.4 21.92L6.32002 20.18C5.93002 20.07 5.65002 19.73 5.60002 19.33L3.80002 3.10999C3.73002 2.51999 4.19002 2 4.79002 2Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M8.16992 6.97998L17.1699 6.99997L16.1699 16L12.6699 17L9.16992 16L8.66992 14"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.66992 11H16.7299"
              stroke="currentColor"
              strokeWidth={width}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            opacity={duotone ? "0.58" : "1"}
            d="M24.6699 0H0.669922V24H24.6699V0Z"
            fill="none"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.79002 2H20.56C21.16 2 21.62 2.52 21.55 3.11L19.75 19.33C19.71 19.73 19.42 20.07 19.03 20.18L12.95 21.92C12.77 21.97 12.58 21.97 12.4 21.92L6.32002 20.18C5.93002 20.07 5.65002 19.73 5.60002 19.33L3.80002 3.11C3.73002 2.52 4.19002 2 4.79002 2Z"
            fill="currentColor"
          />
          <path
            d="M17.7299 6.49998C17.5899 6.33998 17.3899 6.24998 17.1699 6.24998L8.16992 6.22998C7.75992 6.22998 7.41992 6.55998 7.41992 6.97998C7.41992 7.38998 7.74992 7.72998 8.16992 7.72998L16.3299 7.74998L16.0499 10.25H8.66992C8.25992 10.25 7.91992 10.59 7.91992 11C7.91992 11.41 8.25992 11.75 8.66992 11.75H15.8899L15.4799 15.42L12.6699 16.22L9.78992 15.4L9.38992 13.82C9.28992 13.42 8.87992 13.17 8.47992 13.27C8.07992 13.37 7.82992 13.78 7.92992 14.18L8.42992 16.18C8.48992 16.44 8.68992 16.65 8.94992 16.72L12.4499 17.72C12.5199 17.74 12.5899 17.75 12.6599 17.75C12.7299 17.75 12.7999 17.74 12.8699 17.72L16.3699 16.72C16.6599 16.64 16.8799 16.39 16.9099 16.08L17.9099 7.07998C17.9399 6.86998 17.8699 6.65998 17.7299 6.49998Z"
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
            d="M20.55 2H4.79002C4.19002 2 3.73002 2.51999 3.80002 3.10999L5.60002 19.33C5.64002 19.73 5.93002 20.07 6.32002 20.18L12.4 21.92C12.58 21.97 12.77 21.97 12.95 21.92L19.03 20.18C19.42 20.07 19.7 19.73 19.75 19.33L21.55 3.10999C21.61 2.51999 21.15 2 20.55 2ZM16.92 16.08C16.89 16.38 16.67 16.63 16.38 16.72L12.88 17.72C12.81 17.74 12.74 17.75 12.67 17.75C12.6 17.75 12.53 17.74 12.46 17.72L8.96002 16.72C8.70002 16.65 8.50002 16.44 8.44002 16.18L7.94002 14.18C7.84002 13.78 8.08002 13.37 8.49002 13.27C8.89002 13.17 9.30002 13.41 9.40002 13.82L9.80002 15.4L12.68 16.22L15.49 15.42L15.9 11.75H8.67002C8.26002 11.75 7.92002 11.41 7.92002 11C7.92002 10.59 8.26002 10.25 8.67002 10.25H16.05L16.33 7.75L8.17002 7.73001C7.76002 7.73001 7.42002 7.39001 7.42002 6.98001C7.42002 6.57001 7.76002 6.23001 8.17002 6.23001L17.17 6.25C17.38 6.25 17.59 6.34 17.73 6.5C17.87 6.66 17.94 6.86999 17.92 7.07999L16.92 16.08Z"
            fill="none"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHtml3 as IconComponent).keywords = [
  "html",
  "3",
  "hypertext markup language",
  "xhtml",
  "javascript",
  "javascripts",
  "imagemaps",
  "wysiwyg",
  "dreamweaver",
  "jscript",
  "textarea",
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

export default IconHtml3 as IconComponent;
