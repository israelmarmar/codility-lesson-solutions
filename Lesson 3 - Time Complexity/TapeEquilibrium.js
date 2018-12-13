function solution(A){
    var p1=0,p2=0;
    var sum=0, sub=0, minval=Number.MAX_VALUE;

    for(var i=1;i<A.length;i++)
        sum=sum+A[i];

    for(var p=1;p<A.length;p++){
        p1 = p1+A[p-1];
        p2 = sum - sub;

        if(Math.abs(p1-p2)<minval)
            minval=Math.abs(p1-p2);

        sub = A[p];
        sum = p2;
    }

    return minval;
}

//https://app.codility.com/demo/results/training9ZD7QK-3X7/
