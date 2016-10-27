'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe("ondetemjogo", function() {

  it('should navigate to login', function() {
    browser.get('#/index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/index.html");
  });
/*
  it('should navigate to signup', function() {
    browser.get('#/signup');
    expect(browser.getLocationAbsUrl()).toMatch("/signup");
  });*/

});
