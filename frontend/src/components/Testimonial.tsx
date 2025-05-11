'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { fetchFromApi } from '@/lib/fetcher'
import { TestimonialType } from '@/types/testimonial'

export default function TestimonialsSection() {
  const [data, setData] = useState<TestimonialType>()

  useEffect(() => {
    ;(async () => {
      const res = await fetchFromApi<TestimonialType>(
        '/api/testimonial?populate[Client][populate]=*'
      )
      if (res) setData(res)
    })()
  }, [])

  if (!data) return null

  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-6 lg:px-8 text-white text-center">
        <p className="text-base font-bold">Testimonials</p>
        <h2 className="mt-2 text-5xl font-bold max-w-2xl mx-auto">{data.Heading}</h2>

        <p className="mt-6 text-lg font-bold leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
          {data.Description}
        </p>

        <div className="mt-10">
          <Tabs defaultValue={data.Client[0]?.id.toString()} className="max-w-2xl mx-auto w-full">
            {data.Client.map(profile => (
              <TabsContent key={profile.id} value={profile.id.toString()}>
                <div className="flex justify-center gap-2 p-4">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${profile.logo.hash}${profile.logo.ext}`}
                    alt={profile.logo.alternativeText || profile.heading}
                    width={60}
                    height={60}
                    className="rounded-full object-cover border-2"
                  />
                  <div className="text-start">
                    <p className="font-medium">{profile.heading}</p>
                    <p className="text-xs">{profile.Description}</p>
                  </div>
                </div>
              </TabsContent>
            ))}
            <TabsList className="w-full p-0 justify-center bg-transparent border-b-0">
              {data.Client.map(profile => (
                <TabsTrigger
                  key={profile.id}
                  value={profile.id.toString()}
                  className={`
                    !bg-transparent 
                    !shadow-none 
                    !border-none 
                    rounded-none 
                    data-[state=active]:!border-b-2
                    data-[state=active]:!border-solid
                    data-[state=active]:!border-t-button-secondary
                  `}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${profile.productLogo.hash}${profile.productLogo.ext}`}
                    alt={profile.logo.alternativeText || profile.heading}
                    width={profile.productLogo.width}
                    height={profile.productLogo.height}
                    className="h-10 object-contain"
                  />
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
