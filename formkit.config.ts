import { de, en } from "@formkit/i18n"
import { DefaultConfigOptions, createInput } from "@formkit/vue"
import { generateClasses } from "@formkit/themes"

const textClassification = {
    label: `block
            mb-1
            text-annotation
            text-secondary
            formkit-invalid:text-red`,
    inner: `relative
            border
            rounded-lg
            formkit-invalid:border-red-500
            formkit-invalid:focus-within:border-neutral
            focus-within:ring
            focus-within:ring-2
            focus-within:ring-secondary`,
    input: `relative
            rounded-lg
            shadow-inner-lg
            w-full
            h-10
            px-3
            border-none
            outline-none
            text-secondary
            placeholder-neutral
            text-text`,
    suffixIcon: `absolute
                 text-neutral
                 z-10
                 w-7
                 h-7
                 cursor-pointer
                 right-2
                 top-1`,
    help: `my-2 px-1`,
    message: `px-1`,
}

const buttonClassification = {
    wrapper: `mb-1 flex place-content-end`,
    input: `bg-secondary
            hover:scale-110
            transition-transform
            text-base-100
            text-text
            rounded-lg
            py-2
            px-6`,
}

const theme = {
    global: {
        outer: `mb-5 formkit-disbaled:opacity-50`,
        help: `text-annotation text-neutral`,
        messages: `list-none mb-2`,
        message: `text-red-500 px-1 text-annotation`,
    },
    button: buttonClassification,
    date: textClassification,
    "datetime-local": textClassification,
    email: textClassification,
    file: {
        outer: `w-full relative mb-10`,
        label: `block mb-1 text-annotation text-secondary`,
        inner: `block h-10 relative max-w-md cursor-pointer`,
        prefixIcon: `absolute left-1 top-[5px] w-7 h-7 text-secondary`,
        input: `cursor-pointer
                text-secondary
                text-annotation
                mb-1
                file:mr-2
                file:py-2
                file:pl-10
                file:pr-3
                file:border-0
                file:text-text
                file:bg-primary
                file:text-secondary`,
        noFiles: `block text-neutral text-annotation mb-1`,
        fileItem: `block flex text-secondary text-annotation mb-1`,
        fileRemove: `ml-32 text-red text-annotation`,
        messages: `absolute right-0`,
    },
    month: textClassification,
    number: textClassification,
    password: textClassification,
    search: textClassification,
    select: {
        inner: ``,
        input: `px-1
                bg-white
                border
                rounded`,
        option: `text-annotation
                 p-0
                 m-0`,
    },
    submit: buttonClassification,
    tel: textClassification,
    text: textClassification,
    textarea: {
        ...textClassification,
        input: `block
                w-full
                h-32
                px-2
                py-2
                text-text
                text-secondary
                placeholder-neutral`,
    },
    autocomplete: {
        ...textClassification,
        dropdown: `absolute
                   w-full
                   left-0
                   bg-base-100
                   shadow-sm
                   m-0
                   p-0
                   list-none
                   overflow-hidden
                   text-secondary
                   text-text`,
        dropdownItem: `p-1 border-b select-none overflow-hidden`,
        dropdownItemSelected: `p-1 border-b select-none bg-accent`,
        value: `flex
                items-center
                bg-accent
                justify-between
                w-full
                h-10
                px-3
                border-none
                placeholder-neutral
                text-text
                text-secondary`,
    },
    time: textClassification,
    url: textClassification,
    week: textClassification,
}

const config: DefaultConfigOptions = {
    locales: { de, en },
    locale: "de",
    config: {
        classes: generateClasses(theme),
    },
}

export default config
