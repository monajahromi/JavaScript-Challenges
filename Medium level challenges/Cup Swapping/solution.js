function cupSwapping(swaps) {function cupSwapping(swaps) {
  

	cups = { A:0 , B:1 , C:0 } ;
  /*
  assume swap array is like below :
  swaps = ['AB','AC'];
  we are going iterate over swaps array and change ke place of "1"
  (1 denotes the place of ball)
  
  firstMove = swaps[0]
  firstMove[0] = 'A'
  firstMove[1] = 'B'
  
  now we are going to change the value of cups["A"] and cups["B"], save the value of cups["A"] in temp so we dont loss the data
  
  tmp= obj["A"] ;obj["A"] =obj["B"] ; obj["B"]= tmp  
  or
  tmp= obj[firstMove[0]] ;obj[firstMove[0]] =obj[firstMove[1]] ; obj[firstMove[1]]= tmp  
  
  Nice till now :)
  we will do this for all element of swaps by using forEach
  */

  swaps.forEach(move => {let tmp= obj[move[0]] ;obj[a[0]] =obj[a[1]] ; obj[a[1]]= tmp  });

  /*
  now we have done all the swaps
  cups will be like this:
  { A:0 , B:0 , C:1}
  geting the values array : Object.values(cups)
  Object.values(cups) = [0,0,1]
  finding Index of 1 : Object.values(obj).findIndex(Boolean)
  and then the key represanting the value of 1 
  */
  
  return Object.keys(obj)[Object.values(obj).findIndex(Boolean)]
}
}
