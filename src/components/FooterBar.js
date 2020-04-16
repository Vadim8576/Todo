import React from 'react';
import css from './footerBar.module.css';

const FooterBar = ({ removeSelected, nodes }) => {
    return (
        
        <div className={css.footerBarWrapper}>
            <div className='container'>

                <div className={css.footerBarBtnContainer}>
                    <div className='waves-effect waves-light btn-flat white'
                        onClick={(e) => {
                            e.preventDefault();
                            removeSelected(nodes);
                        }}
                    >
                        <i className='material-icons center red-text'>delete_forever</i>
                        {/* <span>удалить выделенное</span> */}
                    </div>
                </div>

                <div className={css.footerBarBtnContainer}>
                    <div className='waves-effect waves-light btn-flat white'
                        onClick={(e) => {
                            e.preventDefault();
                            removeSelected(nodes);
                        }}
                    >
                        <i className='material-icons center red-text'>select_all</i>
                        {/* <span>удалить выделенное</span> */}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default FooterBar;