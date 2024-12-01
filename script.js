const animationContainer = document.querySelector("#animationContainer");

for(let i = 0; i < 100; i++){
    let snowflakeDiv = document.createElement("div");
    snowflakeDiv.classList.add("snowflake");
    snowflakeDiv.style.animationDuration = Math.floor(Math.random() * 10) + 5 + "s";
    snowflakeDiv.style.animationDelay = Math.floor(Math.random() * 5) + "s";
    snowflakeDiv.style.left = Math.floor(Math.random() * 100) + "%";
    animationContainer.appendChild(snowflakeDiv);
}