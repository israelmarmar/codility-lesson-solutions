function solution(A){
    var nmax=0,count=[];

    for(var i=0;i<A.length;i++){
        if(nmax<A[i])
            nmax=A[i];
    }

    for(i=0;i<A.length;i++){
        if(!isNaN(count[A[i]-1]))
            (count[A[i]-1])++;
        else
            count[A[i]-1]=1;
    }

    console.log(count)

    for(i=0;i<nmax;i++){
        if(isNaN(count[i]) || count[i]>1)
            return 0;
    }

    return 1;

}
//https://app.codility.com/demo/results/trainingHY7Z6J-WZM/
