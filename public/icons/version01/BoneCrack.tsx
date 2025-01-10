import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconBoneCrack: FC<IconProps> = ({
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
            d="M14.1374 2.7381C13.3942 3.48132 13.0092 4.77677 13.2895 5.79001C13.438 6.32633 13.4622 6.97571 13.0687 7.3692L7.3689 13.069C6.97541 13.4625 6.32603 13.4383 5.7897 13.2899C4.77646 13.0095 3.48102 13.3945 2.73779 14.1377C1.75407 15.1215 1.75407 16.7164 2.73779 17.7001C3.72152 18.6839 5.31646 18.6838 6.30018 17.7001C5.31646 18.6838 5.31646 20.2788 6.30018 21.2625C7.28391 22.2462 8.87884 22.2462 9.86257 21.2625C10.6058 20.5193 10.9908 19.2238 10.7105 18.2106C10.562 17.6743 10.5378 17.0249 10.9313 16.6314L16.6311 10.9316C17.0246 10.5381 17.674 10.5623 18.2103 10.7108C19.2235 10.9911 20.519 10.6061 21.2622 9.86287C22.2459 8.87915 22.2459 7.28421 21.2622 6.30049C20.2785 5.31676 18.6835 5.31676 17.6998 6.30049C18.6835 5.31676 18.6835 3.72183 17.6998 2.7381C16.7161 1.75437 15.1212 1.75437 14.1374 2.7381Z"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10.2322 10.2325V12.3538L12.3535 11.6467V13.0609L14.9996 12.5002"
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
            d="M2.73779 17.7C3.72152 18.6837 5.31646 18.6837 6.30018 17.7C5.31646 18.6837 5.31645 20.2787 6.30018 21.2624C7.28391 22.2461 8.87884 22.2461 9.86257 21.2624C10.6058 20.5192 10.9908 19.2237 10.7105 18.2105C10.562 17.6742 10.5378 17.0248 10.9313 16.6313L15.3831 12.1795L12.3535 13.0608V11.6466L10.2322 12.3537L10.2188 10.219L7.3689 13.0689C6.97541 13.4624 6.32603 13.4381 5.7897 13.2897C4.77646 13.0094 3.48101 13.3944 2.73779 14.1376C1.75407 15.1213 1.75407 16.7163 2.73779 17.7Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14.1374 2.73804C13.3942 3.48126 13.0091 4.77671 13.2895 5.78995C13.4379 6.32627 13.4622 6.97565 13.0687 7.36914L10.2188 10.2191L10.2321 12.3537L12.3534 11.6466V13.0608L15.3831 12.1795L16.631 10.9315C17.0245 10.538 17.6739 10.5623 18.2102 10.7107C19.2235 10.9911 20.5189 10.606 21.2621 9.86281C22.2459 8.87909 22.2459 7.28415 21.2621 6.30043C20.2784 5.3167 18.6835 5.3167 17.6998 6.30043C18.6835 5.3167 18.6835 3.72176 17.6998 2.73804C16.716 1.75431 15.1211 1.75431 14.1374 2.73804Z"
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
            d="M13.2895 5.78995C13.0092 4.77671 13.3942 3.48126 14.1374 2.73804C15.1212 1.75431 16.7161 1.75431 17.6998 2.73804C18.6835 3.72176 18.6835 5.3167 17.6998 6.30043C18.6835 5.3167 20.2785 5.3167 21.2622 6.30043C22.2459 7.28415 22.2459 8.87909 21.2622 9.86281C20.519 10.606 19.2235 10.9911 18.2103 10.7107C17.674 10.5623 17.0246 10.538 16.6311 10.9315L15.7886 11.774L13.1037 12.1868V11.6467C13.1037 11.4056 12.9879 11.1793 12.7923 11.0383C12.5967 10.8973 12.3453 10.859 12.1166 10.9352L10.9824 11.3133V9.45544L13.0687 7.36914C13.4622 6.97565 13.438 6.32627 13.2895 5.78995Z"
            fill="currentColor"
          />
          <path
            d="M9.48242 10.9554L7.3689 13.069C6.97541 13.4625 6.32603 13.4382 5.7897 13.2898C4.77646 13.0094 3.48101 13.3945 2.73779 14.1377C1.75407 15.1214 1.75407 16.7163 2.73779 17.7001C3.72152 18.6838 5.31646 18.6838 6.30018 17.7001C5.31646 18.6838 5.31645 20.2787 6.30018 21.2624C7.28391 22.2462 8.87884 22.2462 9.86257 21.2624C10.6058 20.5192 10.9908 19.2238 10.7105 18.2105C10.562 17.6742 10.5378 17.0248 10.9313 16.6313L13.9953 13.5674L12.4677 13.8022C12.2514 13.8355 12.0314 13.7726 11.8654 13.6301C11.6993 13.4877 11.6037 13.2798 11.6037 13.0609V12.6873L10.4696 13.0653C10.2409 13.1416 9.98947 13.1032 9.79389 12.9623C9.59831 12.8213 9.48242 12.5949 9.48242 12.3538V10.9554Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBoneCrack as IconComponentType).keywords = [
  "bone",
  "crack",
  "osseous tissue",
  "bony",
  "pearl",
  "ivory",
  "debone",
  "boney",
  "off-white",
  "cram",
  "get up",
  "snap",
  "fracture",
  "chip",
  "gap",
  "break",
  "whirl",
  "collapse",
  "fling",
  "scissure",
];

export default IconBoneCrack as IconComponentType;
