// Add the open class to the burger menu
document.addEventListener('DOMContentLoaded', function(event){
	var menu_click = document.getElementById('menu-toggle');
	var navicon = document.getElementById('nav-icon');
	menu_click.addEventListener('click', function(e) {
		e.preventDefault();
		navicon.classList.toggle('open');
	});
});

// Open/close the navigational menu
function toggle_navigation() {
	var nav_div = document.getElementById('navbar-open');
	var body_tags = document.getElementsByTagName('body');
	if (nav_div.style.width == '100%') {
		nav_div.style.width = '0%';
		body_tags[0].style.overflow = 'auto';
	} else {
		nav_div.style.width = '100%';
		body_tags[0].style.overflow = 'hidden';
	}
}
