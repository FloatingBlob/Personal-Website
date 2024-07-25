const quotes = [
    "It was good, though. Exquisite, even. No wonder humans used to eat them...",
    "From break and ruin, the most beautiful performance begins.",
    "Hesitation is defeat.",
    "May your woes be many, and your days few.",
    "W E L C O M E  T O  B L A C K  S P A C E"
];

/* Note: 
Make it so that after a refresh of the page, a random quote is placed here out of a selection.
Current solution:
- generate a number between 1 to 100 (so 100 different possible numbers)
- if the number falls in the range 1-96 split equally 4 way for the first 4 quotes
- if the nubmer falls in the range 97-100 show black space
- have each of the quotes have different fronts each from their specific game
*/