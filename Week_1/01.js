let blockScopeVariable = "Available only in this block";
if (true) {
    let blockedScope = "Visible inside this block";
    console.log(blockedScope);
}
console.log(blockedScope)
console.log(blockScopeVariable)