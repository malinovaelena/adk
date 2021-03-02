<template>
    <div class="ui-tab-group d-flex">
        <ui-tab
            v-for="tab in items"
            :key="tab.ID"
            :value="tab"
            :active="tab == active"
            @click="$emit('change', tab)" />
    </div>
</template>
<script>
import UiTab from './UiTab.vue'

export default {
  props: {
    items: {
      type: Array,
      required: true
    },

    active: {
      type: [Number, String, Object]
    }
  },

  model: {
    prop: 'active',
    event: 'change'
  },

  components: {
    UiTab
  },

  watch: {
    items: {
      immediate: true,
      handler (val) {
        if (val && val.length && !this.active) {
          this.$emit('change', val[0])
        }
      }
    }
  }
}
</script>
<style>
.ui-tab-group {
    margin: 0 -2px;
}

.ui-tab-group .ui-tab {
    cursor: pointer;
    border-radius: 4px 4px 0px 0px;
    background: var(--black-color);
    opacity: 0.8;
    color: #fff;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;

    padding: 11px 16px 15px;
    margin:0 2px;
}

.ui-tab-group .ui-tab--active {
    background: var(--gray3);
    opacity: 1;
    color: var(--black-color);
}

</style>
