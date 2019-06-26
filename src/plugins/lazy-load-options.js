window.lazySizesConfig = window.lazySizesConfig || {};

function removeLazyClass($el) {
	const cls = 'is-loading';
	const $parent = $el.parentElement;

	if ($parent) {
		$parent.classList.remove(cls);
	}
}

document.addEventListener('lazybeforeunveil', e => removeLazyClass(e.target));
