function solution(A){
	var max=-Number.MAX_VALUE,i,n=A.length;

	A.sort(function (a,b) {
        return a - b;
    });

	for(i=0;i<n;i++)
		max=Math.max(max,A[i]*A[(i+1)%n]*A[(i+2)%n]);

	return max;

}
//https://app.codility.com/demo/results/training7TTXT2-E32/