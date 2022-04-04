export function success(options = {}) {
	swal.fire({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		title: '',
		...options
	});
}

export function failure(options = {}) {
	swal.fire({
		toast: true,
		position: 'top-end',
		timer: 3000,
		title: 'Oops!',
		showConfirmButton: false,
		...options
	});
}
