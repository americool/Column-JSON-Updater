exports.Multi_Page_V14 = 
{
  "bookFilters": [
    {
      "exclude": true,
      "field": "pcpNPI",
      "filter": [
        "Unknown"
      ],
      "id": "2762"
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
      "id": "2763"
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
          "cardId": "2-1"
        },
        {
          "cardFilters": [

          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Payer",
              "id": "2547",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "activeMembers",
              "label": "Active Mbrs",
              "id": "2548"
            },
            {
              "key": "cumMembers",
              "label": "Cum. Members",
              "id": "2549"
            },
            {
              "key": "mm",
              "label": "Mbr Months",
              "id": "2550"
            },
            {
              "key": "tcoc",
              "label": "Cost",
              "id": "2551"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "2552"
            },
            {
              "key": "budget",
              "label": "Budget",
              "id": "2553"
            },
            {
              "key": "riskAdjBudget",
              "label": "Risk Adj Budget",
              "id": "2554"
            },
            {
              "key": "diffFromRiskAdjBudget",
              "label": "Diff to Budget",
              "id": "2555"
            },
            {
              "key": "percentDiffFromRiskAdjBudget",
              "label": "% Diff to Budget",
              "id": "2556"
            },
            {
              "key": "startingRisk",
              "label": "Start Risk",
              "id": "2557"
            },
            {
              "key": "currentRisk",
              "label": "Cur. Risk",
              "id": "2558"
            },
            {
              "key": "currentRiskCompare",
              "label": "Bench Cur. Risk",
              "id": "2559"
            },
            {
              "key": "rateOfChangeInRisk",
              "label": "Rate of Change",
              "id": "2560"
            },
            {
              "key": "rateOfChangeInRiskCompare",
              "label": "Bench Rate of Change",
              "id": "2561"
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
              "id": "2546",
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
              "id": "2563"
            }
          ],
          "columns": [
            {
              "key": "measure",
              "label": "Measure",
              "id": "2565"
            },
            {
              "key": "period",
              "label": "Date",
              "id": "2566"
            },
            {
              "key": "denominator",
              "label": "Denom",
              "id": "2567"
            },
            {
              "key": "numerator",
              "label": "Num",
              "id": "2568"
            },
            {
              "key": "performance",
              "label": "Rate",
              "id": "2569"
            },
            {
              "key": "target1",
              "label": "Target",
              "id": "2570"
            },
            {
              "key": "performanceCompare",
              "label": "Bench",
              "id": "2571"
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
              "id": "2564",
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
              "id": "2573"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Condition",
              "id": "2575",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "members",
              "label": "Mbrs",
              "id": "2576"
            },
            {
              "key": "prevalence",
              "label": "Prev",
              "id": "2577"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "2578"
            },
            {
              "key": "prevalenceCompare",
              "label": "Bench Prev",
              "id": "2579"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "2580"
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
              "id": "2574",
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
              "id": "2582"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Svc Category",
              "id": "2584",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Events",
              "id": "2585"
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "2586"
            },
            {
              "key": "costPMPM",
              "label": "PMPM",
              "id": "2587"
            },
            {
              "key": "costPMPMCompare",
              "label": "Bench PMPM",
              "id": "2588"
            },
            {
              "key": "costPMPMPercentDiff",
              "label": "% Diff PMPM",
              "id": "2589"
            },
            {
              "key": "eventsPerK",
              "label": "Events / K",
              "id": "2590"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Event",
              "id": "2591"
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
              "id": "2583",
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
              "id": "2593"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Svc Category",
              "id": "2595",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Events",
              "id": "2596"
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "2597"
            },
            {
              "key": "costPMPM",
              "label": "PMPM",
              "id": "2598"
            },
            {
              "key": "costPMPMCompare",
              "label": "Bench PMMPM",
              "id": "2599"
            },
            {
              "key": "costPMPMPercentDiff",
              "label": "% Diff PMPMm",
              "id": "2600"
            },
            {
              "key": "eventsPerK",
              "label": "Events / K",
              "id": "2601"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Event",
              "id": "2602"
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
              "id": "2594",
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
              "id": "2606"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Payer",
              "id": "2608"
            },
            {
              "key": "mm",
              "label": "MM",
              "id": "2609"
            },
            {
              "key": "mmTerm",
              "label": "Terms",
              "id": "2610"
            },
            {
              "key": "mmNew",
              "label": "Adds",
              "id": "2611"
            },
            {
              "key": "period",
              "label": "Period",
              "id": "2612"
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
              "id": "2607",
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
              "id": "2614"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Payer",
              "id": "2616"
            },
            {
              "key": "mm",
              "label": "MM",
              "id": "2617"
            },
            {
              "key": "mmTerm",
              "label": "Terms",
              "id": "2618"
            },
            {
              "key": "mmNew",
              "label": "Adds",
              "id": "2619"
            },
            {
              "key": "period",
              "label": "Period",
              "id": "2620"
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
              "id": "2615",
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
              "id": "2624"
            }
          ],
          "columns": [
            {
              "key": "ageBand",
              "label": "Age",
              "id": "2626",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "members",
              "label": "Active Mbrs",
              "id": "2627"
            },
            {
              "key": "risk",
              "label": "Risk",
              "id": "2628"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "2629"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "2630"
            },
            {
              "key": "pmpmPercentDiff",
              "label": "Diff to Bench",
              "id": "2631"
            }
          ],
          "configuration": [
            {
              "name": "age",
              "value": "0,15,21,30,40,50,60,70,80,90,120",
              "id": "486"
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
              "id": "2625",
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
              "id": "2633"
            }
          ],
          "columns": [
            {
              "key": "ageBand",
              "label": "Age",
              "id": "2635",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "members",
              "label": "Mbrs",
              "id": "2636"
            },
            {
              "key": "risk",
              "label": "Risk",
              "id": "2637"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "2638"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "2639"
            },
            {
              "key": "pmpmPercentDiff",
              "label": "Diff to Bench",
              "id": "2640"
            }
          ],
          "configuration": [
            {
              "name": "age",
              "value": "0,15,21,30,40,50,60,70,80,90,120",
              "id": "690"
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
              "id": "2634",
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
              "id": "2642"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Condition",
              "id": "2644",
              "style": {
                "fontWeight": 700,
                "width": "180px"
              }
            },
            {
              "key": "members",
              "label": "Mbrs",
              "id": "2645"
            },
            {
              "key": "prevalence",
              "label": "% Pop",
              "id": "2646"
            },
            {
              "key": "risk",
              "label": "Avg Risk",
              "id": "2647"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "2648"
            },
            {
              "key": "ipVisitsPerK",
              "label": "IP / K",
              "id": "2649"
            },
            {
              "key": "edAdmitsPerK",
              "label": "ED / K",
              "id": "2650"
            },
            {
              "key": "prevalenceCompare",
              "label": "Bench % Pop",
              "id": "2651"
            },
            {
              "key": "riskCompare",
              "label": "Bench Risk",
              "id": "2652"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "2653"
            },
            {
              "key": "prevalencePercentDiff",
              "label": "Diff % Pop",
              "id": "2654"
            },
            {
              "key": "riskPercentDiff",
              "label": "Diff Risk",
              "id": "2655"
            },
            {
              "key": "pmpmPercentDiff",
              "label": "Diff PMPM",
              "id": "2656"
            },
            {
              "key": "ipVisitsPerKPercentDiff",
              "label": "Diff IP / K",
              "id": "2657"
            },
            {
              "key": "edAdmitsPerKPercentDiff",
              "label": "Diff ED / K",
              "id": "2658"
            }
          ],
          "configuration": [
            {
              "name": "riskAlg",
              "value": "HCC",
              "id": "735"
            },
            {
              "name": "rows",
              "value": "16",
              "id": "840"
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
              "id": "2643",
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
              "id": "2663"
            },
            {
              "exclude": true,
              "field": "drgDescription",
              "filter": [
                "UNGROUPABLE"
              ],
              "id": "2664"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Svc Line",
              "id": "2666",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Admits",
              "id": "2667"
            },
            {
              "key": "eventsPerK",
              "label": "Admits / K",
              "id": "2668"
            },
            {
              "key": "costPerEvent",
              "label": "$ / Admit",
              "id": "2669"
            },
            {
              "key": "leakagePercent",
              "label": "Leakage",
              "id": "2670"
            },
            {
              "key": "eventsPerKPercentDiff",
              "label": "Diff Admits / K",
              "id": "2671"
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
              "id": "2665",
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
              "id": "2673"
            },
            {
              "exclude": true,
              "field": "drgDescription",
              "filter": [
                "UNGROUPABLE"
              ],
              "id": "2674"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Svc Line",
              "id": "2676",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Admits",
              "id": "2677"
            },
            {
              "key": "eventsPerK",
              "label": "Admits / K",
              "id": "2678"
            },
            {
              "key": "costPerEvent",
              "label": "$ / Admit",
              "id": "2679"
            },
            {
              "key": "leakagePercent",
              "label": "Leakage",
              "id": "2680"
            },
            {
              "key": "eventsPerKPercentDiff",
              "label": "Diff Admits / K",
              "id": "2681"
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
              "id": "2675",
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
              "id": "2683"
            },
            {
              "exclude": false,
              "field": "inNetwork",
              "filter": [
                "0"
              ],
              "id": "2684"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Facility",
              "id": "2686",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Admits",
              "id": "2687",
              "style": ""
            },
            {
              "key": "eventsPerK",
              "label": "Admits/ K",
              "id": "2688"
            },
            {
              "key": "costPerEvent",
              "label": "$ / Admit",
              "id": "2689"
            },
            {
              "key": "emergentPercent",
              "label": "Emerg Rate",
              "id": "2690"
            },
            {
              "key": "readmissionPercent",
              "label": "Readmit Rate",
              "id": "2691"
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
              "id": "2685",
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
              "id": "2693"
            },
            {
              "exclude": false,
              "field": "inNetwork",
              "filter": [
                "0"
              ],
              "id": "2694"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Facility",
              "id": "2696",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Admits",
              "id": "2697"
            },
            {
              "key": "eventsPerK",
              "label": "Admits / K",
              "id": "2698"
            },
            {
              "key": "costPerEvent",
              "label": "$ / Admit",
              "id": "2699"
            },
            {
              "key": "emergentPercent",
              "label": "Emerg Rate",
              "id": "2700"
            },
            {
              "key": "readmissionPercent",
              "label": "Reamit Rate",
              "id": "2701"
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
              "id": "2695",
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
              "id": "2703"
            },
            {
              "exclude": false,
              "field": "inNetwork",
              "filter": [
                "1"
              ],
              "id": "2704"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Facility",
              "id": "2706",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Admits",
              "id": "2707"
            },
            {
              "key": "eventsPerK",
              "label": "Admits / K",
              "id": "2708"
            },
            {
              "key": "costPerEvent",
              "label": "$ / Admit",
              "id": "2709"
            },
            {
              "key": "emergentPercent",
              "label": "Emerg Rate",
              "id": "2710"
            },
            {
              "key": "readmissionPercent",
              "label": "Readmit Rate",
              "id": "2711"
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
              "id": "2705",
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
              "id": "2713"
            },
            {
              "exclude": false,
              "field": "inNetwork",
              "filter": [
                "1"
              ],
              "id": "2714"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Facility",
              "id": "2716",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Admits",
              "id": "2717"
            },
            {
              "key": "eventsPerK",
              "label": "Admits / K",
              "id": "2718"
            },
            {
              "key": "costPerEvent",
              "label": "$ / Admit",
              "id": "2719"
            },
            {
              "key": "emergentPercent",
              "label": "Emerg Rate",
              "id": "2720"
            },
            {
              "key": "readmissionPercent",
              "label": "Readmit Rate",
              "id": "2721"
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
              "id": "2715",
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
              "id": "2726"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Med Class",
              "id": "2728"
            },
            {
              "key": "cost",
              "label": "Cost",
              "id": "2729"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "2730"
            },
            {
              "key": "fills",
              "label": "Scripts",
              "id": "2731"
            },
            {
              "key": "scriptsK",
              "label": "Scripts / K",
              "id": "2732"
            },
            {
              "key": "pricePerScript",
              "label": "$ / Script",
              "id": "2733"
            },
            {
              "key": "genericPercent",
              "label": "% Generic",
              "id": "2734"
            },
            {
              "key": "pcpPercent",
              "label": "% PCP",
              "id": "2735"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "2736"
            },
            {
              "key": "scriptsKCompare",
              "label": "Bench Scripts / K",
              "id": "2737"
            },
            {
              "key": "pricePerScriptCompare",
              "label": "Bench $ / Script",
              "id": "2738"
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
              "id": "2727",
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
              "id": "2740"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Med Class",
              "id": "2742",
              "style": ""
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "2743"
            },
            {
              "key": "cost",
              "label": "Cost",
              "id": "2744"
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
              "id": "2741",
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
              "id": "2746"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Medication",
              "id": "2748",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "2749"
            },
            {
              "key": "cost",
              "label": "Cost",
              "id": "2750"
            },
            {
              "key": "fills",
              "label": "Fills",
              "id": "2751"
            },
            {
              "key": "scriptsK",
              "label": "Scripts / K",
              "id": "2752"
            },
            {
              "key": "pricePerScript",
              "label": "$ / Script",
              "id": "2753"
            },
            {
              "key": "genericPercent",
              "label": "Generic",
              "id": "2754"
            },
            {
              "key": "pcpPercent",
              "label": "By PCP",
              "id": "2755"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "2756"
            },
            {
              "key": "scriptsKCompare",
              "label": "Bench Scripts / K",
              "id": "2757"
            },
            {
              "key": "pcpPercentCompare",
              "label": "Bench by PCP",
              "id": "2758"
            },
            {
              "key": "pmpmPercentDiff",
              "label": "Delta PMPM",
              "id": "2759"
            },
            {
              "key": "scriptsKPercentDiff",
              "label": "Delta Scripts / K",
              "id": "2760"
            },
            {
              "key": "pcpPercentPercentDiff",
              "label": "Delta by PCP",
              "id": "2761"
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
              "id": "2747",
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
          "cardId": "5-5"
        }
      ],
      "title": "Pharmacy"
    }
  ],
  "title": "Multi-Page V14",
  "bookId": 87
}
