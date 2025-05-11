'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { fetchFromApi } from '@/lib/fetcher'
import { FeaturesType } from '@/types/feature'

const FeatureSection = () => {
  const [data, setData] = useState<FeaturesType>()

  useEffect(() => {
    ;(async () => {
      const res = await fetchFromApi<FeaturesType>('/api/feature?populate[Cards][populate]=*')
      if (res) setData(res)
    })()
  }, [])

  if (!data) return null

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm sm:text-base text-paragraph font-bold">How Can Help You</p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary max-w-2xl">
            {data.Heading}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {data.Cards.map((item, index) => (
            <Card key={`${item.id}-${index}`} className="border-0 shadow-none">
              <CardContent className="flex flex-col items-start gap-4">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}${item.logo.hash}.${item.logo.ext}`}
                  alt={item.heading}
                  width={item.logo.width}
                  height={item.logo.height}
                />
                <h3 className="text-xl sm:text-2xl font-bold text-[#1E293B]">{item.heading}</h3>
                <p className="text-sm sm:text-base font-semibold text-[#64748B]">
                  {item.Description}
                </p>
                <a href="#" className="text-sm font-bold text-button-secondary hover:underline">
                  Learn More &rarr;
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
