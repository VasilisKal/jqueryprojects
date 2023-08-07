let noteId = 0
const daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασεκυή', 'Σάββατο']
const monthsGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 
                  'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκρωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']


//Listeners                 
$(document).ready(function() {
    setInterval(printGRDate, 1000)

    $('#addNoteBtn').on('click', function() {
        insertNote($('#inputNote').val().trim())
        reset() 
    })

    $(document).on('keyup', '#inputNote', function(e) {
        if (e.key === 'Enter') {
            insertNote($(this).val().trim());
            reset();
        }
    })
})

/**
 * Prints the current date and time in Greek format 
 * (day, date month year, HH:MM:SS) to the specified element.
 */
function printGRDate() {
    const currentDate = new Date()
    const day = currentDate.getDay()
    const date = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const strDay = daysGR[day]
    const strMonth = monthsGR[month]
    let strDate = `${strDay}, ${date} ${strMonth} ${year}`
    let strTime = `${(hours < 10) ? '0' : ''}${hours}:${(minutes < 10) ? 0 : ''}${minutes}:${(seconds < 10) ? 0 : ''}${seconds}`
    
    $('#dateText').html(strDate + "<br>" + strTime )
}

/**
 * Inserts a new note into the notes wrapper.
 * @param {String} note - The content of the note to be inserted.
 */
function insertNote(note) {
    if (!note) {
        return;
    }

    noteId++;

    //Clone the hidden note template and show it
    let clone = $('.note.hidden').clone(true);
    clone.removeClass('hidden');

    //Add click event handler to the note check icon
    clone.find('.note-check').on('click', function() {
        strikeThrough($(this).siblings('.note-text'));
    });

    //Update the attributes of the cloned note info section
    let clonedNoteInfo = clone.find('.note-info');
    clonedNoteInfo.children().eq(0).attr('id', 'noteCheck' + noteId);
    clonedNoteInfo.children().eq(1).attr('for', 'noteCheck' + noteId);

    //Update the ID attribute of the cloned delete button
    let clonedBtn = clone.find('.notedel-btn');
    clonedBtn.attr('id', 'noteDelBtn' + noteId);

    //Add click event handler to the delete button
    clonedBtn.on('click', function() {
        deleteNote($(this).parent());
    });

    //Set the bote content in the cloned note text element
    clone.find('.note-text').html(note);

    //Append the cloned note to the notes wrapper
    $('.notes-wrapper').append(clone);
}

/**
 * Toggles the line-through CSS class on the specified element
 * @param {jQuery} element - The element to be striked through
 */
function strikeThrough(element) {
    $(element).toggleClass('line-through');
}

/**
 * Deletes the specified note element
 * @param {jQuery} note - The note that gets deleted.
 */
function deleteNote(note) {
    $(note).remove();
}

/**
 * Resets the input field, to the default state.
 */
function reset() {
    $('#inputNote').val('');
}