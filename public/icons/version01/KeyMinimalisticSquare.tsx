import { FC } from 'react';

interface IconProps {
  className?: string;
  fill?: boolean;
  duotone?: boolean;
  width?: string | number;
}

const IconKeyMinimalisticSquare: FC<IconProps> = ({ className, fill = false, duotone = true, width = '1.5' }) => {
  return (
    <>
      {!fill ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6514 7.3491L17.1817 6.81877V6.81877L16.6514 7.3491ZM16.6514 13.8608L17.1817 14.3911L16.6514 13.8608ZM8.76372 12.4461L8.23339 11.9157L8.23339 11.9157L8.76372 12.4461ZM6.28899 14.9208L6.81932 15.4511H6.81932L6.28899 14.9208ZM9.0797 17.7115L8.54937 17.1812L8.54937 17.1812L9.0797 17.7115ZM11.5546 15.2366L11.0243 14.7063H11.0243L11.5546 15.2366ZM6.00604 15.7274L5.26063 15.8102H5.26063L6.00604 15.7274ZM6.16075 17.1198L5.41534 17.2026L5.41534 17.2026L6.16075 17.1198ZM6.88068 17.8397L6.79785 18.5851H6.79785L6.88068 17.8397ZM8.27307 17.9944L8.35589 17.249H8.35589L8.27307 17.9944ZM6.34939 17.5123L6.87972 16.982L6.87972 16.982L6.34939 17.5123ZM6.4882 17.6511L5.95786 18.1814L5.95787 18.1814L6.4882 17.6511ZM8.93621 11.7546L8.20978 11.9411H8.20978L8.93621 11.7546ZM12.2459 15.0643L12.0594 15.7907H12.0594L12.2459 15.0643ZM9.26801 15.198C8.97351 14.9068 8.49865 14.9094 8.20737 15.2039C7.91609 15.4984 7.9187 15.9732 8.2132 16.2645L9.26801 15.198ZM12.9209 11.0796C12.693 10.8518 12.693 10.4825 12.9209 10.2547L11.8602 9.19402C11.0466 10.0076 11.0466 11.3267 11.8602 12.1403L12.9209 11.0796ZM13.7458 11.0796C13.518 11.3074 13.1487 11.3074 12.9209 11.0796L11.8602 12.1403C12.6738 12.9539 13.9929 12.9539 14.8065 12.1403L13.7458 11.0796ZM13.7458 10.2547C13.9736 10.4825 13.9736 10.8518 13.7458 11.0796L14.8065 12.1403C15.6201 11.3267 15.6201 10.0076 14.8065 9.19402L13.7458 10.2547ZM14.8065 9.19402C13.9929 8.38042 12.6738 8.38042 11.8602 9.19402L12.9209 10.2547C13.1487 10.0269 13.518 10.0269 13.7458 10.2547L14.8065 9.19402ZM16.1211 7.87943C17.6263 9.38468 17.6263 11.8252 16.1211 13.3304L17.1817 14.3911C19.2728 12.3 19.2728 8.9098 17.1817 6.81877L16.1211 7.87943ZM17.1817 6.81877C15.0907 4.72773 11.7004 4.72773 9.60941 6.81877L10.6701 7.87943C12.1753 6.37418 14.6158 6.37418 16.1211 7.87943L17.1817 6.81877ZM8.23339 11.9157L5.75866 14.3905L6.81932 15.4511L9.29405 12.9764L8.23339 11.9157ZM9.61003 18.2418L10.437 17.4149L9.37631 16.3542L8.54937 17.1812L9.61003 18.2418ZM10.437 17.4149L12.0849 15.7669L11.0243 14.7063L9.37631 16.3542L10.437 17.4149ZM5.26063 15.8102L5.41534 17.2026L6.90616 17.037L6.75145 15.6446L5.26063 15.8102ZM6.79785 18.5851L8.19024 18.7399L8.35589 17.249L6.9635 17.0943L6.79785 18.5851ZM5.81905 18.0426L5.95786 18.1814L7.01853 17.1208L6.87972 16.982L5.81905 18.0426ZM6.9635 17.0943C6.98431 17.0966 7.00371 17.106 7.01853 17.1208L5.95787 18.1814C6.18391 18.4075 6.48015 18.5498 6.79785 18.5851L6.9635 17.0943ZM5.41534 17.2026C5.45064 17.5203 5.59302 17.8166 5.81906 18.0426L6.87972 16.982C6.89453 16.9968 6.90385 17.0162 6.90616 17.037L5.41534 17.2026ZM8.54937 17.1812C8.49854 17.232 8.42735 17.257 8.35589 17.249L8.19024 18.7399C8.71459 18.7981 9.23698 18.6149 9.61003 18.2418L8.54937 17.1812ZM5.75866 14.3905C5.38562 14.7635 5.20237 15.2859 5.26063 15.8102L6.75145 15.6446C6.74351 15.5731 6.76849 15.502 6.81932 15.4511L5.75866 14.3905ZM9.66264 11.568C9.33425 10.2892 9.67123 8.87826 10.6701 7.87943L9.60941 6.81877C8.22032 8.20785 7.75495 10.1699 8.20978 11.9411L9.66264 11.568ZM16.1211 13.3304C15.1222 14.3293 13.7112 14.6662 12.4325 14.3378L12.0594 15.7907C13.8305 16.2455 15.7926 15.7802 17.1817 14.3911L16.1211 13.3304ZM12.0849 15.7669C12.0779 15.774 12.0703 15.7794 12.0633 15.7832C12.0566 15.7869 12.0516 15.7884 12.0493 15.789C12.0456 15.7898 12.0497 15.7882 12.0594 15.7907L12.4325 14.3378C11.9675 14.2184 11.4174 14.3132 11.0243 14.7063L12.0849 15.7669ZM9.29405 12.9764C9.68693 12.5835 9.78213 12.0333 9.66264 11.568L8.20978 11.9411C8.2122 11.9505 8.21063 11.9546 8.21149 11.9511C8.21203 11.9488 8.21351 11.9439 8.21715 11.9372C8.2209 11.9304 8.22632 11.9228 8.23339 11.9157L9.29405 12.9764ZM10.434 16.3513L9.26801 15.198L8.2132 16.2645L9.37923 17.4178L10.434 16.3513Z" fill="currentColor" /><path opacity={duotone ? "0.5" : "1"} d="M2 12.0005C2 7.28644 2 4.92942 3.46447 3.46495C4.92893 2.00049 7.28595 2.00049 12 2.00049C16.714 2.00049 19.0711 2.00049 20.5355 3.46495C22 4.92942 22 7.28644 22 12.0005C22 16.7145 22 19.0716 20.5355 20.536C19.0711 22.0005 16.714 22.0005 12 22.0005C7.28595 22.0005 4.92893 22.0005 3.46447 20.536C2 19.0716 2 16.7145 2 12.0005Z" stroke="currentColor" strokeWidth={width} /></svg> 
      ) : duotone ? (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity={duotone ? "0.5" : "1"} d="M3.46447 3.46495C2 4.92942 2 7.28644 2 12.0005C2 16.7145 2 19.0716 3.46447 20.536C4.92893 22.0005 7.28595 22.0005 12 22.0005C16.714 22.0005 19.0711 22.0005 20.5355 20.536C22 19.0716 22 16.7145 22 12.0005C22 7.28644 22 4.92942 20.5355 3.46495C19.0711 2.00049 16.714 2.00049 12 2.00049C7.28595 2.00049 4.92893 2.00049 3.46447 3.46495Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M16.6514 13.8608C18.4495 12.0626 18.4495 9.14724 16.6514 7.3491C14.8532 5.55095 11.9379 5.55095 10.1397 7.3491C8.94578 8.54306 8.5446 10.2296 8.93621 11.7546C8.99937 12.0005 8.94328 12.2665 8.76372 12.4461L6.28899 14.9208C6.07705 15.1327 5.97294 15.4295 6.00604 15.7274L6.16075 17.1198C6.17725 17.2683 6.24377 17.4067 6.34939 17.5123L6.4882 17.6511C6.59381 17.7567 6.73223 17.8232 6.88068 17.8397L8.27307 17.9944C8.57097 18.0275 8.86776 17.9234 9.0797 17.7115L9.3764 17.4148L8.21332 16.2644C7.91882 15.9732 7.91621 15.4983 8.20748 15.2038C8.49876 14.9093 8.97363 14.9067 9.26813 15.198L10.4342 16.3512L10.4371 16.3541L11.5546 15.2366C11.7342 15.057 12 15.0011 12.2459 15.0643C13.7709 15.4559 15.4574 15.0547 16.6514 13.8608ZM12.3905 9.72426C12.9112 9.20357 13.7554 9.20357 14.2761 9.72426C14.7968 10.245 14.7968 11.0892 14.2761 11.6099C13.7554 12.1306 12.9112 12.1306 12.3905 11.6099C11.8698 11.0892 11.8698 10.245 12.3905 9.72426Z" fill="currentColor" /></svg> 
      ) : (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3905 9.72426C12.9112 9.20357 13.7554 9.20357 14.2761 9.72426C14.7968 10.245 14.7968 11.0892 14.2761 11.6099C13.7554 12.1306 12.9112 12.1306 12.3905 11.6099C11.8698 11.0892 11.8698 10.245 12.3905 9.72426Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M3.46447 3.46495C2 4.92942 2 7.28644 2 12.0005C2 16.7145 2 19.0716 3.46447 20.536C4.92893 22.0005 7.28595 22.0005 12 22.0005C16.714 22.0005 19.0711 22.0005 20.5355 20.536C22 19.0716 22 16.7145 22 12.0005C22 7.28644 22 4.92942 20.5355 3.46495C19.0711 2.00049 16.714 2.00049 12 2.00049C7.28595 2.00049 4.92893 2.00049 3.46447 3.46495ZM16.6514 7.3491C18.4495 9.14724 18.4495 12.0626 16.6514 13.8608C15.4574 15.0547 13.7709 15.4559 12.2459 15.0643C12 15.0011 11.7342 15.057 11.5546 15.2366L10.4371 16.3541L10.4342 16.3512L9.26813 15.198C8.97363 14.9067 8.49876 14.9093 8.20748 15.2038C7.91621 15.4983 7.91882 15.9732 8.21332 16.2644L9.3764 17.4148L9.0797 17.7115C8.86776 17.9234 8.57097 18.0275 8.27307 17.9944L6.88068 17.8397C6.73223 17.8232 6.59381 17.7567 6.4882 17.6511L6.34939 17.5123C6.24377 17.4067 6.17725 17.2683 6.16075 17.1198L6.00604 15.7274C5.97294 15.4295 6.07705 15.1327 6.28899 14.9208L8.76372 12.4461C8.94328 12.2665 8.99937 12.0005 8.93621 11.7546C8.5446 10.2296 8.94578 8.54306 10.1397 7.3491C11.9379 5.55095 14.8532 5.55095 16.6514 7.3491Z" fill="currentColor" /></svg> 
      )}
    </>
  );
};

export default IconKeyMinimalisticSquare;