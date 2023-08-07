let color = undefined

/**
 * Listener
 */

$(document).ready(function() {
    $('#btn').on('click', function() {
        onClickMeClicked();
    });
});

/**
 * Controller
 * Actions taken after 'Click Me' button clicked
 */

function onClickMeClicked() {
    updateBg()
}

/**
 * Model
 * Gets a color and updates the UI background
 */

function updateBg() {
    color = getRandomBgColor()
    showBgColor(color)
}

/**
 * Builts a random color in hex format
 * @returns the background color
 */
function getRandomBgColor() {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F']
    const digits = ['0', '1','2','3','4','5','6','7','8','9']

    const hex = [...letters, ...digits]
    
    color = '#'

    for(let i = 1; i <= 6; i++) {
        let randomHex = Math.floor(Math.random() * hex.length)
        color += hex[randomHex]
    }
    return color
}


/**
 * View
 * Fills the values of the corresponding UI elements.
 * @param {string} bgcolor  - the new background color that's being applied.
 */
function showBgColor(bgcolor) {
    $('#hex').text(bgcolor)
    $('body').css('background-color', bgcolor)
}