checkSpeed(10);

function checkSpeed(speed) {
     const speedlimit = 70;
     const kmPerPoint = 5;

     if (speed < speedlimit + kmPerPoint)
        console.log('ok');

    else{
        const points = Math.floor(speed - speedlimit / kmPerPoint);
        if (points >= 12)
            console.log('License suspended');
        
        else
            console.log('points');
        

    }



}