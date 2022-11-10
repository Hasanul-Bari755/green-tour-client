import { useEffect } from "react"

//custom hook use by helmet

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Green Tour`;
    },[title])
}

export default useTitle;