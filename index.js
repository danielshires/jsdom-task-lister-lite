// As a user, I should be able to type a task into the input field.


// As a user, I should be able to click some form of a submit button.
// As a user, the task string that I provided should appear on the DOM after the submit button has been activated.

const tasksEl = document.querySelector('ul#tasks')

document.querySelector('form').addEventListener('submit', function(e) {
    // Prevents page from reloading
    e.preventDefault()
        // Selets the input text value
    const textValue = e.target.elements.newTaskDescription.value
        // Sets the input value to empty
    e.target.elements.newTaskDescription.value = ''

    // Creates a new list element
    const li = document.createElement('li')
        // Appends the list element to the unordered list
    tasksEl.appendChild(li)
        // If the input value is greater than nothing, add to the list
    if (textValue.length > 0) {
        li.innerHTML = textValue
            // Else add it as an unnamed note
    } else {
        li.innerHTML = 'Unamed note'
    }
})