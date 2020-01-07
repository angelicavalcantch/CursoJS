function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero= ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'boy.png')
            } else if (idade < 21) {
                // jovem 
                img.setAttribute('src', 'man.png')
            } else if (idade < 50) {
                //Adulto
                innerHeight.setAttribute('src', 'mister.png')
            } else {
                // idoso
                img.setAttribute('src', 'oldman.png')
            }       
        } else if (fsex[1].checked) {
            gênero='Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute ('src', 'girl.png')

            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'woman.png')

            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','lady.png')
            } else {
                //idoso
                img.setAttribute('src', 'oldwoman.png')
            }
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

        }
    