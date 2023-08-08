
const field = document.querySelector('.info');
fetch("https://yukiport1209.microcms.io/api/v1/blogs", {
  headers: {
    "X-MICROCMS-API-KEY": "J9CZhNiN6BSBLhIViPFSz37wvm8cbMHu41JP"
  }

})
  .then(res => res.json())
  .then(json => {
    for (i = 0; i < 1; i++) {
      const img = document.querySelector('.summary__eyecatch');
      const h2 = document.querySelector('.summary__title');
      const product = document.querySelector('#product');
      const category = document.querySelector('#category');
      const url = document.querySelector('#url');



      console.log(json.contents[display]);

      img.setAttribute('src', json.contents[display].eyecatch.url);

      h2.textContent = json.contents[display].title;

      const dd = document.createElement('dd');
      dd.textContent = json.contents[display].productionperiod;
      product.append(dd);

      const ddCate = document.createElement('dd');
      ddCate.textContent = json.contents[display].category.name;
      category.append(ddCate);

      const ddUrl = document.createElement('dd');
      const a = document.createElement('a');
      a.textContent = json.contents[display].link;
      a.setAttribute('href', json.contents[display].link)
      ddUrl.append(a), url.append(ddUrl);


      const main = document.querySelector('.main');
      main.innerHTML = json.contents[display].content;

    }

  });


const header = document.querySelector('.header');
const hum = document.querySelector('.header__hamburger');

hum.addEventListener('mouseover', () => {
  header.classList.add('on');
})

hum.addEventListener('click', () => {
  header.classList.toggle('on');
})

header.addEventListener('mouseover', () => {
  header.classList.add('on');
})

header.addEventListener('mouseout', () => {
  header.classList.remove('on');
})