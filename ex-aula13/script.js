

    function verificar(){
        var data= new Date();
        var ano= data.getFullYear();
        var fano= window.document.getElementById("txtano");
        var resultado= document.getElementById("res")
        if(fano.value.length==0 || fano.value > ano){
            window.alert("Verifique os dados e tente novamente.")
        }else{
            var fsex= document.getElementsByName("radsex");
            var idade= ano-Number(fano.value);
            var genero=""
            var img= document.createElement("img");
            img.setAttribute("id","foto");
            if(fsex[0].checked){
                genero= "Homem"
                if(idade>0 && idade<=12){
                    img.setAttribute("src","imagens/menino.jpg")

                }
                else if(idade<30){
                    img.setAttribute("src","imagens/homem-joven.jpg")

                }
                else if(idade<60){
                    img.setAttribute("src","imagens/homem-maduro.jpg")

                }
                else{
                    img.setAttribute("src","imagens/senhor.jpg")

                }
            }else{
                genero="Mulher"
                if(idade>0 && idade<=12){
                    img.setAttribute("src","imagens/menina.jpg")

                }
                else if(idade<30){
                    img.setAttribute("src","imagens/mulher-joven.jpg")

                }
                else if(idade<60){
                    img.setAttribute("src","imagens/mulher-madura.jpg")

                }
                else{
                    img.setAttribute("src","imagens/senhora.jpg")
                    
                }
            }
            resultado.innerHTML=`Detectamos ${genero} com ${idade} anos.`
            resultado.appendChild(img)
        }
    }
    


