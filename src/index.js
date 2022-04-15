import * as Vue from 'vue/dist/vue.esm-bundler.js';
import Num from '/components/Num.js';
import Incr from '/components/Incr.js';
import Err from '/components/Err.js';
import RadioInput from '/components/RadioInput.js';

const app = Vue.createApp({
  components: {
    Num,
    Incr,
    Err,
    RadioInput,
  },
  template: `
    <Num
      v-for="number in numbers"
      v-bind:number='number'
      v-on:chosen="addNumber"
    />
    <hr>
    <Num
      v-for="number in numberHistory"
      v-bind:number='number'
    />
    <hr>
    <Incr />
    <hr>
    <Err />
    <hr>
    <RadioInput />
  `,
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      numberHistory: []
    };
  },
  methods: {
    addNumber(number) {
      this.numberHistory.push(number)
    }
  }
});

app.mount('#app');
