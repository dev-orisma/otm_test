var Auth = require('../pages/auth');
describe('Project', function() {
    var d = Date.now();
    var project_name = 'P-'+d;

    var edit_project_name = 'EDIT-'+d;

    it('Project', function () {
        browser.url('/');
        browser.waitForVisible('.head-bar button', 2000);
        browser.click('.head-bar button');
    });

    it('Add Project', function () {
        browser.waitForVisible('#addProject', 2000);
        browser.setValue('#project_add_name', project_name);
        browser.setValue('#detail_add_project', project_name + 'detail');
        browser.click('.modal-footer button');
    });

    it('edit Project', function () {  
     browser.waitForVisible('.head-bar button', 3000);
     $('.w100*='+project_name ).$(".editProjectBtn").click();
     browser.waitForVisible('#editProject',2000);
     browser.setValue('#project_edit_name', edit_project_name);
     browser.setValue('#detail_edit_project', edit_project_name + 'Detail');
     browser.click('.modal-footer button[type=submit]');
     browser.waitForVisible('.toast*=บันทึกโปรเจคสำเร็จ');
 });

    it('Assign Project', function () {  
     browser.waitForVisible('.head-bar button', 3000);
     $('.w100*='+edit_project_name ).$(".editProjectBtn").click();
     browser.waitForVisible('#editProject',2000);
     browser.click('#assign-btn');
     browser.waitForVisible('#user-list',2000);
     browser.click('.chooseUser*=Kong');
     browser.click('button*=OK');
     browser.waitForVisible('#editProject',2000);
     browser.saveScreenshot('./screenshorts/assign-project.png');
     browser.click('.modal-footer button[type=submit]');
     browser.waitForVisible('.toast*=บันทึกโปรเจคสำเร็จ');
 });

    it('Add Tag', function () {  
     browser.waitForVisible('.head-bar button', 3000);
     $('.w100*='+edit_project_name ).$(".editProjectBtn").click();
     browser.waitForVisible('#editProject',2000);
     browser.click('.manage-tags-btn');
     browser.waitForVisible('#manage-tag-popup');
     browser.setValue('#manage-tag-popup input','Tag 1');
     browser.submitForm('#manage-tag-popup form');
     browser.waitForVisible('.tagItem',2000);
     browser.saveScreenshot('./screenshorts/add-tag.png');
     browser.click('#manage-tag-popup .modal-footer button');
 });

    it('Open Project', function () {  
       browser.waitForVisible('.head-bar button', 3000);
       $('.w100*='+edit_project_name ).click();
       browser.waitForVisible('.project_name',2000);
       browser.saveScreenshot('./screenshorts/open-project.png');
   });

    it('Add Panel', function () {  
        browser.click('#add-card');
        browser.waitForVisible('#add-item',2000);
        browser.setValue('#input-card','Test Panel WDIO');
        browser.submitForm('#add-item form');
        browser.waitForVisible('.card-title*=Test Panel WDIO');
        browser.saveScreenshot('./screenshorts/add-panel.png');
    });

    it('Add Task', function () {  
        browser.click('#add-task');
        browser.waitForVisible('#taskBoxAdd',2000);
        browser.setValue('#taskBoxAdd input','Test Task WDIO');
        browser.submitForm('#taskBoxAdd form');
        browser.waitForVisible('.task-box*=Test Task WDIO');
        browser.saveScreenshot('./screenshorts/add-task.png');
    });


    it('Open Task', function () {  
        $('.task-box*=Test Task WDIO').$('a').click();
        browser.waitForVisible('#inner',2000);
        browser.saveScreenshot('./screenshorts/open-task.png');
    });
    it('Edit title task', function () {  
        browser.click('.title');
        browser.setValue('.title','Edit Test Task WDIO');
        browser.click('#inner');
        browser.saveScreenshot('./screenshorts/change-title-task.png');
    });
    it('Assign user', function () {  
        browser.click('#inner .dropdown-button');
        browser.waitForVisible('.dropdown-content',2000);
        $('li*=Kong').$('a').click();
        browser.waitForVisible('.dropdown-content',2000,true);
        browser.saveScreenshot('./screenshorts/assigned-task.png');
    });
    it('Add Todo', function () {  
        browser.click('#todoList .addSubject');
        browser.waitForVisible('.todoInputAdd',2000);
        browser.setValue('.todoInputAdd','Test Todo WDIO');
        browser.submitForm('#todoList form');
        browser.waitForVisible('#todoList .todoItem',2000);
        browser.saveScreenshot('./screenshorts/add-totdo.png');
    });
    it('Add Comment', function () {  
        browser.setValue('.inputComment','test comment');
        browser.submitForm('#inputComment form');
        browser.waitForVisible('.activity-detail*=test comment',2000);
        browser.saveScreenshot('./screenshorts/add-comment.png');
    });

    it('add tag to task', function () {  
        browser.click('#tags');
        browser.waitForVisible('#tagList',2000);
        browser.click('.tag-item .black_tag');
        browser.waitForVisible('#tags .tagColor',2000);
        browser.click('#inner');
        browser.saveScreenshot('./screenshorts/add-tag-task.png');
    });

    it('Change Status', function () {  
        browser.click('#menuPopup .green');
        browser.waitForVisible('#menuPopup .orange',2000);
        browser.saveScreenshot('./screenshorts/change-status-task.png');
        browser.click('#closePopup');
    });
    it('Back to Home', function () {  
        browser.click('#logo-container');
        browser.waitForVisible('.head-bar button', 2000);
    });

    it('delete Project', function () {  
        $('.w100*='+edit_project_name ).$(".editProjectBtn").click();
        browser.waitForVisible('#editProject',2000);
        browser.click('button*=Delete Project');
        browser.waitForVisible('.toast*=ลบโปรเจคสำเร็จ');
        // browser.saveScreenshot('./edit-project-4.png');
    });


});