describe('The regCheck function' , function(){

    it('should show return "true" if a registration number is for GP plates' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

        it('should show return " false" if a registration number is not for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

        it('should show return "true" if a registration number is for L registration plates' , function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    });

        it('should show return "false" if a registration number is for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('5566 L', 'M'), false);
    });

        it('should show return "true" if a registration number is for EC registration plates' , function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });

        it('should show return " false" if a registration number is not for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });

        it('should show return "true" if a registration number is for MP registration plates' , function(){
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });

        it('should show return " false" if a registration number is not for GP, L, EC, MP registration plates' , function(){
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });


});