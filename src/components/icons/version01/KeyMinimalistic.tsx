import { FC } from "react";

const IconKeyMinimalistic: FC<IconProps> = ({
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
            d="M18.9771 5.0234L19.5074 4.49307V4.49307L18.9771 5.0234ZM18.9771 14.7909L19.5074 15.3212L18.9771 14.7909ZM7.14558 12.6688L6.61525 12.1385L6.61525 12.1385L7.14558 12.6688ZM3.43349 16.3809L3.96382 16.9113L3.96382 16.9113L3.43349 16.3809ZM7.61956 20.567L7.08923 20.0367L7.08923 20.0367L7.61956 20.567ZM8.85996 19.3266L8.32963 18.7963L8.85996 19.3266ZM11.3319 16.8546L10.8016 16.3243L11.3319 16.8546ZM3.00906 17.5909L2.26365 17.6737L3.00906 17.5909ZM3.24113 19.6795L2.49572 19.7623L2.49572 19.7623L3.24113 19.6795ZM4.32101 20.7594L4.23819 21.5048H4.23819L4.32101 20.7594ZM6.4096 20.9914L6.49242 20.246H6.49242L6.4096 20.9914ZM3.52408 20.2682L4.05441 19.7379L4.05441 19.7379L3.52408 20.2682ZM3.73229 20.4764L3.20196 21.0067L3.20196 21.0067L3.73229 20.4764ZM7.40432 11.6316L6.67789 11.8182H6.67789L7.40432 11.6316ZM12.3689 16.5962L12.1823 17.3226L12.3689 16.5962ZM18.4468 5.55373C20.8511 7.95805 20.8511 11.8562 18.4468 14.2606L19.5074 15.3212C22.4975 12.3311 22.4975 7.48318 19.5074 4.49307L18.4468 5.55373ZM19.5074 4.49307C16.5173 1.50296 11.6694 1.50296 8.67928 4.49307L9.73994 5.55373C12.1443 3.14941 16.0424 3.14941 18.4468 5.55373L19.5074 4.49307ZM6.61525 12.1385L2.90316 15.8506L3.96382 16.9113L7.67591 13.1992L6.61525 12.1385ZM8.14989 21.0973L9.39029 19.8569L8.32963 18.7963L7.08923 20.0367L8.14989 21.0973ZM9.39029 19.8569L11.8623 17.385L10.8016 16.3243L8.32963 18.7963L9.39029 19.8569ZM2.26365 17.6737L2.49572 19.7623L3.98654 19.5967L3.75447 17.5081L2.26365 17.6737ZM4.23819 21.5048L6.32678 21.7368L6.49242 20.246L4.40384 20.0139L4.23819 21.5048ZM2.99375 20.7985L3.20196 21.0067L4.26263 19.9461L4.05441 19.7379L2.99375 20.7985ZM4.40384 20.0139C4.35042 20.008 4.30062 19.9841 4.26262 19.9461L3.20196 21.0067C3.48081 21.2856 3.84626 21.4612 4.23819 21.5048L4.40384 20.0139ZM2.49572 19.7623C2.53926 20.1542 2.7149 20.5197 2.99375 20.7985L4.05441 19.7379C4.01641 19.6999 3.99248 19.6501 3.98654 19.5966L2.49572 19.7623ZM7.08923 20.0367C6.93242 20.1935 6.71283 20.2705 6.49242 20.246L6.32678 21.7368C7.00007 21.8116 7.67087 21.5763 8.14989 21.0973L7.08923 20.0367ZM2.90316 15.8506C2.42414 16.3296 2.18884 17.0004 2.26365 17.6737L3.75447 17.5081C3.72999 17.2877 3.80701 17.0681 3.96382 16.9113L2.90316 15.8506ZM8.13075 11.4451C7.60655 9.40379 8.14412 7.14955 9.73994 5.55373L8.67928 4.49307C6.69321 6.47914 6.02725 9.2845 6.67789 11.8182L8.13075 11.4451ZM18.4468 14.2606C16.8509 15.8564 14.5967 16.3939 12.5554 15.8697L12.1823 17.3226C14.716 17.9732 17.5214 17.3073 19.5074 15.3212L18.4468 14.2606ZM11.8623 17.385C11.9181 17.3292 12.0324 17.2841 12.1823 17.3226L12.5554 15.8697C11.9675 15.7188 11.2845 15.8414 10.8016 16.3243L11.8623 17.385ZM7.67591 13.1992C8.15857 12.7165 8.28182 12.0333 8.13075 11.4451L6.67789 11.8182C6.7163 11.9677 6.67127 12.0825 6.61525 12.1385L7.67591 13.1992Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M8.33248 19.8598C8.62698 20.1511 9.10184 20.1485 9.39312 19.854C9.6844 19.5595 9.68179 19.0846 9.38729 18.7934L8.33248 19.8598ZM7.63825 17.0634C7.34375 16.7722 6.86888 16.7748 6.5776 17.0693C6.28632 17.3638 6.28893 17.8386 6.58343 18.1299L7.63825 17.0634ZM9.38729 18.7934L7.63825 17.0634L6.58343 18.1299L8.33248 19.8598L9.38729 18.7934Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M13.1161 10.8844C12.628 10.3962 12.628 9.60476 13.1161 9.1166L12.0555 8.05594C10.9815 9.12989 10.9815 10.8711 12.0555 11.945L13.1161 10.8844ZM14.8839 10.8844C14.3957 11.3725 13.6043 11.3725 13.1161 10.8844L12.0555 11.945C13.1294 13.019 14.8706 13.019 15.9445 11.945L14.8839 10.8844ZM14.8839 9.1166C15.372 9.60476 15.372 10.3962 14.8839 10.8844L15.9445 11.945C17.0185 10.8711 17.0185 9.12989 15.9445 8.05594L14.8839 9.1166ZM15.9445 8.05594C14.8706 6.982 13.1294 6.982 12.0555 8.05594L13.1161 9.1166C13.6043 8.62845 14.3957 8.62845 14.8839 9.1166L15.9445 8.05594Z"
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
            d="M18.9771 14.7909C21.6743 12.0937 21.6743 7.72062 18.9771 5.0234C16.2799 2.32618 11.9068 2.32618 9.20961 5.0234C7.41866 6.81434 6.8169 9.34414 7.40432 11.6316C7.49906 12.0005 7.41492 12.3995 7.14558 12.6688L3.43349 16.3809C3.11558 16.6988 2.95941 17.144 3.00906 17.5909L3.24113 19.6795C3.26587 19.9021 3.36566 20.1098 3.52408 20.2682L3.73229 20.4764C3.89072 20.6348 4.09834 20.7346 4.32101 20.7594L6.4096 20.9914C6.85645 21.0411 7.30164 20.8849 7.61956 20.567L8.32958 19.857L9.39026 18.7963L11.3319 16.8546C11.6013 16.5853 12 16.5014 12.3689 16.5962C14.6563 17.1836 17.1861 16.5818 18.9771 14.7909Z"
            fill="currentColor"
          />
          <path
            d="M15.4142 8.58627C14.6332 7.80523 13.3668 7.80523 12.5858 8.58627C11.8047 9.36732 11.8047 10.6337 12.5858 11.4147C13.3668 12.1958 14.6332 12.1958 15.4142 11.4147C16.1953 10.6337 16.1953 9.36732 15.4142 8.58627Z"
            fill="currentColor"
          />
          <path
            d="M6.58295 18.1299L8.3291 19.857L9.38977 18.7963L7.63776 17.0634C7.34326 16.7722 6.86839 16.7748 6.57711 17.0693C6.28584 17.3638 6.28845 17.8386 6.58295 18.1299Z"
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
            d="M18.9771 14.7909C21.6743 12.0937 21.6743 7.72062 18.9771 5.0234C16.2799 2.32618 11.9068 2.32618 9.20961 5.0234C7.41866 6.81434 6.8169 9.34414 7.40432 11.6316C7.49906 12.0005 7.41492 12.3995 7.14558 12.6688L3.43349 16.3809C3.11558 16.6988 2.95941 17.144 3.00906 17.5909L3.24113 19.6795C3.26587 19.9021 3.36566 20.1098 3.52408 20.2682L3.73229 20.4764C3.89072 20.6348 4.09834 20.7346 4.32101 20.7594L6.4096 20.9914C6.85645 21.0411 7.30164 20.8849 7.61956 20.567L8.32958 19.857L6.58343 18.1299C6.28893 17.8386 6.28632 17.3638 6.5776 17.0693C6.86888 16.7748 7.34375 16.7722 7.63825 17.0634L9.39026 18.7963L11.3319 16.8546C11.6013 16.5853 12 16.5014 12.3689 16.5962C14.6563 17.1836 17.1861 16.5818 18.9771 14.7909ZM12.5858 8.58627C13.3668 7.80523 14.6332 7.80523 15.4142 8.58627C16.1953 9.36732 16.1953 10.6337 15.4142 11.4147C14.6332 12.1958 13.3668 12.1958 12.5858 11.4147C11.8047 10.6337 11.8047 9.36732 12.5858 8.58627Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconKeyMinimalistic as IconComponent).keywords = [
  "key",
  "minimalistic",
  "winder",
  "kilo",
  "kilogram",
  "central",
  "kg",
  "discover",
  "operative",
  "describe",
  "identify",
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

export default IconKeyMinimalistic as IconComponent;