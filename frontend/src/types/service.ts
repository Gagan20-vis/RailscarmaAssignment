import { BaseEntity, ImageBase, ImageFormat } from '.'

interface ProvidedService {
  id: number
  text: string
}

export interface ServiceType extends BaseEntity {
  Heading1: string
  Header2: string
  SideLogo1: ImageBase & { formats: { thumbnail: ImageFormat; small: ImageFormat } }
  providedServices1: ProvidedService[]
  SideLogo2: ImageBase & { formats: { thumbnail: ImageFormat; small: ImageFormat } }
  providedservices2: ProvidedService[]
}
