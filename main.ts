input.onButtonPressed(Button.A, function () {
    Valeur = Numéros._pickRandom()
    basic.showString("" + (Valeur))
    Numéros.removeAt(Numéros.indexOf(Valeur))
})
let Valeur = ""
let Numéros: string[] = []
Numéros = [
"B1",
"B2",
"B3",
"B4",
"B5",
"B6",
"B7",
"B8",
"B9",
"B10",
"B11",
"B12",
"B13",
"B14",
"B15"
]
basic.forever(function () {
	
})
