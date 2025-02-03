let count = 0
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('counter').textContent = count;
});

function increment(){
    count++;
    document.getElementById('counter').textContent = count;
}

function decrement(){
    if(count==0){
        alert('Counter cannot be less than 0');
        return;
    }
    count--;
    document.getElementById('counter').textContent = count;
}