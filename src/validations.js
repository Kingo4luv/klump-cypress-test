import { extend } from 'vee-validate';
import { required, email, image, size } from 'vee-validate/dist/rules';

extend('required', {
	...required,
	message: '{_field_} is required'
});

extend('email', {
	...email,
	message: '{_field_} is not valid'
});

extend('phone-valid', (value) => {
	const phoneRegex = /^[0-9]+[\s.-]?[(]?[0-9]+[)]?[\s.-]?[0-9]{3}[\s.-]?[0-9]{3,11}$/;
	return phoneRegex.test(value);
});

extend('password-valid', (value) => {
	const passwordRegex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@\-.$!%*?&"#'()+,:;<=>_~{}^`\[\]|\/\\])[A-Za-z\d@\-.$!%*?&"#'()+,:;<=>_~{}^`\[\]|\/\\]{7,}$/m;
	return passwordRegex.test(value);
});

extend('phone', (value) => {
	const regex = /^[0-9]{10}$/;
	return regex.test(value);
});

extend('url', (value) => {
	const regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
	return regex.test(value);
});
extend('image', {
	...image,
	message: '{_field_} must be an image'
});
extend('size', {
	...size,
	params: ['size'],
	message: '{_field_} must not be greater than {size} kb'
});
