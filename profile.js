const profile=document.getElementById("profile");

let user=JSON.parse(localStorage.getItem("user"));

profile.innerHTML=`
            <h1>${user.ism}</h1>
            <h2>Coin ${user.coin}</h2>
            <h3>guruh |${user.guruh} </h3>

`