$("#btn-signup").click(function() {
   
    let users = {
        'userName': $('#signup-username').val(),
        'firstName': $('#signup-firstname').val(),
        'lastName': $('#signup-lastname').val(),
        'password': $('#signup-password').val(),
        'email': $('#signup-email').val(),
        'phones': $('#signup-phones').val(),
        'gender': $('#gender-main').val()
    }
    console.log($('#signup-username').val());
    console.log(users);

    $.ajax({
        type: "POST",
        url: "/api/signUp",
        data: users,
        dataType: 'json',

        success: function (response) {

        }
    });
})