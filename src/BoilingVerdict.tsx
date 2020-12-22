import React from 'react';
type MyDumbProps = {
    celsius?: number;
}

const getMsg = (c: number) => {
    if (c >= 100) {
        return 'The water would boil.'
    } else if (c < 100 && c > 0) {
        return 'The water would not boil.'
    }
    return 'The water would freeze.'

}

export default function BoilingVerdict({ celsius }: MyDumbProps): JSX.Element {

    return (
        <>
            {  celsius && <p>{getMsg(celsius)}</p>}
        </>
    )

}
