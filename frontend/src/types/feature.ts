import { BaseEntity, ImageBase } from '.'

export interface FeaturesType extends BaseEntity {
  Heading: string
  Cards: {
    id: number
    heading: string
    Description: string
    logo: ImageBase
  }[]
}
