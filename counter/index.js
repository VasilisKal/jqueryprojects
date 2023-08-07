// app state 
const DEFAULT = 0
let counter = DEFAULT

const counterDOM = $('#counter')
const btns = $('.btn')


/**
 * Listener
 */
$('.btn').each(function() {
    $(this).on('click', function(e) {
        if (this.id === 'btnDecr') {
            onDecreaseClicked();
        } else if (this.id === 'btnIncr') {
            onIncreaseClicked();
        } else {
            onResetClicked();
        }
    });
});

//Controllers

/**
 * Actions taken after 'Decrease' button clicked.
 * Actions include decreasing the counter
 */
function onDecreaseClicked() {
    decreaseCounter()
}

/**
 * Actions taken after 'Increase' button clicked.
 * Actions include inccreasing the counter
 */
function onIncreaseClicked() {
    increaseCounter()
}

/**
 * Actions taken after 'Reset' button clicked.
 * Actions include reseting the counter.
 */
function onResetClicked() {
    resetCounter()
}

/**
 * Decreases the counter and syncs the UI.
 */
function decreaseCounter() {
    counter--
    showCounter(counter)
}

/**
 * Increases the counter and syncs the UI.
 */
function increaseCounter() {
    counter++
    showCounter(counter)
}

/**
 * Resets the counter and syncs the UI.
 */
function resetCounter() {
    counter = DEFAULT
    showCounter(counter)
}

/**
 * Assigns the counter to the corresponding UI Element
 * and styles accordingly.
 * @param {number} counter - the counter value.
 */
function showCounter(counter) {
    counterDOM.html(counter)
    styleCounter(counter)
}

/**
 * Assigns a specific color to the counter.
 * Blue, when positive values, red when
 * negative values, black when zero.
 * @param {number} counter = the counter value.
 */
function styleCounter(counter) {
    if(counter > 0) {
        counterDOM.css('color', 'blue')
    } else if (counter < 0) {
        counterDOM.css('color', 'red')
    } else {
        counterDOM.css('color', 'black')
    }
}