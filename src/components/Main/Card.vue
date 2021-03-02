<template>
    <div class="card d-flex flex-column">
        <div class="card-photo">
            <img :src="item.Photo" />
        </div>
        <div class="card-info d-flex flex-column justify-content-between">
            <div>
                <div class="card-info__id">
                    {{ item.ID }}
                </div>
                <div class="card-info__type">
                    {{ item.Type }}
                </div>
                <div class="card-info__title">
                    {{ item.Title }}
                </div>
            </div>
            <div>
                <div class="card-info__location">
                    {{ item.Location }}
                </div>
                <div class="card-info__description">
                    {{ item.Description }}
                </div>
                <div>
                    <div class="card-info__price">
                        {{ item.Price }}
                    </div>
                    <div class="card-info__button">
                       <ui-button outline @click="select">Купить</ui-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },

  methods: {
    select () {
      this.$emit('select', this.item)
    }
  }
}
</script>
<style>
.card-info {
    padding: 20px 16px;
}

.card-info__id {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: var(--black-color);
}

.card-info__type {
    color: var(--dark-color);
}

.card-info__title {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    color: var(--black-color);
}

.card-info__description {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: var(--dark-color);
}

.card-info__location {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    color: var(--dark-color);
}

.card-info__price {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: var(--black-color);
}
</style>
