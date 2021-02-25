
// Main function 

function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down');
    
    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
        const input = arrow.previousElementSibling;
        const parent = arrow.parentElement;
        const nextInput = parent.nextElementSibling;
        
        // Check for validation
        if (input.type === 'text' && validateUserAndPassword(input)) {
            nextForm(parent, nextInput);
        } else if (input.type === 'email' && validateEmail(input)) {
            nextForm(parent, nextInput);
        } else if (input.type === 'password' && validateUserAndPassword(input)) {
            nextForm(parent, nextInput);
        } else {
            parent.style.animation = 'shake 0.5s ease';
        }
        parent.addEventListener('animationend', () => {
            parent.style.animation = '';
        });
        });
    });
};

// User & Password Validation

function validateUserAndPassword(user) {
    if (user.value.length < 6) {
        error('rgb(189,87,87)');
    } else {
        error('rgb(87,189,130)');
        return true;
    };
};

// Email Validation

function validateEmail(email) {
    const validate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validate.test(email.value)) {
        error('rgb(87,189,130)');
        return true;
    } else {
        error('rgb(189,87,87)');
    }
};

// Next input field

function nextForm(parent, nextInput) {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextInput.classList.add('active');
};

// Changing the color on error

function error(color){
    document.body.style.backgroundColor = color;
};

animatedForm();