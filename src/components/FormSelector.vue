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
        <span>¡Emprendamos!</span>
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

#form-selector {
  a {
    cursor: pointer;
  }
}
</style>
