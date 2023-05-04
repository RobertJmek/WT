function removeDuplicate(arr)
{
    let dict = {};
    arr.array.forEach(element => { dict[ element + '_' + typeof(element) ] = element })
    return Object.values(dict);

}