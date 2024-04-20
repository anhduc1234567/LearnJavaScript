
/*In other words, value?.prop:

works as value.prop, if value exists,
otherwise (when value is undefined/null) it returns undefined.
*/
let user = {
    address: null
}
alert(user?.address?.street)