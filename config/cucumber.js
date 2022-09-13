const common = {
    format: ['summary', 'json:./reports/json/cucumber_report.json', 'html:./reports/html/cucumber_report.html'],
    publishQuiet: true,
  }

  module.exports = {
    default: {
      ...common,
    }
  };