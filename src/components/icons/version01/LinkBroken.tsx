import { FC } from 'react';

const IconLinkBroken: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 8.00049L8 10.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M6 4.00049L8 7.00049" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M11 6.56301L14.7001 2.93804C16.1597 1.50802 18.7629 1.73987 20.5145 3.45589C22.266 5.17191 22.5027 7.72225 21.043 9.15227L18.1358 12.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M15 15.5871L10.9653 20.0015C9.57254 21.5252 7.0887 21.2782 5.41744 19.4497C3.74618 17.6212 3.52038 14.9037 4.91309 13.38L6.17395 12.0005" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity={duotone ? "0.5" : "1"}><path d="M19.9896 3.99164C18.4369 2.47045 16.3083 2.41242 15.2249 3.47379L11.5249 7.09876C11.229 7.38864 10.7541 7.38377 10.4643 7.08789C10.1744 6.79201 10.1793 6.31716 10.4751 6.02728L14.1752 2.40231C16.0111 0.603641 19.0889 1.00932 21.0393 2.92016C22.9925 4.83368 23.4177 7.87571 21.5679 9.68801L18.6607 12.5362C18.3648 12.8261 17.89 12.8212 17.6001 12.5254C17.3102 12.2295 17.3151 11.7546 17.611 11.4648L20.5182 8.61654C21.5876 7.56881 21.5396 5.51015 19.9896 3.99164Z" fill="currentColor" /><path d="M6.72756 12.5065C7.00701 12.2007 6.9857 11.7264 6.67995 11.4469C6.37421 11.1674 5.89981 11.1888 5.62036 11.4945L4.3595 12.874C2.63266 14.7633 3.00984 17.9273 4.86385 19.9557C6.72901 21.9963 9.73429 22.4599 11.5189 20.5075L15.5536 16.0931C15.8331 15.7874 15.8117 15.313 15.506 15.0335C15.2003 14.7541 14.7259 14.7754 14.4464 15.0811L10.4117 19.4955C9.41079 20.5905 7.44839 20.5601 5.97104 18.9437C4.48253 17.3152 4.4081 15.0442 5.4667 13.886L6.72756 12.5065Z" fill="currentColor" /></g><path d="M6.62424 3.58442C6.39448 3.23977 5.92882 3.14664 5.58418 3.37641C5.23953 3.60617 5.1464 4.07182 5.37617 4.41647L7.37617 7.41647C7.60593 7.76112 8.07158 7.85425 8.41623 7.62448C8.76088 7.39472 8.85401 6.92907 8.62424 6.58442L6.62424 3.58442Z" fill="currentColor" /><path d="M2.23737 7.28893C1.84442 7.15795 1.41968 7.37032 1.28869 7.76328C1.15771 8.15623 1.37008 8.58097 1.76303 8.71196L7.76303 10.712C8.15599 10.8429 8.58073 10.6306 8.71172 10.2376C8.8427 9.84466 8.63033 9.41992 8.23737 9.28893L2.23737 7.28893Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9896 3.99164C18.4369 2.47045 16.3082 2.41242 15.2249 3.47379L11.5248 7.09876C11.2289 7.38864 10.7541 7.38377 10.4642 7.08789C10.1743 6.79201 10.1792 6.31716 10.4751 6.02728L14.1752 2.40231C16.0111 0.603641 19.0889 1.00932 21.0393 2.92016C22.9924 4.83368 23.4177 7.87571 21.5679 9.68801L18.6607 12.5362C18.3648 12.8261 17.8899 12.8212 17.6001 12.5254C17.3102 12.2295 17.3151 11.7546 17.6109 11.4648L20.5181 8.61654C21.5875 7.56881 21.5395 5.51015 19.9896 3.99164Z" fill="currentColor" /><path d="M6.624 3.58447C6.39423 3.23983 5.92858 3.1467 5.58393 3.37646C5.23929 3.60623 5.14616 4.07188 5.37592 4.41653L7.37592 7.41652C7.60569 7.76117 8.07134 7.8543 8.41598 7.62454C8.76063 7.39477 8.85376 6.92912 8.624 6.58448L6.624 3.58447Z" fill="currentColor" /><path d="M2.23713 7.28899C1.84417 7.158 1.41943 7.37037 1.28845 7.76333C1.15746 8.15629 1.36983 8.58103 1.76279 8.71201L7.76279 10.712C8.15575 10.843 8.58049 10.6306 8.71147 10.2377C8.84246 9.84471 8.63009 9.41997 8.23713 9.28899L2.23713 7.28899Z" fill="currentColor" /><path d="M6.72751 12.5065C7.00696 12.2007 6.98565 11.7264 6.67991 11.4469C6.37416 11.1674 5.89977 11.1888 5.62031 11.4945L4.35946 12.874C2.63262 14.7633 3.00979 17.9273 4.8638 19.9557C6.72896 21.9963 9.73425 22.4599 11.5188 20.5075L15.5536 16.0931C15.833 15.7874 15.8117 15.313 15.5059 15.0335C15.2002 14.7541 14.7258 14.7754 14.4464 15.0811L10.4116 19.4955C9.41075 20.5905 7.44834 20.5601 5.97099 18.9437C4.48249 17.3152 4.40806 15.0442 5.46665 13.886L6.72751 12.5065Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconLinkBroken as IconComponent).keywords = [
  "link",
  "broken",
  "linkup",
  "connection",
  "nexus",
  "connexion",
  "connectedness",
  "connect",
  "tie-in",
  "unite",
  "associate",
  "fractured",
  "shattered",
  "fragmented",
  "crushed",
  "destroyed",
  "damaged",
  "chipped",
  "cracked",
  "rugged"
];

export default IconLinkBroken as IconComponent;