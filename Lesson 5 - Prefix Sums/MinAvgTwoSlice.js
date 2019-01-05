function solution(A){
	var i=0,pos,min=Number.MAX_VALUE;

	for(i=0;i<A.length;i++){

		if((A[i]+A[i+1])/2<min){
		min=(A[i]+A[i+1])/2;
		pos=i;
		}

		if((A[i]+A[i+1]+A[i+2])/3<min){
		min=(A[i]+A[i+1]+A[i+2])/3;
		pos=i;
		}

	}

	return pos;

}

//https://app.codility.com/demo/results/training6TGAXF-PAD/