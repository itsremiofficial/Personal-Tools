import { FC } from 'react';

const IconBlackHole2: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M10.1418 10.3628C13.6876 6.81707 21.9137 15.6105 16.5242 21" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeDasharray="2 2" /><path opacity={duotone ? "0.5" : "1"} d="M13.8582 13.6372C10.3124 17.1829 2.08634 8.38952 7.47584 3.00001" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeDasharray="2 2" /><path opacity={duotone ? "0.5" : "1"} d="M10.3627 13.8582C6.81701 10.3124 15.6104 2.08634 20.9999 7.47584" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeDasharray="2 2" /><path opacity={duotone ? "0.5" : "1"} d="M13.6373 10.1418C17.183 13.6876 8.38959 21.9137 3.00008 16.5242" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeDasharray="2 2" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1651 3.38437C5.92333 3.7207 6 4.18935 6.33633 4.43112C6.67267 4.67288 7.14131 4.59622 7.38308 4.25989C7.56064 4.01287 7.76725 3.76902 8.00594 3.53033C8.29884 3.23744 8.29884 2.76256 8.00594 2.46967C7.71305 2.17678 7.23818 2.17678 6.94528 2.46967C6.65125 2.7637 6.39165 3.06921 6.1651 3.38437Z" fill="currentColor" /><path d="M5.82757 8.64443C5.41627 8.69344 5.04311 8.39976 4.99409 7.98845C4.8998 7.1973 4.93509 6.38285 5.13814 5.57651C5.23929 5.17484 5.64691 4.93121 6.04858 5.03236C6.45025 5.13351 6.69388 5.54113 6.59273 5.9428C6.43853 6.55516 6.40884 7.18412 6.48355 7.81094C6.53257 8.22224 6.23888 8.59541 5.82757 8.64443Z" fill="currentColor" /><path d="M6.83503 12.2743C7.0906 12.6002 7.56203 12.6573 7.888 12.4017C8.21397 12.1462 8.27104 11.6747 8.01547 11.3488C7.61364 10.8363 7.26725 10.2671 7.00282 9.6664C6.83593 9.28729 6.39332 9.11526 6.01421 9.28215C5.63511 9.44904 5.46307 9.89166 5.62997 10.2708C5.94748 10.992 6.36 11.6684 6.83503 12.2743Z" fill="currentColor" /><path d="M11.2971 14.9172C11.118 15.0458 10.8842 15.0945 10.6555 15.03C9.9069 14.8186 9.17403 14.4287 8.50254 13.9223C8.17184 13.6729 8.10593 13.2026 8.35535 12.8719C8.5247 12.6473 8.7959 12.5449 9.05609 12.5803C9.01929 12.3926 9 12.1985 9 12C9 11.4518 9.14706 10.9379 9.40389 10.4956C9.3621 10.2622 9.4314 10.0128 9.61177 9.83245C9.94903 9.49519 10.3279 9.24063 10.7376 9.06789C10.9367 8.98395 11.1516 8.9925 11.3346 9.07406C11.5486 9.02559 11.7713 9 12 9C12.2421 9 12.4774 9.02867 12.7029 9.08279C12.882 8.95421 13.1158 8.90543 13.3445 8.97C14.0931 9.18141 14.826 9.57126 15.4975 10.0777C15.8282 10.3271 15.8941 10.7974 15.6447 11.1281C15.4753 11.3526 15.2041 11.4551 14.9439 11.4196C14.9807 11.6074 15 11.8014 15 12C15 12.5482 14.8529 13.0621 14.5961 13.5043C14.6379 13.7377 14.5686 13.9871 14.3883 14.1675C14.051 14.5048 13.6721 14.7593 13.2624 14.9321C13.0633 15.016 12.8484 15.0075 12.6655 14.9259C12.4514 14.9744 12.2287 15 12 15C11.7579 15 11.5226 14.9713 11.2971 14.9172Z" fill="currentColor" /><path d="M16.112 11.5982C16.438 11.3427 16.9094 11.3997 17.165 11.7257C17.64 12.3316 18.0525 13.0079 18.3701 13.7292C18.537 14.1083 18.3649 14.5509 17.9858 14.7178C17.6067 14.8847 17.1641 14.7127 16.9972 14.3336C16.7328 13.7329 16.3864 13.1637 15.9846 12.6512C15.729 12.3252 15.7861 11.8538 16.112 11.5982Z" fill="currentColor" /><path d="M19.0059 16.0115C18.9569 15.6002 18.5838 15.3065 18.1725 15.3555C17.7611 15.4046 17.4675 15.7777 17.5165 16.189C17.5912 16.8158 17.5615 17.4448 17.4073 18.0572C17.3061 18.4588 17.5498 18.8665 17.9514 18.9676C18.3531 19.0688 18.7607 18.8251 18.8619 18.4235C19.0649 17.6171 19.1002 16.8027 19.0059 16.0115Z" fill="currentColor" /><path d="M17.6637 19.5689C18 19.8106 18.0767 20.2793 17.8349 20.6156C17.6084 20.9308 17.3488 21.2363 17.0547 21.5303C16.7618 21.8232 16.287 21.8232 15.9941 21.5303C15.7012 21.2374 15.7012 20.7625 15.9941 20.4696C16.2328 20.2309 16.4394 19.9871 16.6169 19.7401C16.8587 19.4037 17.3274 19.3271 17.6637 19.5689Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M9.83248 14.3883C10.1254 14.6812 10.6002 14.6812 10.8931 14.3883C11.186 14.0954 11.186 13.6205 10.8931 13.3276C10.6884 13.1229 10.5451 12.905 10.4501 12.6797C10.2892 12.298 9.84932 12.119 9.46764 12.28C9.08596 12.4409 8.907 12.8807 9.06792 13.2624C9.24066 13.6721 9.49522 14.051 9.83248 14.3883Z" fill="currentColor" /><path d="M8.97003 10.6555C8.85746 11.0541 9.08936 11.4685 9.48798 11.5811C9.8866 11.6937 10.301 11.4618 10.4136 11.0632C10.565 10.527 10.8578 9.95928 11.2753 9.40574C11.5247 9.07503 11.4588 8.60476 11.1281 8.35535C10.7974 8.10593 10.3271 8.17184 10.0777 8.50255C9.57129 9.17403 9.18144 9.9069 8.97003 10.6555Z" fill="currentColor" /><path d="M11.7257 6.83503C11.3998 7.0906 11.3427 7.56203 11.5983 7.888C11.8538 8.21397 12.3253 8.27104 12.6512 8.01547C13.1637 7.61364 13.7329 7.26726 14.3336 7.00283C14.7127 6.83593 14.8847 6.39332 14.7178 6.01421C14.551 5.63511 14.1083 5.46307 13.7292 5.62997C13.008 5.94748 12.3316 6.36 11.7257 6.83503Z" fill="currentColor" /><path d="M16.0115 4.99409C15.6002 5.04311 15.3066 5.41627 15.3556 5.82757C15.4046 6.23888 15.7778 6.53257 16.1891 6.48355C16.8159 6.40884 17.4448 6.43853 18.0572 6.59273C18.4589 6.69388 18.8665 6.45025 18.9676 6.04858C19.0688 5.64691 18.8252 5.23929 18.4235 5.13814C17.6171 4.93509 16.8027 4.8998 16.0115 4.99409Z" fill="currentColor" /><path d="M20.6156 6.1651C20.2793 5.92333 19.8107 6 19.5689 6.33633C19.3271 6.67266 19.4038 7.14131 19.7401 7.38308C19.9871 7.56064 20.231 7.76725 20.4697 8.00594C20.7626 8.29884 21.2374 8.29884 21.5303 8.00594C21.8232 7.71305 21.8232 7.23818 21.5303 6.94528C21.2363 6.65125 20.9308 6.39165 20.6156 6.1651Z" fill="currentColor" /><path d="M14.1675 9.61177C13.8747 9.31888 13.3998 9.31888 13.1069 9.61177C12.814 9.90466 12.814 10.3795 13.1069 10.6724C13.3116 10.8772 13.4549 11.095 13.5499 11.3203C13.7108 11.702 14.1507 11.881 14.5324 11.7201C14.9141 11.5591 15.093 11.1193 14.9321 10.7376C14.7594 10.3279 14.5048 9.94903 14.1675 9.61177Z" fill="currentColor" /><path d="M15.03 13.3445C15.1426 12.9459 14.9107 12.5315 14.512 12.4189C14.1134 12.3064 13.699 12.5382 13.5865 12.9369C13.4351 13.473 13.1422 14.0407 12.7247 14.5943C12.4753 14.925 12.5412 15.3953 12.8719 15.6447C13.2026 15.8941 13.6729 15.8282 13.9223 15.4975C14.4287 14.826 14.8186 14.0931 15.03 13.3445Z" fill="currentColor" /><path d="M12.2743 17.165C12.6003 16.9094 12.6573 16.438 12.4018 16.112C12.1462 15.7861 11.6748 15.729 11.3488 15.9846C10.8363 16.3864 10.2671 16.7328 9.66643 16.9972C9.28732 17.1641 9.11529 17.6067 9.28218 17.9858C9.44907 18.3649 9.89169 18.537 10.2708 18.3701C10.9921 18.0525 11.6684 17.64 12.2743 17.165Z" fill="currentColor" /><path d="M7.98848 19.0059C8.39979 18.9569 8.69348 18.5838 8.64446 18.1725C8.59544 17.7611 8.22227 17.4675 7.81097 17.5165C7.18415 17.5912 6.55519 17.5615 5.94283 17.4073C5.54116 17.3061 5.13354 17.5498 5.03239 17.9514C4.93124 18.3531 5.17487 18.7607 5.57654 18.8619C6.38288 19.0649 7.19733 19.1002 7.98848 19.0059Z" fill="currentColor" /><path d="M3.3844 17.8349C3.72073 18.0767 4.18938 18 4.43115 17.6637C4.67291 17.3274 4.59625 16.8587 4.25992 16.6169C4.0129 16.4394 3.76905 16.2328 3.53036 15.9941C3.23747 15.7012 2.76259 15.7012 2.4697 15.9941C2.17681 16.287 2.17681 16.7618 2.4697 17.0547C2.76373 17.3488 3.06924 17.6084 3.3844 17.8349Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.16507 3.38437C5.92331 3.7207 5.99997 4.18935 6.3363 4.43112C6.67264 4.67288 7.14128 4.59622 7.38305 4.25989C7.56062 4.01287 7.76723 3.76902 8.00592 3.53033C8.29881 3.23744 8.29881 2.76256 8.00592 2.46967C7.71302 2.17678 7.23815 2.17678 6.94526 2.46967C6.65122 2.7637 6.39162 3.06921 6.16507 3.38437Z" fill="currentColor" /><path d="M5.82755 8.64443C5.41624 8.69344 5.04308 8.39976 4.99406 7.98845C4.89977 7.1973 4.93506 6.38285 5.13811 5.57651C5.23926 5.17484 5.64688 4.93121 6.04855 5.03236C6.45022 5.13351 6.69385 5.54113 6.5927 5.9428C6.4385 6.55516 6.40881 7.18412 6.48352 7.81094C6.53254 8.22224 6.23885 8.59541 5.82755 8.64443Z" fill="currentColor" /><path d="M6.835 12.2743C7.09057 12.6002 7.562 12.6573 7.88797 12.4017C8.21394 12.1462 8.27101 11.6747 8.01544 11.3488C7.61362 10.8363 7.26723 10.2671 7.0028 9.6664C6.8359 9.28729 6.39329 9.11526 6.01418 9.28215C5.63508 9.44904 5.46305 9.89166 5.62994 10.2708C5.94745 10.992 6.35997 11.6684 6.835 12.2743Z" fill="currentColor" /><path d="M16.112 11.5982C16.438 11.3427 16.9094 11.3997 17.165 11.7257C17.64 12.3316 18.0525 13.0079 18.37 13.7292C18.5369 14.1083 18.3649 14.5509 17.9858 14.7178C17.6067 14.8847 17.1641 14.7127 16.9972 14.3336C16.7327 13.7329 16.3864 13.1637 15.9845 12.6512C15.729 12.3252 15.786 11.8538 16.112 11.5982Z" fill="currentColor" /><path d="M19.0059 16.0115C18.9569 15.6002 18.5837 15.3065 18.1724 15.3555C17.7611 15.4046 17.4674 15.7777 17.5164 16.189C17.5912 16.8158 17.5615 17.4448 17.4073 18.0572C17.3061 18.4588 17.5497 18.8665 17.9514 18.9676C18.3531 19.0688 18.7607 18.8251 18.8619 18.4235C19.0649 17.6171 19.1002 16.8027 19.0059 16.0115Z" fill="currentColor" /><path d="M17.6637 19.5689C18 19.8106 18.0767 20.2793 17.8349 20.6156C17.6083 20.9308 17.3487 21.2363 17.0547 21.5303C16.7618 21.8232 16.2869 21.8232 15.9941 21.5303C15.7012 21.2374 15.7012 20.7625 15.9941 20.4696C16.2327 20.2309 16.4394 19.9871 16.6169 19.7401C16.8587 19.4037 17.3273 19.3271 17.6637 19.5689Z" fill="currentColor" /><path d="M11.5982 7.88797C11.3427 7.562 11.3997 7.09057 11.7257 6.835C12.3316 6.35997 13.0079 5.94745 13.7292 5.62994C14.1083 5.46305 14.5509 5.63508 14.7178 6.01418C14.8847 6.39329 14.7127 6.83591 14.3336 7.0028C13.7329 7.26723 13.1637 7.61362 12.6512 8.01544C12.3252 8.27101 11.8538 8.21394 11.5982 7.88797Z" fill="currentColor" /><path d="M16.0115 4.99406C15.6002 5.04308 15.3065 5.41624 15.3555 5.82755C15.4046 6.23885 15.7777 6.53254 16.189 6.48352C16.8158 6.40881 17.4448 6.4385 18.0572 6.5927C18.4588 6.69385 18.8665 6.45022 18.9676 6.04855C19.0688 5.64688 18.8251 5.23926 18.4235 5.13811C17.6171 4.93506 16.8027 4.89977 16.0115 4.99406Z" fill="currentColor" /><path d="M19.5689 6.3363C19.8106 5.99997 20.2793 5.92331 20.6156 6.16507C20.9308 6.39162 21.2363 6.65122 21.5303 6.94526C21.8232 7.23815 21.8232 7.71302 21.5303 8.00592C21.2374 8.29881 20.7625 8.29881 20.4696 8.00592C20.2309 7.76723 19.9871 7.56062 19.7401 7.38305C19.4037 7.14128 19.3271 6.67264 19.5689 6.3363Z" fill="currentColor" /><path d="M12.4017 16.112C12.6573 16.438 12.6002 16.9094 12.2743 17.165C11.6684 17.64 10.992 18.0525 10.2708 18.37C9.89166 18.5369 9.44904 18.3649 9.28215 17.9858C9.11526 17.6067 9.28729 17.1641 9.6664 16.9972C10.2671 16.7327 10.8363 16.3864 11.3488 15.9845C11.6747 15.729 12.1462 15.786 12.4017 16.112Z" fill="currentColor" /><path d="M7.98845 19.0059C8.39976 18.9569 8.69344 18.5837 8.64443 18.1724C8.59541 17.7611 8.22224 17.4674 7.81094 17.5165C7.18412 17.5912 6.55516 17.5615 5.9428 17.4073C5.54113 17.3061 5.13351 17.5497 5.03236 17.9514C4.93121 18.3531 5.17484 18.7607 5.57651 18.8619C6.38285 19.0649 7.1973 19.1002 7.98845 19.0059Z" fill="currentColor" /><path d="M4.43112 17.6637C4.18935 18 3.7207 18.0767 3.38437 17.8349C3.06921 17.6083 2.7637 17.3487 2.46967 17.0547C2.17678 16.7618 2.17678 16.2869 2.46967 15.9941C2.76256 15.7012 3.23744 15.7012 3.53033 15.9941C3.76902 16.2327 4.01287 16.4394 4.25989 16.6169C4.59622 16.8587 4.67288 17.3273 4.43112 17.6637Z" fill="currentColor" /><path d="M10.6555 15.03C10.8841 15.0945 11.118 15.0458 11.2971 14.9172C11.5226 14.9713 11.7579 15 12 15C12.1985 15 12.3926 14.9807 12.5803 14.9439C12.5449 15.2041 12.6473 15.4753 12.8719 15.6447C13.2026 15.8941 13.6729 15.8282 13.9223 15.4975C14.4287 14.826 14.8186 14.0931 15.03 13.3445C15.0945 13.1158 15.0458 12.882 14.9172 12.7029C14.9713 12.4774 15 12.2421 15 12C15 11.8014 14.9807 11.6074 14.9439 11.4196C15.2041 11.4551 15.4753 11.3526 15.6447 11.1281C15.8941 10.7974 15.8282 10.3271 15.4975 10.0777C14.826 9.57126 14.0931 9.18141 13.3445 8.97C13.1158 8.90543 12.882 8.95421 12.7029 9.08279C12.4774 9.02867 12.2421 9 12 9C11.8014 9 11.6074 9.01929 11.4196 9.0561C11.4551 8.7959 11.3526 8.52468 11.1281 8.35532C10.7974 8.10591 10.3271 8.17181 10.0777 8.50252C9.57126 9.174 9.18141 9.90687 8.97 10.6555C8.90543 10.8842 8.95421 11.118 9.08279 11.2971C9.02867 11.5226 9 11.7579 9 12C9 12.1985 9.01929 12.3926 9.05609 12.5803C8.79589 12.5449 8.52468 12.6473 8.35532 12.8719C8.10591 13.2026 8.17181 13.6729 8.50252 13.9223C9.174 14.4287 9.90687 14.8186 10.6555 15.03Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconBlackHole2 as IconComponent).keywords = [
  "black",
  "hole",
  "2",
  "pitch-black",
  "pitch-dark",
  "bleak",
  "calamitous",
  "disastrous",
  "grim",
  "dirty",
  "soiled",
  "unclean",
  "hollow",
  "trap",
  "fix",
  "jam",
  "pickle",
  "maw",
  "yap",
  "muddle",
  "mess",
  "wireless network",
  "sign on",
  "sign off",
  "put through",
  "back up",
  "ring up",
  "call up",
  "hang up",
  "read out"
];

export default IconBlackHole2 as IconComponent;