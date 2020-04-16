import React from 'react';
import css from './popupMnu.module.css';



const PopupMnu = () => {
    return (
        <div className={css.mnuWrapper}>
            <div className={css.mnuBtn}>
                <i className='material-icons white-text'>menu</i>
            </div>
        </div>


    )
}

export default PopupMnu;