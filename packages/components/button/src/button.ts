import type { ExtractPropTypes, PropType } from "vue";
export type buttonType = "primary" | "error" | "info" | "success" | "text" | "default";
export const buttonProps = {
    size: {
        type: Number,
    },
    type: {
        type: String as PropType<buttonType>,
        default: "default",
    },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
