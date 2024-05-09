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
  title: string
  image: string
  params: { heading: string; value: string }[]
}

export enum ButtonTypes {
  BUTTON = 'button',
  SUBMIT = 'submit'
}

export enum ButtonStyles {
  REGULAR = 'regular',
  OUTLINE = 'outline'
}

export enum ButtonSizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}
