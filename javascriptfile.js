


const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
const targetdate = new Date('12/15/2023')


//'DEC 15 - 24 : 60 : 00 '

let x = setInterval(count,1000)


function count() {

 
    const now = new Date()
    const distances = targetdate - now
    

    const days = Math.floor(distances / day);
    const hours = Math.floor((distances % day) / hour);
    const minutes = Math.floor((distances % hour) / minute)
    const seconds = Math.floor((distances % minute) / second)


   
    
    document.getElementById('demo').innerHTML= days +'days' + ':' + ' ' + hours +'h' + ' '+':' + minutes +'m' + ' '+':' + seconds +'s'  

   if (distances<=0) {
       clearInterval(x);
        document.getElementById('demo').innerHTML = 'EXPIRED';
}

}
