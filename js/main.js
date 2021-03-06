new ClipboardJS('.color .item', {
    text: function(item){
      const dataset = item.dataset.clipboardText = item.nextElementSibling.outerText;
      return dataset;
    },
});


const colorItem = document.querySelectorAll('.color .item');

colorItem.forEach( (item) => {
  const cor = item.nextElementSibling.outerText;
  item.style.background = cor;

  item.addEventListener('click', function(){
    colorItem.forEach( (item, index) => {
      item.classList.remove('copy')
    });
    this.classList.add('copy');
  });
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


const btnMenu = document.querySelector('.btn-aside');
const menuAside = document.querySelector('.aside-menu');

btnMenu.addEventListener('click', function(){
    this.classList.toggle('clicked');
    menuAside.classList.toggle('opened');
});


const notify = document.querySelector('.notifications');

notify.addEventListener('click', function() {
  this.classList.add('checked');
});
