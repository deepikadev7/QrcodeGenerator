let imgbox=document.getElementById('imgbox');
let qrimg=document.getElementById('qrimg');
let qrtext=document.getElementById('qrtext');
function QrGenerator()
{
    qrimg.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=+qrtext.value";
    imgbox.classList.add("show-img");
}