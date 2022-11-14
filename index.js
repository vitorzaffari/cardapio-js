const menuItems = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./assets/item-1.jpeg",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./assets/item-2.jpeg",
      desc: `Orci eu lobortis elementum nibh. Mi eget mauris pharetra et ultrices neque ornare.`,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./assets/item-3.jpeg",
      desc: `Sollicitudin ac orci phasellus egestas tellus rutrum. Dolor morbi non arcu risus quis varius quam quisque id. `,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./assets/item-4.jpeg",
      desc: `Tincidunt dui ut ornare lectus. Mattis vulputate enim nulla aliquet porttitor.  `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./assets/item-5.jpeg",
      desc: `Faucibus a pellentesque sit amet porttitor eget dolor morbi. Eu non diam phasellus vestibulum lorem sed risus ultricies. `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./assets/item-6.jpeg",
      desc: `Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Non quam lacus suspendisse faucibus interdum posuere.`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "lunch",
      price: 8.99,
      img: "./assets/item-7.jpeg",
      desc: `Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./assets/item-8.jpeg",
      desc: `Pellentesque nec nam aliquam sem et tortor consequat id porta. Morbi quis commodo odio aenean sed.`,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./assets/item-9.jpeg",
      desc: `Id neque aliquam vestibulum morbi. Donec ultrices tincidunt arcu non sodales. Diam sollicitudin tempor id eu nisl nunc.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./assets/item-10.jpeg",
      desc: `Senectus et netus et malesuada fames ac turpis. Lectus quam id leo in vitae turpis massa sed elementum.`,
    },
  ];
  
const menu = document.querySelector('.menu');
const bntContainer = document.getElementById('container');



window.addEventListener('DOMContentLoaded', function(){
  displayMenuItems(menuItems);
  displayMenuButtons();
})



function displayMenuItems(array){
  let displayMenu = array.map(function(item){
      //função itera todos itens da coleção 'menuItems' e retorna o html abaixo
      return `<div class="menu-item">
                  <div class="img-item">
                      <img src=${item.img} alt=${item.title}>
                  </div>
                  <div class="descricao-item">
                      <div class="texto-item">
                        <h2>${item.title}</h2>
                        <span>R$${item.price}</span>
                      </div>
                      <div class="descricao">
                          <p>${item.desc}</p>
                      </div>
                  </div>
              </div>`;
  })
  //método join une todas as iterações feitas em um único item
  displayMenu = displayMenu.join("");
  //o Html gerado é inserido em 'menu' através do método innerHTML
  menu.innerHTML = displayMenu;

}


function displayMenuButtons(){
  const categories = menuItems.reduce(function(string, item){
    if (!string.includes(item.category)) {
      string.push(item.category);
    }
    return string;
  }, 
  ['all']);
  
  const categoryBtns = categories.map(function(category){
    return `<button type="button" class="btn" data-id=${category}>${category}</button>`
  }).join('');
  
  bntContainer.innerHTML = categoryBtns;
  
  const buttons = document.querySelectorAll('.btn');
  
  
  buttons.forEach(function (btn){
    btn.addEventListener('click', function(e){
      const category = e.currentTarget.dataset.id;
      const menuCategory = menuItems.filter(function (item){
        if(item.category === category){
        return item;
        }
      });
        if(category === 'all'){
          displayMenuItems(menuItems);
        }
        else{
          displayMenuItems(menuCategory);
        }
    })
  })
}