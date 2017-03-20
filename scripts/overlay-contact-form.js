const initOverlayContactForm = () => {
	document.addEventListener('turbolinks:load', () => {
		const emptyArray = [];
		const overlayEl = document.querySelectorAll('.overlay');

		const toggleOverlay = e => {
			e.preventDefault();

			emptyArray.forEach.call(overlayEl, el => {
				el.classList.toggle('overlay--open');
			});
		};

		const triggerElements = document.querySelectorAll('.js-overlay-open, .js-overlay-close');

		emptyArray.forEach.call(triggerElements, el => {
			el.addEventListener('click', toggleOverlay, false);
		});
	});
};

export default initOverlayContactForm;
