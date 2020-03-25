const colorItem = document.querySelectorAll('.color .item');

colorItem.forEach( (item) => {
  const cor = item.nextElementSibling.outerText;
  item.style.background = cor;
});


const tipoItem = document.querySelectorAll('.tipos .item');

tipoItem.forEach( (item) => {

  const size = item.dataset.size;
  const weight = item.dataset.weight;
  item.style.fontSize = size;
  item.style.fontWeight = weight;
});

const margemItem = document.querySelectorAll('.margens .item');

margemItem.forEach( (item) => {
  const margem = item.nextElementSibling.outerText;
  item.style.height = margem;
});