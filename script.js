const funcYes = () => {
    document.getElementById("alert_1").innerHTML =`
    <span id="quest_1" class="row justify-content-md-center">You want something to do?</span>
    <div class="row justify-content-md-center">
      <button class="btn btn-primary col-2" onclick={funcYes2()}>Yes</button>
      <button class="btn btn-danger col-2" onclick = "window.close ()">No</button>
    </div>`;
}

const funcYes2 = () => {
    document.getElementById("alert_1").innerHTML =`
      <span id="quest_1" class="row justify-content-md-center">i have 3 options for u:</span>
      <div class="row justify-content-md-center">
        <button onclick="location.href = 'https://www.instagram.com';" class="btn btn-outline-primary col-2"}>Instagram</button>
        <button onclick="location.href = 'https://www.youtube.com'" class="btn btn-outline-primary col-2">Youtube</button>
        <button class="btn btn-outline-primary col-2" onclick="funcYes3()">Random Activities</button>
      <div>`;
}

const funcYes3 = async () => {
    fetch("http://www.boredapi.com/api/activity/"
    )
    .then(response => response.json())
    .then(data => {
        document.getElementById("alert_1").innerHTML =`
        <div>
          <span> i have one random activity for you: ${data.activity}</span>
          <span> 
        </div>`; 
        console.log(data)
    });
}

const funcNo = () => {
    
}