$("#infobtn").click(function() {

    $.get("file.html", function(data) {

        $("#info").html(data);

        $("#modal").show();

    });

});

$("#closebtn").click(function() {

    $("#modal").hide();

});