import React from 'react';
import css from './toast.module.css';
import { useEffect } from 'react';
import { useState } from 'react';

const Toast = ({ text }) => {

    // const [toastIsVisible, setToastVisible] = useState([]);
    let toast = ['toast'];
    // toast.push('visible');
    // console.log(toast);
    
    useEffect(() => {
        
        toast = ['visible'];
        // setToastVisible(['visible'])
        
        const timer = setTimeout(() => {
            toast = ['visible'];
        }, 2000)
       
    }, []);

    

    return (
        <div className={css.toastContainer}>
            <div className={css[toast[0]]}>
                {text}
            </div>
        </div>
    )
}

export default Toast;