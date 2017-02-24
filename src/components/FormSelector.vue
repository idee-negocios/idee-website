<template>
  <div id="form-selector">

    <a class="button"
      :disabled="selected === 'new-business'"
      @click="select('new-business')">
      Quiero emprender
    </a>

    <a class="button"
      :disabled="selected === 'existing-business'"
      @click="select('existing-business')">
      Soy emprendedor
    </a>

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
