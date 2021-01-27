function countBoomerangs(arr) {
  //I am not going to limit filter, since not worried about exceeding the array length, if its happen it will be undefined and the equality assessments returns false
	return arr.filter((v,i) => v == arr[i+2] && v != arr[i+1]).length
}
