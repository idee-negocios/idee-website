<template>
  <div id="contact-form">

    <button @click="goBack" class="goback-button"><img alt="" src="/static/left-arrow.svg"/></button>

    <form v-if="!submitted" @submit.prevent="onSubmit">
      <div class="input-container">
        <input id="name" name="name" type="text" v-model="name" required />
        <label for="name">Nombre</label>
        <div class="bar"></div>
      </div>
      <div class="input-container">
        <input id="email" name="email" type="text" v-model="email" required />
        <label for="email">E-Mail</label>
        <div class="bar"></div>
      </div>
      <div class="input-container">
        <input name="phone" type="text" v-model="phone" required />
        <label for="phone">Teléfono/Celular</label>
        <div class="bar"></div>
      </div>

      <div class="textarea-container">
        <label for="message">Mensaje</label>
        <textarea id="message" name="message" v-model="message" required></textarea>
      </div>

      <div class="button-container">
        <button id="submit" type="submit">
          Enviar
        </button>
      </div>
    </form>

    <div class="thanks" v-if="submitted">
      <p>
        Gracias {{name}} por contactarte con nosotros.
      </p>
      <p>
        En breve nos comunicaremos con vos.
      </p>
    </div>

    <footer class="contact">
      <p>ideenegocios@gmail.com</p>
    </footer>

  </div>
</template>

<script>
import send from '../db';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

export default {
  name: 'contact-form',
  props: ['formSelected'],
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      submitted: false
    };
  },
  methods: {
    onSubmit() {
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
        type: this.formSelected,
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
      };
      console.log(data);

      // Send data
      send(data);

      this.submitted = true;

      // Analytics
      ga('send', {
        hitType: 'event',
        eventCategory: 'Formulario',
        eventAction: 'consulta',
        eventLabel: this.formSelected,
        eventValue: 1
      });

      this.$emit('submitted');
    },
    goBack() {
      this.$emit('goback');
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
    position: relative;

    .goback-button {
      background-color: rgba(255, 255, 255, 0);
      border: none;
      outline: none;
      width: 50px;
      height: 50px;
      position: absolute;
      right: 0;
      top: -50px;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
      }
    }

    form {
      width: 100%;
      padding: 0 4rem;

      .input-container {
        position: relative;
        margin: 20px 0;

        // &:first-child {
        //   margin-top: 0;
        // }

        input {
          outline: none;
          z-index: 1;
          position: relative;
          background: none;
          width: 100%;
          height: 60px;
          border: 0;
          color: #eee;
          font-size: 1.5rem;
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
          font-size: 1.2rem;
          font-weight: 300;
          line-height: 90px;
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

      .textarea-container {
        margin-top: 3rem;
        margin-bottom: 2rem;
        text-align: left;

        label {
          color: #aaa;
          font-size: 1.2rem;
          font-weight: 300;
          line-height: 1;
          transition: all 0.2s ease;
        }

        textarea {
          margin-top: 0.5rem;
          background: none;
          border: 1px solid #444;
          border-bottom: 1px solid #555;
          height: 200px;
          outline: none;
          width: 100%;
          font-size: 1.5rem;
          color: #fff;
          padding: 1rem;

          &:focus {
            border-bottom: 2px solid #a00;
            transition: .5s ease;
          }
        }
      }


      .button-container {
        margin-bottom: 1rem;

        #submit {
          padding: 1rem 1rem 0.5rem 1rem;
          background-color: #da3127;
          color: #fff;
          font-weight: bold;
          font-family: "TheSans Light";
          font-size: 1.5rem;
          border: none;
          width: 100%;
          text-align: center;
          text-transform: uppercase;
          transition: all .5s ease;
          border-radius: 3px;

          &:hover {
            background-color: #dd3127;
            cursor: pointer;
            box-shadow: 0 4px 10px 4px rgba(255, 255, 255, 0.1);
          }
        }
      }
    }

    .thanks {
      padding: 0 2rem;

      p {
        color: #fff;
        font-size: 1.5rem;
        margin: 1rem 0;
      }
    }

    .contact {
      color: #aaa;
      font-size: 0.8rem;
      text-shadow: 0 0 1px #000;

      p {
        padding: 1rem 0;
      }
    }
  }

@media screen and (max-width: 768px) {
  #contact-form {
    margin: 1rem 0;
    width: 100%;
    padding: 0.5rem 0;

    form {
      padding: 0 1.2rem;
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  #contact-form {
    width: 75%;
    margin-left: 12.5%;
  }
}
</style>
