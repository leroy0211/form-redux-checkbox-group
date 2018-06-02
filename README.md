# react-form-checkbox

A component to correctly handle checkboxes, with added support for [Redux Form](https://redux-form.com/)

# install 

```bash
npm install react-form-checkbox

```

# Examples

## Simple checkbox group with a simple array. 

Both value and label are based on the array items.

```js

<Checkboxes data={['red', 'white', 'blue']} onChange={/* your handler*/} />

```

The `onChange` has to be a function, the first argument will be the selected options.

## Custom item rendering

You can have full control of the checkbox html. 

If you want an à la bootstrap rendering, create a new Component and add it to the `itemComponent` property.

```js

const bootstrapParser = ({input, label}) => (
    <div className="checkbox">
        <label>
            <input type="checkbox" {...input} />
            {label}
        </label>
    </div>
);

<Checkboxes data={['red', 'white', 'blue']} itemComponent={bootstrapParser} />

```

## Advanced data

An array with objects can also be passed. 

```js

let options = [
  {label: 'Monday', value: 'monday'},
  {label: 'Tuesday', value: 'tuesday'},
  {label: 'Wednesday', value: 'wednesday'},
  {label: 'Thursday', value: 'thursday'},
  {label: 'Friday', value: 'friday'},
  {label: 'Saturday', value: 'saturday'},
  {label: 'Sunday', value: 'sunday'}
];

<Checkboxes data={options} />

```

By default, it will search for the `label` key to use as a label, and for the `value` key to use as a value.
 
To overwrite that, use the `labelField` or `valueField` property to define your own.
 

 ```js
 
 let options = [
   {text: 'Monday', option: 'monday'},
   {text: 'Tuesday', option: 'tuesday'},
   {text: 'Wednesday', option: 'wednesday'},
   {text: 'Thursday', option: 'thursday'},
   {text: 'Friday', option: 'friday'},
   {text: 'Saturday', option: 'saturday'},
   {text: 'Sunday', option: 'sunday'}
 ];
 
 <Checkboxes data={options} labelField="text" valueField="option" />
 
 ```

## Form Redux implementation

We created a simple HOC for Form Redux. 

```js

import { ReduxCheckbox, Checkboxes } from 'react-form-checkbox';

<Field component={ReduxCheckbox(Checkboxes)} data={['red', 'white', 'blue']} />

```

Every option can be passed to the Form Redux's `Field` component and will be proxied to the `Checkboxes`.

# Contribute

Do you want to contribute by creating bugs, fixing them or adding new features? Read the [instructions](CONTRIBUTING.md)