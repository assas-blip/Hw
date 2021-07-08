var i = 1
var j = 0
var x = ""
while (i <= 20){
  while (j < i){
    x = x + "x"
    j++
  }
  console.log(x)
  x = ""
  j = 0
  i++
}