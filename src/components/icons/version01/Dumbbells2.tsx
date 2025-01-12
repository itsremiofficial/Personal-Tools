import { FC } from "react";

const IconDumbbells2: FC<IconProps> = ({
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
            d="M6.04444 7.08946L6.13403 6.34483L6.04444 7.08946ZM8.98501 7.44326L8.89542 8.18789L8.98501 7.44326ZM10.6234 10.9397L11.2606 11.3353L10.6234 10.9397ZM8.04442 11.4842L8.13401 10.7396C7.72846 10.6908 7.35843 10.9755 7.30169 11.38L8.04442 11.4842ZM9.72433 11.5809L9.54252 10.8533H9.54252L9.72433 11.5809ZM10.2683 7.70306L10.6208 7.0411L10.6208 7.0411L10.2683 7.70306ZM10.9606 8.53576L10.2405 8.74551V8.74551L10.9606 8.53576ZM3.83301 7.67818L3.19585 7.28255H3.19585L3.83301 7.67818ZM4.7321 7.03696L4.55029 6.30933L4.55029 6.30933L4.7321 7.03696ZM3.49581 10.0821L2.77574 10.2919L2.77574 10.2919L3.49581 10.0821ZM5.83899 11.2188L6.58172 11.323C6.6097 11.1235 6.55624 10.9211 6.43339 10.7615C6.31053 10.6018 6.1286 10.4983 5.92858 10.4742L5.83899 11.2188ZM4.18815 10.9148L4.54072 10.2528L4.54072 10.2528L4.18815 10.9148ZM6.95556 21.9115L6.86597 22.6561L6.95556 21.9115ZM4.01498 21.5577L4.10458 20.8131L4.01498 21.5577ZM9.44751 20.1343L10.1902 20.2385L9.44751 20.1343ZM9.16699 21.3228L8.52983 20.9272L8.52983 20.9272L9.16699 21.3228ZM8.2679 21.964L8.44971 22.6916L8.2679 21.964ZM7.16101 17.7821L6.41828 17.678C6.3903 17.8775 6.44376 18.0798 6.56661 18.2395C6.68947 18.3992 6.8714 18.5027 7.07142 18.5268L7.16101 17.7821ZM8.81185 18.0862L9.16441 17.4242L9.16441 17.4242L8.81185 18.0862ZM9.50419 18.9189L8.78412 19.1286V19.1286L9.50419 18.9189ZM2.09606 19.2498L2.83879 19.354L2.09606 19.2498ZM2.37658 18.0613L1.73942 17.6657H1.73942L2.37658 18.0613ZM4.95558 17.5168L4.86599 18.2614C5.27154 18.3102 5.64157 18.0255 5.69831 17.621L4.95558 17.5168ZM3.27567 17.4201L3.09386 16.6924H3.09386L3.27567 17.4201ZM2.03938 20.4652L1.31931 20.675L2.03938 20.4652ZM2.73172 21.2979L2.37916 21.9599H2.37916L2.73172 21.2979ZM5.95484 7.83409L8.89542 8.18789L9.07461 6.69863L6.13403 6.34483L5.95484 7.83409ZM10.1612 9.64701C10.1152 9.97514 10.0858 10.1812 10.0523 10.3363C10.0206 10.4834 9.99594 10.5285 9.98626 10.5441L11.2606 11.3353C11.3979 11.1141 11.469 10.8822 11.5186 10.6528C11.5663 10.4315 11.6037 10.1617 11.6467 9.85538L10.1612 9.64701ZM7.95483 12.2288C8.29282 12.2695 8.65913 12.3137 8.97751 12.338C9.2582 12.3594 9.62747 12.3782 9.90614 12.3085L9.54252 10.8533C9.55913 10.8491 9.53259 10.8568 9.43354 10.8574C9.34483 10.858 9.23047 10.8529 9.0915 10.8423C8.81237 10.821 8.48109 10.7813 8.13401 10.7396L7.95483 12.2288ZM9.98626 10.5441C9.89897 10.6846 9.7441 10.8029 9.54252 10.8533L9.90614 12.3085C10.4639 12.1692 10.9558 11.8262 11.2606 11.3353L9.98626 10.5441ZM8.89542 8.18789C9.24744 8.23025 9.47672 8.25819 9.65113 8.29048C9.82013 8.32177 9.88469 8.3485 9.91571 8.36503L10.6208 7.0411C10.3962 6.92146 10.1617 6.85951 9.92421 6.81554C9.69217 6.77258 9.40764 6.7387 9.07461 6.69863L8.89542 8.18789ZM11.6467 9.85538C11.6896 9.54912 11.7279 9.27935 11.7428 9.05384C11.7582 8.82073 11.7538 8.57694 11.6807 8.32601L10.2405 8.74551C10.2443 8.75828 10.256 8.80498 10.2461 8.95503C10.2357 9.1127 10.2072 9.3188 10.1612 9.64701L11.6467 9.85538ZM9.91571 8.36503C10.089 8.45733 10.198 8.59952 10.2405 8.74551L11.6807 8.32601C11.5184 7.76877 11.1293 7.31191 10.6208 7.0411L9.91571 8.36503ZM4.29522 8.97086C4.34125 8.64273 4.37063 8.43664 4.40411 8.28153C4.43585 8.13447 4.46049 8.0894 4.47017 8.07381L3.19585 7.28255C3.05851 7.50374 2.98739 7.73567 2.93788 7.96505C2.8901 8.18638 2.85273 8.45615 2.80976 8.7625L4.29522 8.97086ZM6.13403 6.34483C5.80093 6.30475 5.51659 6.27019 5.28055 6.25682C5.03852 6.24311 4.79676 6.24775 4.55029 6.30933L4.9139 7.76459C4.95216 7.75503 5.02405 7.7447 5.19574 7.75442C5.37342 7.76448 5.60289 7.79174 5.95484 7.83409L6.13403 6.34483ZM4.47017 8.07381C4.55746 7.93323 4.71233 7.81496 4.91391 7.76459L4.55029 6.30933C3.99257 6.44868 3.50061 6.79172 3.19585 7.28255L4.47017 8.07381ZM2.80976 8.7625C2.7668 9.06876 2.72849 9.33853 2.7136 9.56403C2.69821 9.79715 2.70264 10.0409 2.77574 10.2919L4.21588 9.87236C4.21216 9.85958 4.20044 9.81289 4.21034 9.66284C4.22075 9.50517 4.24918 9.29908 4.29522 8.97086L2.80976 8.7625ZM5.92858 10.4742C5.58147 10.4324 5.25027 10.3924 4.97461 10.347C4.83734 10.3243 4.7256 10.3022 4.64036 10.2808C4.54458 10.2567 4.52298 10.2434 4.54072 10.2528L3.83559 11.5768C4.08971 11.7121 4.4546 11.7815 4.73047 11.827C5.04504 11.8789 5.41143 11.9228 5.74939 11.9635L5.92858 10.4742ZM2.77574 10.2919C2.93806 10.8491 3.32713 11.306 3.83559 11.5768L4.54072 10.2528C4.36742 10.1605 4.25841 10.0184 4.21588 9.87236L2.77574 10.2919ZM7.04516 21.1669L4.10458 20.8131L3.92539 22.3023L6.86597 22.6561L7.04516 21.1669ZM8.70478 20.0301C8.65875 20.3582 8.62937 20.5643 8.59589 20.7194C8.56415 20.8665 8.53951 20.9116 8.52983 20.9272L9.80415 21.7184C9.94149 21.4972 10.0126 21.2653 10.0621 21.0359C10.1099 20.8146 10.1473 20.5448 10.1902 20.2385L8.70478 20.0301ZM6.86597 22.6561C7.19907 22.6962 7.48341 22.7308 7.71946 22.7442C7.96149 22.7579 8.20324 22.7532 8.44971 22.6916L8.08609 21.2364C8.04783 21.2459 7.97595 21.2563 7.80426 21.2466C7.62658 21.2365 7.39712 21.2092 7.04516 21.1669L6.86597 22.6561ZM8.52983 20.9272C8.44254 21.0677 8.28767 21.186 8.08609 21.2364L8.44971 22.6916C9.00743 22.5523 9.49939 22.2093 9.80415 21.7184L8.52983 20.9272ZM7.07142 18.5268C7.41853 18.5685 7.74973 18.6085 8.02539 18.654C8.16266 18.6766 8.2744 18.6988 8.35964 18.7202C8.45542 18.7443 8.47702 18.7576 8.45928 18.7481L9.16441 17.4242C8.91029 17.2889 8.5454 17.2195 8.26953 17.174C7.95496 17.1221 7.58857 17.0782 7.25061 17.0375L7.07142 18.5268ZM10.1902 20.2385C10.2332 19.9322 10.2715 19.6624 10.2864 19.4369C10.3018 19.2038 10.2974 18.96 10.2243 18.7091L8.78412 19.1286C8.78784 19.1414 8.79956 19.1881 8.78966 19.3381C8.77925 19.4958 8.75082 19.7019 8.70478 20.0301L10.1902 20.2385ZM8.45928 18.7481C8.63258 18.8404 8.74159 18.9826 8.78412 19.1286L10.2243 18.7091C10.0619 18.1519 9.67287 17.695 9.16441 17.4242L8.45928 18.7481ZM2.83879 19.354C2.88482 19.0258 2.9142 18.8197 2.94768 18.6646C2.97942 18.5176 3.00406 18.4725 3.01374 18.4569L1.73942 17.6657C1.60208 17.8868 1.53096 18.1188 1.48145 18.3482C1.43367 18.5695 1.3963 18.8393 1.35333 19.1456L2.83879 19.354ZM5.04517 16.7722C4.70718 16.7315 4.34087 16.6873 4.0225 16.663C3.7418 16.6416 3.37253 16.6228 3.09386 16.6924L3.45747 18.1477C3.44087 18.1518 3.46741 18.1442 3.56646 18.1436C3.65517 18.143 3.76953 18.1481 3.9085 18.1587C4.18763 18.1799 4.51891 18.2197 4.86599 18.2614L5.04517 16.7722ZM3.01374 18.4569C3.10103 18.3163 3.2559 18.1981 3.45747 18.1477L3.09386 16.6924C2.53614 16.8318 2.04418 17.1748 1.73942 17.6657L3.01374 18.4569ZM1.35333 19.1456C1.31037 19.4519 1.27206 19.7216 1.25717 19.9471C1.24178 20.1803 1.24621 20.424 1.31931 20.675L2.75945 20.2555C2.75573 20.2427 2.74401 20.196 2.75391 20.0459C2.76432 19.8883 2.79275 19.6822 2.83879 19.354L1.35333 19.1456ZM4.10458 20.8131C3.75255 20.7707 3.52327 20.7428 3.34887 20.7105C3.17987 20.6792 3.11532 20.6525 3.08429 20.6359L2.37916 21.9599C2.60379 22.0795 2.83833 22.1415 3.07578 22.1854C3.30783 22.2284 3.59235 22.2623 3.92539 22.3023L4.10458 20.8131ZM1.31931 20.675C1.48163 21.2322 1.8707 21.6891 2.37916 21.9599L3.08429 20.6359C2.91099 20.5436 2.80198 20.4015 2.75945 20.2555L1.31931 20.675ZM5.69831 17.621L6.58172 11.323L5.09626 11.1147L4.21285 17.4126L5.69831 17.621ZM7.30169 11.38L6.41828 17.678L7.90374 17.8863L8.78715 11.5884L7.30169 11.38Z"
            fill="currentColor"
          />
          <path
            d="M17.5741 16.7831L17.3868 16.0569H17.3868L17.5741 16.7831ZM20.2855 16.0838L20.4728 16.81L20.2855 16.0838ZM21.3504 12.4764L21.9368 12.0089L21.9368 12.0089L21.3504 12.4764ZM18.8568 12.2561L18.1343 12.4572C18.2439 12.8509 18.6484 13.0844 19.0441 12.9823L18.8568 12.2561ZM20.4201 11.9594L20.5144 11.2153H20.5144L20.4201 11.9594ZM21.4545 15.6758L21.9001 16.279H21.9001L21.4545 15.6758ZM21.9916 14.7802L22.7347 14.8819V14.8819L21.9916 14.7802ZM15.4195 16.4754L14.833 16.9429H14.833L15.4195 16.4754ZM16.3498 16.9924L16.2555 17.7365L16.3498 16.9924ZM14.7782 14.1716L14.0351 14.0699L14.0351 14.0699L14.7782 14.1716ZM16.8233 12.7806L17.0106 13.5069C17.2056 13.4566 17.3722 13.3299 17.4728 13.1555C17.5735 12.9811 17.5998 12.7735 17.5458 12.5795L16.8233 12.7806ZM15.3153 13.276L14.8697 12.6728L14.8697 12.6728L15.3153 13.276ZM16.4259 2.21785L16.6132 2.94408L16.4259 2.21785ZM13.7145 2.91721L13.5272 2.19098L13.7145 2.91721ZM19.0043 3.65087L18.2818 3.85199L19.0043 3.65087ZM18.5805 2.52556L17.994 2.99305L18.5805 2.52556ZM17.6502 2.00853L17.7445 1.26448L17.7445 1.26448L17.6502 2.00853ZM17.1767 6.22035L16.9894 5.49412C16.7944 5.54442 16.6278 5.67103 16.5272 5.84545C16.4265 6.01988 16.4002 6.22746 16.4542 6.42147L17.1767 6.22035ZM18.6847 5.72493L19.1303 6.32821L18.6847 5.72493ZM19.2218 4.82941L18.4787 4.72778V4.72778L19.2218 4.82941ZM12.2258 5.39927L11.5033 5.60039L12.2258 5.39927ZM12.6496 6.52458L13.2361 6.05709L12.6496 6.52458ZM15.1432 6.74487L15.8657 6.54375C15.7561 6.15008 15.3516 5.91658 14.9559 6.01864L15.1432 6.74487ZM13.5799 7.04161L13.6742 6.29756H13.6742L13.5799 7.04161ZM12.0084 4.22073L12.7514 4.32236L12.0084 4.22073ZM12.5455 3.32521L12.0999 2.72194L12.0999 2.72194L12.5455 3.32521ZM17.7614 17.5094L20.4728 16.81L20.0982 15.3575L17.3868 16.0569L17.7614 17.5094ZM22.4967 13.4006C22.4149 13.1067 22.3436 12.8489 22.2692 12.6396C22.1922 12.4232 22.0948 12.2071 21.9368 12.0089L20.7639 12.9439C20.7758 12.9589 20.8058 13.0014 20.8559 13.1423C20.9086 13.2904 20.9642 13.4886 21.0517 13.8028L22.4967 13.4006ZM19.0441 12.9823C19.3646 12.8997 19.6684 12.8215 19.9256 12.7675C20.0536 12.7406 20.1581 12.7223 20.2387 12.7125C20.3298 12.7014 20.3494 12.7064 20.3258 12.7034L20.5144 11.2153C20.2314 11.1795 19.8767 11.2451 19.6174 11.2995C19.3201 11.3619 18.9807 11.4496 18.6695 11.5299L19.0441 12.9823ZM21.9368 12.0089C21.5853 11.5679 21.0722 11.286 20.5144 11.2153L20.3258 12.7034C20.506 12.7263 20.6622 12.8163 20.7639 12.9439L21.9368 12.0089ZM20.4728 16.81C20.779 16.731 21.044 16.6631 21.2587 16.5923C21.479 16.5197 21.6981 16.4283 21.9001 16.279L21.0089 15.0725C20.9895 15.0868 20.9399 15.118 20.7891 15.1677C20.6325 15.2193 20.4237 15.2736 20.0982 15.3575L20.4728 16.81ZM21.0517 13.8028C21.1391 14.1171 21.1939 14.3155 21.2252 14.4688C21.255 14.6153 21.2505 14.6642 21.2486 14.6786L22.7347 14.8819C22.7692 14.6298 22.7406 14.3935 22.695 14.1693C22.6507 13.9521 22.5785 13.6944 22.4967 13.4006L21.0517 13.8028ZM21.9001 16.279C22.3539 15.9439 22.658 15.443 22.7347 14.8819L21.2486 14.6786C21.2281 14.828 21.1459 14.9714 21.0089 15.0725L21.9001 16.279ZM14.2731 15.5512C14.3549 15.8451 14.4262 16.1029 14.5007 16.3122C14.5777 16.5286 14.675 16.7447 14.833 16.9429L16.006 16.0079C15.994 15.9929 15.9641 15.9504 15.9139 15.8095C15.8613 15.6614 15.8057 15.4632 15.7182 15.149L14.2731 15.5512ZM17.3868 16.0569C17.0614 16.1408 16.8523 16.1944 16.6897 16.2251C16.5336 16.2545 16.4723 16.252 16.4441 16.2484L16.2555 17.7365C16.5041 17.768 16.7392 17.7422 16.968 17.699C17.1905 17.657 17.4552 17.5884 17.7614 17.5094L17.3868 16.0569ZM14.833 16.9429C15.1845 17.3839 15.6977 17.6658 16.2555 17.7365L16.4441 16.2484C16.2638 16.2256 16.1077 16.1355 16.006 16.0079L14.833 16.9429ZM15.7182 15.149C15.6307 14.8347 15.576 14.6363 15.5447 14.483C15.5148 14.3365 15.5193 14.2876 15.5213 14.2732L14.0351 14.0699C14.0007 14.322 14.0292 14.5583 14.0749 14.7825C14.1192 14.9997 14.1914 15.2574 14.2731 15.5512L15.7182 15.149ZM16.6359 12.0544C16.3247 12.1347 15.9852 12.2221 15.6953 12.3111C15.5497 12.3559 15.4048 12.4045 15.2745 12.4572C15.1545 12.5057 15.0021 12.575 14.8697 12.6728L15.7609 13.8793C15.7393 13.8953 15.7518 13.8822 15.8366 13.8479C15.9111 13.8178 16.0109 13.7833 16.1357 13.745C16.3864 13.668 16.6901 13.5895 17.0106 13.5069L16.6359 12.0544ZM15.5213 14.2732C15.5417 14.1238 15.624 13.9804 15.7609 13.8793L14.8697 12.6728C14.416 13.0079 14.1119 13.5088 14.0351 14.0699L15.5213 14.2732ZM16.2386 1.49162L13.5272 2.19098L13.9018 3.64344L16.6132 2.94408L16.2386 1.49162ZM19.7269 3.44975C19.6451 3.15589 19.5738 2.89808 19.4993 2.68877C19.4223 2.47238 19.325 2.25629 19.167 2.05807L17.994 2.99305C18.006 3.00804 18.0359 3.05057 18.0861 3.19152C18.1387 3.33954 18.1943 3.53778 18.2818 3.85199L19.7269 3.44975ZM16.6132 2.94408C16.9386 2.86014 17.1477 2.80661 17.3103 2.77592C17.4664 2.74643 17.5277 2.749 17.5559 2.75258L17.7445 1.26448C17.4959 1.23298 17.2608 1.25875 17.032 1.30196C16.8095 1.34395 16.5448 1.41262 16.2386 1.49162L16.6132 2.94408ZM19.167 2.05807C18.8155 1.6171 18.3023 1.33518 17.7445 1.26448L17.5559 2.75258C17.7362 2.77543 17.8923 2.86547 17.994 2.99305L19.167 2.05807ZM17.3641 6.94658C17.6753 6.86631 18.0148 6.77891 18.3047 6.68983C18.4503 6.64512 18.5952 6.59645 18.7255 6.54381C18.8455 6.49531 18.9979 6.42598 19.1303 6.32821L18.2391 5.12166C18.2607 5.10569 18.2482 5.11882 18.1634 5.15309C18.0889 5.18322 17.9891 5.21763 17.8643 5.25595C17.6136 5.33296 17.3099 5.41146 16.9894 5.49412L17.3641 6.94658ZM18.2818 3.85199C18.3693 4.16627 18.424 4.36462 18.4553 4.51798C18.4852 4.66451 18.4807 4.71337 18.4787 4.72778L19.9649 4.93104C19.9993 4.67901 19.9708 4.44263 19.9251 4.21851C19.8808 4.00122 19.8086 3.74353 19.7269 3.44975L18.2818 3.85199ZM19.1303 6.32821C19.584 5.99308 19.8881 5.49213 19.9649 4.93104L18.4787 4.72778C18.4583 4.87721 18.376 5.02053 18.2391 5.12166L19.1303 6.32821ZM11.5033 5.60039C11.5851 5.89425 11.6564 6.15206 11.7308 6.36137C11.8078 6.57777 11.9052 6.79385 12.0632 6.99207L13.2361 6.05709C13.2242 6.0421 13.1942 5.99957 13.1441 5.85863C13.0914 5.7106 13.0358 5.51236 12.9483 5.19815L11.5033 5.60039ZM14.9559 6.01864C14.6354 6.1013 14.3316 6.1795 14.0744 6.23349C13.9464 6.26036 13.8419 6.27864 13.7613 6.28848C13.6702 6.29959 13.6506 6.29456 13.6742 6.29756L13.4856 7.78566C13.7686 7.82152 14.1233 7.75592 14.3826 7.7015C14.6799 7.63908 15.0193 7.55138 15.3305 7.4711L14.9559 6.01864ZM12.0632 6.99207C12.4147 7.43305 12.9278 7.71496 13.4856 7.78566L13.6742 6.29756C13.494 6.27472 13.3378 6.18467 13.2361 6.05709L12.0632 6.99207ZM12.9483 5.19815C12.8609 4.88387 12.8061 4.68551 12.7748 4.53216C12.745 4.38563 12.7495 4.33677 12.7514 4.32236L11.2653 4.1191C11.2308 4.37113 11.2594 4.60751 11.305 4.83163C11.3493 5.04892 11.4215 5.30661 11.5033 5.60039L12.9483 5.19815ZM13.5272 2.19098C13.221 2.26996 12.956 2.33792 12.7413 2.40866C12.521 2.48129 12.3019 2.57268 12.0999 2.72194L12.9911 3.92848C13.0105 3.91413 13.0601 3.88299 13.2109 3.83326C13.3675 3.78164 13.5763 3.7274 13.9018 3.64344L13.5272 2.19098ZM12.7514 4.32236C12.7719 4.17293 12.8541 4.02962 12.9911 3.92848L12.0999 2.72194C11.6461 3.05707 11.342 3.55801 11.2653 4.1191L12.7514 4.32236ZM14.4206 6.94599L16.1007 12.9817L17.5458 12.5795L15.8657 6.54375L14.4206 6.94599ZM19.5794 12.055L17.8993 6.01923L16.4542 6.42147L18.1343 12.4572L19.5794 12.055Z"
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
            d="M8.98501 7.44326L6.04444 7.08946C5.35938 7.00703 5.01683 6.96582 4.7321 7.03696C4.35245 7.13182 4.02904 7.36247 3.83301 7.67818C3.68599 7.91496 3.64149 8.2322 3.55249 8.86668C3.46349 9.50116 3.41899 9.8184 3.49581 10.0821C3.59824 10.4337 3.84728 10.7333 4.18815 10.9148C4.44381 11.051 5.15392 11.1364 5.83899 11.2188L4.95558 17.5168C4.27051 17.4344 3.5604 17.3489 3.27567 17.4201C2.89602 17.5149 2.57261 17.7456 2.37658 18.0613C2.22956 18.2981 2.18506 18.6153 2.09606 19.2498C2.00706 19.8843 1.96256 20.2015 2.03938 20.4652C2.1418 20.8168 2.39085 21.1164 2.73172 21.2979C2.98738 21.4341 3.32992 21.4753 4.01498 21.5577L6.95556 21.9115C7.64063 21.9939 7.98317 22.0352 8.2679 21.964C8.64755 21.8692 8.97096 21.6385 9.16699 21.3228C9.31401 21.086 9.35851 20.7688 9.44751 20.1343C9.53651 19.4998 9.58101 19.1826 9.50419 18.9189C9.40176 18.5673 9.15272 18.2677 8.81185 18.0862C8.55619 17.95 7.84608 17.8646 7.16101 17.7821L8.04442 11.4842C8.72949 11.5666 9.4396 11.6521 9.72433 11.5809C10.104 11.4861 10.4274 11.2554 10.6234 10.9397C10.7704 10.7029 10.8149 10.3857 10.9039 9.75119C10.9929 9.11672 11.0374 8.79947 10.9606 8.53576C10.8582 8.18415 10.6092 7.88462 10.2683 7.70306C10.0126 7.5669 9.67007 7.52569 8.98501 7.44326Z"
            fill="currentColor"
          />
          <path
            d="M20.2855 16.0838L17.5741 16.7831C16.9424 16.9461 16.6266 17.0275 16.3498 16.9924C15.9807 16.9457 15.6461 16.7597 15.4195 16.4754C15.2496 16.2622 15.1649 15.9582 14.9957 15.3501C14.8264 14.742 14.7418 14.438 14.7782 14.1716C14.8268 13.8163 15.02 13.4942 15.3153 13.276C15.5368 13.1124 16.1916 12.9436 16.8233 12.7806L15.1432 6.74487C14.5115 6.9078 13.8567 7.07669 13.5799 7.04161C13.2109 6.99484 12.8762 6.80886 12.6496 6.52458C12.4797 6.31137 12.3951 6.00734 12.2258 5.39927C12.0565 4.79121 11.9719 4.48717 12.0084 4.22073C12.0569 3.86547 12.2501 3.54334 12.5455 3.32521C12.767 3.16161 13.0828 3.08014 13.7145 2.91721L16.4259 2.21785C17.0576 2.05492 17.3734 1.97345 17.6502 2.00853C18.0193 2.0553 18.3539 2.24128 18.5805 2.52556C18.7504 2.73877 18.8351 3.04281 19.0043 3.65087C19.1736 4.25893 19.2582 4.56297 19.2218 4.82941C19.1732 5.18467 18.98 5.5068 18.6847 5.72493C18.4632 5.88853 17.8084 6.05742 17.1767 6.22035L18.8568 12.2561C19.4885 12.0932 20.1433 11.9243 20.4201 11.9594C20.7891 12.0061 21.1238 12.1921 21.3504 12.4764C21.5203 12.6896 21.6049 12.9936 21.7742 13.6017C21.9435 14.2098 22.0281 14.5138 21.9916 14.7802C21.9431 15.1355 21.7499 15.4576 21.4545 15.6758C21.233 15.8394 20.9172 15.9208 20.2855 16.0838Z"
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
            d="M8.98501 7.44326L6.04444 7.08946C5.35938 7.00703 5.01683 6.96582 4.7321 7.03696C4.35245 7.13182 4.02904 7.36247 3.83301 7.67818C3.68599 7.91496 3.64149 8.2322 3.55249 8.86668C3.46349 9.50116 3.41899 9.8184 3.49581 10.0821C3.59824 10.4337 3.84728 10.7333 4.18815 10.9148C4.44381 11.051 5.15392 11.1364 5.83899 11.2188L4.95558 17.5168C4.27051 17.4344 3.5604 17.3489 3.27567 17.4201C2.89602 17.5149 2.57261 17.7456 2.37658 18.0613C2.22956 18.2981 2.18506 18.6153 2.09606 19.2498C2.00706 19.8843 1.96256 20.2015 2.03938 20.4652C2.1418 20.8168 2.39085 21.1164 2.73172 21.2979C2.98738 21.4341 3.32992 21.4753 4.01498 21.5577L6.95556 21.9115C7.64063 21.9939 7.98317 22.0352 8.2679 21.964C8.64755 21.8692 8.97096 21.6385 9.16699 21.3228C9.31401 21.086 9.35851 20.7688 9.44751 20.1343C9.53651 19.4998 9.58101 19.1826 9.50419 18.9189C9.40176 18.5673 9.15272 18.2677 8.81185 18.0862C8.55619 17.95 7.84608 17.8646 7.16101 17.7821L8.04442 11.4842C8.72949 11.5666 9.4396 11.6521 9.72433 11.5809C10.104 11.4861 10.4274 11.2554 10.6234 10.9397C10.7704 10.7029 10.8149 10.3857 10.9039 9.75119C10.9929 9.11672 11.0374 8.79947 10.9606 8.53576C10.8582 8.18415 10.6092 7.88462 10.2683 7.70306C10.0126 7.5669 9.67007 7.52569 8.98501 7.44326Z"
            fill="currentColor"
          />
          <path
            d="M20.2855 16.0838L17.5741 16.7831C16.9424 16.9461 16.6266 17.0275 16.3498 16.9924C15.9807 16.9457 15.6461 16.7597 15.4195 16.4754C15.2496 16.2622 15.1649 15.9582 14.9957 15.3501C14.8264 14.742 14.7418 14.438 14.7782 14.1716C14.8268 13.8163 15.02 13.4942 15.3153 13.276C15.5368 13.1124 16.1916 12.9436 16.8233 12.7806L15.1432 6.74487C14.5115 6.9078 13.8567 7.07669 13.5799 7.04161C13.2109 6.99484 12.8762 6.80886 12.6496 6.52458C12.4797 6.31137 12.3951 6.00734 12.2258 5.39927C12.0565 4.79121 11.9719 4.48717 12.0084 4.22073C12.0569 3.86547 12.2501 3.54334 12.5455 3.32521C12.767 3.16161 13.0828 3.08014 13.7145 2.91721L16.4259 2.21785C17.0576 2.05492 17.3734 1.97345 17.6502 2.00853C18.0193 2.0553 18.3539 2.24128 18.5805 2.52556C18.7504 2.73877 18.8351 3.04281 19.0043 3.65087C19.1736 4.25893 19.2582 4.56297 19.2218 4.82941C19.1732 5.18467 18.98 5.5068 18.6847 5.72493C18.4632 5.88853 17.8084 6.05742 17.1767 6.22035L18.8568 12.2561C19.4885 12.0932 20.1433 11.9243 20.4201 11.9594C20.7891 12.0061 21.1238 12.1921 21.3504 12.4764C21.5203 12.6896 21.6049 12.9936 21.7742 13.6017C21.9435 14.2098 22.0281 14.5138 21.9916 14.7802C21.9431 15.1355 21.7499 15.4576 21.4545 15.6758C21.233 15.8394 20.9172 15.9208 20.2855 16.0838Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

// Keywords for search and categorization
(IconDumbbells2 as IconComponent).keywords = [
  "dumbbells",
  "2",
  "dope",
  "boob",
  "booby",
  "dummy",
  "pinhead",
  "grasp",
  "dumbell",
  "barbells",
  "barbell",
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

export default IconDumbbells2 as IconComponent;
