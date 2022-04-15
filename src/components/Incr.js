const Incr = {
  template: `
    <button v-on:click="increment">Increment</button>
    <p>{{ count }}</p>
  `,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
};

export default Incr;
