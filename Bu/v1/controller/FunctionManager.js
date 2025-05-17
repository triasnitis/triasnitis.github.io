/**
 * for handle contac send email
 * get field with class 
 */
function handleEmail() {
    const senderName = document.querySelector('.txt-name').value,
          senderEmail = document.querySelector('.txt-email').value,
          senderMsg = document.querySelector('.txt-message').value,
          receiverEmail = 'trias.nitis@gmail.com'
    ;

    console.log("senderName : " + senderName);
    console.log("senderEmail : " + senderEmail);
    console.log("senderMsg : " + senderMsg);
    console.log("receiverEmail : " + receiverEmail);

    if(senderName == "" || senderEmail == "" || senderMsg == "") {
        msgError = "Silakan isi kolom yang tersedia !";

        document.getElementsByClassName('success-contact')[0].innerHTML = msgError;
        return;
    }

    Email.send({
        SecureToken : '78185054-02aa-4789-9abd-b74f5ddadf97',
        To : receiverEmail,
        From : receiverEmail,
        Subject : "TRI Support Contact",
        Body : senderMsg
    }).then(
      message => alert(message)
    );
    return;

}