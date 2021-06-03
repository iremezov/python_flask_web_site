$(document).ready(function() {
    //alert("App loaded");
});

function loadDoc() {
  alert("BTN pressed");
}

function loadDoc1() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("txtHint").innerHTML = this.responseText;
            alert("ALERT: " + this.responseText);
        }
    };
    xmlhttp.open("GET", "http://localhost:5000/get_user_list" + str, true);
    xmlhttp.send();
}

function AddRole(uid){
    alert("User id = " + uid);
}


function setRoleState(user_id, state, field_name){
    //alert(user_id + " = " + state + " = " + field_name);
    $.ajax({
        method: "POST",
        url: "http://localhost:5000/set_user_state",
        dataType: 'json',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify({ "user_id":user_id, "state":state, "field_name":field_name }),
        })
        .done(function(msgBackFromServer) {
            alert("Data Sent to server" + msgBackFromServer);
        });
}

function editUser(user_id){
    alert("Modify user_id: "+user_id);
}