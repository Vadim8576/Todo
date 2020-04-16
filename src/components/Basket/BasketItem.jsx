import React from 'react';



const BasketItem = ({ title, id, removeBasket }) => {

    const cls = ['todo', 'basket'];




    return (

        <li className={cls.join(' ')}>
            <label>
           
                <span><b>{title}</b></span>

                <div className="waves-effect waves-light btn-flat deep-orange my-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        removeBasket({title, id});
                        // addNode(id);
                        
                    }}
                >
                    <i className="material-icons center white-text">
                        list
                    </i>
                </div>

            </label>
        </li>
    );
}

export default BasketItem;


