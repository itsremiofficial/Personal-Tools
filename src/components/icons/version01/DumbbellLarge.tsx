import { FC } from "react";

const IconDumbbellLarge: FC<IconProps> = ({
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
            d="M3.92443 18.6078L4.45476 18.0774L3.92443 18.6078ZM5.39271 20.0761L4.86238 20.6064L5.39271 20.0761ZM9.06343 20.0761L8.5331 20.6064L9.06343 20.0761ZM9.79757 20.8102L10.3279 20.2799L9.79757 20.8102ZM14.6055 19.3779L13.8811 19.1838L13.8811 19.1838L14.6055 19.3779ZM13.4683 17.1395L12.938 17.6698H12.938L13.4683 17.1395ZM14.6055 18.5718L13.8811 18.7659V18.7659L14.6055 18.5718ZM12.036 21.9474L11.8419 21.223L11.8419 21.223L12.036 21.9474ZM11.2299 21.9474L11.424 21.223L11.2299 21.9474ZM2.05306 11.9645L2.77751 12.1586L2.77751 12.1586L2.05306 11.9645ZM3.19028 14.2029L2.65995 14.7332L3.19028 14.2029ZM2.05306 12.7706L1.32862 12.9647L2.05306 12.7706ZM4.62257 9.39499L4.81668 10.1194L4.62257 9.39499ZM6.861 10.5322L6.33067 11.0625V11.0625L6.861 10.5322ZM5.42871 9.39499L5.62283 8.67054H5.62283L5.42871 9.39499ZM19.3774 14.606L19.1833 13.8815H19.1833L19.3774 14.606ZM17.139 13.4688L16.6087 13.9991L17.139 13.4688ZM18.5713 14.606L18.7654 13.8815H18.7654L18.5713 14.606ZM21.9469 12.0365L21.2225 11.8424L21.2225 11.8424L21.9469 12.0365ZM21.9469 11.2303L21.2225 11.4245L21.2225 11.4245L21.9469 11.2303ZM11.964 2.05355L11.7699 1.32911V1.32911L11.964 2.05355ZM14.2024 3.19077L13.6721 3.7211L14.2024 3.19077ZM12.7701 2.05355L12.576 2.778L12.576 2.778L12.7701 2.05355ZM9.3945 4.62305L8.67005 4.42894V4.42894L9.3945 4.62305ZM10.5317 6.86149L10.0014 7.39182L10.5317 6.86149ZM9.3945 5.4292L10.1189 5.23509V5.23509L9.3945 5.4292ZM7.02425 16.9762C7.31715 17.2691 7.31715 17.744 7.02425 18.0369C6.73136 18.3298 6.25649 18.3298 5.96359 18.0369L7.02425 16.9762ZM18.0364 5.96408C18.3293 6.25698 18.3293 6.73185 18.0364 7.02474C17.7435 7.31764 17.2686 7.31764 16.9757 7.02474L18.0364 5.96408ZM12.3671 16.0383L12.8974 15.5079H12.8974L12.3671 16.0383ZM16.0378 12.3676L16.5681 11.8372L16.0378 12.3676ZM7.96221 11.6334L8.49254 11.1031V11.1031L7.96221 11.6334ZM11.6329 7.9627L12.1633 7.43237L11.6329 7.9627ZM4.45476 18.0774L5.92304 19.5457L4.86238 20.6064L3.39409 19.1381L4.45476 18.0774ZM19.5452 5.92353L18.077 4.45524L19.1376 3.39458L20.6059 4.86287L19.5452 5.92353ZM19.5452 7.79944C19.9063 7.43837 20.1226 7.21979 20.258 7.0424C20.3203 6.96077 20.346 6.91189 20.3567 6.88633C20.3649 6.86675 20.3638 6.86228 20.3638 6.86149H21.8638C21.8638 7.30643 21.6745 7.65877 21.4505 7.95228C21.2398 8.22848 20.937 8.52902 20.6059 8.8601L19.5452 7.79944ZM20.6059 4.86287C20.937 5.19396 21.2398 5.49449 21.4505 5.7707C21.6745 6.06421 21.8638 6.41654 21.8638 6.86149H20.3638C20.3638 6.86069 20.3649 6.85622 20.3567 6.83664C20.346 6.81108 20.3203 6.7622 20.258 6.68057C20.1226 6.50318 19.9063 6.2846 19.5452 5.92353L20.6059 4.86287ZM5.92304 19.5457C6.28411 19.9068 6.50269 20.1231 6.68008 20.2585C6.76171 20.3208 6.8106 20.3465 6.83615 20.3572C6.85573 20.3654 6.8602 20.3643 6.861 20.3643L6.861 21.8643C6.41605 21.8643 6.06372 21.6749 5.77021 21.451C5.49401 21.2403 5.19347 20.9375 4.86238 20.6064L5.92304 19.5457ZM8.85961 20.6064C8.52853 20.9375 8.22799 21.2403 7.95179 21.451C7.65828 21.6749 7.30594 21.8643 6.861 21.8643L6.861 20.3643C6.86179 20.3643 6.86626 20.3654 6.88584 20.3572C6.9114 20.3465 6.96028 20.3208 7.04191 20.2585C7.2193 20.1231 7.43788 19.9068 7.79895 19.5457L8.85961 20.6064ZM4.45476 16.2015C4.09368 16.5626 3.87736 16.7812 3.74201 16.9586C3.67973 17.0402 3.65396 17.0891 3.6433 17.1146C3.63513 17.1342 3.63619 17.1387 3.63619 17.1395L2.13619 17.1395C2.13619 16.6945 2.32554 16.3422 2.54948 16.0487C2.76022 15.7725 3.06301 15.472 3.39409 15.1409L4.45476 16.2015ZM3.39409 19.1381C3.06301 18.807 2.76022 18.5065 2.54948 18.2303C2.32554 17.9368 2.13619 17.5844 2.13619 17.1395L3.63619 17.1395C3.63619 17.1403 3.63513 17.1448 3.6433 17.1643C3.65396 17.1899 3.67973 17.2388 3.74201 17.3204C3.87736 17.4978 4.09368 17.7164 4.45476 18.0774L3.39409 19.1381ZM15.1404 3.39458C15.4715 3.0635 15.772 2.76071 16.0482 2.54997C16.3417 2.32603 16.6941 2.13668 17.139 2.13668V3.63668C17.1382 3.63668 17.1337 3.63562 17.1142 3.64379C17.0886 3.65445 17.0397 3.68022 16.9581 3.7425C16.7807 3.87785 16.5621 4.09417 16.201 4.45524L15.1404 3.39458ZM18.077 4.45524C17.7159 4.09417 17.4973 3.87785 17.3199 3.7425C17.2383 3.68022 17.1894 3.65445 17.1638 3.64379C17.1443 3.63562 17.1398 3.63668 17.139 3.63668V2.13668C17.5839 2.13668 17.9363 2.32603 18.2298 2.54997C18.506 2.76071 18.8065 3.0635 19.1376 3.39458L18.077 4.45524ZM9.59376 19.5457L10.3279 20.2799L9.26724 21.3405L8.5331 20.6064L9.59376 19.5457ZM12.938 20.2799C13.2908 19.927 13.5194 19.6974 13.6777 19.5076C13.8292 19.3258 13.8669 19.2368 13.8811 19.1838L15.3299 19.572C15.2361 19.9221 15.0482 20.2062 14.8297 20.4682C14.6179 20.7223 14.3319 21.0072 13.9986 21.3405L12.938 20.2799ZM13.9986 16.6092C14.3319 16.9425 14.6179 17.2274 14.8297 17.4815C15.0482 17.7435 15.2361 18.0276 15.3299 18.3777L13.8811 18.7659C13.8669 18.7129 13.8292 18.6239 13.6777 18.4421C13.5194 18.2523 13.2908 18.0227 12.938 17.6698L13.9986 16.6092ZM13.8811 19.1838C13.9177 19.0469 13.9177 18.9028 13.8811 18.7659L15.3299 18.3777C15.4348 18.7689 15.4348 19.1808 15.3299 19.572L13.8811 19.1838ZM13.9986 21.3405C13.6653 21.6738 13.3804 21.9598 13.1263 22.1716C12.8643 22.3901 12.5802 22.5781 12.2301 22.6719L11.8419 21.223C11.8949 21.2088 11.9839 21.1712 12.1657 21.0196C12.3555 20.8614 12.5851 20.6327 12.938 20.2799L13.9986 21.3405ZM10.3279 20.2799C10.6807 20.6327 10.9104 20.8614 11.1002 21.0196C11.282 21.1712 11.371 21.2088 11.424 21.223L11.0357 22.6719C10.6857 22.5781 10.4016 22.3901 10.1396 22.1717C9.88548 21.9598 9.60055 21.6738 9.26724 21.3405L10.3279 20.2799ZM12.2301 22.6719C11.8389 22.7767 11.427 22.7767 11.0357 22.6719L11.424 21.223C11.5609 21.2597 11.705 21.2597 11.8419 21.223L12.2301 22.6719ZM3.72061 11.0625C3.36778 11.4154 3.13912 11.645 2.98091 11.8348C2.82932 12.0166 2.79171 12.1056 2.77751 12.1586L1.32862 11.7704C1.42242 11.4203 1.61035 11.1362 1.82884 10.8742C2.04069 10.6201 2.32664 10.3352 2.65995 10.0019L3.72061 11.0625ZM2.65995 14.7332C2.32664 14.3999 2.04069 14.115 1.82884 13.8609C1.61035 13.5989 1.42242 13.3148 1.32862 12.9647L2.77751 12.5765C2.79171 12.6295 2.82932 12.7185 2.98091 12.9003C3.13912 13.0901 3.36778 13.3198 3.72061 13.6726L2.65995 14.7332ZM2.77751 12.1586C2.74083 12.2955 2.74083 12.4396 2.77751 12.5765L1.32862 12.9647C1.22379 12.5735 1.22379 12.1616 1.32862 11.7704L2.77751 12.1586ZM2.65995 10.0019C2.99326 9.66856 3.27819 9.38261 3.53228 9.17076C3.79432 8.95227 4.07838 8.76434 4.42845 8.67054L4.81668 10.1194C4.76368 10.1336 4.67467 10.1712 4.49287 10.3228C4.30312 10.481 4.07344 10.7097 3.72061 11.0625L2.65995 10.0019ZM6.33067 11.0625C5.97784 10.7097 5.74816 10.481 5.55841 10.3228C5.37661 10.1712 5.2876 10.1336 5.2346 10.1194L5.62283 8.67054C5.9729 8.76434 6.25696 8.95227 6.519 9.17076C6.77308 9.38261 7.05802 9.66856 7.39133 10.0019L6.33067 11.0625ZM4.42845 8.67054C4.81968 8.56571 5.2316 8.56571 5.62283 8.67054L5.2346 10.1194C5.09771 10.0828 4.95357 10.0828 4.81668 10.1194L4.42845 8.67054ZM20.6059 8.53359L21.34 9.26773L20.2794 10.3284L19.5452 9.59425L20.6059 8.53359ZM21.34 13.9991C21.0067 14.3324 20.7218 14.6184 20.4677 14.8302C20.2057 15.0487 19.9216 15.2366 19.5715 15.3304L19.1833 13.8815C19.2363 13.8673 19.3253 13.8297 19.5071 13.6782C19.6969 13.5199 19.9266 13.2913 20.2794 12.9384L21.34 13.9991ZM17.6693 12.9384C18.0222 13.2913 18.2518 13.5199 18.4416 13.6782C18.6234 13.8297 18.7124 13.8673 18.7654 13.8815L18.3772 15.3304C18.0271 15.2366 17.743 15.0487 17.481 14.8302C17.2269 14.6184 16.942 14.3324 16.6087 13.9991L17.6693 12.9384ZM19.5715 15.3304C19.1803 15.4353 18.7684 15.4353 18.3772 15.3304L18.7654 13.8815C18.9023 13.9182 19.0464 13.9182 19.1833 13.8815L19.5715 15.3304ZM20.2794 12.9384C20.6322 12.5856 20.8609 12.3559 21.0191 12.1662C21.1707 11.9844 21.2083 11.8954 21.2225 11.8424L22.6714 12.2306C22.5776 12.5807 22.3896 12.8647 22.1712 13.1268C21.9593 13.3809 21.6734 13.6658 21.34 13.9991L20.2794 12.9384ZM21.34 9.26773C21.6734 9.60104 21.9593 9.88597 22.1712 10.1401C22.3896 10.4021 22.5776 10.6862 22.6714 11.0362L21.2225 11.4245C21.2083 11.3715 21.1707 11.2825 21.0191 11.1006C20.8609 10.9109 20.6322 10.6812 20.2794 10.3284L21.34 9.26773ZM21.2225 11.8424C21.2592 11.7055 21.2592 11.5613 21.2225 11.4245L22.6714 11.0362C22.7762 11.4275 22.7762 11.8394 22.6714 12.2306L21.2225 11.8424ZM10.0014 2.66044C10.3347 2.32713 10.6196 2.04118 10.8737 1.82932C11.1357 1.61084 11.4198 1.42291 11.7699 1.32911L12.1581 2.778C12.1051 2.7922 12.0161 2.82981 11.8343 2.98139C11.6445 3.13961 11.4149 3.36827 11.062 3.7211L10.0014 2.66044ZM13.6721 3.7211C13.3193 3.36827 13.0896 3.13961 12.8998 2.98139C12.718 2.82981 12.629 2.7922 12.576 2.778L12.9643 1.32911C13.3143 1.42291 13.5984 1.61084 13.8604 1.82933C14.1145 2.04118 14.3994 2.32713 14.7328 2.66044L13.6721 3.7211ZM11.7699 1.32911C12.1611 1.22428 12.573 1.22428 12.9643 1.32911L12.576 2.778C12.4391 2.74132 12.295 2.74132 12.1581 2.778L11.7699 1.32911ZM11.062 3.7211C10.7092 4.07393 10.4806 4.3036 10.3223 4.49336C10.1708 4.67516 10.1331 4.76417 10.1189 4.81717L8.67005 4.42894C8.76385 4.07887 8.95178 3.7948 9.17027 3.53277C9.38212 3.27868 9.66807 2.99375 10.0014 2.66044L11.062 3.7211ZM10.0014 7.39182C9.66807 7.0585 9.38212 6.77357 9.17027 6.51949C8.95178 6.25745 8.76385 5.97339 8.67005 5.62331L10.1189 5.23509C10.1331 5.28808 10.1708 5.37709 10.3223 5.5589C10.4806 5.74865 10.7092 5.97832 11.062 6.33116L10.0014 7.39182ZM10.1189 4.81717C10.0823 4.95406 10.0823 5.09819 10.1189 5.23509L8.67005 5.62331C8.56523 5.23209 8.56522 4.82017 8.67005 4.42894L10.1189 4.81717ZM3.72061 13.6726L7.02425 16.9762L5.96359 18.0369L2.65995 14.7332L3.72061 13.6726ZM14.7328 2.66044L18.0364 5.96408L16.9757 7.02474L13.6721 3.7211L14.7328 2.66044ZM12.938 17.6698L11.8367 16.5686L12.8974 15.5079L13.9986 16.6092L12.938 17.6698ZM16.6087 13.9991L15.5075 12.8979L16.5681 11.8372L17.6693 12.9384L16.6087 13.9991ZM11.8367 16.5686L7.43188 12.1637L8.49254 11.1031L12.8974 15.5079L11.8367 16.5686ZM7.43188 12.1637L6.33067 11.0625L7.39133 10.0019L8.49254 11.1031L7.43188 12.1637ZM15.5075 12.8979L11.1026 8.49303L12.1633 7.43237L16.5681 11.8372L15.5075 12.8979ZM11.1026 8.49303L10.0014 7.39182L11.062 6.33116L12.1633 7.43237L11.1026 8.49303ZM19.5452 9.59425C19.0496 9.09862 19.0496 8.29506 19.5452 7.79944L20.6059 8.8601C20.6961 8.76994 20.6961 8.62375 20.6059 8.53359L19.5452 9.59425ZM8.5331 20.6064C8.62326 20.6966 8.76945 20.6966 8.85961 20.6064L7.79895 19.5457C8.29457 19.0501 9.09814 19.0501 9.59376 19.5457L8.5331 20.6064Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M12.3671 16.038L16.0378 12.3673M7.96227 11.6331L11.633 7.9624"
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
            d="M4.2915 15.3041L8.69636 19.709L9.06343 20.0761L9.79757 20.8102C10.4837 21.4963 10.8268 21.8394 11.2299 21.9474C11.4939 22.0182 11.7719 22.0182 12.036 21.9474C12.4391 21.8394 12.7821 21.4963 13.4683 20.8102C14.1544 20.1241 14.4975 19.781 14.6055 19.3779C14.6763 19.1139 14.6763 18.8358 14.6055 18.5718C14.4975 18.1687 14.1544 17.8256 13.4683 17.1395L12.3671 16.0383L7.96221 11.6334L6.861 10.5322C6.17486 9.84606 5.83179 9.50299 5.42871 9.39499C5.16466 9.32423 4.88662 9.32423 4.62257 9.39499C4.21949 9.50299 3.87642 9.84606 3.19028 10.5322C2.50414 11.2183 2.16107 11.5614 2.05306 11.9645C1.98231 12.2285 1.98231 12.5066 2.05306 12.7706C2.16107 13.1737 2.50414 13.5168 3.19028 14.2029L4.2915 15.3041ZM16.0378 12.3676L11.6329 7.9627L10.5317 6.86149C9.84557 6.17534 9.5025 5.83227 9.3945 5.4292C9.32374 5.16514 9.32374 4.88711 9.3945 4.62305C9.5025 4.21998 9.84557 3.87691 10.5317 3.19077C11.2179 2.50463 11.5609 2.16156 11.964 2.05355C12.2281 1.9828 12.5061 1.9828 12.7701 2.05355C13.1732 2.16156 13.5163 2.50463 14.2024 3.19077L15.3036 4.29198L19.7046 8.70076L20.0756 9.06392L20.8097 9.79806C21.4959 10.4842 21.8389 10.8273 21.9469 11.2303C22.0177 11.4944 22.0177 11.7724 21.9469 12.0365C21.8389 12.4396 21.4959 12.7826 20.8097 13.4688C20.1236 14.1549 19.7805 14.498 19.3774 14.606C19.1134 14.6767 18.8353 14.6767 18.5713 14.606C18.1682 14.498 17.8251 14.1549 17.139 13.4688L16.0378 12.3676Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M18.6077 3.92447L20.076 5.39275L20.2017 5.51858C20.8101 6.1285 21.1143 6.45787 21.1143 6.86104C21.1143 7.29109 20.7682 7.63717 20.076 8.32933L19.705 8.70031L15.3041 4.29154L15.6712 3.92447C16.3633 3.23231 16.7094 2.88623 17.1394 2.88623C17.5695 2.88623 17.9156 3.23231 18.6077 3.92447Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M5.39264 20.0761L3.92436 18.6078C3.2322 17.9157 2.88612 17.5696 2.88612 17.1396C2.88612 16.7095 3.2322 16.3634 3.92436 15.6713L4.29143 15.3042L8.69629 19.7091L8.32922 20.0761C7.63706 20.7683 7.29098 21.1144 6.86093 21.1144C6.43088 21.1144 6.0848 20.7683 5.39264 20.0761Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M16.0376 12.3673L12.3669 16.038L7.96202 11.6331L11.6327 7.9624L16.0376 12.3673Z"
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
            d="M3.92443 18.6078L5.39271 20.0761C6.08487 20.7682 6.43095 21.1143 6.861 21.1143C7.29105 21.1143 7.63713 20.7682 8.32928 20.0761L8.69636 19.709L9.06343 20.0761L9.79757 20.8102C10.4837 21.4963 10.8268 21.8394 11.2299 21.9474C11.4939 22.0182 11.7719 22.0182 12.036 21.9474C12.4391 21.8394 12.7821 21.4963 13.4683 20.8102C14.1544 20.1241 14.4975 19.781 14.6055 19.3779C14.6763 19.1139 14.6763 18.8358 14.6055 18.5718C14.4975 18.1687 14.1544 17.8256 13.4683 17.1395L12.3671 16.0383L16.0378 12.3676L17.139 13.4688C17.8251 14.1549 18.1682 14.498 18.5713 14.606C18.8353 14.6767 19.1134 14.6767 19.3774 14.606C19.7805 14.498 20.1236 14.1549 20.8097 13.4688C21.4959 12.7826 21.8389 12.4396 21.9469 12.0365C22.0177 11.7724 22.0177 11.4944 21.9469 11.2303C21.8389 10.8273 21.4959 10.4842 20.8097 9.79806L20.0756 9.06392L19.7046 8.70076L20.0756 8.32977C20.7677 7.63762 21.1138 7.29154 21.1138 6.86149C21.1138 6.43143 20.7677 6.08536 20.0756 5.3932L18.6073 3.92491C17.9151 3.23276 17.5691 2.88668 17.139 2.88668C16.709 2.88668 16.3629 3.23276 15.6707 3.92491L15.3036 4.29198L14.2024 3.19077C13.5163 2.50463 13.1732 2.16156 12.7701 2.05355C12.5061 1.9828 12.2281 1.9828 11.964 2.05355C11.5609 2.16156 11.2179 2.50463 10.5317 3.19077C9.84557 3.87691 9.5025 4.21998 9.3945 4.62305C9.32374 4.88711 9.32374 5.16514 9.3945 5.4292C9.5025 5.83227 9.84557 6.17534 10.5317 6.86149L11.6329 7.9627L7.96221 11.6334L6.861 10.5322C6.17486 9.84606 5.83179 9.50299 5.42871 9.39499C5.16466 9.32423 4.88662 9.32423 4.62257 9.39499C4.21949 9.50299 3.87642 9.84606 3.19028 10.5322C2.50414 11.2183 2.16107 11.5614 2.05306 11.9645C1.98231 12.2285 1.98231 12.5066 2.05306 12.7706C2.16107 13.1737 2.50414 13.5168 3.19028 14.2029L4.2915 15.3041L3.92443 15.6712C3.23227 16.3634 2.88619 16.7094 2.88619 17.1395C2.88619 17.5695 3.23227 17.9156 3.92443 18.6078Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDumbbellLarge as IconComponent).keywords = [
  "dumbbell",
  "large",
  "dope",
  "boob",
  "booby",
  "dummy",
  "pinhead",
  "jerk",
  "jackass",
  "arsehole",
  "sucker",
  "great",
  "large-scale",
  "vast",
  "larger-than-life",
  "colossal",
  "huge",
  "prodigious",
  "humongous",
  "massive",
];

export default IconDumbbellLarge as IconComponent;
