import { FC } from 'react';

const IconWaterdrops: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17.8334C10 20.1346 8.20914 22.0001 6 22.0001C3.79086 22.0001 2 20.1346 2 17.8334C2 16.3936 3.56593 14.4719 4.73823 13.235C5.43222 12.5027 6.56778 12.5027 7.26177 13.235C8.43407 14.4719 10 16.3936 10 17.8334Z" stroke="currentColor" strokeWidth={width} /><path d="M22 17.8334C22 20.1346 20.2091 22.0001 18 22.0001C15.7909 22.0001 14 20.1346 14 17.8334C14 16.3936 15.5659 14.4719 16.7382 13.235C17.4322 12.5027 18.5678 12.5027 19.2618 13.235C20.4341 14.4719 22 16.3936 22 17.8334Z" stroke="currentColor" strokeWidth={width} /><path opacity={duotone ? "0.5" : "1"} d="M16 7.83343C16 10.1346 14.2091 12.0001 12 12.0001C9.79086 12.0001 8 10.1346 8 7.83343C8 6.39361 9.56593 4.47189 10.7382 3.23497C11.4322 2.50273 12.5678 2.50273 13.2618 3.23497C14.4341 4.47189 16 6.39361 16 7.83343Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17.8334C10 20.1346 8.20914 22.0001 6 22.0001C3.79086 22.0001 2 20.1346 2 17.8334C2 16.3936 3.56593 14.4719 4.73823 13.235C5.43222 12.5027 6.56778 12.5027 7.26177 13.235C8.43407 14.4719 10 16.3936 10 17.8334Z" fill="currentColor" /><path opacity={duotone ? "0.7" : "1"} d="M22 17.8332C22 20.1344 20.2091 21.9999 18 21.9999C15.7909 21.9999 14 20.1344 14 17.8332C14 16.3934 15.5659 14.4716 16.7382 13.2347C17.4322 12.5025 18.5678 12.5025 19.2618 13.2347C20.4341 14.4716 22 16.3934 22 17.8332Z" fill="currentColor" /><path opacity={duotone ? "0.4" : "1"} d="M16 7.83319C16 10.1344 14.2091 11.9999 12 11.9999C9.79086 11.9999 8 10.1344 8 7.83319C8 6.39337 9.56593 4.47165 10.7382 3.23473C11.4322 2.50249 12.5678 2.50249 13.2618 3.23473C14.4341 4.47165 16 6.39337 16 7.83319Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17.8334C10 20.1346 8.20914 22.0001 6 22.0001C3.79086 22.0001 2 20.1346 2 17.8334C2 16.3936 3.56593 14.4719 4.73823 13.235C5.43222 12.5027 6.56778 12.5027 7.26177 13.235C8.43407 14.4719 10 16.3936 10 17.8334Z" fill="currentColor" /><path d="M22 17.8334C22 20.1346 20.2091 22.0001 18 22.0001C15.7909 22.0001 14 20.1346 14 17.8334C14 16.3936 15.5659 14.4719 16.7382 13.235C17.4322 12.5027 18.5678 12.5027 19.2618 13.235C20.4341 14.4719 22 16.3936 22 17.8334Z" fill="currentColor" /><path d="M16 7.83343C16 10.1346 14.2091 12.0001 12 12.0001C9.79086 12.0001 8 10.1346 8 7.83343C8 6.39361 9.56593 4.47189 10.7382 3.23497C11.4322 2.50273 12.5678 2.50273 13.2618 3.23497C14.4341 4.47189 16 6.39361 16 7.83343Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconWaterdrops as IconComponent).keywords = [
  "waterdrops",
  "raindrops",
  "droplets",
  "raindrop",
  "droplet",
  "waterfalls",
  "waterfall",
  "rivulets",
  "drizzles",
  "waters"
];

export default IconWaterdrops as IconComponent;