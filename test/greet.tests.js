describe('The Greet function' , function(){

    it('should show return "Hello, Pule" when I greet Pule' , function(){
        assert.equal('Hello, Pule', greet('Pule'));
    });

    it('should show return "Hello, Bob" when I greet Bob' , function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
    });

    it('should show return "Hello, Sam" when I greet Sam' , function(){
        assert.equal(greet('Sam'), 'Hello, Sam');
    });


});