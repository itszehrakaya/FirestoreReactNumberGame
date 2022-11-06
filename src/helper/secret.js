
const SecretNumCreator = (digits)=>  {

    const Sec_list = [];
    const remaining_numbers = [0,1,2,3,4,5,6,7,8,9];
    const digit_index = [0,1,2,3,4,5,6,7,8];
    const noZeroRndm = Math.floor(Math.random() * 10) + 1;
    const findIndex = remaining_numbers.indexOf(noZeroRndm);
    const remainedFirst =Number(remaining_numbers.splice(findIndex, 1));
    Sec_list.push( remainedFirst );
    for ( let a = 0; a < digits - 1; a++ ) {
        const x = Math.floor( Math.random() * digit_index.length );
        const removed = Number(remaining_numbers.splice( x, 1 ));
        digit_index.pop();
        Sec_list.push( removed );
    }
    return Sec_list;
};
export default SecretNumCreator;