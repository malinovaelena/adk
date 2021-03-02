<template>
    <div class="ui-page main-page">
        <header>
            <div class="header-top d-flex justify-content-center">
                <div class="header-wrap d-flex justify-content-between">
                    <ul class="header-menu__items d-flex align-items-center">
                        <li>
                            <router-link to="/catalog"
                                class="header-menu__item"
                                active-class="header-menu__item--active">
                                Каталог активов</router-link>
                        </li>
                        <li>
                            <router-link to="/auctions"
                             class="header-menu__item"
                                active-class="header-menu__item--active">
                                Аукционы Портала DA</router-link>
                        </li>
                    </ul>
                    <menu class="d-flex">
                        <li v-for="menu in menuData"
                            :key="menu.ID"
                            class="header-menu__item">
                            {{ menu.Title }}
                        </li>
                    </menu>
                </div>
            </div>
            <div class="header-middle d-flex justify-content-center">
                <div class="header-wrap  d-flex justify-content-between">
                    <ul class="header-middle__menu d-flex align-items-center">
                        <li class="header-middle__menu-item">
                        <img src="./../../static/Logo-Green-Black.svg" alt="PORTAL DA" />
                        </li>
                        <li v-for="item in menuItems"
                            :key="item"
                            class="header-middle__menu-item">
                                <a href="#">{{ item }}</a>
                            </li>
                    </ul>
                    <div class="d-flex">
                        <div class="header-middle__menu-item d-flex flex-nowrap align-items-center">
                            <ui-button color="transparent" icon="plus-icon">
                                Разместить актив на продажу</ui-button>
                        </div>
                        <div class="header-middle__menu-item">
                            <ui-button outline icon="enter-icon">
                                Вход и регистрация
                            </ui-button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <router-view :categories="categoriesTypes"
            :cities="cities"
            :actives="activesData" />
    </div>
</template>
<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import { menuItems, citiesData, cardsTypes, activesTypes } from './data.js'
import MainPage from './Main/MainPage.vue'

Vue.use(VueRouter)

const MENU_ITEMS = ['Купить', 'Снять', 'Сервисы', 'Исследования']

export default {
  name: 'Page',

  components: {
    MainPage
  },

  data () {
    return {
      menuData: menuItems,
      cities: citiesData,
      categoriesTypes: cardsTypes,
      activesData: activesTypes,
      menuItems: MENU_ITEMS
    }
  }
}
</script>
<style>
.main-page .header-top {
    background: var(--black-color);
    color: var(--light-white);
}

.main-page .header-middle {
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.06);
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
}

.main-page .header-wrap {
    width: 1312px;
}

.header-middle__menu-item {
    padding: 13px 12px;
}

.header-menu__item {
    font-size: 14px;
    line-height: 16px;
    padding: 8px 12px;
}

.header-menu__item--active {
    color: #fff;
    background: rgba(82, 87, 92, 0.4);
}
</style>
