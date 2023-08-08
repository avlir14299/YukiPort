
const ul = document.querySelector('.article__items');

fetch("https://yukiport1209.microcms.io/api/v1/blogs", {
  headers: {
    "X-MICROCMS-API-KEY": "J9CZhNiN6BSBLhIViPFSz37wvm8cbMHu41JP"
  }

})
  .then(res => res.json())
  .then(json => {
    for (i = 0; i < json.contents.length; i++) {
      const li = document.createElement('li');
      const figure = document.createElement('figure');
      const a = document.createElement('a');
      const div = document.createElement('div');
      const img = document.createElement('img');
      const figcaption = document.createElement('figcaption')
      const aCap = document.createElement('a');

      li.classList.add('article__item');

      figure.classList.add('artCard');

      a.setAttribute('href', `art${i}.html`);

      div.classList.add('artCard__block');

      img.setAttribute('src', json.contents[i].eyecatch.url);
      img.classList.add('artCard__eyecatch');

      figcaption.classList.add('artCard__cap');

      aCap.setAttribute('url', `art${i}.html`);
      aCap.textContent = json.contents[i].title;
      aCap.classList.add('artCard__title');

      a.append(div), div.append(img), figure.append(a);
      figcaption.append(aCap), figure.append(figcaption);
      li.append(figure);

      ul.append(li);
    }
  });




//fade---------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('#body');
  const targetsFade = document.querySelectorAll('#fade');
  const targetsArt = document.querySelectorAll('.article');

  const optionsFade = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
  };

  const callback = (entrie, observerFade) => {
    entrie.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('off');
      } else {
        entry.target.classList.add('off');
      }
    })
  };

  targetsFade.forEach(fadeTarget => {
    const observerFade = new IntersectionObserver(callback, optionsFade);
    observerFade.observe(fadeTarget);
  });


  const optionsArt = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  };

  const callback2 = (entrie2, observerArt) => {
    entrie2.forEach(entry => {
      if (entry.isIntersecting) {
        body.classList.add('colorChange')
      } else {
        body.classList.remove('colorChange');
      }
    })
  };

  targetsArt.forEach(artTarget => {
    const observerArt = new IntersectionObserver(callback2, optionsArt);
    observerArt.observe(artTarget);
  });

})

//hamburger--------------------------------------

const header = document.querySelector('.header');
const hum = document.querySelector('.header__hamburger');

hum.addEventListener('mouseover', () => {
  header.classList.add('on');
});

hum.addEventListener('click', () => {
  header.classList.toggle('on');
});

header.addEventListener('mouseover', () => {
  header.classList.add('on');
});

header.addEventListener('mouseout', () => {
  header.classList.remove('on');
});


document.addEventListener('DOMContentLoaded', () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
  };

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 要素が画面内に入った場合に実行する処理
        entry.target.classList.add('action');
      }
    })
  };
  const targets = document.querySelectorAll('.animate');
  targets.forEach(target => {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
  });
});