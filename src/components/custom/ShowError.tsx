import {  normalizeText } from '@/utils/commonHelper'

const ShowError = ({ err }) => {
    console.log(err?.response?.data?.data)
    return (
        <>
            <p>{err?.response?.data?.message}</p>
            {err?.response?.data?.data &&
                Object.entries(err?.response?.data?.data).map(
                    ([fieldName, messages], i) => (
                        <p
                            key={i}
                            className="flex items-center gap-1 text-sm my-1 font-normal"
                        >
                            <span>{normalizeText(fieldName)}:</span>
                            {(messages as string[])?.map((message, i) => (
                                <span key={i}>{message}</span>
                            ))}
                        </p>
                    )
                )}
        </>
    )
}

export default ShowError
