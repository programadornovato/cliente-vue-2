<template>
  <div id="app">
    <ul class="list-group">
      <li v-for="ide of ides"
      class="list-group-item d-flex justify-content-between align-items-center">
        {{ide.nombre}}
        <span class="badge badge-primary badge-pill">{{ide.voto}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'Lista',
  computed:{
    ...mapState(['ides'])
  }
}
</script>