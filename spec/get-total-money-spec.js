describe('get total money', function () {

    it('should generate best charge when best is 指定菜品半价', function() {
      let inputs = [
          {item:{
                id: 'ITEM0001',
                name: '黄焖鸡',
                price: 18.00     
          },
          itemNum:1,
          orderMoney:18.00

        },
        {item:{
            id: 'ITEM0001',
            name: '黄焖鸡',
            price: 18.00     
      },
      itemNum:1,
      orderMoney:18.00
      
    },
    {item:{
        id: 'ITEM0001',
        name: '黄焖鸡',
        price: 18.00     
  },
  itemNum:1,
  orderMoney:18.00
  
}
      ];
      let summary = getTotalMoney(inputs)
      let expected = 54
      expect(summary).toEqual(expected)
    });
  
   
  
  });