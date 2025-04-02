document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.getElementById('welcome-message');
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeStyleBtn = document.getElementById('change-style-btn');
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const dynamicElement = document.getElementById('dynamic-element');
    const featuresList = document.getElementById('features-list');
    
    changeTextBtn.addEventListener('click', function() {
        const messages = [
            "Hello, DOM!",
            "Text changed successfully!",
            "JavaScript is fun!",
            "DOM Manipulation in action",
            "Welcome back!"
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        welcomeMessage.textContent = randomMessage;
    });
    
    changeStyleBtn.addEventListener('click', function() {
        welcomeMessage.classList.toggle('highlight');
        featuresList.classList.toggle('highlight');
        

        if (welcomeMessage.classList.contains('highlight')) {
            changeStyleBtn.textContent = 'Remove Styles';
        } else {
            changeStyleBtn.textContent = 'Toggle Styles';
        }
    });

    toggleElementBtn.addEventListener('click', function() {
        dynamicElement.classList.toggle('hidden');
        
        if (dynamicElement.classList.contains('hidden')) {
            toggleElementBtn.textContent = 'Show Element';
        } else {
            toggleElementBtn.textContent = 'Hide Element';
        }
    });
    
    featuresList.addEventListener('click', function() {
        const newItem = document.createElement('li');
        newItem.textContent = 'New feature added!';
        featuresList.appendChild(newItem);
    });
});