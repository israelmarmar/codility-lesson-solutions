function solution(X,A){
    var count=[];
    var leafcov=0;

    for(var i=0;i<A.length;i++){
        
        if(isNaN(count[A[i]-1]))
        {
            count[A[i]-1]=1;
            leafcov++;
        }

        if(leafcov==X){
            return i;
        }
    }

    return -1;

}

//https://app.codility.com/demo/results/trainingFZZS7B-SEE/
