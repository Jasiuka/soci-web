export type Option = {
    display: string
    value: string | number
}

export type Select = {
    label: string
    name: string
    options: Option[]
}

export type TestData = {
    activities: Activity[]
}

export type Activity = {
    id: number
    title: string
    image: string
    address: string
    description: string
    params: { heading: string; value: string }[]
    company: Company
}

export enum ButtonTypes {
    BUTTON = "button",
    SUBMIT = "submit"
}

export enum Themes {
    DARK = "dark",
    LIGHT = "light"
}

export enum ButtonStyles {
    REGULAR = "regular",
    OUTLINE = "outline",
    NO_BACKGROUND = "no_bg",
    SECONDARY = "secondary"
}

export enum ButtonSizes {
    EXTRA_SMALL = "extra-small",
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}

export enum ModalComponents {
    TERMS_OF_USE = "TermsOfUser",
    PRIVACY_POLICY = "PrivacyPolicy",
    CONFIRM_ACTIVITY_APPLY = "ConfirmActivityApply",
    NONE = ""
}

type Company = {
    name: string
    city: string
    person: {
        name: string
        email: string
        phone: string
    }
}

export type User = {
    email: string
    id: number
}

export type UserSettings = {
    name: string
    last_name: string
    city: string
    school: string
    class: string
}
