import { FC } from 'react';

const IconMagniferZoomOutMinimalistic: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity={duotone ? "0.5" : "1"} cx="11.5" cy="11.5005" r="9.5" stroke="currentColor" strokeWidth={width} /><path d="M9 11.5005H11.5H14" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M20 20.0005L22 22.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.5" : "1"}><path d="M11.1566 20.3137C16.2137 20.3137 20.3133 16.2142 20.3133 11.1571C20.3133 6.10005 16.2137 2.00049 11.1566 2.00049C6.09956 2.00049 2 6.10005 2 11.1571C2 16.2142 6.09956 20.3137 11.1566 20.3137Z" fill="currentColor" /></g><path fillRule="evenodd" clipRule="evenodd" d="M8.02393 11.157C8.02393 10.7577 8.34758 10.4341 8.74682 10.4341H13.5661C13.9653 10.4341 14.289 10.7577 14.289 11.157C14.289 11.5562 13.9653 11.8799 13.5661 11.8799H8.74682C8.34758 11.8799 8.02393 11.5562 8.02393 11.157Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18.8387 18.8392C19.121 18.5569 19.5787 18.5569 19.861 18.8392L21.7887 20.7669C22.071 21.0492 22.071 21.5069 21.7887 21.7892C21.5064 22.0715 21.0487 22.0715 20.7664 21.7892L18.8387 19.8615C18.5564 19.5792 18.5564 19.1215 18.8387 18.8392Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1566 20.3137C16.2137 20.3137 20.3133 16.2142 20.3133 11.1571C20.3133 6.10005 16.2137 2.00049 11.1566 2.00049C6.09956 2.00049 2 6.10005 2 11.1571C2 16.2142 6.09956 20.3137 11.1566 20.3137Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M8.02393 11.157C8.02393 10.7577 8.34758 10.4341 8.74682 10.4341H13.5661C13.9653 10.4341 14.289 10.7577 14.289 11.157C14.289 11.5562 13.9653 11.8799 13.5661 11.8799H8.74682C8.34758 11.8799 8.02393 11.5562 8.02393 11.157Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M18.8387 18.8392C19.121 18.5569 19.5787 18.5569 19.861 18.8392L21.7887 20.7669C22.071 21.0492 22.071 21.5069 21.7887 21.7892C21.5064 22.0715 21.0487 22.0715 20.7664 21.7892L18.8387 19.8615C18.5564 19.5792 18.5564 19.1215 18.8387 18.8392Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMagniferZoomOutMinimalistic as IconComponent).keywords = [
  "magnifer",
  "zoom",
  "out",
  "minimalistic",
  "whizz",
  "surge",
  "soar",
  "rapid climb",
  "rapid growth",
  "soar up",
  "soar upwards",
  "whizz along",
  "zoom along",
  "away",
  "outer",
  "exterior",
  "retired",
  "extinct",
  "dead",
  "down",
  "extinguished",
  "come out",
  "modularistic",
  "brutalistic",
  "localistic",
  "reductionist",
  "exhibitional",
  "monogynous",
  "simplificational",
  "reductionistic",
  "automatistic"
];

export default IconMagniferZoomOutMinimalistic as IconComponent;