<template>
    <button class="ui-button d-flex align-items-center flex-nowrap justify-content-center" @click="$emit('click')"
        :class="[{ 'ui-button--outline': outline,
                     'ui-button--disabled': disabled }, colorBG]">
        <template v-if="icon" >
            <div class="ui-button__icon" :class="icon"/>
        </template>
        <slot />
    </button>
</template>
<script>
export default {
  name: 'ui-button',

  props: {
    color: {
      type: String,
      default: 'primary'
    },
    outline: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },

    icon: {
      type: String,
      default: null
    }
  },

  computed: {
    colorBG () {
      return `ui-button--${this.color}`
    }
  }
}
</script>
<style>
.ui-button {
    padding: 7px 15px;
    min-width: 144px;
    text-align: center;
    border-radius: 3px;
    box-sizing: border-box;
}

.ui-button--primary {
    background: var(--light-green);
    color: #fff;
    border: none;
    border: 1px solid rgba(0, 0, 0, 0.06);
}

.ui-button--primary:hover {
    background: var(--middle-green);
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
}

.ui-button--primary:active {
    background: var(--dark-green);
}

.ui-button--disabled {
    background: var(--gray1);
    border: 1px solid rgba(0, 0, 0, 0.06);
}

.ui-button--outline {
    border: 1px solid var(--middle-green);
    background: transparent;
    color: #25282B;
}

.ui-button--outline:hover,
.ui-button--outline:active {
    border: 1px solid var(--middle-green);
    background: transparent;
    color: var(--light-green);
    box-shadow: none;
}

.ui-button--transparent {
    background: none;
    outline: none;
    border: none;
}

.ui-button__icon {
    margin-right: 7px;
}

</style>
