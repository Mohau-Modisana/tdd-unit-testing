describe('The isWeekday function' , function(){

    it('should show return "false" if the parameter passed in is not a day of the week' , function(){
        assert.equal(isWeekday('Saturday'), false);
    });

    it('should show return "true" if the parameter passed in is a day of the week' , function(){
        assert.equal(isWeekday('Monday'), true);
    });


});