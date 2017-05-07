let singleton = (function(){
function playing(keycode){
	     keycode.currentTime = 0;
                keycode.play();
} 
function stopping(keycode){
	     keycode.pause();
}	
function playkey(keycode,child){
	    if (event.keyCode == Number(keycode.getAttribute('data-key'))) {
            if (keycode.getAttribute('data-key') == keycode.children[2].getAttribute('data-key')) {
                keycode.className = 'key playing';
      			playing(child);

            }
        }
}
function stopkey(keycode,child){
	    if (event.keyCode == Number(keycode.getAttribute('data-key'))) {
            if (keycode.getAttribute('data-key') == keycode.children[2].getAttribute('data-key')) {
                keycode.className = 'key';
                stopping(child);
            }
        }
}
var instance;
function init(){
let letter = document.getElementsByClassName('key');

for (let i = 0; i < letter.length; i++) {
    letter[i].addEventListener('mouseover', function() {
        this.className = 'key playing';
        this.children[2].play();



    })
    window.addEventListener('keydown', function(event) {
        event.preventDefault();
        that = letter[i]
    	playkey(that,that.children[2])
    })

    window.addEventListener('keyup', function(event) {
        event.preventDefault();
        that = letter[i]
        stopkey(that,that.children[2])
    
    })


    letter[i].addEventListener('mouseout', function() {
        this.className = 'key'
        this.children[2].pause();
    })

}
}
 return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();



singleton.getInstance();























































































































































































































































































































































































































































































































