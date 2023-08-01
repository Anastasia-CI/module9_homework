const btn = document.getElementById ('input_Btn_5');
const resultNode5 = document.querySelector('.result_ex5');

document.addEventListener("DOMContentLoaded", () => {
    storageItem = localStorage.getItem('lastResponse')
    if (storageItem) {
        showResult(JSON.parse(storageItem));
    }
});
const useRequest5 = (page, limit) => {
    const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
    return fetch(url)
        .then((response) => {
            return response;
        })
        .then(data => {
            result = data.json();
            return result;
        })
        .catch(() => {
            console.log('error');
        });
}

function showResult(apiData) {
    let cards5 = '';
    apiData.forEach(item => {
        const cardBlock5 = `
            <div class="card">
                <img class="card-image" width="150 px" src="${item.download_url}">
                <p>${item.author}</p>
            </div>
        `;
        cards5 += cardBlock5;
    });

    resultNode5.innerHTML = cards5;
    resultNode5.style.display = 'flex';
}
const error = (content) => {
    resultNode5.innerHTML = `<span id="inputAnswer">${content}</span>`;
}

btn.addEventListener('click', async () => {
    const page = Number(document.getElementById('page_number').value);
    const limit = Number(document.getElementById('limit').value);
    const pageError = isNaN(page) || page < 1 || page > 10;
    const limitError = isNaN(limit) || limit < 1 || limit > 10;

    if (pageError) {
        error('Номер страницы вне диапазона от 1 до 10');
        
    }
    if (limitError) {
        error('Лимит вне диапазона от 1 до 10');
    }
    if (pageError && limitError) {
        error('Номер страницы и лимит вне диапазона от 1 до 10');
    }
    if (!pageError && !limitError) {
        const requestResult = await useRequest(page, limit);
        localStorage.setItem('lastResponse', JSON.stringify(requestResult));
        showResult(requestResult);
    }
    
})