const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://192.168.56.5:9000',
       options : {
       'sonar.sources': '.',
       //'sonar.inclusions' : '.' // Entry point of your code
       }
     }, () => {});
