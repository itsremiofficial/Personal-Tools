import { FC } from 'react';
import { IconProps, IconComponentType } from "@/types";

const IconCode: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 7.82996L18.6965 9.35678C20.239 10.7451 21.0103 11.4392 21.0103 12.33C21.0103 13.2207 20.239 13.9148 18.6965 15.3031L17 16.83" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M13.9868 5.00037L10.0132 19.8301" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path d="M6.99999 7.82996L5.30352 9.35678C3.76096 10.7451 2.98969 11.4392 2.98969 12.33C2.98969 13.2207 3.76096 13.9148 5.30352 15.3031L6.99999 16.83" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.4425 7.32824C16.7196 7.02036 17.1938 6.9954 17.5017 7.27249L19.2392 8.83623C19.9756 9.4989 20.5864 10.0486 21.0058 10.5472C21.4468 11.0714 21.7603 11.6347 21.7603 12.33C21.7603 13.0253 21.4468 13.5885 21.0058 14.1128C20.5864 14.6113 19.9756 15.161 19.2392 15.8237L17.5017 17.3874C17.1938 17.6645 16.7196 17.6396 16.4425 17.3317C16.1654 17.0238 16.1904 16.5496 16.4983 16.2725L18.1947 14.7457C18.9826 14.0366 19.5138 13.5562 19.8579 13.1471C20.1882 12.7546 20.2603 12.5254 20.2603 12.33C20.2603 12.1345 20.1882 11.9054 19.8579 11.5128C19.5138 11.1037 18.9826 10.6233 18.1947 9.91426L16.4983 8.38743C16.1904 8.11034 16.1654 7.63612 16.4425 7.32824Z" fill="currentColor" /><path d="M7.50178 8.38743C7.80966 8.11034 7.83462 7.63612 7.55752 7.32824C7.28043 7.02036 6.80621 6.9954 6.49833 7.27249L4.76084 8.83623C4.0245 9.4989 3.41369 10.0486 2.99428 10.5472C2.55325 11.0714 2.23975 11.6347 2.23975 12.33C2.23975 13.0253 2.55325 13.5885 2.99428 14.1128C3.41369 14.6113 4.02449 15.161 4.76082 15.8237L6.49833 17.3874C6.80621 17.6645 7.28043 17.6396 7.55752 17.3317C7.83462 17.0238 7.80966 16.5496 7.50178 16.2725L5.80531 14.7457C5.01743 14.0366 4.48623 13.5562 4.14213 13.1471C3.81188 12.7546 3.73975 12.5254 3.73975 12.33C3.73975 12.1345 3.81188 11.9054 4.14213 11.5128C4.48623 11.1037 5.01743 10.6233 5.80531 9.91426L7.50178 8.38743Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M14.1811 4.27599C14.5812 4.38319 14.8186 4.79444 14.7114 5.19454L10.7378 20.0243C10.6306 20.4244 10.2194 20.6618 9.81926 20.5546C9.41916 20.4474 9.18172 20.0361 9.28893 19.636L13.2625 4.80632C13.3697 4.40622 13.781 4.16878 14.1811 4.27599Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.1809 4.27586C14.581 4.38307 14.8185 4.79432 14.7113 5.19442L10.7377 20.0241C10.6304 20.4242 10.2192 20.6617 9.81909 20.5545C9.41899 20.4473 9.18156 20.036 9.28876 19.6359L13.2624 4.80619C13.3696 4.40609 13.7808 4.16866 14.1809 4.27586Z" fill="currentColor" /><path d="M16.4425 7.32817C16.7196 7.02029 17.1938 6.99533 17.5017 7.27243L19.2392 8.83617C19.9756 9.49883 20.5864 10.0485 21.0058 10.5471C21.4468 11.0713 21.7603 11.6346 21.7603 12.3299C21.7603 13.0252 21.4468 13.5885 21.0058 14.1127C20.5864 14.6113 19.9756 15.161 19.2392 15.8236L17.5017 17.3874C17.1938 17.6645 16.7196 17.6395 16.4425 17.3316C16.1654 17.0237 16.1904 16.5495 16.4983 16.2724L18.1947 14.7456C18.9826 14.0365 19.5138 13.5561 19.8579 13.1471C20.1882 12.7545 20.2603 12.5253 20.2603 12.3299C20.2603 12.1345 20.1882 11.9053 19.8579 11.5127C19.5138 11.1037 18.9826 10.6233 18.1947 9.91419L16.4983 8.38737C16.1904 8.11027 16.1654 7.63606 16.4425 7.32817Z" fill="currentColor" /><path d="M7.50178 8.38737C7.80966 8.11027 7.83462 7.63606 7.55752 7.32817C7.28043 7.02029 6.80621 6.99533 6.49833 7.27243L4.76084 8.83617C4.0245 9.49883 3.41369 10.0485 2.99428 10.5471C2.55325 11.0713 2.23975 11.6346 2.23975 12.3299C2.23975 13.0252 2.55325 13.5885 2.99428 14.1127C3.41369 14.6113 4.02449 15.161 4.76082 15.8236L6.49833 17.3874C6.80621 17.6645 7.28043 17.6395 7.55752 17.3316C7.83462 17.0237 7.80966 16.5495 7.50178 16.2724L5.80531 14.7456C5.01743 14.0365 4.48623 13.5561 4.14213 13.1471C3.81188 12.7545 3.73975 12.5253 3.73975 12.3299C3.73975 12.1345 3.81188 11.9053 4.14213 11.5127C4.48623 11.1037 5.01743 10.6233 5.80531 9.91419L7.50178 8.38737Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconCode as IconComponentType).keywords = [
  "code",
  "encode",
  "cypher",
  "encipher",
  "cipher",
  "encrypt",
  "computer code",
  "codification",
  "inscribe",
  "write in code"
];

export default IconCode as IconComponentType;