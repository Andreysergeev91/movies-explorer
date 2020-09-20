export function genresConverter(n: number) {
  let str: string;
  switch (n) {
    case 28:
      str = 'Экшн';
      break;
    case 12:
      str = 'Приключения';
      break;
    case 16:
      str = 'Анимация';
      break;
    case 35:
      str = 'Комедия';
      break;
    case 80:
      str = 'Криминал';
      break;
    case 99:
      str = 'Документальное';
      break;
    case 18:
      str = 'Драма';
      break;
    case 10751:
      str = 'Семейный';
      break;
    case 14:
      str = 'Фантастика';
      break;
    case 36:
      str = 'История';
      break;
    case 27:
      str = 'Ужас';
      break;
    case 10402:
      str = 'Музыка';
      break;
    case 9648:
      str = 'Мистика';
      break;
    case 10749:
      str = 'Мелодрама';
      break;
    case 878:
      str = 'Научный';
      break;
    case 10770:
      str = 'TV';
      break;
    case 53:
      str = 'Триллер';
      break;
    case 10752:
      str = 'Война';
      break;
    case 37:
      str = 'Вестерн';
  }
  return str

}
