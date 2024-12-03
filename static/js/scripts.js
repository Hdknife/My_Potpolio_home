// Typing Effect
function typingEffect(text, elementId, speed = 200) {
    const element = document.getElementById(elementId);
    let index = 0;

    function type() {
        if (index <= text.length) {
            element.textContent = text.slice(0, index);
            index++;
            setTimeout(type, speed);
        } else {
            // Reset index after typing completes to loop
            index = 0;
            setTimeout(type, speed);
        }
    }
    type();
}


// Color Effect
function colorEffect(text, elementId, highlightColor = 'red', normalColor = 'black', speed = 200) {
    const element = document.getElementById(elementId);
    let index = 0;

    function animate() {
        const letters = text.split("");
        const updatedText = letters
            .map((letter, i) =>
                i === index
                    ? `<span style="color: ${highlightColor}">${letter}</span>`
                    : `<span style="color: ${normalColor}">${letter}</span>`
            )
            .join("");

        element.innerHTML = updatedText;
        index = (index + 1) % text.length;

        setTimeout(animate, speed);
    }
    animate();
}





function moveItem(event, itemId) {
    const item = document.getElementById(itemId);
    const allItems = document.querySelectorAll('.item-container'); // Get all layers
    
    // Reset all items to their default state
    allItems.forEach((otherItem) => {
        otherItem.style.transition = "transform 0.8s ease";
        otherItem.style.transform = "translateX(0px)";
        otherItem.style.zIndex = "1"; // Reset stacking order
    });

    // Animate the hovered item
    item.style.transition = "transform 0.5s ease";
    item.style.transform = "translateX(100px)";
    item.style.zIndex = "10"; // Bring the hovered layer to the front
}



// Call Functions
typingEffect("Hello World!", "typing-text", 300);
typingEffect("Creative Exploration Learning", "type-view", 200);
colorEffect("Python Developer", "typewriter", "red", "White", 150);
