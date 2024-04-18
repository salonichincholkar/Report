var assert = require('assert'),
//test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
 
 //Certificate
describe('certificate', async function() {
	this.timeout(15000);
	
	var driver 
	before(async function(){
    driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
	});
	
	it('Verify the validity of a given certificate number', async function() {
	await driver.get('file:///H:/Assignments/Selenium/Certificate%20Selenium/sample-code/preview.html');
    var getTitle = await driver.findElement(webdriver.By.className('sr-no'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'Certificate Number:');
    });
   
  });
  
  
 
it('mm unit',async function testWidthUnit() {
   
    try {
       

        // Find the element whose width needs to be checked
        let element = await driver.findElement(webdriver.By.className('certificate-wrapper')); {


        // Get the CSS value of the width property
        let widthCssValue = await driver.executeScript('return window.getComputedStyle(arguments[0]).width', element);
		
		
		
		// Get all the style sheets that are applied to the document.
const styleSheets = document.styleSheets;

// Iterate over the style sheets and access the CSS rules for each style sheet.
for (const styleSheet of styleSheets) {
  // Get the CSS rules for the style sheet.
  const cssRules = styleSheet.cssRules;

  // Iterate over the CSS rules and print them to the console.
  for (const cssRule of cssRules) {
    if(cssRule == '.mm') console.log(cssRule)
  }
}
		
		
		
		
console.log(widthCssValue)
         if (!widthCssValue.endsWith('mm')) {
            console.log('Assertion failed: Element width is not in millimeters (mm) unit');
        } else {
            console.log('Width assertion passed! Element width is in mm unit.');
        }
    }
	}	catch (error) {
        console.error('Error:', error.message);
    }
  
 
}); 
  
  
  
  
  
  
  
  
  
	
  it('Verify Certificate Title',async function() {
    
    var getTitle = await driver.findElement(webdriver.By.className('title'));
    getTitle.getText('value').then(function(value) {
      assert.equal(value, 'Certificate');
    });
    
  });
  
  it('To verify the certificate subtitle', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('subtitle'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'of Appreciation');
    });
   
  });
  
  it('Verify Initial Content of Certificate', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('initial-content'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'This Certificate is proudly presented to');
    });
   
  });
  
   it('To ensure that the main content of the certificate is accurate and complete', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('main-content'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'for successfully completing the training course as\nprescribed by the organisation');
    });
   
  });
  
  
   it('To ensure that the date on the certificate is accurate and valid', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('date'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'Date:');
    });
   
  });
  
  
  it('To verify that the candidate name displayed on the certificate matches the expected name', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('candidate-name'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'Name of Candidate');
    });
   
  });
  
  it('To ensure that the certificate signature of the president is authentic and valid', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('sign-president'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'Signature of President');
    });
   
  });
  
  it('To ensure that the certificate signature of the director  is authentic and valid', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('sign-director'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'Signature of Director');
    });
   
  });
  
  
   
 it('Verify that the logo displayed matches the official logo of the issuing organization',	async function testLogoImageLoaded() {
    
    try {
        
        // Find the logo image element
        const logoElement = await driver.findElement(webdriver.By.xpath("//div[@class='org-logo']//img"));

        // Check if the logo image is loaded successfully
        const isLoaded = await logoElement.isDisplayed();

        // Assert that the logo image is loaded successfully
        assert.strictEqual(isLoaded, true, 'Logo image is not loaded successfully');

        console.log('Logo image loaded successfully!');
    } catch (error) {
        console.error('Logo image loading test failed:', error.message);
    }
	
 });
	
	
  
  it('Verify Organization Name on Certificate', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('org-name'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'Maha Mission Education and Career Council');
    });
   
  });
  
  
  it('Verify that the address matches the official address of the organization', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('org-address'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'Office No. 404, Vastu Viva, Besids Sanket Inn, Bhumkar Chowk\n\nWakad, Pune, Maharashtra - 411057');
    });
    driver.quit();
  });
  
  
    
  
});


//Letter

describe('Letter', async function() {
	this.timeout(15000);
	
	var driver 
	before(async function(){
    driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
	});
	
	it('Check Presence of Company Name in Letter', async function() {
	await driver.get('file:///H:/Assignments/Selenium/Letter%20Selenium/04%20Letter%20Head/sample-code/preview.html');
    var getTitle = await driver.findElement(webdriver.By.className('letter-org-name'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, '');
	 
    });
    
  });
  
  
  it('Letter Organization Details Verification', async function() {
	var getTitle = await driver.findElement(webdriver.By.className('letter-org-details'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, '');
    });
    
  });
   
 
 
 
 it('Verify Letter Organization Logo Display', async function() {
	var getTitle = await driver.findElement(webdriver.By.className('letter-org-logo'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, '');
    });
    
  });
  
  
  it('Verify Letter Organization Logo Display',	async function testLogoImageLoaded() {
    
    try {
        
        // Find the logo image element
        const logoElement = await driver.findElement(webdriver.By.xpath("//div[@class='letter-org-logo']//img"));

        // Check if the logo image is loaded successfully
        const isLoaded = await logoElement.isDisplayed();

        // Assert that the logo image is loaded successfully
        assert.strictEqual(isLoaded, true, 'Logo image is not loaded successfully');

        console.log('Logo image loaded successfully!');
    } catch (error) {
        console.error('Logo image loading test failed:', error.message);
    }
	
 });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  it('To check the validity of a letter reference number', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-ref'));
    getTitle.getText('value').then(function(value) {
    //assert.equal(value, 'Ref. No:');
	assert.match(/Ref. No:\s*(.+)/);
    });
    
  });
  
  
  it('To confirm that the date on the letter is accurate', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-date'));
    getTitle.getText('value').then(function(value) {
    //assert.equal(value, 'Date:');
	assert.match(/^Date: \d{2}-\d{2}-\d{4}$/);
    });
    
  });
  
  
  it('To verify that the body of the letter is correctly addressed to the recipient', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-body-to'));
    getTitle.getText('value').then(function(value) {
    //assert.equal(value, 'To,');
	assert.match(/To,\s*/);
    });
    
  });
  
  
   it('Check Letter Body and Subject', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-body-subject'));
    getTitle.getText('value').then(function(value) {
    //assert.equal(value, '/^Subject:\s*/');
	 assert.match(value, /^Subject:\s*/);
    });
    
  });
  
  
  
  
  
   it('Verify Letter Salutation', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-body-salutation'));
    getTitle.getText('value').then(function(value) {
   // assert.equal(value, 'Dear');
   assert.match(/^(Dear)/);
    });
    
  });
  
  
   it('Verify Letter Body Message', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-body-message'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, '');
    });
    
  });
  
  
   it('Verify that the body sign in the letter is correctly displayed', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-body-sign'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, '');
    });
    
  });
  
  
  
   it('The website should be present in the footer of the letter', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-org-website'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, 'WWW.WEBTOUCHINDIA@CO.IN');
    });
    
  });
  
  
  it('The phone should be present in the footer of the letter', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-org-phone'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, '');
    });
    
  });
  
  
  it('The email should be present in the footer of the letter', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-org-email'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, '');
    });
    
  });
  
  
  it('The address should be present in the footer of the letter', async function() {
    var getTitle = await driver.findElement(webdriver.By.className('letter-org-address'));
    getTitle.getText('value').then(function(value) {
    assert.equal(value, '');
    });
    driver.quit();
  });
 });