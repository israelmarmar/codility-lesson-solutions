function solution(S, P, Q){
    var n=S.length, i=0, j=0, c, sub, count=[], results=[], x, y;

    for(i=0;i<n;i++)
        count.push([0,0,0,0]);

    for(i=0;i<n;i++)
    {

     c = S[i];

     if(c == 'A') count[i][0] = 1;
     if(c == 'C') count[i][1] = 1;
     if(c == 'G') count[i][2] = 1;
     if(c == 'T') count[i][3] = 1;

    }

    for(i = 1; i < n; i++){
     for(j = 0; j < 4; j++){
       count[i][j] += count[i-1][j];
     }
   }	

    for(i = 0; i < P.length; i++){
     x = P[i];
     y = Q[i];
     
     for(j = 0; j < 4; j++){

       sub = 0;
	   
       if(x-1 >= 0) sub = count[x-1][j];

       if(count[y][j] - sub > 0){
         results.push(j+1);
         break;
       }
     }
     
   }

    return results;	
    
}

//https://app.codility.com/demo/results/trainingSFWYJD-6W8/