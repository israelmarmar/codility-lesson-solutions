function solution(A){
	var P,Q,R,n=A.length;

	if(n <= 2)
    	return 0;

	A.sort(function (a,b) {
        return a - b;
    });

    for(var i=0;i<n;i++){
    	P=A[i];
    	Q=A[(i+1)%n];
    	R=A[(i+2)%n];

    	if(P+Q>R && Q+R>P && R+P>Q)
    		return 1;
    }

    return 0;

}
//https://app.codility.com/demo/results/trainingMZFMX9-6T3/