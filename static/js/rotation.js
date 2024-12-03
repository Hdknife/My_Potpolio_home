function continuousRotation(id, increment) {
    let angle = 0; // Keep a separate angle for each box
    let obj = document.getElementById(id);
    if (obj) {
        setInterval(() => {
            angle += increment; // Increment the angle by the fixed value
            obj.style.transform = `rotate(${angle}deg)`; // Apply rotation
        }, 90); // Rotate every 90ms
    }
}

// Call the function for continuous rotation
continuousRotation("box-1", 5); // Rotates at 5 degrees per step
continuousRotation("box-2", 9); // Rotates at 9 degrees per step
continuousRotation("box-3", 2); // Rotates at 2 degrees per step
