export class RestaurantBase<T> {
    inputType: string;
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    canBeMultiple: boolean;

    constructor(options: {
        inputType?: string,
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        canBeMultiple?: boolean
    } = {}) {
        this.inputType = options.inputType;
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.canBeMultiple = !!options.canBeMultiple;
    }
}
