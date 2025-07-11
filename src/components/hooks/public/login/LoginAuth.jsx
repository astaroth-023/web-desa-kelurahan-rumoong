import { useState } from "react"
import { supabase } from "@/supabaseClient"

const useLoginAuth = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const login = async (email, password) => {
    setLoading(true)
    setError(null)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setError(error.message)
    setLoading(false)
    return !error
  }

  return { login, loading, error }
}

export default useLoginAuth