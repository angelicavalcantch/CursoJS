let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)
valores.push(90, 5)


/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
// somente para array e objetos

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let pos = valores.indexOf(4)
console.log(pos)