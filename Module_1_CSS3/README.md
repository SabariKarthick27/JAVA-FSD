# Module 1 - CSS3 Event Portal Exercises

This directory contains the complete set of solutions for the Day 1 college exercises described in **Module 1-CSS3.pdf**. The project styles the **Local Community Event Portal** with advanced design parameters: CSS variables, radial gradients, custom typography grids, link pseudo-classes, collapses, and responsive columns.

---

## Technical Features Implemented

### 1. Stylesheet Inclusion Modalities (Task 1)
* **Inline Directives**: Styled the main heading directly with `style="color: #ef4444;"` to demonstrate instant specificity.
* **Embedded Block**: Created an internal `<style>` element inside the `<head>` of `index.html` to define body fallback parameters.
* **External Layering**: Structured the primary visual layout inside `styles.css`, grouping reusable components cleanly.

### 2. Syntactic Structure & Documentation (Task 2)
* **Modular Block Labeling**: The external sheet is partitioned with descriptive segment titles:
  ```css
  /* ========================================== */
  /* 3. Link and List Styling (Task 6)          */
  /* ========================================== */
  ```
* **Readability**: Configured with strict 4-space indentation and clean, professional selector comments:
  ```css
  /* Style for main CTA button */
  .cta-button { ... }
  ```

### 3. Selectors Playground (Task 3)
* **Universal Reset**: Applied `*` to reset margins, padding, and box-sizing.
* **Element Selectors**: Targeted `h2` elements to apply Outfit branding scales.
* **ID Mapping**: Managed the sticky hero header block with ID selector `#mainHeader`.
* **Class Mapping**: Created `.eventCard` styling for layout containers.
* **Grouping Selector**: Styled generic headings and paragraphs together via `h3, p`.

### 4. Colors & Background Matrices (Task 4)
* **Visual Formats**: Leveraged custom root variables declared using modern Hex codes (`#4f46e5`) and translucent RGBA channels (`rgba(79, 70, 229, 0.15)`).
* **Gradients**: Embellished all major section headings with modern horizontal `linear-gradient` dividers.
* **Body Background**: Applied a radial glow layer with high-quality fallback solid colors.

### 5. Typography Matrix (Task 5)
* **Google Fonts**: Loaded the premium `Outfit` and `Inter` sans-serif families.
* **Text Formatting**: Fine-tuned font-size scaling, font-weights (`300` to `800`), font-style parameters, and custom spacing metrics (`letter-spacing`, `line-height`).

### 6. Link & List Layout (Task 6)
* **Link States**: Implemented `:link`, `:visited`, `:hover`, and `:active` pseudo-classes for interactive, organic anchor animations.
* **List Spacing**: Removed bullets from navigation list blocks (`list-style-type: none`), spacing links with margin and padding adjustments.

### 7. Custom Data Tables (Task 7)
* **Table collapse**: Set table borders with `border-collapse: collapse;`.
* **Zebra striping**: Implemented dynamic alternate row styles utilizing `tr:nth-child(even)` selectors.
* **Alignments**: Set aligned columns (`text-align: center`) with custom padding buffers.

### 8. Box Model & Layout Controls (Task 8)
* **Card Boundaries**: Customized borders, padding, and margins to build clean card blocks.
* **Field Highlighting**: Binds active form fields to draw a neon highlight outline when focused.
* **Visibility vs. Display Dashboard**: Created an interactive laboratory comparison widget. Residents click toggles to watch how elements behave under `visibility: hidden` (retains whitespace flow) vs. `display: none` (collapses layout completely).

### 9. Multiple Columns (Task 9)
* **Gazette Section**: Structured the announcement card as a multi-column newspaper article using `column-count: 2`, `column-gap: 30px`, and `column-rule: 1px solid rgba(148, 163, 184, 0.25)`.

### 10. Responsive Media Adjustments (Task 10)
* **Breakpoints**: Implemented custom queries for devices narrower than `768px`.
* **Menu Pivot**: Re-aligns navigation items vertically on small phone screens.
* **Flexible Layouts**: Managed fluid bounds using percent values (`%`), viewport widths (`vw`), and viewport heights (`vh`) alongside Flexbox and Grid.

### 11. Debug and Test (Task 11)
* Added a specialized DevTools guidance card to inspect variables, explore the network tab, toggle devices, and view active styles live.

---

## How to Test and Run
1. Open [index.html](file:///c:/Users/SABARIKARTHICK/OneDrive/Desktop/JAVA%20FSD/Module_1_CSS3/index.html) in your Google Chrome browser.
2. Tweak the device scaling toolbar in Chrome DevTools to verify responsive layout shifts under `768px`.
3. Try the interactive **Layout Lab** comparison dashboard at the bottom of the page to witness the physical difference between display none and visibility hidden!
