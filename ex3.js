function useRequest(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('get', url, true);

  xhr.onload = function () {
      if (xhr.status != 200) {
          console.log('Статус ответа: ', xhr.status);
      } else {
          const result = JSON.parse(xhr.response);
          if (callback) {
              callback(result)
          }
      }
  };

  xhr.onerror = function () {
      console.log('Ошибка! Статус ответа: ', xhr.status);
  };

  xhr.send();
};
const btn1 = document.getElementById ('input_Btn1');
const resultNode = document.querySelector('.result_ex3');

function showResult(apiData) {
  let cards = '';
  apiData.forEach(item => {
      const cardBlock = `
          <div>
              <img width="150 px" src="${item.download_url}">
              <p>${item.author}</p>
          </div>
      `;
      cards += cardBlock;
  });

  resultNode.innerHTML = cards;
}
btn1.addEventListener('click', () => {
  const value = document.getElementById('input_1').value;
  //const result = document.querySelector('#status');
  if ((1<=value) && (value<=10)) {
    url = `https://picsum.photos/v2/list?limit=${value}`;
    useRequest(url, showResult)
  } else {
    content = "Число вне диапазона от 1 до 10";
    resultNode.innerHTML = `<span id="inputAnswer">${content}</span>`;
  }
})
