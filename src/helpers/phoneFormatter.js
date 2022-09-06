export const phoneFormatter = (phnNumber) => {
    const onlyNumbers = phnNumber.replace(/\D/g, '');
    const split = onlyNumbers.split('');
    split.splice(3, 0, '-');
    split.splice(7, 0, '-');
    const joined = split.join('');
    return joined;
};
