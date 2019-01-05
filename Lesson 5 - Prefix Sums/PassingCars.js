function solution(A){
    var P=[], n=A.length, i=0, count=0;

    for(i=0;i<n+1;i++)
        P.push(0);

    for(i=1;i<n+1;i++)
        P[i]=P[i-1]+A[i-1];

    for(i=0;i<n;i++)
        if(A[i]==0)
        count += P[n]-P[i+1];

    if(count>1000000000)
        return -1;

    return count;
}

//https://app.codility.com/demo/results/trainingZ4FBKM-3E9/
