<template>
    <button
        class="nb-button"
        :class="{
            [`nb-button--${type}`]: true,
            [`nb-button--${size}`]: true,
            [`is-disabled`]: disabled,
            [`is-circle`]: circle,
        }"
        :disabled="disabled"
    >
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { buttonProps } from "./button";

export default defineComponent({
    name: "NbButton",
    props: buttonProps,
});
</script>

<style scoped lang="scss">
@import "../../../theme/src/button.scss";
</style>
