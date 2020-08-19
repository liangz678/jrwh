import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



let store = new Vuex.Store({

    state:JSON.parse(localStorage.getItem('JRWH')) || {
        envs:new Array(500),
        demand:new Array(500),
        active: -1,
        resSelection: [],
        ResourceSelection: []
    },
    mutations:{
        char_rank_onchange(state, data){
            state.envs[data.i] = data.val
        },
       
        demand_rank_onchange(state, data){
            state.demand[data.i] = data.val
        },
        on_active(state,data){
            state.active = data
        },
        select_res(state,data){
            state.resSelection = data
        },
        select_resource(state,data){
            state.ResourceSelection = data
        }
    }


})

store.subscribe((mutations,state)=>{
    localStorage.setItem('JRWH',JSON.stringify(state))
})

export default store