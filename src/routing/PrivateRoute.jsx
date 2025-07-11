import React, { useEffect, useState, useRef } from 'react'
import { Navigate } from 'react-router-dom'
import { supabase } from '@/supabaseClient'

const PrivateRoute = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const logoutTimer = useRef(null)

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession()
      const session = data.session
      setAuthenticated(!!session)
      setLoading(false)

      if (logoutTimer.current) clearTimeout(logoutTimer.current)

      if (session) {
        // Calculate time until expiration (in ms)
        const expiresAt = session.expires_at * 1000 // expires_at is in seconds
        const now = Date.now()
        const timeLeft = expiresAt - now

        // Auto-logout after 1 hour or when session expires, whichever is sooner
        const autoLogoutTime = Math.min(timeLeft, 60 * 60 * 1000)
        logoutTimer.current = setTimeout(async () => {
          await supabase.auth.signOut()
          setAuthenticated(false)
        }, autoLogoutTime)
      }
    }

    checkSession()

    // Listen for auth state changes (optional, for better UX)
    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      checkSession()
    })

    return () => {
      if (logoutTimer.current) clearTimeout(logoutTimer.current)
      if (listener?.subscription) listener.subscription.unsubscribe()
    }
  }, [])

  if (loading) return null // or a loading spinner

  return authenticated ? children : <Navigate to="/" replace />
}

export default PrivateRoute