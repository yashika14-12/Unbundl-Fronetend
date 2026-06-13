import { useState, useEffect, useCallback } from 'react'

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)

    ;(async () => {
      try {
        const res = await fetch(url, { signal: controller.signal })
        if (!res.ok) throw new Error(`Request failed (${res.status})`)
        setData(await res.json())
        setLoading(false)
      } catch (e) {
        if (e.name !== 'AbortError') {
          setError(e.message || 'Something went wrong.')
          setLoading(false)
        }
      }
    })()

    return () => controller.abort()
  }, [url, retryCount])

  const retry = useCallback(() => setRetryCount(c => c + 1), [])

  return { data, loading, error, retry }
}
