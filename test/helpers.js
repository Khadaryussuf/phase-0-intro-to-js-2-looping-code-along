const names = ["Guadalupe", "Ollie", "Aki"];
const event = ["surprise"];

function writeCards(name , event) {
    let messages = []
    for (let i = 0; i < name.length; i++) {
        messages.push (`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return messages
}



writeCards(names,"surprise")

const countDown = function(n){
    let i = n;
    while(i >=0){
        console.log(i)
        i--
    }
}