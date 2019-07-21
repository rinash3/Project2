$(document).ready(function () {
    console.log("ready.......");

    $("#save").on("click", function (event) {
        event.preventDefault();
        var updatedInto = {
            id:$("#idnum").attr("value"),
            description: $("#description").val(),
            past_travel: $("#past_travel").val(),
            person: $("#person").val(),
            name: $("#name").val(),
            prefered_trip: $("#prefered_trip").val(),
            intrests: $("#intrests").val(),
            dest1: $("#dest1").val(),
            dest2:$("#dest2").val(),
            dest3:$("#dest3").val(),
            country:$("#country").val(),
            language:$("#language").val(),
            must_see: $("#must_see").val(),
            password:$("#password").val()
        };

        update(updatedInto);

    })
    function update(updatedInto) {
        $.ajax({
            method: "PUT",
            url: "/api/buddies",
            data: updatedInto
        }).then(function(result){
            alert("update success");
        });
    }

    $("#logout").on("click",function(){
        window.location.href = "/";
    })
    $("#newDisplay").on("click",function(){
        var myID =window.location.href.split('/')[window.location.href.split('/').length-1];
        window.location.href = "/display"+ myID;
    })
});