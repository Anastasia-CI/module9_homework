/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();

// XML, который мы будем парсить
const xmlString = `
    <list>
        <student id="student1">
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student id="student2">
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
`;
/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

// Получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");
const student1Node = xmlDOM.getElementById("student1");
const name1Node = student1Node.querySelector("name");
const first1Node = name1Node.querySelector("first");
const second1Node = name1Node.querySelector("second");
const age1Node = student1Node.querySelector("age");
const prof1Node = student1Node.querySelector("prof");
const student2Node = xmlDOM.getElementById("student2");
const name2Node = student2Node.querySelector("name");
const first2Node = name2Node.querySelector("first");
const second2Node = name2Node.querySelector("second");
const age2Node = student2Node.querySelector("age");
const prof2Node = student2Node.querySelector("prof");

// Получение данных из атрибутов
const lang1Attr = name1Node.getAttribute('lang');
const lang2Attr = name2Node.getAttribute('lang');

/* Этап 3. Запись данных в результирующий объект */
const result = {
  list: [
  {
    name: `${first1Node.textContent} ${second1Node.textContent}`,
    age: Number(age1Node.textContent),
    prof: prof1Node.textContent,
    lang: lang1Attr,
  },
  {
    name: `${first2Node.textContent} ${second2Node.textContent}`,
    age: Number(age2Node.textContent),
    prof: prof2Node.textContent,
    lang: lang2Attr,
  }
]
};
console.log('result', result);