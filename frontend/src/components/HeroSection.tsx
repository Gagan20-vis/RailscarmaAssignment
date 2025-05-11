'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { fetchFromApi } from '@/lib/fetcher'
import { HeroType } from '@/types/hero'

export default function HeroSection() {
  const [data, setData] = useState<HeroType>()

  useEffect(() => {
    ;(async () => {
      const res = await fetchFromApi<HeroType>('/api/hero?populate=*')
      console.log(res)
      if (res) setData(res)
    })()
  }, [])

  if (!data) return null

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/3">
        <div className="w-72 h-72 bg-[#FFE3B8] rounded-full mix-blend-multiply filter blur-xl opacity-70" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/2">
        <div className="w-96 h-96 bg-[#FDCFE8] rounded-full mix-blend-multiply filter blur-2xl opacity-60" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center py-20">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-6xl font-bold leading-tight text-primary">{data?.heading}</h1>
          <p className="mt-6 text-lg text-paragraph font-semibold max-w-md mx-auto lg:mx-0">
            {data?.description}
          </p>
          <div className="mt-8">
            <Button className="text-white bg-button-secondary hover:bg-button-primary transition ease-in rounded-sm text-base p-6 font-semibold cursor-pointer">
              {data?.startButton.buttonText}
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative mb-10 lg:mb-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${data?.heroImage[0].formats.large.hash}${data?.heroImage[0].formats.large.ext}`}
            alt="Hero"
            width={data?.heroImage[0].formats.large.width}
            height={data?.heroImage[0].formats.large.height}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  )
}
