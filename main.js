var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 var b_image=''

 var images=['BirthdayImage.jpg','mom.jpg']

 
function new_image()
{
	
 numbers=  Math.floor(Math.random()*2)
 console.log(numbers)
	fabric.Image.fromURL(images[numbers],function (Img) {
images=Img
images.scaleToWidth(710)
images.scaleToHeight(510)

images.set
({
  top:0,
  left:0
})
    
    canvas.add(images)
})


}
var audio = new Audio('birth_song.mp3');
function play_sound(){
  
audio.play();
document.getElementById("stop").style.display='block'
document.getElementById("play").style.display='none'
}




function stop(){
    
  audio.pause()
  document.getElementById("stop").style.display='none'
  document.getElementById("play").style.display='block'
}