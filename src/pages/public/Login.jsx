import React from 'react'

const Login = () => {
    return (
        <>
            <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>

                    <form className="space-y-5">
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Kata Sandi
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-200"
                        >
                            Masuk
                        </button>
                    </form>

                </div>
            </section>

        </>
    )
}

export default Login