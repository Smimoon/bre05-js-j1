let i = 0;
while(i<=100){
    if((i<=50) && (i%2===0)) {
        console.log(i);
        console.log("pair");
        i=i+1;
    }
    else {
        i=i+1;
    }
    if (i>=51) {
        console.log(i);
        if(i%2===0) {
            console.log("pair");
            i=i+2;
        }
        else{
            console.log("impair");
            i=i+2;
        }
    }
}