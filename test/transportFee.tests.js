describe('The transportFee function' , function(){

    it('should show return of R20 for price of working morning shift' , function(){
        assert.equal(transportFee('morning'), 'R20');

    });

    it('should show return of R10 for price of working afternoon shift' , function(){
        assert.equal(transportFee('afternoon'), 'R10');

    });

    it('should show return of free for price of working night shift' , function(){

        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });

});