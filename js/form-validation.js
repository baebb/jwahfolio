// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the contact form.
    $("form[name='contact-form']").validate({
        // Specify validation rules
        rules: {
            // Contact Name
            contactName: "required",
            contactEmail: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },
        contactMessage: {
                required: true,
                minlength: 5
            }
        },
        // Specify validation error messages
        messages: {
            contactName: "Please enter your name",
            contactMessage: {
                required: "Please enter project details here",
                minlength: "Details must be longer than 5 characters"
            },
            contactEmail: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
        }
    });
});