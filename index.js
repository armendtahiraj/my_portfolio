var time = new Date().getHours();
let welcomeMessage = '';
if (time >= 0 && time< 12) {
    welcomeMessage = 'Good Morning'
} else if (time >= 12 && time< 19) {
    welcomeMessage = 'Good Afternoon'
} else{
welcomeMessage = 'Good Evening'
}

document.getElementById('welcomeMessage').innerText = welcomeMessage;

var year = new Date().getFullYear();
document.getElementById('year').innerText = year
