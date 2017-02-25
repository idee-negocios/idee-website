<template>
  <div id="contact-form">

    <form @submit.prevent="onSubmit">
      <div class="input-container">
        <input id="name" name="name" type="text" v-model="name" required />
        <label for="name">Nombre</label>
        <div class="bar"></div>
      </div>
      <div class="input-container">
        <input id="email" name="email" type="text" v-model="email" required/>
        <label for="email">E-Mail</label>
        <div class="bar"></div>
      </div>
      <div class="input-container">
        <input name="phone" type="text" v-model="phone" required />
        <label for="phone">Teléfono/Celular</label>
        <div class="bar"></div>
      </div>

      <textarea cols="30" id="" name="message" rows="10" v-model="message"></textarea>

      <div class="button-container">
        <button id="submit" type="submit">
          Enviar
        </button>
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
    background: rgba(19, 35, 47, 0.9);
    box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);
    border-radius: 1rem;
    width: 50%;
    margin-left: 25%;
    padding: 1rem 0;

    form {
      width: 100%;
      padding: 2rem;

      .input-container {
        position: relative;
        margin: 0 60px 50px;

        input {
          outline: none;
          z-index: 1;
          position: relative;
          background: none;
          width: 100%;
          height: 60px;
          border: 0;
          color: #eee;
          font-size: 24px;
          font-weight: 400;

          &:focus {
            ~ label {
              color: #aaa;
              transform: translate(-12%, -50%) scale(0.75);
            }

            ~ .bar {
              &:before,
              &:after {
                width: 50%;
              }
            }
          }

          &:valid {
            ~ label {
              color: #9d9d9d;
              transform: translate(-12%, -50%) scale(0.75);
            }
          }
        }

        label {
          position: absolute;
          top: 0;
          left: 0;
          color: #aaa;
          font-size: 24px;
          font-weight: 300;
          line-height: 60px;
          transition: all 0.2s ease;
        }

        .bar {
          position: absolute;
          left: 0;
          bottom: 0;
          background: #555;
          width: 100%;
          height: 1px;

          &:before,
          &:after {
            content: '';
            position: absolute;
            background: #a00;
            width: 0;
            height: 2px;
            transition: .5s ease;
          }

          &:before {
            left: 50%;
          }

          &:after {
            right: 50%;
          }
        }
      }

      textarea {
        background: none;
        border: 1px solid #555;
        margin-bottom: 1rem;
        width: 100%;
        padding: 0 60px 50px;
      }


      .button-container {
        #submit {
          padding: 1rem 1rem 0.5rem 1rem;
          background-color: #da3127;
          color: #fff;
          font-weight: bold;
          font-family: "TheSans Light";
          font-size: 2rem;
          border: none;
          width: 100%;
          text-align: center;
        }
      }
    }
  }
</style>
