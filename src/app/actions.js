export const START = "START"
export const STOP = "STOP"

export const start = () => {
    return {
        type: START,
        payload: {
            val: "yes"
        }
    }
}

export const stop = () => {
    return {
        type: STOP,
        payload: {
            val: "no"
        }
    }
}