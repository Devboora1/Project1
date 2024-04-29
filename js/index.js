let aboutUsBttnList = document.getElementsByClassName("aboutUs");

function handleClick(event) {
  document
    .getElementById("aboutUsSection")
    .scrollIntoView({ behavior: "smooth" });
}

function handleOnFocusEvent(){
  let introVideo = document.getElementById("introVideo");
  introVideo.play();
  introVideo.muted = false;
}
document.getElementById("introVideo").addEventListener("mouseover",handleOnFocusEvent);
document.getElementById("introVideo").addEventListener("mouseout",()=>document.getElementById("introVideo").pause());

aboutUsBttnList[0].addEventListener("click", handleClick);
aboutUsBttnList[1].addEventListener("click", handleClick);
