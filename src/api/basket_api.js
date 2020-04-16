import * as axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://react-todo-952bc.firebaseio.com'
});


export const basket_api = {

    fetchBasket() {
        return  instanse.get(`/basket.json`)
                .then(response => response.data)
                .catch(e => {
                    return false;
                })
    },

    addBasket(basket) {
        return instanse.post(`/basket.json`, basket)
                .then(response => response.data)
                .catch(e => {
                    return false;
                }) 
    },
    
    removeBasket(id) {
        return instanse.delete(`/basket/${id}.json`)
                .then(response => response.data)
                .catch(e => {
                    return false;
                })
    }
}
