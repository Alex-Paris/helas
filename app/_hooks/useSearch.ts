import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { ISearchParams } from '../_dtos/ISearchParams'

export default function useSearch() {
  const params = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  function handleParam(type: keyof ISearchParams, value: string) {
    const newParams = new URLSearchParams(params.toString())
    const paramValue = newParams.get(type)

    if (paramValue === value) {
      // should ignore
      return
    } else if (value) {
      // should update param
      newParams.set(type, value)
    } else {
      // Should remove param
      newParams.delete(type)
    }

    const newPath = `${pathname}?${newParams.toString()}`
    router.push(newPath, { scroll: false })
  }

  return { handleParam }
}
