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


////////////////////////////////////////////////////////////////
//            FUNC TO GET FORM DATA AS A OBJECT              //
//////////////////////////////////////////////////////////////

function getFormData(formId) {
    let finalObject = {}
    let formDataArr = $(`#${formId}`).serializeArray();

    formDataArr.map(function (e) {

        finalObject[e['name']] = e['value'];
    })
    return finalObject;
}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// FUNC TO SIGNIN   ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////


$("#btn-signIn").click(function () {
    let user = {
        'userName': $('#signin-username').val(),
        'password': $('#signin-password').val()
    }
 
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


////////////////////////////////////////////////////////////////
//                      FUNC TO SIGNIN                       //
//////////////////////////////////////////////////////////////

$('#signinForm').submit(function (e) {
    e.preventDefault();

    $.ajax({
        type: "POST",
        url: "/api/signIn",
        data: getFormData('signinForm'),
        dataType: 'json',
        success: function (res) {
            if (res.state === 'true') {
                console.log("sasas");
                window.location = '/api/user/dashboard'
            } else {
                notification(res.message, res.state);
            }
        }
    });
})




////////////////////////////////////////////////////////////////
//               FUNC TO SAVE EDIT PROFILE INFO              //
//////////////////////////////////////////////////////////////

$('#saveEdit').click(function () {
    console.log(111);
console.log(getFormData('editInfoForm'));
    // $.ajax({
    //     type: "PUT",
    //     url: "/api/user/update",
    //     data: getFormData('editInfoForm'),
    //     dataType: "json",
    //     success: function (res) {
         
    // });
})



////////////////////////////////////////////////////////////////
//                 FUNC TO SAVE PROFILE AVATAR               //
//////////////////////////////////////////////////////////////

$('#saveAvatar').click(function () {

    if (!$('#field-file').val()) {
        // notification("یک تصویر انتخاب کنید", "alert-warning");
    } else {
        let formData = new FormData();
        let files = $('#field-file')[0].files[0];
        formData.append('avatar', files);
console.log(formData);
        $.ajax({
            url: '/api/user/uploadAvatar',
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function (res) {

                // notification(res.message, res.color);
                if (res.avatar) {
                    // $('#avatarImg img.avatar-130').attr('src', `/images/avatar/${res.avatar}`)
                    $('#avatarImage').attr('src', `/images/avatar/${res.avatar}`)
                    // avatarCancel();
                }
            }
        });
    }
});