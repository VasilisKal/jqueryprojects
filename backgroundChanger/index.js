let bgColor = undefined
let color = undefined

/**
 * Listener
 */
$(document).ready(function() {
    $('#btn').on('click', function() {
        onClickMeClicked()
    })
})

/**
 * Controller
 * Actions taken after 'Click Me' button, clicked.
 */
function onClickMeClicked() {
    updateBg()
}

/**
 * Model
 * Gets a color and updates the UI background.
 * @returns the background color.
 */
function updateBg() {
    color = getBgColor()
    showBgColor('body', color)
}

/**
 * Chooses, randomly, a color from a standard list
 * @returns the background color.
 */
function getBgColor() {
    const colors = ['black', 'red', 'green', 'blue', 'white']
    return colors[Math.floor(Math.random() * colors.length)]
}

/**
 * View
 * Fills the values of the corresponding UI elements.
 * @param {jQuery} el - the jQuery element whose background color will be updated.
 * @param {string} bgColor - the new background color that's being applied.
 */
function showBgColor(el, bgColor) {
    $('#hex').html(bgColor)
    $(el).css({'backgroundColor' : bgColor})
}