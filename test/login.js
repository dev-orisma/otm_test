
describe('Login', function() {
    it('Open Page', function () {
        browser.url('/');
        browser.getTitle().should.be.equal('CIMB');
        browser.waitForVisible('.text*=เข้าสู่ระบบเพื่อเปิดใช้บัตร');
    });

    it('Click Login', function () {
        browser.click('.start_btn');
        browser.waitForVisible('.red*=OTP');
    });


    it('Form [Step 1] - Phone number Validate Wrong', function () {
        browser.click('#step1_tel');
        browser.execute('$("#step1_tel").val("0");');
        browser.click('#step1_id_card');
        browser.waitForVisible('.alert*=กรุณาระบุตัวเลข 10 หลัก');
    });

    it('Form [Step 1] - Phone number Validate Success', function () {
     browser.click('#step1_tel');
     browser.execute('$("#step1_tel").val("000 - 000 - 0000");');
     browser.execute('tempTelephone=["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];');
 });

    it('Form [Step 1] - ID Card Validate Wrong', function () {
        browser.click('#step1_id_card');
        browser.execute('$("#step1_id_card").val("0");');
        browser.click('#step1_captcha');
        browser.waitForVisible('.alert*=กรุณาระบุตัวเลข 13 หลัก');
    });

    it('Form [Step 1] - ID Card Validate Success', function () {
     browser.click('#step1_id_card');
     browser.execute('$("#step1_id_card").val("0 0000 00000 00 0");');
     browser.execute('tempIdCard=["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];');
 });

    it('Form [Step 1] - Captcha Validate Wrong', function () {
        browser.click('#step1_captcha');
        browser.execute('$("#step1_captcha").val("0");');
        browser.click('#step1_id_card');
        browser.waitForVisible('.alert*=กรุณาระบุตัวอักษรตามภาพ');
    });

    it('Form [Step 1] - Captcha Validate Success', function () {
     browser.click('#step1_captcha');
     browser.keys('gm6bm');
 });

    it('Form [Step 1] Click Submit', function () {
        browser.click('.button*=ขอรับ OTP');
        browser.waitForVisible('#confirm');
    });

    it('Form OTP [Step 1] - Validate OTP Wrong', function () {
     browser.click('#step1_otp');
     browser.execute('$("#step1_otp").val("0")');
     browser.execute("checkActiveBtnStep1Confirm();");
     browser.click('#confirm');
     browser.waitForVisible('.alert*=กรุณาระบุตัวเลข 6 หลัก');
 });

    it('Form OTP [Step 1] - Validate OTP Success', function () {
        browser.click('#step1_otp');
        browser.execute('$("#step1_otp").val("000000")');
        browser.execute("checkActiveBtnStep1Confirm();");
    });

    it('Form OTP [Step 1] - Submit OTP', function () {
        browser.click('#confirm');
        browser.waitForVisible('.header_text*=กรุณากรอกข้อมูลเพื่อเปิดบัตร');
    });

//=================== Step 2 ======================//
it('Form Dabit Number [Step 2]  - Card Validate wrong', function () {
    browser.execute('$("#step2_card_number").val("0");');
    browser.click("#step2_card_number");
    browser.click('.btn_step3');
    browser.waitForVisible('.alert*=กรุณาระบุตัวเลข 16 หลัก');
});
it('Form Dabit Number [Step 2] - Card Validate success', function () {
    browser.click("#step2_card_number");
    browser.execute('$("#step2_card_number").val("0000 0000 0000 0000");');
    browser.execute('tempCardNo=["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];');
});

it('Form Dabit Number [Step 2] - Date Validate success', function () {
   browser.execute('tempBDay=10;tempBMonth=1;tempBYear=1990;');
   browser.execute('checkActiveBtnStep2();displayCard();');
});

it('Form Dabit Number [Step 2] - Submit', function () {
   browser.click('.btn_step3');
   browser.waitForVisible('.btn_send_data');
});
//=================== Step 2 ======================//

it('Form Dabit Pin [Step 3] - Init Pin Validate Wrong', function () {
    browser.click('#init_pin');
    browser.execute('$("#init_pin").val("0");');
    browser.execute('checkActiveBtnStep3();');
    browser.click('.btn_send_data');
    browser.waitForVisible('.alert*=กรุณาระบุตัวเลข 6 หลัก');
});

it('Form Dabit Pin [Step 3] - Init Pin Validate Success', function () {
 browser.execute('$("#init_pin").val("000000");');
 browser.execute('checkActiveBtnStep3();');
});
it('Form Dabit Pin [Step 3] - Pin Validate Wrong', function () {
    browser.click('#pin1');
    browser.execute('$("#pin1").val("1");');
    browser.click('.btn_send_data');
    browser.execute('checkActiveBtnStep3();');
    browser.waitForVisible('.alert*=กรุณาระบุตัวเลข 6 หลัก');
});

it('Form Dabit Pin [Step 3] - Pin Validate Success', function () {
    browser.click('#pin1');
    browser.execute('$("#pin1").val("111111");');
    browser.execute('checkActiveBtnStep3();');
});
it('Form Dabit Pin [Step 3] - Pin2 Validate Wrong', function () {
 browser.execute('$("#pin2").val("1");');
 browser.execute('checkActiveBtnStep3();');
 browser.click('.btn_send_data');
 browser.waitForVisible('.alert*=กรุณาระบุตัวเลข 6 หลัก');
});

it('Form Dabit Pin [Step 3] - Pin2 Validate Success', function () {
 browser.execute('$("#pin2").val("111111");');
 browser.execute('checkActiveBtnStep3();');
});

it('Form Dabit Pin [Step 3] - Pin Submit', function () {
    browser.click('.btn_send_data');
    browser.waitForVisible('.success_msg');
});

it('Show Success Message [Click Button "CIMB Click"]', function () {
    var btn = $('a[href="https://www.cimbclicks.in.th/ibkthai/InstantReg_ATM/"]');
    btn.click();
    var tabIds = browser.getTabIds();
    browser.switchTab(tabIds[1]);
    browser.getTitle().should.be.equal('Welcome To CIMB Bank');
});

it('Show Success Message [Click Button "Back to home"]', function () {
    var tabIds = browser.getTabIds();
    browser.switchTab(tabIds[1]);
    browser.window();
    browser.switchTab(tabIds[0]);
    browser.click('.home_btn');
    browser.getTitle().should.be.equal('CIMB'); 
});

});