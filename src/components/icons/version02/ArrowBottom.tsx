import { FC } from 'react';

const IconArrowBottom: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 6H15.34C18.65 6 20.01 8.35 18.35 11.22L17.01 13.53L15.67 15.84C14.01 18.71 11.3 18.71 9.63997 15.84L8.29997 13.53L6.95997 11.22C5.32997 8.35 6.67997 6 9.99997 6H12.67Z" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0001 6H15.3401C18.6601 6 20.0101 8.35 18.3601 11.22L17.6201 12.5C17.4401 12.81 17.1101 13 16.7501 13H8.59009C8.23009 13 7.90009 12.81 7.72009 12.5L6.98009 11.22C5.33009 8.35 6.68009 6 10.0001 6Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M9.45998 14H15.89C16.28 14 16.52 14.42 16.32 14.75L15.68 15.85C14.03 18.72 11.31 18.72 9.65998 15.85L9.01998 14.75C8.82998 14.42 9.06998 14 9.45998 14Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0001 6H15.3401C18.6601 6 20.0101 8.35 18.3601 11.22L17.6201 12.5C17.4401 12.81 17.1101 13 16.7501 13H8.59009C8.23009 13 7.90009 12.81 7.72009 12.5L6.98009 11.22C5.33009 8.35 6.68009 6 10.0001 6Z" fill="currentColor" /><path d="M9.45998 14H15.89C16.28 14 16.52 14.42 16.32 14.75L15.68 15.85C14.03 18.72 11.31 18.72 9.65998 15.85L9.01998 14.75C8.82998 14.42 9.06998 14 9.45998 14Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconArrowBottom as IconComponent).keywords = [
  "arrow",
  "bottom",
  "pointer",
  "archer",
  "archery",
  "dart",
  "arrowhead",
  "bolt",
  "spike",
  "rope",
  "roof",
  "ass",
  "bed",
  "backside",
  "underside",
  "undersurface",
  "penetrate",
  "derriere",
  "fathom",
  "seat"
];

export default IconArrowBottom as IconComponent;