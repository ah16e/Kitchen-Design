let imgList = Array.from(document.querySelectorAll('.card-body img'));
let lightBoxContainer = document.querySelector('#lightBoxContainer');
let ClsBtn = document.querySelector('#ClsBtn');
let currntIndex;

for (let i = 0; i < imgList.length; i++){
    imgList[i].addEventListener('click',function(eventInfo){
        lightBoxContainer.classList.replace('d-none','d-flex');
        let imgSrc = eventInfo.target.getAttribute('src');
        lightBoxContainer.firstElementChild.style.backgroundImage =`url("${imgSrc}")`;
        currntIndex = imgList.indexOf(eventInfo.target);
    })
}

ClsBtn.addEventListener("click", function (eventInfo) {
    lightBoxContainer.classList.replace("d-flex" ,"d-none");
})


let AboutOffset = $('#About').offset().top;

$(window).on('scroll' , function () {
    let wScroll = $(window).scrollTop();

    if(wScroll > AboutOffset - 60){
        $('.navbar').css({backgroundColor : 'rgba(145,146,155,146'})
    }else { 
        $('.navbar').css({backgroundColor : 'transparent'})

    }
})


document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    let dataText = [ "Future Of House Design"];
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to h1
       document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });




  $(function () {
    $('.spinner').fadeOut(1000 )
      $('.loading').fadeOut(1000);
      $('body').css({ overflow: 'auto' })
    })
   
  
 
 
  