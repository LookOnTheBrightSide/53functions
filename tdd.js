var passed = 0;
var failed = 0;
var totalTests = 0;
var assert = {

	equals: function(expectedResult, result){
				

				
				
				var rg = new RedOrGreen("myBox");

					if(result === expectedResult){ 
							
							passed ++;
							totalTests ++;
							rg.makeGreen();
					} else {	
							failed ++;
							totalTests ++;
							rg.makeRed();
					}
					 
				}
};
var TestMyCode = {
	run: function(testName, funcToBeExc){
		this.testName = testName;
		funcToBeExc(assert);
	}
};


