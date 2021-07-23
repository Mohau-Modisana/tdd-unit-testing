describe('The fromWhere function' , function(){

    it('should return name of town "Bellville" from the car reg CY' , function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });

    it('should return "Paarl" from the car reg CJ' , function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });

    it('should return "Cape Town" from the car reg CA' , function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });

    it('should return "Some other place!" from the car reg CC' , function(){
        assert.equal(fromWhere('CC'), 'Some other place!');
    });

});