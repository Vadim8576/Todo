import React, { useState } from 'react';
import PopupMnu from '../Popup/PopupMnu';
import { NavLink } from 'react-router-dom';
import css from './header.module.css';



// const setDate = () => {
//   const options = {
//     year: 'numeric',
//     month: 'numeric',
//     day: 'numeric',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//     timezone: 'UTC'
//   };
//   return new Date().toLocaleString("ru", options);
// }




const Header = ({ addNode, len, ...props }) => {

  const [todoTitle, setTodoTitle] = useState('');

  const addTodo = (e) => {
    if (e.key === 'Enter') {

      if (todoTitle !== '') {
        const payload = {
          title: todoTitle,
          // date: setDate(),
          selected: false
        }
        addNode(payload);
        setTodoTitle('');
      }

    }
  }


  return (
    <>
      <div className='fixed'>
        <div className='container'>

          <PopupMnu {...props} />

          <div className={css.titleContainer}>
            <div className={css.linkWrapper}>
              <NavLink to='/list' className={css.navlink} activeClassName={css.activeRoute}>
                {/* <i className="material-icons center white-text">list</i> */}
                ПОКУПКИ <span>({len.nodes})</span>
              </NavLink>
            </div>
            <div className={css.linkWrapper}>
              <NavLink to='/basket' className={css.navlink} activeClassName={css.activeRoute}>
                {/* <i className="material-icons center white-text">shopping_cart</i> */}
                КОРЗИНА <span>({len.basket})</span>
              </NavLink>
            </div>
          </div>


          <div className='input-field'>
            <input
              className='white-text'
              value={todoTitle}
              onChange={e => setTodoTitle(e.target.value)}
              onKeyPress={addTodo}
              type='text'
            />
            <label>Введите товар </label>
            {/* <i className="material-icons">add</i> */}
          </div>
        </div>

      </div>
    </>
  );
}



export default Header;


