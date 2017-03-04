<template>
  <div id="quote">
    <header>
      <h1>
        {{quote}}
      </h1>
      <h2>
        en Mendoza
      </h2>
    </header>
  </div>
</template>

<script>
export default {
  name: 'quote',
  data() {
    return {
      quotes: [
        'Marketing Digital',
        'Desarrollo de Software',
        'Diseño Web'
      ],
      quote: null
    };
  },
  created() {
    let randNum = Math.floor(Math.random() * (this.quotes.length));
    this.quote = this.quotes[randNum];

    let lastNum = randNum;

    setInterval(_ => {
      do {
        randNum = Math.floor(Math.random() * (this.quotes.length));
      } while(randNum === lastNum);

      this.quote = this.quotes[randNum];

      lastNum = randNum;
    }, 5000);
  }
}
</script>

<style lang="scss">
#quote {
  margin-bottom: 2rem;
  display: inline-block;

  header {
    h1, h2 {
      font-family: "TheSans Light", Arial;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.7);
    }

    h1 {
      padding: 0.3rem 0;
      font-family: "TheSans Light", Arial;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.7);
      font-size: 2rem;
      text-transform: uppercase;
    }

    h2 {
      font-size: 1.4rem;
      margin: 0;
      padding: 0;
      text-transform: uppercase;
      color: rgba(0, 0, 0, 0.5);
    }

    @media screen and (max-width: 600px) {
      h1 {
        font-size: 1.5rem;
      }

      h2 {
        font-size: 1rem;
      }
    }
  }
}


</style>
