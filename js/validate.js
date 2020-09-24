/**
 * Decsription: Function for checking the first name is valid or not.
 *              It should contain only aplhabets.
 *  
 */
$('#firstName').on({
    blur: function () {
        var letters = /^[A-Za-z]+$/;
        var text = $('#firstName').val();
        console.log(text)
        if (text.match(letters)) {
            $('#firstName').css('border','2px solid green');
            $('#fname_error').css('visibility','hidden');
        }
        else {
            $('#firstName').css('border','2px solid red');
            $('#fname_error').css('visibility','visible');
        }
    }
});
/**
 * Decsription: Function for checking the last name is valid or not.
 *              It should contain only aplhabets.
 *  
 */
$('#lastName').on({
    blur: function () {
        var letters = /^[A-Za-z]+$/;
        var text = $('#lastName').val();
        console.log(text)
        if (text.match(letters)) {
            $('#lastName').css('border','2px solid green');
            $('#lname_error').css('visibility','hidden');
        }
        else {
            $('#lastName').css('border','2px solid red');
            $('#lname_error').css('visibility','visible');
        }
    }
});
/**
 * Decsription: Function is to check weather the phone number entered is numeric 
 *              and of 10 digits.
 *  
 */
$('#phoneNo').on({
    blur: function () {
        var phoneNo = /^\d{10}$/;
        var text = $('#phoneNo').val();
        console.log(text)
        if (text.match(phoneNo)) {
            if(text.charAt(0)==9 || text.charAt(0)==8 || text.charAt(0)==7){
                $('#phoneNo').css('border','2px solid green');
                $('#phone_error').css('visibility','hidden');
            }
            else{
                $('#phoneNo').css('border','2px solid red');
                $('#phone_error').css('visibility','visible');
                $('#phone_error').text('Invalid Phone No.');
            }
           
        }
        else {
            $('#phoneNo').css('border','2px solid red');
            $('#phone_error').css('visibility','visible');
            $('#phone_error').text('Phone No. in digits');
        }
    }
});
/**
 * Decsription: Function for checking the office number should be in numeric only.
 *  
 */
$('#officeNo').on({
    blur: function (){
        var numbers = /^[0-9]+$/;
        var text = $('#officeNo').val();
        if(text.match(numbers)){
            $('#officeNo').css('border','2px solid green');
            $('#office_error').css('visibility','hidden');
        }
        else{
            $('#officeNo').css('border','2px solid red');
            $('#office_error').css('visibility','visible');
        }
    }
});
/**
 * Decsription: Function for checking the email in valid format.
 *  
 */
$('#email').on({
    blur: function (){
        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var text = $('#email').val();
        if(text.match(mailformat)){
            $('#email').css('border','2px solid green');
            $('#email_error').css('visibility','hidden');
        }
        else{
            $('#email').css('border','2px solid red');
            $('#email_error').css('visibility','visible');
        }
    }
});
/**
 * Decsription: Function for checking the password with 8 to 12 characters and no special characters.
 *  
 */
$('#password').on({
    blur: function(){
        var letterNumber = /^[0-9a-zA-Z]+$/;
        var text = $('#password').val();
        if(text.match(letterNumber)){
            if(text.length >= 8 && text.length <=12){
                $('#password').css('border','2px solid green');
                $('#pwd_error').css('visibility','hidden');
            }
            else{
                $('#password').css('border','2px solid red');
                $('#pwd_error').css('visibility','visible');
            }
        }
        else{
            $('#password').css('border','2px solid red');
            $('#pwd_error').css('visibility','visible');
        }
    }
});

/**
 * Decsription: Function for checking the confirm passord should be same as password.
 *  
 */

$('#confirmPwd').on({
    blur:function(){
        var pwd = $('#password').val();
        var confirmpwd = $('#confirmPwd').val();
        if(pwd == confirmpwd){
            $('#confirmPwd').css('border','2px solid green');
            $('#confirm_error').css('visibility','hidden');
        }
        else{
            $('#confirmPwd').css('border','2px solid red');
            $('#confirm_error').css('visibility','visible');
        }
    }
});

/**
 * Description : Function to calculate age on the basis of  date of birth entered. 
 */

$('#year').on({
    blur:function(){
        var DD = $('#day').val();
        var month = $('#month').val();
        var YY = $('#year').val();
        var MM =0;
        var MM =0;
        var calculated_age =0;
       
        var months = ["jan", "feb", "march","april","may","june","july","aug","sep","oct","nov","dec"];
        for (let i = 0; i < months.length; i++) {
            if( month == months[i]){
                MM = i+1;
                break;
            }
        }
        var today_date = new Date();
        var today_day = today_date.getDate();
        var today_month = today_date.getMonth()+1;
        var today_year = today_date.getFullYear();
    
        if (today_month > MM) {
            calculated_age = today_year -YY;
        }
        else if (today_month == MM){
           if(today_day >= DD){
            calculated_age = today_year - YY;
           }
           else{
            calculated_age = today_year - YY - 1;
           }
        }
        else{
            calculated_age = today_year - YY - 1;
        }    
        $('#age').val(calculated_age +'years');
    }
});

/**
 * Description: To validate the gender.
 */

$('#gender').on({
    click:function(){
        if($('#residence1').is(":checked") || $('#residence2').is(":checked")){
            $('#gender_error').css('visibility','hidden');
        }
        else{
            $('#gender_error').css('visibility','visible');
        }
    }
});
/**
 * Description: Function to validate interest.
 */
$('#interest').on({
    click:function(){
        if($('#checkbox_sample18').is(":checked") || $('#checkbox_sample19').is(":checked")  
        || $('#checkbox_sample20').is(":checked") ){
            $('#interest_error').css('visibility','hidden');
        }
        else{
            $('#interest_error').css('visibility','visible');
        }
    }
});

/**
 * Description: Function to validate the about text area.
 */
$('#about').on('input blur',function(){
    var text= $('#about').val();
    if(text== ""){
        $('#about').css('border','2px solid red');
        $('#about_error').css('visibility','visible');
    }else{
        $('#about').css('border','2px solid green');
        $('#about_error').css('visibility','hidden');
    }
});

/**
 * Description: Function to validate date.
 */
$('#date').on({
    change:function(){
        if($('#day').val() == "day" || $('#month').val() == "month" || $('#year').val()== "year"){
            $('#date_error').css('visibility','visible');
        }
        else{
            $('#date_error').css('visibility','hidden');
        }
    }
});






