import {useState} from "react";

interface Props {
    children: string,
    maxChars?: number
}


const ExpandedText = ({children, maxChars = 100}: Props) => {
    const [isExpanded, setExpanded] = useState(false)
    if (children.length <= maxChars) return <p>{children}</p>

    const text = isExpanded ? children.substring(0, maxChars) : children

    return <p>{text}...
        <button onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'More' : 'Less'}</button>
    </p>
}
export default ExpandedText