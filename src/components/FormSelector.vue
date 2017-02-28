<template>
  <div id="form-selector">

    <figure @click="select('new-business')">
      <div>
        <span>Quiero emprender</span>
        <span>¡Emprendamos!</span>
      </div>
    </figure>

    <figure @click="select('existing-business')">
      <div>
        <span>Tengo una empresa</span>
        <span>¡Crezcamos!</span>
      </div>
    </figure>

  </div>
</template>

<script>

  export default {
    name: 'form-selector',
    data() {
      return {
        selected: null
      };
    },
    methods: {
      select(selection) {
        this.selected = selection;
        this.$emit('select', selection);
      }
    }
  }
</script>

<style lang="scss">
@import '../buttons';

@media screen and (max-width: 600px) {
  #form-selector {
    figure {
      width: 100%;
      margin-right: 0;
      margin-bottom: 5px;
    }
  }
}
</style>
