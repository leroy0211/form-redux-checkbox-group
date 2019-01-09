import * as React from 'react';
import PropTypes from 'prop-types';

export default class Checkboxes extends React.Component {

    item = ({input, label}) => (
        <label>
            <input type="checkbox" {...input} />
            <span>{label}</span>
        </label>
    );

    handleChange = ({option}) => (event) => {
        const {value = [], onChange} = this.props;

        const arr = [...value];
        if (event.target.checked) {
            arr.push(option.value);
        } else {
            arr.splice(arr.indexOf(option.value), 1);
        }

        if (onChange) {
            return onChange(arr);
        }
    };

    getLabelAndValue(option) {
        const {labelField, valueField} = this.props;

        if (typeof option === 'string') {
            return {label: option, value: option};
        }

        return {
            label: option[labelField],
            value: option[valueField]
        };
    }

    render() {

        const {
            itemComponent = this.item,
            data = [],
            value: values
        } = this.props;

        const checkboxes = data.map((option, index) => {
            const {label, value} = option = this.getLabelAndValue(option);
            const key = `checkbox-${index}`;

            return React.createElement(itemComponent, {
                input: {
                    onChange: this.handleChange({option}),
                    checked: ~values.indexOf(value),
                    value,
                },
                label, option, data, key
            });
        });

        return (<div>{checkboxes}</div>);
    };
}

Checkboxes.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.node.isRequired,
            value: PropTypes.node.isRequired
        })),
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    itemComponent: PropTypes.func,
    labelField: PropTypes.string,
    valueField: PropTypes.string
};

Checkboxes.defaultProps = {
    labelField: 'label',
    valueField: 'value'
};
