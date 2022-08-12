



function submitIndex(){
  var professional = document.querySelector(".professional").value;
  var text = professional;
  var data2Blob = new Blob([text], {type: "text/plain"} );
  var blob2URL = window.URL.createObjectURL(data2Blob);
  const fName = "professional.txt"

  var anchorTag = document.createElement("a");

      anchorTag.href = blob2URL;

      anchorTag.download = fName;

      anchorTag.click();
}

function submitBio(){
  var bio = document.querySelector(".bio").value;
  var text = bio;
  var data2Blob = new Blob([text], {type: "text/plain"} );
  var blob2URL = window.URL.createObjectURL(data2Blob);
  const fName = "bio.txt"
  var anchorTag = document.createElement("a");

      anchorTag.href = blob2URL;

      anchorTag.download = fName;

      anchorTag.click();

}

function submitResume(){

  var education = document.querySelector(".education").value;
  var skills = document.querySelector(".skills").value;
  var awards = document.querySelector(".award").value;
  var work = document.querySelector(".work").value;
  var referees = document.querySelector(".referees").value;
  var data2BlobEdu = new Blob([education], {type: "text/plain"});
  var data2BlobSkills = new Blob([skills], {type: "text/plain"});
  var data2BlobAwards = new Blob([awards], {type: "text/plain"});
  var data2BlobWork = new Blob([work], {type: "text/plain"});
  var data2BlobRef = new Blob([referees], {type: "text/plain"});
  var blob2URLEdu = window.URL.createObjectURL(data2BlobEdu);
  var blob2URLSkills = window.URL.createObjectURL(data2BlobSkills);
  var blob2URLAwards = window.URL.createObjectURL(data2BlobAwards);
  var blob2URLWork = window.URL.createObjectURL(data2BlobWork);
  var blob2URLRef = window.URL.createObjectURL(data2BlobRef);
  const fNameEdu = "education.txt";
  const fNameSkills = "skills.txt";
  const fNameAwards = "awards.txt";
  const fNameWork = "work.txt";
  const fNameRef = "referees.txt";



  var anchorTagEdu = document.createElement("a");
   anchorTagEdu.href = blob2URLEdu;
   anchorTagEdu.download = fNameEdu;
   anchorTagEdu.click();
   var anchorTagSkills = document.createElement("a");
    anchorTagSkills.href = blob2URLSkills;
    anchorTagSkills.download = fNameSkills;
    anchorTagSkills.click();
    var anchorTagAwards = document.createElement("a");
     anchorTagAwards.href = blob2URLAwards;
     anchorTagAwards.download = fNameAwards;
     anchorTagAwards.click();
     var anchorTagWork = document.createElement("a");
      anchorTagWork.href = blob2URLWork;
      anchorTagWork.download = fNameWork;
      anchorTagWork.click();
      var anchorTagRef = document.createElement("a");
       anchorTagRef.href = blob2URLRef;
       anchorTagRef.download = fNameRef;
       anchorTagRef.click();


}

function submitProjects(){
  var projects = document.querySelector(".projects").value;
  var data2Blob = new Blob([projects], {type: "text/plain"});
  var blob2URL = window.URL.createObjectURL(data2Blob);
  const fName = "projects.txt";

  var anchorTag = document.createElement("a");
   anchorTag.href = blob2URL;
   anchorTag.download = fName;
   anchorTag.click();
}


function readMessages(){
//  document.querySelector(".fileClass").click();
  var uploadFile = document.querySelector(".fileClass").files[0];




      var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {

        var elemHdl = document.querySelector(".display");

        elemHdl.value = fileLoadedEvent.target.result;


      };

  fileReader.readAsText(uploadFile, "UTF-8");


}

function submitSocial(){
  var social1 = document.querySelector(".link1").value;
  var social2 = document.querySelector(".link2").value;
  var social3 = document.querySelector(".link3").value;
  //var text = social1 + "\n" + social2 + "\n" + social3;

  var data2Blob1 = new Blob([social1], {type: "text/plain"});
  var data2Blob2 = new Blob([social2], {type: "text/plain"});
  var data2Blob3 = new Blob([social3], {type: "text/plain"});

  var blob2URL1 = window.URL.createObjectURL(data2Blob1);
  var blob2URL2 = window.URL.createObjectURL(data2Blob2);
  var blob2URL3 = window.URL.createObjectURL(data2Blob3);

  const fName1 = "social1.txt";
  const fName2 = "social2.txt";
  const fName3 = "social3.txt";

  var anchorTag1 = document.createElement("a");
   anchorTag1.href = blob2URL1;
   anchorTag1.download = fName1;
   anchorTag1.click();

  var anchorTag2 = document.createElement("a");
    anchorTag2.href = blob2URL2;
    anchorTag2.download = fName2;
    anchorTag2.click();

 var anchorTag3 = document.createElement("a");
     anchorTag3.href = blob2URL3;
     anchorTag3.download = fName3;
     anchorTag3.click();

}

function processLogout(){
  sessionStorage.clear();
}
