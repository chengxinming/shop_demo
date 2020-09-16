import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)

const state={
    list:[],
    detail:{},
    title:"",
    msg:"",
    count:0
}

const mutations={
    getList(state,playload){
        console.log(playload);
        state.list=playload.mylist,
        state.msg=playload.msg
    },
    add(state){
        state.count++
    }
}

const actions={
    getHome(context,acdata){
        axios.get('https://global.sunlands.com/frontend/web/index.php?r=home-page/h5-home').then(res=>{
            let {newList,msg}=res.data;
            context.commit("getlist",{mylist:newList,msg})
        })
    }
}

const getters={
    changemsg(state){
        return state.msg+'我是getters的新增内容'
    }
}

const store=new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store