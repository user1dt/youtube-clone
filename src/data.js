 export const API_KEY = 'AIzaSyAZ7thvVolPc0cJ1Lq8vY9ajCV5L3GsXwY';

 export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K"
    }
    else{
        return value;
    }
 }