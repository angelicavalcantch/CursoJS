function count () {
    let star = document.getElementById('nums')
    let end = document.getElementById('nume')
    let int = document.getElementById('numi')
    let res = document.getElementById('res')

    if (star.value.length == 0 || end.value.length == 0 || int.value.length == 0) {
        res.innerHTML = 'Impossível contar'
        window.alert('[Erro] Faltam dados')

    } else {
        res.innerHTML = 'Counting: <br>'
        let s = Number(star.value)
        let e = Number(end.value) 
        let i = Number(int.value)
        
        if (i <= 0) {
            window.alert('Passo inválido. Considerando Intervalo 1')
            i = 1
        }

        if (s < e) {
            for (let c = s; c <= e; c += i) {
            res.innerHTML += ` ${c} \u{1F47D}`
            }
        } else {
         for (let c = s; c >= e; c -= i) {
            res.innerHTML += ` ${c} \u{1F47D}`
            }
        } 
        res.innerHTML += `\u{1F92A}`
    }
}
