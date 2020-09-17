var colors = [
    'White',
    'Grey',
    'Black',
    'Lilac',
    'Teal',
    'Purple',
    'Salmon',
    'Pink',
    'Red',
    'Beige',
    'Brown',
    'Orange',
    'Yellow',
    'Khaki',
    'Lime',
    'Green',
    'Magenta',
    'Silver',
    'Gold',
]


function randomize() {
    
    var randomNumber = Math.floor(Math.random() * (colors.length));
    document.getElementById('colorDisplay').innerHTML = colors[randomNumber];
    
}