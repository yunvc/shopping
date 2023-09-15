var shoppingCar = [];
    
function addProduct(){   clearShoppingCar(); 
      var product1 = document.getElementById("productSelect1").value;
    var color1 = document.getElementById("colorSelect1").value;
    var size1 = document.getElementById("sizeSelect1").value;
    var number1 = document.getElementById("numberSelect1").value;
    var price1 = document.getElementById("price_product1").value;
                      
    var product2 = document.getElementById("productSelect2").value;
    var color2 = document.getElementById("colorSelect2").value;
    var size2 = document.getElementById("sizeSelect2").value;
    var number2 = document.getElementById("numberSelect2").value;
    var price2 = document.getElementById("price_product2").value;
    
    var product3 = document.getElementById("productSelect3").value;
    var color3 = document.getElementById("colorSelect3").value;
    var size3 = document.getElementById("sizeSelect3").value;
    var number3 = document.getElementById("numberSelect3").value;
    var price3 = document.getElementById("price_product3").value;
					  
	var product4 = document.getElementById("productSelect4").value;
    var color4 = document.getElementById("colorSelect4").value;
    var size4 = document.getElementById("sizeSelect4").value;
    var number4 = document.getElementById("numberSelect4").value;
    var price4 = document.getElementById("price_product4").value;
					 
	var product5 = document.getElementById("productSelect5").value;
    var color5 = document.getElementById("colorSelect5").value;
    var size5 = document.getElementById("sizeSelect5").value;
    var number5 = document.getElementById("numberSelect5").value;
    var price5 = document.getElementById("price_product5").value;
					  
	var product6 = document.getElementById("productSelect6").value;
    var color6 = document.getElementById("colorSelect6").value;
    var size6 = document.getElementById("sizeSelect6").value;
    var number6 = document.getElementById("numberSelect6").value;
    var price6 = document.getElementById("price_product6").value;
    
	var product7 = document.getElementById("productSelect7").value;
    var color7 = document.getElementById("colorSelect7").value;
    var size7 = document.getElementById("sizeSelect7").value;
    var number7 = document.getElementById("numberSelect7").value;
    var price7 = document.getElementById("price_product7").value;
					 
	var product8 = document.getElementById("productSelect8").value;
    var color8 = document.getElementById("colorSelect8").value;
    var size8 = document.getElementById("sizeSelect8").value;
    var number8 = document.getElementById("numberSelect8").value;
    var price8 = document.getElementById("price_product8").value;
					  
	var product9 = document.getElementById("productSelect9").value;
    var color9 = document.getElementById("colorSelect9").value;
    var size9 = document.getElementById("sizeSelect9").value;
    var number9 = document.getElementById("numberSelect9").value;
    var price9 = document.getElementById("price_product9").value;
					  
	var product10 = document.getElementById("productSelect10").value;
    var color10 = document.getElementById("colorSelect10").value;
    var size10 = document.getElementById("sizeSelect10").value;
    var number10 = document.getElementById("numberSelect10").value;
    var price10 = document.getElementById("price_product10").value;
					 
	var product11 = document.getElementById("productSelect11").value;
    var color11 = document.getElementById("colorSelect11").value;
    var size11 = document.getElementById("sizeSelect11").value;
    var number11 = document.getElementById("numberSelect11").value;
    var price11 = document.getElementById("price_product11").value;
					  
	var product12 = document.getElementById("productSelect12").value;
    var color12 = document.getElementById("colorSelect12").value;
    var size12 = document.getElementById("sizeSelect12").value;
    var number12 = document.getElementById("numberSelect12").value;
    var price12 = document.getElementById("price_product12").value;
					  
	var product13 = document.getElementById("productSelect13").value;
    var color13 = document.getElementById("colorSelect13").value;
    var size13 = document.getElementById("sizeSelect13").value;
    var number13 = document.getElementById("numberSelect13").value;
    var price13 = document.getElementById("price_product13").value;
					 
	var product14 = document.getElementById("productSelect14").value;
    var color14 = document.getElementById("colorSelect14").value;
    var size14 = document.getElementById("sizeSelect14").value;
    var number14 = document.getElementById("numberSelect14").value;
    var price14 = document.getElementById("price_product14").value;
					  
	var product15 = document.getElementById("productSelect15").value;
    var color15 = document.getElementById("colorSelect15").value;
    var size15 = document.getElementById("sizeSelect15").value;
    var number15 = document.getElementById("numberSelect15").value;
    var price15 = document.getElementById("price_product15").value;
					  
	var product16 = document.getElementById("productSelect16").value;
    var color16 = document.getElementById("colorSelect16").value;
    var size16 = document.getElementById("sizeSelect16").value;
    var number16 = document.getElementById("numberSelect16").value;
    var price16 = document.getElementById("price_product16").value;
					  
    var product17 = document.getElementById("productSelect17").value;
    var color17 = document.getElementById("colorSelect17").value;
    var size17 = document.getElementById("sizeSelect17").value;
    var number17 = document.getElementById("numberSelect17").value;
    var price17 = document.getElementById("price_product17").value;
					  
	var product18 = document.getElementById("productSelect18").value;
    var color18 = document.getElementById("colorSelect18").value;
    var size18 = document.getElementById("sizeSelect18").value;
    var number18 = document.getElementById("numberSelect18").value;
    var price18 = document.getElementById("price_product18").value;
					  
	var product19 = document.getElementById("productSelect19").value;
    var color19 = document.getElementById("colorSelect19").value;
    var size19 = document.getElementById("sizeSelect19").value;
    var number19 = document.getElementById("numberSelect19").value;
    var price19 = document.getElementById("price_product19").value;
					  
	var product20 = document.getElementById("productSelect20").value;
    var color20 = document.getElementById("colorSelect20").value;
    var size20 = document.getElementById("sizeSelect20").value;
    var number20 = document.getElementById("numberSelect20").value;
    var price20 = document.getElementById("price_product20").value;
					  
	var product21 = document.getElementById("productSelect21").value;
    var color21 = document.getElementById("colorSelect21").value;
    var size21 = document.getElementById("sizeSelect21").value;
    var number21 = document.getElementById("numberSelect21").value;
    var price21 = document.getElementById("price_product21").value;
					  
	var product22 = document.getElementById("productSelect22").value;
    var color22 = document.getElementById("colorSelect22").value;
    var size22 = document.getElementById("sizeSelect22").value;
    var number22 = document.getElementById("numberSelect22").value;
    var price22 = document.getElementById("price_product22").value;
					  			  
	var product23 = document.getElementById("productSelect23").value;
    var color23 = document.getElementById("colorSelect23").value;
    var size23 = document.getElementById("sizeSelect23").value;
    var number23 = document.getElementById("numberSelect23").value;
    var price23 = document.getElementById("price_product23").value;
					  
	var product24 = document.getElementById("productSelect24").value;
    var color24 = document.getElementById("colorSelect24").value;
    var size24 = document.getElementById("sizeSelect24").value;
    var number24 = document.getElementById("numberSelect24").value;
    var price24 = document.getElementById("price_product24").value;
					  
	var product25 = document.getElementById("productSelect25").value;
    var color25 = document.getElementById("colorSelect25").value;
    var size25 = document.getElementById("sizeSelect25").value;
    var number25 = document.getElementById("numberSelect25").value;
    var price25 = document.getElementById("price_product25").value;
					  
	var product26 = document.getElementById("productSelect26").value;
    var color26 = document.getElementById("colorSelect26").value;
    var size26 = document.getElementById("sizeSelect26").value;
    var number26 = document.getElementById("numberSelect26").value;
    var price26 = document.getElementById("price_product26").value;
					  
	var product27 = document.getElementById("productSelect27").value;
    var color27 = document.getElementById("colorSelect27").value;
    var size27 = document.getElementById("sizeSelect27").value;
    var number27 = document.getElementById("numberSelect27").value;
    var price27 = document.getElementById("price_product27").value;
					  
	var product28 = document.getElementById("productSelect28").value;
    var color28 = document.getElementById("colorSelect28").value;
    var size28 = document.getElementById("sizeSelect28").value;
    var number28 = document.getElementById("numberSelect28").value;
    var price28 = document.getElementById("price_product28").value;
					  
	var product29 = document.getElementById("productSelect29").value;
    var color29 = document.getElementById("colorSelect29").value;
    var size29 = document.getElementById("sizeSelect29").value;
    var number29 = document.getElementById("numberSelect29").value;
    var price29 = document.getElementById("price_product29").value;
					  
	var product30 = document.getElementById("productSelect30").value;
    var color30 = document.getElementById("colorSelect30").value;
    var size30 = document.getElementById("sizeSelect30").value;
    var number30 = document.getElementById("numberSelect30").value;
    var price30 = document.getElementById("price_product30").value;
					  
	var product31 = document.getElementById("productSelect31").value;
    var color31 = document.getElementById("colorSelect31").value;
    var size31 = document.getElementById("sizeSelect31").value;
    var number31 = document.getElementById("numberSelect31").value;
    var price31 = document.getElementById("price_product31").value;
					  
	var product32 = document.getElementById("productSelect32").value;
    var color32 = document.getElementById("colorSelect32").value;
    var size32 = document.getElementById("sizeSelect32").value;
    var number32 = document.getElementById("numberSelect32").value;
    var price32 = document.getElementById("price_product32").value;

	var product33 = document.getElementById("productSelect33").value;
    var color33 = document.getElementById("colorSelect33").value;
    var size33 = document.getElementById("sizeSelect33").value;
    var number33 = document.getElementById("numberSelect33").value;
    var price33 = document.getElementById("price_product33").value;
					  
	var product34 = document.getElementById("productSelect34").value;
    var color34 = document.getElementById("colorSelect34").value;
    var size34 = document.getElementById("sizeSelect34").value;
    var number34 = document.getElementById("numberSelect34").value;
    var price34 = document.getElementById("price_product34").value;
					  
	var product35 = document.getElementById("productSelect35").value;
    var color35 = document.getElementById("colorSelect35").value;
    var size35 = document.getElementById("sizeSelect35").value;
    var number35 = document.getElementById("numberSelect35").value;
    var price35 = document.getElementById("price_product35").value;
					  
	var product36 = document.getElementById("productSelect36").value;
    var color36 = document.getElementById("colorSelect36").value;
    var size36 = document.getElementById("sizeSelect36").value;
    var number36 = document.getElementById("numberSelect36").value;
    var price36 = document.getElementById("price_product36").value;
					  
	var product37 = document.getElementById("productSelect37").value;
    var color37 = document.getElementById("colorSelect37").value;
    var size37 = document.getElementById("sizeSelect37").value;
    var number37 = document.getElementById("numberSelect37").value;
    var price37 = document.getElementById("price_product37").value;
					  
	var product38 = document.getElementById("productSelect38").value;
    var color38 = document.getElementById("colorSelect38").value;
    var size38 = document.getElementById("sizeSelect38").value;
    var number38 = document.getElementById("numberSelect38").value;
    var price38 = document.getElementById("price_product38").value;
					
	var product39 = document.getElementById("productSelect39").value;
    var color39 = document.getElementById("colorSelect39").value;
    var size39 = document.getElementById("sizeSelect39").value;
    var number39 = document.getElementById("numberSelect39").value;
    var price39 = document.getElementById("price_product39").value;
					
    AddtoCar(product1,color1,size1,number1,price1);
    AddtoCar(product2,color2,size2,number2,price2);
    AddtoCar(product3,color3,size3,number3,price3);
    AddtoCar(product4,color4,size4,number4,price4);
    AddtoCar(product5,color5,size5,number5,price5);
    AddtoCar(product6,color6,size6,number6,price6);
    AddtoCar(product7,color7,size7,number7,price7);
    AddtoCar(product8,color8,size8,number8,price8);
    AddtoCar(product9,color9,size9,number9,price9);
    AddtoCar(product10,color10,size10,number10,price10);
    AddtoCar(product11,color11,size11,number11,price11);
    AddtoCar(product12,color12,size12,number12,price12);
    AddtoCar(product13,color13,size13,number13,price13);
    AddtoCar(product14,color14,size14,number14,price14);
    AddtoCar(product15,color15,size15,number15,price15);
    AddtoCar(product16,color16,size16,number16,price16);
    AddtoCar(product17,color17,size17,number17,price17);
    AddtoCar(product18,color18,size18,number18,price18);
    AddtoCar(product19,color19,size19,number19,price19);
    AddtoCar(product20,color20,size20,number20,price20);
    AddtoCar(product21,color21,size21,number21,price21);
    AddtoCar(product22,color22,size22,number22,price22);
    AddtoCar(product23,color23,size23,number23,price23);
    AddtoCar(product24,color24,size24,number24,price24);
    AddtoCar(product25,color25,size25,number25,price25);
    AddtoCar(product26,color26,size26,number26,price26);
    AddtoCar(product27,color27,size27,number27,price27);
    AddtoCar(product28,color28,size28,number28,price28);
    AddtoCar(product29,color29,size29,number29,price29);
    AddtoCar(product30,color30,size30,number30,price30);
    AddtoCar(product31,color31,size31,number31,price31);
    AddtoCar(product32,color32,size32,number32,price32);
    AddtoCar(product33,color33,size33,number33,price33);
    AddtoCar(product34,color34,size34,number34,price34);
    AddtoCar(product35,color35,size35,number35,price35);
    AddtoCar(product36,color36,size36,number36,price36);
    AddtoCar(product37,color37,size37,number37,price37);
    AddtoCar(product38,color38,size38,number38,price38);
    AddtoCar(product39,color39,size39,number39,price39);
					  
    sessionStorage.setItem('uid',document.getElementById("uid").value);
    sessionStorage.setItem('uname',document.getElementById("uname").value);
    sessionStorage.setItem('detail', JSON.stringify(shoppingCar));
                      
    displayShoppingCar();
}
    
function AddtoCar(pproduct,pcolor,psize,pnumber,pprice){
    var singleProduct = {};
    singleProduct.product=pproduct;
    singleProduct.color=pcolor;
    singleProduct.size=psize;
    singleProduct.number=pnumber;
    singleProduct.price=pprice;
    singleProduct.pricetotal=pprice*pnumber;
    shoppingCar.push(singleProduct);
}  	
	
function clearShoppingCar(){
	while(shoppingCar.length > 0) {
         shoppingCar.pop();  //把shoppingCar[]陣列內的值一個一值移除
		}	
	
	}
    
function displayShoppingCar(){
 var html = "<table>";
    html += "<td>商品名稱</td>";
    html += "<td>顏色</td>";
    html += "<td>尺寸</td>";
    html += "<td>數量</td>";
    html += "<td>單價</td>";
    html += "<td>總計</td>";
    for (var i = 0; i < shoppingCar.length; i++) {
        html += "<tr>";
        html += "<td>" + shoppingCar[i].product + "</td>";
        html += "<td>" + shoppingCar[i].color + "</td>";
        html += "<td>" + shoppingCar[i].size + "</td>";
        html += "<td>" + shoppingCar[i].number + "</td>";
        html += "<td>" + shoppingCar[i].price + "</td>";
        html += "<td>" + shoppingCar[i].pricetotal + "</td>";
        html += "</tr>";
    }
        html += "</table>";
        document.getElementById("demo").innerHTML = html;
} 

function nextbtn(){window.location.href="checkout2.html";}


















$(document).ready(function() {
    
    function getSubTotal(row) {
        var price = parseFloat($(row).find(".price_product").data("bind"));
        var qty = parseInt($(row).find(":text").val());
        var result = price * qty;
        $(row).find(".price_product").text($.formatMoney(price, 2));
        $(row).find(".price_product_total").text($.formatMoney(result, 2)).data("bind", result.toFixed(2));
    }

    
    function getTotal() {
        var qtyTotal = 0;
        var itemCount = 0;
        var priceTotal = 0;
        $(cartTable).find("tr:gt(0)").each(function() {
            getSubTotal(this);
            if ($(this).find(":checkbox").prop("checked") == true) {
                itemCount++;
                qtyTotal += parseInt($(this).find(":text").val());
                priceTotal += parseFloat($(this).find(".subtotal").data("bind"));
            }
        });
        $("#itemCount").text(itemCount).data("bind", itemCount);
        $("#qtyCount").text(qtyTotal).data("bind", qtyTotal);
        $("#priceTotal").text($.formatMoney(priceTotal, 2)).data("bind", priceTotal.toFixed(2));
    }

    var cartTable = $("#cartTable");

    getTotal();

    //为每一个勾选框指定单击事件
    $(cartTable).find(":checkbox").click(function() {
        //全选框单击
        if ($(this).hasClass("check-all")) {
            var checked = $(this).prop("checked");
            $(cartTable).find(".check-one").prop("checked", checked);
        }

        //如果手工一个一个的点选了所有勾选框，需要自动将“全选”勾上或是取消
        var items = cartTable.find("tr:gt(0)");
        $(cartTable).find(".check-all").prop("checked", items.find(":checkbox:checked").length == items.length);
        //设置结算按钮disabled属性
        $("#btn_settlement").attr("disabled", items.find(":checkbox:checked").length == 0);

        getTotal();
    });

    $(cartTable).find("tr:gt(0)").each(function() {
        var input = $(this).find(":text");
        
        
        $(input).keyup(function() {
            var val = parseInt($(this).val());
            if (isNaN(val) || (val < 1)) { $(this).val("1"); }
            getSubTotal($(this).parent().parent()); //tr element
            getTotal();
        });

        
        $(this).click(function() {
            var val = parseInt($(input).val());
            if (isNaN(val) || (val < 1)) { val = 1; }

            if ($(window.event.srcElement).hasClass("minus")) {
                if (val > 1) val--;
                input.val(val);
                getSubTotal(this);
            }
            else if ($(window.event.srcElement).hasClass("plus")) {
                if (val < 9999) val++;
                input.val(val);
                getSubTotal(this);
            }
            else if ($(window.event.srcElement).hasClass("delete")) {
                if (confirm("确定要从购物车中删除此产品？")) {
                    $(this).remove();
                }
            }
            getTotal();
        });
    });
});