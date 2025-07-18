// COMPONENTS
import LoginForm from "@/components/ui/forms/LoginForm"
import { useEffect } from "react"

const Login = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    },[])

    return (
        <>
            <section className="min-h-screen flex lg:items-center pt-50 lg:pt-0 justify-center bg-blue-50 px-4">
                <LoginForm/>
            </section>
        </>
    )
}

export default Login