// JavaScript Document
var btn_settlement = document.getElementById("btn_settlement");
var priceTotal = document.getElementById("priceTotal");
btn_settlement.onclick = function next()
{
	'use strict';
	sessionStorage.setItem("priceTotal",document.getElementById("priceTotal").value);
};
var body= document.getElementById("body");
body.onload = function yourFunction()
{
    'use strict';
    var select1 = document.getElementById("select1");
	var select1Index = select1.selectedIndex;
    var select1Text = select1.options[select1Index].value;
    document.getElementById("delivery1").innerHTML= "NT$"+select1Text+"元";
	document.getElementById("priceTotal").innerHTML="NT$"+sessionStorage.priceTotal+"元";
	var buytotal;
	buytotal=select1.value+priceTotal.value;
	document.getElementById("all").innerHTML="NT$"+buytotal+"元";

};
var goback= document.getElementById("goback");
goback.onload = function goback()
{
	'use strict';
    window.location.href="shopping.html";
};
var checkout= document.getElementById("checkout");
checkout.onload = function checkout()
{
	'use strict';
	if(document.ck.buyer.value === "") 
                {
                    alert("未輸入姓名");
					document.ck.buyer.focus();
					return false;
                }
	else if(document.ck.pnumber.value === "") 
                {
                    alert("未輸入聯絡電話");
					document.ck.pnumber.focus();
					return false;
                }
	else if(document.ck.email.value === "") 
                {
                    alert("未輸入電子郵件");
					document.ck.email.focus();
					return false;
                }
	else if(document.ck.address.value === "") 
                {
                    alert("未輸入地址");
					document.ck.address.focus();
					return false;
                }
	else if(document.ck.selectt.value === "00" )
                {
                    alert("未選擇付款方式");
					document.ck.selectt.focus();
					return false;
                }
	else if(document.ck.selecttt.value === "00" )
                {
                    alert("未選擇運送方式");
					document.ck.selecttt.focus();
					return false;
                }
	else{
		
		window.location.href="details.html";
		alert("完成訂單!");
		window.event.returnValue = false;
			
	sessionStorage.setItem("exampleInputName",document.getElementById("exampleInputName").value);
	sessionStorage.setItem("phonenumber",document.getElementById("phonenumber").value);
	sessionStorage.setItem("exampleInputEmail1",document.getElementById("exampleInputEmail1").value);
	sessionStorage.setItem("Address",document.getElementById("Address").value);
	sessionStorage.setItem("select",document.getElementById("select").value);
	sessionStorage.setItem("select1",document.getElementById("select1").value);
	sessionStorage.setItem("all",document.getElementById("all").value);
}
}
;
body.onload = function orderdetails()
{
	'use strict';
    document.getElementById("exampleInputName").innerHTML="姓名:"+sessionStorage.exampleInputName;
	document.getElementById("phonenumber").innerHTML="聯絡電話:"+sessionStorage.phonenumber;
	document.getElementById("exampleInputEmail1").innerHTML="電子郵件:"+sessionStorage.exampleInputEmail1;
	document.getElementById("Address").innerHTML="地址:"+sessionStorage.Address;
	document.getElementById("select").innerHTML="付款方式:"+sessionStorage.select;
	document.getElementById("select1").innerHTML="運費:"+sessionStorage.select1+"元";
	document.getElementById("all").innerHTML="應付總額:"+sessionStorage.all+"元";
};