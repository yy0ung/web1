var Links={
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i<alist.length){
    // alist[i].style.color = color;
    // i++;}
    $('a').css('color',color); //use jquery
  }
}

 var Body ={
   setColor: function (color){
     // document.querySelector('body').style.color=color;
     $('body').css('color',color);
   },
   setbackgroundColor:function(color){
     //document.querySelector('body').style.backgroundColor=color;
     $('body').css('backgroundColor',color);
   }
 }

 function nightDayHandler(self){
  var target= document.querySelector('body');
  if(self.value==='night'){
    Body.setbackgroundColor('black');
    Body.setColor('white');
    self.value='day';
    Links.setColor('powderblue');
  }else{
    Body.setbackgroundColor('white');
    Body.setColor('black');
    self.value='night'
    Links.setColor('blue');
  }
  }
