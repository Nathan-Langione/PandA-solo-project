import React from 'react'

const LikeButton = (props) => {
    const { firstName } = props;
    const [status, setStatus] = React.useState(false);
    const [likes, setLikes] = React.useState(0);
    return (
        <p>
            <button
                disabled={status}
                onClick={() => {
                    setStatus(true)
                    let x = likes + 1;
                    setLikes(x)
                }}>
                Like {firstName}
            </button> : {likes} like(s)
        </p >
    )
}
export default LikeButton;

