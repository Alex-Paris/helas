'use client'

import { useSearchParams } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'

import useSearch from '../_hooks/useSearch'

interface FilterProps {
  meals: string[]
  stars: string[]
  className?: string
}

export function Filter({ meals, stars, className }: FilterProps) {
  const { handleParam } = useSearch()
  const params = useSearchParams()

  const [mealsChecked, setMealsChecked] = useState(
    decodeURIComponent(params.get('meal') || '').split(','),
  )
  const [starsChecked, setStarsChecked] = useState(
    decodeURIComponent(params.get('star') || '').split(','),
  )
  const [priceRange, setPriceRange] = useState(
    decodeURIComponent(params.get('priceRange') || '').split(','),
  )

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      case 'star':
        handleParam('star', e.target.value, e.target.checked ? 'add' : 'remove')
        break

      case 'meal':
        handleParam('meal', e.target.value, e.target.checked ? 'add' : 'remove')
        break

      case 'price':
        handleParam('priceRange', e.target.value)
        break

      default:
        break
    }
  }

  useEffect(() => {
    setMealsChecked(decodeURIComponent(params.get('meal') || '').split(','))
    setStarsChecked(decodeURIComponent(params.get('star') || '').split(','))
    setPriceRange(decodeURIComponent(params.get('priceRange') || '').split(','))
  }, [params])

  return (
    <div
      className={`flex h-fit max-h-[calc(100vh-1.5rem)] flex-col gap-6 rounded-xl p-2 lg:sticky lg:top-4 lg:my-3 lg:overflow-scroll lg:bg-translucent-bg lg:bg-scroll lg:p-6 ${className}`}
    >
      <p className="h5 mb-6">ΦΙΛΤΡΑ</p>

      {/* Euro price */}
      <div className="flex flex-col gap-6">
        <p className="h7">Ευροσ τιμησ</p>
        <div className="flex gap-2">
          <div className="flex w-1/2 flex-col gap-2">
            <label className="text-small-12">Από</label>
            <input
              className="text-field-14 rounded-lg border-[1px] border-field-border bg-translucent-bg px-4 py-3 placeholder-gray"
              type="number"
              onBlur={(e) =>
                handleParam(
                  'priceRange',
                  [e.target.value, priceRange[1]].join(','),
                )
              }
              value={priceRange[0]}
              onChange={(e) =>
                setPriceRange([e.target.value || '0', priceRange[1] || '0'])
              }
              placeholder="€"
            />
          </div>
          <div className="flex w-1/2 flex-col gap-2">
            <label className="text-small-12">Έως</label>
            <input
              className="text-field-14 rounded-lg border-[1px] border-field-border bg-translucent-bg px-4 py-3 placeholder-gray"
              type="number"
              onBlur={(e) =>
                handleParam(
                  'priceRange',
                  [priceRange[0], e.target.value].join(','),
                )
              }
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0] || '0', e.target.value || '0'])
              }
              placeholder="€"
            />
          </div>
        </div>
        <div className="text-field-14 space-y-4">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="0,50"
              name="price"
              value="0,50"
              checked={priceRange.join(',') === '0,50'}
              onChange={handleChange}
            />
            <label htmlFor="0,50" className="w-full cursor-pointer">
              Έως 50 €
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="50,150"
              name="price"
              value="50,150"
              checked={priceRange.join(',') === '50,150'}
              onChange={handleChange}
            />
            <label htmlFor="50,150" className="w-full cursor-pointer">
              50 - 150 €
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              id="150,500"
              name="price"
              value="150,500"
              checked={priceRange.join(',') === '150,500'}
              onChange={handleChange}
            />
            <label htmlFor="150,500" className="w-full cursor-pointer">
              150 - 500 €
            </label>
          </div>
        </div>
      </div>

      {/* Meals Filter */}
      {meals.length > 0 && (
        <>
          <div className="h-[1px] w-full bg-stroke" />

          <div className="flex flex-col gap-6">
            <p className="h7">Πρόγραμμα γεύματος</p>
            <div className="text-field-14 space-y-4">
              {meals.map((meal) => (
                <div key={meal} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={meal}
                    name="meal"
                    value={meal}
                    checked={mealsChecked.includes(meal)}
                    onChange={handleChange}
                  />
                  <label htmlFor={meal} className="w-full cursor-pointer">
                    {meal}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Stars Filter */}
      {stars.length > 0 && (
        <>
          <div className="h-[1px] w-full bg-stroke" />

          <div className="flex flex-col gap-6">
            <p className="h7">Εκτίμηση</p>
            <div className="text-field-14 space-y-4">
              {stars.map((star) => (
                <div key={star} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={star}
                    name="star"
                    value={star}
                    checked={starsChecked.includes(star)}
                    onChange={handleChange}
                  />
                  <label htmlFor={star} className="w-full cursor-pointer">
                    {star} stars
                  </label>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
