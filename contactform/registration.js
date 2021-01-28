  var firebaseConfig = {
    apiKey: "AIzaSyAArDy-LMqC4gtJmJbj613QUlJw5wn7TiA",
    authDomain: "datathon-registration.firebaseapp.com",
    projectId: "datathon-registration",
    storageBucket: "datathon-registration.appspot.com",
    messagingSenderId: "735754538287",
    appId: "1:735754538287:web:7b3e8e7eebe22bbd5a25da",
    measurementId: "G-SYYBDC7779"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var key,tname,team,event1,email,course,branch,college,country,tNumber,teammembers,member1,Number1,email1,member2,Number2,email2,member3,Number3,email3,member4,Number4,email4;

  function ready()
  {
      tname=document.getElementById("name").value;
      email=document.getElementById("email").value;
      team=document.getElementById("team").value;
      event1=document.getElementById("event").value;
      course=document.getElementById("course").value;
      branch=document.getElementById("branch").value;
      college=document.getElementById("college").value;
      country=document.getElementById("country").value;
      tNumber=document.getElementById("Number").value;
      teammembers=document.getElementById("teammembers").value;
      member1=document.getElementById("member1").value;
      Number1=document.getElementById("Number1").value;
      email1=document.getElementById("email1").value;
      member2=document.getElementById("member2").value;
      Number2=document.getElementById("Number2").value;
      email2=document.getElementById("email2").value;
      member3=document.getElementById("member3").value;
      Number3=document.getElementById("Number3").value;
      email3=document.getElementById("email3").value;
      member4=document.getElementById("member4").value;
      Number4=document.getElementById("Number4").value;
      email4=document.getElementById("email4").value;
      key=team+" "+tname;

      console.log(key,tname,email,team,event1,course,branch,college,country,tNumber,teammembers,member1,Number1,email1,member2,Number2,email2,member3,Number3,email3,member4,Number4,email4);
  }

  function fetch(){
    ready();
    firebase.database().ref('team registration/'+key).set({
        teamleader: tname,
        email: email,
        teamname: team,
        event: event1,
        course: course,
        branch: branch,
        college: college,
        country: country,
        teamleadNumber: tNumber,
        teammembers: teammembers,
        member1: member1,
        number1: Number1,
        email1: email1,
        member2: member2,
        number2: Number2,
        email2: email2,
        member3: member3,
        number3: Number3,
        email3: email3,
        member4: member4,
        number4: Number4,
        email4: email4 
    });

    var x=tname+" your  team "+team+" has been registered";
    alert(x);
}