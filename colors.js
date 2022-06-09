var BodySet = {
  color:function(color){
    // document.querySelector('body').style.color=color;
    $('body').css('color', color);
  },
  backgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor', color);
  }
}
var LinkSet = {
  color:function(color){
    // var links = document.querySelectorAll('a');
    // var i;
    // for(i = 0; i < links.length; i++){
    //   links[i].style.color=color;
    // }
    $('a').css('color', color);
  }
}
function dayNightHandler(self){
  if(self.title === '다크모드'){
    BodySet.backgroundColor('black');
    BodySet.color('ivory');
    LinkSet.color('powderblue');
    self.title = '일반모드';

  } else{
    BodySet.backgroundColor('ivory');
    BodySet.color('black');
    LinkSet.color('blue');
    self.title = '다크모드';
  }
}
