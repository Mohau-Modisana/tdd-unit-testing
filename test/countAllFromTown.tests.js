describe('The countAllFromTown function' , function(){

    it('should return number of registration numbers in the string that is for that Stellies' , function(){
        var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
//fromStellies should contains
        assert.equal(fromStellies, 3)

    });

    it('should return number of registration numbers in the string that is for that Kuilsriver' , function(){
        
        var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');

        assert.equal(fromKuilsriver, 1)
    });


});