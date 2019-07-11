describe('get all order', function () {

    it('should answer is  ', function() {
        let inputs = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
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
      let summary = getAllOrder(inputs)
      let expected = [];
      expected.push(order);
      expected.push(order1);
      expected.push(order2);

      expect(summary).toEqual(expected)
    });
  
   
  
  });