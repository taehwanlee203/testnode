function multi_3(n) {
  // 본인이 작성하라
  for(i=1; i<=n; i++) {
    if ( i%3 == 0)
      document.write(i+" ");
  }
}

var x = Math.random()*10 + 10;
var n = Math.floor(x);
document.write("1에서 "+n+ "까지 숫자중에서 <br>")
document.write("<hr>")
document.write("3의 배수는 ")
multi_3(n);