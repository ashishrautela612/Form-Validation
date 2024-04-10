# Form Submission Project

This project aims to create a form submission system where users can input various data fields. The form data is then validated using both regular expressions (regex) and custom JavaScript functions. After successful validation, the user is redirected to the next page (`display.html`), where their submitted data is displayed.

 

## Validation Process

1. **Regex Validation**:
   - Fields such as email, phone number, etc., are validated using regex patterns to ensure data format correctness.

2. **Function-based Validation**:
   - Additional custom validation is performed using JavaScript functions defined in `validation.js`.

## Form Submission Flow

1. User fills out the form on `index.html`.
2. Data is validated using regex and custom functions.
3. If validation passes:
   - User is redirected to `display.html`.
   - Submitted data is displayed on the page.
4. If validation fails:
   - Error messages are shown on `index.html` for the user to correct input mistakes.

## Usage

1. Clone the repository to your local machine.
2. Open `index.html` in your web browser to access the form.
3. Fill out the form and submit it.
4. If validation is successful, you'll be redirected to `display.html` to see your submitted data.

## Technologies Used

- HTML
- CSS
- JavaScript (Regex, Custom Validation)
- Bootstrap

 
