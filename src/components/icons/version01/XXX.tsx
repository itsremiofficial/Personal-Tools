import { FC } from 'react';

const IconXXX: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 9L6.5 12M6.5 12L4.5 15M6.5 12L4.5 9M6.5 12L8.5 15M14 9L12 12M12 12L10 15M12 12L10 9M12 12L14 15M19.5 9L17.5 12M17.5 12L15.5 15M17.5 12L15.5 9M17.5 12L19.5 15" stroke="currentColor" strokeWidth={width} strokeLinecap="round" /><path opacity={duotone ? "0.5" : "1"} d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M4.08405 8.37604C4.4287 8.14628 4.89435 8.23941 5.12412 8.58405L6.50008 10.648L7.87604 8.58405C8.10581 8.23941 8.57146 8.14628 8.9161 8.37604C9.12965 8.51841 9.24663 8.75133 9.25008 8.98992C9.25353 8.75133 9.37051 8.51841 9.58405 8.37604C9.9287 8.14628 10.3944 8.23941 10.6241 8.58405L12.0001 10.648L13.376 8.58405C13.6058 8.23941 14.0715 8.14628 14.4161 8.37604C14.6297 8.51841 14.7466 8.75135 14.7501 8.98995C14.7535 8.75135 14.8705 8.51841 15.0841 8.37604C15.4287 8.14628 15.8944 8.23941 16.1241 8.58405L17.5001 10.648L18.876 8.58405C19.1058 8.23941 19.5715 8.14628 19.9161 8.37604C20.2608 8.60581 20.3539 9.07146 20.1241 9.4161L18.4015 12.0001L20.1241 14.5841C20.3539 14.9287 20.2608 15.3944 19.9161 15.6241C19.5715 15.8539 19.1058 15.7608 18.876 15.4161L17.5001 13.3522L16.1241 15.4161C15.8944 15.7608 15.4287 15.8539 15.0841 15.6241C14.8705 15.4817 14.7535 15.2488 14.7501 15.0102C14.7466 15.2488 14.6297 15.4817 14.4161 15.6241C14.0715 15.8539 13.6058 15.7608 13.376 15.4161L12.0001 13.3522L10.6241 15.4161C10.3944 15.7608 9.9287 15.8539 9.58405 15.6241C9.37051 15.4818 9.25353 15.2488 9.25008 15.0102C9.24663 15.2488 9.12965 15.4818 8.9161 15.6241C8.57146 15.8539 8.10581 15.7608 7.87604 15.4161L6.50008 13.3522L5.12412 15.4161C4.89435 15.7608 4.4287 15.8539 4.08405 15.6241C3.73941 15.3944 3.64628 14.9287 3.87604 14.5841L5.59869 12.0001L3.87604 9.4161C3.64628 9.07146 3.73941 8.60581 4.08405 8.37604ZM14.6241 9.4161L12.9015 12.0001L14.6241 14.5841C14.7072 14.7087 14.7481 14.8492 14.7501 14.9886C14.7521 14.8492 14.7929 14.7087 14.876 14.5841L16.5987 12.0001L14.876 9.4161C14.7929 9.29146 14.7521 9.15099 14.7501 9.01158C14.7481 9.15099 14.7072 9.29146 14.6241 9.4161ZM7.40147 12.0001L9.12412 9.4161C9.2072 9.29147 9.24807 9.15102 9.25008 9.01162C9.25209 9.15102 9.29295 9.29147 9.37604 9.4161L11.0987 12.0001L9.37604 14.5841C9.29295 14.7087 9.25209 14.8491 9.25008 14.9885C9.24807 14.8491 9.2072 14.7087 9.12412 14.5841L7.40147 12.0001Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM4.08397 8.37596C4.42862 8.1462 4.89427 8.23933 5.12404 8.58397L6.5 10.6479L7.87596 8.58397C8.10573 8.23933 8.57138 8.1462 8.91603 8.37596C9.12957 8.51832 9.24655 8.75125 9.25 8.98984C9.25345 8.75125 9.37043 8.51832 9.58397 8.37596C9.92862 8.1462 10.3943 8.23933 10.624 8.58397L12 10.6479L13.376 8.58397C13.6057 8.23933 14.0714 8.1462 14.416 8.37596C14.6296 8.51833 14.7466 8.75127 14.75 8.98987C14.7534 8.75127 14.8704 8.51833 15.084 8.37596C15.4286 8.1462 15.8943 8.23933 16.124 8.58397L17.5 10.6479L18.876 8.58397C19.1057 8.23933 19.5714 8.1462 19.916 8.37596C20.2607 8.60573 20.3538 9.07138 20.124 9.41602L18.4014 12L20.124 14.584C20.3538 14.9286 20.2607 15.3943 19.916 15.624C19.5714 15.8538 19.1057 15.7607 18.876 15.416L17.5 13.3521L16.124 15.416C15.8943 15.7607 15.4286 15.8538 15.084 15.624C14.8704 15.4817 14.7534 15.2487 14.75 15.0101C14.7466 15.2487 14.6296 15.4817 14.416 15.624C14.0714 15.8538 13.6057 15.7607 13.376 15.416L12 13.3521L10.624 15.416C10.3943 15.7607 9.92862 15.8538 9.58397 15.624C9.37043 15.4817 9.25345 15.2488 9.25 15.0102C9.24655 15.2488 9.12957 15.4817 8.91603 15.624C8.57138 15.8538 8.10573 15.7607 7.87596 15.416L6.5 13.3521L5.12404 15.416C4.89427 15.7607 4.42862 15.8538 4.08397 15.624C3.73933 15.3943 3.6462 14.9286 3.87596 14.584L5.59861 12L3.87596 9.41602C3.6462 9.07138 3.73933 8.60573 4.08397 8.37596Z" fill="currentColor" /><path d="M9.12404 9.41602L7.40139 12L9.12404 14.584C9.20713 14.7086 9.24799 14.8491 9.25 14.9885C9.25202 14.8491 9.29287 14.7086 9.37596 14.584L11.0986 12L9.37596 9.41602C9.29287 9.29139 9.25202 9.15094 9.25 9.01154C9.24799 9.15094 9.20713 9.29139 9.12404 9.41602Z" fill="currentColor" /><path d="M14.624 9.41602L12.9014 12L14.624 14.584C14.7071 14.7086 14.748 14.8491 14.75 14.9885C14.752 14.8491 14.7929 14.7086 14.876 14.584L16.5986 12L14.876 9.41602C14.7929 9.29138 14.752 9.15091 14.75 9.0115C14.748 9.15091 14.7071 9.29138 14.624 9.41602Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

// Keywords for search and categorization
(IconXXX as IconComponent).keywords = [];

export default IconXXX as IconComponent;