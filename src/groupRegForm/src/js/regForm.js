// storing inputs 
let rawFullName = $('#nameInput');
let rawLogin = $('#loginInput');
let rawCourse = $('#courseTitle');


//clears the name, login, and course title input fields
function clearinputFields() {
    rawFullName.val('');
    rawLogin.val('');
    rawCourse.val('');
}

//remove student form the table
function removeStudentFromTable() {
    $('.rmStudent').click(function () {
        console.log('deleted');
        $(this).parent().parent().remove();
    });
}

//later check if table if empty then run this
var emptyRow = "<tr><td> colspan='5' class='text-align-center'> No Records Available</td></tr>";
//bootstrap table
$(document).ready(function () {
    $('#addStudent').click(function () {
        let fullName = rawFullName.val().trim();
        let login = rawLogin.val().trim();
        let course = rawCourse.val().trim();
    
        //check if input is not empty
        if(!((rawFullName.val().trim() == '') || (rawLogin.val().trim() == '') || (rawCourse.val().trim() == ''))) {
            
            if ($('#regTable tbody').children().children().length < 0) {
                $('#regTable').hide();
            }else{
                $('#regTable').show();
            }
            //table number incrementer
            var tNum = $("#regTable tbody").children().length + 1;

            //adding to table
            var addedStudentsTable = "<tr><td name='fullName'>" + fullName + "</td><td>" + login + 
                                      "</td><td>" + course + "</td><td>" + 
                                      "<button class='btn btn-danger rmStudent' type='button' id='rmStudent'><i class='fa-solid fa-trash-can' id='rmStudentIcon'></i></button>" + "</td></tr>";
            $("#regTable tbody").append(addedStudentsTable);

            //hiding empty input warning 
            $('#emptyInputWarning').hide();
            console.log(fullName.length);
            //remove student from row
            removeStudentFromTable();

        }else  {
             $('#emptyInputWarning').show();
        } 
        clearinputFields();
    });
});

// if checkbox for special resources is checked then show input if not hide
$('#specialResourcesCheck').click(function() {
    let isChecked = $('#specialResourcesCheck').is(':checked');
    if(isChecked) {
        $('#specialResInput').show();
    }else{
        $('#specialResInput').hide();
    }

    
});

// if checkbox for ethics review is checked then show input if not hide
$('#ethicsReviewCheck').click(function() {
    let isChecked = $('#ethicsReviewCheck').is(':checked');
    if(isChecked) {
        $('#ethicsReviewInput').show();
        $('#checkList').show();
    }else{
        $('#ethicsReviewInput').hide();
        $('#checkList').hide();
    }

});

// //getting table data
// $('#ethicsReviewCheck').click(function () {
//     if($("#regTable tbody").children().length >=1) {
//     console.log("clicked");
//     console.log($("#regTable tbody").children().length);
//     let table = $('#regTable tbody').tableToJSON();
//   alert(JSON.stringify(table));
//   console.log(table);
//     }else{
//         console.log('HERE')
//     }
// });
var row = {};
$('#ethicsReviewCheck').click(function () {
var table = $("table"),
    rows = [],
    header = [];

table.find("thead th").each(function () {
    header.push($(this).html());
});

table.find("tbody tr").each(function () {
    

    $(this).find("td").each(function (i) {
        var key = header[i],
            value = $(this).html();

        row[key] = value;
    });

    rows.push(row);
    
    console.log(row);
})
});

