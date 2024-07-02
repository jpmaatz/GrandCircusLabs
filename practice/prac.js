pigLatinWords = (word) => {
    const vowels = "aeiou"
    let index = 0
    if (vowels.includes(word[0])){
        return word + "way"
    }

    for (i = 0; i < word.length; i++){
        if(vowels.includes(word[i])){
            index = i
            break
        }
    }

    console.log(index)

    let firstPart = word.slice(0, index) + "ay"
    let secondPart = word.slice(index)

    return secondPart + firstPart
}

console.log(pigLatinWords("orange"))