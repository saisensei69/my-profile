let firstName="Angelo";
let lastName="Foliente";
const imgSrc="https://avatars.githubusercontent.com/saisensei69";

document.getElementById("content").innerHTML =`
<div class="profile-card">
<h1>My Profile</h1>
<p>My Name is ${firstName} ${lastName}</p>
<img src="${imgSrc}" alt="Profile picture goes here" />

`;