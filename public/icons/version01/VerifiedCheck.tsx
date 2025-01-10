import { FC } from "react";
import { IconProps, IconComponentType } from "@/types";

const IconVerifiedCheck: FC<IconProps> = ({
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
            d="M9.78133 3.89076C10.3452 3.41023 10.6271 3.16997 10.9219 3.02907C11.6037 2.7032 12.3963 2.7032 13.0781 3.02907C13.3729 3.16997 13.6548 3.41023 14.2187 3.89076C14.4431 4.08201 14.5553 4.17764 14.6752 4.25796C14.9499 4.44209 15.2584 4.56988 15.5828 4.63393C15.7244 4.66188 15.8713 4.6736 16.1653 4.69706C16.9038 4.75599 17.273 4.78546 17.5811 4.89427C18.2936 5.14594 18.8541 5.7064 19.1058 6.41893C19.2146 6.72699 19.244 7.09625 19.303 7.83475C19.3264 8.12868 19.3381 8.27564 19.3661 8.41718C19.4301 8.74163 19.5579 9.05014 19.7421 9.32485C19.8224 9.44469 19.918 9.55691 20.1093 9.78133C20.5898 10.3452 20.8301 10.6271 20.971 10.9219C21.2968 11.6037 21.2968 12.3963 20.971 13.0781C20.8301 13.3729 20.5898 13.6548 20.1093 14.2187C19.918 14.4431 19.8224 14.5553 19.7421 14.6752C19.5579 14.9499 19.4301 15.2584 19.3661 15.5828C19.3381 15.7244 19.3264 15.8713 19.303 16.1653C19.244 16.9038 19.2146 17.273 19.1058 17.5811C18.8541 18.2936 18.2936 18.8541 17.5811 19.1058C17.273 19.2146 16.9038 19.244 16.1653 19.303C15.8713 19.3264 15.7244 19.3381 15.5828 19.3661C15.2584 19.4301 14.9499 19.5579 14.6752 19.7421C14.5553 19.8224 14.4431 19.918 14.2187 20.1093C13.6548 20.5898 13.3729 20.8301 13.0781 20.971C12.3963 21.2968 11.6037 21.2968 10.9219 20.971C10.6271 20.8301 10.3452 20.5898 9.78133 20.1093C9.55691 19.918 9.44469 19.8224 9.32485 19.7421C9.05014 19.5579 8.74163 19.4301 8.41718 19.3661C8.27564 19.3381 8.12868 19.3264 7.83475 19.303C7.09625 19.244 6.72699 19.2146 6.41893 19.1058C5.7064 18.8541 5.14594 18.2936 4.89427 17.5811C4.78546 17.273 4.75599 16.9038 4.69706 16.1653C4.6736 15.8713 4.66188 15.7244 4.63393 15.5828C4.56988 15.2584 4.44209 14.9499 4.25796 14.6752C4.17764 14.5553 4.08201 14.4431 3.89076 14.2187C3.41023 13.6548 3.16997 13.3729 3.02907 13.0781C2.7032 12.3963 2.7032 11.6037 3.02907 10.9219C3.16997 10.6271 3.41023 10.3452 3.89076 9.78133C4.08201 9.55691 4.17764 9.4447 4.25796 9.32485C4.44209 9.05014 4.56988 8.74163 4.63393 8.41718C4.66188 8.27564 4.6736 8.12868 4.69706 7.83475C4.75599 7.09625 4.78546 6.72699 4.89427 6.41893C5.14594 5.7064 5.7064 5.14594 6.41893 4.89427C6.72699 4.78546 7.09625 4.75599 7.83475 4.69706C8.12868 4.6736 8.27564 4.66188 8.41718 4.63393C8.74163 4.56988 9.05014 4.44209 9.32485 4.25796C9.4447 4.17764 9.55691 4.08201 9.78133 3.89076Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M8.5 12.5005L10.5 14.5005L15.5 9.50049"
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
            d="M9.59236 3.20079C9.34886 3.4083 9.2271 3.51207 9.09706 3.59923C8.79896 3.79903 8.46417 3.9377 8.1121 4.00721C7.95851 4.03753 7.79903 4.05026 7.48008 4.07571L7.48007 4.07571C6.67869 4.13966 6.278 4.17164 5.94371 4.28972C5.17051 4.56282 4.56233 5.171 4.28923 5.94419C4.17115 6.27849 4.13918 6.67918 4.07523 7.48056L4.07522 7.48057C4.04977 7.79952 4.03705 7.959 4.00672 8.11259C3.93721 8.46466 3.79854 8.79945 3.59874 9.09755C3.51158 9.22759 3.40781 9.34936 3.20028 9.59288L3.20027 9.59289C2.67883 10.2048 2.4181 10.5107 2.26522 10.8306C1.91159 11.5704 1.91159 12.4305 2.26522 13.1704C2.41811 13.4903 2.67883 13.7962 3.20027 14.4081L3.20031 14.4081C3.4078 14.6516 3.51159 14.7734 3.59874 14.9034C3.79854 15.2015 3.93721 15.5363 4.00672 15.8884C4.03705 16.042 4.04977 16.2015 4.07522 16.5204L4.07523 16.5204C4.13918 17.3218 4.17115 17.7225 4.28923 18.0568C4.56233 18.83 5.17051 19.4382 5.94371 19.7113C6.27799 19.8293 6.67867 19.8613 7.48 19.9253L7.48008 19.9253C7.79903 19.9507 7.95851 19.9634 8.1121 19.9938C8.46417 20.0633 8.79896 20.2019 9.09706 20.4017C9.22711 20.4889 9.34887 20.5927 9.5924 20.8002C10.2043 21.3217 10.5102 21.5824 10.8301 21.7353C11.57 22.0889 12.43 22.0889 13.1699 21.7353C13.4898 21.5824 13.7957 21.3217 14.4076 20.8002C14.6511 20.5927 14.7729 20.4889 14.9029 20.4017C15.201 20.2019 15.5358 20.0633 15.8879 19.9938C16.0415 19.9634 16.201 19.9507 16.5199 19.9253L16.52 19.9253C17.3213 19.8613 17.722 19.8293 18.0563 19.7113C18.8295 19.4382 19.4377 18.83 19.7108 18.0568C19.8288 17.7225 19.8608 17.3218 19.9248 16.5205L19.9248 16.5204C19.9502 16.2015 19.963 16.042 19.9933 15.8884C20.0628 15.5363 20.2015 15.2015 20.4013 14.9034C20.4884 14.7734 20.5922 14.6516 20.7997 14.4081C21.3212 13.7962 21.5819 13.4903 21.7348 13.1704C22.0884 12.4305 22.0884 11.5704 21.7348 10.8306C21.5819 10.5107 21.3212 10.2048 20.7997 9.59289C20.5922 9.34936 20.4884 9.22759 20.4013 9.09755C20.2015 8.79945 20.0628 8.46466 19.9933 8.11259C19.963 7.959 19.9502 7.79952 19.9248 7.48057L19.9248 7.48049C19.8608 6.67916 19.8288 6.27848 19.7108 5.94419C19.4377 5.171 18.8295 4.56282 18.0563 4.28972C17.722 4.17164 17.3213 4.13966 16.5199 4.07571L16.5199 4.07571C16.201 4.05026 16.0415 4.03753 15.8879 4.00721C15.5358 3.9377 15.201 3.79903 14.9029 3.59923C14.7729 3.51206 14.6511 3.4083 14.4076 3.20076C13.7957 2.67932 13.4898 2.41859 13.1699 2.2657C12.43 1.91208 11.57 1.91208 10.8301 2.2657C10.5102 2.41859 10.2043 2.67932 9.5924 3.20076L9.59236 3.20079Z"
            fill="currentColor"
          />
          <path
            d="M16.3736 9.86347C16.6914 9.54563 16.6914 9.03033 16.3736 8.71249C16.0557 8.39466 15.5404 8.39466 15.2226 8.71249L10.3723 13.5627L8.77753 11.9679C8.4597 11.6501 7.94439 11.6501 7.62656 11.9679C7.30873 12.2858 7.30873 12.8011 7.62656 13.1189L9.79685 15.2892C10.1147 15.607 10.63 15.607 10.9478 15.2892L16.3736 9.86347Z"
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
            d="M9.5924 3.20076C9.34888 3.40829 9.22711 3.51207 9.09706 3.59923C8.79896 3.79903 8.46417 3.9377 8.1121 4.00721C7.95851 4.03753 7.79903 4.05026 7.48008 4.07571C6.6787 4.13966 6.278 4.17164 5.94371 4.28972C5.17051 4.56282 4.56233 5.171 4.28923 5.94419C4.17115 6.27849 4.13918 6.67918 4.07522 7.48057C4.04977 7.79952 4.03705 7.959 4.00672 8.11259C3.93721 8.46466 3.79854 8.79945 3.59874 9.09755C3.51158 9.22759 3.40781 9.34936 3.20027 9.59289C2.67883 10.2048 2.4181 10.5107 2.26522 10.8306C1.91159 11.5704 1.91159 12.4305 2.26522 13.1704C2.41811 13.4903 2.67883 13.7962 3.20027 14.4081C3.40778 14.6516 3.51158 14.7734 3.59874 14.9034C3.79854 15.2015 3.93721 15.5363 4.00672 15.8884C4.03705 16.042 4.04977 16.2015 4.07522 16.5204C4.13918 17.3218 4.17115 17.7225 4.28923 18.0568C4.56233 18.83 5.17051 19.4382 5.94371 19.7113C6.278 19.8293 6.6787 19.8613 7.48008 19.9253C7.79903 19.9507 7.95851 19.9634 8.1121 19.9938C8.46417 20.0633 8.79896 20.2019 9.09706 20.4017C9.22711 20.4889 9.34887 20.5927 9.5924 20.8002C10.2043 21.3217 10.5102 21.5824 10.8301 21.7353C11.57 22.0889 12.43 22.0889 13.1699 21.7353C13.4898 21.5824 13.7957 21.3217 14.4076 20.8002C14.6511 20.5927 14.7729 20.4889 14.9029 20.4017C15.201 20.2019 15.5358 20.0633 15.8879 19.9938C16.0415 19.9634 16.201 19.9507 16.5199 19.9253C17.3213 19.8613 17.722 19.8293 18.0563 19.7113C18.8295 19.4382 19.4377 18.83 19.7108 18.0568C19.8288 17.7225 19.8608 17.3218 19.9248 16.5204C19.9502 16.2015 19.963 16.042 19.9933 15.8884C20.0628 15.5363 20.2015 15.2015 20.4013 14.9034C20.4884 14.7734 20.5922 14.6516 20.7997 14.4081C21.3212 13.7962 21.5819 13.4903 21.7348 13.1704C22.0884 12.4305 22.0884 11.5704 21.7348 10.8306C21.5819 10.5107 21.3212 10.2048 20.7997 9.59289C20.5922 9.34936 20.4884 9.22759 20.4013 9.09755C20.2015 8.79945 20.0628 8.46466 19.9933 8.11259C19.963 7.959 19.9502 7.79952 19.9248 7.48057C19.8608 6.67918 19.8288 6.27849 19.7108 5.94419C19.4377 5.171 18.8295 4.56282 18.0563 4.28972C17.722 4.17164 17.3213 4.13966 16.5199 4.07571C16.201 4.05026 16.0415 4.03753 15.8879 4.00721C15.5358 3.9377 15.201 3.79903 14.9029 3.59923C14.7729 3.51206 14.6511 3.4083 14.4076 3.20076C13.7957 2.67932 13.4898 2.41859 13.1699 2.2657C12.43 1.91208 11.57 1.91208 10.8301 2.2657C10.5102 2.41859 10.2043 2.67932 9.5924 3.20076ZM16.3735 9.86362C16.6913 9.54579 16.6913 9.03048 16.3735 8.71265C16.0557 8.39482 15.5403 8.39482 15.2225 8.71265L10.3723 13.5629L8.77746 11.9681C8.45963 11.6503 7.94432 11.6503 7.62649 11.9681C7.30866 12.2859 7.30866 12.8012 7.62649 13.1191L9.79678 15.2894C10.1146 15.6072 10.6299 15.6072 10.9478 15.2894L16.3735 9.86362Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconVerifiedCheck as IconComponentType).keywords = [
  "verified",
  "check",
  "proven",
  "corroborated",
  "supported",
  "proved",
  "substantiated",
  "validated",
  "verification",
  "attested",
  "verifiable",
  "match",
  "hitch",
  "check out",
  "curb",
  "check into",
  "checkout",
  "turn back",
  "arrest",
  "hold",
];

export default IconVerifiedCheck as IconComponentType;
