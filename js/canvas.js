/*canvas技能*/
show(c1,80);
show(c2,75);
show(c3,70);
show(c4,60);
show(c11,60);
show(c22,60);
show(c33,60);
show(c44,60);

function show(id,num){
  id.width=300;
  id.height=260;
  drawCircle(id,num);
}

  function drawCircle(id,num) {
    var ctx = id.getContext('2d');
    ctx.strokeStyle='#ddd';
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.arc(150, 150, 100, 0, 2 * Math.PI);
    ctx.stroke();

    if(num<60){
      ctx.strokeStyle = '#3399FF';
    }else if(num<75){
      ctx.strokeStyle="#0D559D";
    }else{
      ctx.strokeStyle="#00f";
    }
    var n=0;
    var timer = setInterval(function () {
      ctx.clearRect(0,0,300,260);
      ctx.beginPath();
      ctx.font="24px sans-serif";
      var txtWidth=ctx.measureText(n + "%").width;
      ctx.fillText(n++ + "%",150-txtWidth/2,150+12);
      ctx.arc(150, 150, 100, -1 / 2 * Math.PI, (n*180/50) / 180 * Math.PI - 1 / 2 * Math.PI);
      ctx.stroke();
      if(n>num){
        clearInterval(timer);
      }
    }, 20);
  }