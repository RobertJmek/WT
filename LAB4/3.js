// function arrayflat(arr) {
//     let i = 0;
//     const list = arr.reduce((acc, el) => {
//         if (Array.isArray(el)) {
//             el.forEach(element => { 
//                 acc[i] = element; 
//                 i += 1; 
//             });
//         }
//         else { 
//             acc[i] = el; 
//             i += 1 
//         }
//     }, []);
//     console.log(list);
//     return list;
// }

function arrayflat(arr) {
    const list = arr.reduce((acc, el) => {
        if (Array.isArray(el)) {
            return [...acc, ...el];
        }
        else { 
            return [...acc, el];
        }
    }, []);
    console.log(list);
    return list;
}

