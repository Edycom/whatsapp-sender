const telephone=document.querySelector('#phone');
const message=document.querySelector('#msg');
const send=document.querySelector('#send');

telephone.addEventListener('input', function(){
    send.href="https://api.whatsapp.com/send/?phone=62" + telephone.value + "&text=" + message.value;
});

message.addEventListener('input', function(){
	send.href="https://api.whatsapp.com/send/?phone=62" + telephone.value + "&text=" + message.value;
});