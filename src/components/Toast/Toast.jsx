import React from 'react';
import css from './toast.module.css';
import { useEffect } from 'react';
import { useState } from 'react';



const Toast = ({ text }) => {

    const [toast, setClass] = useState(['toast','1']);

    useEffect(() => { 
        console.log('useEffect1');
        const timer = setTimeout(() => {
            setClass(['toast', 'visible']);
        }, 2000)
    }, []);



    return (
        <div className='toastContainer'>
            
                <div className={toast.join(' ')}>
                    {text}
                </div>
          


        </div>
    )
}

export default Toast;