<template>
  <div id="app">

    <img alt="Identidad y Desarrollo para Empresas y Emprendimientos" src="/static/logo.svg" id="logo" />

    <main>
      <Quotes></Quotes>

      <FormSelector
          v-if="!formSelected"
          @select="onSelect">
      </FormSelector>

      <ContactForm
          v-if="formSelected"
          :formSelected="formSelected"
          @goback="goToRoot"
          @submitted="submitted">
      </ContactForm>
    </main>

  </div>
</template>

<script>
import FormSelector from './components/FormSelector';
import ContactForm from './components/ContactForm';
import Quotes from './components/Quotes';

import $ from 'jquery';

import background from './background';

export default {
  name: 'app',
  data() {
    return {
      formSelected: null
    };
  },
  components: {
    FormSelector,
    ContactForm,
    Quotes
  },
  methods: {
    onSelect(selection) {
      this.formSelected = selection;
    },
    goToRoot() {
      this.formSelected = null;
      background();
    },
    submitted() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    }
  },
  mounted() {
    background();
  },
  updated() {
    background();
  }
}
</script>

<style lang="scss">
  @import 'mixins';

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    #logo {
      width: auto;
      height: 400px;
      margin-bottom: 3rem;
    }
  }


</style>
