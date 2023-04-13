'use client';
import Image from 'next/image';
import React from 'react'
import Link from "next/link"

function HeroBanner() {
  return (
    <div className="flex flex-row w-full p-20 justify-around items-center" >
        <div className="heroText relative">
            <h1 className="text-4xl font-bold">Unleash your inner metalhead </h1>
            <h2 className="text-2xl">with our curated collection of unique and high-quality metal merchandise</h2>
            <div className="my-5 p-5 w-max bg-[#005C25] rounded-full" >
            <Link className="text-lg" href="">Shop now and stand out</Link>
            </div>
        </div>
        <div className="relative">
        <Image src="/images/Hero_Banner_Image.png"  className="relative" width="600" height="300" alt="Unleash your inner metalhead" />
        </div>
    </div>
  )
}

export default HeroBanner