export default {
  header: 'Цвета',
  headerText: 'Из коробки Вы получаете доуступ ко всем цветам по [спецификации Material Design](https://material.io/guidelines/style/color.html) посредством **stylus** и **javascript**. Эти значения могут использоваться внутри Ваших файлов разметки, в ваших собственных компонентах и в предустановленных компонентах с помощью системы **цвет класс**.',
  classesHeader: 'Классы',
  classesText: 'Каждый цвет спецификации сконвертирован в **background** и **text** варианты, что позволяет удобно стилизовать Ваше приложение через добавление соответствующих классов. Например, `<div class="red">` или `<span class="red--text">`. Цвета этих классов определены [здесь](https://github.com/vuetifyjs/vuetify/blob/master/src/stylus/settings/_colors.styl).',
  classesText2: 'Для затемнения или осветления текста используются **darken** и **lighten** соответственно. Например, `text--{lighten|darken}-{n}`',
  javascriptPackHeader: 'Набор цветов в Javascript',
  javascriptPackText: 'Vuetify имеет дополнительный набор цветов javascript, который Вы можете импортировать и использовать в своем приложении. Здесь же можно переопределить тему Вашего приложения.',
  stylusPackHeader: 'Набор цветов в Stylus',
  stylusPackText: 'Несмотря на все удобства, набор цветов увеличивает размер итогового css-файла примерно на 30 килобайт. Некоторым проектам вполне достаточно стандартных классов, созданных в рантайме из Vuetify-бутстрапа. Для этого нужно _вручную_ импортировать и собирать основной **stylus** файл. Потребуется [stylus loader](https://github.com/shama/stylus-loader) и точка входа `.styl`.',
  stylusPackText2: 'Создайте файл `main.styl` и подключите его к проекту.',
  alert: 'Вы **должны** [настроить](https://github.com/shama/stylus-loader) webpack, чтобы использовать `stylus`. Если для работы Вы используете один из [готовых шаблонов](/getting-started/quick-start#new-applications), то дополнительно делать ничего не нужно.',
  stylusPackText3: 'Это можно сделать и внутри главного **App.vue** файла. Помните: в зависимости от настроек Вашего проекта время сборки _будет увеличиваться_, т.к. каждый раз, когда основной файл будет изменен, остальные stylus-файлы будут перегенерированы.',
  colorHeader: 'Цвета Material Design',
  colorText: 'Ниже представлен список цветовой палитры Material Design, сгруппированный по основному цвету',
  toc: [
    {
      text: 'Введение',
      href: 'introduction'
    },
    {
      text: 'Классы',
      href: 'classes'
    },
    {
      text: 'Набор цветов в Javascript',
      href: 'javascript-color-pack'
    },
    {
      text: 'Набор цветов в Stylus',
      href: 'stylus-color-pack'
    },
    {
      text: 'Цвета Material Design',
      href: 'material-colors'
    }
  ]
}
