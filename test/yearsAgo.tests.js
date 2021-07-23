describe('The yearsAgo function' , function(){

    it('should show return how many years ago that year is from the current year of 2021' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
    });

    it('should show return how many years ago that year is from the current year of 2021' , function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });


});