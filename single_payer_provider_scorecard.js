exports.single_payer_provider_scorecard =
{
  "bookFilters": [
    {
      "exclude": true,
      "field": "pcpNPI",
      "filter": [
        "Unknown"
      ],
      "id": "208"
    },
    {
      "exclude": false,
      "field": "atRiskFlag",
      "filter": [
        "true"
      ],
      "id": "209"
    },
    {
      "exclude": false,
      "field": "claimAtRisk",
      "filter": [
        "true"
      ],
      "id": "210"
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
      "id": "211"
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
          "textObjectContent": "<div style='width:50%; margin-top:.4em; float:left;'>\n    <h2 style=\"margin:0;padding:0;\">Commercial Payer Physician Scorecard</h2>\n    <h2 style='margin:0;margin-top:8px;padding:0;color:rgba(0,0,0,.7)'>YTD December 2017</h2>\n</div>\n<div style='width:50%; margin-top:.4em; float:left; text-align: right;'>\n    <img src='https://firebasestorage.googleapis.com/v0/b/image-store-26e00.appspot.com/o/arcadiaio-text-black.png?alt=media&token=b74ef5b0-0683-4f3a-9acc-ad874228b51c' style='width:240px;' />\n</div>",
          "cardId": "1-1"
        },
        {
          "cardFilters": [

          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Payer",
              "id": "12",
              "style": "{\"fontWeight\": 700, \"width\": \"120px\"}"
            },
            {
              "key": "activeMembers",
              "label": "Active Mbrs",
              "id": "13"
            },
            {
              "key": "cumMembers",
              "label": "Cum. Members",
              "id": "14"
            },
            {
              "key": "mm",
              "label": "Mbr Months",
              "id": "15"
            },
            {
              "key": "tcoc",
              "label": "Cost",
              "id": "16"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "17"
            },
            {
              "key": "budget",
              "label": "Budget",
              "id": "18"
            },
            {
              "key": "riskAdjBudget",
              "label": "Risk Adj Budget",
              "id": "19"
            },
            {
              "key": "diffFromRiskAdjBudget",
              "label": "Diff to Budget",
              "id": "20"
            },
            {
              "key": "percentDiffFromRiskAdjBudget",
              "label": "% Diff to Budget",
              "id": "21"
            },
            {
              "key": "startingRisk",
              "label": "Start Risk",
              "id": "22"
            },
            {
              "key": "currentRisk",
              "label": "Cur. Risk",
              "id": "23"
            },
            {
              "key": "currentRiskCompare",
              "label": "Bench Cur. Risk",
              "id": "24"
            },
            {
              "key": "rateOfChangeInRisk",
              "label": "Rate of Change",
              "id": "25"
            },
            {
              "key": "rateOfChangeInRiskCompare",
              "label": "Bench Rate of Change",
              "id": "26"
            }
          ],
          "configuration": [
            {
              "name": "contractName",
              "value": "ACO",
              "id": "10"
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
              "id": "194",
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
          "cardId": "1-2"
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
              "id": "196"
            }
          ],
          "columns": [
            {
              "key": "measure",
              "label": "Measure",
              "id": "30"
            },
            {
              "key": "period",
              "label": "Date",
              "id": "31"
            },
            {
              "key": "denominator",
              "label": "Denom",
              "id": "32"
            },
            {
              "key": "numerator",
              "label": "Num",
              "id": "33"
            },
            {
              "key": "performance",
              "label": "Rate",
              "id": "34"
            },
            {
              "key": "target1",
              "label": "Target",
              "id": "35"
            },
            {
              "key": "performanceCompare",
              "label": "Bench",
              "id": "36"
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
              "id": "197",
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
          "cardId": "1-3"
        },
        {
          "cardFilters": [
            {
              "exclude": true,
              "field": "condition",
              "filter": [
                "Demographics"
              ],
              "id": "199"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Condition",
              "id": "42",
              "style": "{ \"fontWeight\": 700, \"width\": \"120px\"}"
            },
            {
              "key": "members",
              "label": "Mbrs",
              "id": "43"
            },
            {
              "key": "prevalence",
              "label": "Prev",
              "id": "44"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "45"
            },
            {
              "key": "prevalenceCompare",
              "label": "Bench Prev",
              "id": "46"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "47"
            }
          ],
          "configuration": [
            {
              "name": "riskAlg",
              "value": "HCC",
              "id": "39"
            },
            {
              "name": "rows",
              "value": "20",
              "id": "40"
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
              "id": "200",
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
          "cardId": "1-4"
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
              "id": "202"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Svc Category",
              "id": "77",
              "style": "{ \"fontWeight\": 700, \"width\": \"120px\"}"
            },
            {
              "key": "totalEvents",
              "label": "Events",
              "id": "78"
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "79"
            },
            {
              "key": "costPMPM",
              "label": "PMPM",
              "id": "80"
            },
            {
              "key": "costPMPMCompare",
              "label": "Bench PMPM",
              "id": "81"
            },
            {
              "key": "costPMPMPercentDiff",
              "label": "% Diff PMPM",
              "id": "82"
            },
            {
              "key": "eventsPerK",
              "label": "Events / K",
              "id": "83"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Event",
              "id": "84"
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
              "id": "203",
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
          "cardId": "1-5"
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
              "id": "205"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Svc Category",
              "id": "88",
              "style": "{ \"fontWeight\": 700, \"width\": \"120px\"}"
            },
            {
              "key": "totalEvents",
              "label": "Events",
              "id": "89"
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "90"
            },
            {
              "key": "costPMPM",
              "label": "PMPM",
              "id": "91"
            },
            {
              "key": "costPMPMCompare",
              "label": "Bench PMMPM",
              "id": "92"
            },
            {
              "key": "costPMPMPercentDiff",
              "label": "% Diff PMPMm",
              "id": "93"
            },
            {
              "key": "eventsPerK",
              "label": "Events / K",
              "id": "94"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Event",
              "id": "95"
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
              "id": "206",
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
          "cardId": "1-6"
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
          "cardId": "1-7"
        }
      ],
      "title": "Main Page"
    }
  ],
  "title": "Single Page Provider Scorecard (All Payer) v5",
  "bookId": 66
}
