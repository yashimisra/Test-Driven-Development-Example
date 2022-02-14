function add(n1,n2)
{
    
    if(Array.isArray(n1) || Array.isArray(n1) || typeof(n1)=="string" || typeof(n2)=="string")
    {
        var str="invalid input"
        return str
    }
    if(n1 && !n2)
    {
        return n1
    }
    return n1+n2
}
module.exports =add;