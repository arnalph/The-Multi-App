//import '../css/style.css'

function openNav() {
  document.getElementById("mySidenav").style.width = "250px"
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0"
}
function changeURL(url,  type='path'){
	if (type==='url'){document.getElementById("html-frame").src=url}
	else{document.getElementById("html-frame").src='apps/'+url}
}