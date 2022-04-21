input.onButtonPressed(Button.A, function () {
    Valeur = Numéros.removeAt(randint(0, Numéros.length))
    basic.showString("" + (Valeur))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (Valeur))
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
"B15",
"I16",
"I17",
"I18",
"I19",
"I20",
"I21"
]
