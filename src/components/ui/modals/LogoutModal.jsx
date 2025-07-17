const LogoutModal = ({CancelLogout, handleLogout}) => {

    return (
        <>
            <div className="rounded-md shadow-md p-6 bg-white w-full max-w-96">
                <h3 className="text-xl font-bold">Konfirmasi Keluar</h3>
                <p>Anda yakin ingin keluar?</p>
                <div className="items-center flex flex-row justify-end gap-4 mt-2">
                    <button onClick={CancelLogout} className="transition-all duration-200 hover:bg-gray-300 bg-gray-200 py-3 px-6 rounded-md ">Batal</button>
                    <button onClick={handleLogout} className="transition-all duration-200 text-white hover:bg-red-500 bg-red-400 py-3 px-6 rounded-md ">Keluar</button>
                </div>
            </div>
        </>
    )
}

export default LogoutModal