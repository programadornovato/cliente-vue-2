import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ides:[
      {nombre:'vs code',voto:0},
      {nombre:'netbeans',voto:0},
      {nombre:'sublime',voto:0}
    ]
  },
  mutations: {
    suma(state,index){
      state.ides[index].voto++;
    },
    cero(state){
      state.ides.forEach(elemento=>{
        elemento.voto=0;
      })
    }
  },
  actions: {

  }
})
