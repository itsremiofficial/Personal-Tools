import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconHiking: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11.5" cy="4.50049" r="2.5" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M9 17.5005L6 22.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M10.3754 11.2466L11.1217 11.3212L10.3754 11.2466ZM10.2132 12.8683L10.9595 12.9429L10.2132 12.8683ZM14.003 11.3363L13.5229 11.9124L13.5229 11.9124L14.003 11.3363ZM14.0844 11.4041L14.5645 10.8279L14.5645 10.8279L14.0844 11.4041ZM17.9157 11.4041L17.4355 10.8279L17.9157 11.4041ZM19.4802 11.0766C19.7984 10.8114 19.8414 10.3385 19.5762 10.0203C19.311 9.70208 18.8381 9.65909 18.5199 9.92426L19.4802 11.0766ZM14.2282 20.0645L14.9752 19.9981L14.2282 20.0645ZM13.6534 22.0669C13.6901 22.4795 14.0543 22.7842 14.4669 22.7475C14.8795 22.7108 15.1842 22.3465 15.1475 21.934L13.6534 22.0669ZM15.3142 12.2757L15.057 12.9803L15.057 12.9803L15.3142 12.2757ZM16.6859 12.2757L16.9431 12.9803L16.9431 12.9803L16.6859 12.2757ZM12.0937 10.2426L11.9136 10.9707L11.9136 10.9707L12.0937 10.2426ZM12.2424 10.2988L11.9998 11.0085L11.9998 11.0085L12.2424 10.2988ZM13.4813 10.926L13.9097 10.3104L13.9097 10.3104L13.4813 10.926ZM11.8171 16.1361L12.2146 15.5001L11.8171 16.1361ZM13.4812 17.3722L12.8969 17.8425H12.8969L13.4812 17.3722ZM13.8794 18.0211L13.1956 18.3292L13.1956 18.3292L13.8794 18.0211ZM10.2049 14.5599L9.48906 14.7837H9.48906L10.2049 14.5599ZM10.4738 15.1079L9.85886 15.5372L9.85886 15.5372L10.4738 15.1079ZM10.4855 10.6844L11.1677 10.9961L10.4855 10.6844ZM11.3087 10.1037L11.244 9.35649L11.3087 10.1037ZM9.62912 11.172L9.46695 12.7937L10.9595 12.9429L11.1217 11.3212L9.62912 11.172ZM13.5229 11.9124L13.6042 11.9802L14.5645 10.8279L14.4831 10.7601L13.5229 11.9124ZM18.3958 11.9802L19.4802 11.0766L18.5199 9.92426L17.4355 10.8279L18.3958 11.9802ZM13.4811 20.131L13.6534 22.0669L15.1475 21.934L14.9752 19.9981L13.4811 20.131ZM13.6042 11.9802C14.1593 12.4428 14.5771 12.8051 15.057 12.9803L15.5714 11.5712C15.3971 11.5076 15.2131 11.3684 14.5645 10.8279L13.6042 11.9802ZM17.4355 10.8279C16.787 11.3684 16.6029 11.5076 16.4287 11.5712L16.9431 12.9803C17.423 12.8051 17.8407 12.4428 18.3958 11.9802L17.4355 10.8279ZM15.057 12.9803C15.666 13.2026 16.334 13.2026 16.9431 12.9803L16.4287 11.5712C16.1518 11.6723 15.8482 11.6723 15.5714 11.5712L15.057 12.9803ZM11.9136 10.9707C11.9148 10.971 11.9156 10.9712 11.9163 10.9714C11.917 10.9715 11.9171 10.9716 11.9169 10.9715C11.9168 10.9715 11.9158 10.9712 11.9141 10.9708C11.9127 10.9704 11.9091 10.9695 11.9045 10.9682C11.9006 10.9672 11.8907 10.9644 11.8781 10.9605C11.8715 10.9584 11.8616 10.9552 11.8496 10.9509C11.8385 10.9469 11.8195 10.9398 11.7966 10.9295C11.7847 10.9241 11.7694 10.9169 11.7519 10.9076C11.7348 10.8985 11.7116 10.8853 11.6852 10.8676C11.6597 10.8504 11.6235 10.8238 11.5844 10.7863C11.5462 10.7495 11.4931 10.6908 11.4471 10.6074C11.3992 10.5204 11.358 10.4043 11.3543 10.2657C11.3525 10.1979 11.3599 10.1317 11.3751 10.0688C11.3903 10.0063 11.4122 9.95088 11.4367 9.9031C11.4847 9.8096 11.5429 9.74431 11.5854 9.70367C11.6284 9.66252 11.6683 9.63416 11.6953 9.61662C11.7231 9.59852 11.7473 9.58547 11.7638 9.57706C11.7808 9.56843 11.7951 9.56197 11.8048 9.55776C11.8225 9.55003 11.837 9.54461 11.838 9.54426C11.8443 9.54184 11.8355 9.54517 11.8311 9.5469C11.8241 9.54961 11.8106 9.55501 11.7938 9.56262C11.7771 9.57019 11.7531 9.58181 11.7252 9.59805C11.6977 9.61413 11.6611 9.63786 11.6214 9.67109C11.5817 9.7044 11.534 9.75144 11.4893 9.81505C11.4437 9.88005 11.4028 9.96038 11.3779 10.0551C11.3528 10.1505 11.3478 10.2455 11.3584 10.3344C11.3687 10.4214 11.3928 10.4948 11.4184 10.5522C11.4439 10.6091 11.4726 10.6544 11.497 10.6879C11.5216 10.7217 11.5454 10.7486 11.565 10.7687C11.6029 10.8078 11.6376 10.8351 11.6592 10.851C11.6822 10.8679 11.7023 10.8807 11.7165 10.8893C11.7441 10.9061 11.7676 10.9179 11.7808 10.9243C11.7955 10.9314 11.8084 10.9372 11.8181 10.9414C11.8372 10.9496 11.8557 10.9569 11.8716 10.9629C11.9036 10.9751 11.9453 10.9899 11.9998 11.0085L12.4849 9.58911C12.4367 9.57264 12.4131 9.56404 12.404 9.56056C12.3992 9.55874 12.4031 9.56012 12.4119 9.56392C12.4165 9.56588 12.4253 9.56977 12.4367 9.57533C12.4467 9.5802 12.4679 9.59073 12.4938 9.60647C12.5072 9.61457 12.5266 9.6269 12.549 9.64344C12.5701 9.65894 12.6044 9.68588 12.642 9.72465C12.6763 9.76 12.7394 9.83174 12.788 9.94037C12.8136 9.99769 12.8376 10.071 12.8479 10.1579C12.8585 10.2467 12.8535 10.3416 12.8285 10.4369C12.7774 10.6308 12.6637 10.7547 12.5852 10.8205C12.5104 10.8832 12.4409 10.9162 12.4133 10.9287C12.3858 10.9412 12.3565 10.9518 12.3696 10.9469C12.3706 10.9465 12.3852 10.9411 12.403 10.9333C12.4175 10.927 12.4614 10.9077 12.5127 10.8743C12.5397 10.8568 12.5796 10.8284 12.6226 10.7873C12.6651 10.7466 12.7233 10.6813 12.7713 10.5878C12.8219 10.4892 12.8575 10.3653 12.8537 10.2251C12.85 10.0866 12.8088 9.97039 12.7609 9.88341C12.7149 9.79999 12.6618 9.74125 12.6235 9.70448C12.5845 9.66695 12.5482 9.64031 12.5227 9.6231C12.4735 9.58999 12.431 9.57005 12.4111 9.5611C12.3703 9.54278 12.3368 9.5323 12.3286 9.52973C12.3156 9.52562 12.3051 9.52273 12.3005 9.52147C12.2912 9.51893 12.2832 9.51694 12.2817 9.51654C12.2788 9.51583 12.2757 9.51505 12.2738 9.51458L11.9136 10.9707ZM14.4831 10.7601C14.2567 10.5714 14.1185 10.4557 13.9097 10.3104L13.0529 11.5416C13.2006 11.6444 13.2914 11.7195 13.5229 11.9124L14.4831 10.7601ZM11.9998 11.0085C12.2966 11.1099 12.7954 11.3625 13.0529 11.5416L13.9097 10.3104C13.5377 10.0515 12.9137 9.73567 12.4849 9.58911L11.9998 11.0085ZM11.4196 16.7721C12.362 17.3611 12.6774 17.5697 12.8969 17.8425L14.0654 16.9019C13.6498 16.3856 13.0675 16.0332 12.2146 15.5001L11.4196 16.7721ZM14.9752 19.9981C14.8861 18.9962 14.8355 18.3174 14.5633 17.7131L13.1956 18.3292C13.3394 18.6484 13.3826 19.024 13.4811 20.131L14.9752 19.9981ZM12.8969 17.8425C13.0167 17.9913 13.1171 18.1549 13.1956 18.3292L14.5633 17.7131C14.4324 17.4227 14.2651 17.1501 14.0654 16.9019L12.8969 17.8425ZM9.46695 12.7937C9.38682 13.595 9.31061 14.2131 9.48906 14.7837L10.9207 14.3361C10.8555 14.1274 10.8661 13.8775 10.9595 12.9429L9.46695 12.7937ZM12.2146 15.5001C11.4181 15.0023 11.2139 14.8578 11.0888 14.6785L9.85886 15.5372C10.2011 16.0275 10.7366 16.3453 11.4196 16.7721L12.2146 15.5001ZM9.48906 14.7837C9.57305 15.0523 9.69777 15.3064 9.85886 15.5372L11.0888 14.6785C11.0156 14.5737 10.9589 14.4582 10.9207 14.3361L9.48906 14.7837ZM11.1217 11.3212C11.1364 11.1742 11.1439 11.1033 11.1534 11.05C11.1602 11.0118 11.1646 11.0027 11.1677 10.9961L9.80333 10.3727C9.67273 10.6585 9.65338 10.9293 9.62912 11.172L11.1217 11.3212ZM12.2738 9.51458C12.0751 9.46545 11.8976 9.42127 11.7495 9.39288C11.5998 9.36419 11.428 9.34055 11.244 9.35649L11.3735 10.8509C11.3548 10.8525 11.369 10.8473 11.4671 10.8661C11.5669 10.8852 11.6991 10.9176 11.9136 10.9707L12.2738 9.51458ZM11.1677 10.9961C11.1606 11.0115 11.1607 11.0052 11.1811 10.9826C11.2001 10.9616 11.228 10.9363 11.2625 10.912C11.297 10.8877 11.3301 10.8699 11.3563 10.859C11.3844 10.8474 11.3904 10.8494 11.3735 10.8509L11.244 9.35649C10.9178 9.38475 10.6187 9.5305 10.3979 9.68625C10.1771 9.842 9.93939 10.0749 9.80333 10.3727L11.1677 10.9961Z" fill="currentColor" /><path d="M19 22.0005V8.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M8 10.0005L6.328 10.5578C5.53493 10.8222 5 11.5644 5 12.4003C5 12.7681 5.20781 13.1044 5.5368 13.2689L8 14.5005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.50049C14 5.8812 12.8807 7.00049 11.5 7.00049C10.1193 7.00049 9 5.8812 9 4.50049C9 3.11978 10.1193 2.00049 11.5 2.00049C12.8807 2.00049 14 3.11978 14 4.50049Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M19 7.25049C19.4142 7.25049 19.75 7.58627 19.75 8.00049V10.4948C19.75 10.4983 19.75 10.5019 19.75 10.5054V22.0005C19.75 22.4147 19.4142 22.7505 19 22.7505C18.5858 22.7505 18.25 22.4147 18.25 22.0005V12.1019C17.7655 12.5062 17.38 12.8208 16.9431 12.9803C16.334 13.2027 15.666 13.2027 15.0569 12.9803C14.6042 12.815 14.2068 12.4833 13.6972 12.0579C13.6666 12.0323 13.6356 12.0065 13.6042 11.9803L13.5229 11.9125C13.2914 11.7196 13.2006 11.6444 13.0529 11.5417C12.7954 11.3625 12.2966 11.11 11.9998 11.0086C11.9453 10.9899 11.9036 10.9751 11.8715 10.9629C11.8657 10.9607 11.8595 10.9583 11.853 10.9558C11.6736 10.9115 11.5571 10.8834 11.4671 10.8661C11.4166 10.8564 11.3884 10.8531 11.3754 10.852C11.3709 10.8534 11.3646 10.8556 11.3563 10.8591C11.3301 10.87 11.297 10.8877 11.2625 10.9121C11.228 10.9364 11.2001 10.9616 11.1811 10.9827C11.1722 10.9925 11.1672 10.9992 11.1649 11.0024C11.1621 11.0096 11.1583 11.022 11.1534 11.0501C11.1439 11.1034 11.1364 11.1742 11.1217 11.3213L10.9595 12.943C10.866 13.8775 10.8554 14.1275 10.9207 14.3361C10.9589 14.4582 11.0156 14.5737 11.0888 14.6786C11.2139 14.8578 11.4181 15.0024 12.2146 15.5001C12.2501 15.5224 12.2853 15.5443 12.3199 15.566C13.1158 16.0629 13.6671 16.4072 14.0654 16.902C14.2651 17.1501 14.4324 17.4227 14.5632 17.7132C14.8241 18.2923 14.8814 18.9397 14.9642 19.8744C14.9678 19.9151 14.9715 19.9563 14.9752 19.9981L15.1474 21.934C15.1841 22.3466 14.8794 22.7108 14.4669 22.7475C14.0543 22.7842 13.6901 22.4795 13.6533 22.067L13.4811 20.1311C13.3826 19.0241 13.3394 18.6484 13.1956 18.3292C13.1171 18.155 13.0167 17.9914 12.8969 17.8425C12.6774 17.5698 12.362 17.3611 11.4196 16.7721C11.3819 16.7486 11.3447 16.7254 11.3079 16.7025C10.6781 16.3097 10.1822 16.0005 9.85885 15.5372C9.69775 15.3065 9.57303 15.0524 9.48904 14.7838C9.32044 14.2446 9.37917 13.6631 9.45375 12.9247C9.45811 12.8816 9.46252 12.8379 9.46694 12.7937L9.6291 11.172C9.63069 11.1562 9.63225 11.1402 9.63383 11.1241C9.65637 10.8939 9.68125 10.6399 9.80332 10.3727C9.93937 10.075 10.1771 9.84206 10.3979 9.68631C10.6187 9.53056 10.9178 9.3848 11.244 9.35655C11.428 9.34061 11.5998 9.36425 11.7495 9.39294C11.8932 9.42049 12.0647 9.46292 12.2563 9.51032L12.2817 9.5166C12.2836 9.5171 12.2916 9.51908 12.3005 9.52153C12.3051 9.52279 12.3156 9.52568 12.3286 9.52979C12.3373 9.53253 12.3708 9.54308 12.4111 9.56117C12.4163 9.5635 12.423 9.56658 12.431 9.57044C12.4439 9.57504 12.4615 9.58118 12.4849 9.58917C12.9137 9.73573 13.5377 10.0516 13.9096 10.3104C14.1147 10.4531 14.2517 10.5673 14.4711 10.7501L14.4831 10.7602L14.5645 10.828C15.213 11.3684 15.3971 11.5077 15.5713 11.5713C15.8482 11.6723 16.1518 11.6723 16.4287 11.5713C16.6029 11.5077 16.787 11.3684 17.4355 10.828L18.25 10.1492V8.00049C18.25 7.58627 18.5858 7.25049 19 7.25049ZM12.3696 10.9469C12.3696 10.9469 12.3719 10.9461 12.375 10.9449C12.3668 10.9481 12.3633 10.9493 12.3696 10.9469ZM11.829 9.54775L11.8311 9.54696C11.8355 9.54522 11.8443 9.5419 11.8379 9.54431C11.8379 9.54431 11.8337 9.54589 11.829 9.54775Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M8.71151 9.76352C8.8425 10.1565 8.63013 10.5812 8.23717 10.7122L6.56517 11.2695C6.07836 11.4318 5.75 11.8874 5.75 12.4005C5.75 12.4843 5.79731 12.5608 5.87221 12.5983L8.33541 13.8299C8.70589 14.0151 8.85606 14.4656 8.67082 14.8361C8.48558 15.2066 8.03507 15.3568 7.66459 15.1715L5.20139 13.9399C4.61832 13.6484 4.25 13.0524 4.25 12.4005C4.25 11.2417 4.9915 10.213 6.09083 9.84651L7.76283 9.28918C8.15579 9.15819 8.58053 9.37056 8.71151 9.76352Z" fill="currentColor" /><path d="M9.41603 16.8767C9.76067 17.1064 9.8538 17.5721 9.62404 17.9167L6.62404 22.4167C6.39427 22.7614 5.92862 22.8545 5.58397 22.6247C5.23933 22.395 5.1462 21.9293 5.37596 21.5847L8.37596 17.0847C8.60573 16.74 9.07138 16.6469 9.41603 16.8767Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.50049C14 5.8812 12.8807 7.00049 11.5 7.00049C10.1193 7.00049 9 5.8812 9 4.50049C9 3.11978 10.1193 2.00049 11.5 2.00049C12.8807 2.00049 14 3.11978 14 4.50049Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M19 7.25049C19.4142 7.25049 19.75 7.58627 19.75 8.00049V10.4948C19.75 10.4983 19.75 10.5019 19.75 10.5054V22.0005C19.75 22.4147 19.4142 22.7505 19 22.7505C18.5858 22.7505 18.25 22.4147 18.25 22.0005V12.1019C17.7655 12.5062 17.38 12.8208 16.9431 12.9803C16.334 13.2027 15.666 13.2027 15.0569 12.9803C14.6042 12.815 14.2068 12.4833 13.6972 12.0579C13.6666 12.0323 13.6356 12.0065 13.6042 11.9803L13.5229 11.9125C13.2914 11.7196 13.2006 11.6444 13.0529 11.5417C12.7954 11.3625 12.2966 11.11 11.9998 11.0086C11.9453 10.9899 11.9036 10.9751 11.8715 10.9629C11.8657 10.9607 11.8595 10.9583 11.853 10.9558C11.6736 10.9115 11.5571 10.8834 11.4671 10.8661C11.4166 10.8564 11.3884 10.8531 11.3754 10.852C11.3709 10.8534 11.3646 10.8556 11.3563 10.8591C11.3301 10.87 11.297 10.8877 11.2625 10.9121C11.228 10.9364 11.2001 10.9616 11.1811 10.9827C11.1722 10.9925 11.1672 10.9992 11.1649 11.0024C11.1621 11.0096 11.1583 11.022 11.1534 11.0501C11.1439 11.1034 11.1364 11.1742 11.1217 11.3213L10.9595 12.943C10.866 13.8775 10.8554 14.1275 10.9207 14.3361C10.9589 14.4582 11.0156 14.5737 11.0888 14.6786C11.2139 14.8578 11.4181 15.0024 12.2146 15.5001C12.2501 15.5224 12.2853 15.5443 12.3199 15.566C13.1158 16.0629 13.6671 16.4072 14.0654 16.902C14.2651 17.1501 14.4324 17.4227 14.5632 17.7132C14.8241 18.2923 14.8814 18.9397 14.9642 19.8744C14.9678 19.9151 14.9715 19.9563 14.9752 19.9981L15.1474 21.934C15.1841 22.3466 14.8794 22.7108 14.4669 22.7475C14.0543 22.7842 13.6901 22.4795 13.6533 22.067L13.4811 20.1311C13.3826 19.0241 13.3394 18.6484 13.1956 18.3292C13.1171 18.155 13.0167 17.9914 12.8969 17.8425C12.6774 17.5698 12.362 17.3611 11.4196 16.7721C11.3819 16.7486 11.3447 16.7254 11.3079 16.7025C10.6781 16.3097 10.1822 16.0005 9.85885 15.5372C9.69775 15.3065 9.57303 15.0524 9.48904 14.7838C9.32044 14.2446 9.37917 13.6631 9.45375 12.9247C9.45811 12.8816 9.46252 12.8379 9.46694 12.7937L9.6291 11.172C9.63069 11.1562 9.63225 11.1402 9.63383 11.1241C9.65637 10.8939 9.68125 10.6399 9.80332 10.3727C9.93937 10.075 10.1771 9.84206 10.3979 9.68631C10.6187 9.53056 10.9178 9.3848 11.244 9.35655C11.428 9.34061 11.5998 9.36425 11.7495 9.39294C11.8932 9.42049 12.0647 9.46292 12.2563 9.51032L12.2817 9.5166C12.2836 9.5171 12.2916 9.51908 12.3005 9.52153C12.3051 9.52279 12.3156 9.52568 12.3286 9.52979C12.3373 9.53253 12.3708 9.54308 12.4111 9.56117C12.4163 9.5635 12.423 9.56658 12.431 9.57044C12.4439 9.57504 12.4615 9.58118 12.4849 9.58917C12.9137 9.73573 13.5377 10.0516 13.9096 10.3104C14.1147 10.4531 14.2517 10.5673 14.4711 10.7501L14.4831 10.7602L14.5645 10.828C15.213 11.3684 15.3971 11.5077 15.5713 11.5713C15.8482 11.6723 16.1518 11.6723 16.4287 11.5713C16.6029 11.5077 16.787 11.3684 17.4355 10.828L18.25 10.1492V8.00049C18.25 7.58627 18.5858 7.25049 19 7.25049ZM12.3696 10.9469C12.3696 10.9469 12.3719 10.9461 12.375 10.9449C12.3668 10.9481 12.3633 10.9493 12.3696 10.9469ZM11.829 9.54775L11.8311 9.54696C11.8355 9.54522 11.8443 9.5419 11.8379 9.54431C11.8379 9.54431 11.8337 9.54589 11.829 9.54775ZM8.71151 9.76332C8.8425 10.1563 8.63013 10.581 8.23717 10.712L6.56517 11.2693C6.07836 11.4316 5.75 11.8872 5.75 12.4003C5.75 12.4841 5.79731 12.5606 5.87221 12.5981L8.33541 13.8297C8.70589 14.0149 8.85606 14.4654 8.67082 14.8359C8.48558 15.2064 8.03507 15.3566 7.66459 15.1713L5.20139 13.9397C4.61832 13.6482 4.25 13.0522 4.25 12.4003C4.25 11.2415 4.9915 10.2128 6.09083 9.84631L7.76283 9.28898C8.15579 9.15799 8.58053 9.37036 8.71151 9.76332ZM9.41603 16.8765C9.76067 17.1062 9.8538 17.5719 9.62404 17.9165L6.62404 22.4165C6.39427 22.7612 5.92862 22.8543 5.58397 22.6245C5.23933 22.3948 5.1462 21.9291 5.37596 21.5845L8.37596 17.0845C8.60573 16.7398 9.07138 16.6467 9.41603 16.8765Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconHiking as IconComponentType).keywords = [
  "hiking",
  "boost",
  "hike up",
  "rise",
  "tramp",
  "raise",
  "pedestrian",
  "walks",
  "walking",
  "walk"
];

export default IconHiking as IconComponentType;