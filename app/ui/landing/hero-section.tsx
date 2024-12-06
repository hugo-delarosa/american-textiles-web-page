'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {Video} from "@/app/ui/video";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection(props: {
    title: string,
    subtitle: string,
    white_logo: { src: string, alt: string},
    navigation: { name: string, href: string }[],
    video: string

}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-gray-900">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">American Specialized Textiles </span>
                            <Image src={props.white_logo.src} alt={props.white_logo.alt} width={250} height={200}></Image>
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {props.navigation.map((item, index) => (
                          <Link key={index} href={item.href} className="text-sm font-semibold leading-6 text-white">
                            {item.name}
                          </Link>
                        ))}
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <Image src={props.white_logo.src} alt={props.white_logo.alt} width={250} height={200}></Image>
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-400"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/50">
                                <div className="space-y-2 py-6">
                                    {props.navigation.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className="relative isolate overflow-hidden pt-14 bg-gray-900">
                <Video fileName={props.video} />

                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

                    <div className="text-center">
                        <h1 className="text-balance font-granville text-3xl font-bold tracking-tight text-white sm:text-7xl">
                            {props.title}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300 p-3 md:text-2xl">
                            {props.subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
