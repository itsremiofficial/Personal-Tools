import { FC } from "react";

const IconRadar: FC<IconProps> = ({
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
            d="M12 12.0002L5.00193 6.33613C4.57281 5.98881 3.93865 6.05249 3.63594 6.51417C3.06673 7.3823 2.62409 8.35456 2.34074 9.41203C0.911318 14.7467 4.07714 20.2301 9.4118 21.6595C14.7465 23.0889 20.2298 19.9231 21.6593 14.5884C23.0887 9.25375 19.9228 3.77038 14.5882 2.34097C11.9556 1.63557 9.2868 2.04924 7.08685 3.2904"
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
            d="M12 22.0002C17.5228 22.0002 22 17.5231 22 12.0002C22 6.4774 17.5228 2.00024 12 2.00024C6.47715 2.00024 2 6.4774 2 12.0002C2 17.5231 6.47715 22.0002 12 22.0002Z"
            fill="currentColor"
          />
          <path
            d="M11.1254 6.82363C11.8458 6.7014 12.6039 6.72842 13.3584 6.93057C16.1583 7.6808 17.8198 10.5588 17.0696 13.3587C16.3194 16.1586 13.4414 17.8201 10.6415 17.0699C7.84162 16.3197 6.18004 13.4417 6.93027 10.6418C7.05854 10.1631 7.24854 9.71865 7.48909 9.31413L11.5281 12.5832C11.8501 12.8438 12.3223 12.7941 12.5829 12.4721C12.8435 12.1501 12.7938 11.6779 12.4718 11.4173L8.27399 8.01965C7.71245 7.56516 6.80843 7.60748 6.35555 8.29819C5.9709 8.88484 5.67226 9.54123 5.48138 10.2536C4.51674 13.8537 6.6532 17.5542 10.2533 18.5188C13.8534 19.4834 17.5539 17.347 18.5185 13.7469C19.4831 10.1468 17.3467 6.44633 13.7466 5.48168C12.7796 5.22257 11.8033 5.18717 10.8745 5.34476C10.4661 5.41405 10.1912 5.80128 10.2605 6.20965C10.3298 6.61803 10.717 6.89292 11.1254 6.82363Z"
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
            d="M22 12.0002C22 17.5231 17.5228 22.0002 12 22.0002C6.47715 22.0002 2 17.5231 2 12.0002C2 6.4774 6.47715 2.00024 12 2.00024C17.5228 2.00024 22 6.4774 22 12.0002ZM13.3584 6.93057C12.604 6.72842 11.8458 6.7014 11.1255 6.82363C10.7171 6.89292 10.3299 6.61803 10.2606 6.20965C10.1913 5.80128 10.4662 5.41405 10.8745 5.34476C11.8033 5.18718 12.7796 5.22257 13.7466 5.48168C17.3467 6.44633 19.4832 10.1468 18.5186 13.7469C17.5539 17.347 13.8535 19.4835 10.2534 18.5188C6.65325 17.5542 4.51679 13.8537 5.48144 10.2536C5.67232 9.54123 5.97096 8.88485 6.35561 8.29819C6.80849 7.60748 7.71251 7.56516 8.27405 8.01966L12.4718 11.4173C12.7938 11.6779 12.8436 12.1501 12.583 12.4721C12.3224 12.7941 11.8501 12.8438 11.5282 12.5832L7.48915 9.31413C7.2486 9.71865 7.0586 10.1631 6.93033 10.6418C6.1801 13.4417 7.84168 16.3197 10.6416 17.0699C13.4415 17.8201 16.3194 16.1586 17.0697 13.3587C17.8199 10.5588 16.1583 7.6808 13.3584 6.93057Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconRadar as IconComponent).keywords = [
  "radar",
  "radiolocation",
  "microwave radar",
  "radio detection and ranging",
  "monopulse",
  "radio",
  "centimetric",
  "sonar",
  "hub-and-spoke",
  "radial",
];

export default IconRadar as IconComponent;
