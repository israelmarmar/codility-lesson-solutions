function solution(X,Y,D){
    var N=Math.floor((Y-X)/D);

    if (X+N*D>=Y)
        return N;
    else
        return N+1;
}

//https://app.codility.com/demo/results/trainingCW3AEH-C43/
