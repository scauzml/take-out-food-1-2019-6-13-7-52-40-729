describe('get all bill', function () {

    it('should answer is  ', function() {
        let inputs = [];

       let order=new Order();
       order.item={
        id: 'ITEM0001',
        name: '黄焖鸡',
        price: 18.00
      };
       order.itemNum=1;
       order.orderMoney=18;
       let order1=new Order();
       order1.item={
        id: 'ITEM0013',
        name: '肉夹馍',
        price: 6.00
      };
       order1.itemNum=2;
       order1.orderMoney=12;
       let order2=new Order();
       order2.item= {
        id: 'ITEM0022',
        name: '凉皮',
        price: 8.00
      };
       order2.itemNum=1;
       order2.orderMoney=8;
       inputs.push(order);
       inputs.push(order1);
       inputs.push(order2);
      let summary = getAllOrder(inputs)
      let expected=[];
       
     

      expect(summary).toEqual(expected)
    });
  
   
  
  });