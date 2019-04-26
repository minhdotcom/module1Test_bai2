function tryRemoveFromArray (array, int) {
    let newArray = [];
    if (array == null) {
        return "mang nhap vao la null"
    } else if (int == null) {
        return "so index nhap vao la null"
        } else if (Number.isInteger(int)) {
            if (int >= 0 && int < array.length) {
                for (let i = 0; i < array.length; i++) {
                    if (i != int) {
                        newArray.push(array[i]);
                    }
                }
                return newArray;
            } else {
                return array;
            }
        } else return "so index nhap vao khong phai Integer"
}
console.log(tryRemoveFromArray([12,6,3,7,21,5,7], 2));
console.log(tryRemoveFromArray([12,6,3,7,21,5,7], 0));
console.log(tryRemoveFromArray([12,6,3,7,21,5,7], 7));
console.log(tryRemoveFromArray([12,6,3,7,21,5,7], -2));
console.log(tryRemoveFromArray([12,6,3,7,21,5,7], null));
console.log(tryRemoveFromArray([12,6,3,7,21,5,7], "a"));
console.log(tryRemoveFromArray(null, 1));