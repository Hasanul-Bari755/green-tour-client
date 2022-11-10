import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Green Tour`;
    },[title])
}

export default useTitle;