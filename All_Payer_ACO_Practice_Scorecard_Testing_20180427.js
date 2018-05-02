exports.All_Payer_ACO_Practice_Scorecard_Testing_20180427 = 
{
  "bookFilters": [
    {
      "exclude": true,
      "field": "pcpNPI",
      "filter": [
        "Unknown"
      ],
      "id": "726"
    },
    {
      "exclude": false,
      "field": "planPayer",
      "filter": [
        "Aetna",
        "BCBS",
        "Cigna",
        "Medicare",
        "BCBS-SR",
        "Cigna MA"
      ],
      "id": "727"
    }
  ],
  "multiPageTextObjects": [
    {
      "content": "<div style=\"width:100%;margin:0;padding:0;text-align:center;\">\n    <img src='https://firebasestorage.googleapis.com/v0/b/image-store-26e00.appspot.com/o/arcadiaio-text-black.png?alt=media&token=b74ef5b0-0683-4f3a-9acc-ad874228b51c' style='width:120px;' />\n</div>\n<p style=\"margin:0;text-align:center;width:100%;\">&copy; 2018 Arcadia.IO</p>",
      "dimensions": {
        "height": "2",
        "width": "30"
      },
      "excludedPages": [
        "1"
      ],
      "position": {
        "x": "2",
        "y": "40"
      },
      "id": "728"
    },
    {
      "content": "<div style='width:50%; margin-top:.4em; float:left;'>\n    <h2 style='margin:0;padding:0;'>{{bookName}}</h2>\n    <h2 style='margin:0;margin-top:8px;padding:0;color:rgba(0,0,0,.7)'>Inpatient Detail</h2>\n</div>\n<div style='width:50%; margin-top:.4em; float:left; text-align: right;'>\n    <img src='https://firebasestorage.googleapis.com/v0/b/image-store-26e00.appspot.com/o/arcadiaio-text-black.png?alt=media&token=b74ef5b0-0683-4f3a-9acc-ad874228b51c' style='width:240px;' />\n</div>",
      "dimensions": {
        "height": "2",
        "width": "30"
      },
      "excludedPages": [
        "1"
      ],
      "position": {
        "x": "2",
        "y": "2"
      },
      "id": "729"
    }
  ],
  "pages": [
    {
      "pageNumber": true,
      "cards": [
        {
          "cardFilters": [

          ],
          "columns": [

          ],
          "configuration": [

          ],
          "defaultSort": {

          },
          "groupers": [

          ],
          "cardName": "textObject",
          "cardTitle": "Cover page",
          "layout": {
            "dimensions": {
              "height": "40",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "2"
            }
          },
          "textObjectContent": "<div style=\"width:100%;text-align:center; margin-top:300px;\">\n    <img src=\"https://firebasestorage.googleapis.com/v0/b/image-store-26e00.appspot.com/o/arcadiaio-text-with-mountain-tall-teal-hpad-3060x1300.png?alt=media&token=0b5a4a14-a65a-4e5e-b4c2-d1f00098bd82\" style=\"width:400px\" />\n    <h2 style=\"font-size: 3em; margin-top: 200px;\">All Payer ACO Practice Scorecard</h2>\n    <p style=\"font-size: 2em; margin-top: 80px;\">Confidential. Not for Redistribution.</p>\n</div>",
          "secondaryGroupers": [

          ],
          "cardId": "1-1"
        }
      ],
      "title": "Cover Page"
    },
    {
      "pageNumber": true,
      "cards": [
        {
          "cardFilters": [

          ],
          "columns": [

          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": null,
            "order": null
          },
          "groupers": [

          ],
          "cardName": "textObject",
          "cardTitle": "Header Text",
          "layout": {
            "dimensions": {
              "height": "2",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "2"
            }
          },
          "textObjectContent": "<div style='width:50%; margin-top:.4em; float:left;'>\n    <h2 style=\"margin:0;padding:0;\">All Payer ACO Practice Scorecard</h2>\n    <h2 style='margin:0;margin-top:8px;padding:0;color:rgba(0,0,0,.7)'>Summary Statistics</h2>\n</div>\n<div style='width:50%; margin-top:.4em; float:left; text-align: right;'>\n    <img src='https://firebasestorage.googleapis.com/v0/b/image-store-26e00.appspot.com/o/arcadiaio-text-black.png?alt=media&token=b74ef5b0-0683-4f3a-9acc-ad874228b51c' style='width:240px;' />\n</div>",
          "secondaryGroupers": [

          ],
          "cardId": "2-1"
        },
        {
          "cardFilters": [

          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Payer",
              "id": "501",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "activeMembers",
              "label": "Active Mbrs",
              "id": "502"
            },
            {
              "key": "cumMembers",
              "label": "Cum. Members",
              "id": "503"
            },
            {
              "key": "mm",
              "label": "Mbr Months",
              "id": "504"
            },
            {
              "key": "tcoc",
              "label": "Cost",
              "id": "505"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "506"
            },
            {
              "key": "budget",
              "label": "Budget",
              "id": "507"
            },
            {
              "key": "riskAdjBudget",
              "label": "Risk Adj Budget",
              "id": "508"
            },
            {
              "key": "diffFromRiskAdjBudget",
              "label": "Diff to Budget",
              "id": "509"
            },
            {
              "key": "percentDiffFromRiskAdjBudget",
              "label": "% Diff to Budget",
              "id": "510"
            },
            {
              "key": "startingRisk",
              "label": "Start Risk",
              "id": "511"
            },
            {
              "key": "currentRisk",
              "label": "Cur. Risk",
              "id": "512"
            },
            {
              "key": "currentRiskCompare",
              "label": "Bench Cur. Risk",
              "id": "513"
            },
            {
              "key": "rateOfChangeInRisk",
              "label": "Rate of Change",
              "id": "514"
            },
            {
              "key": "rateOfChangeInRiskCompare",
              "label": "Bench Rate of Change",
              "id": "515"
            }
          ],
          "configuration": [
            {
              "name": "contractName",
              "value": "ACO",
              "id": "500"
            }
          ],
          "defaultSort": {
            "columnKey": "groupName",
            "order": "asc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "planPayer",
              "name": "Payer",
              "id": "499",
              "rank": 1
            }
          ],
          "cardName": "costCategory",
          "cardTitle": "Cost and Budget by Product",
          "layout": {
            "dimensions": {
              "height": "8",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "table",
          "secondaryGroupers": [

          ],
          "displayTotals": true,
          "cardId": "2-2"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "measure",
              "filter": [
                "Depression Screen",
                "Tobacco Cessation",
                "Influenza Imm",
                "Breast Cancer Screening",
                "Colorectal Cancer Screening",
                "Pneumo Vaccine",
                "Colo Cancer Screen"
              ],
              "id": "517"
            }
          ],
          "columns": [
            {
              "key": "measure",
              "label": "Measure",
              "id": "519"
            },
            {
              "key": "period",
              "label": "Date",
              "id": "520"
            },
            {
              "key": "denominator",
              "label": "Denom",
              "id": "521"
            },
            {
              "key": "numerator",
              "label": "Num",
              "id": "522"
            },
            {
              "key": "performance",
              "label": "Rate",
              "id": "523"
            },
            {
              "key": "target1",
              "label": "Target",
              "id": "524"
            },
            {
              "key": "performanceCompare",
              "label": "Bench",
              "id": "525"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "measure",
            "order": "asc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "measure",
              "name": "Measure",
              "id": "518",
              "rank": 1
            }
          ],
          "cardName": "measures",
          "cardTitle": "Quality Measures",
          "layout": {
            "dimensions": {
              "height": "14",
              "width": "18"
            },
            "position": {
              "x": "2",
              "y": "14"
            }
          },
          "visualState": "figure",
          "secondaryGroupers": [

          ],
          "cardId": "2-3"
        },
        {
          "cardFilters": [
            {
              "exclude": true,
              "field": "condition",
              "filter": [
                "Demographics"
              ],
              "id": "527"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Condition",
              "id": "531",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "members",
              "label": "Mbrs",
              "id": "532"
            },
            {
              "key": "prevalence",
              "label": "Prev",
              "id": "533"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "534"
            },
            {
              "key": "prevalenceCompare",
              "label": "Bench Prev",
              "id": "535"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "536"
            }
          ],
          "configuration": [
            {
              "name": "riskAlg",
              "value": "HCC",
              "id": "529"
            },
            {
              "name": "rows",
              "value": "20",
              "id": "530"
            }
          ],
          "defaultSort": {
            "columnKey": "prevalence",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "condition",
              "name": "Condition",
              "id": "528",
              "rank": 1
            }
          ],
          "cardName": "conditions",
          "cardTitle": "Top 20 Conditions",
          "layout": {
            "dimensions": {
              "height": "14",
              "width": "11"
            },
            "position": {
              "x": "21",
              "y": "14"
            }
          },
          "visualState": "table",
          "secondaryGroupers": [

          ],
          "maxRows": {
            "number": "10",
            "allOtherRows": true
          },
          "displayTotals": true,
          "cardId": "2-4"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "IP Behavioral Health",
                "IP SNF",
                "IP Maternity",
                "IP Med (Adult)",
                "IP Surg (Adult)"
              ],
              "id": "538"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Svc Category",
              "id": "540",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Events",
              "id": "541"
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "542"
            },
            {
              "key": "costPMPM",
              "label": "PMPM",
              "id": "543"
            },
            {
              "key": "costPMPMCompare",
              "label": "Bench PMPM",
              "id": "544"
            },
            {
              "key": "costPMPMPercentDiff",
              "label": "% Diff PMPM",
              "id": "545"
            },
            {
              "key": "eventsPerK",
              "label": "Events / K",
              "id": "546"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Event",
              "id": "547"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "costGroup1",
            "order": "asc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "rptGrouper2",
              "name": "Service Category",
              "id": "539",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Inpatient Utilization",
          "layout": {
            "dimensions": {
              "height": "10",
              "width": "14"
            },
            "position": {
              "x": "2",
              "y": "29"
            }
          },
          "visualState": "table",
          "secondaryGroupers": [

          ],
          "cardId": "2-5"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "Clinic Visits",
                "ED Visits",
                "Home Health",
                "Lab",
                "Medical Pharmacy",
                "Observation",
                "OP Procedures",
                "PCP Visits",
                "PT/OT/ST",
                "Radiology",
                "Specialist Visits"
              ],
              "id": "549"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Svc Category",
              "id": "551",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Events",
              "id": "552"
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "553"
            },
            {
              "key": "costPMPM",
              "label": "PMPM",
              "id": "554"
            },
            {
              "key": "costPMPMCompare",
              "label": "Bench PMMPM",
              "id": "555"
            },
            {
              "key": "costPMPMPercentDiff",
              "label": "% Diff PMPMm",
              "id": "556"
            },
            {
              "key": "eventsPerK",
              "label": "Events / K",
              "id": "557"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Event",
              "id": "558"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "costGroup1",
            "order": "asc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "rptGrouper2",
              "name": "Service Category",
              "id": "550",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Outpatient Utilization",
          "layout": {
            "dimensions": {
              "height": "10",
              "width": "14"
            },
            "position": {
              "x": "18",
              "y": "29"
            }
          },
          "visualState": "table",
          "secondaryGroupers": [

          ],
          "cardId": "2-6"
        },
        {
          "cardFilters": [

          ],
          "columns": [

          ],
          "configuration": [

          ],
          "defaultSort": {

          },
          "groupers": [

          ],
          "cardName": "textObject",
          "cardTitle": "Footer",
          "layout": {
            "dimensions": {
              "height": "2",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "41"
            }
          },
          "textObjectContent": "<div style=\"width:100%;margin:0;padding:0;text-align:center;\">\n    <img src='https://firebasestorage.googleapis.com/v0/b/image-store-26e00.appspot.com/o/arcadiaio-text-black.png?alt=media&token=b74ef5b0-0683-4f3a-9acc-ad874228b51c' style='width:120px;' />\n</div>\n<p style=\"margin:0;text-align:center;width:100%;\">&copy; 2018 Arcadia.IO</p>",
          "secondaryGroupers": [

          ],
          "cardId": "2-7"
        }
      ],
      "title": "Summary Page"
    },
    {
      "pageNumber": true,
      "cards": [
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "Cigna",
                "BCBS",
                "Aetna"
              ],
              "id": "562"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Payer",
              "id": "564"
            },
            {
              "key": "mm",
              "label": "MM",
              "id": "565"
            },
            {
              "key": "mmTerm",
              "label": "Terms",
              "id": "566"
            },
            {
              "key": "mmNew",
              "label": "Adds",
              "id": "567"
            },
            {
              "key": "period",
              "label": "Period",
              "id": "568"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "groupName",
            "order": "asc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "planPayer",
              "name": "Payer",
              "id": "563",
              "rank": 1
            }
          ],
          "cardName": "memberMonth",
          "cardTitle": "Membership (Commercial)",
          "layout": {
            "dimensions": {
              "height": "7",
              "width": "14"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "figure",
          "secondaryGroupers": [

          ],
          "colors": [
            "#1ef3be",
            "#4e595b",
            "#babcbe",
            "#101213",
            "#fff"
          ],
          "cardId": "3-1"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "BCBS-SR",
                "Cigna MA",
                "Medicare"
              ],
              "id": "570"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Payer",
              "id": "572"
            },
            {
              "key": "mm",
              "label": "MM",
              "id": "573"
            },
            {
              "key": "mmTerm",
              "label": "Terms",
              "id": "574"
            },
            {
              "key": "mmNew",
              "label": "Adds",
              "id": "575"
            },
            {
              "key": "period",
              "label": "Period",
              "id": "576"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "groupName",
            "order": "asc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "planPayer",
              "name": "Payer",
              "id": "571",
              "rank": 1
            }
          ],
          "cardName": "memberMonth",
          "cardTitle": "Membership (Medicare & MA)",
          "layout": {
            "dimensions": {
              "height": "7",
              "width": "14"
            },
            "position": {
              "x": "18",
              "y": "5"
            }
          },
          "visualState": "figure",
          "secondaryGroupers": [

          ],
          "cardId": "3-2"
        },
        {
          "cardFilters": [

          ],
          "columns": [

          ],
          "configuration": [

          ],
          "defaultSort": {

          },
          "groupers": [

          ],
          "cardName": "textObject",
          "cardTitle": "Footer",
          "layout": {
            "dimensions": {
              "height": "2",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "41"
            }
          },
          "textObjectContent": "<div style=\"width:100%;margin:0;padding:0;text-align:center;\">\n    <img src='https://firebasestorage.googleapis.com/v0/b/image-store-26e00.appspot.com/o/arcadiaio-text-black.png?alt=media&token=b74ef5b0-0683-4f3a-9acc-ad874228b51c' style='width:120px;' />\n</div>\n<p style=\"margin:0;text-align:center;width:100%;\">&copy; 2018 Arcadia.IO</p>",
          "secondaryGroupers": [

          ],
          "cardId": "3-3"
        },
        {
          "cardFilters": [

          ],
          "columns": [

          ],
          "configuration": [

          ],
          "defaultSort": {

          },
          "groupers": [

          ],
          "cardName": "textObject",
          "cardTitle": "Header",
          "layout": {
            "dimensions": {
              "height": "2",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "2"
            }
          },
          "textObjectContent": "<div style='width:50%; margin-top:.4em; float:left;'>\n    <h2 style='margin:0;padding:0;'>All Payer ACO Practice Scorecard</h2>\n    <h2 style='margin:0;margin-top:8px;padding:0;color:rgba(0,0,0,.7)'>Membership and Demographics</h2>\n</div>\n<div style='width:50%; margin-top:.4em; float:left; text-align: right;'>\n    <img src='https://firebasestorage.googleapis.com/v0/b/image-store-26e00.appspot.com/o/arcadiaio-text-black.png?alt=media&token=b74ef5b0-0683-4f3a-9acc-ad874228b51c' style='width:240px;' />\n</div>",
          "secondaryGroupers": [

          ],
          "cardId": "3-4"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "sex",
              "filter": [
                "M"
              ],
              "id": "580"
            }
          ],
          "columns": [
            {
              "key": "ageBand",
              "label": "Age",
              "id": "583",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "members",
              "label": "Active Mbrs",
              "id": "584"
            },
            {
              "key": "risk",
              "label": "Risk",
              "id": "585"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "586"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "587"
            },
            {
              "key": "pmpmPercentDiff",
              "label": "Diff to Bench",
              "id": "588"
            }
          ],
          "configuration": [
            {
              "name": "age",
              "value": "0,15,21,30,40,50,60,70,80,90,120",
              "id": "582"
            }
          ],
          "defaultSort": {
            "columnKey": "ageBand",
            "order": "asc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "sex",
              "name": "Sex",
              "id": "581",
              "rank": 1
            }
          ],
          "cardName": "demographics",
          "cardTitle": "Demographics (Male)",
          "layout": {
            "dimensions": {
              "height": "13",
              "width": "14"
            },
            "position": {
              "x": "2",
              "y": "12"
            }
          },
          "visualState": "table",
          "secondaryGroupers": [

          ],
          "cardId": "3-5"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "sex",
              "filter": [
                "F"
              ],
              "id": "590"
            }
          ],
          "columns": [
            {
              "key": "ageBand",
              "label": "Age",
              "id": "593",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "members",
              "label": "Mbrs",
              "id": "594"
            },
            {
              "key": "risk",
              "label": "Risk",
              "id": "595"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "596"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "597"
            },
            {
              "key": "pmpmPercentDiff",
              "label": "Diff to Bench",
              "id": "598"
            }
          ],
          "configuration": [
            {
              "name": "age",
              "value": "0,15,21,30,40,50,60,70,80,90,120",
              "id": "592"
            }
          ],
          "defaultSort": {
            "columnKey": "ageBand",
            "order": "asc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "sex",
              "name": "Sex",
              "id": "591",
              "rank": 1
            }
          ],
          "cardName": "demographics",
          "cardTitle": "Demographics (Female)",
          "layout": {
            "dimensions": {
              "height": "13",
              "width": "14"
            },
            "position": {
              "x": "18",
              "y": "12"
            }
          },
          "visualState": "table",
          "secondaryGroupers": [

          ],
          "cardId": "3-6"
        },
        {
          "cardFilters": [
            {
              "exclude": true,
              "field": "condition",
              "filter": [
                "Demographics"
              ],
              "id": "600"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Condition",
              "id": "604",
              "style": {
                "fontWeight": 700,
                "width": "180px"
              }
            },
            {
              "key": "members",
              "label": "Mbrs",
              "id": "605"
            },
            {
              "key": "prevalence",
              "label": "% Pop",
              "id": "606"
            },
            {
              "key": "risk",
              "label": "Avg Risk",
              "id": "607"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "608"
            },
            {
              "key": "ipVisitsPerK",
              "label": "IP / K",
              "id": "609"
            },
            {
              "key": "edAdmitsPerK",
              "label": "ED / K",
              "id": "610"
            },
            {
              "key": "prevalenceCompare",
              "label": "Bench % Pop",
              "id": "611"
            },
            {
              "key": "riskCompare",
              "label": "Bench Risk",
              "id": "612"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "613"
            },
            {
              "key": "prevalencePercentDiff",
              "label": "Diff % Pop",
              "id": "614"
            },
            {
              "key": "riskPercentDiff",
              "label": "Diff Risk",
              "id": "615"
            },
            {
              "key": "pmpmPercentDiff",
              "label": "Diff PMPM",
              "id": "616"
            },
            {
              "key": "ipVisitsPerKPercentDiff",
              "label": "Diff IP / K",
              "id": "617"
            },
            {
              "key": "edAdmitsPerKPercentDiff",
              "label": "Diff ED / K",
              "id": "618"
            }
          ],
          "configuration": [
            {
              "name": "riskAlg",
              "value": "HCC",
              "id": "602"
            },
            {
              "name": "rows",
              "value": "16",
              "id": "603"
            }
          ],
          "defaultSort": {
            "columnKey": "prevalence",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "condition",
              "name": "Condition",
              "id": "601",
              "rank": 1
            }
          ],
          "cardName": "conditions",
          "cardTitle": "Chronic Conditions",
          "layout": {
            "dimensions": {
              "height": "16",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "24"
            }
          },
          "visualState": "table",
          "secondaryGroupers": [

          ],
          "cardId": "3-7"
        }
      ],
      "title": "Membership and Demographics"
    },
    {
      "pageNumber": true,
      "cards": [
        {
          "cardFilters": [

          ],
          "columns": [

          ],
          "configuration": [

          ],
          "defaultSort": {

          },
          "groupers": [

          ],
          "cardName": "textObject",
          "cardTitle": "Footer",
          "layout": {
            "dimensions": {
              "height": "2",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "41"
            }
          },
          "textObjectContent": "<div style=\"width:100%;margin:0;padding:0;text-align:center;\">\n    <img src='https://firebasestorage.googleapis.com/v0/b/image-store-26e00.appspot.com/o/arcadiaio-text-black.png?alt=media&token=b74ef5b0-0683-4f3a-9acc-ad874228b51c' style='width:120px;' />\n</div>\n<p style=\"margin:0;text-align:center;width:100%;\">&copy; 2018 Arcadia.IO</p>",
          "secondaryGroupers": [

          ],
          "cardId": "4-1"
        },
        {
          "cardFilters": [

          ],
          "columns": [

          ],
          "configuration": [

          ],
          "defaultSort": {

          },
          "groupers": [

          ],
          "cardName": "textObject",
          "cardTitle": "Header",
          "layout": {
            "dimensions": {
              "height": "2",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "2"
            }
          },
          "textObjectContent": "<div style='width:50%; margin-top:.4em; float:left;'>\n    <h2 style='margin:0;padding:0;'>All Payer ACO Practice Scorecard</h2>\n    <h2 style='margin:0;margin-top:8px;padding:0;color:rgba(0,0,0,.7)'>Inpatient Detail</h2>\n</div>\n<div style='width:50%; margin-top:.4em; float:left; text-align: right;'>\n    <img src='https://firebasestorage.googleapis.com/v0/b/image-store-26e00.appspot.com/o/arcadiaio-text-black.png?alt=media&token=b74ef5b0-0683-4f3a-9acc-ad874228b51c' style='width:240px;' />\n</div>",
          "secondaryGroupers": [

          ],
          "cardId": "4-2"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "IP Med (Adult)"
              ],
              "id": "623"
            },
            {
              "exclude": true,
              "field": "drgDescription",
              "filter": [
                "UNGROUPABLE"
              ],
              "id": "624"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Svc Line",
              "id": "626",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "costGroup2",
              "label": "Svc Line Minor",
              "id": "627"
            },
            {
              "key": "eventsPerK",
              "label": "Admits / K",
              "id": "628"
            },
            {
              "key": "costPerEvent",
              "label": "$ / Admit",
              "id": "629"
            },
            {
              "key": "leakagePercent",
              "label": "Leakage",
              "id": "630"
            },
            {
              "key": "eventsPerKPercentDiff",
              "label": "Diff Admits / K",
              "id": "631"
            },
            {
              "key": "ascPercent",
              "label": "% ASC",
              "id": "632"
            },
            {
              "key": "los",
              "label": "Avg LOS",
              "id": "633"
            },
            {
              "key": "readmissions",
              "label": "Readmits",
              "id": "634"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "totalEvents",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "serviceLineMajor",
              "name": "Service Line Major",
              "id": "625",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Top Service Lines (Adult Med)",
          "layout": {
            "dimensions": {
              "height": "14",
              "width": "14"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "table",
          "secondaryGroupers": [
            "serviceLineMinor"
          ],
          "displayTotals": true,
          "cardId": "4-3"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "IP Surg (Adult)"
              ],
              "id": "636"
            },
            {
              "exclude": true,
              "field": "drgDescription",
              "filter": [
                "UNGROUPABLE"
              ],
              "id": "637"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Svc Line",
              "id": "639",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Admits",
              "id": "640"
            },
            {
              "key": "eventsPerK",
              "label": "Admits / K",
              "id": "641"
            },
            {
              "key": "costPerEvent",
              "label": "$ / Admit",
              "id": "642"
            },
            {
              "key": "leakagePercent",
              "label": "Leakage",
              "id": "643"
            },
            {
              "key": "eventsPerKPercentDiff",
              "label": "Diff Admits / K",
              "id": "644"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "totalEvents",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "serviceLineMinor",
              "name": "Service Line",
              "id": "638",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Top Service Lines (Adult Surg)",
          "layout": {
            "dimensions": {
              "height": "14",
              "width": "14"
            },
            "position": {
              "x": "18",
              "y": "5"
            }
          },
          "visualState": "table",
          "secondaryGroupers": [

          ],
          "displayTotals": true,
          "cardId": "4-4"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "IP Med (Adult)"
              ],
              "id": "646"
            },
            {
              "exclude": false,
              "field": "inNetwork",
              "filter": [
                "0"
              ],
              "id": "647"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Facility",
              "id": "649",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Admits",
              "id": "650",
              "style": ""
            },
            {
              "key": "eventsPerK",
              "label": "Admits/ K",
              "id": "651"
            },
            {
              "key": "costPerEvent",
              "label": "$ / Admit",
              "id": "652"
            },
            {
              "key": "emergentPercent",
              "label": "Emerg Rate",
              "id": "653"
            },
            {
              "key": "readmissionPercent",
              "label": "Readmit Rate",
              "id": "654"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "totalEvents",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "serviceFacility",
              "name": "Facility",
              "id": "648",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Top OON Facilities (Adult Med)",
          "layout": {
            "dimensions": {
              "height": "10",
              "width": "14"
            },
            "position": {
              "x": "2",
              "y": "19"
            }
          },
          "visualState": "table",
          "secondaryGroupers": [

          ],
          "cardId": "4-5"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "IP Surg (Adult)"
              ],
              "id": "656"
            },
            {
              "exclude": false,
              "field": "inNetwork",
              "filter": [
                "0"
              ],
              "id": "657"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Facility",
              "id": "659",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Admits",
              "id": "660"
            },
            {
              "key": "eventsPerK",
              "label": "Admits / K",
              "id": "661"
            },
            {
              "key": "costPerEvent",
              "label": "$ / Admit",
              "id": "662"
            },
            {
              "key": "emergentPercent",
              "label": "Emerg Rate",
              "id": "663"
            },
            {
              "key": "readmissionPercent",
              "label": "Reamit Rate",
              "id": "664"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "totalEvents",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "serviceFacility",
              "name": "Facility",
              "id": "658",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Top OON Facilities (Adult Surg)",
          "layout": {
            "dimensions": {
              "height": "10",
              "width": "14"
            },
            "position": {
              "x": "18",
              "y": "19"
            }
          },
          "visualState": "table",
          "secondaryGroupers": [

          ],
          "cardId": "4-6"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "IP Med (Adult)"
              ],
              "id": "666"
            },
            {
              "exclude": false,
              "field": "inNetwork",
              "filter": [
                "1"
              ],
              "id": "667"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Facility",
              "id": "669",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Admits",
              "id": "670"
            },
            {
              "key": "eventsPerK",
              "label": "Admits / K",
              "id": "671"
            },
            {
              "key": "costPerEvent",
              "label": "$ / Admit",
              "id": "672"
            },
            {
              "key": "emergentPercent",
              "label": "Emerg Rate",
              "id": "673"
            },
            {
              "key": "readmissionPercent",
              "label": "Readmit Rate",
              "id": "674"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "totalEvents",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "serviceFacility",
              "name": "Facility",
              "id": "668",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Top In-Net Facilities (Adult Med)",
          "layout": {
            "dimensions": {
              "height": "11",
              "width": "14"
            },
            "position": {
              "x": "2",
              "y": "29"
            }
          },
          "visualState": "table",
          "secondaryGroupers": [

          ],
          "cardId": "4-7"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "IP Surg (Adult)"
              ],
              "id": "676"
            },
            {
              "exclude": false,
              "field": "inNetwork",
              "filter": [
                "1"
              ],
              "id": "677"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Facility",
              "id": "679",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Admits",
              "id": "680"
            },
            {
              "key": "eventsPerK",
              "label": "Admits / K",
              "id": "681"
            },
            {
              "key": "costPerEvent",
              "label": "$ / Admit",
              "id": "682"
            },
            {
              "key": "emergentPercent",
              "label": "Emerg Rate",
              "id": "683"
            },
            {
              "key": "readmissionPercent",
              "label": "Readmit Rate",
              "id": "684"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "totalEvents",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "serviceFacility",
              "name": "Facility",
              "id": "678",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Top In-Net Facilities (Adult Surg)",
          "layout": {
            "dimensions": {
              "height": "11",
              "width": "14"
            },
            "position": {
              "x": "18",
              "y": "29"
            }
          },
          "visualState": "table",
          "secondaryGroupers": [

          ],
          "cardId": "4-8"
        }
      ],
      "title": "Inpatient Detail"
    },
    {
      "pageNumber": true,
      "cards": [
        {
          "cardFilters": [

          ],
          "columns": [

          ],
          "configuration": [

          ],
          "defaultSort": {

          },
          "groupers": [

          ],
          "cardName": "textObject",
          "cardTitle": "Footer",
          "layout": {
            "dimensions": {
              "height": "2",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "41"
            }
          },
          "textObjectContent": "<div style=\"width:100%;margin:0;padding:0;text-align:center;\">\n    <img src='https://firebasestorage.googleapis.com/v0/b/image-store-26e00.appspot.com/o/arcadiaio-text-black.png?alt=media&token=b74ef5b0-0683-4f3a-9acc-ad874228b51c' style='width:120px;' />\n</div>\n<p style=\"margin:0;text-align:center;width:100%;\">&copy; 2018 Arcadia.IO</p>",
          "secondaryGroupers": [

          ],
          "cardId": "5-1"
        },
        {
          "cardFilters": [

          ],
          "columns": [

          ],
          "configuration": [

          ],
          "defaultSort": {

          },
          "groupers": [

          ],
          "cardName": "textObject",
          "cardTitle": "Header",
          "layout": {
            "dimensions": {
              "height": "2",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "2"
            }
          },
          "textObjectContent": "<div style='width:50%; margin-top:.4em; float:left;'>\n    <h2 style='margin:0;padding:0;'>All Payer ACO Practice Scorecard</h2>\n    <h2 style='margin:0;margin-top:8px;padding:0;color:rgba(0,0,0,.7)'>Retail Pharmacy</h2>\n</div>\n<div style='width:50%; margin-top:.4em; float:left; text-align: right;'>\n    <img src='https://firebasestorage.googleapis.com/v0/b/image-store-26e00.appspot.com/o/arcadiaio-text-black.png?alt=media&token=b74ef5b0-0683-4f3a-9acc-ad874228b51c' style='width:240px;' />\n</div>",
          "secondaryGroupers": [

          ],
          "cardId": "5-2"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "age",
              "filter": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46",
                "47",
                "48",
                "49",
                "50",
                "51",
                "52",
                "53",
                "54",
                "55",
                "56",
                "57",
                "58",
                "59",
                "60",
                "61",
                "62",
                "63",
                "64",
                "65"
              ],
              "id": "689"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Med Class",
              "id": "692"
            },
            {
              "key": "cost",
              "label": "Cost",
              "id": "693"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "694"
            },
            {
              "key": "fills",
              "label": "Scripts",
              "id": "695"
            },
            {
              "key": "scriptsK",
              "label": "Scripts / K",
              "id": "696"
            },
            {
              "key": "pricePerScript",
              "label": "$ / Script",
              "id": "697"
            },
            {
              "key": "genericPercent",
              "label": "% Generic",
              "id": "698"
            },
            {
              "key": "pcpPercent",
              "label": "% PCP",
              "id": "699"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "700"
            },
            {
              "key": "scriptsKCompare",
              "label": "Bench Scripts / K",
              "id": "701"
            },
            {
              "key": "pricePerScriptCompare",
              "label": "Bench $ / Script",
              "id": "702"
            }
          ],
          "configuration": [
            {
              "name": "showComparison",
              "value": "true",
              "id": "691"
            }
          ],
          "defaultSort": {
            "columnKey": "cost",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "theragroup2",
              "name": "Med Class",
              "id": "690",
              "rank": 1
            }
          ],
          "cardName": "medication",
          "cardTitle": "Top Meds by Class (Commercial)",
          "layout": {
            "dimensions": {
              "height": "14",
              "width": "14"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "figure",
          "secondaryGroupers": [

          ],
          "cardId": "5-3"
        },
        {
          "cardFilters": [
            {
              "exclude": true,
              "field": "age",
              "filter": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
                "38",
                "39",
                "40",
                "41",
                "42",
                "43",
                "44",
                "45",
                "46",
                "47",
                "48",
                "49",
                "50",
                "51",
                "52",
                "53",
                "54",
                "55",
                "56",
                "57",
                "58",
                "59",
                "60",
                "61",
                "62",
                "63",
                "64",
                "65"
              ],
              "id": "704"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Med Class",
              "id": "706",
              "style": ""
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "707"
            },
            {
              "key": "cost",
              "label": "Cost",
              "id": "708"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "cost",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "theragroup2",
              "name": "Med Class",
              "id": "705",
              "rank": 1
            }
          ],
          "cardName": "medication",
          "cardTitle": "Top Meds by Class (Medicare)",
          "layout": {
            "dimensions": {
              "height": "14",
              "width": "14"
            },
            "position": {
              "x": "18",
              "y": "5"
            }
          },
          "visualState": "figure",
          "secondaryGroupers": [

          ],
          "cardId": "5-4"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "age",
              "filter": [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35"
              ],
              "id": "710"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Medication",
              "id": "712",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "713"
            },
            {
              "key": "cost",
              "label": "Cost",
              "id": "714"
            },
            {
              "key": "fills",
              "label": "Fills",
              "id": "715"
            },
            {
              "key": "scriptsK",
              "label": "Scripts / K",
              "id": "716"
            },
            {
              "key": "pricePerScript",
              "label": "$ / Script",
              "id": "717"
            },
            {
              "key": "genericPercent",
              "label": "Generic",
              "id": "718"
            },
            {
              "key": "pcpPercent",
              "label": "By PCP",
              "id": "719"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "720"
            },
            {
              "key": "scriptsKCompare",
              "label": "Bench Scripts / K",
              "id": "721"
            },
            {
              "key": "pcpPercentCompare",
              "label": "Bench by PCP",
              "id": "722"
            },
            {
              "key": "pmpmPercentDiff",
              "label": "Delta PMPM",
              "id": "723"
            },
            {
              "key": "scriptsKPercentDiff",
              "label": "Delta Scripts / K",
              "id": "724"
            },
            {
              "key": "pcpPercentPercentDiff",
              "label": "Delta by PCP",
              "id": "725"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "cost",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "medicationname",
              "name": "Medication",
              "id": "711",
              "rank": 1
            }
          ],
          "cardName": "medication",
          "cardTitle": "Top Individual Medications",
          "layout": {
            "dimensions": {
              "height": "21",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "19"
            }
          },
          "visualState": "table",
          "secondaryGroupers": [

          ],
          "cardId": "5-5"
        }
      ],
      "title": "Pharmacy"
    }
  ],
  "title": "All Payer ACO Practice Scorecard - Testing 20180427",
  "bookId": 203
}
