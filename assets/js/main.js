
function getData () {

    let name = document.getElementById("name").value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let comments = document.getElementById('comments').value

    const elem = document.getElementById("alert");   
    let pos = 20;
    let id = setInterval(frame, 5);
    function frame() {
        if (pos == 53) {
        clearInterval(id);
        elem.style.opacity = 1;
        } else {
        pos++; 
        elem.style.opacity = 0.3;
        elem.style.top = pos + "px";  
        }
    }

    document.getElementById("alert").style.backgroundColor = "rgb(252, 179, 179)";
    document.getElementById("alert").style.color = "#965656";


    if( name == ""){
        document.getElementById("alert").innerHTML = "Name cannot be empty";
    }

    else if( email == ""){
        document.getElementById("alert").innerHTML = "Email cannot be empty";
    }

    else if( phone == ""){
        document.getElementById("alert").innerHTML = "Phone number cannot be empty";
    }

    else if( subject == "--Subject--"){
        document.getElementById("alert").innerHTML = "Subject cannot be empty";
    }

    else if( comments == ""){
        document.getElementById("alert").innerHTML = "Comments cannot be empty";
    }

    else {
        const defEmail = "bilqistaz27@gmail.com"
        let ebody = "Dear Ms Bilqist," + "%0D%0A" + "%0D%0A" + "My name is " + name + "." + "%0D%0A" + "%0D%0A" + comments + "%0D%0A" + "%0D%0A" + "You can contact me here: " + phone

        console.log(ebody)
        window.location.href = `mailto:${defEmail}?subject=${subject}&body=${ebody}`
        // location.reload();
        document.getElementById("alert").style.backgroundColor = "rgb(145, 228, 124)";
        document.getElementById("alert").style.color = "rgb(75, 110, 66)";
        document.getElementById("alert").innerHTML = "Email has been sent"

        let form = document.getElementById("form");
        form.reset();

    }



}
