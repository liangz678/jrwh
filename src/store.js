import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)



let store = new Vuex.Store({

    state:JSON.parse(localStorage.getItem('JRWH')) || {
        envs:[],
        demand:[],
        active: -1,
        resSelection: [],
        ResourceSelection: []
    },
    mutations:{
        char_rank_onchange(state, data){
            let i = data.i
            let val = data.val
            console.log(i,val)
            state.envs.push({i,val})
        },
       
        demand_rank_onchange(state, data){
            let i = data.i
            let val = data.val
            console.log(i,val)
            state.demand.push({i,val})
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