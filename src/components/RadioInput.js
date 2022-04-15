const RadioInput = {
  template: `
    <input
      type="radio"
      v-model='radioValue'
      value='a'
    />
    <input
      type="radio"
      v-model='radioValue'
      value='b'
    />
    {{ radioValue }}
  `,
  data() {
    return {
      radioValue: 'a',
    };
  },
};

export default RadioInput;
