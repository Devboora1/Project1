$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    console.log('main hit');
		$(this).toggleClass('open');
	});
});
function sideBarToggle(){
  console.log()
  document.getElementById("sidebar").classList.toggle("showSidebar");
}

function sideBarOpen() {
    document.getElementById("sidebar").classList.add("showSidebar");
}
    
function sideBarClose() {
  document.getElementById('nav-icon3').classList.remove('open');
  document.getElementById("sidebar").classList.remove("showSidebar");
}
