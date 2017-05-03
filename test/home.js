describe('Home Page', function() {
    it('Open Page', function () {
        browser.url('/');
        browser.getTitle().should.be.equal('CIMB');
        browser.waitForVisible('.text*=เข้าสู่ระบบเพื่อเปิดใช้บัตร');
    });
    it('Click call number', function () {
        browser.waitForVisible('a[href*="tel:026267777"');
    });
    it('Test 404 page', function () {
        browser.url('/xxx404');
        browser.getTitle().should.be.equal("404 Error, the page you're looking for cannot be found");
    });

});