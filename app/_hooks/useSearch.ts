import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { ISearchParams } from '../_dtos/ISearchParams'

export default function useSearch() {
  const params = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  function handleParam(
    type: keyof ISearchParams,
    value: string,
    method: 'change' | 'add' | 'remove' = 'change',
  ) {
    const newParams = new URLSearchParams(params.toString())
    const paramValue = decodeURIComponent(newParams.get(type) || '')

    // should update param
    if (method === 'change' || (method === 'add' && !paramValue))
      newParams.set(type, encodeURIComponent(value))

    // Should add a new value to the param
    if (method === 'add' && paramValue)
      newParams.set(type, encodeURIComponent([paramValue, value].join(',')))

    // Should remove param
    if (method === 'remove' && paramValue) {
      const regex = new RegExp('\\b' + value + '\\b,?', 'g')
      const newParamValue = paramValue.replace(regex, '')

      newParamValue !== ''
        ? newParams.set(type, encodeURIComponent(newParamValue))
        : newParams.delete(type)
    }

    const newPath = `${pathname}?${newParams.toString()}`
    router.push(newPath, { scroll: false })
  }

  return { handleParam }
}
