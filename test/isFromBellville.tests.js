describe('The isFromBellville function' , function(){

    it('should show return true if a registration number is for Bellville (CY)' , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });

    it('should show return false if a registration number is not for Bellville (CY)' , function(){
        assert.equal(isFromBellville('CJ 123'), false);
    });


});