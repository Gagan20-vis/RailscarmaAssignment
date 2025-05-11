import { ApiResponse } from '@/types/api'

export const fetchFromApi = async <T>(endpoint: string): Promise<T | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`)
    const json: ApiResponse<T> = await res.json()
    return json.data
  } catch (err) {
    console.error(err)
    return null
  }
}
