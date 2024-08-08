let blockScopeVariable = "Available only in this block";
if (true) {
    let blockScope = "Visible inside this block";
    console.log(blockScope);
}
console.log(blockedScope)
console.log(blockScopeVariable)