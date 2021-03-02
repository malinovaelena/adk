<template>
    <div class="ui-tab"
        :class="{ 'ui-tab--active' : active }"
        @click="$emit('click')">{{ value.Title }}</div>
</template>
<script>
export default {
  name: 'ui-tab',

  props: {
    value: {
      type: [Object, String, Number],
      required: true
    },
    active: {
      type: Boolean
    }
  }
}
</script>
