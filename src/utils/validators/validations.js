export const required = value => {
    if (value) return undefined;
    return 'Required';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max ${maxLength} symbols`;
    return undefined;
}


