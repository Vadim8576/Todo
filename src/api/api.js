import * as axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://react-todo-952bc.firebaseio.com'
});


export const api = {

    fetchNodes() {
        console.log('fetch');
        try {
            return instanse.get(`/nodes.json`)
                            .then(response => response.data);
        } catch(e) {
            return false;
        }
    },

    addNode(node) {

        return instanse.post(`/nodes.json`, node)
                .then(response => response.data);    
    },
    
    removeNode(id) {
    
        return instanse.delete(`/nodes/${id}.json`)
                .then(response => response.data);
    }
}
