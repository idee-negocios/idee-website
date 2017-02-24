<template>
  <div id="contact-form">

    <form @submit.prevent="onSubmit">
      <input name="name" type="text" v-model="name" placeholder="Nombre"/>
      <input name="email" type="text" v-model="email" placeholder="E-Mail"/>
      <input name="phone" type="text" v-model="phone" placeholder="Teléfono/Celular"/>

      <textarea cols="30" id="" name="message" rows="10" v-model="message"></textarea>

      <div class="button-container">
        <button id="submit" type="submit">Enviar</button>
      </div>
    </form>

  </div>
</template>

<script>

export default {
  name: 'contact-form',
  props: ['formSelected'],
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: ''

    };
  },
  methods: {
    onSubmit() {
      console.log('Submit');
      console.log(this.message);
    }
  }
}
</script>

<style lang="scss">
  #contact-form {
    background: rgba(255, 255, 255, 0.3);
    padding: 2rem 0;
    border-radius: 1rem;

    form {
      width: 100%;
      padding: 2rem;

      input, textarea {
        width: 100%;
        margin-bottom: 0.5rem;
        padding: 0.5rem 1rem;
        outline: none;
        border: none;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 3px;
      }

      input:focus, textarea:focus {
        outline: none;
        box-sizing: border-box;
        box-shadow: 0 0 3px #555;
      }

      input::placeholder {
        color: #888;
      }

      .button-container {
        text-align: right;

        #submit {
          padding: 0.5rem 1rem;
          color: #fff;
          background-color: #555;
          border: 1px solid black;

        }
      }
    }
  }
</style>
