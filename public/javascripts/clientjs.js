///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// FUNC TO SIGNUP   ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

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


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// FUNC TO SIGNIN   ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////


$("#btn-signIn").click(function () {
    console.log(1000);
    let user = {
        'userName': $('#signin-username').val(),
        'password': $('#signin-password').val()
    }
    console.log(1001);
    console.log(user);

    $.ajax({
        type: "POST",
        url: "/api/signIn",
        data: user,
        dataType: 'json',
        success: function (res) {
        console.log(res);
        }
    });
})

