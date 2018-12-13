function solution(N, A){
    var maxval=0,maxcounter=0;
    var counters=[];

    for(var i=0;i<N;i++)
        counters.push(0);

    for(var i=0;i<A.length;i++){

        if(A[i]>=1 && A[i]<=N){

            counters[A[i]-1]=Math.max(maxcounter,counters[A[i]-1]);
            (counters[A[i]-1])++;
            maxval=Math.max(maxval,counters[A[i]-1]);

        }
        else
            maxcounter=maxval;

       
    }

    for(var i=0;i<N;i++){
        counters[i]=Math.max(counters[i],maxcounter);
    }

    return counters;

}

//https://app.codility.com/demo/results/training88JMNQ-KJJ/
