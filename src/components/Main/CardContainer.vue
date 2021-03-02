<template>
    <div class="cards-container">
        <div class="cards-container__categories">
            <router-link v-for="item in categories"
                :key="item.Title"
                class="cards-container__category">{{ item.Title }}
                <span>{{ item.Amount }}</span>
            </router-link>
        </div>
        <div class="cards-content">
          <card v-for="item in items"
            :key="item.ID"
            :item="item"
            @select="selectCard" />
        </div>
    </div>
</template>
<script>
import Card from '../Card.vue'

const categoriesOfProperty = [
  {
    Title: 'Коммерческая недвижимость',
    Amount: 2334,
    Url: 'commercial-real-estate'
  },
  {
    Title: 'Торговые центры и помещения',
    Amount: 23424,
    Url: 'shopping-centers'
  },
  {
    Title: 'Офисные центры и помещения',
    Amount: 239,
    Url: 'office-centers'
  },
  {
    Title: 'Складские комплексы',
    Amount: 234757,
    Url: 'warehouse-complexes'
  }
]

export default {
  components: {
    Card
  },

  data () {
    return {
      categories: categoriesOfProperty
    }
  },

  methods: {
    selectCard (value) {
      // do something with value
    }
  }
}
</script>
<style></style>
