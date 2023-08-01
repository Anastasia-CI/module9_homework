const btn2_1 = document.getElementById ('input_Btn_4_1');
const resultNode2 = document.querySelector('.result_ex4');
function useRequest2 (value1, value2) {
    return fetch(`https://picsum.photos/${value1}/${value2}`)
    .then((response) => { return response.json(); })
    .then((data) => data.url)
    .catch(() => { console.log('error') });
}
btn2_1.addEventListener('click', async () => {
    const value1 = document.getElementById('input_4_1').value;
    const value2 = document.getElementById('input_4_2').value;
    if ((100<=value1) && (value1<=300)&&(100<=value2) && (value2<=300)) {
        const requestResult = await useRequest2 (value1, value2);
        image = document.createElement('img');
        image.src = requestResult;
        resultNode2.append(image);   
    } else {
      content = "Одно из чисел вне диапазона от 100 до 300";
      resultNode2.innerHTML = `<span id="inputAnswer">${content}</span>`;
    }
})