import './OverlayScrollbars.min.css';
import './custom.css';
import './OverlayScrollbars.min.js';

// initializes overlayscrollbars
document.addEventListener('DOMContentLoaded', function initScrollbars() {
	OverlayScrollbars(document.querySelectorAll('body'), {});
});
