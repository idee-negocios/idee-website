<template>
  <div id="app">

    <header>
      <img alt="Identidad y Desarrollo para Empresas y Emprendimientos" src="/static/logo.svg" id="logo" />
    </header>

    <main>
      <transition name="slide-fade">
        <FormSelector v-if="!formSelected" @select="onSelect"></FormSelector>
        <ContactForm v-if="formSelected" :formSelected="formSelected" @goback="goToRoot"></ContactForm>
      </transition>

    </main>

  </div>
</template>

<script>
import FormSelector from './components/FormSelector';
import ContactForm from './components/ContactForm';

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
    ContactForm
  },
  methods: {
    onSelect(selection) {
      this.formSelected = selection;
    },
    goToRoot() {
      console.log('root');
      this.formSelected = null;
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

    header {
      text-align: center;
      margin-bottom: 1rem;

      #logo {
        width: auto;
        height: 400px;
        margin-bottom: 2rem;
      }
    }
  }


</style>
