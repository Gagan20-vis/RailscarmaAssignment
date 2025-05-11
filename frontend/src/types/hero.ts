import { BaseEntity, Button, ImageBase, ImageFormat } from '.'

export interface HeroType extends BaseEntity {
  heading: string
  description: string
  startButton: Button
  heroImage: (ImageBase & {
    formats: {
      thumbnail: ImageFormat
      small: ImageFormat
      medium: ImageFormat
      large: ImageFormat
    }
  })[]
}
