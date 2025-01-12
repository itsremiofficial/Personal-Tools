import { FC } from "react";

const IconBodyShapeMinimalistic: FC<IconProps> = ({
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
            d="M20 2.00049C20 2.00049 18 6.68888 18 10.5719C18 11.8152 18.426 12.8555 19 13.8916C19.6606 15.0841 20.5171 16.2709 21.1457 17.7548C21.6446 18.9325 22 20.2973 22 22.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 2.00049C4 2.00049 6 6.68888 6 10.5719C6 11.8152 5.57398 12.8555 5.00001 13.8916C4.33945 15.0841 3.48291 16.2709 2.85426 17.7548C2.35537 18.9325 2 20.2973 2 22.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M6 13.0005H18"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M12 22.0005C12.5 20.5005 15 17.5005 21 17.5005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M12 22.0005C11.5 20.5005 9 17.5005 3 17.5005"
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
            d="M3.70572 1.31058C4.08671 1.14806 4.52733 1.32516 4.68985 1.70616L4.69056 1.70782L4.692 1.7112L4.69699 1.72302L4.71515 1.76649C4.73077 1.80411 4.75326 1.85883 4.78163 1.92928C4.83837 2.07016 4.91871 2.27413 5.01478 2.53042C5.20677 3.04261 5.46236 3.76583 5.71804 4.6134C6.22541 6.29533 6.75 8.52093 6.75 10.5719C6.75 11.1725 6.66261 11.7278 6.51666 12.2504H17.4833C17.3374 11.7278 17.25 11.1725 17.25 10.5719C17.25 8.52093 17.7746 6.29533 18.282 4.6134C18.5376 3.76583 18.7932 3.04261 18.9852 2.53042C19.0813 2.27413 19.1616 2.07016 19.2184 1.92928C19.2467 1.85883 19.2692 1.80411 19.2849 1.76649L19.303 1.72302L19.308 1.7112L19.3094 1.70782L19.3099 1.70677C19.4724 1.32578 19.9133 1.14806 20.2943 1.31058C20.6752 1.47309 20.8523 1.91361 20.6899 2.29457L20.6891 2.2965L20.6855 2.30499L20.6702 2.34159C20.6565 2.37454 20.6361 2.42434 20.6098 2.48967C20.5571 2.62036 20.4812 2.813 20.3898 3.05692C20.2068 3.54515 19.9624 4.23672 19.718 5.04662C19.2254 6.67965 18.75 8.73976 18.75 10.5719C18.75 11.6307 19.1082 12.5393 19.656 13.5282C19.8445 13.8683 20.0655 14.2319 20.3001 14.6178L20.3001 14.6179C20.8141 15.4633 21.393 16.4157 21.8363 17.4622C22.3695 18.7208 22.75 20.1848 22.75 22.0004C22.75 22.4146 22.4142 22.7504 22 22.7504C21.5858 22.7504 21.25 22.4146 21.25 22.0004C21.25 20.5098 20.96 19.3048 20.5413 18.2566C15.1471 18.4035 13.0815 21.1275 12.7115 22.2376C12.6094 22.5439 12.3228 22.7504 12 22.7504C11.6772 22.7504 11.3906 22.5439 11.2885 22.2376C10.9185 21.1275 8.85291 18.4035 3.45871 18.2566C3.03996 19.3048 2.75 20.5098 2.75 22.0004C2.75 22.4146 2.41421 22.7504 2 22.7504C1.58579 22.7504 1.25 22.4146 1.25 22.0004C1.25 20.1848 1.63049 18.7208 2.16368 17.4622C2.60702 16.4157 3.18593 15.4633 3.69986 14.6179C3.93446 14.232 4.15551 13.8683 4.34395 13.5282C4.89176 12.5393 5.25 11.6307 5.25 10.5719C5.25 8.73976 4.77458 6.67965 4.28196 5.04662C4.03764 4.23672 3.79323 3.54515 3.61022 3.05692C3.51878 2.813 3.44288 2.62036 3.39024 2.48967C3.36393 2.42434 3.34345 2.37454 3.32977 2.34159L3.31449 2.30499L3.3109 2.2965L3.31017 2.29476C3.14775 1.9138 3.32477 1.47309 3.70572 1.31058Z"
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
            d="M3.70572 1.31058C4.08671 1.14806 4.52733 1.32516 4.68985 1.70616L4.69056 1.70782L4.692 1.7112L4.69699 1.72302L4.71515 1.76649C4.73077 1.80411 4.75326 1.85883 4.78163 1.92928C4.83837 2.07016 4.91871 2.27413 5.01478 2.53042C5.20677 3.04261 5.46236 3.76583 5.71804 4.6134C6.22541 6.29533 6.75 8.52093 6.75 10.5719C6.75 11.1725 6.66261 11.7278 6.51666 12.2504H17.4833C17.3374 11.7278 17.25 11.1725 17.25 10.5719C17.25 8.52093 17.7746 6.29533 18.282 4.6134C18.5376 3.76583 18.7932 3.04261 18.9852 2.53042C19.0813 2.27413 19.1616 2.07016 19.2184 1.92928C19.2467 1.85883 19.2692 1.80411 19.2849 1.76649L19.303 1.72302L19.308 1.7112L19.3094 1.70782L19.3099 1.70677C19.4724 1.32578 19.9133 1.14806 20.2943 1.31058C20.6752 1.47309 20.8523 1.91361 20.6899 2.29457L20.6891 2.2965L20.6855 2.30499L20.6702 2.34159C20.6565 2.37454 20.6361 2.42434 20.6098 2.48967C20.5571 2.62036 20.4812 2.813 20.3898 3.05692C20.2068 3.54515 19.9624 4.23672 19.718 5.04662C19.2254 6.67965 18.75 8.73976 18.75 10.5719C18.75 11.6307 19.1082 12.5393 19.656 13.5282C19.8445 13.8683 20.0655 14.2319 20.3001 14.6178L20.3001 14.6179C20.8141 15.4633 21.393 16.4157 21.8363 17.4622C22.3695 18.7208 22.75 20.1848 22.75 22.0004C22.75 22.4146 22.4142 22.7504 22 22.7504C21.5858 22.7504 21.25 22.4146 21.25 22.0004C21.25 20.5098 20.96 19.3048 20.5413 18.2566C15.1471 18.4035 13.0815 21.1275 12.7115 22.2376C12.6094 22.5439 12.3228 22.7504 12 22.7504C11.6772 22.7504 11.3906 22.5439 11.2885 22.2376C10.9185 21.1275 8.85291 18.4035 3.45871 18.2566C3.03996 19.3048 2.75 20.5098 2.75 22.0004C2.75 22.4146 2.41421 22.7504 2 22.7504C1.58579 22.7504 1.25 22.4146 1.25 22.0004C1.25 20.1848 1.63049 18.7208 2.16368 17.4622C2.60702 16.4157 3.18593 15.4633 3.69986 14.6179C3.93446 14.232 4.15551 13.8683 4.34395 13.5282C4.89176 12.5393 5.25 11.6307 5.25 10.5719C5.25 8.73976 4.77458 6.67965 4.28196 5.04662C4.03764 4.23672 3.79323 3.54515 3.61022 3.05692C3.51878 2.813 3.44288 2.62036 3.39024 2.48967C3.36393 2.42434 3.34345 2.37454 3.32977 2.34159L3.31449 2.30499L3.3109 2.2965L3.31017 2.29476C3.14775 1.9138 3.32477 1.47309 3.70572 1.31058Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBodyShapeMinimalistic as IconComponent).keywords = [
  "body",
  "shape",
  "minimalistic",
  "consistence",
  "personify",
  "consistency",
  "torso",
  "trunk",
  "dead body",
  "organic structure",
  "physical structure",
  "bodily",
  "form",
  "determine",
  "pattern",
  "embodiment",
  "influence",
  "frame",
  "configuration",
  "build",
  "regulate",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic",
];

export default IconBodyShapeMinimalistic as IconComponent;
