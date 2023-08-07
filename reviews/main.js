const reviews = [{id:0, personaName:"Anna B.", job: "Web Designer", img: "https://img.freepik.com/free-photo/positive-human-reactions-feelings-emotions-charming-elegant-middle-aged-sixty-year-old-female-with-short-gray-hair-with-pleased-smile-her-eyes-full-happiness-joy_343059-2855.jpg", descr: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique suscipit beatae saepe officia, eligendi explicabo corporis! Velit sint repellat laboriosam maiores fugit, iure doloremque natus aliquid iste? Itaque, doloremque fuga."}, 
{id: 1, personaName: "Chris Tacos", job: "Rapper", img: "https://img.freepik.com/free-photo/front-view-young-male-with-thinking-expression-brown-background-male-holiday-color-emotion_140725-54624.jpg", descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis similique facilis suscipit esse dolores alias laborum soluta nihil, neque nesciunt modi voluptas dolor id natus ratione eaque consequatur aperiam deleniti?" }, 
{id: 2, personaName: "Alexander The Not So Great", job: "Singer", img: "https://img.freepik.com/free-photo/young-man-special-diving-clothes-glasses_181624-41892.jpg", descr: "Lorem ipsum dolor sit amet, consec" }
]

let personaId = Math.floor(Math.random() * reviews.length)

//Listeners
$(function() {
    showPersonaById(personaId)

    $('#prevBtn').on('click', function() {
        onPrevBtnClicked()
    })

    $('#nextBtn').on('click', function() {
        onNextBtnClicked()
    })
})

/**
 * Displays persona details based on the provided persona ID.
 * @param {number} personaId - The ID of the persona whose details are going to be displayed
 */
function showPersonaById(personaId) {
    const persona = reviews.find(p => p.id === personaId)  //find returns object

    // Destructure persona properties
    const {personaName, job, img: image, descr} = persona

    // Update the persona details in the corresponding HTML elements
    $('#personaImg').attr('src', image)
    $('#personaName').html(personaName)
    $('#personaJob').html(job)
    $('#personaDescr').html(descr)
}

/**
 * Actions taken after prev button clicked.
 * Actions include show previous persona.
 */
function onPrevBtnClicked() {
    showPrevPesrona()
}

/**
 * Actions taken after next button clicked.
 * Actions include show next persona.
 */
function onNextBtnClicked() {
    showNextPesrona()
}

/**
 * Cicularly finds the previous persona id and shows the persona.
 */
function showPrevPesrona() {
    personaId = (personaId < 0) ? reviews.length - 1 : --personaId
    showPersonaById(personaId)
}

/**
 * Cicularly finds the previous persona id and shows the persona.
 */
function showNextPesrona() {
    personaId = (++personaId % reviews.length)
    showPersonaById(personaId)
}