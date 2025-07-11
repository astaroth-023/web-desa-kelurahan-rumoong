// Images
import Minsel from '@/assets/logo/minsel-logo.png'

const SambutanSection = () => {
    return (
        <>
            <section className='min-h-screen px-72 py-32 pt-56'>
                <h2 className="font-bold text-4xl text-center">Sambutan</h2>
                <div className="flex flex-row justify-center gap-12 mt-18">
                    <img className="w-96 h-fit" src={Minsel} alt="" />
                    <div>
                        <h3 className="font-bold text-2xl">Sandra Silvana Rampisela,S,Tr.KL</h3>
                        <h4 className="font-semibold text-lg">Hukum Tua</h4>
                        <p className="leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolore perspiciatis quaerat iusto sequi, natus repellat beatae, voluptatem quisquam assumenda laborum commodi a voluptatibus tenetur sit nulla quidem deserunt labore doloribus? Dicta quia facere numquam minus tempore! Ipsa, eius odit eveniet iusto repellat inventore adipisci, recusandae, saepe id deleniti enim!</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SambutanSection