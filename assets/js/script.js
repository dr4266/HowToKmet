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
	if (nav_div.style.width == '100%')
		nav_div.style.width = '0%';
	else
		nav_div.style.width = '100%';
}

// Handle the registration
function register() {
	console.log("Succesful");
}
