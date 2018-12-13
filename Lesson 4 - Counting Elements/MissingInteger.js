function solution(A){
    var count={};

    for(var i=0;i<A.length;i++){
        if (1<=A[i] && A[i]<=A.length+1)
            count[A[i]-1]=1;
    }

    for(var i=0;i<A.length+1;i++){
        if(isNaN(count[i]))
            return i+1;
    }

    return 1;
}

//https://app.codility.com/demo/results/trainingYHZ6CT-N43/
