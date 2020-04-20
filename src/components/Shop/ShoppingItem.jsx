import React from 'react';



const ShoppingItem = ({ enableBtn, disableBtn, btnIsEnabled, date, title, id, removeNode, checkedToggle, selected, addInBasket }) => {

    const cls = ['todo'];

    if (selected) {
        cls.push('selected');
    }

    return (
        <>




            <li className={cls.join(' ')}>
                
                <label>
                    <input
                        type='checkbox'
                        checked={selected}
                        onChange={(e) => checkedToggle(id)}
                    />

                    <span><b>{title}</b> <small>{date}</small></span>
                    <div className={`waves-effect waves-light btn-flat deep-orange my-btn ${btnIsEnabled ? '' : 'disabled'}`}
                        onClick={(e) => {
                            e.preventDefault();
                            addInBasket({ title, id })
                            disableBtn();
                        }}
                    >
                        <i className="material-icons center white-text">
                            shopping_cart
                    </i>
                    </div>
                </label>
            </li>
       
        </>
    );
}

export default ShoppingItem;


