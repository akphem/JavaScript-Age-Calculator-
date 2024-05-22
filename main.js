let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge() {
    let birthDay = new Date(userInput.value);

    let d1 = birthDay.getDate();
    let m1 = birthDay.getMonth() + 1;
    let y1 = birthDay.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;

    } else {let userInput = document.getElementById("date");
    userInput.max = new Date().toISOString().split("T")[0];
    let result = document.getElementById("result");
    
    function calculateAge() {
    
        // We also have to check if the user has chosen any date so when the input is empty it throws an error
    if (!userInput.value) {
        result.innerHTML = "Please enter a valid date.";
        return;
    }

    let birthDay = new Date(userInput.value);
    let today = new Date();

    let d1 = birthDay.getDate();
    let m1 = birthDay.getMonth() + 1;
    let y1 = birthDay.getFullYear();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;

    if (m2 >= m1) {
    m3 = m2 - m1;
    } else {
    y3--;
    m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
    d3 = d2 - d1;
    } else {
    m3--;

    // i also noticed an issue here with your calculation, you're not using the month correctly, remember that month is indexed at 0 i.e 0 - 11. You alwaYS HAVE to considered that in your calculations
    d3 = getDaysInMonth(y2, m2 - 1) + d2 - d1;
    }

    if (m3 < 0) {
    m3 = 11;
    y3--;
    }


    // first you're setting the template string in a backtick not a normal quotation so that your variables can be rendered.
    result.innerHTML = 'You are'<span>'${y3}'</span> 'years,' <span>'${m3}'</span> 'months,' <span>'${d3}'</span>'days old;' 
}

function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;

        result.innerHTML = 'You are <span>${y3}</span> years, <span>${m3}</span> months, <span>${d3}</span> days old';
    }
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}