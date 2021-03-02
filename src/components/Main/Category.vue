<template>
    <div class="type-assets d-flex justify-content-between" @click="selectItem">
        <div class="type-assets__info">
            <h2 class="type-assets__title">
                {{ value.Title }}
            </h2>
            <div class="type-assets__amount">
                <div>{{ value.Amount }}</div>
                <!-- add vue filtes for conjugation -->
                <div class="type-assets__amount-text">видов</div>
            </div>
        </div>
        <div class="type-assets__icon">
            <img v-if="value.Icon" :src="value.Icon" :alt="value.Title" />
        </div>
    </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },

  computed: {
    bg () {
      return `background: url(${this.value.Icon})`
    }
  },

  methods: {
    selectItem () {
      // add router and go to selected path
      // or emiting value and fetch items for selected type
    }
  }
}
</script>
<style>
.type-assets {
    background: #FFFFFF;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    padding: 24px 32px;
}

.type-assets__title,
.type-assets__amount {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    color: var(--black-color);
}

.type-assets__amount {
    padding-top: 24px;
    font-size: 18px;
    line-height: 22px;
}

.type-assets__amount-text {
    font-size: 13px;
    line-height: 18px;
    color: var(--dark-color);
}

.type-assets__icon {
    margin-top: -15px;
}
</style>
