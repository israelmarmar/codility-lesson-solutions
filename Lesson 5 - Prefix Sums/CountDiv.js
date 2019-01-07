function solution(A, B, K){

	var an,a1,q,n;

	a1=K*(Math.ceil(A/K));

	an=K*(Math.floor(B/K));

	console.log(a1);
	console.log(an);

	n=(an-a1)/K+1;

	return n;

}

//https://app.codility.com/demo/results/trainingBJXGWG-6B3/