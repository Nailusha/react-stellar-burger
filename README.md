# Проект: Stellar-Burger

## Навигация:

<h3 align="center"></h3>
  <a href="#about">Описание проекта</a>
  •
  <a href="#functionality">Функциональность</a>
  •
  <a href="#techs">Технологии</a>
  •
  <a href="#install">Установка</a>

## Описание проекта:

<h4 id="about"></h4>
Веб-приложение которое позволяет заказывать уникальные бургеры собственной сборки.
Бургеры создаются перетаскиванием ингредиентов в область конструктора бургеров и далее оформляется заказ, всю информацию по ингредиентам можно открыть кликнув на элемент, также все заказы отслеживаются в режиме реального времени, можно посмотреть историю всех заказов в ленте заказов, а также ленту собственных заказов в личном кабинете.

[ссылка на проект](https://nailusha.github.io/react-stellar-burger/)

**Функциональность приложения:**

<ul id="functionality">
  <li>Главная страница с ингредиентами, перемещение по категориям с помощью tab;</li>
  <li>Реализовано Drag-n-drop перетаскивание ингредиентов для формирования бургера и порядка ингредиентов в самом конструкторе;</li> 
  <li>Регистрация/авторизация/восстановление пароля пользователей;</li>
  <li>История всех заказов и заказов пользователя с обновлением в режиме реального времени;</li>
  <li>Реализован роутинг;</li>
  <li>Защита роутинга (доступ по статусу авторизации);</li>
  <li>Приложение также имеет динамитческий роутинг (если кликнуть на ингредиент откроется popup, если скопировать ссылку открытого попапа и перейти на нее через введенный url от руки откроется отдельная страница);</li>
  <li>Реализовано тестирование unit и e2e тестами.</li>
</ul>

**Технологии**

<ul id="techs">
  <li>React</li>
  <li>Redux toolkit</li>
  <li>React Router</li>
  <li>React DnD</li>
  <li>TypeScript</li>
  <li>WebSocket</li>
  <li>CSS Modules</li>
  <li>Cypress</li>
  <li>Jest</li>
</ul>

## Установка

<h3 id="install"></h3>
1. Склонировать проект на свой компьютер

```bash
git clone git@github.com:Nailusha/react-stellar-burger.git
```

2. Перейти в папку с проектом и установить зависимости в проекте

```bash
cd stellar-burger
npm install
```

3. Запустить проект

```bash
npm start
```