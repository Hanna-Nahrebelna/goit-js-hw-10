// Завдання 2 - Генератор промісів

const form = document.querySelector(".form");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    
    // Отримання значення поля затримки при кожному відправленні форми
    const delayInput = parseInt(document.querySelector("input[name='delay']").value);
    // Отримання значення поля стану при кожному відправленні форми
    const stateInput = document.querySelector("input[name='state']:checked");
    
    const delay = parseInt(delayInput);

    const promise = new Promise((resolve, reject) => {
        if (stateInput && stateInput.value === "fulfilled") {
            setTimeout(() => {
                resolve(delay);
            }, delay);
        } else {
            setTimeout(() => {
                reject(delay);
            }, delay); // Вказуємо setTimeout для відтермінування
        }
    });

    
    promise
        .then((delay) => {
            console.log(`✅ Fulfilled promise in ${delay} ms`);
        }).catch((delay) => {
            console.log(`❌ Rejected promise in ${delay} ms`)
        });
    
    
    /*
    promise
            .then((delay) => {
                iziToast.success({
                    title: "✅ Fulfilled promise",
                    message: `in ${delay} ms`,
                    position: "topRight",
                });
            })
            .catch((delay) => {
                iziToast.error({
                    title: "❌ Rejected promise",
                    message: `in ${delay} ms`,
                    position: "topRight",
                });
            });
*/

});




