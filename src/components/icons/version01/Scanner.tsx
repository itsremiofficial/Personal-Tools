import { FC } from "react";

const IconScanner: FC<IconProps> = ({
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
            d="M10 22.0005C6.22876 22.0005 4.34315 22.0005 3.17157 20.8289C2 19.6573 2 18.7717 2 15.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M22 15.0005C22 18.7717 22 19.6573 20.8284 20.8289C19.6569 22.0005 17.7712 22.0005 14 22.0005"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M14 2.00049C17.7712 2.00049 19.6569 2.00049 20.8284 3.17206C22 4.34363 22 5.22925 22 9.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M10 2.00049C6.22876 2.00049 4.34315 2.00049 3.17157 3.17206C2 4.34363 2 5.22925 2 9.00049"
            stroke="currentColor"
            strokeWidth={width}
            strokeLinecap="round"
          />
          <path
            d="M2 12.0005H22"
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
            d="M3.46447 3.46495C2 4.92942 2 7.28644 2 12.0005C2 16.7145 2 19.0716 3.46447 20.536C4.92893 22.0005 7.28595 22.0005 12 22.0005C16.714 22.0005 19.0711 22.0005 20.5355 20.536C22 19.0716 22 16.7145 22 12.0005C22 7.28644 22 4.92942 20.5355 3.46495C19.0711 2.00049 16.714 2.00049 12 2.00049C7.28595 2.00049 4.92893 2.00049 3.46447 3.46495Z"
            fill="currentColor"
          />
          <path
            d="M10.004 5.75219C10.4182 5.74999 10.7522 5.41243 10.75 4.99822C10.7478 4.58401 10.4102 4.25001 9.99602 4.25221C8.91427 4.25794 8.01583 4.28264 7.28261 4.41091C6.53075 4.54244 5.88786 4.79292 5.36144 5.29428C4.90634 5.7277 4.60191 6.16665 4.43626 6.79725C4.28612 7.36882 4.25937 8.07203 4.25231 8.99475C4.24914 9.40895 4.58234 9.7473 4.99654 9.75047C5.41074 9.75364 5.74909 9.42043 5.75226 9.00623C5.75952 8.05746 5.79204 7.54 5.88704 7.17835C5.96654 6.8757 6.09314 6.66884 6.39592 6.38048C6.63788 6.15004 6.96814 5.9887 7.54109 5.88847C8.13268 5.78498 8.91071 5.75798 10.004 5.75219Z"
            fill="currentColor"
          />
          <path
            d="M14.0041 4.25221C13.5899 4.25001 13.2523 4.58401 13.2501 4.99822C13.2479 5.41243 13.5819 5.74999 13.9961 5.75219C15.0894 5.75798 15.8674 5.78498 16.4589 5.88847C17.0319 5.9887 17.3621 6.15005 17.6041 6.38048C17.9069 6.66884 18.0335 6.8757 18.113 7.17835C18.208 7.54 18.2405 8.05746 18.2477 9.00623C18.2509 9.42043 18.5893 9.75364 19.0035 9.75047C19.4177 9.7473 19.7509 9.40895 19.7477 8.99475C19.7406 8.07203 19.7139 7.36882 19.5637 6.79724C19.3981 6.16665 19.0937 5.7277 18.6386 5.29428C18.1121 4.79293 17.4693 4.54245 16.7174 4.41091C15.9842 4.28264 15.0858 4.25794 14.0041 4.25221Z"
            fill="currentColor"
          />
          <path
            d="M5 11.2505C4.58579 11.2505 4.25 11.5863 4.25 12.0005C4.25 12.4148 4.58579 12.7505 5 12.7505H19C19.4142 12.7505 19.75 12.4148 19.75 12.0005C19.75 11.5863 19.4142 11.2505 19 11.2505H5Z"
            fill="currentColor"
          />
          <path
            d="M5.75226 14.9949C5.74909 14.5807 5.41074 14.2474 4.99654 14.2506C4.58234 14.2538 4.24914 14.5921 4.25231 15.0063C4.25937 15.9291 4.28612 16.6323 4.43626 17.2038C4.60191 17.8344 4.90634 18.2734 5.36144 18.7068C5.88785 19.2082 6.53073 19.4586 7.28258 19.5902C8.01578 19.7184 8.91421 19.7431 9.99593 19.7489C10.4101 19.7511 10.7477 19.4171 10.7499 19.0029C10.7521 18.5887 10.4181 18.2511 10.0039 18.2489C8.91065 18.2431 8.13264 18.2161 7.54107 18.1126C6.96814 18.0124 6.63788 17.851 6.39592 17.6206C6.09314 17.3322 5.96654 17.1254 5.88704 16.8227C5.79204 16.4611 5.75952 15.9436 5.75226 14.9949Z"
            fill="currentColor"
          />
          <path
            d="M19.7477 15.0063C19.7509 14.5921 19.4177 14.2538 19.0035 14.2506C18.5893 14.2474 18.2509 14.5807 18.2477 14.9949C18.2405 15.9436 18.208 16.4611 18.113 16.8227C18.0335 17.1254 17.9069 17.3322 17.6041 17.6206C17.3621 17.851 17.0319 18.0124 16.4589 18.1126C15.8674 18.2161 15.0894 18.2431 13.9961 18.2489C13.5819 18.2511 13.2479 18.5887 13.2501 19.0029C13.2523 19.4171 13.5899 19.7511 14.0041 19.7489C15.0858 19.7431 15.9842 19.7184 16.7174 19.5902C17.4693 19.4586 18.1121 19.2082 18.6386 18.7068C19.0937 18.2734 19.3981 17.8344 19.5637 17.2038C19.7139 16.6323 19.7406 15.9291 19.7477 15.0063Z"
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
            d="M2 12.0005C2 7.28644 2 4.92942 3.46447 3.46495C4.92893 2.00049 7.28595 2.00049 12 2.00049C16.714 2.00049 19.0711 2.00049 20.5355 3.46495C22 4.92942 22 7.28644 22 12.0005C22 16.7145 22 19.0716 20.5355 20.536C19.0711 22.0005 16.714 22.0005 12 22.0005C7.28595 22.0005 4.92893 22.0005 3.46447 20.536C2 19.0716 2 16.7145 2 12.0005ZM10.004 5.75219C10.4182 5.74999 10.7522 5.41243 10.75 4.99822C10.7478 4.58401 10.4102 4.25001 9.99602 4.25221C8.91427 4.25794 8.01583 4.28264 7.28261 4.41091C6.53075 4.54244 5.88786 4.79292 5.36144 5.29428C4.90634 5.7277 4.60191 6.16665 4.43626 6.79725C4.28612 7.36882 4.25937 8.07203 4.25231 8.99475C4.24914 9.40895 4.58234 9.7473 4.99654 9.75047C5.41074 9.75364 5.74909 9.42043 5.75226 9.00623C5.75952 8.05746 5.79204 7.54 5.88704 7.17835C5.96654 6.8757 6.09314 6.66884 6.39592 6.38048C6.63788 6.15004 6.96814 5.9887 7.54109 5.88847C8.13268 5.78498 8.91071 5.75798 10.004 5.75219ZM14.0041 4.25221C13.5899 4.25001 13.2523 4.58401 13.2501 4.99822C13.2479 5.41243 13.5819 5.74999 13.9961 5.75219C15.0894 5.75798 15.8674 5.78498 16.4589 5.88847C17.0319 5.9887 17.3621 6.15004 17.6041 6.38048C17.9069 6.66884 18.0335 6.8757 18.113 7.17835C18.208 7.54 18.2405 8.05746 18.2477 9.00623C18.2509 9.42043 18.5893 9.75364 19.0035 9.75047C19.4177 9.7473 19.7509 9.40895 19.7477 8.99475C19.7406 8.07203 19.7139 7.36882 19.5637 6.79724C19.3981 6.16665 19.0937 5.7277 18.6386 5.29428C18.1121 4.79293 17.4693 4.54245 16.7174 4.41091C15.9842 4.28264 15.0858 4.25794 14.0041 4.25221ZM5 11.2505C4.58579 11.2505 4.25 11.5863 4.25 12.0005C4.25 12.4148 4.58579 12.7505 5 12.7505H19C19.4142 12.7505 19.75 12.4148 19.75 12.0005C19.75 11.5863 19.4142 11.2505 19 11.2505H5ZM5.75226 14.9949C5.74909 14.5807 5.41074 14.2474 4.99654 14.2506C4.58234 14.2538 4.24914 14.5921 4.25231 15.0063C4.25937 15.9291 4.28612 16.6323 4.43626 17.2038C4.60191 17.8344 4.90634 18.2734 5.36144 18.7068C5.88785 19.2082 6.53073 19.4586 7.28258 19.5902C8.01578 19.7184 8.91421 19.7431 9.99593 19.7489C10.4101 19.7511 10.7477 19.4171 10.7499 19.0029C10.7521 18.5887 10.4181 18.2511 10.0039 18.2489C8.91065 18.2431 8.13264 18.2161 7.54107 18.1126C6.96814 18.0124 6.63788 17.851 6.39592 17.6206C6.09314 17.3322 5.96654 17.1254 5.88704 16.8227C5.79204 16.4611 5.75952 15.9436 5.75226 14.9949ZM19.7477 15.0063C19.7509 14.5921 19.4177 14.2538 19.0035 14.2506C18.5893 14.2474 18.2509 14.5807 18.2477 14.9949C18.2405 15.9436 18.208 16.4611 18.113 16.8227C18.0335 17.1254 17.9069 17.3322 17.6041 17.6206C17.3621 17.851 17.0319 18.0124 16.4589 18.1126C15.8674 18.2161 15.0894 18.2431 13.9961 18.2489C13.5819 18.2511 13.2479 18.5887 13.2501 19.0029C13.2523 19.4171 13.5899 19.7511 14.0041 19.7489C15.0858 19.7431 15.9842 19.7184 16.7174 19.5902C17.4693 19.4586 18.1121 19.2082 18.6386 18.7068C19.0937 18.2734 19.3981 17.8344 19.5637 17.2038C19.7139 16.6323 19.7406 15.9291 19.7477 15.0063Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconScanner as IconComponent).keywords = [
  "scanner",
  "scanned",
  "scanning",
  "digitizer",
  "recognizer",
  "digitisation",
  "digitization",
  "radio",
  "browser",
  "reader",
];

export default IconScanner as IconComponent;
