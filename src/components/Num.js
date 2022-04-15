const Num = {
  props: ['number'],
  template: `
    <button
      v-bind:class="getClass(number)"
      v-on:click="click"
    >
      {{ number }}
    </button>
  `,
  methods: {
    isEven(number) {
      return number % 2 === 0;
    },
    getClass(number) {
      return this.isEven(number) ? 'blue' : 'red';
    },
    click() {
      this.$emit('chosen', this.number)
    }
  },
};

export default Num;
