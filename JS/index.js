const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, //Ela vai ser "true" na 465 e "false" nas outras portas.
    auth: {
        user: 'Seu e-mail', //Colocar o email do remetente.
        pass: '', //Usar uma senha de app
    } 
})

transport.sendMail({
    from: 'Seu nome <Seu e-mail>', //Colocar o email do remetente junto do nome para não cair na caixa de spam.
    to: 'Para o e-mail que você quer enviar', //Emails que você queira enviar. OBS: pode ser mais de um.
    subject: 'enviando email',
    html: '<header><h1>Olá, Dev 🚀</h1></header> <main><img src="https://c4.wallpaperflare.com/wallpaper/660/584/918/anime-demon-slayer-kimetsu-no-yaiba-kimetsu-no-yaiba-tanjirou-kamado-hd-wallpaper-preview.jpg"></main> <footer><small>Fonte: Wallpaper Flare </small></footer>',
    text: 'Olá, Confira agora'
})
.then(() => console.log('Email enviado com sucesso! 🚀'))
.catch((err) => console.log('Erro ao enviar', err)) // Nessa função devemos especificar de quem é o e-mail que vamos enviar e identificar quem está enviando o e-mail, e o ele aceita um corpo HTML5.
//=====================================================================================================================================================
