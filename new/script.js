// ---- Private holidays here ----
// Format: "YYYY-MM-DD"
const holidays = [
    "2025-12-25",
    "2025-11-14",
    "2025-01-01"
];

// --------------------------------

const daysContainer = document.getElementById("days");
const monthYearText = document.getElementById("month-year");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentDate = new Date();
currentDate.setDate(1);

function renderCalendar() {
    daysContainer.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    monthYearText.innerText = currentDate.toLocaleString("default", {
        month: "long",
        year: "numeric"
    });

    // Add empty cells
    for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += `<div></div>`;
    }

    // Render dates
    for (let day = 1; day <= totalDays; day++) {
        const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        
        const isHoliday = holidays.includes(dateString);

        daysContainer.innerHTML += `
            <div class="day ${isHoliday ? "holiday" : "normal"}">
                ${day}
            </div>
        `;
    }
}

// Button actions
prevBtn.onclick = () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
};

nextBtn.onclick = () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
};

// Initial load
renderCalendar();
