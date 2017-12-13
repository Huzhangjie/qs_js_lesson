const name = "aaa bbb ccc"
const str2 = name.replace(/\b\w+\b/g, function(word){
  // console.log(typeof(word))
  return word.substring(0,1).toUpperCase() + word.substring(1)
})
console.log(str2);
