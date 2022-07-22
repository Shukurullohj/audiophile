import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        cards: [
            {id : 'T34234', username: 'Emma Julia', date: 'Due 29 Aug 2021', price : '42,00.00', status: 'Paid'},
            {id : 'T34235', username: 'Hurry Jeck', date: 'Due 21 Aug 2021', price : '18,00.00', status: 'Pending'},
            {id : 'T34236', username: 'Mr Juan', date: 'Due 15 Aug 2021', price : '14,00.00', status: 'Paid'},
            {id : 'T34237', username: 'Light Purple', date: 'Due 14 Aug 2021', price : '10,00.00', status: 'Paid'},
            {id : 'T34238', username: 'Julia Maxium', date: 'Due 29 Sep 2020', price : '40,00.00', status: 'Paid'},
            {id : 'T34239', username: 'John Doe', date: 'Aug 31 Aug 2020', price : '38,00.00', status: 'Draft'},
    ]
    }
})