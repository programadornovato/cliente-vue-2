<template>
  <div id="app">
    <ul class="list-group">
      <li v-for="(ide,index) of ordena" @click="suma(index)" :key="ide.id"
      class="list-group-item d-flex justify-content-between align-items-center">
        {{index}}---{{ide.nombre}}
        <span class="badge badge-primary badge-pill">{{ide.voto}}</span>
      </li>
    </ul>
    <button @click="cero" class="btn btn-danger" >cero</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
export default {
  name: 'Lista',
  computed:{
    ...mapState(['ides']),
    ordena(){
      return this.ides.sort( (a,b)=> b.voto - a.voto )
    }

  },
  methods:{
    ...mapMutations(['suma','cero'])
  }
}
</script>