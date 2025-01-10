import { FC } from "react";

const IconTennis2: FC<IconProps> = ({
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
            d="M3.33971 17.0004C6.10113 21.7834 12.217 23.4221 17 20.6607C18.9496 19.5351 20.3768 17.8521 21.1965 15.9293C22.3878 13.1349 22.296 9.83377 20.6602 7.00045C19.0244 4.16713 16.2114 2.43715 13.1957 2.07161C11.1207 1.82008 8.94957 2.21459 6.99996 3.3402C2.21703 6.10162 0.578283 12.2175 3.33971 17.0004Z"
            stroke="currentColor"
            strokeWidth={width}
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M13.1958 2.07153C13.1958 2.07153 12.0981 6.17024 14.5981 10.5004C17.0981 14.8305 21.1965 15.9292 21.1965 15.9292M2.80347 8.07153C2.80347 8.07153 6.90191 9.17024 9.40191 13.5004C11.9019 17.8305 10.8042 21.9292 10.8042 21.9292"
            stroke="currentColor"
            strokeWidth={width}
            strokeDasharray="1.5 2"
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
            d="M3.33995 17.0002C6.10138 21.7831 12.2173 23.4219 17.0002 20.6605C18.9498 19.5349 20.377 17.8519 21.1967 15.929C22.388 13.1346 22.2963 9.83352 20.6605 7.00021C19.0246 4.16689 16.2117 2.43691 13.196 2.07137C11.1209 1.81984 8.94981 2.21434 7.00021 3.33995C2.21728 6.10137 0.578527 12.2173 3.33995 17.0002Z"
            fill="currentColor"
          />
          <path
            d="M13.9402 2.19008C13.6937 2.14121 13.4453 2.10156 13.1954 2.07128C12.9447 2.04088 12.6925 2.01992 12.4395 2.00854C12.4299 2.05132 12.4186 2.10405 12.4062 2.16624C12.3714 2.3407 12.3282 2.58995 12.2908 2.90238C12.2416 3.31366 12.5351 3.68698 12.9463 3.73622C13.3576 3.78547 13.7309 3.49198 13.7802 3.0807C13.8126 2.81001 13.8494 2.59911 13.8773 2.4592C13.8912 2.38929 13.9029 2.33721 13.9106 2.30439C13.9144 2.28798 13.9173 2.2764 13.9189 2.26982L13.9202 2.26465L13.9205 2.26353L13.9402 2.19008Z"
            fill="currentColor"
          />
          <path
            d="M2.53369 8.77544C2.61473 8.53722 2.70476 8.30194 2.80361 8.07014C2.90257 7.83808 3.01038 7.60952 3.12689 7.38501C3.16877 7.39808 3.22017 7.41467 3.2803 7.43506C3.44877 7.49221 3.68623 7.57941 3.97551 7.70323C4.3563 7.86622 4.53287 8.30705 4.36988 8.68784C4.20688 9.06864 3.76605 9.24521 3.38526 9.08221C3.13462 8.97494 2.93356 8.90139 2.79846 8.85557C2.73095 8.83267 2.68002 8.81673 2.64775 8.80699C2.63162 8.80212 2.62015 8.7988 2.61363 8.79695L2.60894 8.79561L2.53369 8.77544Z"
            fill="currentColor"
          />
          <path
            d="M11.5601 21.9917C11.3072 21.9803 11.0552 21.9594 10.8045 21.929C10.5545 21.8988 10.306 21.8591 10.0594 21.8102L10.0791 21.7366L10.0794 21.7355L10.0807 21.7303C10.0824 21.7237 10.0852 21.7122 10.0891 21.6958C10.0968 21.6629 10.1084 21.6109 10.1224 21.5409C10.1502 21.401 10.1871 21.1901 10.2195 20.9194C10.2687 20.5082 10.6421 20.2147 11.0533 20.2639C11.4646 20.3132 11.7581 20.6865 11.7088 21.0978C11.6714 21.4102 11.6282 21.6594 11.5935 21.8339C11.5811 21.8961 11.5698 21.9489 11.5601 21.9917Z"
            fill="currentColor"
          />
          <path
            d="M21.4656 15.2246C21.3847 15.4625 21.2948 15.6975 21.1962 15.929C21.0971 16.1613 20.9891 16.3902 20.8725 16.615C20.8307 16.602 20.7794 16.5854 20.7194 16.5651C20.5509 16.5079 20.3134 16.4207 20.0242 16.2969C19.6434 16.1339 19.4668 15.6931 19.6298 15.3123C19.7928 14.9315 20.2336 14.7549 20.6144 14.9179C20.865 15.0252 21.0661 15.0988 21.2012 15.1446C21.2687 15.1675 21.3196 15.1834 21.3519 15.1932C21.368 15.198 21.3795 15.2013 21.386 15.2032L21.3906 15.2045L21.4656 15.2246Z"
            fill="currentColor"
          />
          <path
            d="M13.7535 5.41467C13.7159 5.00217 13.3511 4.69822 12.9386 4.73579C12.5261 4.77336 12.2221 5.13822 12.2597 5.55073C12.3148 6.15595 12.4171 6.81457 12.5891 7.50828C12.6887 7.91034 13.0954 8.15549 13.4974 8.05586C13.8995 7.95623 14.1446 7.54953 14.045 7.14748C13.893 6.53398 13.8024 5.95095 13.7535 5.41467Z"
            fill="currentColor"
          />
          <path
            d="M6.2846 9.00045C5.94615 8.76166 5.4782 8.84245 5.23941 9.18091C5.00062 9.51936 5.08141 9.98731 5.41987 10.2261C5.85987 10.5365 6.31948 10.9065 6.77477 11.345C7.07314 11.6323 7.54793 11.6233 7.83524 11.3249C8.12255 11.0266 8.11358 10.5518 7.81521 10.2645C7.3004 9.76873 6.78118 9.3508 6.2846 9.00045Z"
            fill="currentColor"
          />
          <path
            d="M14.8368 9.34757C14.6574 8.97422 14.2094 8.81697 13.836 8.99636C13.4626 9.17574 13.3054 9.62383 13.4848 9.99718C13.6246 10.2882 13.7787 10.5812 13.9484 10.8751C14.118 11.1689 14.2947 11.4489 14.4769 11.7155C14.7105 12.0575 15.1772 12.1454 15.5192 11.9118C15.8612 11.6781 15.9491 11.2114 15.7155 10.8694C15.5543 10.6335 15.3978 10.3856 15.2474 10.1251C15.097 9.86454 14.9605 9.60505 14.8368 9.34757Z"
            fill="currentColor"
          />
          <path
            d="M9.5228 12.2846C9.28916 11.9426 8.82248 11.8547 8.48045 12.0884C8.13842 12.322 8.05056 12.7887 8.2842 13.1307C8.44533 13.3666 8.60181 13.6145 8.75224 13.8751C8.90266 14.1356 9.03913 14.3951 9.16284 14.6526C9.34222 15.0259 9.79031 15.1832 10.1637 15.0038C10.537 14.8244 10.6943 14.3763 10.5149 14.003C10.375 13.7119 10.2209 13.4189 10.0513 13.1251C9.88163 12.8312 9.70495 12.5513 9.5228 12.2846Z"
            fill="currentColor"
          />
          <path
            d="M17.2249 12.6552C16.9265 12.3679 16.4517 12.3768 16.1644 12.6752C15.8771 12.9736 15.8861 13.4484 16.1844 13.7357C16.6993 14.2314 17.2185 14.6494 17.7151 14.9997C18.0535 15.2385 18.5215 15.1577 18.7603 14.8192C18.999 14.4808 18.9183 14.0128 18.5798 13.774C18.1398 13.4636 17.6802 13.0936 17.2249 12.6552Z"
            fill="currentColor"
          />
          <path
            d="M11.4106 16.4919C11.311 16.0898 10.9043 15.8447 10.5022 15.9443C10.1002 16.0439 9.85501 16.4506 9.95465 16.8527C10.1067 17.4662 10.1973 18.0492 10.2462 18.5855C10.2837 18.998 10.6486 19.3019 11.0611 19.2644C11.4736 19.2268 11.7775 18.8619 11.74 18.4494C11.6848 17.8442 11.5825 17.1856 11.4106 16.4919Z"
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
            d="M13.78 3.08261C13.8125 2.81196 13.8493 2.60109 13.8771 2.46121L13.9316 2.19037C16.6634 2.72942 19.1572 4.40042 20.6588 7.00132C22.1603 9.60197 22.3607 12.5968 21.4619 15.2319L21.3505 15.193C21.3183 15.1833 21.2673 15.1674 21.1998 15.1445C21.0648 15.0986 20.8637 15.0251 20.6131 14.9179C20.2324 14.7549 19.7916 14.9314 19.6287 15.3122C19.4657 15.6929 19.6423 16.1337 20.023 16.2966C20.3122 16.4204 20.5496 16.5076 20.7181 16.5647C20.7781 16.5851 20.8295 16.6017 20.8713 16.6147C20.0228 18.2498 18.7128 19.6699 16.9992 20.6593C15.2855 21.6487 13.4007 22.0731 11.5604 21.9904C11.57 21.9476 11.5813 21.8949 11.5937 21.8327C11.6285 21.6582 11.6717 21.409 11.7091 21.0967C11.7583 20.6855 11.4649 20.3122 11.0537 20.263C10.6424 20.2137 10.2692 20.5072 10.22 20.9184C10.1875 21.189 10.1507 21.3999 10.1229 21.5398L10.0533 21.8076C7.3274 21.2654 4.84006 19.5958 3.34119 16.9997C1.83991 14.3994 1.6394 11.405 2.53776 8.77009C2.57003 8.77983 2.73267 8.83361 2.80017 8.85651C2.93524 8.90232 3.13627 8.97585 3.38686 9.08311C3.7676 9.24608 4.20835 9.06954 4.37132 8.68881C4.53428 8.30808 4.35775 7.86732 3.97701 7.70436C3.68779 7.58056 3.45036 7.49337 3.28193 7.43624C3.22187 7.41587 3.17053 7.3993 3.12868 7.38624C3.97719 5.75114 5.28717 4.33107 7.00083 3.34168C8.7145 2.35229 10.5993 1.92786 12.4396 2.01058C12.43 2.05335 12.4187 2.1061 12.4063 2.16829C12.3715 2.34273 12.3283 2.59194 12.2909 2.90431C12.2417 3.31552 12.5351 3.68878 12.9463 3.73802C13.3576 3.78725 13.7308 3.49381 13.78 3.08261ZM12.9386 4.73742C13.351 4.69985 13.7158 5.00375 13.7534 5.41618C13.8022 5.95237 13.8928 6.5353 14.0448 7.1487C14.1445 7.55069 13.8993 7.95731 13.4974 8.05693C13.0954 8.15655 12.6887 7.91143 12.5891 7.50945C12.4172 6.81585 12.3149 6.15734 12.2598 5.55222C12.2223 5.13978 12.5261 4.77498 12.9386 4.73742ZM5.2407 9.18179C5.47945 8.84339 5.94733 8.76261 6.28573 9.00136C6.78222 9.35166 7.30135 9.76951 7.81608 10.2652C8.1144 10.5524 8.12337 11.0271 7.8361 11.3255C7.54884 11.6238 7.07413 11.6327 6.77581 11.3455C6.32059 10.9071 5.86107 10.5372 5.42113 10.2268C5.08273 9.98806 5.00195 9.52019 5.2407 9.18179ZM13.8359 8.99727C14.2092 8.81792 14.6572 8.97514 14.8365 9.34843C14.9602 9.60587 15.0967 9.8653 15.2471 10.1258C15.3975 10.3863 15.5539 10.6342 15.715 10.87C15.9486 11.212 15.8608 11.6786 15.5188 11.9122C15.1768 12.1458 14.7102 12.0579 14.4766 11.716C14.2945 11.4494 14.1178 11.1695 13.9482 10.8757C13.7786 10.5819 13.6245 10.2889 13.4847 9.99793C13.3054 9.62464 13.4626 9.17663 13.8359 8.99727ZM8.48121 12.0888C8.82318 11.8552 9.28978 11.943 9.52338 12.285C9.7055 12.5516 9.88215 12.8315 10.0518 13.1253C10.2214 13.4191 10.3755 13.712 10.5153 14.003C10.6946 14.3763 10.5374 14.8243 10.1641 15.0037C9.79085 15.1831 9.34284 15.0258 9.16348 14.6525C9.03979 14.3951 8.90334 14.1357 8.75295 13.8752C8.60255 13.6147 8.44609 13.3668 8.28499 13.131C8.05139 12.789 8.13924 12.3224 8.48121 12.0888ZM16.1639 12.6755C16.4512 12.3772 16.9259 12.3682 17.2242 12.6555C17.6794 13.0938 18.1389 13.4638 18.5789 13.7742C18.9173 14.0129 18.998 14.4808 18.7593 14.8192C18.5205 15.1576 18.0527 15.2384 17.7143 14.9996C17.2178 14.6493 16.6986 14.2315 16.1839 13.7358C15.8856 13.4485 15.8766 12.9738 16.1639 12.6755ZM10.5026 15.944C10.9046 15.8444 11.3113 16.0895 11.4109 16.4915C11.5828 17.1851 11.6851 17.8436 11.7402 18.4488C11.7777 18.8612 11.4739 19.226 11.0614 19.2636C10.649 19.3011 10.2842 18.9972 10.2466 18.5848C10.1978 18.0486 10.1072 17.4657 9.95516 16.8523C9.85554 16.4503 10.1007 16.0437 10.5026 15.944Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconTennis2 as IconComponent).keywords = [
  "tennis",
  "2",
  "lawn tennis",
  "volleyball",
  "championship",
  "tournament",
  "arena",
  "ball",
  "open",
  "game",
  "striker",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out",
];

export default IconTennis2 as IconComponent;
