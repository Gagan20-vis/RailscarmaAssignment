'use client'

import { Check } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { fetchFromApi } from '@/lib/fetcher'
import { ServiceType } from '@/types/service'

const ServicesSection = () => {
  const [data, setData] = useState<ServiceType>()

  useEffect(() => {
    ;(async () => {
      const res = await fetchFromApi<ServiceType>('/api/service?populate=*')
      if (res) setData(res)
    })()
  }, [])

  if (!data) return null

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${data.SideLogo1.hash}${data.SideLogo1.ext}`}
              alt={data.Heading1}
              width={data.SideLogo1.width}
              height={data.SideLogo1.height}
              className="mx-auto"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-paragraph">Services We Offer</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary max-w-2xl">
              {data.Heading1}
            </h2>

            <div className="mt-6 space-y-4">
              {data.providedServices1.map((service, idx) => (
                <div
                  key={`${service.id}${idx}`}
                  className="flex items-center gap-4 bg-white rounded-lg shadow px-4 py-3 even:ml-4 max-w-md"
                >
                  <Check className="h-6 w-6 bg-gray-50 rounded-full hover:bg-button-secondary hover:text-white p-1 text-button-secondary transition" />
                  <span className="text-base font-semibold text-primary">{service.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-bold text-[#64748B]">Our Services</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-primary max-w-2xl">
              {data.Header2}
            </h2>

            <div className="mt-6 space-y-4">
              {data.providedservices2.map((service, idx) => (
                <div
                  key={`${service.id}${idx}`}
                  className="flex items-center gap-4 bg-white rounded-lg shadow px-4 py-3 even:ml-4 max-w-md"
                >
                  <Check className="h-6 w-6 bg-gray-50 rounded-full hover:bg-button-secondary hover:text-white p-1 text-button-secondary transition" />
                  <span className="text-base font-semibold text-primary">{service.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 w-full">
            <Image
              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${data.SideLogo2.hash}${data.SideLogo2.ext}`}
              alt={data.Header2}
              width={data.SideLogo2.width}
              height={data.SideLogo2.height}
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
