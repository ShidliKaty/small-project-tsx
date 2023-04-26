import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {useEffect, useState} from "react";

interface Props {
    onClick: () => void;
}

const Like = ({onClick}: Props) => {
    const [status, setStatus] = useState(false)

    useEffect(() => {
        console.log('1')
    }, [])

    const toggle = () => {
        setStatus(!status);
        onClick()
    }
    if (status) return <AiFillHeart color="pink" size="20px" onClick={toggle}/>
    return <AiOutlineHeart size={20} onClick={toggle}/>
}
export default Like