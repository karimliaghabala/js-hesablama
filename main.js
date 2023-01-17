
// CALCULATOR
function calculator()
{
    let eded1=parseInt(document.getElementById('eded1').value);
    let eded2=parseInt(document.getElementById('eded2').value);
    let hesab=document.getElementById('hesab').value;

    if(hesab =='+')
    {
        document.getElementById('cavab').value=eded1+eded2;
    } else if (hesab == '-')
    {
        document.getElementById('cavab').value=eded1-eded2;
    }else if(hesab == '/')
    {
        document.getElementById('cavab').value=eded1/eded2;
    }else{
        document.getElementById('cavab').value=eded1*eded2;
    }
}
// QİYMƏTLƏNDİEMƏ
