const data= [
  [1,1,1,1,1,1,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,1,0,1,1,0,1,0,1], 
  [1,0,1,0,0,0,0,1,0,1], 
  [1,0,1,1,1,0,1,1,0,1], 
  [1,0,1,0,1,0,0,1,1,1], 
  [1,0,1,0,0,0,0,0,0,1], 
  [1,0,1,0,1,1,1,1,0,1], 
  [1,0,0,0,1,0,0,0,0,1], 
  [1,1,1,0,1,0,1,1,0,1], 
  [1,0,0,0,0,0,0,0,0,1], 
  [1,0,1,0,0,1,1,0,0,1], 
  [1,0,1,0,0,0,1,0,0,1], 
  [1,0,1,1,1,0,1,1,0,1], 
  [1,0,0,0,0,0,0,0,0,1], 
  [1,0,1,1,1,1,1,1,1,1]
 ]
 
  var gb=40
var level
function setup(){
  var arr=data;
  for(var i=0; i<arr.length;i++){
    for(var j=0; j<arr[i].length;j++){
       switch (arr[i][j]) {
           case 0:
               arr[i][j]=1
               break;
           case 1: 
                arr[i][j]=10
           default:
               break;
       }

    }
}
  createCanvas(1000,800)
  level = new Level(data)
}
function draw(){
    background(200)
    level.display()
   // level.update()
    //level.highlight(mouseX, mouseY)
}
function mouseClicked(){ 
  var i=level.getIndex(mouseX, mouseY)
  level.path(i[0],i[1])
  console.log(i,"hello world")
}