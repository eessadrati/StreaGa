
export const hideScrollBar={
    '&::-webkit-scrollbar': {display: 'none'}
}

export const numberInputStyle={
    '& input[type=number]': {
        mozAppearance: 'textfield'
    },
    '& input[type=number]::-webkit-outer-spin-button': {
        WebkitAppearance: 'none',
        margin: 0
    },
    '& input[type=number]::-webkit-inner-spin-button': {
        WebkitAppearance: 'none',
        margin: 0
    }
}