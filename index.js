
      
// Use of Typed JS Text
var typed = new Typed("#element", {
  strings: ["Web Developer.", "&amp; Scrum Master."],
  typeSpeed: 50,
});

// Downloading resume pdf
const downloadResume = document.getElementById("resumeDownload");
downloadResume.addEventListener("click", async () =>{
  try{
    const response = await fetch("Vaibhav-Resume.pdf");
    const file = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = "Vaibhav_Gole_Resume";
    link.click();
  }
  catch(error){
    console.log("Error while downloading resume");
  }
});


