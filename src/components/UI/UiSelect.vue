<template>
<!-- eslint-disable vue/no-duplicate-attributes -->
    <v-select :options="options" :label="label"
        :placeholder="placeholder"
        label="Title"
        class="ui-select"
        v-model="value">
        <template v-slot:option="option">
            <span :class="option.Icon"></span>
            {{ option.Title }}
        </template>
    </v-select>
</template>
<script>
import Vue from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

Vue.component('v-select', vSelect)

export default {
  name: 'ui-select',

  components: {
    vSelect
  },

  props: {
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [Number, String, Object],
      defaut: null
    }
  },

  model: {
    prop: 'value',
    event: 'change'
  },

  watch: {
    value: {
      immediate: true,
      handler (val) {
        this.$emit('change', val)
      }
    }
  }
}
</script>
<style>
.ui-select .vs__dropdown-toggle {
    border: none;
}

</style>
