
function solution(A){
    var n = A.length;
    var sum=0;

    for(var i=0;i<n;i++)
        sum=sum+A[i];

    return (n+1)*(n+2)/2-sum;

}

//https://app.codility.com/demo/results/training223GTE-AGQ/
