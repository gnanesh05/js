function showTheHours() {
          
          var today = new Date()
          var hours = parseInt(today.getHours());
            if ( (hours > 0 && hours < 13)) {
                hours= hours;
            }
            if (hours == 0) {
                hours =  12;
            }
            else
               hours = hours - 12;
      
        var hours = parseInt(today.getHours());
        var minutes = parseInt(today.getMinutes())+45;
        if(minutes>60)
        {
           hours+1;
           minutes -= 60; 
        }
         var seconds = parseInt(today.getSeconds())+45;
         if(seconds>60)
         {
           minutes+1;
           seconds -= 60;
         }
     var time = hours + ":" + minutes + ":" + seconds;
     console.log(time);
        }
showTheHours()
