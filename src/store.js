import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



let store = new Vuex.Store({

    state: JSON.parse(localStorage.getItem('JRWH')) || {
        envs: [],
        demand: [],
        active: -1,
        resSelection: [],
        ResourceSelection: []
    },
    mutations: {
        char_rank_onchange(state, data) {
            let i = data.i
            let val = data.val

            state.envs.forEach((item, index, arr) => {
                if (item['i'] == i)
                    arr.splice(index, 1);
            });
            console.log(state.envs)
            state.envs.push({ i, val })
        },

        demand_rank_onchange(state, data) {
            let i = data.i
            let val = data.val
            state.demand.forEach((item, index, arr) => {
                if (item['i'] == i)
                    arr.splice(index, 1);
            });           // console.log(i,val)
            if (val != 0)
                state.demand.push({ i, val })
        },
        on_active(state, data) {
            state.active = data
        },
        select_res(state, data) {
            state.resSelection = data
        },
        select_resource(state, data) {
            state.ResourceSelection = data
        }
    }


})

store.subscribe((mutations, state) => {
    localStorage.setItem('JRWH', JSON.stringify(state))
})

export default store