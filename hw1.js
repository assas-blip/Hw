console.log(2)
first: for (var i = 3; i <= 100; i++){
  for (var j = 2; j < i; j++ ){
    if (i % j == 0){
      continue first
    }
  }
  console.log(i)
}