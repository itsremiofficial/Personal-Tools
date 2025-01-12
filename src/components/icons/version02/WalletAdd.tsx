import { FC } from 'react';

const IconWalletAdd: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.4" : "1"}><path d="M14.9316 15.4385H9.93164" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /><path d="M12.4316 12.998V17.998" stroke="currentColor" strokeWidth={width} strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" /></g><path d="M13.3299 2.51814L13.2999 2.58814L10.3999 9.31814H7.54988C6.86988 9.31814 6.21988 9.45814 5.62988 9.70814L7.37988 5.52814L7.41988 5.42814L7.48988 5.26814C7.50988 5.20814 7.52988 5.14814 7.55988 5.09814C8.86988 2.06814 10.3499 1.37814 13.3299 2.51814Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M18.7204 9.51819C18.2704 9.37819 17.7904 9.31819 17.3104 9.31819H10.4004L13.3004 2.58819L13.3304 2.51819C13.4804 2.56819 13.6204 2.63819 13.7704 2.69819L15.9804 3.62819C17.2104 4.13819 18.0704 4.66819 18.5904 5.30819C18.6904 5.42819 18.7704 5.53819 18.8404 5.66819C18.9304 5.80819 19.0004 5.94819 19.0404 6.09819C19.0804 6.18819 19.1104 6.27819 19.1304 6.35819C19.4004 7.19819 19.2404 8.22819 18.7204 9.51819Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path d="M22.1916 14.1984V16.1484C22.1916 16.3484 22.1816 16.5484 22.1716 16.7484C21.9816 20.2384 20.0316 21.9984 16.3316 21.9984H8.53164C8.29164 21.9984 8.05164 21.9784 7.82164 21.9484C4.64164 21.7384 2.94164 20.0384 2.73164 16.8584C2.70164 16.6284 2.68164 16.3884 2.68164 16.1484V14.1984C2.68164 12.1884 3.90164 10.4584 5.64164 9.70836C6.24164 9.45836 6.88164 9.31836 7.56164 9.31836H17.3216C17.8116 9.31836 18.2916 9.38836 18.7316 9.51836C20.7216 10.1284 22.1916 11.9884 22.1916 14.1984Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M7.37992 5.52808L5.62992 9.70808C3.88992 10.4581 2.66992 12.1881 2.66992 14.1981V11.2681C2.66992 8.42808 4.68992 6.05808 7.37992 5.52808Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /><path opacity={duotone ? "0.4" : "1"} d="M22.1885 11.2677V14.1977C22.1885 11.9977 20.7285 10.1277 18.7285 9.52766C19.2485 8.22766 19.3985 7.20766 19.1485 6.35766C19.1285 6.26766 19.0985 6.17766 19.0585 6.09766C20.9185 7.05766 22.1885 9.02766 22.1885 11.2677Z" stroke="currentColor" strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.8" : "1"} d="M13.5701 2.51997L13.5401 2.58997L10.6401 9.31997H7.79012C7.11012 9.31997 6.47012 9.44997 5.87012 9.70997L7.62012 5.52997L7.66012 5.43997L7.72012 5.27997C7.75012 5.20997 7.77012 5.14997 7.80012 5.09997C9.11012 2.06997 10.5901 1.37997 13.5701 2.51997Z" fill="currentColor" /><path d="M18.9596 9.52002C18.5096 9.39002 18.0396 9.32002 17.5496 9.32002H10.6396L13.5396 2.59002L13.5696 2.52002C13.7096 2.57002 13.8596 2.64002 14.0096 2.69002L16.2196 3.62002C17.4496 4.13002 18.3096 4.66002 18.8396 5.30002C18.9296 5.42002 19.0096 5.53002 19.0896 5.66002C19.1796 5.80002 19.2496 5.94002 19.2896 6.09002C19.3296 6.18002 19.3596 6.26002 19.3796 6.35002C19.6396 7.20002 19.4796 8.23002 18.9596 9.52002Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M22.4302 14.1999V16.1499C22.4302 16.3499 22.4202 16.5499 22.4102 16.7399C22.2202 20.2399 20.2702 21.9999 16.5702 21.9999H8.77016C8.52016 21.9999 8.29016 21.9799 8.06016 21.9499C4.88016 21.7399 3.18016 20.0399 2.96016 16.8599C2.93016 16.6199 2.91016 16.3899 2.91016 16.1499V14.1999C2.91016 12.1899 4.13016 10.4599 5.87016 9.70995C6.47016 9.44995 7.11016 9.31995 7.79016 9.31995H17.5502C18.0402 9.31995 18.5102 9.38995 18.9602 9.51995C20.9602 10.1299 22.4302 11.9899 22.4302 14.1999Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M7.62016 5.53003L5.87016 9.71003C4.13016 10.46 2.91016 12.19 2.91016 14.2V11.27C2.91016 8.43003 4.93016 6.06003 7.62016 5.53003Z" fill="currentColor" /><path opacity={duotone ? "0.6" : "1"} d="M22.43 11.27V14.2C22.43 11.99 20.96 10.13 18.96 9.51997C19.48 8.22997 19.64 7.19997 19.38 6.34997C19.36 6.25997 19.33 6.17997 19.29 6.08997C21.16 7.05997 22.43 9.02997 22.43 11.27Z" fill="currentColor" /><path d="M15.1699 14.69H13.4199V13C13.4199 12.59 13.0799 12.25 12.6699 12.25C12.2599 12.25 11.9199 12.59 11.9199 13V14.69H10.1699C9.75992 14.69 9.41992 15.03 9.41992 15.44C9.41992 15.85 9.75992 16.19 10.1699 16.19H11.9199V18C11.9199 18.41 12.2599 18.75 12.6699 18.75C13.0799 18.75 13.4199 18.41 13.4199 18V16.19H15.1699C15.5799 16.19 15.9199 15.85 15.9199 15.44C15.9199 15.03 15.5799 14.69 15.1699 14.69Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.6121 2.20995L10.2021 7.81995H7.79207C7.39207 7.81995 7.00207 7.84995 6.62207 7.92995L7.62207 5.52995L7.66207 5.43995L7.72207 5.27995C7.75207 5.20995 7.77207 5.14995 7.80207 5.09995C8.96207 2.40995 10.2621 1.56995 12.6121 2.20995Z" fill="currentColor" /><path d="M19.402 8.09002L19.382 8.08002C18.782 7.91002 18.172 7.82002 17.552 7.82002H11.292L13.542 2.59002L13.572 2.52002C13.712 2.57002 13.862 2.64002 14.012 2.69002L16.222 3.62002C17.452 4.13002 18.312 4.66002 18.842 5.30002C18.932 5.42002 19.012 5.53002 19.092 5.66002C19.182 5.80002 19.252 5.94002 19.292 6.09002C19.332 6.18002 19.362 6.26002 19.382 6.35002C19.532 6.86002 19.542 7.44002 19.402 8.09002Z" fill="currentColor" /><path d="M18.9621 9.51995C18.5121 9.38995 18.0421 9.31995 17.5521 9.31995H7.79211C7.11211 9.31995 6.47211 9.44995 5.87211 9.70995C4.13211 10.4599 2.91211 12.1899 2.91211 14.1999V16.1499C2.91211 16.3899 2.93211 16.6199 2.96211 16.8599C3.18211 20.0399 4.88211 21.7399 8.06211 21.9499C8.29211 21.9799 8.52211 21.9999 8.77211 21.9999H16.5721C20.2721 21.9999 22.2221 20.2399 22.4121 16.7399C22.4221 16.5499 22.4321 16.3499 22.4321 16.1499V14.1999C22.4321 11.9899 20.9621 10.1299 18.9621 9.51995ZM15.1721 16.1899H13.4221V17.9999C13.4221 18.4099 13.0821 18.7499 12.6721 18.7499C12.2621 18.7499 11.9221 18.4099 11.9221 17.9999V16.1899H10.1721C9.76211 16.1899 9.42211 15.8599 9.42211 15.4399C9.42211 15.0299 9.76211 14.6899 10.1721 14.6899H11.9221V12.9999C11.9221 12.5899 12.2621 12.2499 12.6721 12.2499C13.0821 12.2499 13.4221 12.5899 13.4221 12.9999V14.6899H15.1721C15.5821 14.6899 15.9221 15.0299 15.9221 15.4399C15.9221 15.8599 15.5821 16.1899 15.1721 16.1899Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWalletAdd as IconComponent).keywords = [
  "wallet",
  "add",
  "billfold",
  "notecase",
  "portfolio",
  "paper",
  "book",
  "paperwork",
  "briefcase",
  "suitcase",
  "cash",
  "total",
  "sum up",
  "tot up",
  "add up",
  "sum",
  "summate",
  "impart",
  "contribute",
  "supply"
];

export default IconWalletAdd as IconComponent;