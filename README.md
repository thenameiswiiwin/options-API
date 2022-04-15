# Vue 3 + Vite, Inc Options + Composition API, Vue Router and Vuex.

## ES Module

Allows us to separate our code into separate files.

## Properties of Options API:

1. `Template`
   > Take in a string, template literal.
   > String interpolation to INTERPOLATE in JavaScript expression and render it in the template.
2. `Data`
   > Return an Object that has variables that whole data.
3. `Methods`
   > Where you put your methods
4. `Computed`
   > Derived data, often going to be a subset of some existing data.

## Rendering in Template Property

`{{ }}`

`{{` variable name `}}`

## Event Handling

### v-on

`v-on:click="` name of method `"`

## Control Flows

Directives:

`v-if`

`v-else`

V-if and V-else, the two tags must be directly adjacent inside the template property.

## For Loop Directive

### v-for

Take in 2 expressions:

1. A variable name for each item you are looping through
2. An array, to loop over

Format: `item in items`

### Example:

```JavaScript
<div v-for="number in numbers">
    {{ number }}
</div>
```

## Computed Property

Computed property use for encapsulating data transformations and manipulations, that stay synched with the data that it reference.

All computed properties are going to be functions, that take no arguments, and going to be determined by whatever they return.

```
When to use Methods property and when to use Computed Property?

Methods === when you need to change data.

Computed === when you need to change the presentation of existing data.
```

```JavaScript
template: `
    <div v-for="number in evenList">
      <div>
        {{ number }}
      </div>
    </div>
`,

data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
},

computed: {
    evenList() {
      return this.numbers.filter(num => this.isEven(num))
    }
},

methods: {
    isEven(number) {
      return number % 2 === 0
    }
}
```

> In Computed Property:

Created a function called `eventList()` that take no argument, and return all the even numbers in the `numbers` array above within the data property above, hence `this.` for access.

The numbers array is being filtered over using the `.filter()`, by passed in the `isEven()` function using `this.` to access the `methods` property. `this.numbers.filter(num => this.isEven(num))`

> In the Template Property

Much like the data and methods properties, the `computed` properties are directly available in the template property.

```JavaScript

template: `
    <div v-for="number in evenList">
      <div>
        {{ number }}
      </div>
    </div>
`,
```

Use `v-for` directive to loop over the `evenList` in the `computed` property, and render all of the item in the array.

## Class Bindings

A subset of something black binding.

`v-bind` directive --- allow you to execute a JavaScript expression inside of a class.

`Can use v-bind with any attributes you like`

```HTML
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="app"></div>

    <script type="module" src="/index.js"></script>

    <style>
      .blue {
        color: blue;
      }
      .red {
        color: red;
      }
    </style>
  </body>
</html>
```

```JavaScript
template: `
    <div v-for="number in numbers" v-bind:class="getClass(number)">
      <div>
        {{ number }}
      </div>
    </div>
  `,
data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
},
methods: {
    isEven(number) {
      return number % 2 === 0;
    },
    getClass(number) {
      return this.isEven(number) ? 'blue' : 'red';
    },
},
```

Use `v-for` directive to loop through the `numbers` array in the `data` property, and then rendered each number within the array.

Use `v-bind` to bind the the class, take in the `getClass()` method, that take in `number` which is each item in the array.

The `getClass()` method takes in number, then return `isEven()` method which return all even numbers.

Using tenery operator check to see if the number is even, then the color is blue, else it is red.

## Input Validation

```JavaScript
template: `
    <input
        v-bind:value='value'
        v-on:input="input"
    />

    <div class="red">
        {{ error }}
    </div>
`,

data() {
    value: 'user'
}

methods: {
    input($event) {
        this.value = $event.target.value
    }
},

computed: {
    error() {
        if (this.value.length < 5) {
            return 'Must be greater than 5'
        }
    }
},
```

## V-Model

Create a two-way binding on a form input element for a component. Shorthand for v-bind and v-on in a form.

Limited to:
`<input>`
`<select>`
`<textarea>`

V-model going to do two things:
1. It's going to bind to a data variable
2. It's going to listen for the input

```JavaScript
template: `
    <input
        type="radio"
        v-model='radioValue'
        value="a"
    />
    <input
        type="radio"
        v-model='radioValue'
        value="b"
    />
    {{ radioValue }}


    <input
        type="checkbox"
        v-model='checkboxValue'
        value="1"
    />
    <input
        type="checkbox"
        v-model='checkboxValue'
        value="2"
    />
    {{ checkboxValue }}
`,

data() {
    radioValue: 'a',
    checkboxValue: ['1']
}
```

## Component

A component is an object with a number of options (data, methods, computed).

```JavaScript
const Hello = {
    template: `
        <p>Hello!</p>
    `
}

const vue.createApp({
    components: {
        Hello
    },

    template: `
        <Hello />
    `
})
```

## Component Props

`props` is short for properties.

props get pass down from the parent component to the child component.

```JavaScript
<!-- Parent Component -->
const vue.createApp({
    components: {
        Hello
    },

    template: `
        <Hello greeting="Hello" />
    `
})

<!-- Child Component -->
const Hello = {
    props: ['greeting'],
    template: `
        <p>{{ greeting }}!</p>
    `
}
```

## Child - Parent Communication with Events

Parent -> Child === using `Props`

Child <- Parent === using `$emit('<name of event of your choice>', payload argument)`, emmit an event from the child component, and listen from the parent component.
