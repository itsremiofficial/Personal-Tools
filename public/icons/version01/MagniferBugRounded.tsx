import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMagniferBugRounded: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity={duotone ? "0.5" : "1"} cx="11" cy="11.0005" r="9" stroke="currentColor" strokeWidth={width} /><path d="M11 15.0005C9.34315 15.0005 8 13.6573 8 12.0005V10.0005M11 15.0005C12.6569 15.0005 14 13.6573 14 12.0005V10.0005M11 15.0005V10.0005M14 10.0005C14 8.34363 12.6569 7.00049 11 7.00049C9.34315 7.00049 8 8.34363 8 10.0005M14 10.0005H8M14.0715 11.0005H15.5M6.5 11.0005H8M14 13.5005L15 14.0005M8 13.5005L7 14.0005M14 8.50049L15 8.00049M8 8.50049L7 8.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M21.812 20.9753C21.7493 21.0699 21.636 21.1833 21.4094 21.4099C21.1828 21.6365 21.0695 21.7498 20.9748 21.8125C20.4202 22.1798 19.6699 21.9905 19.3559 21.4041C19.3023 21.304 19.2563 21.1505 19.1643 20.8435C19.0638 20.508 19.0136 20.3403 19.0038 20.2223C18.9466 19.5273 19.5268 18.9471 20.2218 19.0043C20.3398 19.0141 20.5075 19.0643 20.843 19.1648C21.15 19.2568 21.3035 19.3028 21.4036 19.3564C21.99 19.6704 22.1793 20.4207 21.812 20.9753Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.8196 19.7016C17.7303 18.6074 18.6359 17.6939 19.7206 17.784C19.9087 17.7996 20.1338 17.868 20.3632 17.9377C20.3853 17.9444 20.4074 17.9512 20.4295 17.9579C20.4495 17.9639 20.4695 17.9699 20.4895 17.9759C20.7003 18.0393 20.9099 18.1023 21.0693 18.1884C21.9846 18.6828 22.28 19.8641 21.7068 20.7372C21.6069 20.8893 21.452 21.0451 21.2963 21.2017C21.2815 21.2166 21.2667 21.2314 21.252 21.2463C21.2372 21.2612 21.2225 21.2761 21.2078 21.291C21.0525 21.4481 20.8981 21.6043 20.7473 21.7051C19.8817 22.2833 18.7106 21.9853 18.2205 21.062C18.1351 20.9012 18.0727 20.6898 18.0099 20.4772C18.0039 20.457 17.9979 20.4368 17.9919 20.4167C17.9853 20.3944 17.9786 20.372 17.972 20.3497C17.9029 20.1184 17.835 19.8913 17.8196 19.7016Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M11.1566 20.3137C16.2137 20.3137 20.3133 16.2142 20.3133 11.1571C20.3133 6.10005 16.2137 2.00049 11.1566 2.00049C6.09956 2.00049 2 6.10005 2 11.1571C2 16.2142 6.09956 20.3137 11.1566 20.3137Z" fill="currentColor" /></g><path fillRule="evenodd" clipRule="evenodd" d="M11 6.50049C9.85918 6.50049 8.8433 7.03256 8.18946 7.86085L7.50991 7.52287C7.15707 7.34738 6.72802 7.48964 6.5516 7.84063C6.37518 8.19161 6.5182 8.6184 6.87104 8.7939L7.54991 9.13155C7.47077 9.42545 7.42857 9.73438 7.42857 10.0531V10.29H6.71429C6.3198 10.29 6 10.6081 6 11.0005C6 11.3929 6.3198 11.711 6.71429 11.711H7.42857V11.9479C7.42857 12.2666 7.47077 12.5755 7.54991 12.8694L6.87104 13.2071C6.5182 13.3826 6.37518 13.8094 6.5516 14.1604C6.72802 14.5113 7.15707 14.6536 7.50991 14.4781L8.18946 14.1401C8.8433 14.9684 9.85918 15.5005 11 15.5005C12.1408 15.5005 13.1567 14.9684 13.8105 14.1401L14.4901 14.4781C14.8429 14.6536 15.272 14.5113 15.4484 14.1604C15.6248 13.8094 15.4818 13.3826 15.129 13.2071L14.4501 12.8694C14.5292 12.5755 14.5714 12.2666 14.5714 11.9479V11.711H15.2857C15.6802 11.711 16 11.3929 16 11.0005C16 10.6081 15.6802 10.29 15.2857 10.29H14.5714V10.0531C14.5714 9.73438 14.5292 9.42545 14.4501 9.13155L15.129 8.7939C15.4818 8.6184 15.6248 8.19161 15.4484 7.84063C15.272 7.48964 14.8429 7.34738 14.4901 7.52287L13.8105 7.86085C13.1567 7.03256 12.1408 6.50049 11 6.50049ZM11.0003 7.92139C10.0673 7.92139 9.27352 8.51454 8.97935 9.34244H13.0212C12.727 8.51454 11.9333 7.92139 11.0003 7.92139ZM8.85742 11.9477V10.7635H10.286V13.958C9.45371 13.6654 8.85742 12.8758 8.85742 11.9477ZM11.7146 13.958V10.7635H13.1431V11.9477C13.1431 12.8758 12.5468 13.6654 11.7146 13.958Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.8194 19.7011C17.7302 18.6069 18.6357 17.6934 19.7205 17.7835C19.9086 17.7991 20.1337 17.8675 20.363 17.9372C20.3851 17.944 20.4073 17.9507 20.4294 17.9574C20.4494 17.9634 20.4694 17.9694 20.4894 17.9754C20.7001 18.0388 20.9097 18.1018 21.0692 18.1879C21.9844 18.6823 22.2799 19.8636 21.7067 20.7368C21.6068 20.8888 21.4519 21.0446 21.2962 21.2012C21.2814 21.2161 21.2666 21.231 21.2519 21.2458C21.2371 21.2607 21.2224 21.2756 21.2076 21.2906C21.0524 21.4476 20.898 21.6039 20.7472 21.7046C19.8816 22.2828 18.7105 21.9848 18.2204 21.0615C18.135 20.9007 18.0726 20.6893 18.0097 20.4767C18.0038 20.4566 17.9978 20.4364 17.9918 20.4162C17.9852 20.3939 17.9785 20.3715 17.9719 20.3493C17.9028 20.118 17.8349 19.8908 17.8194 19.7011Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M20.1278 11.1434C20.1278 16.1929 16.0697 20.2863 11.0639 20.2863C6.05804 20.2863 2 16.1929 2 11.1434C2 6.0939 6.05804 2.00049 11.0639 2.00049C16.0697 2.00049 20.1278 6.0939 20.1278 11.1434ZM8.18952 7.86085C8.84337 7.03256 9.85925 6.50049 11.0001 6.50049C12.1409 6.50049 13.1568 7.03256 13.8106 7.86085L14.4902 7.52287C14.843 7.34738 15.272 7.48964 15.4485 7.84063C15.6249 8.19161 15.4819 8.6184 15.129 8.7939L14.4502 9.13155C14.5293 9.42545 14.5715 9.73438 14.5715 10.0531V10.29H15.2857C15.6802 10.29 16 10.6081 16 11.0005C16 11.3929 15.6802 11.711 15.2857 11.711H14.5715V11.9479C14.5715 12.2666 14.5293 12.5755 14.4502 12.8694L15.129 13.2071C15.4819 13.3826 15.6249 13.8094 15.4485 14.1604C15.272 14.5113 14.843 14.6536 14.4902 14.4781L13.8106 14.1401C13.1568 14.9684 12.1409 15.5005 11.0001 15.5005C9.85925 15.5005 8.84337 14.9684 8.18952 14.1401L7.50998 14.4781C7.15714 14.6536 6.72809 14.5113 6.55167 14.1604C6.37525 13.8094 6.51826 13.3826 6.87111 13.2071L7.54998 12.8694C7.47084 12.5755 7.42864 12.2666 7.42864 11.9479V11.711H6.71429C6.3198 11.711 6 11.3929 6 11.0005C6 10.6081 6.3198 10.29 6.71429 10.29H7.42864V10.0531C7.42864 9.73438 7.47084 9.42545 7.54998 9.13155L6.87111 8.7939C6.51826 8.6184 6.37525 8.19161 6.55167 7.84063C6.72809 7.48964 7.15714 7.34738 7.50998 7.52287L8.18952 7.86085Z" fill="currentColor" /><path d="M11.7144 13.9581V10.7636H13.1429V11.9479C13.1429 12.876 12.5466 13.6655 11.7144 13.9581Z" fill="currentColor" /><path d="M8.85721 11.9479V10.7636H10.2858V13.9581C9.4535 13.6655 8.85721 12.876 8.85721 11.9479Z" fill="currentColor" /><path d="M8.97914 9.34259C9.27331 8.51469 10.0671 7.92154 11.0001 7.92154C11.9331 7.92154 12.7268 8.51469 13.021 9.34259H8.97914Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMagniferBugRounded as IconComponentType).keywords = [
  "magnifer",
  "bug",
  "rounded",
  "hemipteran",
  "hemipteron",
  "badger",
  "germ",
  "microbe",
  "tap",
  "tease",
  "beleaguer",
  "harass",
  "ringed",
  "ring-shaped",
  "annulate",
  "annular",
  "circular",
  "rotund",
  "bowfront",
  "prolate",
  "domed"
];

export default IconMagniferBugRounded as IconComponentType;