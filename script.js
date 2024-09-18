
const main = () => {
    let inputWord = prompt("Por favor, digite uma palavra:")
    let length = inputWord.length
    let i = 0

    
    while (i < length / 2) {
        if (inputWord[i] !== inputWord[length - 1 - i]) {
            alert(`A palavra "${inputWord}" não é um palíndromo.`)
            let reversedWord = ""
            let j = length - 1

           
            do {
                reversedWord += inputWord[j]
                j--
            } while (j >= 0)

            alert(`Lida da esquerda para direita: "${inputWord}"`)
            alert(`Lida da direita para esquerda: "${reversedWord}"`)
            return
        }
        i++
    }

    alert(`A palavra "${inputWord}" é um palíndromo.`)
}

main()
