function readMessagesProf(){
//  document.querySelector(".fileClass").click();
  var uploadFile = document.querySelector(".fileClass").files[0];
      var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {

        var elemHdl = document.querySelector(".prof");

        elemHdl.innerHTML = fileLoadedEvent.target.result;
      };
  fileReader.readAsText(uploadFile, "UTF-8");
}

function readMessagesBio(){
//  document.querySelector(".fileClass").click();
  var uploadFile = document.querySelector(".fileBio").files[0];
      var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {

        var elemHdl = document.querySelector(".info");

        elemHdl.innerHTML = fileLoadedEvent.target.result;
      };
  fileReader.readAsText(uploadFile, "UTF-8");
}

function readMessagesEducation(){
  var uploadFile = document.querySelector(".fileEdu").files[0];
      var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {

        var elemHdl = document.querySelector(".education");

        elemHdl.innerHTML = fileLoadedEvent.target.result;
      };
  fileReader.readAsText(uploadFile, "UTF-8");
}

function readMessagesTech(){
  var uploadFile = document.querySelector(".fileTech").files[0];
      var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {

        var elemHdl = document.querySelector(".tech");

        elemHdl.innerHTML = fileLoadedEvent.target.result;
      };
  fileReader.readAsText(uploadFile, "UTF-8");
}

function readMessagesAward(){
  var uploadFile = document.querySelector(".fileAward").files[0];
      var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {

        var elemHdl = document.querySelector(".award");

        elemHdl.innerHTML = fileLoadedEvent.target.result;
      };
  fileReader.readAsText(uploadFile, "UTF-8");
}

function readMessagesWork(){
  var uploadFile = document.querySelector(".fileWork").files[0];
      var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {

        var elemHdl = document.querySelector(".work");

        elemHdl.innerHTML = fileLoadedEvent.target.result;
      };
  fileReader.readAsText(uploadFile, "UTF-8");
}

function readMessagesRef(){
  var uploadFile = document.querySelector(".fileRef").files[0];
      var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {

        var elemHdl = document.querySelector(".ref");

        elemHdl.innerHTML = fileLoadedEvent.target.result;
      };
  fileReader.readAsText(uploadFile, "UTF-8");
}

function readMessagesProject(){
  var uploadFile = document.querySelector(".fileProject").files[0];
      var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {

        var elemHdl = document.querySelector(".project");

        elemHdl.innerHTML = fileLoadedEvent.target.result;
      };
  fileReader.readAsText(uploadFile, "UTF-8");
}

function submitContactMsg(){
  var name = document.querySelector('[name="MyName"]').value;
  var email = document.querySelector('[name="MyEmail"]').value;
  var phone = document.querySelector('[name="MyTel"]').value;
  var message = document.querySelector('[name="MyMessages"]').value;
  var text = name + "\n" + email + "\n" + phone + "\n" + message;
  var data2Blob = new Blob([text], {type: "text/plain"} );
  var blob2URL = window.URL.createObjectURL(data2Blob);
  const fName = "contact.txt"
  var anchorTag = document.createElement("a");

      anchorTag.href = blob2URL;

      anchorTag.download = fName;

      anchorTag.click();

}


function readMessagesSocial1(){

  var uploadFile = document.querySelector(".fileSocial").files[0];
      var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {

        var elemHdl = document.querySelector(".Facebook");

        elemHdl.href = fileLoadedEvent.target.result;
      };
  fileReader.readAsText(uploadFile, "UTF-8");
}

function readMessagesSocial2(){

  var uploadFile = document.querySelector(".fileSocial2").files[0];
      var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {

        var elemHdl = document.querySelector(".Instagram");

        elemHdl.href = fileLoadedEvent.target.result;
      };
  fileReader.readAsText(uploadFile, "UTF-8");
}

function readMessagesSocial3(){

  var uploadFile = document.querySelector(".fileSocial3").files[0];
      var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {

        var elemHdl = document.querySelector(".Twitter");

        elemHdl.href = fileLoadedEvent.target.result;
      };
  fileReader.readAsText(uploadFile, "UTF-8");
}

sessionStorage.setItem('username', 'cedric');
sessionStorage.setItem('password', 'paradis');
sessionStorage.setItem('user-agent', navigator.userAgent);


function processLogin(){
  var name = document.querySelector('[name="MyUserName"]').value;
  var password = document.querySelector('[name="MyPassword"]').value;

  if (name == sessionStorage.getItem("username") && (password == sessionStorage.getItem("password"))){
  //  alert("works");
    var today = new Date();
    sessionStorage.setItem('date', today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
    var time = sessionStorage.getItem("date");
    document.querySelector(".wrong").setAttribute("style", "color:green;");
    document.querySelector(".wrong").innerHTML = "Login Successful" + "| Time of Login: " + time;
    var u = "User-agent header sent by the browser : " + sessionStorage.getItem("user-agent");
    document.querySelector(".ua").innerHTML = u;
    document.querySelector(".form").setAttribute("action", "file:///C:/Users/Cedric%20Paradis/Documents/Web%20Development/admin_Paradis_40158491/logout.html");
    document.querySelector(".form").setAttribute("target", "_blank");
      return true;
  }
  else{
    document.querySelector(".wrong").innerHTML = "You have input wrong information";
    return false;
  }
}
