<template>
    <div class="ui-input">
      <input
      :placeholder="placeholder"
      v-model="value"/>
    </div>
</template>
<script>
export default {
  name: 'ui-input',

  props: {
    placeholder: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: ''
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
.ui-input input {
  width: 100%;
  border: none;
}

.ui-input input:focus {
  border: none;
  outline: none;
}
</style>
