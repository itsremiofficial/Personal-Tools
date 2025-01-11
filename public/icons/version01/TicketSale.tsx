import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconTicketSale: FC<IconProps> = ({
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
            d="M14.005 4.00049H9.99502C6.21439 4.00049 4.32407 4.00049 3.14958 5.17206C2.34091 5.97872 2.08903 7.12388 2.01058 8.98996C1.99502 9.36003 1.98724 9.54506 2.05634 9.66851C2.12545 9.79196 2.40133 9.94602 2.95308 10.2541C3.56586 10.5963 3.98007 11.2502 3.98007 12.0005C3.98007 12.7508 3.56586 13.4046 2.95308 13.7468C2.40133 14.0549 2.12545 14.209 2.05634 14.3325C1.98724 14.4559 1.99502 14.6409 2.01058 15.011C2.08903 16.8771 2.34091 18.0223 3.14958 18.8289C4.32407 20.0005 6.21439 20.0005 9.99502 20.0005H14.005C17.7856 20.0005 19.6759 20.0005 20.8504 18.8289C21.6591 18.0223 21.911 16.8771 21.9894 15.011C22.005 14.6409 22.0128 14.4559 21.9437 14.3325C21.8746 14.209 21.5987 14.055 21.0469 13.7468C20.4341 13.4046 20.0199 12.7508 20.0199 12.0005C20.0199 11.2502 20.4341 10.5963 21.0469 10.2541C21.5987 9.94602 21.8746 9.79196 21.9437 9.66851C22.0128 9.54506 22.005 9.36003 21.9894 8.98996C21.911 7.12388 21.6591 5.97872 20.8504 5.17206C19.6759 4.00049 17.7856 4.00049 14.005 4.00049Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M9 15.0005L15 9.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M15.5 14.5005C15.5 15.0528 15.0523 15.5005 14.5 15.5005C13.9477 15.5005 13.5 15.0528 13.5 14.5005C13.5 13.9482 13.9477 13.5005 14.5 13.5005C15.0523 13.5005 15.5 13.9482 15.5 14.5005Z"
            fill="currentColor"
          />
          <path
            d="M10.5 9.50049C10.5 10.0528 10.0523 10.5005 9.5 10.5005C8.94772 10.5005 8.5 10.0528 8.5 9.50049C8.5 8.9482 8.94772 8.50049 9.5 8.50049C10.0523 8.50049 10.5 8.9482 10.5 9.50049Z"
            fill="currentColor"
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
            d="M14.005 4.00049H9.99502C6.21439 4.00049 4.32407 4.00049 3.14958 5.17206C2.34091 5.97872 2.08903 7.12388 2.01058 8.98996C1.99502 9.36003 1.98724 9.54506 2.05634 9.66851C2.12545 9.79196 2.40133 9.94602 2.95308 10.2541C3.56586 10.5963 3.98007 11.2502 3.98007 12.0005C3.98007 12.7508 3.56586 13.4046 2.95308 13.7468C2.40133 14.0549 2.12545 14.209 2.05634 14.3325C1.98724 14.4559 1.99502 14.6409 2.01058 15.011C2.08903 16.8771 2.34091 18.0223 3.14958 18.8289C4.32407 20.0005 6.21438 20.0005 9.99502 20.0005H14.005C17.7856 20.0005 19.6759 20.0005 20.8504 18.8289C21.6591 18.0223 21.911 16.8771 21.9894 15.011C22.005 14.6409 22.0128 14.4559 21.9437 14.3325C21.8745 14.209 21.5987 14.055 21.0469 13.7468C20.4341 13.4046 20.0199 12.7508 20.0199 12.0005C20.0199 11.2502 20.4341 10.5963 21.0469 10.2541C21.5987 9.94602 21.8745 9.79196 21.9437 9.66851C22.0128 9.54506 22.005 9.36003 21.9894 8.98996C21.911 7.12388 21.6591 5.97872 20.8504 5.17206C19.6759 4.00049 17.7856 4.00049 14.005 4.00049Z"
            fill="currentColor"
          />
          <path
            d="M15.5475 8.47016C15.8411 8.76305 15.8411 9.23793 15.5475 9.53082L9.53254 15.5308C9.23892 15.8237 8.76286 15.8237 8.46924 15.5308C8.17562 15.2379 8.17562 14.7631 8.46924 14.4702L14.4842 8.47016C14.7778 8.17726 15.2539 8.17726 15.5475 8.47016Z"
            fill="currentColor"
          />
          <path
            d="M14.5146 15.5005C15.0683 15.5005 15.5171 15.0528 15.5171 14.5005C15.5171 13.9482 15.0683 13.5005 14.5146 13.5005C13.9609 13.5005 13.5121 13.9482 13.5121 14.5005C13.5121 15.0528 13.9609 15.5005 14.5146 15.5005Z"
            fill="currentColor"
          />
          <path
            d="M9.50214 10.5005C10.0558 10.5005 10.5046 10.0528 10.5046 9.50049C10.5046 8.9482 10.0558 8.50049 9.50214 8.50049C8.94848 8.50049 8.49965 8.9482 8.49965 9.50049C8.49965 10.0528 8.94848 10.5005 9.50214 10.5005Z"
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
            d="M9.99502 4.00049H14.005C17.7856 4.00049 19.6759 4.00049 20.8504 5.17206C21.6591 5.97872 21.911 7.12388 21.9894 8.98996C22.005 9.36003 22.0128 9.54506 21.9437 9.66851C21.8745 9.79196 21.5987 9.94602 21.0469 10.2541C20.4341 10.5963 20.0199 11.2502 20.0199 12.0005C20.0199 12.7508 20.4341 13.4046 21.0469 13.7468C21.5987 14.055 21.8745 14.209 21.9437 14.3325C22.0128 14.4559 22.005 14.6409 21.9894 15.011C21.911 16.8771 21.6591 18.0223 20.8504 18.8289C19.6759 20.0005 17.7856 20.0005 14.005 20.0005H9.99502C6.21438 20.0005 4.32407 20.0005 3.14958 18.8289C2.34091 18.0223 2.08903 16.8771 2.01058 15.011C1.99502 14.6409 1.98724 14.4559 2.05634 14.3325C2.12545 14.209 2.40133 14.0549 2.95308 13.7468C3.56586 13.4046 3.98007 12.7508 3.98007 12.0005C3.98007 11.2502 3.56586 10.5963 2.95308 10.2541C2.40133 9.94602 2.12545 9.79196 2.05634 9.66851C1.98724 9.54506 1.99502 9.36003 2.01058 8.98996C2.08903 7.12388 2.34091 5.97872 3.14958 5.17206C4.32407 4.00049 6.21439 4.00049 9.99502 4.00049ZM15.5478 8.47016C15.8415 8.76305 15.8415 9.23793 15.5478 9.53082L9.53289 15.5308C9.23927 15.8237 8.76321 15.8237 8.46959 15.5308C8.17596 15.2379 8.17596 14.7631 8.46959 14.4702L14.4845 8.47016C14.7782 8.17726 15.2542 8.17726 15.5478 8.47016ZM14.5149 15.5005C15.0686 15.5005 15.5174 15.0528 15.5174 14.5005C15.5174 13.9482 15.0686 13.5005 14.5149 13.5005C13.9613 13.5005 13.5124 13.9482 13.5124 14.5005C13.5124 15.0528 13.9613 15.5005 14.5149 15.5005ZM9.50248 10.5005C10.0561 10.5005 10.505 10.0528 10.505 9.50049C10.505 8.9482 10.0561 8.50049 9.50248 8.50049C8.94882 8.50049 8.49999 8.9482 8.49999 9.50049C8.49999 10.0528 8.94882 10.5005 9.50248 10.5005Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTicketSale as IconComponentType).keywords = [
  "ticket",
  "sale",
  "fine",
  "coupon",
  "itinerary",
  "passport",
  "place",
  "engineer",
  "flag",
  "airfare",
  "travel",
  "cut-rate sale",
  "sales agreement",
  "sales event",
  "sell",
  "transaction",
  "buying",
  "resale",
  "buy",
  "purchasing",
];

export default IconTicketSale as IconComponentType;