import React from 'react';
import preloader from '../../../assets/images/preloader2.svg';

// while waiting information from server should be loader
let Preloader = (props) => {
    return <div>
        <img src={preloader} alt='preloader' />
        </div>
}

export default Preloader;