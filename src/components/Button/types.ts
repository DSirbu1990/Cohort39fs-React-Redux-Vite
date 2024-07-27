import { MouseEvent } from "react"

export type ButtonType = "button" | "submit" | "reset" | undefined

export interface ButtonProps {
  id: string | undefined
  imgSrc?: string | undefined
  type?: ButtonType
  name: string
  onClick?: (event: MouseEvent) => void
  disabled?: boolean
  isRed?: boolean
}
