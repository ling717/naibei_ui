<template>
    <i class="nb-icon" :style="style"><slot></slot></i>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { iconProps } from "./icon";
import { computed } from "@vue/reactivity";

export default defineComponent({
    name: "NbIcon",
    props: iconProps,
    setup(props) {
        const style = computed(() => {
            if (!props.size && !props.color) {
                return {};
            }
            return {
                ...(props.size ? { "font-size": props.size + "px" } : {}),
                ...(props.color ? { "color": props.color } : {}),
            };
        });
        onMounted(() => {
            console.log(props);
        });
        return { style };
    },
});
</script>

<style scoped></style>
