import { FC } from "react";

const IconCallMedicineRounded: FC<IconProps> = ({
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
            d="M17 12C19.7614 12 22 9.76142 22 7C22 4.23858 19.7614 2 17 2C14.2386 2 12 4.23858 12 7C12 7.79984 12.1878 8.55582 12.5217 9.22624C12.6105 9.4044 12.64 9.60803 12.5886 9.80031L12.2908 10.9133C12.1615 11.3965 12.6035 11.8385 13.0867 11.7092L14.1997 11.4114C14.392 11.36 14.5956 11.3895 14.7738 11.4783C15.4442 11.8122 16.2002 12 17 12Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M15 7H19M17 9L17 5"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8.03759 7.31617L8.6866 8.4791C9.2723 9.52858 9.03718 10.9053 8.11471 11.8278C8.11471 11.8278 8.11471 11.8278 8.11471 11.8278C8.11459 11.8279 6.99588 12.9468 9.02451 14.9755C11.0525 17.0035 12.1714 15.8861 12.1722 15.8853C12.1722 15.8853 12.1722 15.8853 12.1722 15.8853C13.0947 14.9628 14.4714 14.7277 15.5209 15.3134L16.6838 15.9624C18.2686 16.8468 18.4557 19.0692 17.0628 20.4622C16.2258 21.2992 15.2004 21.9505 14.0669 21.9934C12.1588 22.0658 8.91828 21.5829 5.6677 18.3323C2.41713 15.0817 1.93421 11.8412 2.00655 9.93309C2.04952 8.7996 2.7008 7.77423 3.53781 6.93723C4.93076 5.54428 7.15317 5.73144 8.03759 7.31617Z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 7C22 9.76142 19.7614 12 17 12C16.2002 12 15.4442 11.8122 14.7738 11.4783C14.5956 11.3895 14.392 11.36 14.1997 11.4114L13.0867 11.7092C12.6035 11.8385 12.1615 11.3965 12.2908 10.9133L12.5886 9.80031C12.64 9.60803 12.6105 9.4044 12.5217 9.22624C12.1878 8.55582 12 7.79984 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7ZM17 4.8125C17.5178 4.8125 17.9375 5.23223 17.9375 5.75V6.0625H18.25C18.7678 6.0625 19.1875 6.48223 19.1875 7C19.1875 7.51777 18.7678 7.9375 18.25 7.9375H17.9375V8.25C17.9375 8.76777 17.5178 9.1875 17 9.1875C16.4822 9.1875 16.0625 8.76777 16.0625 8.25V7.9375H15.75C15.2322 7.9375 14.8125 7.51777 14.8125 7C14.8125 6.48223 15.2322 6.0625 15.75 6.0625H16.0625V5.75C16.0625 5.23223 16.4822 4.8125 17 4.8125Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8.03759 7.31617L8.6866 8.4791C9.2723 9.52858 9.03718 10.9053 8.11471 11.8278C8.11471 11.8278 8.11471 11.8278 8.11471 11.8278C8.11459 11.8279 6.99588 12.9468 9.02451 14.9755C11.0525 17.0035 12.1714 15.8861 12.1722 15.8853C12.1722 15.8853 12.1722 15.8853 12.1722 15.8853C13.0947 14.9628 14.4714 14.7277 15.5209 15.3134L16.6838 15.9624C18.2686 16.8468 18.4557 19.0692 17.0628 20.4622C16.2258 21.2992 15.2004 21.9505 14.0669 21.9934C12.1588 22.0658 8.91828 21.5829 5.6677 18.3323C2.41713 15.0817 1.93421 11.8412 2.00655 9.93309C2.04952 8.7996 2.7008 7.77423 3.53781 6.93723C4.93076 5.54428 7.15317 5.73144 8.03759 7.31617Z"
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
            d="M22 7C22 9.76142 19.7614 12 17 12C16.2002 12 15.4442 11.8122 14.7738 11.4783C14.5956 11.3895 14.392 11.36 14.1997 11.4114L13.0867 11.7092C12.6035 11.8385 12.1615 11.3965 12.2908 10.9133L12.5886 9.80031C12.64 9.60803 12.6105 9.4044 12.5217 9.22624C12.1878 8.55582 12 7.79984 12 7C12 4.23858 14.2386 2 17 2C19.7614 2 22 4.23858 22 7ZM17 4.8125C17.5178 4.8125 17.9375 5.23223 17.9375 5.75V6.0625H18.25C18.7678 6.0625 19.1875 6.48223 19.1875 7C19.1875 7.51777 18.7678 7.9375 18.25 7.9375H17.9375V8.25C17.9375 8.76777 17.5178 9.1875 17 9.1875C16.4822 9.1875 16.0625 8.76777 16.0625 8.25V7.9375H15.75C15.2322 7.9375 14.8125 7.51777 14.8125 7C14.8125 6.48223 15.2322 6.0625 15.75 6.0625H16.0625V5.75C16.0625 5.23223 16.4822 4.8125 17 4.8125Z"
            fill="currentColor"
          />
          <path
            d="M8.03759 7.31617L8.6866 8.4791C9.2723 9.52858 9.03718 10.9053 8.11471 11.8278C8.11471 11.8278 8.11471 11.8278 8.11471 11.8278C8.11459 11.8279 6.99588 12.9468 9.02451 14.9755C11.0525 17.0035 12.1714 15.8861 12.1722 15.8853C12.1722 15.8853 12.1722 15.8853 12.1722 15.8853C13.0947 14.9628 14.4714 14.7277 15.5209 15.3134L16.6838 15.9624C18.2686 16.8468 18.4557 19.0692 17.0628 20.4622C16.2258 21.2992 15.2004 21.9505 14.0669 21.9934C12.1588 22.0658 8.91828 21.5829 5.6677 18.3323C2.41713 15.0817 1.93421 11.8412 2.00655 9.93309C2.04952 8.7996 2.7008 7.77423 3.53781 6.93723C4.93076 5.54428 7.15317 5.73144 8.03759 7.31617Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCallMedicineRounded as IconComponent).keywords = [
  "call",
  "medicine",
  "rounded",
  "phone call",
  "telephone call",
  "call in",
  "telephone",
  "phone",
  "call up",
  "send for",
  "call option",
  "margin call",
  "medication",
  "medicate",
  "medicament",
  "music",
  "medicinal drug",
  "practice of medicine",
  "prescription",
  "pharmaceutical",
  "drug",
  "ringed",
  "ring-shaped",
  "annulate",
  "annular",
  "circular",
  "rotund",
  "bowfront",
  "prolate",
  "domed",
];

export default IconCallMedicineRounded as IconComponent;