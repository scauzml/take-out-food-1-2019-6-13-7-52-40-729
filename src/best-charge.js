//选择优惠菜品
let balaceItemNameArray=[];
function bestCharge(selectedItems) {
  let allOrder=getAllOrder(selectedItems);
  let allBill=getAllBill(allOrder);
  let receipt=createResult(allBill,allOrder)
  return receipt;
}
//单条商品订单
function Order(){
  
}
//账单
function Bill(){
 

}

//所有用户的订单汇总
function getAllOrder(selectedItems){
  let itemArray=loadAllItems();
  let orderArray=[];
  selectedItems.forEach(element => {
    let sItemsAndNum=element.split(" ");
    itemArray.forEach(e=>{
      if(sItemsAndNum[0]==e.id){
        let order=new Order();
         order.item=e;
         order.itemNum=Number.parseInt(sItemsAndNum[sItemsAndNum.length-1]);
         order.orderMoney=Number.parseFloat(e.price)*order.itemNum;
         orderArray.push(order);
      }
    })
  });
return orderArray;
}
//获取没有优惠的总额
function getTotalMoney(orderArray){
  let totalMoney=0;
  orderArray.forEach(e=>{
    totalMoney+=e.orderMoney;
  });
  return totalMoney
}
//每种优惠方式生成的bill
function getAllBill(orderArray){
  
   let totalMoney=getTotalMoney(orderArray);
   let salePromotion=loadPromotions();
   let billArray=[];
   salePromotion.forEach(e=>{
     let bill=new Bill();
     if(e.type=="满30减6元"){
       if(totalMoney>=30){
         bill.billMoney=totalMoney-6;
         bill.balance=6;
         bill.salePromotionType="满30减6元";
          billArray.push(bill);
       }
     }else if(e.type=="指定菜品半价"){
       let balance=0;
       orderArray.forEach(order=>{
         e.items.forEach(e2=>{
           if(e2==order.item.id){
             order.isDiscount=true;
             balaceItemNameArray.push(order.item.name);
             balance+=order.orderMoney/2;
           }
         })
       });
      
       if(balance>0){
         bill.balance=balance;
         bill.billMoney=totalMoney-balance;
         bill.salePromotionType="指定菜品半价";
         billArray.push(bill);
       }
     }
   });
   return billArray;
}
//创建结果
function createResult(billArray,orderArray){
  
  let totalMoney=getTotalMoney(orderArray);
  let receipt=`============= 订餐明细 =============\n`;
  orderArray.forEach(e=>{
     receipt+=`${e.item.name} x ${e.itemNum} = ${e.orderMoney}元\n`;
  });
  receipt+=`-----------------------------------\n`;
  let minType='';
  if(billArray.length>0){
    let bill=null;
    let minMoney=billArray[0].billMoney;
    minType=billArray[0].salePromotionType;
    billArray.forEach(bill=>{
      if(bill.billMoney<minMoney){
        minMoney=bill.billMoney;
        minType=bill.salePromotionType;
      }
    });
    billArray.forEach(bill1=>{
     if(minType==bill1.salePromotionType){
       bill=bill1;
     }
    });
    receipt+=`使用优惠:\n`;
    if(minType==("满30减6元")){
      receipt+=minType+`，`;
      receipt+=`省${bill.balance}元\n`;
      receipt+=`-----------------------------------\n`;
      receipt+=`总计：${bill.billMoney}元\n`+`===================================`;
    }else if(minType=="指定菜品半价"){
      receipt+=minType+`(`;
      balaceItemNameArray.forEach((bit,index,array)=>{
        if(index!=balaceItemNameArray.length-1){
         receipt+=bit+`，`;
        }else{
            receipt+=bit+`)，`;
        }
      });
      receipt+=`省${bill.balance}元\n`;
      receipt+=`-----------------------------------\n`;
      receipt+=`总计：${bill.billMoney}元\n`+`===================================`;
    }
  }else{
    receipt+=`总计：${totalMoney}元\n`+`===================================`;
  }
  return receipt;
}