# form-redux-checkbox-group
A redux-form checkbox group.

# install 


# example

Create a normal checkbox group

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

<CheckboxGroup options={options} name="weekdays" />

```

Create a checkbox group with a custom component (a bootstrap example)


```js

const bootstrapParser = ({input, label}) => (
    <div className="checkbox">
        <label>
            <input type="checkbox" {...input} />
            {label}
        </label>
    </div>
);

let options = [
  {label: 'Monday', value: 'monday'},
  {label: 'Tuesday', value: 'tuesday'},
  {label: 'Wednesday', value: 'wednesday'},
  {label: 'Thursday', value: 'thursday'},
  {label: 'Friday', value: 'friday'},
  {label: 'Saturday', value: 'saturday'},
  {label: 'Sunday', value: 'sunday'}
];

<CheckboxGroup options={options} component={bootstrapParser} name="weekdays" />

```



# Contribute

Please contribute to make this available as npm package.
