
const StatistikPendudukCard = ({ Icon, IconColor, StatistikTitle, StatistikNumber }) => {
    return (
        <>
            <div className="bg-white p-8 rounded-md shadow-md">
                <div className="flex flex-row gap-8 items-center">
                    <div className={`text-5xl ${IconColor}`}>
                        {Icon}
                    </div>
                    <div>
                        <h4 className="text-2xl">{StatistikTitle}</h4>
                        <p className="font-bold text-2xl">{StatistikNumber}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatistikPendudukCard