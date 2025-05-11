import { ImageBase, ImageFormat, BaseEntity } from '.'

interface ClientTestimonial {
  id: number
  heading: string
  Description: string
  logo: ImageBase & { formats: { thumbnail: ImageFormat } }
  productLogo: ImageBase & { formats: { thumbnail: ImageFormat } }
}

export interface TestimonialType extends BaseEntity {
  Heading: string
  Description: string
  Client: ClientTestimonial[]
}
