import { FC } from "react";

const IconFileCorrupted: FC<IconProps> = ({
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
            d="M13 2.50024V5.00024C13 7.35727 13 8.53578 13.7322 9.26801C14.4645 10.0002 15.643 10.0002 18 10.0002H22"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            d="M15.3973 4.05389L14.8957 4.61144L15.3973 4.05389ZM19.3574 7.61679L18.8558 8.17434L19.3574 7.61679ZM21.6604 10.1543L20.9753 10.4596V10.4596L21.6604 10.1543ZM3.17196 20.8287L3.7022 20.2983L3.7022 20.2983L3.17196 20.8287ZM20.8346 20.8287L20.3043 20.2983H20.3043L20.8346 20.8287ZM18.291 12.8574L18.707 12.2333H18.707L18.291 12.8574ZM21.7207 12.8574L21.3048 12.2333L21.3048 12.2333L21.7207 12.8574ZM9.71681 12.8574L9.30088 12.2333L9.71681 12.8574ZM12.2891 12.8574L12.705 12.2333L12.2891 12.8574ZM6.28712 12.8574L5.87118 13.4815L6.28712 12.8574ZM3.71485 12.8574L3.29892 12.2333L3.29891 12.2333L3.71485 12.8574ZM18.291 16.8574L18.707 16.2333H18.707L18.291 16.8574ZM21.7207 16.8574L22.1367 17.4815L22.1367 17.4815L21.7207 16.8574ZM15.7188 16.8574L15.3028 16.2333L15.7188 16.8574ZM12.2891 16.8574L12.705 16.2333L12.2891 16.8574ZM9.71681 16.8574L9.30088 16.2333L9.71681 16.8574ZM15.7188 12.8574L15.3028 12.2333L15.7188 12.8574ZM6.28712 16.8574L5.87118 17.4815L6.28712 16.8574ZM3.71485 16.8574L3.29892 16.2333H3.29892L3.71485 16.8574ZM3.08865 17.2747L3.50458 17.8988H3.50458L3.08865 17.2747ZM2.27827 19.1151L3.00783 18.9412H3.00783L2.27827 19.1151ZM21.9717 16.998L22.721 17.0291L21.9717 16.998ZM21.9999 12.3275L22.7498 12.3137V12.3137L21.9999 12.3275ZM2.21436 18.073L2.91237 18.3474L2.91237 18.3474L2.21436 18.073ZM2.00613 12.2423L2.75153 12.1593L2.75153 12.1593L2.00613 12.2423ZM3.45978 13.02L3.80416 13.6863L3.80416 13.6863L3.45978 13.02ZM14.0039 21.2502H10.0026V22.7502H14.0039V21.2502ZM2.75 11.9399V10.0002H1.25V11.9399H2.75ZM14.8957 4.61144L18.8558 8.17434L19.859 7.05924L15.899 3.49634L14.8957 4.61144ZM18.8558 8.17434C20.2096 9.39243 20.7093 9.86233 20.9753 10.4596L22.3455 9.84913C21.9194 8.89256 21.1144 8.18868 19.859 7.05924L18.8558 8.17434ZM10.0324 2.75024C11.6147 2.75024 12.2119 2.76182 12.7442 2.96601L13.2814 1.56552C12.4294 1.23867 11.5011 1.25024 10.0324 1.25024V2.75024ZM15.899 3.49634C14.8126 2.51893 14.1334 1.89233 13.2814 1.56552L12.7442 2.96601C13.2766 3.17023 13.7256 3.55871 14.8957 4.61144L15.899 3.49634ZM10.0026 21.2502C8.09518 21.2502 6.74004 21.2487 5.712 21.1105C4.70551 20.9752 4.12559 20.7215 3.7022 20.2983L2.64171 21.3591C3.39028 22.1074 4.33946 22.4395 5.51219 22.5971C6.66337 22.7518 8.13758 22.7502 10.0026 22.7502V21.2502ZM14.0039 22.7502C15.869 22.7502 17.3432 22.7518 18.4943 22.5971C19.6671 22.4395 20.6163 22.1074 21.3648 21.3591L20.3043 20.2983C19.8809 20.7215 19.301 20.9752 18.2945 21.1105C17.2665 21.2487 15.9114 21.2502 14.0039 21.2502V22.7502ZM2.75 10.0002C2.75 8.09342 2.75159 6.73877 2.8898 5.71112C3.02511 4.70508 3.27884 4.12545 3.7022 3.70223L2.64171 2.6414C1.89311 3.38975 1.56087 4.33872 1.40319 5.51119C1.24841 6.66206 1.25 8.13583 1.25 10.0002H2.75ZM10.0324 1.25024C8.15737 1.25024 6.67597 1.24867 5.52009 1.40331C4.34322 1.56077 3.39086 1.8925 2.64171 2.6414L3.7022 3.70223C4.12501 3.27956 4.70671 3.0255 5.719 2.89007C6.75227 2.75182 8.11512 2.75024 10.0324 2.75024V1.25024ZM17.8751 13.4815C19.1654 14.3414 20.8464 14.3414 22.1367 13.4815L21.3048 12.2333C20.5183 12.7575 19.4935 12.7575 18.707 12.2333L17.8751 13.4815ZM10.1327 13.4815C10.6597 13.1303 11.3462 13.1303 11.8731 13.4815L12.705 12.2333C11.6743 11.5464 10.3316 11.5464 9.30088 12.2333L10.1327 13.4815ZM5.87118 13.4815C7.16149 14.3414 8.84243 14.3414 10.1327 13.4815L9.30088 12.2333C8.51433 12.7575 7.48959 12.7575 6.70305 12.2333L5.87118 13.4815ZM4.13078 13.4815C4.65772 13.1303 5.34424 13.1303 5.87118 13.4815L6.70305 12.2333C5.67234 11.5464 4.32962 11.5464 3.29892 12.2333L4.13078 13.4815ZM17.8751 17.4815C19.1654 18.3414 20.8464 18.3414 22.1367 17.4815L21.3048 16.2333C20.5183 16.7575 19.4935 16.7575 18.707 16.2333L17.8751 17.4815ZM16.1347 17.4815C16.6616 17.1303 17.3482 17.1303 17.8751 17.4815L18.707 16.2333C17.6763 15.5464 16.3335 15.5464 15.3028 16.2333L16.1347 17.4815ZM11.8731 17.4815C13.1635 18.3414 14.8444 18.3414 16.1347 17.4815L15.3028 16.2333C14.5163 16.7575 13.4916 16.7575 12.705 16.2333L11.8731 17.4815ZM10.1327 17.4815C10.6597 17.1303 11.3462 17.1303 11.8731 17.4815L12.705 16.2333C11.6743 15.5464 10.3316 15.5464 9.30088 16.2333L10.1327 17.4815ZM16.1347 13.4815C16.6616 13.1303 17.3482 13.1303 17.8751 13.4815L18.707 12.2333C17.6763 11.5464 16.3335 11.5464 15.3028 12.2333L16.1347 13.4815ZM5.87118 17.4815C7.16149 18.3414 8.84243 18.3414 10.1327 17.4815L9.30088 16.2333C8.51433 16.7575 7.48959 16.7575 6.70305 16.2333L5.87118 17.4815ZM11.8731 13.4815C13.1635 14.3414 14.8444 14.3414 16.1347 13.4815L15.3028 12.2333C14.5163 12.7575 13.4916 12.7575 12.705 12.2333L11.8731 13.4815ZM4.13078 17.4815C4.65772 17.1303 5.34424 17.1303 5.87118 17.4815L6.70305 16.2333C5.67234 15.5464 4.32962 15.5464 3.29892 16.2333L4.13078 17.4815ZM3.50458 17.8988L4.13078 17.4815L3.29892 16.2333L2.67271 16.6506L3.50458 17.8988ZM1.54871 19.289C1.74368 20.1069 2.07472 20.7923 2.64171 21.3591L3.7022 20.2983C3.3767 19.9729 3.15508 19.559 3.00783 18.9412L1.54871 19.289ZM21.2223 16.9669C21.145 18.8315 20.8923 19.7105 20.3043 20.2983L21.3648 21.3591C22.3944 20.3298 22.643 18.9117 22.721 17.0291L21.2223 16.9669ZM22.7498 12.3137C22.7314 11.321 22.665 10.5662 22.3455 9.84913L20.9753 10.4596C21.1627 10.8802 21.2321 11.3709 21.25 12.3414L22.7498 12.3137ZM22.1367 13.4815C22.5227 13.2242 22.7585 12.7863 22.7498 12.3137L21.25 12.3414C21.2491 12.2939 21.2726 12.2547 21.3048 12.2333L22.1367 13.4815ZM2.67272 16.6506C2.43437 16.8095 2.19984 16.9642 2.01644 17.1215C1.81381 17.2953 1.63153 17.5056 1.51635 17.7986L2.91237 18.3474C2.91455 18.3418 2.91655 18.3377 2.92285 18.3296C2.93099 18.319 2.95008 18.2969 2.99299 18.2601C3.09145 18.1757 3.23663 18.0774 3.50458 17.8988L2.67272 16.6506ZM3.00783 18.9412C2.94379 18.6726 2.91452 18.5428 2.90515 18.4448C2.89892 18.3795 2.90528 18.3654 2.91237 18.3474L1.51635 17.7986C1.29891 18.3518 1.44462 18.8524 1.54871 19.289L3.00783 18.9412ZM22.1367 17.4815C21.7395 17.7462 21.2022 17.4515 21.2223 16.9669L22.721 17.0291C22.752 16.2807 21.9217 15.8222 21.3048 16.2333L22.1367 17.4815ZM1.25 11.9399C1.25 12.0789 1.24872 12.2173 1.26074 12.3253L2.75153 12.1593C2.75254 12.1684 2.75135 12.1629 2.75067 12.1203C2.75002 12.0796 2.75 12.0249 2.75 11.9399H1.25ZM3.29891 12.2333C3.22823 12.2804 3.18264 12.3107 3.1484 12.3328C3.11256 12.3559 3.10735 12.3579 3.11539 12.3538L3.80416 13.6863C3.90065 13.6364 4.01511 13.5586 4.13078 13.4815L3.29891 12.2333ZM1.26074 12.3253C1.39654 13.5455 2.71386 14.2498 3.80416 13.6863L3.11539 12.3538C2.95911 12.4345 2.7709 12.3334 2.75153 12.1593L1.26074 12.3253Z"
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
            d="M11.5092 2.26034L11.5 5.09474C11.4999 6.19184 11.4998 7.16142 11.6049 7.94293C11.7188 8.79005 11.9803 9.63704 12.6716 10.3283C13.3629 11.0196 14.2098 11.2811 15.057 11.395C15.8385 11.5 16.808 11.5 17.9051 11.4999L21.9574 11.4999C21.9698 11.6554 21.9786 11.8213 21.9848 11.9998H22C22 11.7323 22 11.5985 21.9901 11.4411C21.9335 10.5465 21.5617 9.52149 21.0315 8.79877C20.9382 8.67155 20.8743 8.59517 20.7467 8.44243C19.9542 7.49383 18.911 6.31217 18 5.49978C17.1892 4.7767 16.0787 3.98561 15.1101 3.33874C14.2781 2.78299 13.862 2.50511 13.2915 2.29858C13.1403 2.24383 12.9408 2.18335 12.7846 2.1449C12.4006 2.05038 12.0268 2.0175 11.5 2.0061L11.5092 2.26034Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M2 13.6626V9.77518C2 6.11004 2 4.27747 3.17157 3.13886C4.34315 2.00024 6.23869 2.00024 10.0298 2.00024C10.6212 2.00024 11.0979 2.00024 11.5003 2.01529L11.5092 2.25952L11.5 5.00814C11.5 5.06859 11.5 5.12866 11.5 5.1883C11.5 6.247 11.5028 7.18371 11.6049 7.94293C11.7188 8.79005 11.9803 9.63704 12.6716 10.3283C13.3629 11.0196 14.2098 11.2811 15.057 11.395C15.8385 11.5 16.808 11.5 17.9051 11.4999L21.9574 11.4999C21.9698 11.6554 21.9786 11.8213 21.9848 11.9998H21.9926C22 12.3576 22 12.7649 22 13.2378V13.6626C22 13.8972 22 14.1243 21.9997 14.3442L21.9877 14.3505C21.8628 14.4159 21.7638 14.4677 21.7205 14.4958C20.682 15.1684 19.3292 15.1684 18.2908 14.4958C17.5119 13.9914 16.4973 13.9914 15.7185 14.4958C14.6801 15.1684 13.3272 15.1684 12.2888 14.4958C11.51 13.9914 10.4954 13.9914 9.71653 14.4958C8.67811 15.1684 7.32527 15.1684 6.28684 14.4958C5.50802 13.9914 4.49339 13.9914 3.71457 14.4958C3.57738 14.5847 3.50878 14.6291 3.4595 14.6539C3.07304 14.848 2.44233 14.6808 2.00034 14.3642C2 14.1381 2 13.9044 2 13.6626Z"
            fill="currentColor"
          />
          <path
            d="M9.99992 22.0002H14.0001C17.7714 22.0002 19.6571 22.0002 20.8287 21.067C21.9253 20.1934 21.9955 18.8216 22 16.1861L21.988 16.1912C21.8631 16.2448 21.7641 16.2873 21.7208 16.3103C20.6823 16.8616 19.3294 16.8616 18.291 16.3103C17.5121 15.8969 16.4974 15.8969 15.7186 16.3103C14.6801 16.8616 13.3273 16.8616 12.2888 16.3103C11.51 15.8969 10.4953 15.8969 9.71645 16.3103C8.67798 16.8616 7.3251 16.8616 6.28664 16.3103C5.5078 15.8969 4.49314 15.8969 3.71429 16.3103C3.57709 16.3832 3.50849 16.4196 3.45921 16.4399C3.07274 16.599 2.44201 16.462 2 16.2025C2.00476 18.8273 2.07693 20.1952 3.17127 21.067C4.34289 22.0002 6.22856 22.0002 9.99992 22.0002Z"
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
            d="M19.3517 7.6169L15.3929 4.054C14.2651 3.03892 13.7012 2.53139 13.0092 2.26587L13 5.00035C13 7.35737 13 8.53588 13.7322 9.26812C14.4645 10.0004 15.643 10.0004 18 10.0004H21.5801C21.2175 9.29613 20.5684 8.71189 19.3517 7.6169Z"
            fill="currentColor"
          />
          <path
            d="M14 22.0002H10C6.22876 22.0002 4.34315 22.0002 3.17157 20.8287C2.72548 20.3826 2.44924 19.833 2.27818 19.1151C2.15904 18.6152 2.09948 18.3652 2.21429 18.073C2.32911 17.7808 2.58217 17.6121 3.08829 17.2747L3.71429 16.8574C4.49285 16.3383 5.50715 16.3383 6.28571 16.8574C7.3238 17.5494 8.6762 17.5494 9.71429 16.8574C10.4929 16.3383 11.5071 16.3383 12.2857 16.8574C13.3238 17.5494 14.6762 17.5494 15.7143 16.8574C16.4929 16.3383 17.5071 16.3383 18.2857 16.8574C19.3238 17.5494 20.6762 17.5494 21.7143 16.8574C21.8241 16.7842 21.9705 16.8683 21.965 17.0002C21.8873 18.8725 21.6366 20.0205 20.8284 20.8287C19.6569 22.0002 17.7712 22.0002 14 22.0002Z"
            fill="currentColor"
          />
          <path
            d="M2 10.0002C2 6.22901 2 4.34339 3.17157 3.17182C4.34315 2.00024 6.23869 2.00024 10.0298 2.00024C10.6358 2.00024 11.1214 2.00024 11.53 2.01691C11.5166 2.09684 11.5095 2.17837 11.5092 2.26081L11.5 5.09521C11.4999 6.19232 11.4998 7.16189 11.6049 7.9434C11.7188 8.79052 11.9803 9.63751 12.6716 10.3288C13.3628 11.02 14.2098 11.2816 15.0569 11.3954C15.8385 11.5005 16.808 11.5004 17.9051 11.5004L18 11.5004H21.9934V12.3275C21.9973 12.5401 21.8912 12.7395 21.7143 12.8574C20.6762 13.5494 19.3238 13.5494 18.2857 12.8574C17.5071 12.3383 16.4929 12.3383 15.7143 12.8574C14.6762 13.5494 13.3238 13.5494 12.2857 12.8574C11.5071 12.3383 10.4929 12.3383 9.71429 12.8574C8.6762 13.5494 7.3238 13.5494 6.28571 12.8574C5.50715 12.3383 4.49285 12.3383 3.71429 12.8574L3.5547 12.9638C2.87033 13.42 2.52814 13.6481 2.26407 13.5068C2 13.3655 2 12.9542 2 12.1317V10.0002Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconFileCorrupted as IconComponent).keywords = [
  "file",
  "corrupted",
  "register",
  "single file",
  "indian file",
  "charge",
  "file away",
  "lodge",
  "file cabinet",
  "filing cabinet",
  "data file",
  "debased",
  "imperfect",
  "vitiated",
  "corruption",
  "depraved",
  "corruptive",
  "tainted",
  "damaging",
  "malformed",
];

export default IconFileCorrupted as IconComponent;
