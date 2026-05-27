/**
 * CSS3 Local Community Event Portal - Day 1 JavaScript
 * Implements interactive layouts for comparisons and helper actions.
 */

document.addEventListener("DOMContentLoaded", () => {
    console.log("🎨 CityLink CSS3 Portal: Custom script integrations loaded.");

    // =========================================================================
    // TASK 8 COMPARISON: visibility: hidden vs display: none
    // =========================================================================
    const visibleBox = document.getElementById("visibleBox");
    const displayBox = document.getElementById("displayBox");
    
    const toggleVisibilityBtn = document.getElementById("toggleVisibilityBtn");
    const toggleDisplayBtn = document.getElementById("toggleDisplayBtn");

    // Toggle visibility: hidden on Target Box
    toggleVisibilityBtn.addEventListener("click", () => {
        visibleBox.classList.toggle("visibility-hidden-effect");
        
        // Log status to help verify with Chrome DevTools
        const isHidden = visibleBox.classList.contains("visibility-hidden-effect");
        console.log(`👁️ Task 8 Visibility Check: Target Box is now hidden? ${isHidden}`);
        
        // Update button text for better clarity
        toggleVisibilityBtn.textContent = isHidden 
            ? "Show Box (Remove hidden)" 
            : "Toggle visibility: hidden";
    });

    // Toggle display: none on Target Box
    toggleDisplayBtn.addEventListener("click", () => {
        displayBox.classList.toggle("display-none-effect");
        
        // Log status to help verify with Chrome DevTools
        const isCollapsed = displayBox.classList.contains("display-none-effect");
        console.log(`📦 Task 8 Display Check: Target Box is now collapsed? ${isCollapsed}`);
        
        // Update button text for better clarity
        toggleDisplayBtn.textContent = isCollapsed 
            ? "Show Box (Remove none)" 
            : "Toggle display: none";
    });

});

// =============================================================================
// Helper Actions: Click-to-Book Scroll & Preselection
// =============================================================================
function selectEvent(branchCode) {
    const selectElem = document.getElementById("eventSelect");
    const nameInput = document.getElementById("name");
    
    if (selectElem) {
        selectElem.value = branchCode;
        console.log(`📌 Book Spot Event Triggered: Preselected "${branchCode}" dropdown item.`);
    }
    
    if (nameInput) {
        // Focus the name field immediately as a great user experience touch
        setTimeout(() => nameInput.focus(), 100);
    }
}

// Form reset helper
function clearForm() {
    const form = document.getElementById("registrationForm");
    if (form) {
        form.reset();
        console.log("🧹 CSS3 Form: Values reset to default states.");
    }
}

// Form submit helper
function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const selectElem = document.getElementById("eventSelect");
    const selectedText = selectElem.options[selectElem.selectedIndex].text;
    
    console.log(`📊 CSS3 Booking Log: "${name}" (${email}) requested booking for "${selectedText}"`);
    alert(`🎉 Booking Successful!\nThank you ${name}, we have logged your reservation for the ${selectedText}. Check your console for details!`);
    
    clearForm();
}
