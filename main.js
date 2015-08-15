var application = function () {
    var body = $("body");

    createActivityForm(body);
    displayActivitiesTable();

    getActivities().then(function () {
        $("button.edit").click(function(event) {
            createEditActivityForm($("body"), $($(event.currentTarget).parent().parent().find('td')[1]).text());
        });
    });

    $("a.submitNote").click(function() {
        var activity = $(".activity").val();
        var timeSpent = $(".timeSpent").val();

        var requestData = JSON.stringify({ activity: { description: activity, timeSpent: timeSpent }});

        var requestParams = {
            url: 'http://127.0.0.1:8000/activities',
            method: "POST",
            data: requestData,
            success: function (response) {
                clearActivityFields(body);
                appendActivity(response.activity);
                alert("Activity has been logged!");
            },
            fail: function (response) {
                console.log(response);
                alert("Bad request!");
            }
        };

        $.ajax(requestParams);
    });
};

$(document).ready(application);

var createActivityForm = function (body) {
    body.find('.forms').append(
        '<h1>CREATE</h1>' +
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
        '</form>' +
        '<hr />'
    );
};

var createEditActivityForm = function (body, timeSpent) {
    body.find('.forms').append(
        '<h1>UPDATE ' + timeSpent  + '</h1>' +
        '<form>' +
        '<div class="form-group">' +
        '<label>Enter activity:</label>' +
        '<textarea class="activity form-control"></textarea>' +
        '</div>' +
        '<div class="form-group">' +
        '<label>Time spent:</label>' +
        '<input class="timeSpent form-control" type="text">' +
        '</div>' +
        '<a href="#" class="submitEditNote btn btn-default">Submit edit</a>' +
        '</form>' +
        '<hr />'
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
};

var appendActivity = function (activity) {
    $("body > table > tbody").append(
        "<tr>" +
            "<td>" + activity.description + "</td>" +
            "<td>" + activity.timeSpent + "</td>" +
            "<td><button class='edit btn btn-primary'>Edit</button></td>" +
        "</tr>"
    );
};

var getActivities = function () {
    return $.ajax({
        url: 'http://127.0.0.1:8000/activities',
        success: function (response) {
            response.activities.forEach(function (activity) {
                appendActivity(activity);
            });


        },
        fail: function (response) {
            console.log(response);
            alert("Bad request!");
        }
    });
};

