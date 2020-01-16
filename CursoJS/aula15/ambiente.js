/* let num = [ 5, 8, 2, 9, 3]
num [4] = 6
num.push(7)
num.length /* isso é um elemento
num.sort() /*isso é um método
console.log(`A organização dos números é ${num.sort()}`)

*/ 

let amor = ['love', 'amour', 'amore']
console.log(`Amor in English is "${amor[0]}", in French is "${amor[1]}", and in Italian is "${amor[2]}".`)
console.log(amor.length)
console.log(amor[0])
amor.push('amorzinho')
console.log(amor)

for (let pos in amor ) {
    console.log(`Quero escrever mais ${amor[pos]}`)
}