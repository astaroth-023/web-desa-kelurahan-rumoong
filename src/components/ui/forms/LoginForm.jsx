import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useLoginAuth from "@/components/hooks/public/login/LoginAuth"
import { supabase } from "@/supabaseClient"

const LoginForm = () => {
    const { login, loading, error } = useLoginAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    // Auto-login if already authenticated
    useEffect(() => {
        const checkSession = async () => {
            const { data } = await supabase.auth.getSession()
            if (data.session) {
                navigate('/dashboard', { replace: true })
            }
        }
        checkSession()
    }, [navigate])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const success = await login(email, password)
        if (success) {
            navigate('/dashboard', { replace: true })
        }
    }

    return (
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="you@example.com"
                        required
                    />
                </div>

                <div>
                    <label className="text-sm font-medium text-gray-700">
                        Kata Sandi
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Password"
                        required
                    />
                </div>

                {error && <div className="text-red-500 text-sm">{error}</div>}

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-200"
                    disabled={loading}
                >
                    {loading ? "Memproses..." : "Masuk"}
                </button>
            </form>
        </div>
    )
}

export default LoginForm