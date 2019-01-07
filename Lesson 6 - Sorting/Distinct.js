function solution(A){

	var min=Number.MAX_VALUE,max=-Number.MAX_VALUE,dist=0,i,j,n = A.length, count={};


	for(i=0;i<n;i++){

		max=Math.max(max,A[i]);
    	min=Math.min(min,A[i]);
		count[A[i]]=1;

    }

	for(i=min;i<=max;i++){
		if(!isNaN(count[i]))
			dist++;
		
	}

	return dist;
}

//https://app.codility.com/demo/results/trainingY25T9T-22P/
