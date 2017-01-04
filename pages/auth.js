function Auth () {
}

Auth.prototype.login = function () {
	browser.url('/login');
	browser.waitForVisible('#email', 2000);
	browser.setValue('#email', 'nuttanun@orisma.com');
	browser.setValue('#password', 'P@ssw0rd');
	browser.submitForm('form');
};

Auth.prototype.logout = function () {
	browser.url('/logout');
	browser.getTitle().should.be.equal('Login Page');
}


module.exports = new Auth();