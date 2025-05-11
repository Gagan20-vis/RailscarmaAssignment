import { BaseEntity, ImageBase, Button } from '.'

interface NavigationItem {
  id: number
  text: string
  href: string
}

interface LogoType extends BaseEntity {
  logotext: string
  Logo: ImageBase
}

export interface NavbarApiResponse extends BaseEntity {
  Logo: LogoType
  navigations: NavigationItem[]
  demoButton: Button
}
