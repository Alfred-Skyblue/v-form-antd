export interface IIconItem {
  font_class: string
  icon_id: string
  name: string
  unicode: string
  unicode_decimal: number
}

export interface IIconFont {
  css_prefix_text: string
  description: string
  font_family: string
  id: string
  name: string
  glyphs: IIconItem[]
}

export const iconFontConfig: { iconData: IIconFont; scriptUrl: string } = {
  iconData: {} as IIconFont,
  scriptUrl: ''
}
