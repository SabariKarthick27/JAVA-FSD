/**
 * HTML5 Local Community Event Portal - Day 1 JavaScript
 * Solutions for Module 1-HTML 5.pdf Exercises 5, 6, 7, 8, and 9.
 */

document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 CityLink Portal: Core scripts loaded and ready. Initializing DevTools Debug Lab (Task 10)...");

    // =========================================================================
    // TASK 8: Saving User Preferences (localStorage & sessionStorage)
    // =========================================================================
    const regTypeSelect = document.getElementById("regType");
    const clearPrefBtn = document.getElementById("clearPrefBtn");

    // Retrieve and pre-select event type on load
    const savedEventType = localStorage.getItem("preferredEventType");
    if (savedEventType) {
        regTypeSelect.value = savedEventType;
        console.log(`💾 LocalStorage: Retrieved preferred event type: "${savedEventType}"`);
        updateFeeDisplay(savedEventType);
    }

    // Save selected event type on change
    regTypeSelect.addEventListener("change", (e) => {
        const selectedValue = e.target.value;
        localStorage.setItem("preferredEventType", selectedValue);
        // Also save to sessionStorage to demonstrate standard session-wide storage
        sessionStorage.setItem("sessionSelectedTime", new Date().toISOString());
        
        console.log(`💾 LocalStorage: Preferred event set to "${selectedValue}"`);
        console.log(`💾 SessionStorage: Session activity timestamp updated.`);
        updateFeeDisplay(selectedValue);
    });

    // Clear preferences button action
    clearPrefBtn.addEventListener("click", () => {
        localStorage.removeItem("preferredEventType");
        sessionStorage.removeItem("sessionSelectedTime");
        regTypeSelect.value = "";
        updateFeeDisplay("");
        
        console.log("🧹 Web Storage: Cleared preferredEventType from localStorage and sessionStorage.");
        alert("Preferences cleared! Web storage caches successfully flushed.");
    });

    // Helper to calculate and display fee based on selection (Task 6)
    function updateFeeDisplay(type) {
        const feeBox = document.getElementById("feeBox");
        const feeAmount = document.getElementById("feeAmount");
        
        const fees = {
            tech: "$25",
            music: "$15",
            art: "$20",
            food: "Free",
            gardening: "Free",
            sports: "$10"
        };

        if (type && fees[type] !== undefined) {
            feeAmount.textContent = fees[type];
            feeBox.style.display = "block";
            console.log(`💵 Event Fee Calculation: ${type} fee is ${fees[type]}`);
        } else {
            feeBox.style.display = "none";
        }
    }


    // =========================================================================
    // TASK 5 & 6: Form Submission and Event Handling
    // =========================================================================
    const registrationForm = document.getElementById("registrationForm");
    const confirmationOutput = document.getElementById("confirmationMessage");
    let isFormDirty = false;

    // Track if form fields have been edited (for Task 7 onbeforeunload)
    const formInputs = registrationForm.querySelectorAll("input, select, textarea");
    formInputs.forEach(input => {
        input.addEventListener("input", () => {
            isFormDirty = true;
            console.log("✏️ Form State: Form is marked dirty (unsaved changes).");
        });
    });

    // Submit handler (onclick confirmation & output display)
    registrationForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent standard page reload

        const name = document.getElementById("regName").value;
        const email = document.getElementById("regEmail").value;
        const date = document.getElementById("regDate").value;
        const type = regTypeSelect.options[regTypeSelect.selectedIndex].text;
        const message = document.getElementById("regMessage").value || "None";

        // Double check confirmation
        const userConfirmed = confirm(`Are you sure you want to register for ${type}?`);
        
        if (userConfirmed) {
            isFormDirty = false; // Reset dirty state as it is now submitted successfully
            
            // Format dynamic output message using <output> element
            confirmationOutput.className = "success";
            confirmationOutput.innerHTML = `
                <strong>🎉 Registration Confirmed!</strong><br>
                Thank you, <strong>${name}</strong> (${email}). We have reserved your spot for 
                <strong>${type}</strong> on <strong>${date}</strong>.<br>
                <em>Additional Requests: "${message}"</em>
            `;
            
            console.log(`✅ Registration Success: Name="${name}", Event="${type}", Date="${date}"`);
            
            // Scroll to the confirmation message
            confirmationOutput.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log("❌ Registration Cancelled: Submission aborted by resident.");
        }
    });


    // =========================================================================
    // TASK 6: Feedback validations and event captures
    // =========================================================================
    
    // 1. onblur validation for phone number field
    const phoneInput = document.getElementById("feedbackPhone");
    const phoneValidationMsg = document.getElementById("phoneValidationMsg");

    phoneInput.addEventListener("blur", () => {
        const phoneValue = phoneInput.value.trim();
        // Regex for simple 10 digit phone numbers
        const phoneRegex = /^[0-9]{10}$/;
        
        if (phoneValue === "") {
            phoneValidationMsg.textContent = "";
            phoneValidationMsg.className = "validation-msg";
        } else if (phoneRegex.test(phoneValue)) {
            phoneValidationMsg.textContent = "✓ Valid phone number format.";
            phoneValidationMsg.className = "validation-msg valid";
            console.log(`📞 Validation Success: Phone number "${phoneValue}" is valid.`);
        } else {
            phoneValidationMsg.textContent = "✗ Invalid number. Please enter exactly 10 digits (e.g. 9876543210).";
            phoneValidationMsg.className = "validation-msg invalid";
            console.warn(`📞 Validation Warning: Phone number "${phoneValue}" failed pattern criteria.`);
        }
    });

    // 2. Character counter (oninput and keydown/keyup events)
    const feedbackText = document.getElementById("feedbackText");
    const charCountSpan = document.getElementById("charCount");

    const updateCharCount = () => {
        const length = feedbackText.value.length;
        charCountSpan.textContent = length;
        
        if (length > 450) {
            charCountSpan.style.color = "#dc3545"; // Warn close to limit
        } else {
            charCountSpan.style.color = "#6c757d";
        }
    };
    
    feedbackText.addEventListener("input", updateCharCount);
    feedbackText.addEventListener("keyup", updateCharCount);


    // 3. submit comments button click confirmation
    const submitFeedbackBtn = document.getElementById("submitFeedbackBtn");
    const feedbackOutput = document.getElementById("feedbackOutput");

    submitFeedbackBtn.addEventListener("click", () => {
        const phone = phoneInput.value.trim();
        const text = feedbackText.value.trim();

        if (!text) {
            alert("Please fill out the feedback description box!");
            return;
        }

        feedbackOutput.innerHTML = `<span style="color: #198754; font-weight: bold;">✓ Thank you! Feedback has been successfully logged to our developer console.</span>`;
        console.log(`💬 Feedback Logged:\nPhone: ${phone || 'N/A'}\nMessage: "${text}"`);
        
        // Reset feedback form values
        feedbackText.value = "";
        phoneInput.value = "";
        charCountSpan.textContent = "0";
    });


    // =========================================================================
    // TASK 6: Double click (ondblclick) image zoom modal
    // =========================================================================
    const galleryImages = document.querySelectorAll(".gallery-img");
    const imageModal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const modalCaption = document.getElementById("modalCaption");
    const closeModalBtn = document.getElementById("closeModalBtn");

    galleryImages.forEach(img => {
        img.addEventListener("dblclick", () => {
            imageModal.style.display = "flex";
            modalImg.src = img.src;
            modalCaption.textContent = img.title + " (High Resolution Poster)";
            console.log(`🔍 Zoom Modal: Enlarge triggered on double-click of "${img.id}"`);
        });
    });

    // Close modal when close button is clicked
    closeModalBtn.addEventListener("click", () => {
        imageModal.style.display = "none";
    });

    // Close modal when clicking outside the content image
    imageModal.addEventListener("click", (e) => {
        if (e.target === imageModal) {
            imageModal.style.display = "none";
        }
    });


    // =========================================================================
    // TASK 7: Media Events (oncanplay & onbeforeunload)
    // =========================================================================
    const inviteVideo = document.getElementById("inviteVideo");
    const videoStatusMessage = document.getElementById("videoStatusMessage");

    // oncanplay media event handler
    inviteVideo.addEventListener("canplay", () => {
        videoStatusMessage.textContent = "🟢 Video components fully loaded. Ready to play!";
        videoStatusMessage.className = "status-alert ready";
        console.log("🎬 Media Event: inviteVideo triggers \"oncanplay\" event. Buffer initialized successfully.");
    });

    // onbeforeunload window event handler
    window.addEventListener("beforeunload", (e) => {
        if (isFormDirty) {
            // Standard confirmation message requested by browser frameworks
            const warningMessage = "You have unsaved changes in the Event Registration form. Are you sure you want to exit?";
            
            // Standard compliance for older and modern browsers
            (e || window.event).returnValue = warningMessage;
            console.log("⚠️ Unload Warning: Resident is attempting to leave the page with unsaved form items.");
            return warningMessage;
        }
    });


    // =========================================================================
    // TASK 9: Geolocation for Event Mapping
    // =========================================================================
    const findLocationBtn = document.getElementById("findLocationBtn");
    const locationOutput = document.getElementById("locationOutput");
    const locationError = document.getElementById("locationError");

    const geoLat = document.getElementById("geoLat");
    const geoLong = document.getElementById("geoLong");
    const geoAccuracy = document.getElementById("geoAccuracy");
    const geoTime = document.getElementById("geoTime");

    findLocationBtn.addEventListener("click", () => {
        console.log("📍 Geolocation API: Requesting resident location coordinates...");
        
        // Hide previous displays
        locationOutput.style.display = "none";
        locationError.style.display = "none";
        
        if (!navigator.geolocation) {
            const noGeoMsg = "Geolocation is not supported by your browser software.";
            locationError.textContent = `❌ Error: ${noGeoMsg}`;
            locationError.style.display = "block";
            console.error(`📍 Geolocation Error: ${noGeoMsg}`);
            return;
        }

        // High Accuracy Geolocation options
        const geoOptions = {
            enableHighAccuracy: true,
            timeout: 10000, // 10 seconds timeout limit
            maximumAge: 0   // Avoid cache, pull direct readings
        };

        // Trigger getCurrentPosition
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;
                const acc = position.coords.accuracy;
                const timestamp = new Date(position.timestamp).toLocaleTimeString();

                // Write into HTML elements
                geoLat.textContent = `${lat}°`;
                geoLong.textContent = `${long}°`;
                geoAccuracy.textContent = `+/- ${acc.toFixed(1)} meters`;
                geoTime.textContent = timestamp;

                locationOutput.style.display = "block";
                
                console.log(`📍 Geolocation Success: Latitude=${lat}, Longitude=${long}, Accuracy=${acc}m`);
            },
            (error) => {
                let errorMsg = "An unknown tracking error occurred.";
                
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        errorMsg = "Access denied. Resident refused to share location coordinates.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        errorMsg = "Location information is unavailable on your current device network.";
                        break;
                    case error.TIMEOUT:
                        errorMsg = "Request timed out while trying to acquire satellites.";
                        break;
                }

                locationError.textContent = `❌ Geolocation Error: ${errorMsg}`;
                locationError.style.display = "block";
                console.error(`📍 Geolocation Error [Code ${error.code}]: ${errorMsg}`);
            },
            geoOptions
        );
    });

});
