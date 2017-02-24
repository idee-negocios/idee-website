<template>
  <div id="app">

    <header>
      <h1 class="title">IDEE</h1>
      <h2 class="subtitle">Identidad y Desarrollo para Empresas y Emprendimientos</h2>
    </header>

    <main>
      <FormSelector v-if="!formSelected" @select="onSelect"></FormSelector>

      <transition name="slide-fade">
        <ContactForm v-if="formSelected" :formSelected="formSelected"></ContactForm>
      </transition>
    </main>

  </div>
</template>

<script>
import FormSelector from './components/FormSelector';
import ContactForm from './components/ContactForm';

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
    }
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
      padding: 2rem 0;
      text-align: center;
      margin-bottom: 1rem;

      .title {
        font-size: 3rem;
        color: #000;
        font-weight: bold;
        font-family: 'Montserrat', serif;
        line-height: 1.5;
        letter-spacing: 5px;
      }

      .subtitle {
        font-size: 1rem;
        color: #333;
        font-weight: bold;
        font-family: 'Montserrat', serif;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }
  }
</style>
