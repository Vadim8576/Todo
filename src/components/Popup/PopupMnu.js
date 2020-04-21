import React, { useState } from 'react';
import css from './popupMnu.module.css';



const PopupMnu = ({removeSelected, nodes}) => {
    const [isVisible, setVisible] = useState(false);

    
    return (
        <div className={css.mnuWrapper}>
            <div className={css.mnuBtn} onClick={() => setVisible(!isVisible)}>
                <i className='material-icons white-text'>menu</i>
            </div>
            {isVisible &&
                <div className={css.mnu}>
                <ul>
                    <li><i className='material-icons deep-orange-text'>tab_unselected</i>&nbsp;Снять выделение</li>
                    <li><i className='material-icons deep-orange-text'>select_all</i>&nbsp;Выделить все</li>
                    <li onClick={() => removeSelected(nodes)}><i className='material-icons deep-orange-text'>delete</i>&nbsp;Удалить выделенное</li>
                    <li><i className='material-icons deep-orange-text'>delete_forever</i>&nbsp;Очистить список</li>
                    <li><i className='material-icons deep-orange-text'>delete_forever</i>&nbsp;Очистить корзину</li>
                </ul>
                
            </div>
            }
            
        </div>


    )
}

export default PopupMnu;