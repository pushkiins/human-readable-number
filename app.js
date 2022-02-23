function toReadable(num) {
    const first = {
        0: "zero",
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }

    const second = {
        0: 'ten',
        1: 'eleven',
        2: "twelwe",
        3: "thirteen",
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
    }

    const third = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "fourty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    }

    const fourth = {
        1: "one hundred",
        2: "two hundred",
        3: "three hundred",
        4: "four hundred",
        5: "fife hundred",
        6: "six hundred",
        7: "seven hundred",
        8: "eight hundred",
        9: "nine hundred"
    }

    if (num <= 10) {
        console.log(first[num])
    }

    if (num > 10 && num < 20) {
        console.log(second[num.toString()[1]])
    }

    if (num > 20 && num < 100) {
        if (num.toString()[1] == 0) {
            console.log(third[num.toString()[1]])
        } else {
            console.log(third[num.toString()[0]] + " " + first[num.toString()[1]])
        }
    }

    if (num >= 100 && num < 1000) {
        if (num.toString()[1] == 0 && num.toString()[2] == 0) {
            console.log(fourth[num.toString()[0]]) 
        } else if (num.toString()[1] == 0 && num.toString()[2] != 0) {
            console.log(fourth[num.toString()[0]] + ' ' + first[num.toString()[2]])
        } else if (num.toString()[1] != 0 && num.toString()[2] == 0) {
            console.log(fourth[num.toString()[0]] + " " + third[num.toString()[1]] )
        } else {        
            if (+(num.toString()[1] + num.toString()[2]) <= 20) {
                console.log(fourth[num.toString()[0]] + " " + second[num.toString()[2]])
            } else {
                console.log(fourth[num.toString()[0]] + " " + third[num.toString()[1]] + ' ' + first[num.toString()[2]])
            }
        }
    }
}
toReadable(589)