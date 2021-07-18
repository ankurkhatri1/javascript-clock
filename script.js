setInterval(() => {
     let date =new Date()
     hhour=date.getHours()
    mminute=date.getMinutes()
    ssecond=date.getSeconds()
    hrotetion=30*hhour+mminute/2
    mrotetion=6*mminute
    srotetion=6*ssecond

    hour.style.transform=`rotate(${hrotetion}deg)`
    minute.style.transform=`rotate(${mrotetion}deg)`
    second.style.transform=`rotate(${srotetion}deg)`
    
    
    
}, 1000);

