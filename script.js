const initial = () => {
    document.getElementById("alert_1").innerHTML =`
    <span class="row justify-content-md-center">Are you boring?</span>
    <div class="row justify-content-md-center">
        <button class="btn btn-outline-dark col-2" onclick={funcYes()}>Yes</button>
        <button class="btn btn-outline-dark col-2" onclick={funcNo()}>No</button>
    </div>`
}




const funcYes = () => {
    document.getElementById("alert_1").innerHTML =`
    <span id="quest_1" class="row justify-content-md-center">You want something to do?</span>
    <div class="row justify-content-md-center">
      <button class="btn btn-outline-dark col-2" onclick={funcYes2()}>Yes</button>
      <button class="btn btn-outline-dark col-2" onclick = {funcNo2()}>No</button>
    </div>`;
}

const funcYes2 = () => {
    document.getElementById("alert_1").innerHTML =`
      <span id="quest_1" class="row justify-content-md-center">i have 3 options for u:</span>
      <div class="row justify-content-md-center">
        <button onclick="location.href = 'https://www.instagram.com';" class="btn btn-outline-dark col-2"}>Instagram</button>
        <button onclick="location.href = 'https://www.youtube.com'" class="btn btn-outline-dark col-2">Youtube</button>
        <button class="btn btn-outline-dark col-2" onclick="funcYes3()">Random Activities</button>
      <div>`;
}

const funcYes3 = async () => {
    fetch("http://www.boredapi.com/api/activity/"
    )
    .then(response => response.json())
    .then(data => {
        document.getElementById("alert_1").innerHTML =`
        <div class="row justify-content-md-center d-flex flex-column" >
          <span> This is the random activity: ${data.activity}</span>
          <span> The tipe of this activity is: ${data.type}</span>
          <span> Participants: ${data.participants}</span>
          <span> Price: ${data.price}</span>
          <span> If you want search this activy another time you have this key: ${data.key}</span>
        </div>`; 
        console.log(data)
    });
}

const funcNo = () => {
    document.getElementById("alert_1").innerHTML =`
    <div class="row justify-content-md-center">
        <span class="row justify-content-md-center"s>That is no my problem so, press yes</span>
        <button class="btn btn-outline-dark col-2" onclick={funcYes()}>Yes</button>
    <div>`;
}

const funcNo2 = () => {
    document.getElementById("alert_1").innerHTML =`
    <div class="row justify-content-md-center">
        <span class="row justify-content-md-center"s>Again you're pressing no? so again, press yes</span>
        <button class="btn btn-outline-dark col-2" onclick={funcYes2()}>Yes</button>
    <div>`;
}

const searchKey = () => {
    fetch(`http://www.boredapi.com/api/activity?key=${document.getElementById("key_search").value}`
    )
    .then(response => response.json())
    .then(data => {
        if (data.error != "No activity found with the specified parameters" ){
            document.getElementById("alert_1").innerHTML =`
            <div class="row justify-content-md-center d-flex flex-column" >
              <span> This is the random activity: ${data.activity}</span>
              <span> The tipe of this activity is: ${data.type}</span>
              <span> Participants: ${data.participants}</span>
              <span> Price: ${data.price}</span>
              <span> If you want search this activy another time you have this key: ${data.key}</span>
            </div>`; 
        }else{
            document.getElementById("alert_1").innerHTML =`
            <div class="row justify-content-md-center" >
                <span>This key no have any activity, please put a correct key </span>
            </div>`; 
        }
    });
}