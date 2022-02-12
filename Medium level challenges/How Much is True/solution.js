function countTrue(arr) {
return arr.reduce((a,b)=>a+= b==true ? 1 : 0 ,0)
}
