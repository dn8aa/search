// TODO 6.1. Дан массив с продуктами,
let db = [
  {
    title: "Samsung S10",
    category: "electronics",
    price: 700,
    desc: "Super phone for your life!",
    img: "https://object.pscloud.io/cms/cms/Photo/img_0_77_1809_0_6.png",
  },
  {
    title: "iPhone 13 Pro",
    category: "electronics",
    price: 1100,
    desc: "One of the most powerful cameras!",
    img: "https://www.tradeinn.com/f/13885/138855059/apple-iphone-13-pro-256gb-6.1-%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD.jpg",
  },
  {
    title: "Apple",
    category: "fruits",
    price: 2,
    desc: "Healthy fruit that is used in many dishes and desserts.",
    img: "https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-732x549-thumbnail-732x549.jpg",
  },
  {
    title: "Orange",
    category: "fruits",
    price: 7,
    desc: "Fruit for one of the most popular types of juice.",
    img: "https://www.eatthis.com/wp-content/uploads/sites/4/2021/07/whole-halved-oranges.jpg",
  },
  {
    title: "Audi R8",
    category: "cars",
    price: 98000,
    desc: "A sports car that can reach tremendous speed.",
    img: "https://cdn.motor1.com/images/mgl/JmVR6/s1/2019-audi-r8-onlocation.jpg",
  },
];

let card = document.querySelector(".row");

function render(product = db) {
  card.innerHTML = "";
  product.forEach((item) => {
    card.innerHTML += `
    <div class="col">
    <div class="card p-2"  style="width: 16rem; height:475px" >
   <div style="height:280px">
   <img src = "${item.img}" class = "card-img-top" alt="">
   </div>
    <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.desc}</p>
    </div>
    <ul class="list-group list-group-flush">
            <li class="list-group-item">category: ${item.category}</li>
            <li class="list-group-item">price: ${item.price}$</li>
        </ul>
    </div>

        </div>
    `;
  });
}

render();
//, задача: отобразить все подукты на странице используя карточки из бутстрапа

// todo 6.2. Продолжаем предыдущий таск, добавить на страницу селект в котором будут категории продуктов, при нажатии на определенную категорию, должны остаться товары только выбранной категории

const select = document.querySelector("select");

select.addEventListener("change", (e) => {
  console.log(e.target.value);
  let newD = [];

  for (i of db) {
    if (i.category == e.target.value) {
      // console.log(i);
      newD.push(i);
      console.log(newD);
    }
    render(newD);
  }
  if (e.target.value == "all") {
    render();
  }
});

//todo 6.3. Продолжаем предыдущий таск, добавить функционал поиска, должен быть инпут с кнопкой 'Найти товар', по нажатию на кнопку, должны остаться только товары, которые удовлетворяют условиям поиска(должен происходить поиск по названию товара, точное совпадение)

const input = document.querySelector("input");

input.addEventListener("change", (e) => {
  let data2 = [];
  for (i of db) {
    render();
    if (i.title.toLowerCase() == e.target.value.toLowerCase()) {
      data2.push(i);
    } else {
      render();
    }
  }
  if (e.target.value == "") {
    return render();
  }
  console.log(e.target.value);

  render(data2);
});

render();

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  console.log(input.value);
  let data2 = [];
  for (i of db) {
    render();
    if (i.title.toLowerCase() == input.value.toLowerCase()) {
      data2.push(i);
    }
  }
  if (input.value == "") {
    return render();
  }
  console.log(input.value);

  render(data2);
});
