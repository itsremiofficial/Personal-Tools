import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconMagniferBug: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity={duotone ? "0.5" : "1"} cx="11.5" cy="11.5005" r="9.5" stroke="currentColor" strokeWidth={width} /><path d="M11.5 15.5005C9.84315 15.5005 8.5 14.1573 8.5 12.5005V10.5005M11.5 15.5005C13.1569 15.5005 14.5 14.1573 14.5 12.5005V10.5005M11.5 15.5005V10.5005M14.5 10.5005C14.5 8.84363 13.1569 7.50049 11.5 7.50049C9.84315 7.50049 8.5 8.84363 8.5 10.5005M14.5 10.5005H8.5M14.5715 11.5005H16M7 11.5005H8.5M14.5 14.0005L15.5 14.5005M8.5 14.0005L7.5 14.5005M14.5 9.00049L15.5 8.50049M8.5 9.00049L7.5 8.50049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M18.5 18.5005L22 22.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.5" : "1"}><path d="M11.1566 20.3137C16.2137 20.3137 20.3133 16.2142 20.3133 11.1571C20.3133 6.10005 16.2137 2.00049 11.1566 2.00049C6.09956 2.00049 2 6.10005 2 11.1571C2 16.2142 6.09956 20.3137 11.1566 20.3137Z" fill="currentColor" /></g><path d="M17.1001 18.1224C17.4671 17.809 17.809 17.4671 18.1224 17.1001L21.7887 20.7664C22.071 21.0487 22.071 21.5064 21.7887 21.7887C21.5064 22.071 21.0487 22.071 20.7664 21.7887L17.1001 18.1224Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M11 6.50049C9.85918 6.50049 8.8433 7.03256 8.18946 7.86085L7.50991 7.52287C7.15707 7.34738 6.72802 7.48964 6.5516 7.84063C6.37518 8.19161 6.5182 8.6184 6.87104 8.7939L7.54991 9.13155C7.47077 9.42545 7.42857 9.73438 7.42857 10.0531V10.29H6.71429C6.3198 10.29 6 10.6081 6 11.0005C6 11.3929 6.3198 11.711 6.71429 11.711H7.42857V11.9479C7.42857 12.2666 7.47077 12.5755 7.54991 12.8694L6.87104 13.2071C6.5182 13.3826 6.37518 13.8094 6.5516 14.1604C6.72802 14.5113 7.15707 14.6536 7.50991 14.4781L8.18946 14.1401C8.8433 14.9684 9.85918 15.5005 11 15.5005C12.1408 15.5005 13.1567 14.9684 13.8105 14.1401L14.4901 14.4781C14.8429 14.6536 15.272 14.5113 15.4484 14.1604C15.6248 13.8094 15.4818 13.3826 15.129 13.2071L14.4501 12.8694C14.5292 12.5755 14.5714 12.2666 14.5714 11.9479V11.711H15.2857C15.6802 11.711 16 11.3929 16 11.0005C16 10.6081 15.6802 10.29 15.2857 10.29H14.5714V10.0531C14.5714 9.73438 14.5292 9.42545 14.4501 9.13155L15.129 8.7939C15.4818 8.6184 15.6248 8.19161 15.4484 7.84063C15.272 7.48964 14.8429 7.34738 14.4901 7.52287L13.8105 7.86085C13.1567 7.03256 12.1408 6.50049 11 6.50049ZM11.0003 7.92139C10.0673 7.92139 9.27352 8.51454 8.97935 9.34244H13.0212C12.727 8.51454 11.9333 7.92139 11.0003 7.92139ZM8.85742 11.9477V10.7635H10.286V13.958C9.45371 13.6654 8.85742 12.8758 8.85742 11.9477ZM11.7146 13.958V10.7635H13.1431V11.9477C13.1431 12.8758 12.5468 13.6654 11.7146 13.958Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.85714 11.9479C8.85714 12.876 9.45343 13.6655 10.2857 13.9581V10.7636H8.85714V11.9479ZM13.0209 9.34259C12.7268 8.51469 11.933 7.92154 11 7.92154C10.067 7.92154 9.27324 8.51469 8.97908 9.34259H13.0209ZM13.1429 10.7636H11.7143V13.9581C12.5466 13.6655 13.1429 12.876 13.1429 11.9479V10.7636Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M21.7883 21.7888C22.0706 21.5065 22.0706 21.0487 21.7883 20.7664L18.1224 17.1006C19.4884 15.5011 20.3133 13.4255 20.3133 11.1571C20.3133 6.10005 16.2137 2.00049 11.1566 2.00049C6.09956 2.00049 2 6.10005 2 11.1571C2 16.2142 6.09956 20.3137 11.1566 20.3137C13.4249 20.3137 15.5006 19.489 17.1 18.123L20.7659 21.7888C21.0483 22.0711 21.506 22.0711 21.7883 21.7888ZM8.18946 7.86085C8.8433 7.03256 9.85918 6.50049 11 6.50049C12.1408 6.50049 13.1567 7.03256 13.8105 7.86085L14.4901 7.52287C14.8429 7.34738 15.272 7.48964 15.4484 7.84063C15.6248 8.19161 15.4818 8.6184 15.129 8.7939L14.4501 9.13155C14.5292 9.42545 14.5714 9.73438 14.5714 10.0531V10.29H15.2857C15.6802 10.29 16 10.6081 16 11.0005C16 11.3929 15.6802 11.711 15.2857 11.711H14.5714V11.9479C14.5714 12.2666 14.5292 12.5755 14.4501 12.8694L15.129 13.2071C15.4818 13.3826 15.6248 13.8094 15.4484 14.1604C15.272 14.5113 14.8429 14.6536 14.4901 14.4781L13.8105 14.1401C13.1567 14.9684 12.1408 15.5005 11 15.5005C9.85918 15.5005 8.8433 14.9684 8.18946 14.1401L7.50991 14.4781C7.15707 14.6536 6.72802 14.5113 6.5516 14.1604C6.37518 13.8094 6.5182 13.3826 6.87104 13.2071L7.54991 12.8694C7.47077 12.5755 7.42857 12.2666 7.42857 11.9479V11.711H6.71429C6.3198 11.711 6 11.3929 6 11.0005C6 10.6081 6.3198 10.29 6.71429 10.29H7.42857V10.0531C7.42857 9.73438 7.47077 9.42545 7.54991 9.13155L6.87104 8.7939C6.5182 8.6184 6.37518 8.19161 6.5516 7.84063C6.72802 7.48964 7.15707 7.34738 7.50991 7.52287L8.18946 7.86085Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMagniferBug as IconComponentType).keywords = [
  "magnifer",
  "bug",
  "hemipteran",
  "hemipteron",
  "badger",
  "germ",
  "microbe",
  "tap",
  "tease",
  "beleaguer",
  "harass"
];

export default IconMagniferBug as IconComponentType;