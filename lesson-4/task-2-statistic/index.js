// Необхідно зібрати статистику по всіх вузлах усередині елемента переданого у параметрі root і повернути її як об'єкт
// Статистика повинна містити:
// - кількість текстових вузлів
// - кількість елементів кожного класу
// - кількість елементів кожного тегу
// Для роботи з класами рекомендується використовувати classList

const container = document.querySelector(".container-mid");

function collectDOMStat(root) {
  const stat = {
    tags: {},
    classes: {},
    texts: 0,
  };
  const childNodes = root.childNodes;
  console.log(childNodes);
  for (const node of childNodes) {
    console.log(node.nodeType);
    if (node.nodeType === 3) {
      stat.texts += 1;
    } else if (node.nodeType === 1) {
      const tag = node.tagName;
      const classList = node.classList;
      if (stat.tags[tag]) {
        stat.tags[tag]++;
      } else {
        stat.tags[tag] = 1;
      }
      for (const c of classList) {
        if (stat.classes[c]) {
          stat.classes[c]++;
        } else stat.classes[c] = 1;
      }
    }
  }

  return stat;
}
console.log(collectDOMStat(container));
