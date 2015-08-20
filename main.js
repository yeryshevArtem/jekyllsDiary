var application = function () {
    var body = $("body");




    createActivityForm(body);
    displayActivitiesTable();

    getActivities().then(function () {
         //$("button.edit").click
         //   (function(event) {
         //       $(event.modal).modal('show');
         //   });
        $("button.delete").click
            (function (event) {
                $(event.target).parent().parent().remove();
                var requestParamsDelete = {
                    url: 'http://127.0.0.1:8000/activities',
                    method: "DELETE",
                    success: function (response) {
                        alert("Activity has been deleted!");
                    },
                    fail: function (response) {
                        console.log(response);
                        alert("Bad request!");
                    }
                };
            });
    });

    var placeholderAct = $("body>table>thead>tr").find("th.activity").text();
    var placeholderTime = $("body>table>thead>tr").find("th.hoursSpent").text();

    $('input.description').attr('placeholder', placeholderAct);
    $('input.timespent').attr('placeholder', placeholderTime);

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





//ВСЕ ЭТО УЖЕ ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ. НУ ТАМ ВСЯКИЕ ТАМ ОБРАБОТЧИКИ НУ ТАМ ЗАПРОСЫ ПОСЫЛАЮТ, НУ ТАМ
//В DOM ЧТО-ТО ДОБАВЛЯЮТ



var createActivityForm = function (body) {
    // Здеся просто показываем модальное окно которое уже есть у нас в  DOM'е
};

var createEditActivityForm = function (body, timeSpent) {
    // Здеся просто показываем модальное окно которое уже есть у нас в  DOM'е
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
                    '<th class="activity">Activity</th>' +
                    '<th class="hoursSpent">Hours spent</th>' +
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
            "<td><button class='edit btn btn-primary' data-toggle='modal' data-target='#myModal'>Edit</button></td>" +
            "<td><button class='delete btn btn-default'>Delete</button></td>" +
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

