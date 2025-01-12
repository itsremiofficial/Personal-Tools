import { FC } from 'react';

const IconChecklist: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5.50024L3.21429 7.00024L7.5 3.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.5" : "1"} d="M2 12.5002L3.21429 14.0002L7.5 10.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M2 19.5002L3.21429 21.0002L7.5 17.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22 19.0002L12 19.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M22 12.0002L12 12.0002" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M22 5.00024L12 5.00024" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.04832 2.48851C8.33094 2.79132 8.31458 3.26591 8.01176 3.54854L3.72605 7.54854C3.57393 7.69051 3.36967 7.76291 3.1621 7.74843C2.95453 7.73394 2.7623 7.63387 2.63138 7.47215L1.41709 5.97215C1.15647 5.6502 1.20618 5.17794 1.52813 4.91731C1.85007 4.65669 2.32234 4.7064 2.58296 5.02835L3.29089 5.90286L6.98829 2.45196C7.2911 2.16933 7.76569 2.1857 8.04832 2.48851ZM11.25 5.00025C11.25 4.58603 11.5858 4.25025 12 4.25025H22C22.4142 4.25025 22.75 4.58603 22.75 5.00025C22.75 5.41446 22.4142 5.75025 22 5.75025H12C11.5858 5.75025 11.25 5.41446 11.25 5.00025ZM8.04832 16.4885C8.33094 16.7913 8.31458 17.2659 8.01176 17.5485L3.72605 21.5485C3.57393 21.6905 3.36967 21.7629 3.1621 21.7484C2.95453 21.7339 2.7623 21.6339 2.63138 21.4721L1.41709 19.9721C1.15647 19.6502 1.20618 19.1779 1.52813 18.9173C1.85007 18.6567 2.32234 18.7064 2.58296 19.0283L3.29089 19.9029L6.98829 16.452C7.2911 16.1693 7.76569 16.1857 8.04832 16.4885ZM11.25 19.0002C11.25 18.586 11.5858 18.2502 12 18.2502H22C22.4142 18.2502 22.75 18.586 22.75 19.0002C22.75 19.4145 22.4142 19.7502 22 19.7502H12C11.5858 19.7502 11.25 19.4145 11.25 19.0002Z" fill="currentColor" /><g opacity={duotone ? "0.5" : "1"}><path d="M8.04832 9.48851C8.33094 9.79132 8.31458 10.2659 8.01176 10.5485L3.72605 14.5485C3.57393 14.6905 3.36967 14.7629 3.1621 14.7484C2.95453 14.7339 2.7623 14.6339 2.63138 14.4721L1.41709 12.9721C1.15647 12.6502 1.20618 12.1779 1.52813 11.9173C1.85007 11.6567 2.32234 11.7064 2.58296 12.0283L3.29089 12.9029L6.98829 9.45196C7.2911 9.16933 7.76569 9.1857 8.04832 9.48851Z" fill="currentColor" /><path d="M11.25 12.0002C11.25 11.586 11.5858 11.2502 12 11.2502H22C22.4142 11.2502 22.75 11.586 22.75 12.0002C22.75 12.4145 22.4142 12.7502 22 12.7502H12C11.5858 12.7502 11.25 12.4145 11.25 12.0002Z" fill="currentColor" /></g></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8.04832 2.48851C8.33094 2.79132 8.31458 3.26591 8.01176 3.54854L3.72605 7.54854C3.57393 7.69051 3.36967 7.76291 3.1621 7.74843C2.95453 7.73394 2.7623 7.63387 2.63138 7.47215L1.41709 5.97215C1.15647 5.6502 1.20618 5.17794 1.52813 4.91731C1.85007 4.65669 2.32234 4.7064 2.58296 5.02835L3.29089 5.90286L6.98829 2.45196C7.2911 2.16933 7.76569 2.1857 8.04832 2.48851ZM11.25 5.00025C11.25 4.58603 11.5858 4.25025 12 4.25025H22C22.4142 4.25025 22.75 4.58603 22.75 5.00025C22.75 5.41446 22.4142 5.75025 22 5.75025H12C11.5858 5.75025 11.25 5.41446 11.25 5.00025ZM8.04832 9.48851C8.33094 9.79132 8.31458 10.2659 8.01176 10.5485L3.72605 14.5485C3.57393 14.6905 3.36967 14.7629 3.1621 14.7484C2.95453 14.7339 2.7623 14.6339 2.63138 14.4721L1.41709 12.9721C1.15647 12.6502 1.20618 12.1779 1.52813 11.9173C1.85007 11.6567 2.32234 11.7064 2.58296 12.0283L3.29089 12.9029L6.98829 9.45196C7.2911 9.16933 7.76569 9.1857 8.04832 9.48851ZM11.25 12.0002C11.25 11.586 11.5858 11.2502 12 11.2502H22C22.4142 11.2502 22.75 11.586 22.75 12.0002C22.75 12.4145 22.4142 12.7502 22 12.7502H12C11.5858 12.7502 11.25 12.4145 11.25 12.0002ZM8.04832 16.4885C8.33094 16.7913 8.31458 17.2659 8.01176 17.5485L3.72605 21.5485C3.57393 21.6905 3.36967 21.7629 3.1621 21.7484C2.95453 21.7339 2.7623 21.6339 2.63138 21.4721L1.41709 19.9721C1.15647 19.6502 1.20618 19.1779 1.52813 18.9173C1.85007 18.6567 2.32234 18.7064 2.58296 19.0283L3.29089 19.9029L6.98829 16.452C7.2911 16.1693 7.76569 16.1857 8.04832 16.4885ZM11.25 19.0002C11.25 18.586 11.5858 18.2502 12 18.2502H22C22.4142 18.2502 22.75 18.586 22.75 19.0002C22.75 19.4145 22.4142 19.7502 22 19.7502H12C11.5858 19.7502 11.25 19.4145 11.25 19.0002Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconChecklist as IconComponent).keywords = [
  "checklist",
  "listed",
  "listing",
  "aide-mémoire",
  "inventory",
  "schedule",
  "audit",
  "reference",
  "summary",
  "directory"
];

export default IconChecklist as IconComponent;