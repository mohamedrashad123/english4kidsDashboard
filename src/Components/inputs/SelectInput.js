import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const dot = (color = 'transparent') => ({
	alignItems: 'center',
	display: 'flex',
});

const indicatorSeparatorStyle = { width: 0 };
const IndicatorSeparator = ({ innerProps }) => {
	return <span style={indicatorSeparatorStyle} {...innerProps} />;
};

const animatedComponents = makeAnimated();
const colorStyles = {
	container: (base) => ({
		...base,
		flex: 1,
	}),
	control: (styles, { selectProps: { boxShadow } }) => ({
		...styles,
		backgroundColor: 'white',
		boxShadow,
		borderRadius: '4px',
		border: 'none',
		padding: '5px 10px',
	}),
	option: (styles, { data, isDisabled, isFocused, isSelected }) => {
		return {
			...styles,
		};
	},
	input: (styles) => ({ ...styles, ...dot() }),
	placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
	singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

export default function CustomSelectMenu({ options, changeValue, defaultValue, ...props }) {
	const [value, setValue] = useState(null);

	const onChange = (option, { action }) => {
		if (action === 'clear') {
			setValue(null);
		}

		if (action === 'select-option') {
			setValue(option);
			changeValue(option?.value);
		}
	};

	const onInputChange = (string, { action }) => {
		if (action === 'input-change') {
			setValue({ value: string, label: string });
		}
	};

	useEffect(() => {
		setValue(options.find((option) => option.value === defaultValue));
	}, [defaultValue]);

	return (
		<Select
			onChange={onChange}
			onInputChange={onInputChange}
			// closeMenuOnSelect={false}
			components={{ ...animatedComponents, IndicatorSeparator }}
			styles={colorStyles}
			options={options}
			value={value}
			defaultValue={value}
			option={value}
			isClearable
			{...props}
		/>
	);
}
