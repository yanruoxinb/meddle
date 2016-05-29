function calculate_median(arr) {
	var len=arr.length;
	var sum=0,i=1;
	while(i<len){
		sum=sum+arr[i];
		i=i+2;
	}
	sum=sum/parseInt(len/2);
	return sum;
	 	
}

module.exports = calculate_median;
