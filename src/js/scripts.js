let images = document.querySelectorAll('div.ball');

Array.prototype.forEach.call(images, function(el){
	el.onclick=function() {
		this.style.display = 'none';
		let number = parseInt(this.id.toString().replace('ball',''));
		// console.log(number + 'type:' + typeof number);
		// console.log('length:' + images.length + 'type:' + typeof images.length);
		if (number === images.length) {
			console.log('ok cool');
			number = 1;
			this.id = 'ball' + number;
			this.style.display = 'block';
		} else {
			number++;
			this.id = 'ball' + number;
			this.style.display = 'block';
		}
	}
});

// it could be prettier to loop over the characters in the string of the id and when one is a number change it to number++

// when ball is clicked
// hide this ball
// show the next one
