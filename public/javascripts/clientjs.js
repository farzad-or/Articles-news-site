$("#btn-signup").click(function () {

    let users = {
        'firstName': $('#signup-firstname').val(),
        'lastName': $('#signup-lastname').val(),
        'userName': $('#signup-username').val(),
        'phones': $('#signup-phones').val(),
        'email': $('#signup-email').val(),
        'password': $('#signup-password').val(),
        'gender': $('#sex').val()
    }
    // console.log($('#signup-username').val());
    // console.log(users);

    $.ajax({
        type: "POST",
        url: "/api/signUp",
        data: users,
        dataType: 'json',
        
        success: function (res) {
            if (res.message = true) {
                console.log("welcom");
            } else {
                console.log(res.message);
            }


        }
    });
})