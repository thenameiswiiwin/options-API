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

All computed properties are going to be functions, that take no arguments, and going to be determined by whatever they return.

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
