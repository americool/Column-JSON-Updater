const { All_Payer_ACO_Practice_Scorecard_Testing_20180427 } = require('./All_Payer_ACO_Practice_Scorecard_Testing_20180427.js');
const { Multi_Page_V14 } = require('./Multi_Page_V14.js');
const { bmc_scorecard } = require('./bmc_scorecard.js');
const { single_payer_provider_scorecard } = require('./single_payer_provider_scorecard');
var fs = require('fs');


const converter = (config) => {
  // parsedConfig = JSON.parse(config);
  config.pages = config.pages.map((page) => {
    page.cards = page.cards.map((card) => {
      if (card.columns){
        card.columns = card.columns.map((column) => {
          return columnRebuilder(column);
        });
      }
      return card;
    });
    return page;
  });
  return config;
}

const columnRebuilder = (column) => {
  const newColumn = {};
  if (column.key.includes('Compare')) {
    newColumn.calc = column.key.replace('Compare', '');
    newColumn.derivation = 'Comparison';
    newColumn.comparisonType = 'networkAverage';
  } else if (column.key.includes('PercentDiff')) {
    newColumn.calc = column.key.replace('PercentDiff', '');
    newColumn.derivation = 'PercentDiff';
    newColumn.comparisonType = 'networkAverage';
  } else {
    newColumn.calc = column.key;
    newColumn.derivation = '';
  }

  newColumn.calc = newColumn.calc.replace('tcoc', 'cost')
  newColumn.calc = newColumn.calc.replace('edAdmits', 'edVisits')
  newColumn.calc = newColumn.calc.replace('ipVisits', 'ipStays')
  newColumn.calc = newColumn.calc.replace('fills', 'scripts')
  newColumn.label = column.label;
  newColumn.style = column.style;
  return newColumn;
}

const allPayer = JSON.stringify(converter(All_Payer_ACO_Practice_Scorecard_Testing_20180427));
const multiPage = JSON.stringify(converter(Multi_Page_V14));
const bmcScore = JSON.stringify(converter(bmc_scorecard));
const sppc = JSON.stringify(converter(single_payer_provider_scorecard));
// newConfig.pages.map((page) => {
//   page.cards.map((card) => {
//     if (card.columns){
//       card.columns.map((column) => {
//         console.log(column);
//       });
//     }
//   });
// });

fs.writeFile('All_Payer_ACO_Practice_Scorecard_Testing_20180427.json', allPayer, 'utf8', null);
fs.writeFile('Multi_Page_V14.json', multiPage, 'utf8', null);
fs.writeFile('bmc_scorecard.json', bmcScore, 'utf8', null);
fs.writeFile('single_payer_provider_scorecard.json', sppc, 'utf8', null);
