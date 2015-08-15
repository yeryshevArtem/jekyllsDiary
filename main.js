var application = function () {
    var body = $("body");

    takeANote(body);
    displayActivitiesTable();

    $("a.submitNote").click(function() {
        var activity = $(".activity").val();
        var timeSpent = $(".timeSpent").val();

        var requestData = JSON.stringify({ activity: { description: activity, timeSpent: timeSpent }});

        $.ajax({
            url: 'http://127.0.0.1:8000/hello',
            method: "POST",
            data: requestData,
            success: function (response) {
                console.log(response);
                clearActivityFields(body);
                appendActivity(response.activity);
                alert("Activity has been logged!");
            },
            fail: function (response) {
                console.log(response);
                alert("Bad request!");
            }
        });
    });
};

$(document).ready(application);

var takeANote = function (body) {
    console.log("Wake up, Neo!");
    body.append(
        '<form>' +
            '<div class="form-group">' +
                '<label>Enter activity:</label>' +
                '<textarea class="activity form-control"></textarea>' +
            '</div>' +
            '<div class="form-group">' +
                '<label>Time spent:</label>' +
                '<input class="timeSpent form-control" type="text">' +
            '</div>' +
            '<a href="#" class="submitNote btn btn-default">Submit</a>' +
        '</form>'
    );
};

var clearActivityFields = function (bodyTag) {
    bodyTag.find('.timeSpent').val('');
    bodyTag.find('.activity').val('');
};

var displayActivity = function (someActivity, spentTime) {
    $('table.activities tbody').append(
        "<tr>" +
            "<td>" + someActivity + "</td>" +
            "<td>" + spentTime + "</td>" +
        "</tr>"
    );
};

var displayActivitiesTable = function () {
    $("body").append(
        '<table class="table activities table-striped">' +
            '<thead>' +
                '<tr>' +
                    '<th>Activity</th>' +
                    '<th>Hours spent</th>' +
                '</tr>' +
            '</thead>' +
            '<tbody>' +
            '</tbody>' +
        '</table>'
    );

    //$.ajax({
    //    url: '127.0.0.1:8000/activities',
    //    success: function (response) {
    //        console.log(response.data);
    //    },
    //    fail: function (response) {
    //        console.log(response);
    //        alert("Bad request!");
    //    }
    //});
};

var appendActivity = function (activity) {
    $("body > table > tbody").append("<tr><td>" + activity.description + "</td><td>" + activity.timeSpent + "</td></tr>");
};