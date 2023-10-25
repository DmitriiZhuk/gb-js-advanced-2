// Пример JSON-данных (замените данными из вашего источника)
const scheduleData = [
  {
    name: "Занятие 1",
    time: "10:00",
    maxParticipants: 20,
    currentParticipants: 15,
  },
  {
    name: "Занятие 2",
    time: "14:30",
    maxParticipants: 15,
    currentParticipants: 10,
  },
  {
    name: "Занятие 3",
    time: "16:45",
    maxParticipants: 10,
    currentParticipants: 10,
  },
];

function createScheduleElement(data) {
  const scheduleElement = document.createElement("div");
  scheduleElement.classList.add("card", "mb-3");

  if (data.maxParticipants == data.currentParticipants) {
    scheduleElement.innerHTML = `
    <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">Время: ${data.time}</p>
        <p class="card-text">Макс. участников: ${data.maxParticipants}</p>
        <p class="card-text">Записано: <span id="currentParticipants">${data.currentParticipants}</span></p>
        <button class="btn btn-secondary" id="registerBtn">Запись неактивна</button>
        <button class="btn btn-danger" id="cancelBtn" style="display: none;">Отменить запись</button>
    </div>
`;
  } else {
    scheduleElement.innerHTML = `
    <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">Время: ${data.time}</p>
        <p class="card-text">Макс. участников: ${data.maxParticipants}</p>
        <p class="card-text">Записано: <span id="currentParticipants">${data.currentParticipants}</span></p>
        <button class="btn btn-primary" id="registerBtn">Записаться</button>
        <button class="btn btn-danger" id="cancelBtn" style="display: none;">Отменить запись</button>
    </div>
`;
  }

  // Добавление обработчика события на кнопку "Записаться"
  const registerBtn = scheduleElement.querySelector("#registerBtn");
  registerBtn.addEventListener("click", () => {
    if (data.currentParticipants < data.maxParticipants) {
      data.currentParticipants++;
      const currentParticipants = scheduleElement.querySelector(
        "#currentParticipants"
      );
      currentParticipants.textContent = data.currentParticipants;
      registerBtn.style.display = "none";
      const cancelBtn = scheduleElement.querySelector("#cancelBtn");
      cancelBtn.style.display = "block";
    }
  });

  // Добавление обработчика события на кнопку "Отменить запись"
  const cancelBtn = scheduleElement.querySelector("#cancelBtn");
  cancelBtn.addEventListener("click", () => {
    data.currentParticipants--;
    const currentParticipants = scheduleElement.querySelector(
      "#currentParticipants"
    );
    currentParticipants.textContent = data.currentParticipants;
    cancelBtn.style.display = "none";
    registerBtn.style.display = "block";
  });

  // Добавление элемента расписания на страницу
  document.getElementById("schedule").appendChild(scheduleElement);
}

// Загрузка данных и создание элементов расписания
scheduleData.forEach(createScheduleElement);
