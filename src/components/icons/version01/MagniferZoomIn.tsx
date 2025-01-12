import { FC } from 'react';

const IconMagniferZoomIn: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity={duotone ? "0.5" : "1"} cx="11.5" cy="11.5005" r="9.5" stroke="currentColor" strokeWidth={width} /><path d="M18.5 18.5005L22 22.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M9 11.5005H11.5M11.5 11.5005H14M11.5 11.5005V14.0005M11.5 11.5005V9.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.5" : "1"}><path d="M11.1566 20.3137C16.2137 20.3137 20.3133 16.2142 20.3133 11.1571C20.3133 6.10005 16.2137 2.00049 11.1566 2.00049C6.09956 2.00049 2 6.10005 2 11.1571C2 16.2142 6.09956 20.3137 11.1566 20.3137Z" fill="currentColor" /></g><path fillRule="evenodd" clipRule="evenodd" d="M11.1565 8.0249C11.5557 8.0249 11.8793 8.34855 11.8793 8.74779V10.4345H13.5661C13.9653 10.4345 14.289 10.7582 14.289 11.1574C14.289 11.5567 13.9653 11.8803 13.5661 11.8803H11.8793V13.5671C11.8793 13.9663 11.5557 14.29 11.1565 14.29C10.7572 14.29 10.4336 13.9663 10.4336 13.5671V11.8803H8.74682C8.34758 11.8803 8.02393 11.5567 8.02393 11.1574C8.02393 10.7582 8.34758 10.4345 8.74682 10.4345H10.4336V8.74779C10.4336 8.34855 10.7572 8.0249 11.1565 8.0249Z" fill="currentColor" /><path d="M17.1001 18.1229L20.7664 21.7892C21.0487 22.0715 21.5064 22.0715 21.7887 21.7892C22.071 21.5069 22.071 21.0492 21.7887 20.7669L18.1224 17.1006C17.809 17.4676 17.4671 17.8095 17.1001 18.1229Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21.7883 21.7888C22.0706 21.5065 22.0706 21.0487 21.7883 20.7664L18.1224 17.1006C19.4885 15.5011 20.3133 13.4254 20.3133 11.1571C20.3133 6.10005 16.2137 2.00049 11.1566 2.00049C6.09956 2.00049 2 6.10005 2 11.1571C2 16.2142 6.09956 20.3137 11.1566 20.3137C13.4249 20.3137 15.5006 19.4889 17.1001 18.1229L20.7659 21.7888C21.0483 22.0711 21.506 22.0711 21.7883 21.7888ZM11.1566 8.02458C11.5559 8.02458 11.8795 8.34823 11.8795 8.74748V10.4342H13.5663C13.9655 10.4342 14.2892 10.7579 14.2892 11.1571C14.2892 11.5564 13.9655 11.88 13.5663 11.88H11.8795V13.5668C11.8795 13.966 11.5559 14.2896 11.1566 14.2896C10.7574 14.2896 10.4337 13.966 10.4337 13.5668V11.88H8.74699C8.34775 11.88 8.0241 11.5564 8.0241 11.1571C8.0241 10.7579 8.34775 10.4342 8.74699 10.4342H10.4337V8.74748C10.4337 8.34823 10.7574 8.02458 11.1566 8.02458Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconMagniferZoomIn as IconComponent).keywords = [
  "magnifer",
  "zoom",
  "in",
  "whizz",
  "surge",
  "soar",
  "rapid climb",
  "rapid growth",
  "soar up",
  "soar upwards",
  "whizz along",
  "zoom along",
  "cbs",
  "nsis",
  "nih",
  "nsi",
  "establishment",
  "immigration",
  "without",
  "elected",
  "adherents"
];

export default IconMagniferZoomIn as IconComponent;