exports.bmc_scorecard = 
{
  "bookFilters": [
    {
      "exclude": true,
      "field": "pcpNPI",
      "filter": [
        "Unknown"
      ],
      "id": "1172"
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
      "id": "1173"
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
      "title": "(0) Cover Page"
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
              "id": "977",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "activeMembers",
              "label": "Active Mbrs",
              "id": "978"
            },
            {
              "key": "mm",
              "label": "Mbr Months",
              "id": "979"
            },
            {
              "key": "tcoc",
              "label": "TCOC Spend",
              "id": "980"
            },
            {
              "key": "pmpm",
              "label": "TCOC PMPM",
              "id": "981"
            },
            {
              "key": "budget",
              "label": "TCOC Budget",
              "id": "982"
            },
            {
              "key": "percentDiffFromRiskAdjBudget",
              "label": "Diff to Budget (Risk Adj)",
              "id": "983"
            },
            {
              "key": "percentDiffFromRiskAdjBudget",
              "label": "% Diff to Budget (Risk Adj)",
              "id": "984"
            },
            {
              "key": "startingRisk",
              "label": "Prev. Rel Risk",
              "id": "985"
            },
            {
              "key": "currentRisk",
              "label": "Cur. Rel Risk",
              "id": "986"
            },
            {
              "key": "rateOfChangeInRisk",
              "label": "% Change Rel Risk",
              "id": "987"
            },
            {
              "key": "rateOfChangeInRiskCompare",
              "label": "Bench % Change Risk",
              "id": "988"
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
              "id": "976",
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
          "cardId": "2-3"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "Aetna"
              ],
              "id": "991"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Pod",
              "id": "993",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "activeMembers",
              "label": "Active Members",
              "id": "994"
            },
            {
              "key": "currentRiskCompare",
              "label": "Risk",
              "id": "995"
            },
            {
              "key": "pmpm",
              "label": "TCOC PMPM",
              "id": "996",
              "style": ""
            },
            {
              "key": "budget",
              "label": "TCOC Budget",
              "id": "997"
            },
            {
              "key": "percentDiffFromRiskAdjBudget",
              "label": "% Diff To Budget",
              "id": "998"
            },
            {
              "key": "diffFromRiskAdjBudget",
              "label": "Diff to Budget",
              "id": "999"
            }
          ],
          "configuration": [
            {
              "name": "contractName",
              "value": "ACO",
              "id": "997"
            }
          ],
          "defaultSort": {
            "columnKey": "groupName",
            "order": "asc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "pcpGrouper2",
              "name": "Pod",
              "id": "992",
              "rank": 1
            }
          ],
          "cardName": "costCategory",
          "cardTitle": "Cost & Budget - Aetna",
          "layout": {
            "dimensions": {
              "height": "9",
              "width": "15"
            },
            "position": {
              "x": "2",
              "y": "13"
            }
          },
          "visualState": "table",
          "cardId": "2-4"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "Cigna"
              ],
              "id": "1001"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Pod",
              "id": "1003",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "activeMembers",
              "label": "Active Members",
              "id": "1004"
            },
            {
              "key": "currentRiskCompare",
              "label": "Risk",
              "id": "1005"
            },
            {
              "key": "pmpm",
              "label": "TCOC PMPM",
              "id": "1006",
              "style": ""
            },
            {
              "key": "budget",
              "label": "TCOC Budget",
              "id": "1007"
            },
            {
              "key": "percentDiffFromRiskAdjBudget",
              "label": "% Diff To Budget",
              "id": "1008"
            },
            {
              "key": "diffFromRiskAdjBudget",
              "label": "Diff to Budget",
              "id": "1009"
            }
          ],
          "configuration": [
            {
              "name": "contractName",
              "value": "ACO",
              "id": "679"
            }
          ],
          "defaultSort": {
            "columnKey": "groupName",
            "order": "asc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "pcpGrouper2",
              "name": "Pod",
              "id": "1002",
              "rank": 1
            }
          ],
          "cardName": "costCategory",
          "cardTitle": "Cost & Budget - Cigna",
          "layout": {
            "dimensions": {
              "height": "9",
              "width": "15"
            },
            "position": {
              "x": "17",
              "y": "13"
            }
          },
          "visualState": "table",
          "cardId": "2-5"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "BCBS"
              ],
              "id": "1011"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Pod",
              "id": "1013",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "activeMembers",
              "label": "Active Members",
              "id": "1014"
            },
            {
              "key": "currentRiskCompare",
              "label": "Risk",
              "id": "1015"
            },
            {
              "key": "pmpm",
              "label": "TCOC PMPM",
              "id": "1016",
              "style": ""
            },
            {
              "key": "budget",
              "label": "TCOC Budget",
              "id": "1017"
            },
            {
              "key": "percentDiffFromRiskAdjBudget",
              "label": "% Diff To Budget",
              "id": "1018"
            },
            {
              "key": "diffFromRiskAdjBudget",
              "label": "Diff to Budget",
              "id": "1019"
            }
          ],
          "configuration": [
            {
              "name": "contractName",
              "value": "ACO",
              "id": "689"
            }
          ],
          "defaultSort": {
            "columnKey": "groupName",
            "order": "asc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "pcpGrouper2",
              "name": "Pod",
              "id": "1012",
              "rank": 1
            }
          ],
          "cardName": "costCategory",
          "cardTitle": "Cost & Budget - BCBS",
          "layout": {
            "dimensions": {
              "height": "9",
              "width": "15"
            },
            "position": {
              "x": "2",
              "y": "22"
            }
          },
          "visualState": "table",
          "cardId": "2-6"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "BCBS-SR"
              ],
              "id": "1021"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Pod",
              "id": "1023",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "activeMembers",
              "label": "Active Members",
              "id": "1024"
            },
            {
              "key": "currentRiskCompare",
              "label": "Risk",
              "id": "1025"
            },
            {
              "key": "pmpm",
              "label": "TCOC PMPM",
              "id": "1026",
              "style": ""
            },
            {
              "key": "budget",
              "label": "TCOC Budget",
              "id": "1027"
            },
            {
              "key": "percentDiffFromRiskAdjBudget",
              "label": "% Diff To Budget",
              "id": "1028"
            },
            {
              "key": "diffFromRiskAdjBudget",
              "label": "Diff to Budget",
              "id": "1029"
            }
          ],
          "configuration": [
            {
              "name": "contractName",
              "value": "ACO",
              "id": "699"
            }
          ],
          "defaultSort": {
            "columnKey": "groupName",
            "order": "asc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "pcpGrouper2",
              "name": "Pod",
              "id": "1022",
              "rank": 1
            }
          ],
          "cardName": "costCategory",
          "cardTitle": "Cost & Budget - BCBS-SR",
          "layout": {
            "dimensions": {
              "height": "9",
              "width": "15"
            },
            "position": {
              "x": "17",
              "y": "22"
            }
          },
          "visualState": "table",
          "cardId": "2-7"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "United"
              ],
              "id": "1031"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Pod",
              "id": "1033",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "activeMembers",
              "label": "Active Members",
              "id": "1034"
            },
            {
              "key": "currentRiskCompare",
              "label": "Risk",
              "id": "1035"
            },
            {
              "key": "pmpm",
              "label": "TCOC PMPM",
              "id": "1036",
              "style": ""
            },
            {
              "key": "budget",
              "label": "TCOC Budget",
              "id": "1037"
            },
            {
              "key": "percentDiffFromRiskAdjBudget",
              "label": "% Diff To Budget",
              "id": "1038"
            },
            {
              "key": "diffFromRiskAdjBudget",
              "label": "Diff to Budget",
              "id": "1039"
            }
          ],
          "configuration": [
            {
              "name": "contractName",
              "value": "ACO",
              "id": "709"
            }
          ],
          "defaultSort": {
            "columnKey": "groupName",
            "order": "asc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "pcpGrouper2",
              "name": "Pod",
              "id": "1032",
              "rank": 1
            }
          ],
          "cardName": "costCategory",
          "cardTitle": "Cost & Budget - United MA",
          "layout": {
            "dimensions": {
              "height": "9",
              "width": "15"
            },
            "position": {
              "x": "2",
              "y": "31"
            }
          },
          "visualState": "table",
          "cardId": "2-8"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "Medicare"
              ],
              "id": "1041"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Pod",
              "id": "1043",
              "style": {
                "fontWeight": 700,
                "width": "120px"
              }
            },
            {
              "key": "activeMembers",
              "label": "Active Members",
              "id": "1044"
            },
            {
              "key": "currentRiskCompare",
              "label": "Risk",
              "id": "1045"
            },
            {
              "key": "pmpm",
              "label": "TCOC PMPM",
              "id": "1046",
              "style": ""
            },
            {
              "key": "budget",
              "label": "TCOC Budget",
              "id": "1047"
            },
            {
              "key": "percentDiffFromRiskAdjBudget",
              "label": "% Diff To Budget",
              "id": "1048"
            },
            {
              "key": "diffFromRiskAdjBudget",
              "label": "Diff to Budget",
              "id": "1049"
            }
          ],
          "configuration": [
            {
              "name": "contractName",
              "value": "ACO",
              "id": "719"
            }
          ],
          "defaultSort": {
            "columnKey": "groupName",
            "order": "asc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "pcpGrouper2",
              "name": "Pod",
              "id": "1042",
              "rank": 1
            }
          ],
          "cardName": "costCategory",
          "cardTitle": "Cost & Budget - Medicare",
          "layout": {
            "dimensions": {
              "height": "9",
              "width": "15"
            },
            "position": {
              "x": "17",
              "y": "31"
            }
          },
          "visualState": "table",
          "cardId": "2-9"
        }
      ],
      "title": "(1) Cost Against Budget"
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
                "Aetna",
                "Cigna",
                "BCBS"
              ],
              "id": "1052"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Payer",
              "id": "1054"
            },
            {
              "key": "mm",
              "label": "MM",
              "id": "1055"
            },
            {
              "key": "mmTerm",
              "label": "Terms",
              "id": "1056"
            },
            {
              "key": "mmNew",
              "label": "Adds",
              "id": "1057"
            },
            {
              "key": "period",
              "label": "Period",
              "id": "1058"
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
              "id": "1053",
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
              "id": "1060"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Payer",
              "id": "1062"
            },
            {
              "key": "mm",
              "label": "MM",
              "id": "1063"
            },
            {
              "key": "mmTerm",
              "label": "Terms",
              "id": "1064"
            },
            {
              "key": "mmNew",
              "label": "Adds",
              "id": "1065"
            },
            {
              "key": "period",
              "label": "Period",
              "id": "1066"
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
              "id": "1061",
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
              "field": "planPayer",
              "filter": [
                "Aetna"
              ],
              "id": "1070"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Pod",
              "id": "1072"
            },
            {
              "key": "mm",
              "label": "Member Months",
              "id": "1073"
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
              "field": "pcpGrouper2",
              "name": "Pod",
              "id": "1071",
              "rank": 1
            }
          ],
          "cardName": "memberMonth",
          "cardTitle": "Membership - Aetna (By Pod)",
          "layout": {
            "dimensions": {
              "height": "8",
              "width": "14"
            },
            "position": {
              "x": "2",
              "y": "14"
            }
          },
          "visualState": "figure",
          "cardId": "3-5"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "Cigna"
              ],
              "id": "1075"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Pod",
              "id": "1077"
            },
            {
              "key": "mm",
              "label": "Member Months",
              "id": "1078"
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
              "field": "pcpGrouper2",
              "name": "Pod",
              "id": "1076",
              "rank": 1
            }
          ],
          "cardName": "memberMonth",
          "cardTitle": "Membership - Cigna (By Pod)",
          "layout": {
            "dimensions": {
              "height": "8",
              "width": "14"
            },
            "position": {
              "x": "18",
              "y": "14"
            }
          },
          "visualState": "figure",
          "cardId": "3-6"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "BCBS"
              ],
              "id": "1080"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Pod",
              "id": "1082"
            },
            {
              "key": "mm",
              "label": "Member Months",
              "id": "1083"
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
              "field": "pcpGrouper2",
              "name": "Pod",
              "id": "1081",
              "rank": 1
            }
          ],
          "cardName": "memberMonth",
          "cardTitle": "Membership - BCBS (By Pod)",
          "layout": {
            "dimensions": {
              "height": "8",
              "width": "14"
            },
            "position": {
              "x": "2",
              "y": "22"
            }
          },
          "visualState": "figure",
          "cardId": "3-7"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "BCBS-SR"
              ],
              "id": "1085"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Pod",
              "id": "1087"
            },
            {
              "key": "mm",
              "label": "Member Months",
              "id": "1088"
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
              "field": "pcpGrouper2",
              "name": "Pod",
              "id": "1086",
              "rank": 1
            }
          ],
          "cardName": "memberMonth",
          "cardTitle": "Membership = BCBS-SR (By Pod)",
          "layout": {
            "dimensions": {
              "height": "8",
              "width": "14"
            },
            "position": {
              "x": "18",
              "y": "22"
            }
          },
          "visualState": "figure",
          "cardId": "3-8"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "United"
              ],
              "id": "1090"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Pod",
              "id": "1092"
            },
            {
              "key": "mm",
              "label": "Member Months",
              "id": "1093"
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
              "field": "pcpGrouper2",
              "name": "Pod",
              "id": "1091",
              "rank": 1
            }
          ],
          "cardName": "memberMonth",
          "cardTitle": "Membership - United MA (By Pod)",
          "layout": {
            "dimensions": {
              "height": "8",
              "width": "14"
            },
            "position": {
              "x": "2",
              "y": "30"
            }
          },
          "visualState": "figure",
          "cardId": "3-9"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "Medicare"
              ],
              "id": "1095"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Pod",
              "id": "1097"
            },
            {
              "key": "mm",
              "label": "Member Months",
              "id": "1098"
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
              "field": "pcpGrouper2",
              "name": "Pod",
              "id": "1096",
              "rank": 1
            }
          ],
          "cardName": "memberMonth",
          "cardTitle": "Membership - Medicare (By Pod)",
          "layout": {
            "dimensions": {
              "height": "8",
              "width": "14"
            },
            "position": {
              "x": "18",
              "y": "30"
            }
          },
          "visualState": "figure",
          "cardId": "3-10"
        }
      ],
      "title": "(2) Membership Trends"
    },
    {
      "pageNumber": true,
      "cards": [
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "sex",
              "filter": [
                "M"
              ],
              "id": "1177"
            },
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "BCBS",
                "Cigna",
                "Aetna"
              ],
              "id": "1220"
            }
          ],
          "columns": [
            {
              "key": "ageBand",
              "label": "Age",
              "id": "1178",
              "style": {
                "fontWeight": 700
              }
            },
            {
              "key": "members",
              "label": "Active Members",
              "id": "1179"
            },
            {
              "key": "risk",
              "label": "Avg Risk Score",
              "id": "1180"
            },
            {
              "key": "pmpm",
              "label": "TCOC PMPM",
              "id": "1181"
            },
            {
              "key": "pmpmCompare",
              "label": "Network PMPM",
              "id": "1182"
            },
            {
              "key": "riskPercentDiff",
              "label": "% to Bench Risk",
              "id": "1183"
            },
            {
              "key": "pmpmPercentDiff",
              "label": "% to Bench PMPM",
              "id": "1184"
            }
          ],
          "configuration": [
            {
              "name": "age",
              "value": "0,15,21,30,40,50,60,70,80,90,120",
              "id": "1174"
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
              "id": "1176",
              "rank": 1
            }
          ],
          "cardName": "demographics",
          "cardTitle": "Demographics (Male - Commercial)",
          "layout": {
            "dimensions": {
              "height": "15",
              "width": "15"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "table",
          "cardId": "4-1"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "sex",
              "filter": [
                "F"
              ],
              "id": "1188"
            },
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "BCBS",
                "Cigna",
                "Aetna"
              ],
              "id": "1221"
            }
          ],
          "columns": [
            {
              "key": "ageBand",
              "label": "Age",
              "id": "1189",
              "style": {
                "fontWeight": 700
              }
            },
            {
              "key": "members",
              "label": "Active Members",
              "id": "1190"
            },
            {
              "key": "risk",
              "label": "Avg Risk Score",
              "id": "1191"
            },
            {
              "key": "pmpm",
              "label": "TCOC PMPM",
              "id": "1192"
            },
            {
              "key": "pmpmCompare",
              "label": "Network PMPM",
              "id": "1193"
            },
            {
              "key": "riskPercentDiff",
              "label": "% to Bench Risk",
              "id": "1194"
            },
            {
              "key": "pmpmPercentDiff",
              "label": "% to Bench PMPM",
              "id": "1195"
            }
          ],
          "configuration": [
            {
              "name": "age",
              "value": "0,15,21,30,40,50,60,70,80,90,120",
              "id": "1196"
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
              "id": "1197",
              "rank": 1
            }
          ],
          "cardName": "demographics",
          "cardTitle": "Demographics (Female - Commercial)",
          "layout": {
            "dimensions": {
              "height": "15",
              "width": "15"
            },
            "position": {
              "x": "17",
              "y": "5"
            }
          },
          "visualState": "table",
          "cardId": "4-2"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "sex",
              "filter": [
                "M"
              ],
              "id": "1198"
            },
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "Medicare",
                "BCBS-SR",
                "United"
              ],
              "id": "1208"
            }
          ],
          "columns": [
            {
              "key": "ageBand",
              "label": "Age",
              "id": "1199",
              "style": {
                "fontWeight": 700
              }
            },
            {
              "key": "members",
              "label": "Active Members",
              "id": "1200"
            },
            {
              "key": "risk",
              "label": "Avg Risk Score",
              "id": "1201"
            },
            {
              "key": "pmpm",
              "label": "TCOC PMPM",
              "id": "1202"
            },
            {
              "key": "pmpmCompare",
              "label": "Network PMPM",
              "id": "1203"
            },
            {
              "key": "riskPercentDiff",
              "label": "% to Bench Risk",
              "id": "1204"
            },
            {
              "key": "pmpmPercentDiff",
              "label": "% to Bench PMPM",
              "id": "1205"
            }
          ],
          "configuration": [
            {
              "name": "age",
              "value": "0,15,21,30,40,50,60,70,80,90,120",
              "id": "1206"
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
              "id": "1207",
              "rank": 1
            }
          ],
          "cardName": "demographics",
          "cardTitle": "Demographics (Male - Medicare)",
          "layout": {
            "dimensions": {
              "height": "15",
              "width": "15"
            },
            "position": {
              "x": "2",
              "y": "24"
            }
          },
          "visualState": "table",
          "cardId": "4-3"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "sex",
              "filter": [
                "F"
              ],
              "id": "1209"
            },
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "Medicare",
                "BCBS-SR",
                "United"
              ],
              "id": "1210"
            }
          ],
          "columns": [
            {
              "key": "ageBand",
              "label": "Age",
              "id": "1211",
              "style": {
                "fontWeight": 700
              }
            },
            {
              "key": "members",
              "label": "Active Members",
              "id": "1212"
            },
            {
              "key": "risk",
              "label": "Avg Risk Score",
              "id": "1213"
            },
            {
              "key": "pmpm",
              "label": "TCOC PMPM",
              "id": "1214"
            },
            {
              "key": "pmpmCompare",
              "label": "Network PMPM",
              "id": "1215"
            },
            {
              "key": "riskPercentDiff",
              "label": "% to Bench Risk",
              "id": "1216"
            },
            {
              "key": "pmpmPercentDiff",
              "label": "% to Bench PMPM",
              "id": "1217"
            }
          ],
          "configuration": [
            {
              "name": "age",
              "value": "0,15,21,30,40,50,60,70,80,90,120",
              "id": "1218"
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
              "id": "1219",
              "rank": 1
            }
          ],
          "cardName": "demographics",
          "cardTitle": "Demographics (Female - Medicare)",
          "layout": {
            "dimensions": {
              "height": "15",
              "width": "15"
            },
            "position": {
              "x": "17",
              "y": "24"
            }
          },
          "visualState": "table",
          "cardId": "4-4"
        }
      ],
      "title": "(3) Demographics"
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
          "textObjectContent": "<div style='width:50%; margin-top:.4em; float:left;'>\n    <h2 style='margin:0;padding:0;'>All Payer ACO Practice Scorecard</h2>\n    <h2 style='margin:0;margin-top:8px;padding:0;color:rgba(0,0,0,.7)'>Inpatient Detail</h2>\n</div>\n<div style='width:50%; margin-top:.4em; float:left; text-align: right;'>\n    <img src='https://firebasestorage.googleapis.com/v0/b/image-store-26e00.appspot.com/o/arcadiaio-text-black.png?alt=media&token=b74ef5b0-0683-4f3a-9acc-ad874228b51c' style='width:240px;' />\n</div>",
          "cardId": "5-2"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "Aetna"
              ],
              "id": "1103"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Service Category",
              "id": "1105",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalCost",
              "label": "TCOC Spend",
              "id": "1106"
            },
            {
              "key": "costPMPM",
              "label": "TCOC PMPM",
              "id": "1107"
            },
            {
              "key": "costPMPMCompare",
              "label": "Network PMPM",
              "id": "1108"
            },
            {
              "key": "costPMPMPercentDiff",
              "label": "Diff to Network",
              "id": "1109"
            },
            {
              "key": "eventsPerK",
              "label": "Util / K",
              "id": "1110"
            },
            {
              "key": "eventsPerKCompare",
              "label": "Network Util  / K",
              "id": "1111"
            },
            {
              "key": "eventsPerKPercentDiff",
              "label": "Diff to Network",
              "id": "1112"
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
              "field": "rptGrouper2",
              "name": "Service Category",
              "id": "1104",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "PMPM By Category - Aetna",
          "layout": {
            "dimensions": {
              "height": "11",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "table",
          "cardId": "5-3"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "Cigna"
              ],
              "id": "1224"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Service Category",
              "id": "1225",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalCost",
              "label": "TCOC Spend",
              "id": "1226"
            },
            {
              "key": "costPMPM",
              "label": "TCOC PMPM",
              "id": "1227"
            },
            {
              "key": "costPMPMCompare",
              "label": "Network PMPM",
              "id": "1228"
            },
            {
              "key": "costPMPMPercentDiff",
              "label": "Diff to Network",
              "id": "1229"
            },
            {
              "key": "eventsPerK",
              "label": "Util / K",
              "id": "1230"
            },
            {
              "key": "eventsPerKCompare",
              "label": "Network Util  / K",
              "id": "1231"
            },
            {
              "key": "eventsPerKPercentDiff",
              "label": "Diff to Network",
              "id": "1232"
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
              "field": "rptGrouper2",
              "name": "Service Category",
              "id": "1233",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "PMPM By Category - Cigna",
          "layout": {
            "dimensions": {
              "height": "11",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "16"
            }
          },
          "visualState": "table",
          "cardId": "5-4"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "BCBS"
              ],
              "id": "1234"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Service Category",
              "id": "1235",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalCost",
              "label": "TCOC Spend",
              "id": "1236"
            },
            {
              "key": "costPMPM",
              "label": "TCOC PMPM",
              "id": "1237"
            },
            {
              "key": "costPMPMCompare",
              "label": "Network PMPM",
              "id": "1238"
            },
            {
              "key": "costPMPMPercentDiff",
              "label": "Diff to Network",
              "id": "1239"
            },
            {
              "key": "eventsPerK",
              "label": "Util / K",
              "id": "1240"
            },
            {
              "key": "eventsPerKCompare",
              "label": "Network Util  / K",
              "id": "1241"
            },
            {
              "key": "eventsPerKPercentDiff",
              "label": "Diff to Network",
              "id": "1242"
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
              "field": "rptGrouper2",
              "name": "Service Category",
              "id": "1243",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "PMPM By Category - BCBS",
          "layout": {
            "dimensions": {
              "height": "11",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "27"
            }
          },
          "visualState": "table",
          "cardId": "5-5"
        }
      ],
      "title": "(4) PMPM by Category (1 of 2)"
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
                "BCBS-SR"
              ],
              "id": "1246"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Service Category",
              "id": "1247",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalCost",
              "label": "TCOC Spend",
              "id": "1248"
            },
            {
              "key": "costPMPM",
              "label": "TCOC PMPM",
              "id": "1249"
            },
            {
              "key": "costPMPMCompare",
              "label": "Network PMPM",
              "id": "1250"
            },
            {
              "key": "costPMPMPercentDiff",
              "label": "Diff to Network",
              "id": "1251"
            },
            {
              "key": "eventsPerK",
              "label": "Util / K",
              "id": "1252"
            },
            {
              "key": "eventsPerKCompare",
              "label": "Network Util  / K",
              "id": "1253"
            },
            {
              "key": "eventsPerKPercentDiff",
              "label": "Diff to Network",
              "id": "1254"
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
              "field": "rptGrouper2",
              "name": "Service Category",
              "id": "1255",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "PMPM by Category - BCBS-SR",
          "layout": {
            "dimensions": {
              "height": "11",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "table",
          "cardId": "6-1"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "United"
              ],
              "id": "1258"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Service Category",
              "id": "1259",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalCost",
              "label": "TCOC Spend",
              "id": "1260"
            },
            {
              "key": "costPMPM",
              "label": "TCOC PMPM",
              "id": "1261"
            },
            {
              "key": "costPMPMCompare",
              "label": "Network PMPM",
              "id": "1262"
            },
            {
              "key": "costPMPMPercentDiff",
              "label": "Diff to Network",
              "id": "1263"
            },
            {
              "key": "eventsPerK",
              "label": "Util / K",
              "id": "1264"
            },
            {
              "key": "eventsPerKCompare",
              "label": "Network Util  / K",
              "id": "1265"
            },
            {
              "key": "eventsPerKPercentDiff",
              "label": "Diff to Network",
              "id": "1266"
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
              "field": "rptGrouper2",
              "name": "Service Category",
              "id": "1267",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "PMPM by Category - United",
          "layout": {
            "dimensions": {
              "height": "11",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "16"
            }
          },
          "visualState": "table",
          "cardId": "6-2"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "Medicare"
              ],
              "id": "1268"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Service Category",
              "id": "1269",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalCost",
              "label": "TCOC Spend",
              "id": "1270"
            },
            {
              "key": "costPMPM",
              "label": "TCOC PMPM",
              "id": "1271"
            },
            {
              "key": "costPMPMCompare",
              "label": "Network PMPM",
              "id": "1272"
            },
            {
              "key": "costPMPMPercentDiff",
              "label": "Diff to Network",
              "id": "1273"
            },
            {
              "key": "eventsPerK",
              "label": "Util / K",
              "id": "1274"
            },
            {
              "key": "eventsPerKCompare",
              "label": "Network Util  / K",
              "id": "1275"
            },
            {
              "key": "eventsPerKPercentDiff",
              "label": "Diff to Network",
              "id": "1276"
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
              "field": "rptGrouper2",
              "name": "Service Category",
              "id": "1277",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "PMPM by Category - Medicare",
          "layout": {
            "dimensions": {
              "height": "11",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "27"
            }
          },
          "visualState": "table",
          "cardId": "6-3"
        }
      ],
      "title": "(5) PMPM by Category (2 of 2)"
    },
    {
      "pageNumber": true,
      "cards": [

      ],
      "title": "(6) Cost Continuance (1 of 2) - Empty"
    },
    {
      "pageNumber": true,
      "cards": [

      ],
      "title": "(7) Cost Continuance (2 of 2) - Empty"
    },
    {
      "pageNumber": true,
      "cards": [
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "IP Med (Adult)",
                "IP Surg (Adult)"
              ],
              "id": "1132"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Facility",
              "id": "1134",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "1135"
            },
            {
              "key": "totalEvents",
              "label": "Events",
              "id": "1136"
            },
            {
              "key": "eventsPerK",
              "label": "Events / K",
              "id": "1137"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Event",
              "id": "1138"
            },
            {
              "key": "costPMPM",
              "label": "Cost PMPM",
              "id": "1139"
            },
            {
              "key": "emergentPercent",
              "label": "Emergent",
              "id": "1140"
            },
            {
              "key": "readmissionPercent",
              "label": "Readmit",
              "id": "1141"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "totalCost",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "serviceFacility",
              "name": "Facility",
              "id": "1133",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "IP Med/Surg (Acute) by Facility",
          "layout": {
            "dimensions": {
              "height": "17",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "table",
          "cardId": "9-1"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "IP LTC/Rehab",
                "IP SNF"
              ],
              "id": "1281"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Facility",
              "id": "1282",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "1283"
            },
            {
              "key": "totalEvents",
              "label": "Events",
              "id": "1284"
            },
            {
              "key": "eventsPerK",
              "label": "Events / K",
              "id": "1285"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Event",
              "id": "1286"
            },
            {
              "key": "costPMPM",
              "label": "Cost PMPM",
              "id": "1287"
            },
            {
              "key": "emergentPercent",
              "label": "Emergent",
              "id": "1288"
            },
            {
              "key": "readmissionPercent",
              "label": "Readmit",
              "id": "1289"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "totalCost",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "serviceFacility",
              "name": "Facility",
              "id": "1290",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "IP Sub Acute by Facility",
          "layout": {
            "dimensions": {
              "height": "17",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "22"
            }
          },
          "visualState": "table",
          "cardId": "9-2"
        }
      ],
      "title": "(8) Top Facilities (1 of 4)"
    },
    {
      "pageNumber": true,
      "cards": [
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "IP Maternity"
              ],
              "id": "1296"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Facility",
              "id": "1297",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "1298"
            },
            {
              "key": "totalEvents",
              "label": "Events",
              "id": "1299"
            },
            {
              "key": "eventsPerK",
              "label": "Events / K",
              "id": "1300"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Event",
              "id": "1301"
            },
            {
              "key": "costPMPM",
              "label": "Cost PMPM",
              "id": "1302"
            },
            {
              "key": "emergentPercent",
              "label": "Emergent",
              "id": "1303"
            },
            {
              "key": "readmissionPercent",
              "label": "Readmit",
              "id": "1304"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "totalCost",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "serviceFacility",
              "name": "Facility",
              "id": "1305",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "IP Maternity by Facility",
          "layout": {
            "dimensions": {
              "height": "17",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "table",
          "cardId": "10-1"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "IP Behavioral Health"
              ],
              "id": "1306"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Facility",
              "id": "1307",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "1308"
            },
            {
              "key": "totalEvents",
              "label": "Events",
              "id": "1309"
            },
            {
              "key": "eventsPerK",
              "label": "Events / K",
              "id": "1310"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Event",
              "id": "1311"
            },
            {
              "key": "costPMPM",
              "label": "Cost PMPM",
              "id": "1312"
            },
            {
              "key": "emergentPercent",
              "label": "Emergent",
              "id": "1313"
            },
            {
              "key": "readmissionPercent",
              "label": "Readmit",
              "id": "1314"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "totalCost",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "serviceFacility",
              "name": "Facility",
              "id": "1315",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "IP Behavioral Health by Facility",
          "layout": {
            "dimensions": {
              "height": "17",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "22"
            }
          },
          "visualState": "table",
          "cardId": "10-2"
        }
      ],
      "title": "(9) Top Facilities (2 of 4)"
    },
    {
      "pageNumber": true,
      "cards": [
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "ED Visits"
              ],
              "id": "1317"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Facility",
              "id": "1318",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "1319"
            },
            {
              "key": "totalEvents",
              "label": "Events",
              "id": "1320"
            },
            {
              "key": "eventsPerK",
              "label": "Events / K",
              "id": "1321"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Event",
              "id": "1322"
            },
            {
              "key": "costPMPM",
              "label": "Cost PMPM",
              "id": "1323"
            },
            {
              "key": "emergentPercent",
              "label": "Emergent",
              "id": "1324"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "totalCost",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "serviceFacility",
              "name": "Facility",
              "id": "1326",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Emergency Department by Facility",
          "layout": {
            "dimensions": {
              "height": "17",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "table",
          "cardId": "11-1"
        }
      ],
      "title": "(10) Top Facilities (3 of 4)"
    },
    {
      "pageNumber": true,
      "cards": [
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "PCP Visits",
                "Specialist Visits",
                "OP Procedures"
              ],
              "id": "1328"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Facility",
              "id": "1329",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "1330"
            },
            {
              "key": "totalEvents",
              "label": "Events",
              "id": "1331"
            },
            {
              "key": "eventsPerK",
              "label": "Events / K",
              "id": "1332"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Event",
              "id": "1333"
            },
            {
              "key": "costPMPM",
              "label": "Cost PMPM",
              "id": "1334"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "totalCost",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "serviceFacility",
              "name": "Facility",
              "id": "1337",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Outpatient Visits by Facility (Excl ED,BH)",
          "layout": {
            "dimensions": {
              "height": "17",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "table",
          "cardId": "12-1"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "PCP Visits"
              ],
              "id": "1339"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Facility",
              "id": "1340",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "1341"
            },
            {
              "key": "totalEvents",
              "label": "Events",
              "id": "1342"
            },
            {
              "key": "eventsPerK",
              "label": "Events / K",
              "id": "1343"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Event",
              "id": "1344"
            },
            {
              "key": "costPMPM",
              "label": "Cost PMPM",
              "id": "1345"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "totalCost",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "serviceFacility",
              "name": "Facility",
              "id": "1346",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Outpatient BH by Facility",
          "layout": {
            "dimensions": {
              "height": "17",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "22"
            }
          },
          "visualState": "table",
          "cardId": "12-2"
        }
      ],
      "title": "(11) Top Facilities (4 of 4)"
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
          "cardId": "13-1"
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
          "cardId": "13-2"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "Aetna"
              ],
              "id": "1117"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Med Class",
              "id": "1119"
            },
            {
              "key": "cost",
              "label": "Cost",
              "id": "1120"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "1121"
            },
            {
              "key": "fills",
              "label": "Scripts",
              "id": "1122"
            },
            {
              "key": "scriptsK",
              "label": "Scripts / K",
              "id": "1123"
            },
            {
              "key": "pricePerScript",
              "label": "$ / Script",
              "id": "1124"
            },
            {
              "key": "genericPercent",
              "label": "% Generic",
              "id": "1125"
            },
            {
              "key": "pcpPercent",
              "label": "% PCP",
              "id": "1126"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "1127"
            },
            {
              "key": "scriptsKCompare",
              "label": "Bench Scripts / K",
              "id": "1128"
            },
            {
              "key": "pricePerScriptCompare",
              "label": "Bench $ / Script",
              "id": "1129"
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
              "id": "1118",
              "rank": 1
            }
          ],
          "cardName": "medication",
          "cardTitle": "Top Meds by Class (Aetna)",
          "layout": {
            "dimensions": {
              "height": "16",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "figure",
          "cardId": "13-3"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "Cigna"
              ],
              "id": "1348"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Med Class",
              "id": "1349"
            },
            {
              "key": "cost",
              "label": "Cost",
              "id": "1350"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "1351"
            },
            {
              "key": "fills",
              "label": "Scripts",
              "id": "1352"
            },
            {
              "key": "scriptsK",
              "label": "Scripts / K",
              "id": "1353"
            },
            {
              "key": "pricePerScript",
              "label": "$ / Script",
              "id": "1354"
            },
            {
              "key": "genericPercent",
              "label": "% Generic",
              "id": "1355"
            },
            {
              "key": "pcpPercent",
              "label": "% PCP",
              "id": "1356"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "1357"
            },
            {
              "key": "scriptsKCompare",
              "label": "Bench Scripts / K",
              "id": "1358"
            },
            {
              "key": "pricePerScriptCompare",
              "label": "Bench $ / Script",
              "id": "1359"
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
              "id": "1360",
              "rank": 1
            }
          ],
          "cardName": "medication",
          "cardTitle": "Top Meds by Class (Cigna)",
          "layout": {
            "dimensions": {
              "height": "16",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "22"
            }
          },
          "visualState": "figure",
          "cardId": "13-4"
        }
      ],
      "title": "(12) Medications (1 of 2)"
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
                "BCBS",
                "BCBS-SR"
              ],
              "id": "1364"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Med Class",
              "id": "1365"
            },
            {
              "key": "cost",
              "label": "Cost",
              "id": "1366"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "1367"
            },
            {
              "key": "fills",
              "label": "Scripts",
              "id": "1368"
            },
            {
              "key": "scriptsK",
              "label": "Scripts / K",
              "id": "1369"
            },
            {
              "key": "pricePerScript",
              "label": "$ / Script",
              "id": "1370"
            },
            {
              "key": "genericPercent",
              "label": "% Generic",
              "id": "1371"
            },
            {
              "key": "pcpPercent",
              "label": "% PCP",
              "id": "1372"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "1373"
            },
            {
              "key": "scriptsKCompare",
              "label": "Bench Scripts / K",
              "id": "1374"
            },
            {
              "key": "pricePerScriptCompare",
              "label": "Bench $ / Script",
              "id": "1375"
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
              "id": "1376",
              "rank": 1
            }
          ],
          "cardName": "medication",
          "cardTitle": "Medications: BCBS, BCBS-SR",
          "layout": {
            "dimensions": {
              "height": "17",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "figure",
          "cardId": "14-1"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "United",
                "Medicare"
              ],
              "id": "1377"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Med Class",
              "id": "1378"
            },
            {
              "key": "cost",
              "label": "Cost",
              "id": "1379"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "1380"
            },
            {
              "key": "fills",
              "label": "Scripts",
              "id": "1381"
            },
            {
              "key": "scriptsK",
              "label": "Scripts / K",
              "id": "1382"
            },
            {
              "key": "pricePerScript",
              "label": "$ / Script",
              "id": "1383"
            },
            {
              "key": "genericPercent",
              "label": "% Generic",
              "id": "1384"
            },
            {
              "key": "pcpPercent",
              "label": "% PCP",
              "id": "1385"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "1386"
            },
            {
              "key": "scriptsKCompare",
              "label": "Bench Scripts / K",
              "id": "1387"
            },
            {
              "key": "pricePerScriptCompare",
              "label": "Bench $ / Script",
              "id": "1388"
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
              "id": "1389",
              "rank": 1
            }
          ],
          "cardName": "medication",
          "cardTitle": "Medications: United, Medicare",
          "layout": {
            "dimensions": {
              "height": "17",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "22"
            }
          },
          "visualState": "figure",
          "cardId": "14-2"
        }
      ],
      "title": "(13) Medications (2 of 2)"
    },
    {
      "pageNumber": true,
      "cards": [
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
              "id": "1144"
            }
          ],
          "columns": [
            {
              "key": "measure",
              "label": "Measure",
              "id": "1146"
            },
            {
              "key": "period",
              "label": "Period",
              "id": "1147"
            },
            {
              "key": "numerator",
              "label": "Numerator",
              "id": "1148"
            },
            {
              "key": "denominator",
              "label": "Denominator",
              "id": "1149"
            },
            {
              "key": "performance",
              "label": "Performance",
              "id": "1150"
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
              "id": "1145",
              "rank": 1
            }
          ],
          "cardName": "measures",
          "cardTitle": "Quality Measures (Claims Only)",
          "layout": {
            "dimensions": {
              "height": "14",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "figure",
          "cardId": "15-1"
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
              "id": "1391"
            }
          ],
          "columns": [
            {
              "key": "measure",
              "label": "Measure",
              "id": "1392"
            },
            {
              "key": "period",
              "label": "Period",
              "id": "1393"
            },
            {
              "key": "numerator",
              "label": "Numerator",
              "id": "1394"
            },
            {
              "key": "denominator",
              "label": "Denominator",
              "id": "1395"
            },
            {
              "key": "performance",
              "label": "Performance",
              "id": "1396"
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
              "id": "1397",
              "rank": 1
            }
          ],
          "cardName": "measures",
          "cardTitle": "Quality Measures (Hybrid - Claims & EHR)",
          "layout": {
            "dimensions": {
              "height": "14",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "20"
            }
          },
          "visualState": "figure",
          "cardId": "15-2"
        }
      ],
      "title": "(14) Quality"
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
                "Aetna"
              ],
              "id": "1153"
            },
            {
              "exclude": true,
              "field": "condition",
              "filter": [
                "Demographics"
              ],
              "id": "1154"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Condition",
              "id": "1156",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "members",
              "label": "Members",
              "id": "1157"
            },
            {
              "key": "prevalence",
              "label": "Prevalence",
              "id": "1158"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "1159"
            },
            {
              "key": "risk",
              "label": "Risk",
              "id": "1160"
            },
            {
              "key": "ipVisitsPerK",
              "label": "IP / K",
              "id": "1161"
            },
            {
              "key": "edAdmitsPerK",
              "label": "ED / K",
              "id": "1162"
            },
            {
              "key": "los",
              "label": "LOS",
              "id": "1163"
            },
            {
              "key": "prevalenceCompare",
              "label": "Bench Prevalence",
              "id": "1164"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "1165"
            },
            {
              "key": "riskCompare",
              "label": "Bench Risk",
              "id": "1166"
            },
            {
              "key": "ipVisitsPerKCompare",
              "label": "Bench IP / K",
              "id": "1167"
            },
            {
              "key": "edAdmitsPerKCompare",
              "label": "Bench ED / K",
              "id": "1168"
            },
            {
              "key": "losCompare",
              "label": "Bench LOS",
              "id": "1169"
            }
          ],
          "configuration": [
            {
              "name": "riskAlg",
              "value": "HCC",
              "id": "3312"
            },
            {
              "name": "rows",
              "value": "20",
              "id": "3313"
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
              "id": "1155",
              "rank": 1
            }
          ],
          "cardName": "conditions",
          "cardTitle": "Top Conditions: Aetna",
          "layout": {
            "dimensions": {
              "height": "16",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "table",
          "cardId": "16-1"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "Cigna"
              ],
              "id": "1399"
            },
            {
              "exclude": true,
              "field": "condition",
              "filter": [
                "Demographics"
              ],
              "id": "1400"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Condition",
              "id": "1401",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "members",
              "label": "Members",
              "id": "1402"
            },
            {
              "key": "prevalence",
              "label": "Prevalence",
              "id": "1403"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "1404"
            },
            {
              "key": "risk",
              "label": "Risk",
              "id": "1405"
            },
            {
              "key": "ipVisitsPerK",
              "label": "IP / K",
              "id": "1406"
            },
            {
              "key": "edAdmitsPerK",
              "label": "ED / K",
              "id": "1407"
            },
            {
              "key": "los",
              "label": "LOS",
              "id": "1408"
            },
            {
              "key": "prevalenceCompare",
              "label": "Bench Prevalence",
              "id": "1409"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "1410"
            },
            {
              "key": "riskCompare",
              "label": "Bench Risk",
              "id": "1411"
            },
            {
              "key": "ipVisitsPerKCompare",
              "label": "Bench IP / K",
              "id": "1412"
            },
            {
              "key": "edAdmitsPerKCompare",
              "label": "Bench ED / K",
              "id": "1413"
            },
            {
              "key": "losCompare",
              "label": "Bench LOS",
              "id": "1414"
            }
          ],
          "configuration": [
            {
              "name": "riskAlg",
              "value": "HCC",
              "id": "1415"
            },
            {
              "name": "rows",
              "value": "20",
              "id": "1416"
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
              "id": "1417",
              "rank": 1
            }
          ],
          "cardName": "conditions",
          "cardTitle": "Top Conditions: Cigna",
          "layout": {
            "dimensions": {
              "height": "16",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "22"
            }
          },
          "visualState": "table",
          "cardId": "16-2"
        }
      ],
      "title": "(15) Top Conditions (1 of 2)"
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
                "BCBS",
                "BCBS-SR"
              ],
              "id": "1420"
            },
            {
              "exclude": true,
              "field": "condition",
              "filter": [
                "Demographics"
              ],
              "id": "1421"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Condition",
              "id": "1422",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "members",
              "label": "Members",
              "id": "1423"
            },
            {
              "key": "prevalence",
              "label": "Prevalence",
              "id": "1424"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "1425"
            },
            {
              "key": "risk",
              "label": "Risk",
              "id": "1426"
            },
            {
              "key": "ipVisitsPerK",
              "label": "IP / K",
              "id": "1427"
            },
            {
              "key": "edAdmitsPerK",
              "label": "ED / K",
              "id": "1428"
            },
            {
              "key": "los",
              "label": "LOS",
              "id": "1429"
            },
            {
              "key": "prevalenceCompare",
              "label": "Bench Prevalence",
              "id": "1430"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "1431"
            },
            {
              "key": "riskCompare",
              "label": "Bench Risk",
              "id": "1432"
            },
            {
              "key": "ipVisitsPerKCompare",
              "label": "Bench IP / K",
              "id": "1433"
            },
            {
              "key": "edAdmitsPerKCompare",
              "label": "Bench ED / K",
              "id": "1434"
            },
            {
              "key": "losCompare",
              "label": "Bench LOS",
              "id": "1435"
            }
          ],
          "configuration": [
            {
              "name": "riskAlg",
              "value": "HCC",
              "id": "1436"
            },
            {
              "name": "rows",
              "value": "20",
              "id": "1437"
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
              "id": "1438",
              "rank": 1
            }
          ],
          "cardName": "conditions",
          "cardTitle": "Top Conditions: BCBS & BCBS-SR",
          "layout": {
            "dimensions": {
              "height": "16",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "table",
          "cardId": "17-1"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "planPayer",
              "filter": [
                "United",
                "Medicare"
              ],
              "id": "1440"
            },
            {
              "exclude": true,
              "field": "condition",
              "filter": [
                "Demographics"
              ],
              "id": "1441"
            }
          ],
          "columns": [
            {
              "key": "groupName",
              "label": "Condition",
              "id": "1442",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "members",
              "label": "Members",
              "id": "1443"
            },
            {
              "key": "prevalence",
              "label": "Prevalence",
              "id": "1444"
            },
            {
              "key": "pmpm",
              "label": "PMPM",
              "id": "1445"
            },
            {
              "key": "risk",
              "label": "Risk",
              "id": "1446"
            },
            {
              "key": "ipVisitsPerK",
              "label": "IP / K",
              "id": "1447"
            },
            {
              "key": "edAdmitsPerK",
              "label": "ED / K",
              "id": "1448"
            },
            {
              "key": "los",
              "label": "LOS",
              "id": "1449"
            },
            {
              "key": "prevalenceCompare",
              "label": "Bench Prevalence",
              "id": "1450"
            },
            {
              "key": "pmpmCompare",
              "label": "Bench PMPM",
              "id": "1451"
            },
            {
              "key": "riskCompare",
              "label": "Bench Risk",
              "id": "1452"
            },
            {
              "key": "ipVisitsPerKCompare",
              "label": "Bench IP / K",
              "id": "1453"
            },
            {
              "key": "edAdmitsPerKCompare",
              "label": "Bench ED / K",
              "id": "1454"
            },
            {
              "key": "losCompare",
              "label": "Bench LOS",
              "id": "1455"
            }
          ],
          "configuration": [
            {
              "name": "riskAlg",
              "value": "HCC",
              "id": "1456"
            },
            {
              "name": "rows",
              "value": "20",
              "id": "1457"
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
              "id": "1458",
              "rank": 1
            }
          ],
          "cardName": "conditions",
          "cardTitle": "Top Conditions: United & Medicare",
          "layout": {
            "dimensions": {
              "height": "16",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "22"
            }
          },
          "visualState": "table",
          "cardId": "17-2"
        }
      ],
      "title": "(16) Top Conditions (2 of 2)"
    },
    {
      "pageNumber": true,
      "cards": [
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "IP Med (Adult)",
                "IP Surg (Adult)",
                "IP Maternity",
                "IP Behavioral Health",
                "IP Med (Pediatric)",
                "IP Surg (Pediatric)"
              ],
              "id": "1461"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Service Line",
              "id": "1462",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Admits",
              "id": "1464"
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "1471"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Stay",
              "id": "1472"
            },
            {
              "key": "readmissionPercent",
              "label": "% Readm",
              "id": "1473"
            },
            {
              "key": "eventsPerK",
              "label": "Admits / K",
              "id": "1474"
            },
            {
              "key": "costPMPM",
              "label": "$ PMPM",
              "id": "1475"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "totalCost",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "serviceLineMinor",
              "name": "Service Line",
              "id": "1470",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Top Inpatient Service Lines",
          "layout": {
            "dimensions": {
              "height": "40",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "table",
          "cardId": "18-1"
        }
      ],
      "title": "(17) Top IP Service Lines"
    },
    {
      "pageNumber": true,
      "cards": [
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "IP Med (Adult)",
                "IP Surg (Adult)",
                "IP Maternity",
                "IP Behavioral Health",
                "IP Med (Pediatric)",
                "IP Surg (Pediatric)"
              ],
              "id": "1479"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "DRG",
              "id": "1480",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Admits",
              "id": "1481"
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "1482"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Stay",
              "id": "1483"
            },
            {
              "key": "readmissionPercent",
              "label": "% Readm",
              "id": "1484"
            },
            {
              "key": "eventsPerK",
              "label": "Admits / K",
              "id": "1485"
            },
            {
              "key": "costPMPM",
              "label": "$ PMPM",
              "id": "1486"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "totalCost",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "drgDescription",
              "name": "DRG",
              "id": "1487",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Top DRGs",
          "layout": {
            "dimensions": {
              "height": "35",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "table",
          "cardId": "19-1"
        }
      ],
      "title": "(18) Top DRGs"
    },
    {
      "pageNumber": true,
      "cards": [
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "IP Med (Adult)",
                "IP Surg (Adult)",
                "IP Maternity",
                "IP Behavioral Health",
                "IP Med (Pediatric)",
                "IP Surg (Pediatric)"
              ],
              "id": "1490"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Service Line",
              "id": "1491",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "readmissionPercent",
              "label": "% Readm",
              "id": "1492"
            },
            {
              "key": "readmissionPercentCompare",
              "label": "Bench Readm",
              "id": "1493"
            },
            {
              "key": "readmissionPercentPercentDiff",
              "label": "% to Bench",
              "id": "1494"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "readmissionPercent",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "serviceLineMinor",
              "name": "Service Line",
              "id": "1498",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Readmission Rates by Inpatient Service Line",
          "layout": {
            "dimensions": {
              "height": "35",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "table",
          "cardId": "20-1"
        }
      ],
      "title": "(19) Readmission Rates by Service Line"
    },
    {
      "pageNumber": true,
      "cards": [
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "IP Med (Adult)",
                "IP Surg (Adult)",
                "IP Maternity",
                "IP Behavioral Health",
                "IP Med (Pediatric)",
                "IP Surg (Pediatric)"
              ],
              "id": "1501"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "DRG",
              "id": "1502",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "readmissionPercent",
              "label": "% Readm",
              "id": "1503"
            },
            {
              "key": "readmissionPercentCompare",
              "label": "Bench Readm",
              "id": "1504"
            },
            {
              "key": "readmissionPercentPercentDiff",
              "label": "% to Bench",
              "id": "1505"
            }
          ],
          "configuration": [

          ],
          "defaultSort": {
            "columnKey": "readmissionPercent",
            "order": "desc"
          },
          "groupers": [
            {
              "enabled": true,
              "field": "drgDescription",
              "name": "DRG",
              "id": "1506",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Readmissions by DRG",
          "layout": {
            "dimensions": {
              "height": "35",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "table",
          "cardId": "21-1"
        }
      ],
      "title": "(20) Readmission Rates by DRG"
    },
    {
      "pageNumber": true,
      "cards": [
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "ED Visits"
              ],
              "id": "1509"
            },
            {
              "exclude": false,
              "field": "edAvoidableInd",
              "filter": [
                "1"
              ],
              "id": "1518"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Dx Category",
              "id": "1510",
              "style": {
                "fontWeight": 700,
                "width": "180px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Events",
              "id": "1511"
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "1512"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Event",
              "id": "1513"
            },
            {
              "key": "eventsPerK",
              "label": "Events / K",
              "id": "1515"
            },
            {
              "key": "costPMPM",
              "label": "$ PMPM",
              "id": "1516"
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
              "field": "ccsDxMinor",
              "name": "Dx Category",
              "id": "1517",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Top Avoidable ED Diagnoses",
          "layout": {
            "dimensions": {
              "height": "17",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "table",
          "cardId": "22-1"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "ED Visits"
              ],
              "id": "1520"
            },
            {
              "exclude": false,
              "field": "edAvoidableInd",
              "filter": [
                "0"
              ],
              "id": "1521"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Dx Category",
              "id": "1522",
              "style": {
                "fontWeight": 700,
                "width": "180px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Events",
              "id": "1523"
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "1524"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Event",
              "id": "1525"
            },
            {
              "key": "eventsPerK",
              "label": "Events / K",
              "id": "1526"
            },
            {
              "key": "costPMPM",
              "label": "$ PMPM",
              "id": "1527"
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
              "field": "ccsDxMinor",
              "name": "Dx Category",
              "id": "1528",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Top Non-Avoidable ED Diagnoses",
          "layout": {
            "dimensions": {
              "height": "17",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "22"
            }
          },
          "visualState": "table",
          "cardId": "22-2"
        }
      ],
      "title": "(21) Top ED Diagnoses"
    },
    {
      "pageNumber": true,
      "cards": [

      ],
      "title": "(22) Top ASC Utilization Rates - Empty"
    },
    {
      "pageNumber": true,
      "cards": [
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "IP Med (Adult)",
                "IP Surg (Adult)",
                "IP Maternity"
              ],
              "id": "1532"
            },
            {
              "exclude": false,
              "field": "inNetwork",
              "filter": [
                "0"
              ],
              "id": "1542"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Facility",
              "id": "1533",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Admits",
              "id": "1534"
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "1535"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Stay",
              "id": "1537"
            },
            {
              "key": "emergentPercent",
              "label": "Emergent",
              "id": "1539"
            },
            {
              "key": "readmissionPercent",
              "label": "Readmit",
              "id": "1540"
            },
            {
              "key": "eventsPerK",
              "label": "Admits / K",
              "id": "1543"
            },
            {
              "key": "costPMPM",
              "label": "$ PMPM",
              "id": "1544"
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
              "id": "1541",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Top Out-of-Network Facilities (Inpatient)",
          "layout": {
            "dimensions": {
              "height": "17",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "5"
            }
          },
          "visualState": "table",
          "cardId": "24-1"
        },
        {
          "cardFilters": [
            {
              "exclude": false,
              "field": "rptGrouper2",
              "filter": [
                "IP Med (Adult)",
                "IP Surg (Adult)",
                "IP Maternity"
              ],
              "id": "1546"
            },
            {
              "exclude": false,
              "field": "inNetwork",
              "filter": [
                "1"
              ],
              "id": "1547"
            }
          ],
          "columns": [
            {
              "key": "costGroup1",
              "label": "Facility",
              "id": "1548",
              "style": {
                "fontWeight": 700,
                "width": "140px"
              }
            },
            {
              "key": "totalEvents",
              "label": "Admits",
              "id": "1549"
            },
            {
              "key": "totalCost",
              "label": "Cost",
              "id": "1550"
            },
            {
              "key": "costPerEvent",
              "label": "Cost / Stay",
              "id": "1551"
            },
            {
              "key": "emergentPercent",
              "label": "Emergent",
              "id": "1552"
            },
            {
              "key": "readmissionPercent",
              "label": "Readmit",
              "id": "1553"
            },
            {
              "key": "eventsPerK",
              "label": "Admits / K",
              "id": "1554"
            },
            {
              "key": "costPMPM",
              "label": "$ PMPM",
              "id": "1555"
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
              "id": "1556",
              "rank": 1
            }
          ],
          "cardName": "cost",
          "cardTitle": "Top In-Network Facilities (Inpatient)",
          "layout": {
            "dimensions": {
              "height": "17",
              "width": "30"
            },
            "position": {
              "x": "2",
              "y": "22"
            }
          },
          "visualState": "table",
          "cardId": "24-2"
        }
      ],
      "title": "(23) Inpatient Leakage"
    }
  ],
  "title": "BMC Scorecard V2",
  "bookId": 101
}
