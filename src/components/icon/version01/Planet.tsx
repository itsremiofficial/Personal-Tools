import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconPlanet: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M17.8486 6.19085C19.8605 5.81929 21.3391 5.98001 21.8291 6.76327C22.8403 8.37947 19.2594 12.0342 13.8309 14.9264C8.40242 17.8185 3.18203 18.8529 2.17085 17.2367C1.63758 16.3844 2.38148 14.9651 4 13.3897" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" fill="currentColor" /><path d="M17.7124 5.45331C18.7594 5.25995 19.7184 5.19444 20.5094 5.30066C21.2797 5.40411 22.0451 5.69443 22.465 6.36546C22.9112 7.07875 22.7767 7.90702 22.4527 8.62306C22.1235 9.35067 21.5345 10.1218 20.7806 10.8912C19.2652 12.4379 16.9446 14.1173 14.1836 15.5883C11.4215 17.0599 8.68925 18.0721 6.49016 18.5079C5.39465 18.7249 4.39198 18.807 3.56747 18.709C2.76733 18.614 1.96781 18.3262 1.53504 17.6345C1.06424 16.882 1.23861 16.0043 1.60464 15.2551C1.97965 14.4875 2.63746 13.6693 3.47687 12.8522L4.00002 12.4165C4.00002 12.6349 4.08338 13.1257 4.16812 13.5624C4.21264 13.7918 4.25755 14.0062 4.29095 14.1584C3.63911 14.8237 3.19305 15.421 2.95238 15.9136C2.67515 16.481 2.74419 16.7391 2.80667 16.8389C2.87949 16.9553 3.11171 17.1443 3.74443 17.2195C4.35277 17.2918 5.18408 17.2375 6.19862 17.0365C8.21964 16.636 10.8119 15.685 13.4783 14.2644C16.1457 12.8433 18.3298 11.2493 19.7092 9.84143C20.4027 9.13359 20.8587 8.50726 21.0861 8.00467C21.3188 7.4905 21.2527 7.25586 21.1933 7.16105C21.1231 7.04882 20.9042 6.86715 20.3097 6.78731C19.7683 6.7146 19.0379 6.74602 18.1466 6.89948L16.8698 5.65597C17.2085 5.55454 17.5279 5.48526 17.7124 5.45331Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9922 11.643C20.2746 11.3899 20.5379 11.1389 20.7806 10.8912C21.5345 10.1218 22.1234 9.35067 22.4527 8.62306C22.7767 7.90702 22.9112 7.07875 22.4649 6.36546C22.0451 5.69443 21.2797 5.40411 20.5094 5.30066C19.7184 5.19444 18.7593 5.25995 17.7124 5.45331L16.8241 5.61757C15.4829 4.60229 13.8118 4 12 4C7.58172 4 4 7.58172 4 12C4 12.0867 4.00138 12.173 4.00411 12.259L3.47686 12.8522C2.63744 13.6693 1.97963 14.4875 1.60462 15.2551C1.23859 16.0043 1.06423 16.882 1.53503 17.6345C1.96779 18.3262 2.76731 18.614 3.56745 18.709C4.39197 18.807 5.39463 18.7249 6.49015 18.5079C6.70545 18.4652 6.92586 18.417 7.15091 18.3634C6.66714 17.9942 6.22672 17.5711 5.83861 17.103C4.98624 17.2488 4.27918 17.283 3.74441 17.2195C3.1117 17.1443 2.87948 16.9553 2.80665 16.8389C2.74418 16.7391 2.67513 16.481 2.95236 15.9136C3.19339 15.4203 3.64038 14.822 4.29375 14.1555C4.59947 15.2508 5.13243 16.2513 5.83861 17.103C5.95588 17.083 6.0759 17.0608 6.1986 17.0365C8.21962 16.636 10.8118 15.685 13.4782 14.2644C16.1438 12.8443 18.3267 11.2515 19.7062 9.84443C19.4005 8.74914 18.8675 7.74864 18.1614 6.89695C19.0459 6.74568 19.7713 6.715 20.3097 6.78731C20.9042 6.86715 21.1231 7.04882 21.1933 7.16105C21.2526 7.25586 21.3187 7.4905 21.0861 8.00467C20.8587 8.50726 20.4027 9.13359 19.7092 9.84143L19.7062 9.84443C19.867 10.4204 19.9649 11.0225 19.9922 11.643Z" fill="currentColor" /><path d="M12 20C16.4183 20 20 16.4183 20 12C20 11.8804 19.9974 11.7614 19.9922 11.643C18.5107 12.9704 16.5025 14.3528 14.1835 15.5883C11.6919 16.9158 9.22452 17.8695 7.15091 18.3634C8.49628 19.3902 10.1769 20 12 20Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconPlanet as IconComponentType).keywords = [
  "planet",
  "satellite",
  "planetary",
  "star",
  "orb",
  "mars",
  "hemisphere",
  "homeworld",
  "earth",
  "universe"
];

export default IconPlanet as IconComponentType;