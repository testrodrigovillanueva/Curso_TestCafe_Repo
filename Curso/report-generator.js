const report = require('multiple-cucumber-html-reporter');
const path = require('path');
const projectName = path.basename(__dirname);
const projectVersion = process.env.npm_package_version;
const reportGenerationTime = new Date().toISOString();
report.generate({
  reportName: 'TestCafé Report',
  jsonDir: 'C:/Users/Rodrigo/Documents/VIDEOS_UDEMY_ES/TESTCAFE_CURSO2/Curso/tests/jsonReportes',
  reportPath: 'C:/Users/Rodrigo/Documents/VIDEOS_UDEMY_ES/TESTCAFE_CURSO2/Curso/tests/cucumber_reportes',
  openReportInBrowser: true,
  disableLog: true,
  displayDuration: true,
  displayReportTime: true,
  durationInMS: true,
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: `${projectName}` },
      { label: 'Release', value: `${projectVersion}` },
      { label: 'Report Generation Time', value: `${reportGenerationTime}` },
    ],
  },
});