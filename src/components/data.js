const menuItemsTitles = ['О проекте', 'Партнёрам', 'Помощь', 'Контакты']

const cities = [
  'Азов',
  'Александров',
  'Алексин',
  'Альметьевск',
  'Анапа',
  'Ангарск',
  'Архангельск',
  'Асбест',
  'Астрахань',
  'Ачинск',
  'Балахна',
  'Москва'
]

const prepareData = (arr) => {
  const newArr = []
  arr.forEach((el, index) => {
    newArr.push({
      Title: el,
      ID: index
    })
  })

  return newArr
}

const cardsTypes = [
  {
    Title: 'Активы',
    Amount: 675,
    Icon: './../static/Купить.svg'
  },
  {
    Title: 'Аукционы',
    Amount: 984,
    Icon: './../static/Продать.svg'
  },
  {
    Title: 'Сдать',
    Amount: 12000,
    Icon: './../static/Сдать.svg'
  },
  {
    Title: 'Снять',
    Amount: 7310,
    Icon: './../static/Снять.svg'
  }
]

const activesTypes = [
  {
    Title: 'rerer',
    ID: 1
  },
  {
    Title: 'rrre',
    ID: 2
  },
  {
    Title: 'eer',
    ID: 4
  }
]

const cards = [
  {
    ID: 3423424,
    Type: {
      ID: 1,
      Title: 'Торговый центр'
    },
    Title: 'Торговый центр в Москве на Новом Арбате',
    Location: 'Москва',
    Description: 'Полностью в залоге Банка по обязательствам 1-го заемщика',
    Price: 52345
  },
  {
    ID: 3423424,
    Type: {
      ID: 7,
      Title: 'Прочая недвижимость'
    },
    Title: 'Туристический комплекс 1 285,9 м² с земельным участком 43 585 м² на берегу оз. Байкале',
    Location: 'Иркутск',
    Description: 'Полностью в залоге Банка по обязательствам 1-го заемщика',
    Price: 52345
  },
  {
    ID: 3423424,
    Type: {
      ID: 3,
      Title: 'Частный жилой дом / таунхаус'
    },
    Title: '2-комнатная квартира 61,2 м²',
    Location: 'Краснодарский край, г. Зеленогорск',
    Description: 'Полностью в залоге Банка по обязательствам 1-го заемщика',
    Price: 52345
  }
]

const citiesData = prepareData(cities)
const menuItems = prepareData(menuItemsTitles)

export { menuItems, citiesData, cardsTypes, activesTypes, cards }
