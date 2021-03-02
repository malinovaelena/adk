<template>
    <div class="main-content d-flex flex-column">
        <div class="main-content__filters d-flex justify-content-center">
            <div class="main-content__wrap d-flex flex-column align-items-start justify-content-center">
                <h1 class="main-content__title">Реализация непрофильных и залоговых активов</h1>
                <div>
                    <ui-tab-group v-model="active.type" :items="tabs">
                        <template slot-scope="{ Title }">{{ Title }}</template>
                    </ui-tab-group>
                </div>
                <div class="main-content__filters-list d-flex align-items-center w-100">
                    <ui-select placeholder="Тип актива"
                        :options="actives"
                        v-model="filter.type"
                        class="main-content__filter-active-type"/>
                    <div class="ui-divider--vertical"></div>
                    <ui-input class="main-content__filter-search"
                        placeholder="Поиск по наименованию, категории или ID актива"
                        v-model="filter.search" />
                    <div class="ui-divider--vertical"></div>
                    <ui-select :options="cities"
                        v-model="filter.location"
                        placeholder="Город"
                        class="main-content__filter-location"/>
                    <div class="ui-divider--vertical"></div>
                    <ui-select placeholder="Стоимость"
                        v-model="filter.price"
                        class="main-content__filter-price" />
                    <div class="ui-divider--vertical"></div>
                    <ui-select class="main-content__filter-type"
                        v-model="filter.transaction"
                        label="Тип сделки"/>
                    <ui-button @click="find">Найти</ui-button>
                </div>
            </div>
        </div>
        <div class="main-content__tabs d-flex align-self-center">
            <category v-for="cat in categories"
                :value="cat"
                :key="cat.Amount"
                class="main-content__category" />
        </div>
        <div class="main-content__cards align-self-center">
            <div class="main-content__switch-group">
                <ui-tab-group v-model="active.target" :items="tabsCategories">
                    <template slot-scope="{ Title }">{{ Title }}</template>
                </ui-tab-group>
            </div>
            <router-view :items="selectedCards"/>
        </div>
    </div>
</template>
<script>
import UiTabGroup from '../UI/UiTabGroup.vue'
import Category from './Category.vue'

const FILTER = {
  type: null,
  search: '',
  location: null,
  transaction: null,
  price: null
}

export default {
  name: 'MainPage',

  components: {
    Category,
    UiTabGroup
  },

  props: {
    cities: {
      type: Array,
      default: () => []
    },

    categories: {
      type: Array,
      default: () => []
    },

    actives: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      currentState: 0,
      active: {
        type: null,
        target: null
      },
      selectedCards: [],
      filter: FILTER
    }
  },

  watch: {
    active: {
      immediate: true,
      handler (value) {
        // this.fetch(value)
      }
    }
  },

  methods: {
    fetch (value) {
      // fetch selected Items
    },
    find () {
      // this.fetch();
    }
  },

  computed: {
    tabsCategories () {
      return [{
        Title: 'Для личных целей',
        ID: 0,
        active: true
      },
      {
        Title: 'Для бизнеса',
        ID: 1,
        active: false
      }]
    },

    tabs () {
      return [{
        Title: 'Купить',
        ID: 0,
        active: true
      },
      {
        Title: 'Снять',
        ID: 1,
        active: false
      }]
    }
  }
}
</script>
<style>
.main-content__filters-list {
    padding: 8px;
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.24);
    border-radius: 4px;
    background: #fff;
    margin-top: -2px;
    z-index: 2;
}

.main-content__filters {
    background: var(--BG_IMG);
    height: 440px;
}

.main-content__wrap {
    width: 1312px;
}

.main-content__title {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    color: #fff;
    padding-bottom: 24px;
}

.main-content__filter-search {
    width: auto;
    flex-grow: 1;
}

.main-content__filter-location {
    width: 18%;
}

.main-content__filter-price,
.main-content__filter-type {
    width: 12%;
}

.main-content__filter-active-type {
    min-width: 135px;
}

.main-content__tabs {
    margin: 0 -12px;
    margin-top: -30px;
    margin-bottom: 64px;
    width: 1312px;
}

.main-content__category {
    width: calc(25% - 12px);
    margin: 0 12px;
}

.main-content__cards {
    width: 1312px;
}

.main-content__switch-group {
    border-bottom: 1px solid var(--light-white);
}

.main-content__switch-group a {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    color: var(--black-color);
    padding-right: 32px;
    padding-bottom: 16px;
}

.main-content__switch-group a.selected {
    position: relative;
}
.main-content__switch-group a.selected:after {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    height: 3px;
    background:var(--light-green);
}
</style>
