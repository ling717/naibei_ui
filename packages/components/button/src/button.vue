<template>
    <button :style="style" class="nb-button__wrapper"><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { buttonProps } from "./button";
import { computed } from "vue";

export default defineComponent({
    name: "NbButton",
    props: buttonProps,
    setup(props) {
        const style = computed(() => {
            if (!props.size && !props.type) {
                return {};
            }
            return {
                ...(props.size ? { "font-size": props.size + "px" } : {}),
            };
        });
        return { style };
    },
});
</script>

<style scoped lang="scss">
@import "../../../theme/src/button.scss";
</style>
