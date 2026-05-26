import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

/**
 * Cloudflare Turnstile widget (explicit render mode).
 *
 * Usage:
 *   const ref = useRef(null)
 *   <Turnstile ref={ref} onVerify={token => setToken(token)} />
 *
 * After a failed submission call ref.current.reset() to allow the user to retry.
 */
const Turnstile = forwardRef(function Turnstile({ onVerify, onExpire }, ref) {
  const containerRef = useRef(null)
  const widgetId    = useRef(null)
  const onVerifyRef = useRef(onVerify)
  onVerifyRef.current = onVerify

  useImperativeHandle(ref, () => ({
    reset() {
      if (widgetId.current !== null && window.turnstile) {
        window.turnstile.reset(widgetId.current)
      }
    },
  }))

  useEffect(() => {
    let cancelled = false

    function mount() {
      if (cancelled || !containerRef.current || widgetId.current !== null) return
      widgetId.current = window.turnstile.render(containerRef.current, {
        sitekey: SITE_KEY,
        callback:           (token) => onVerifyRef.current(token),
        'expired-callback': ()      => { onVerifyRef.current(''); onExpire?.() },
        'error-callback':   ()      => { onVerifyRef.current('') },
        theme: 'auto',
      })
    }

    if (typeof window !== 'undefined' && window.turnstile) {
      mount()
    } else {
      // Script is loading asynchronously - poll until it's ready
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval)
          mount()
        }
      }, 100)
      return () => {
        cancelled = true
        clearInterval(interval)
        if (widgetId.current !== null && window.turnstile) {
          window.turnstile.remove(widgetId.current)
          widgetId.current = null
        }
      }
    }

    return () => {
      cancelled = true
      if (widgetId.current !== null && window.turnstile) {
        window.turnstile.remove(widgetId.current)
        widgetId.current = null
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <div ref={containerRef} className="mt-4" />
})

export default Turnstile
