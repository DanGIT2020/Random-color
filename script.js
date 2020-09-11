var colors = [
    'White',
    'Grey',
    'Black',
    'Light-Blue',
    'Deep-Blue',
    'Purple',
    'Magenta',
    'Pink',
    'Red',
    'Beige',
    'Brown',
    'Orange',
    'Yellow',
    'Khaki',
    'Yellow-Green',
    'Green',
    'Blue-Green',
    'Silver',
    'Gold',
]


function randomize() {
    
    var randomNumber = Math.floor(Math.random() * (colors.length));
    document.getElementById('colorDisplay').innerHTML = colors[randomNumber];
    
}