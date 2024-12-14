'use client';

import {Dialog, DialogBackdrop, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {XMarkIcon} from "@heroicons/react/24/outline";
import {ChevronDownIcon, PlusIcon} from "@heroicons/react/16/solid";
import {useState} from "react";
import {ProductCollection} from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export default function Filters(props:{ collection: ProductCollection}) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});

  const handleFilterChange = (sectionId: string, value: string) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      if (newFilters[sectionId]?.includes(value)) {
        newFilters[sectionId] = newFilters[sectionId].filter((v) => v !== value);
      } else {
        newFilters[sectionId] = [...(newFilters[sectionId] || []), value];
      }
      return newFilters;
    });
  };

  const filteredProducts = props.collection.products.filter((product) => {
    return Object.entries(selectedFilters).every(([, values]) => {
      return values.length === 0 || values.some(value => product.filter_criteria.includes(value));
    });
  });

  return (
    <div>
      {/* Mobile filter dialog */}
      <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
          >
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="relative -mr-2 flex size-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="absolute -inset-0.5"/>
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6"/>
              </button>
            </div>

            {/* Filters */}
            <form className="mt-4">
              {props.collection.filters.map((section) => (
                <Disclosure key={section.name} as="div" className="border-t border-gray-200 pb-4 pt-4">
                  <fieldset>
                    <legend className="w-full px-2">
                      <DisclosureButton
                        className="group flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                        <span className="text-sm font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex h-7 items-center">
                            <ChevronDownIcon
                              aria-hidden="true"
                              className="size-5 rotate-0 transform group-data-[open]:-rotate-180"
                            />
                          </span>
                      </DisclosureButton>
                    </legend>
                    <DisclosurePanel className="px-4 pb-2 pt-4">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  id={`${section.id}-${optionIdx}-mobile`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  checked={selectedFilters[section.id]?.includes(option.value) || false}
                                  onChange={() => handleFilterChange(section.id, option.value)}
                                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label htmlFor={`${section.id}-${optionIdx}-mobile`} className="text-sm text-gray-500">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </fieldset>
                </Disclosure>
              ))}
            </form>
          </DialogPanel>
        </div>
      </Dialog>

      <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-6">
        <div className="border-b border-gray-200 pb-10 pt-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">{props.collection.name}</h1>
        </div>

        <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <aside>
            <h2 className="sr-only">Filters</h2>

            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="inline-flex items-center lg:hidden"
            >
              <span className="text-sm font-medium text-gray-700">Filters</span>
              <PlusIcon aria-hidden="true" className="ml-1 size-5 shrink-0 text-gray-400"/>
            </button>

            <div className="hidden lg:block">
              <form className="space-y-10 divide-y divide-gray-200">
                {props.collection.filters.map((section, sectionIdx) => (
                  <div key={section.name} className={sectionIdx === 0 ? '' : 'pt-10'}>
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-900">{section.name}</legend>
                      <div className="space-y-3 pt-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  defaultValue={option.value}
                                  id={`${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  checked={selectedFilters[section.id]?.includes(option.value) || false}
                                  onChange={() => handleFilterChange(section.id, option.value)}
                                  className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-primary_blue checked:bg-primary_blue indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:checked]:opacity-100"
                                  />
                                  <path
                                    d="M3 7H11"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-[:indeterminate]:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label htmlFor={`${section.id}-${optionIdx}`} className="text-sm text-gray-600">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                ))}
              </form>
            </div>
          </aside>

          <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
            <h2 id="product-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                >
                  <Image
                    alt={product.image.alt}
                    src={product.image.src}
                    width={450}
                    height={600}
                    className="aspect-[3/4] bg-gray-200 object-cover group-hover:opacity-75 sm:h-96"
                  />
                  <div className="flex flex-1 flex-col space-y-2 p-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      <Link href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0"/>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <div className="flex flex-1 flex-col justify-end">
                      <p className="text-sm italic text-gray-500">{product.color}</p>
                      {/*<p className="text-base font-medium text-gray-900">{product.price}</p>*/}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}