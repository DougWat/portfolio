function Clamp(val,min,max){
    if(val > max){
        return max;
    }else if (val < min){
        return min;
    }
    else return val;
}