# Module 1 - HTML5 Event Portal Exercises

This directory contains the complete set of solutions for the Day 1 college exercises described in **Module 1-HTML 5.pdf**. The project is centered on a **Local Community Event Portal**, implementing semantic markup, local/session data storage, rich event listeners, media embeds, and high-accuracy geolocation mapping.

---

## Technical Features Implemented

### 1. Semantic Layout & Document Base (Tasks 1 & 2)
* **W3C Standard Compliance**: Implemented base declaration `<!DOCTYPE html>`, language code `lang="en"`, and charset attributes.
* **Semantic Structure**: Built layout using native HTML5 tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, and `<footer>`.
* **Comments & Labels**: Labeled all logical sections clearly (e.g., `<!-- Navigation Section -->`).
* **Navigation Nodes**: Built `<nav>` linking internal sections (`#home`, `#events`, `#register`, etc.) and mapped `help.html` to load in a secure new tab (`target="_blank"`).

### 2. User Welcomes & Formatting Blocks (Task 3)
* **Logged-in state**: Personalized welcome message targeting selector `#welcomeBanner`.
* **Styling layers**: Styled banner via internal styles (blue background, padding, shadows) and styled special offer `<span>` inline (bold, red).
* **Emphasis classing**: Leveraged CSS `.highlight` rules on important community details.

### 3. Event Gallery Schedule Grid (Task 4)
* **Structured table elements**: Created a `2x3` layout table displaying weekly schedules, paired with an italic `<caption>`.
* **Image Properties**: Customized `<img>` tags for 6 distinct events featuring semantic `alt`, `title`, and custom border styling `.gallery-img`.

### 4. Interactive Event Forms (Task 5)
* **Form controls**: Designed input fields for Name, Email, Date, Event Selector, and Message text.
* **Attributes applied**: Utilized `placeholder`, `required` validation, and native `autofocus` on the name input field.
* **Calculated Output**: Leveraged the native HTML5 `<output id="confirmationMessage">` tag to print successful registration receipts upon submit.

### 5. Rich Event Handling API (Task 6)
* **`onblur` Validation**: Triggers an instant validation pattern check on the 10-digit phone field when focus is lost.
* **`onchange` Calculation**: Reads the selected event dropdown options and prints the admission fee dynamically.
* **`onclick` Control**: Intercepts form submissions and triggers user confirmation prompts.
* **`ondblclick` Gallery Zoom**: Binds double-clicks on gallery posters to trigger a modern modal overlay.
* **Key Events**: Monitors keystrokes on the feedback textarea to update a character count indicator in real-time.

### 6. Media and Video Events (Task 7)
* **Video Invitation**: Embeds a controls-enabled `<video>` player in the media section.
* **`oncanplay` Trigger**: Displays a status toast informing residents when video streams are loaded and ready.
* **`onbeforeunload` Warning**: Captures premature page exit events when registration form data is half-completed, warning users against losing their changes.

### 7. Web Storage APIs (Task 8)
* **Persistent Preferences**: Saves selected event types directly into the browser's `localStorage` cache.
* **Pre-selection**: Automatically reads preferences on window reload to pre-fill active dropdowns.
* **Flushing Mechanism**: Clears both `localStorage` and `sessionStorage` records via the "Clear Saved Preferences" button.

### 8. Geolocation Mapping API (Task 9)
* **Satellites Coordinate Pull**: Contacts device sensors using `navigator.geolocation.getCurrentPosition`.
* **High Accuracy Specs**: Configured with `{ enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }`.
* **Error handling**: Displays custom indicators for Permission Denied, Timeout, and Network Unavailability.

### 9. DevTools Integration (Task 10)
* Implemented extensive console logging inside `script.js` so you can open Chrome's console (`F12`), review variable values, trace event stacks, and experiment with code breakpoints live.

---

## How to Test and Run
1. Open [index.html](file:///c:/Users/SABARIKARTHICK/OneDrive/Desktop/JAVA%20FSD/Module_1_HTML5/index.html) in your Google Chrome browser.
2. Open Chrome DevTools (`F12`) and view the **Console** tab to watch events fire in real-time as you click and type.
3. Test double-clicking images in the gallery to trigger the zoom overlay.
4. Fill out the registration form, refresh the page, and observe the pre-selection retrieve your choice from `localStorage`.
