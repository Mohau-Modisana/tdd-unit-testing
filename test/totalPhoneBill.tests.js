describe('The totalPhoneBill function' , function(){

    it('should show the calculated total bill of R7.45' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));

    });

    it('should show the calculated total bill of R3.40' , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));

    });

    it('should show the calculated total bill of R1.30' , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));

    });

});