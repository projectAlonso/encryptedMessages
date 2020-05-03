
// ENCODING THE MESSAGE

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    // Toggle to link display screen
    document.querySelector('#message-form').classList.add('hide'); 
    document.querySelector('#link-form').classList.remove('hide');

    const messageInput = document.querySelector('#message-input');
    // Convert the text from ASCII to Base64
    const b64 = btoa(messageInput.value);  
    // Add the Base64 encoded text to the hash/fragment part of the site url
    const url = `${window.location}#${b64}`

    // Display the url
    const linkInput = document.querySelector('#link-input');
    linkInput.value = url;
    linkInput.select();
});


// DECONDING

const { hash } = window.location;

// Delete the hash symbol and decode
const message = atob(hash.replace('#', '')); 

// Toggle to message display screen
if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    // Display the message
    document.querySelector('h1').innerHTML = message;
}
