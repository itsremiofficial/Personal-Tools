import { FC } from 'react';

const IconShieldCross: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3 10.4171C3 7.21956 3 5.62077 3.37752 5.0829C3.75503 4.54503 5.25832 4.03045 8.26491 3.00128L8.83772 2.80521C10.405 2.26873 11.1886 2.00049 12 2.00049C12.8114 2.00049 13.595 2.26873 15.1623 2.80521L15.7351 3.00128C18.7417 4.03045 20.245 4.54503 20.6225 5.0829C21 5.62077 21 7.21956 21 10.4171C21 10.9001 21 11.4239 21 11.9918C21 17.6299 16.761 20.366 14.1014 21.5278C13.38 21.8429 13.0193 22.0005 12 22.0005C10.9807 22.0005 10.62 21.8429 9.89856 21.5278C7.23896 20.366 3 17.6299 3 11.9918C3 11.4239 3 10.9001 3 10.4171Z" stroke="currentColor" strokeWidth={width} /><path d="M14.5 9.50049L9.50002 14.5005M9.5 9.50047L14.5 14.5004" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3 10.4171C3 7.21956 3 5.62077 3.37752 5.0829C3.75503 4.54503 5.25832 4.03045 8.26491 3.00128L8.83772 2.8052C10.405 2.26873 11.1886 2.00049 12 2.00049C12.8114 2.00049 13.595 2.26873 15.1623 2.80521L15.7351 3.00128C18.7417 4.03045 20.245 4.54503 20.6225 5.0829C21 5.62077 21 7.21956 21 10.4171V11.9918C21 17.6299 16.761 20.366 14.1014 21.5278C13.38 21.8429 13.0193 22.0005 12 22.0005C10.9807 22.0005 10.62 21.8429 9.89856 21.5278C7.23896 20.366 3 17.6299 3 11.9918V10.4171Z" fill="currentColor" /><path d="M10.0303 8.97016C9.73744 8.67726 9.26256 8.67726 8.96967 8.97016C8.67678 9.26305 8.67678 9.73793 8.96967 10.0308L10.9394 12.0005L8.96969 13.9702C8.6768 14.2631 8.6768 14.7379 8.96969 15.0308C9.26258 15.3237 9.73746 15.3237 10.0304 15.0308L12 13.0612L13.9696 15.0308C14.2625 15.3237 14.7374 15.3237 15.0303 15.0308C15.3232 14.7379 15.3232 14.263 15.0303 13.9701L13.0607 12.0005L15.0303 10.0308C15.3232 9.73795 15.3232 9.26307 15.0303 8.97018C14.7374 8.67729 14.2626 8.67729 13.9697 8.97018L12 10.9398L10.0303 8.97016Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.37752 5.0829C3 5.62077 3 7.21956 3 10.4171V11.9918C3 17.6299 7.23896 20.366 9.89856 21.5278C10.62 21.8429 10.9807 22.0005 12 22.0005C13.0193 22.0005 13.38 21.8429 14.1014 21.5278C16.761 20.366 21 17.6299 21 11.9918V10.4171C21 7.21956 21 5.62077 20.6225 5.0829C20.245 4.54503 18.7417 4.03045 15.7351 3.00128L15.1623 2.80521C13.595 2.26873 12.8114 2.00049 12 2.00049C11.1886 2.00049 10.405 2.26873 8.83772 2.8052L8.26491 3.00128C5.25832 4.03045 3.75503 4.54503 3.37752 5.0829ZM10.0303 8.97014C9.73744 8.67724 9.26256 8.67724 8.96967 8.97014C8.67678 9.26303 8.67678 9.73791 8.96967 10.0308L10.9394 12.0005L8.96969 13.9701C8.6768 14.263 8.6768 14.7379 8.96969 15.0308C9.26258 15.3237 9.73746 15.3237 10.0304 15.0308L12 13.0611L13.9696 15.0308C14.2625 15.3237 14.7374 15.3237 15.0303 15.0308C15.3232 14.7379 15.3232 14.263 15.0303 13.9701L13.0607 12.0005L15.0303 10.0308C15.3232 9.73793 15.3232 9.26305 15.0303 8.97016C14.7374 8.67727 14.2626 8.67727 13.9697 8.97016L12 10.9398L10.0303 8.97014Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconShieldCross as IconComponent).keywords = [
  "shield",
  "cross",
  "buckler",
  "screen",
  "harbor",
  "harbour",
  "armoured",
  "armor",
  "breastplate",
  "ribbon",
  "visor",
  "foil",
  "crisscross",
  "intersect",
  "transverse",
  "transversal",
  "crosswise",
  "mark",
  "cut across",
  "hybridization"
];

export default IconShieldCross as IconComponent;