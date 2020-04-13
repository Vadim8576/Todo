import React from 'react';
import {addNote} from './../reducer';

export const Form = () => {

    return (
        <form>
            <div className='form-group'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Название заметки'
                />
            </div>
        </form>
    )
}