import type { ExtractPropTypes, PropType } from "vue";
export type buttonType = "primary" | "error" | "info" | "success" | "text" | "default";
export type buttonSize = "lagre" | "medium" | "small" | "mini";

export const buttonProps = {
    size: {
        type: String as PropType<buttonSize>,
        default: "medium",
    },
    type: {
        type: String as PropType<buttonType>,
        default: "primary",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    circle: {
        type: Boolean,
        default: false,
    },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
