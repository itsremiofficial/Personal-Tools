import { FC } from 'react';

const IconStarRings: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M21.9953 13.5202C21.9428 12.9192 21.4564 12.3136 20.6439 11.7496M21.9953 13.5202C22.0222 13.8282 21.9335 14.1163 21.7428 14.381C21.3566 14.9171 20.552 15.3568 19.4425 15.6699C21.0996 15.2022 22.0767 14.4522 21.9953 13.5202ZM21.9953 13.5202C21.9842 13.3934 21.9538 13.2665 21.9051 13.1397C21.8177 12.9121 21.6713 12.6853 21.4718 12.4617C21.1157 12.0626 20.5905 11.6738 19.9293 11.3096M21.9953 13.5202C22.0905 14.6106 20.7369 15.4518 18.5406 15.8835M20.6439 11.7496C18.8565 10.5086 15.491 9.46848 11.6958 9.11988C6.17557 8.61283 1.83672 9.76081 2.00472 11.684M20.6439 11.7496C20.0853 11.3617 19.3725 10.9935 18.5406 10.6599C19.0511 10.8646 19.5166 11.0823 19.9293 11.3096M2.00472 11.684C2.01579 11.8108 2.04618 11.9377 2.09486 12.0645C2.18227 12.2921 2.32866 12.5189 2.52818 12.7426C2.88426 13.1416 3.40955 13.5304 4.07073 13.8946M2.00472 11.684C1.9233 10.752 2.90044 10.0021 4.55752 9.5343C3.44808 9.84747 2.64339 10.2871 2.25716 10.8233C2.06651 11.0879 1.97781 11.376 2.00472 11.684ZM2.00472 11.684C2.05722 12.285 2.54363 12.8906 3.35609 13.4547M4.07073 13.8946C4.4834 14.1219 4.949 14.3396 5.45943 14.5444C4.62756 14.2107 3.91472 13.8425 3.35609 13.4547M4.07073 13.8946C5.02103 14.418 6.25205 14.8908 7.66488 15.2705M3.35609 13.4547C4.51322 14.258 6.33172 14.9772 8.5 15.4791M19.9293 11.3096C18.979 10.7862 17.748 10.3134 16.3351 9.93371" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M15.2744 4.85061C15.5336 4.68703 15.7852 4.54535 16.0274 4.42706C16.9081 3.99692 17.6637 3.87605 18.2019 4.13627C18.4777 4.26963 18.6797 4.495 18.8114 4.79847C18.9345 5.08191 18.9963 5.43347 18.9998 5.84181M15.2744 4.85061C13.46 5.99564 11.2763 8.21359 9.38191 10.9923C6.23903 15.6024 5.08058 20.0137 6.78798 20.8588M15.2744 4.85061C14.8855 5.09602 14.4797 5.39073 14.0634 5.72967M6.78798 20.8588C6.79135 20.8604 6.79472 20.8621 6.79811 20.8637C6.91163 20.9186 7.03483 20.9566 7.16684 20.9782C7.40386 21.0171 7.66929 21.0035 7.95811 20.9412C8.47355 20.8302 9.06346 20.5644 9.69933 20.1659C9.84815 20.0727 9.9995 19.9721 10.153 19.8646C10.4088 19.6855 10.6706 19.4869 10.9367 19.2703L12.1115 18.3157M6.78798 20.8588C5.96226 20.4501 5.80688 19.2073 6.22201 17.5113M18.7781 7.48866C18.9285 6.87418 19.004 6.31919 18.9998 5.84181M18.9998 5.84181C19.0073 6.69799 18.7585 7.80381 18.281 9.05476" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M11.7647 14.2813C11.7509 13.3709 11.7441 12.9157 12.0311 12.75C12.3181 12.5843 12.7089 12.8178 13.4905 13.2849L13.6927 13.4058C13.9148 13.5385 14.0258 13.6048 14.1481 13.6203C14.2705 13.6358 14.3902 13.5986 14.6298 13.5242L14.8479 13.4565C15.6908 13.1947 16.1123 13.0638 16.3656 13.2978C16.619 13.5318 16.5364 13.9757 16.3713 14.8635L16.3286 15.0932C16.2817 15.3455 16.2582 15.4716 16.286 15.5949C16.3139 15.7181 16.3898 15.8245 16.5418 16.0372L16.6801 16.2309C17.2148 16.9795 17.4821 17.3538 17.3517 17.6641C17.2213 17.9745 16.7794 18.0153 15.8958 18.0969L15.6672 18.118C15.4161 18.1412 15.2906 18.1528 15.1854 18.2135C15.0803 18.2742 15.0075 18.3771 14.8619 18.583L14.7293 18.7704C14.2168 19.4948 13.9605 19.8571 13.6266 19.8148C13.2926 19.7726 13.1021 19.354 12.7211 18.5166L12.6226 18.3C12.5143 18.062 12.4602 17.943 12.3674 17.8573C12.2745 17.7716 12.1536 17.7288 11.9116 17.6433L11.6914 17.5655C10.8399 17.2646 10.4142 17.1141 10.3383 16.7777C10.2623 16.4413 10.5864 16.1418 11.2345 15.5426L11.4022 15.3876C11.5864 15.2174 11.6785 15.1322 11.7263 15.0186C11.774 14.9049 11.7721 14.7755 11.7682 14.5168L11.7647 14.2813Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} fillRule="evenodd" clipRule="evenodd" d="M15.6983 3.7536C16.6293 3.29889 17.6652 3.04415 18.5284 3.46151C18.9885 3.68399 19.3068 4.05664 19.4994 4.50023C19.6743 4.90322 19.7457 5.36164 19.7498 5.83576C19.7532 6.23436 19.7093 6.66491 19.6253 7.11782C19.4982 7.80246 19.2779 8.5467 18.9816 9.32271C18.9506 9.40394 18.907 9.47667 18.8539 9.53952C19.0391 9.60206 19.2199 9.66638 19.396 9.73238L19.3976 9.73299C19.4443 9.75052 19.4955 9.77 19.5414 9.7877C19.6748 9.83919 19.8053 9.89165 19.9328 9.94504C20.2588 10.0815 20.5652 10.224 20.8499 10.3719C21.1425 10.5239 21.4156 10.6833 21.6655 10.8499C22.5278 11.4244 23.2703 12.1904 23.3453 13.1462C23.3853 13.6557 23.2241 14.1185 22.9382 14.5086C22.6785 14.8629 22.3187 15.1558 21.9113 15.3985C21.5689 15.6025 21.175 15.7818 20.7415 15.9377C20.0863 16.1733 19.3325 16.3585 18.513 16.4941C18.1044 16.5617 17.7183 16.2853 17.6506 15.8766C17.583 15.4679 17.8595 15.0818 18.2681 15.0142C18.8299 14.9212 19.3338 14.8067 19.775 14.676L19.7801 14.6744C20.346 14.5064 20.8017 14.3136 21.1435 14.1099C21.4378 13.9346 21.6227 13.766 21.7283 13.6219C21.8336 13.4782 21.8579 13.3649 21.8499 13.2636C21.8314 13.0276 21.6029 12.6106 20.8338 12.0982C20.6352 11.9658 20.4097 11.8336 20.1584 11.703L18.862 11.1341C17.1091 10.478 14.7612 9.97604 12.1765 9.79571C11.8558 9.77333 11.5395 9.75647 11.2285 9.74492C10.8121 10.2712 10.4009 10.8295 10.0016 11.4152C9.25788 12.5061 8.63306 13.5782 8.13611 14.5844C8.45081 14.7636 8.59757 15.1499 8.46601 15.4997C8.32324 15.8793 7.90563 16.0752 7.52433 15.9464C7.29813 16.5091 7.11984 17.0399 6.99144 17.5285C6.97792 17.5799 6.965 17.6307 6.95269 17.6808L6.95048 17.6901C6.75492 18.489 6.71192 19.115 6.78056 19.5518C6.80721 19.7214 6.84715 19.8469 6.8932 19.9404C6.96353 20.0829 7.04811 20.1512 7.12066 20.1871L7.12457 20.189C7.16783 20.2099 7.22119 20.2276 7.2882 20.2385C7.41077 20.2586 7.57887 20.2562 7.80013 20.2085C8.19989 20.1224 8.70687 19.9032 9.30107 19.5308C9.43832 19.4448 9.57898 19.3514 9.72272 19.2508C9.96235 19.0829 10.2097 18.8955 10.4631 18.6891L11.6385 17.734C11.96 17.4728 12.4324 17.5217 12.6936 17.8431C12.9548 18.1646 12.9059 18.637 12.5845 18.8982L11.4102 19.8524C11.1315 20.0793 10.8552 20.2889 10.5832 20.4794C10.42 20.5937 10.2579 20.7014 10.0975 20.8019C9.42001 21.2265 8.74716 21.5389 8.11604 21.6749C7.75967 21.7516 7.39691 21.7764 7.04543 21.7188C6.84842 21.6865 6.65538 21.6283 6.4716 21.5394L6.45526 21.5314C5.72578 21.1703 5.38977 20.4583 5.28786 19.7107C5.18686 18.9698 5.29359 18.0875 5.5407 17.1472C5.68121 16.6126 5.8716 16.0425 6.10868 15.4467L5.60192 15.2678C5.2654 15.1416 4.94502 15.0088 4.64335 14.8701C4.46229 14.7868 4.28762 14.7012 4.11992 14.6134C3.41158 14.2425 2.8024 13.8191 2.36665 13.3428C2.1206 13.0738 1.91622 12.7731 1.7887 12.4405C1.71722 12.2541 1.67011 12.058 1.65413 11.8545L1.65279 11.8364C1.5966 11.0244 2.04191 10.3751 2.63607 9.90997C3.22487 9.44904 4.04049 9.09617 4.97703 8.83525C6.46458 8.42082 8.38692 8.20311 10.5288 8.22755C11.5422 7.01274 12.5876 5.96465 13.5885 5.1496L13.5899 5.1485C13.6285 5.11705 13.6712 5.0826 13.7096 5.05194C13.8214 4.96273 13.9325 4.87649 14.043 4.7933C14.3252 4.58067 14.6029 4.38799 14.8741 4.21681C15.1529 4.04083 15.4284 3.88542 15.6983 3.7536ZM12.4459 8.31129C14.2718 8.44839 16.01 8.74028 17.5361 9.14469C17.522 9.02764 17.5353 8.90552 17.5803 8.78771C17.7834 8.25569 17.9386 7.76283 18.0483 7.31596L18.0495 7.3108C18.1899 6.73733 18.2533 6.24661 18.2498 5.84877C18.2469 5.5062 18.1946 5.26149 18.1234 5.09761C18.0525 4.93426 17.9669 4.85617 17.8754 4.81193C17.6622 4.70886 17.187 4.69585 16.3566 5.10143C16.1421 5.20618 15.9142 5.33413 15.6747 5.48531L14.5295 6.31768C13.8599 6.86356 13.1547 7.53546 12.4459 8.31129ZM9.34839 9.73983C7.80007 9.79171 6.44276 9.98403 5.37959 10.2802C5.32836 10.2945 5.27801 10.309 5.22852 10.3236L5.21941 10.3264C4.43091 10.5605 3.86875 10.8391 3.52619 11.1187C3.39322 11.2273 3.30496 11.3251 3.24744 11.412C3.1599 11.5446 3.14362 11.6521 3.14921 11.7328L3.14954 11.7372C3.1533 11.7851 3.16496 11.8401 3.18927 11.9035C3.23374 12.0194 3.32067 12.1633 3.47343 12.3303C3.74944 12.6321 4.19447 12.9593 4.81569 13.2845C4.95917 13.3596 5.11076 13.434 5.27019 13.5073C5.53597 13.6296 5.82264 13.7486 6.12862 13.8633L6.7173 14.0711C7.26317 12.9456 7.95087 11.7604 8.76219 10.5703C8.95461 10.288 9.15022 10.011 9.34839 9.73983Z" fill="currentColor" /><path d="M11.7647 14.2813C11.7509 13.3709 11.7441 12.9157 12.0311 12.75C12.3181 12.5843 12.7089 12.8178 13.4905 13.2849L13.6927 13.4058C13.9148 13.5385 14.0258 13.6048 14.1481 13.6203C14.2705 13.6358 14.3902 13.5986 14.6298 13.5242L14.8479 13.4565C15.6908 13.1947 16.1123 13.0638 16.3656 13.2978C16.619 13.5318 16.5364 13.9757 16.3713 14.8635L16.3286 15.0932C16.2817 15.3455 16.2582 15.4716 16.286 15.5949C16.3139 15.7181 16.3898 15.8245 16.5418 16.0372L16.6801 16.2309C17.2148 16.9795 17.4821 17.3538 17.3517 17.6641C17.2213 17.9745 16.7794 18.0153 15.8958 18.0969L15.6672 18.118C15.4161 18.1412 15.2906 18.1528 15.1854 18.2135C15.0803 18.2742 15.0075 18.3771 14.8619 18.583L14.7293 18.7704C14.2168 19.4948 13.9605 19.8571 13.6266 19.8148C13.2926 19.7726 13.1021 19.354 12.7211 18.5166L12.6226 18.3C12.5143 18.062 12.4602 17.943 12.3674 17.8573C12.2745 17.7716 12.1536 17.7288 11.9116 17.6433L11.6914 17.5655C10.8399 17.2646 10.4142 17.1141 10.3383 16.7777C10.2623 16.4413 10.5864 16.1418 11.2345 15.5426L11.4022 15.3876C11.5864 15.2174 11.6785 15.1322 11.7263 15.0186C11.774 14.9049 11.7721 14.7755 11.7682 14.5168L11.7647 14.2813Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15.6983 3.7536C16.6293 3.29889 17.6652 3.04415 18.5284 3.46151C18.9885 3.68399 19.3068 4.05664 19.4994 4.50023C19.6743 4.90322 19.7457 5.36164 19.7498 5.83576C19.7532 6.23436 19.7093 6.66491 19.6253 7.11782C19.4982 7.80246 19.2779 8.5467 18.9816 9.32271C18.9506 9.40394 18.907 9.47667 18.8539 9.53952C19.0391 9.60206 19.2199 9.66638 19.396 9.73238L19.3976 9.73299C19.4443 9.75052 19.4955 9.77 19.5414 9.7877C19.6748 9.83919 19.8053 9.89165 19.9328 9.94504C20.2588 10.0815 20.5652 10.224 20.8499 10.3719C21.1425 10.5239 21.4156 10.6833 21.6655 10.8499C22.5278 11.4244 23.2703 12.1904 23.3453 13.1462C23.3853 13.6557 23.2241 14.1185 22.9382 14.5086C22.6785 14.8629 22.3187 15.1558 21.9113 15.3985C21.5689 15.6025 21.175 15.7818 20.7415 15.9377C20.0863 16.1733 19.3325 16.3585 18.513 16.4941C18.1044 16.5617 17.7183 16.2853 17.6506 15.8766C17.583 15.4679 17.8595 15.0818 18.2681 15.0142C18.8299 14.9212 19.3338 14.8067 19.775 14.676L19.7801 14.6744C20.346 14.5064 20.8017 14.3136 21.1435 14.1099C21.4378 13.9346 21.6227 13.766 21.7283 13.6219C21.8336 13.4782 21.8579 13.3649 21.8499 13.2636C21.8314 13.0276 21.6029 12.6106 20.8338 12.0982C20.6352 11.9658 20.4097 11.8336 20.1584 11.703L18.862 11.1341C17.1091 10.478 14.7612 9.97604 12.1765 9.79571C11.8558 9.77333 11.5395 9.75647 11.2285 9.74492C10.8121 10.2712 10.4009 10.8295 10.0016 11.4152C9.25788 12.5061 8.63306 13.5782 8.13611 14.5844C8.45081 14.7636 8.59757 15.1499 8.46601 15.4997C8.32324 15.8793 7.90563 16.0752 7.52433 15.9464C7.29813 16.5091 7.11984 17.0399 6.99144 17.5285C6.97792 17.5799 6.965 17.6307 6.95269 17.6808L6.95048 17.6901C6.75492 18.489 6.71192 19.115 6.78056 19.5518C6.80721 19.7214 6.84715 19.8469 6.8932 19.9404C6.96353 20.0829 7.04811 20.1512 7.12066 20.1871L7.12457 20.189C7.16783 20.2099 7.22119 20.2276 7.2882 20.2385C7.41077 20.2586 7.57887 20.2562 7.80013 20.2085C8.19989 20.1224 8.70687 19.9032 9.30107 19.5308C9.43832 19.4448 9.57898 19.3514 9.72272 19.2508C9.96235 19.0829 10.2097 18.8955 10.4631 18.6891L11.6385 17.734C11.96 17.4728 12.4324 17.5217 12.6936 17.8431C12.9548 18.1646 12.9059 18.637 12.5845 18.8982L11.4102 19.8524C11.1315 20.0793 10.8552 20.2889 10.5832 20.4794C10.42 20.5937 10.2579 20.7014 10.0975 20.8019C9.42001 21.2265 8.74716 21.5389 8.11604 21.6749C7.75967 21.7516 7.39691 21.7764 7.04543 21.7188C6.84842 21.6865 6.65538 21.6283 6.4716 21.5394L6.45526 21.5314C5.72578 21.1703 5.38977 20.4583 5.28786 19.7107C5.18686 18.9698 5.29359 18.0875 5.5407 17.1472C5.68121 16.6126 5.8716 16.0425 6.10868 15.4467L5.60192 15.2678C5.2654 15.1416 4.94502 15.0088 4.64335 14.8701C4.46229 14.7868 4.28762 14.7012 4.11992 14.6134C3.41158 14.2425 2.8024 13.8191 2.36665 13.3428C2.1206 13.0738 1.91622 12.7731 1.7887 12.4405C1.71722 12.2541 1.67011 12.058 1.65413 11.8545L1.65279 11.8364C1.5966 11.0244 2.04191 10.3751 2.63607 9.90997C3.22487 9.44904 4.04049 9.09617 4.97703 8.83525C6.46458 8.42082 8.38692 8.20311 10.5288 8.22755C11.5422 7.01274 12.5876 5.96465 13.5885 5.1496L13.5899 5.1485C13.6285 5.11705 13.6712 5.0826 13.7096 5.05194C13.8214 4.96273 13.9325 4.87649 14.043 4.7933C14.3252 4.58067 14.6029 4.38799 14.8741 4.21681C15.1529 4.04083 15.4284 3.88542 15.6983 3.7536ZM12.4459 8.31129C14.2718 8.44839 16.01 8.74028 17.5361 9.14469C17.522 9.02764 17.5353 8.90552 17.5803 8.78771C17.7834 8.25569 17.9386 7.76283 18.0483 7.31596L18.0495 7.3108C18.1899 6.73733 18.2533 6.24661 18.2498 5.84877C18.2469 5.5062 18.1946 5.26149 18.1234 5.09761C18.0525 4.93426 17.9669 4.85617 17.8754 4.81193C17.6622 4.70886 17.187 4.69585 16.3566 5.10143C16.1421 5.20618 15.9142 5.33413 15.6747 5.48531L14.5295 6.31768C13.8599 6.86356 13.1547 7.53546 12.4459 8.31129ZM9.34839 9.73983C7.80007 9.79171 6.44276 9.98403 5.37959 10.2802C5.32836 10.2945 5.27801 10.309 5.22852 10.3236L5.21941 10.3264C4.43091 10.5605 3.86875 10.8391 3.52619 11.1187C3.39322 11.2273 3.30496 11.3251 3.24744 11.412C3.1599 11.5446 3.14362 11.6521 3.14921 11.7328L3.14954 11.7372C3.1533 11.7851 3.16496 11.8401 3.18927 11.9035C3.23374 12.0194 3.32067 12.1633 3.47343 12.3303C3.74944 12.6321 4.19447 12.9593 4.81569 13.2845C4.95917 13.3596 5.11076 13.434 5.27019 13.5073C5.53597 13.6296 5.82264 13.7486 6.12862 13.8633L6.7173 14.0711C7.26317 12.9456 7.95087 11.7604 8.76219 10.5703C8.95461 10.288 9.15022 10.011 9.34839 9.73983Z" fill="currentColor" /><path d="M11.7647 14.2813C11.7509 13.3709 11.7441 12.9157 12.0311 12.75C12.3181 12.5843 12.7089 12.8178 13.4905 13.2849L13.6927 13.4058C13.9148 13.5385 14.0258 13.6048 14.1481 13.6203C14.2705 13.6358 14.3902 13.5986 14.6298 13.5242L14.8479 13.4565C15.6908 13.1947 16.1123 13.0638 16.3656 13.2978C16.619 13.5318 16.5364 13.9757 16.3713 14.8635L16.3286 15.0932C16.2817 15.3455 16.2582 15.4716 16.286 15.5949C16.3139 15.7181 16.3898 15.8245 16.5418 16.0372L16.6801 16.2309C17.2148 16.9795 17.4821 17.3538 17.3517 17.6641C17.2213 17.9745 16.7794 18.0153 15.8958 18.0969L15.6672 18.118C15.4161 18.1412 15.2906 18.1528 15.1854 18.2135C15.0803 18.2742 15.0075 18.3771 14.8619 18.583L14.7293 18.7704C14.2168 19.4948 13.9605 19.8571 13.6266 19.8148C13.2926 19.7726 13.1021 19.354 12.7211 18.5166L12.6226 18.3C12.5143 18.062 12.4602 17.943 12.3674 17.8573C12.2745 17.7716 12.1536 17.7288 11.9116 17.6433L11.6914 17.5655C10.8399 17.2646 10.4142 17.1141 10.3383 16.7777C10.2623 16.4413 10.5864 16.1418 11.2345 15.5426L11.4022 15.3876C11.5864 15.2174 11.6785 15.1322 11.7263 15.0186C11.774 14.9049 11.7721 14.7755 11.7682 14.5168L11.7647 14.2813Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconStarRings as IconComponent).keywords = [
  "star",
  "rings",
  "stellar",
  "asterisk",
  "lead",
  "leading",
  "maven",
  "sensation",
  "principal",
  "whizz",
  "headliner",
  "band",
  "hoop",
  "pack",
  "encircle",
  "surround",
  "environ",
  "knell",
  "tintinnabulation",
  "peal"
];

export default IconStarRings as IconComponent;