import React from 'react';

export interface SolidIconLogoProps {
    color: string;
}
 
const SolidIconLogo: React.SFC<SolidIconLogoProps> = ({ color }) => {
    return ( 
        <svg className="w-10" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.62 51.66">
            <path className={`${color}-text fill-current`} d="M29,25.73c-1-.67-3.9-1.82-9.73-4.12-5.41-2.14-8-3.05-8.86-5.51a5.4,5.4,0,0,1,.08-3.59c1.3-3.14,6-4.39,9.41-3.73A17.42,17.42,0,0,1,26.65,12a6.87,6.87,0,0,0,3.45,1.79,4.1,4.1,0,0,0,3.16-.72c1.76-1.52,1-4.58.89-4.82-.22-.79-.91-2.63-4.61-4.83A21.83,21.83,0,0,0,16.84,0c-2.83.16-8,.44-12,4.46S-.76,14.92,1.52,19.77a11.73,11.73,0,0,0,2.8,3.59c2.89,2.82,5.37,3.39,13.23,6.47,6.9,2.71,8.91,3.81,9.52,5.91a5.47,5.47,0,0,1-.42,3.91,6.62,6.62,0,0,1-4.28,3c-3.74,1-5.6-1.31-7.91.16-1.32.84-2.59,2.45-2.22,3.9a5.55,5.55,0,0,0,3.53,4c2.8,1.34,10.18,1.64,14.63-1.6.51-.38,7.32-5.5,6.07-13.39C35.58,30.15,30.83,27,29,25.73Z"/>
            <circle className={`${color}-text fill-current`} cx="4.51" cy="40.75" r="4.51"/>
        </svg>
    );
}

export default SolidIconLogo;