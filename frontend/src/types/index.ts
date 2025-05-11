export interface BaseEntity {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface ImageFormat {
  name: string
  hash: string
  ext: string
  mime: string
  path: string | null
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface ImageBase extends BaseEntity {
  name: string
  alternativeText: string | null
  caption: string | null
  formats: unknown
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  width: number
  height: number
}

export interface Button {
  id: number
  buttonText: string
}
