function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByTagName('radsex')
        var idade = ano - Number(fano.value)
        var genero_masculino = document.getElementById('mas')
        var genero_feminino = document.getElementById('fem')
        var img = document.createElement('img') // criar a tag img pelo java script        
        img.setAttribute('id', 'foto') // atribui a tag img um id e nesse caso foi 'foto'
        if (genero_masculino.checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10){
                //crianca
                img.setAttribute('src', 'imagens/foto-bebe-menino.png') // pesquisar depois o pq não funcionou o endereço (../)
            } else if (idade > 10 && idade <24){
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-menino.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/foto-homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idoso.png')
            }
        } else if (genero_feminino.checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                //crianca
                img.setAttribute('src', 'imagens/foto-bebe-menina.png')
            } else if (idade > 10 && idade <24){
                //jovem
                img.setAttribute('src', 'imagens/foto-jovem-menina.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'imagens/foto-mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/foto-idosa.png')
            }
        }
        img.style.width = '250px'
        img.style.marginTop = '20px'
        img.style.border = '1px solid black'
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // significa adicionar um elemento, acho que deve antes adicionar uma img.setAttribute() linha 14
        
    }
    
} 