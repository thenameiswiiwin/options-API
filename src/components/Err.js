const Err = {
  template: `
    <input
      v-bind:value='value'
      v-on:input='input'
    />
    <div class="red">
      {{ error }}
    </div>
  `,
  data() {
    return {
      value: 'user',
    };
  },
  methods: {
    input($event) {
      this.value = $event.target.value;
    },
  },
  computed: {
    error() {
      if (this.value.length < 5) {
        return 'Must be greater than 5.';
      }
    },
  },
};

export default Err;
