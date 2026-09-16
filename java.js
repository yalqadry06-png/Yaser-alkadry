$("#infobtn").click(function() {

    $.get("info.html", function(data) {

        $("#info").html(data);

        $("#modal").show();

    });

});

$("#closebtn").click(function() {

    $("#modal").hide();

});