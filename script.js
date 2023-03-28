function threeSum(arr, target) {
// write your code here
	let min=Number.MAX_VALUE;
	let ans=0;
	for (let i = 0; i < arr.length-2; i++) {
		for (let j = i+1; j < arr.length-1; j++) {
			for (let k = j+1; k < arr.length; k++) {
				let sum=arr[i]+arr[j]+arr[k];
				if(sum>target){
					if(Math.abs(sum-target)<=min){
					min=Math.abs(sum-target);
					ans=sum;
				}
				}else{
					ans=sum;
				}
			}
		}
		return ans
	}
  
}

module.exports = threeSum;
