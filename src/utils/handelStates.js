const handelState = (date, fun, label, value) => {
    // const propNmae = label
    fun({ ...date, [label]: value })
}

const to_option = (Arr, [Bvalue, Blabel], [value, label]) => {
    return Arr?.map((a) => {
        return { [`${value}`]: a[Bvalue], [`${label}`]: a[Blabel] };
    });

}


// var getKeyValueMap = function(data, keyPropName, valuePropName) {
//     return $.map(data, function(item, i) {
//       return {
//         key:   item[keyPropName],
//         value: item[valuePropName]
//       }
//     });
//   };


export { handelState, to_option } /*hello  */