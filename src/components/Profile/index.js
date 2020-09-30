import React from "react";
import "./style.css";

function Profile(){

return(

    <main className="container">
    <h2>Aaron Tobey</h2>
      <hr></hr>
      <h3>Full Stack Web Developer- Richardson, TX</h3>
      <hr/>
      <h4>About Me</h4>
      <div className="row profileText">
        <p><img className="img img-thumbnail" src="./assets/profileImage.jpg" alt="Headshot"></img>
        
          I'm originally from Austin, TX but have lived in the Dallas area for the last 10 years. I live with my wife Lauren and our two dogs, River and Buster. <br></br><br></br>
         I graduated from Texas A&amp;M in 2009 with a degree in Manufacturing &amp; Mechanical Engineering Technology and worked as an industrial engineer until 2020, the last 6 years with UPS. During that time, I grew my skills in creating applications using excel with VBA to make tasks which were previously tedious and difficult quick and easy. What started as fancy spreadsheets with simple macros evolved into complex applications with SQL backends. Many of these will continue to be used long after my time there ended. 
         In 2020, I decided it was time to take the leap and make programming the focus of my career rather than just a useful skill on the side. <br></br><br></br>
         I am looking for a job as a web developer and/or software engineer. I will be completing the SMU Full Stack Web Dev coding bootcamp in early October and will be looking to start the next phase of my career. While I may not be have ever had the job title of Software Engineer, I do bring with me almost a decade of experience in engineering working on large projects, understanding technical documentation and solving difficult problems while maintaining a professional attitude. <br></br><br></br>
        While it would be my preference to stay in the Dallas area, I would also be open to opportunities in Austin.</p>
    </div>
</main>
)
}

export default Profile;