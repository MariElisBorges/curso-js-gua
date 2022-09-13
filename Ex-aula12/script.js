function carregar(){
    var msg= window.document.getElementById("mensagen");
    var img= window.document.getElementById("imagen");
    var data= new Date();
    var hora= data.getHours();
    
    msg.innerHTML= `Agora são ${hora} horas.`

    if( hora >=0 && hora<12){
        "Bom dia!"
        img.src="imagens/bom-dia.jpg"
        document.body.style.background='#00bfff';
    }else if (hora>=12 && hora<=18){
        "Boa tarde!"
        img.src="imagens/boa-tarde.jpg" 
        document.body.style.background='#cd853f';
    }else{
        //Boa noite!
        img.src="imagens/boa-noite.jpg"
        document.body.style.background='#2f4f4f';

    }
    


}