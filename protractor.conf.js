let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    framework: 'jasmine',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['./specs/*spec.js'],

    capabilities: {

      'browserName': 'chrome',

      chromeOptions: {
        args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
      }
    },

    onPrepare() {
      jasmine.getEnv().addReporter(new SpecReporter({
         displayFailuresSummary: true,
         displayFailedSpec: true,
         displaySuiteNumber: true,
         displaySpecDuration: true

       }));

      var jasmineReporters = require('jasmine-reporters');
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
          consolidateAll: true,
          savePath: './',
          filePrefix: 'xmlresults'
      }));
     },

    //HTMLReport called once tests are finished
    onComplete: function() {
      var browserName, browserVersion;
      var capsPromise = browser.getCapabilities();

      capsPromise.then(function (caps) {
        browserName = caps.get('browserName');
        browserVersion = caps.get('version');
        platform = caps.get('platform');

        var HTMLReport = require('protractor-html-reporter-2');

        testConfig = {
            reportTitle: 'Protractor Test Execution Report',
            outputPath: './',
            outputFilename: 'Relatório de execução',
            screenshotPath: './screenshots',
            testBrowser: browserName,
            browserVersion: browserVersion,
            modifiedSuiteName: false,
            screenshotsOnlyOnFailure: true,
            testPlatform: platform
        };
        new HTMLReport().from('xmlresults.xml', testConfig);
    });
    
    }
  };