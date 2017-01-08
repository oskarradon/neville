let images = document.querySelectorAll('div.ball');
//
// //
Array.prototype.forEach.call(images, function(el){
	el.onclick=function() {
		let number = this.id.toString().replace('ball','');
		console.log(number);
	}
});



// // when ball is clicked
// $('.ball').click(function() {
//
// })
// // hide this ball
// // show the next one
