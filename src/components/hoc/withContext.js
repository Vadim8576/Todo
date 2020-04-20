import React from 'react';





const StateContext = React.createContext('1');

 const WithContext = (Component) => {

   return (props) => {
        return <StateContext.Provider value={'1'}>
            <Component {...props} />
        </StateContext.Provider>
   }
}

export default WithContext;