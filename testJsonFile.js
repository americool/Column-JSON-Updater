exports.issueConfig = `{
	"bookFilters": [
    {
			"field": "pcpNPI",
			"filter": ["Unknown"],
			"exclude": true
		},
		{
			"field": "atRiskFlag",
			"filter": ["true"],
			"exclude": false
		},
		{
			"field": "claimAtRisk",
			"filter": ["true"],
			"exclude": false
		},
		{
			"field": "planPayer",
			"filter": ["HPHC", "BCBS", "Tufts", "Medicare", "BCBS-SR", "TMP"],
			"exclude": false
		}
	],
	"pages": [
    {
      "rank": 1,
      "pageNumber": true,
      "cards": [
        {
          "cardName": "textObject",
          "layout": {
              "dimensions": {
                  "height": 2,
                  "width": 30
              },
              "position": {
                  "x": 3,
                  "y": 3
              }
          },
          "textObjectContent": "<div style='width:50%; float:left;'><h2 style='margin:0;padding:0;'>BMC Report Book</h2><h4 style='margin: 0;padding:0;'>YTD December 2017</h4></div><div style='width:50%; float:left; text-align: right;'><img src='http://arcadia-assets.s3-website-us-west-2.amazonaws.com/arcadia-logo.png' style='width:100px;' /></div>"
        },
        {
          "cardName": "textObject",
          "layout": {
              "dimensions": {
                  "height": 2,
                  "width": 30
              },
              "position": {
                  "x": 3,
                  "y": 41
              }
          },
          "textObjectContent": "<div style='width:100%; text-align:center'>&copy; 2017 <a href='http://www.arcadiasolutions.com/' target='_blank'>Arcadia Healthcare Solutions</a></div>"
        },
        {
          "cardName": "costCategory",
          "visualState": "table",
          "cardTitle": "Cost and Budget By Product",
          "cardFilters": [],
          "groupers": [
            {
              "name": "Payer",
              "field": "planPayer",
              "enabled": true,
              "rank": 1
            },
            {
              "name": "Dogs",
              "field": "planPayer",
              "enabled": false,
              "rank": 1
            },
            {
              "name": "Cats",
              "field": "planPayer",
              "enabled": true,
              "rank": 1
            }
          ],
          "configuration": [
            {"name":"contractName", "value": "ACO"}
          ],
          "layout": {
            "dimensions": {
              "height": 10,
              "width": 30
            },
            "position": {
              "x": 3,
              "y": 6
            }
          },
          "columns": [
              {"key": "groupName", "label": "Payer"},
              {"key": "activeMembers", "label": "Active Members"},
              {"key": "cumMembers", "label": "Cumulative Members"},
              {"key": "mm", "label": "Member Months"},
              {"key": "tcoc", "label": "Cost"},
              {"key": "pmpm", "label": "Cost PMPM"},
              {"key": "budget", "label": "Budget"},
              {"key": "riskAdjBudget", "label": "Risk Adjusted Budget"},
              {"key": "diffFromRiskAdjBudget", "label": "Diff form Budget"},
              {"key": "percentDiffFromRiskAdjBudget", "label": "% Diff from Budget"},
              {"key": "startingRisk", "label": "Starting Risk"},
              {"key": "currentRisk", "label": "Current Risk"},
              {"key": "currentRiskCompare", "label": "Comparison Current Risk"},
              {"key": "rateOfChangeInRisk", "label": "Rate of Change"},
              {"key": "rateOfChangeInRiskCompare", "label": "Comparison Rate of Change"}
          ]
        },
        {
            "cardName": "costCategory",
            "defaultSort": {
              "columnKey": "activeMembers",
              "order": "desc"
            },
            "visualState": "table",
            "cardTitle": "Cost and Budget - BCBS",
            "cardFilters": [
                {
                    "field": "planPayer",
                    "filter": ["BCBS"],
                    "exclude": false
                }
            ],
            "groupers": [
              {
                "name": "Practice",
                "field": "pcpGrouper3",
                "enabled": true,
                "rank": 1
              }
            ],
            "configuration": [
              {"name":"contractName", "value": "ACO"}
            ],
            "layout": {
              "dimensions": {
                "height": 11,
                "width": 14
              },
              "position": {
                "x": 3,
                "y": 17
              }
            },
            "columns": [
                {"key": "groupName", "label": "Practice"},
                {"key": "activeMembers", "label": "Active Members"},
                {"key": "pmpm", "label": "Cost PMPM"},
                {"key": "budget", "label": "Budget"},
                {"key": "riskAdjBudget", "label": "Risk Adjusted Budget"},
                {"key": "diffFromRiskAdjBudget", "label": "Diff from Budget"},
                {"key": "percentDiffFromRiskAdjBudget", "label": "% Diff from Budget"}
            ]
        },
          {
          "cardName": "costCategory",
          "visualState": "table",
          "cardTitle": "Cost and Budget - HPHC",
          "cardFilters": [
              {
                  "field": "planPayer",
                  "filter": ["HPHC"],
                  "exclude": false
              }
          ],
          "groupers": [
            {
              "name": "Practice",
              "field": "pcpGrouper3",
              "enabled": true,
              "rank": 1
            }
          ],
          "configuration": [
            {"name":"contractName", "value": "ACO"}
          ],
          "layout": {
            "dimensions": {
              "height": 11,
              "width": 14
            },
            "position": {
              "x": 19,
              "y": 17
            }
          },
          "columns": [
              {"key": "groupName", "label": "Practice"},
              {"key": "activeMembers", "label": "Active Members"},
              {"key": "pmpm", "label": "Cost PMPM"},
              {"key": "budget", "label": "Budget"},
              {"key": "riskAdjBudget", "label": "Risk Adjusted Budget"},
              {"key": "diffFromRiskAdjBudget", "label": "Diff from Budget"},
              {"key": "percentDiffFromRiskAdjBudget", "label": "% Diff from Budget"}
            ]
        },
          {
          "cardName": "costCategory",
          "visualState": "table",
          "cardTitle": "Cost and Budget - Tufts",
          "cardFilters": [
              {
                  "field": "planPayer",
                  "filter": ["Tufts"],
                  "exclude": false
              }
          ],
          "groupers": [
            {
              "name": "Practice",
              "field": "pcpGrouper3",
              "enabled": true,
              "rank": 1
            }
          ],
          "configuration": [
            {"name":"contractName", "value": "ACO"}
          ],
          "layout": {
            "dimensions": {
              "height": 11,
              "width": 14
            },
            "position": {
              "x": 3,
              "y": 29
            }
          },
          "columns": [
              {"key": "groupName", "label": "Practice"},
              {"key": "activeMembers", "label": "Active Members"},
              {"key": "pmpm", "label": "Cost PMPM"},
              {"key": "budget", "label": "Budget"},
              {"key": "riskAdjBudget", "label": "Risk Adjusted Budget"},
              {"key": "diffFromRiskAdjBudget", "label": "Diff from Budget"},
              {"key": "percentDiffFromRiskAdjBudget", "label": "% Diff from Budget"}
          ]
        },
          {
          "cardName": "costCategory",
          "visualState": "table",
          "cardTitle": "Cost and Budget - Medicare",
          "cardFilters": [
              {
                  "field": "planPayer",
                  "filter": ["Medicare"],
                  "exclude": false
              }
          ],
          "groupers": [
            {
              "name": "Practice",
              "field": "pcpGrouper3",
              "enabled": true,
              "rank": 1
            }
          ],
          "configuration": [
            {"name":"contractName", "value": "ACO"}
          ],
          "layout": {
            "dimensions": {
              "height": 11,
              "width": 14
            },
            "position": {
              "x": 19,
              "y": 29
            }
          },
          "columns": [
              {"key": "groupName", "label": "Practice"},
              {"key": "activeMembers", "label": "Active Members"},
              {"key": "pmpm", "label": "Cost PMPM"},
              {"key": "budget", "label": "Budget"},
              {"key": "riskAdjBudget", "label": "Risk Adjusted Budget"},
              {"key": "diffFromRiskAdjBudget", "label": "Diff from Budget"},
              {"key": "percentDiffFromRiskAdjBudget", "label": "% Diff from Budget"}
          ]
        }
      ]
    },
    { "rank": 2,
        "pageNumber": true,
        "cards": [
            {
                "cardName": "textObject",
                "layout": {
                    "dimensions": {
                        "height": 2,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 3
                    }
                },
                "textObjectContent": "<div style='width:50%; float:left;'><h2 style='margin:0;padding:0;'>BMC Report Book</h2><h4 style='margin: 0;padding:0;'>YTD December 2017</h4></div><div style='width:50%; float:left; text-align: right;'><img src='http://arcadia-assets.s3-website-us-west-2.amazonaws.com/arcadia-logo.png' style='width:100px;' /></div>"
            },
            {
                "cardName": "textObject",
                "layout": {
                    "dimensions": {
                        "height": 2,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 41
                    }
                },
                "textObjectContent": "<div style='width:100%; text-align:center'>&copy; 2017 <a href='http://www.arcadiasolutions.com/' target='_blank'>Arcadia Healthcare Solutions</a></div>"
            },
            {
                "cardName": "memberMonth",
                "visualState": "figure",
                "cardTitle": "Membership - BCBS",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": ["BCBS"],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Product",
                        "field": "planPayer",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 4,
                        "width": 14
                    },
                    "position": {
                        "x": 3,
                        "y": 6
                    }
                },
                "columns": [
                    { "key": "period" },
                    { "key": "groupName" },
                    { "key": "mm" },
                    { "key": "mmNew" },
                    { "key": "mmCompare" }
                ]
            }, {
                "cardName": "memberMonth",
                "visualState": "figure",
                "cardTitle": "Membership - Tufts",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": ["Tufts"],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Product",
                        "field": "planPayer",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 4,
                        "width": 14
                    },
                    "position": {
                        "x": 19,
                        "y": 6
                    }
                },
                "columns": [
                    { "key": "period" },
                    { "key": "groupName" },
                    { "key": "mm" },
                    { "key": "mmNew" },
                    { "key": "mmCompare" }
                ]
            }, {
                "cardName": "memberMonth",
                "visualState": "figure",
                "cardTitle": "Membership - HPHC",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": ["HPHC"],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Product",
                        "field": "planPayer",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 4,
                        "width": 14
                    },
                    "position": {
                        "x": 3,
                        "y": 11
                    }
                },
                "columns": [
                    { "key": "period" },
                    { "key": "groupName" },
                    { "key": "mm" },
                    { "key": "mmNew" },
                    { "key": "mmCompare" }
                ]
            }, {
                "cardName": "memberMonth",
                "visualState": "figure",
                "cardTitle": "Membership - Medicare",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": ["Medicare"],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Product",
                        "field": "planPayer",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 4,
                        "width": 14
                    },
                    "position": {
                        "x": 19,
                        "y": 11
                    }
                },
                "columns": [
                    { "key": "period" },
                    { "key": "groupName" },
                    { "key": "mm" },
                    { "key": "mmNew" },
                    { "key": "mmCompare" }
                ]
            }, {
                "cardName": "memberMonth",
                "visualState": "figure",
                "cardTitle": "Membership - BCBS-SR",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": ["BCBS_SR"],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Product",
                        "field": "planPayer",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 4,
                        "width": 14
                    },
                    "position": {
                        "x": 3,
                        "y": 16
                    }
                },
                "columns": [
                    { "key": "period" },
                    { "key": "groupName" },
                    { "key": "mm" },
                    { "key": "mmNew" },
                    { "key": "mmCompare" }
                ]
            }, {
                "cardName": "memberMonth",
                "visualState": "figure",
                "cardTitle": "Membership - TMP",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": ["TMP"],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Product",
                        "field": "planPayer",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 4,
                        "width": 14
                    },
                    "position": {
                        "x": 19,
                        "y": 16
                    }
                },
                "columns": [
                    { "key": "period" },
                    { "key": "groupName" },
                    { "key": "mm" },
                    { "key": "mmNew" },
                    { "key": "mmCompare" }
                ]
            }
            , {
                "cardName": "memberMonth",
                "visualState": "figure",
                "cardTitle": "Membership - BCBS",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": ["BCBS"],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Pod",
                        "field": "pcpGrouper2",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 8,
                        "width": 10
                    },
                    "position": {
                        "x": 3,
                        "y": 22
                    }
                },
                "columns": [
                    { "key": "period" },
                    { "key": "groupName" },
                    { "key": "mm" },
                    { "key": "mmNew" },
                    { "key": "mmCompare" }
                ]
            }, {
                "cardName": "memberMonth",
                "visualState": "figure",
                "cardTitle": "Membership - Tufts",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": ["Tufts"],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Pod",
                        "field": "pcpGrouper2",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 8,
                        "width": 10
                    },
                    "position": {
                        "x": 13,
                        "y": 22
                    }
                },
                "columns": [
                    { "key": "period" },
                    { "key": "groupName" },
                    { "key": "mm" },
                    { "key": "mmNew" },
                    { "key": "mmCompare" }
                ]
            }, {
                "cardName": "memberMonth",
                "visualState": "figure",
                "cardTitle": "Membership - HPHC",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": ["HPHC"],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Pod",
                        "field": "pcpGrouper2",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 8,
                        "width": 10
                    },
                    "position": {
                        "x": 23,
                        "y": 22
                    }
                },
                "columns": [
                    { "key": "period" },
                    { "key": "groupName" },
                    { "key": "mm" },
                    { "key": "mmNew" },
                    { "key": "mmCompare" }
                ]
            }, {
                "cardName": "memberMonth",
                "visualState": "figure",
                "cardTitle": "Membership - Medicare",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": ["Medicare"],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Pod",
                        "field": "pcpGrouper2",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 8,
                        "width": 10
                    },
                    "position": {
                        "x": 3,
                        "y": 31
                    }
                },
                "columns": [
                    { "key": "period" },
                    { "key": "groupName" },
                    { "key": "mm" },
                    { "key": "mmNew" },
                    { "key": "mmCompare" }
                ]
            }, {
                "cardName": "memberMonth",
                "visualState": "figure",
                "cardTitle": "Membership - BCBS-SR",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": ["BCBS-SR"],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Pod",
                        "field": "pcpGrouper2",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 8,
                        "width": 10
                    },
                    "position": {
                        "x": 13,
                        "y": 31
                    }
                },
                "columns": [
                    { "key": "period" },
                    { "key": "groupName" },
                    { "key": "mm" },
                    { "key": "mmNew" },
                    { "key": "mmCompare" }
                ]
            }, {
                "cardName": "memberMonth",
                "visualState": "figure",
                "cardTitle": "Membership - TMP",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": ["TMP"],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Pod",
                        "field": "pcpGrouper2",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 8,
                        "width": 10
                    },
                    "position": {
                        "x": 23,
                        "y": 31
                    }
                },
                "columns": [
                    { "key": "period" },
                    { "key": "groupName" },
                    { "key": "mm" },
                    { "key": "mmNew" },
                    { "key": "mmCompare" }
                ]
            }
        ]
    },
    {
        "rank": 3,
        "pageNumber": true,
        "cards": [
            {
                "cardName": "textObject",
                "layout": {
                    "dimensions": {
                        "height": 2,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 3
                    }
                },
                "textObjectContent": "<div style='width:50%; float:left;'><h2 style='margin:0;padding:0;'>BMC Report Book</h2><h4 style='margin: 0;padding:0;'>YTD December 2017</h4></div><div style='width:50%; float:left; text-align: right;'><img src='http://arcadia-assets.s3-website-us-west-2.amazonaws.com/arcadia-logo.png' style='width:100px;' /></div>"
            },
            {
                "cardName": "textObject",
                "layout": {
                    "dimensions": {
                        "height": 2,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 41
                    }
                },
                "textObjectContent": "<div style='width:100%; text-align:center'>&copy; 2017 <a href='http://www.arcadiasolutions.com/' target='_blank'>Arcadia Healthcare Solutions</a></div>"
            },
            {
                "cardName": "demographics",
                "visualState": "table",
                "cardTitle": "Demographics Male (BCBS, Tufts, BCBS-SR)",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": ["BCBS", "Tufts", "BCBS-SR"],
                        "exclude": false
                    },
                    {
                        "field": "sex",
                        "filter": ["M"],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Sex",
                        "field": "sex",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "configuration": [
                    {
                        "name": "age",
                        "value": "0,1,5,10,15,21,25,30,35,40,45,50,55,60,65,120"
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 14,
                        "width": 19
                    },
                    "position": {
                        "x": 3,
                        "y": 6
                    }
                },
                "columns": [
                    {
                        "key": "ageBand",
                        "label": "Age"
                    },
                    {
                        "key": "members",
                        "label": "Active Members"
                    },
                    {
                        "key": "risk",
                        "label": "Avg Risk"
                    },
                    {
                        "key": "pmpm",
                        "label": "PMPM"
                    },
                    {
                        "key": "pmpmCompare",
                        "label": "Bench PMPM"
                    }
                ]
            },{
                "cardName": "demographics",
                "visualState": "table",
                "cardTitle": "Demographics Female (BCBS, Tufts, BCBS-SR)",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": ["BCBS", "Tufts", "BCBS-SR"],
                        "exclude": false
                    },
                    {
                        "field": "sex",
                        "filter": ["F"],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Sex",
                        "field": "sex",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "configuration": [
                    {
                        "name": "age",
                        "value": "0,1,5,10,15,21,25,30,35,40,45,50,55,60,65,120"
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 14,
                        "width": 10
                    },
                    "position": {
                        "x": 23,
                        "y": 6
                    }
                },
                "columns": [
                    {
                        "key": "members",
                        "label": "Active Members"
                    },
                    {
                        "key": "risk",
                        "label": "Avg Risk"
                    },
                    {
                        "key": "pmpm",
                        "label": "PMPM"
                    },
                    {
                        "key": "pmpmCompare",
                        "label": "Bench PMPM"
                    }
                ]
            },{
                "cardName": "demographics",
                "visualState": "table",
                "cardTitle": "Demographics Male (HPHC, Medicare, TMP)",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": ["HPHC", "Medicare", "TMP"],
                        "exclude": false
                    },
                    {
                        "field": "sex",
                        "filter": ["M"],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Sex",
                        "field": "sex",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "configuration": [
                    {
                        "name": "age",
                        "value": "0,1,5,10,15,21,25,30,35,40,45,50,55,60,65,120"
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 14,
                        "width": 19
                    },
                    "position": {
                        "x": 3,
                        "y": 22
                    }
                },
                "columns": [
                    {
                        "key": "ageBand",
                        "label": "Age"
                    },
                    {
                        "key": "members",
                        "label": "Active Members"
                    },
                    {
                        "key": "risk",
                        "label": "Avg Risk"
                    },
                    {
                        "key": "pmpm",
                        "label": "PMPM"
                    },
                    {
                        "key": "pmpmCompare",
                        "label": "Bench PMPM"
                    }
                ]
            },{
                "cardName": "demographics",
                "visualState": "table",
                "cardTitle": "Demographics Female (HPHC, Medicare, TMP)",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": ["HPHC", "Medicare", "TMP"],
                        "exclude": false
                    },
                    {
                        "field": "sex",
                        "filter": ["F"],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Sex",
                        "field": "sex",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "configuration": [
                    {
                        "name": "age",
                        "value": "0,1,5,10,15,21,25,30,35,40,45,50,55,60,65,120"
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 14,
                        "width": 10
                    },
                    "position": {
                        "x": 23,
                        "y": 22
                    }
                },
                "columns": [
                    {
                        "key": "members",
                        "label": "Active Members"
                    },
                    {
                        "key": "risk",
                        "label": "Avg Risk"
                    },
                    {
                        "key": "pmpm",
                        "label": "PMPM"
                    },
                    {
                        "key": "pmpmCompare",
                        "label": "Bench PMPM"
                    }
                ]
            }
        ]
    },
    {
        "rank": 4,
        "pageNumber": true,
        "cards": [
            {
                "cardName": "textObject",
                "layout": {
                    "dimensions": {
                        "height": 2,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 3
                    }
                },
                "textObjectContent": "<div style='width:50%; float:left;'><h2 style='margin:0;padding:0;'>BMC Report Book</h2><h4 style='margin: 0;padding:0;'>YTD December 2017</h4></div><div style='width:50%; float:left; text-align: right;'><img src='http://arcadia-assets.s3-website-us-west-2.amazonaws.com/arcadia-logo.png' style='width:100px;' /></div>"
            },
            {
                "cardName": "textObject",
                "layout": {
                    "dimensions": {
                        "height": 2,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 41
                    }
                },
                "textObjectContent": "<div style='width:100%; text-align:center'>&copy; 2017 <a href='http://www.arcadiasolutions.com/' target='_blank'>Arcadia Healthcare Solutions</a></div>"
            },
            {
                "cardName": "cost",
                "visualState": "table",
                "cardTitle": "PMPM By Category (BCBS)",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": [ "BCBS" ],
                        "exclude": false
                    }],
                "groupers": [
                    {
                        "name": "Service Category",
                        "field": "rptGrouper2",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 10,
                        "width": 18
                    },
                    "position": {
                        "x": 3,
                        "y": 6
                    }
                },
                "columns": [
                    {"key": "costGroup1", "label": "Svc Category"},
                    {"key": "totalCost", "label": "Total Cost"},
                    {"key": "costPMPM", "label": "PMPM"},
                    {"key": "costPMPMCompare", "label": "Bench PMPM"},
                    {"key": "costPMPMPercentDiff", "label": "% Diff PMPM"}
                ]
        },{
                "cardName": "cost",
                "visualState": "table",
                "cardTitle": "PMPM By Category (Tufts)",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": [ "Tufts" ],
                        "exclude": false
                    }],
                "groupers": [
                    {
                        "name": "Service Category",
                        "field": "rptGrouper2",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 10,
                        "width": 11
                    },
                    "position": {
                        "x": 22,
                        "y": 6
                    }
                },
                "columns": [
                    {"key": "totalCost", "label": "Total Cost"},
                    {"key": "costPMPM", "label": "PMPM"},
                    {"key": "costPMPMCompare", "label": "Bench PMPM"},
                    {"key": "costPMPMPercentDiff", "label": "% Diff PMPM"}
                ]
            },{
                "cardName": "cost",
                "visualState": "table",
                "cardTitle": "PMPM By Category (HPHC)",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": [ "HPHC" ],
                        "exclude": false
                    }],
                "groupers": [
                    {
                        "name": "Service Category",
                        "field": "rptGrouper2",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 10,
                        "width": 18
                    },
                    "position": {
                        "x": 3,
                        "y": 17
                    }
                },
                "columns": [
                    {"key": "costGroup1", "label": "Svc Category"},
                    {"key": "totalCost", "label": "Total Cost"},
                    {"key": "costPMPM", "label": "PMPM"},
                    {"key": "costPMPMCompare", "label": "Bench PMPM"},
                    {"key": "costPMPMPercentDiff", "label": "% Diff PMPM"}
                ]
            },{
                "cardName": "cost",
                "visualState": "table",
                "cardTitle": "PMPM By Category (Medicare)",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": [ "Medicare" ],
                        "exclude": false
                    }],
                "groupers": [
                    {
                        "name": "Service Category",
                        "field": "rptGrouper2",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 10,
                        "width": 11
                    },
                    "position": {
                        "x": 22,
                        "y": 17
                    }
                },
                "columns": [
                    {"key": "totalCost", "label": "Total Cost"},
                    {"key": "costPMPM", "label": "PMPM"},
                    {"key": "costPMPMCompare", "label": "Bench PMPM"},
                    {"key": "costPMPMPercentDiff", "label": "% Diff PMPM"}
                ]
            },{
                "cardName": "cost",
                "visualState": "table",
                "cardTitle": "PMPM By Category (BCBS-SR)",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": [ "BCBS-SR" ],
                        "exclude": false
                    }],
                "groupers": [
                    {
                        "name": "Service Category",
                        "field": "rptGrouper2",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 10,
                        "width": 18
                    },
                    "position": {
                        "x": 3,
                        "y": 27
                    }
                },
                "columns": [
                    {"key": "costGroup1", "label": "Svc Category"},
                    {"key": "totalCost", "label": "Total Cost"},
                    {"key": "costPMPM", "label": "PMPM"},
                    {"key": "costPMPMCompare", "label": "Bench PMPM"},
                    {"key": "costPMPMPercentDiff", "label": "% Diff PMPM"}
                ]
            },{
                "cardName": "cost",
                "visualState": "table",
                "cardTitle": "PMPM By Category (TMP)",
                "cardFilters": [
                    {
                        "field": "planPayer",
                        "filter": [ "TMP" ],
                        "exclude": false
                    }],
                "groupers": [
                    {
                        "name": "Service Category",
                        "field": "rptGrouper2",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 10,
                        "width": 11
                    },
                    "position": {
                        "x": 22,
                        "y": 28
                    }
                },
                "columns": [
                    {"key": "totalCost", "label": "Total Cost"},
                    {"key": "costPMPM", "label": "PMPM"},
                    {"key": "costPMPMCompare", "label": "Bench PMPM"},
                    {"key": "costPMPMPercentDiff", "label": "% Diff PMPM"}
                ]
            }
        ]
    },
    {
        "rank": 5,
        "pageNumber": true,
        "cards": [
            {
                "cardName": "textObject",
                "layout": {
                    "dimensions": {
                        "height": 2,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 3
                    }
                },
                "textObjectContent": "<div style='width:50%; float:left;'><h2 style='margin:0;padding:0;'>BMC Report Book</h2><h4 style='margin: 0;padding:0;'>YTD December 2017</h4></div><div style='width:50%; float:left; text-align: right;'><img src='http://arcadia-assets.s3-website-us-west-2.amazonaws.com/arcadia-logo.png' style='width:100px;' /></div>"
            },
            {
                "cardName": "textObject",
                "layout": {
                    "dimensions": {
                        "height": 2,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 41
                    }
                },
                "textObjectContent": "<div style='width:100%; text-align:center'>&copy; 2017 <a href='http://www.arcadiasolutions.com/' target='_blank'>Arcadia Healthcare Solutions</a></div>"
            },
            {
                "cardName": "cost",
                "visualState": "table",
                "cardTitle": "Inpatient Utilization by Facility",
                "cardFilters": [
                    {
                        "field": "rptGrouper2",
                        "filter": [ "IP Med (Pediatric)", "IP Surg (Pediatric)", "IP Med (Adult)", "IP Surg (Adult)", "IP SNF", "IP Maternity" ],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Service Facility",
                        "field": "serviceFacility",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 16,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 6
                    }
                },
                "columns": [
                    { "key": "costGroup1", "label": "Facility" },
                    { "key": "totalCost", "label": "Cost" },
                    { "key": "totalEvents", "label": "Events" },
                    { "key": "eventsPerK", "label": "Events / K" },
                    { "key": "costPerEvent", "label": "Cost / Event" },
                    { "key": "costPMPM", "label": "Cost PMPM" },
                    { "key": "leakagePercent", "label": "Leakage" },
                    { "key": "emergentPercent", "label": "Emergent" },
                    { "key": "readmissionPercent", "label": "Readmission" }
                ]
            }, {
                "cardName": "cost",
                "visualState": "table",
                "cardTitle": "Emergency Department Utilization by Facility",
                "cardFilters": [
                    {
                        "field": "rptGrouper2",
                        "filter": [ "ED Visits" ],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Service Facility",
                        "field": "serviceFacility",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 16,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 23
                    }
                },
                "columns": [
                    { "key": "costGroup1", "label": "Facility" },
                    { "key": "totalCost", "label": "Cost" },
                    { "key": "totalEvents", "label": "Events" },
                    { "key": "eventsPerK", "label": "Events / K" },
                    { "key": "costPerEvent", "label": "Cost / Event" },
                    { "key": "costPMPM", "label": "Cost PMPM" },
                    { "key": "leakagePercent", "label": "Leakage" },
                    { "key": "emergentPercent", "label": "Emergent" },
                    { "key": "readmissionPercent", "label": "Readmission" }
                ]
            }
        ]
    },
    {
        "rank": 6,
        "pageNumber": true,
        "cards": [
            {
                "cardName": "textObject",
                "layout": {
                    "dimensions": {
                        "height": 2,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 3
                    }
                },
                "textObjectContent": "<div style='width:50%; float:left;'><h2 style='margin:0;padding:0;'>BMC Report Book</h2><h4 style='margin: 0;padding:0;'>YTD December 2017</h4></div><div style='width:50%; float:left; text-align: right;'><img src='http://arcadia-assets.s3-website-us-west-2.amazonaws.com/arcadia-logo.png' style='width:100px;' /></div>"
            },
            {
                "cardName": "textObject",
                "layout": {
                    "dimensions": {
                        "height": 2,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 41
                    }
                },
                "textObjectContent": "<div style='width:100%; text-align:center'>&copy; 2017 <a href='http://www.arcadiasolutions.com/' target='_blank'>Arcadia Healthcare Solutions</a></div>"
            },
            {
                "cardName": "cost",
                "visualState": "table",
                "cardTitle": "Outpatient Visits by Facility (Excl. ED, BH)",
                "cardFilters": [
                    {
                        "field": "rptGrouper2",
                        "filter": [ "Specialist Visits","PCP Visits","OP Procedures","PT/OT/ST","Clinic Visits" ],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Service Facility",
                        "field": "serviceFacility",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 16,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 6
                    }
                },
                "columns": [
                    { "key": "costGroup1", "label": "Facility" },
                    { "key": "totalCost", "label": "Cost" },
                    { "key": "totalEvents", "label": "Events" },
                    { "key": "eventsPerK", "label": "Events / K" },
                    { "key": "costPerEvent", "label": "Cost / Event" },
                    { "key": "costPMPM", "label": "Cost PMPM" },
                    { "key": "leakagePercent", "label": "Leakage" },
                    { "key": "emergentPercent", "label": "Emergent" },
                    { "key": "readmissionPercent", "label": "Readmission" }
                ]
            }, {
                "cardName": "cost",
                "visualState": "table",
                "cardTitle": "BH Utilization by Facility",
                "cardFilters": [
                    {
                        "field": "rptGrouper2",
                        "filter": [ "IP Behavioral Health" ],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Service Facility",
                        "field": "serviceFacility",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 16,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 23
                    }
                },
                "columns": [
                    { "key": "costGroup1", "label": "Facility" },
                    { "key": "totalCost", "label": "Cost" },
                    { "key": "totalEvents", "label": "Events" },
                    { "key": "eventsPerK", "label": "Events / K" },
                    { "key": "costPerEvent", "label": "Cost / Event" },
                    { "key": "costPMPM", "label": "Cost PMPM" },
                    { "key": "leakagePercent", "label": "Leakage" },
                    { "key": "emergentPercent", "label": "Emergent" },
                    { "key": "readmissionPercent", "label": "Readmission" }
                ]
            }
        ]
    },
    {
        "rank": 7,
        "pageNumber": true,
        "cards": [
            {
                "cardName": "textObject",
                "layout": {
                    "dimensions": {
                        "height": 2,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 3
                    }
                },
                "textObjectContent": "<div style='width:50%; float:left;'><h2 style='margin:0;padding:0;'>BMC Report Book</h2><h4 style='margin: 0;padding:0;'>YTD December 2017</h4></div><div style='width:50%; float:left; text-align: right;'><img src='http://arcadia-assets.s3-website-us-west-2.amazonaws.com/arcadia-logo.png' style='width:100px;' /></div>"
            },
            {
                "cardName": "textObject",
                "layout": {
                    "dimensions": {
                        "height": 2,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 41
                    }
                },
                "textObjectContent": "<div style='width:100%; text-align:center'>&copy; 2017 <a href='http://www.arcadiasolutions.com/' target='_blank'>Arcadia Healthcare Solutions</a></div>"
            },
            {
                "cardName": "medication",
                "visualState": "figure",
                "cardTitle": "Medications: BCBS",
                "cardFilters": [{
                    "field": "planPayer",
                    "filter": ["BCBS"],
                    "exclude": false
                }],
                "groupers": [{
                    "name": "Medication Class",
                    "field": "theragroup1",
                    "enabled": true,
                    "rank": 1
                }],
                "layout": {
                    "dimensions": {
                        "height": 16,
                        "width": 17
                    },
                    "position": {
                        "x": 3,
                        "y": 6
                    }
                },
                "columns": [
                    {"key": "groupName", "label": "Medication Class"},
                    {"key": "pmpm", "label": "Cost PMPM"},
                    {"key": "scriptsK", "label": "Scripts/K"},
                    {"key": "pricePerScript", "label": "$/Script"},
                    {"key": "pmpmCompare", "label": "Bench PMPM"},
                    {"key": "pmpmPercentDiff", "label": "Diff Bench"}
                ]
            },{
                "cardName": "medication",
                "visualState": "figure",
                "cardTitle": "Medications: HPHC",
                "cardFilters": [{
                    "field": "planPayer",
                    "filter": ["HPHC"],
                    "exclude": false
                }],
                "groupers": [{
                    "name": "Medication Class",
                    "field": "theragroup1",
                    "enabled": true,
                    "rank": 1
                }],
                "layout": {
                    "dimensions": {
                        "height": 16,
                        "width": 12
                    },
                    "position": {
                        "x": 21,
                        "y": 6
                    }
                },
                "columns": [
                    {"key": "groupName", "label": "Medication Class"},
                    {"key": "pmpm", "label": "Cost PMPM"},
                    {"key": "scriptsK", "label": "Scripts/K"},
                    {"key": "pricePerScript", "label": "$/Script"},
                    {"key": "pmpmCompare", "label": "Bench PMPM"},
                    {"key": "pmpmPercentDiff", "label": "Diff Bench"}
                ]
            },{
                "cardName": "medication",
                "visualState": "figure",
                "cardTitle": "Medications: Tufts, BCBS-SR",
                "cardFilters": [{
                    "field": "planPayer",
                    "filter": ["Tufts", "BCBS-SR"],
                    "exclude": false
                }],
                "groupers": [{
                    "name": "Medication Class",
                    "field": "theragroup1",
                    "enabled": true,
                    "rank": 1
                }],
                "layout": {
                    "dimensions": {
                        "height": 16,
                        "width": 12
                    },
                    "position": {
                        "x": 21,
                        "y": 24
                    }
                },
                "columns": [
                    {"key": "groupName", "label": "Medication Class"},
                    {"key": "pmpm", "label": "Cost PMPM"},
                    {"key": "scriptsK", "label": "Scripts/K"},
                    {"key": "pricePerScript", "label": "$/Script"},
                    {"key": "pmpmCompare", "label": "Bench PMPM"},
                    {"key": "pmpmPercentDiff", "label": "Diff Bench"}
                ]
            },{
                "cardName": "medication",
                "visualState": "figure",
                "cardTitle": "Medications: Medicare, TMP",
                "cardFilters": [{
                    "field": "planPayer",
                    "filter": ["Medicare", "TMP"],
                    "exclude": false
                }],
                "groupers": [{
                    "name": "Medication Class",
                    "field": "theragroup1",
                    "enabled": true,
                    "rank": 1
                }],
                "layout": {
                    "dimensions": {
                        "height": 16,
                        "width": 12
                    },
                    "position": {
                        "x": 21,
                        "y": 24
                    }
                },
                "columns": [
                    {"key": "groupName", "label": "Medication Class"},
                    {"key": "pmpm", "label": "Cost PMPM"},
                    {"key": "scriptsK", "label": "Scripts/K"},
                    {"key": "pricePerScript", "label": "$/Script"},
                    {"key": "pmpmCompare", "label": "Bench PMPM"},
                    {"key": "pmpmPercentDiff", "label": "Diff Bench"}
                ]
            }
        ]
    },
    {
        "rank": 8,
        "pageNumber": true,
        "cards": [
            {
                "cardName": "textObject",
                "layout": {
                    "dimensions": {
                        "height": 2,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 3
                    }
                },
                "textObjectContent": "<div style='width:50%; float:left;'><h2 style='margin:0;padding:0;'>BMC Report Book</h2><h4 style='margin: 0;padding:0;'>YTD December 2017</h4></div><div style='width:50%; float:left; text-align: right;'><img src='http://arcadia-assets.s3-website-us-west-2.amazonaws.com/arcadia-logo.png' style='width:100px;' /></div>"
            },
            {
                "cardName": "textObject",
                "layout": {
                    "dimensions": {
                        "height": 2,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 41
                    }
                },
                "textObjectContent": "<div style='width:100%; text-align:center'>&copy; 2017 <a href='http://www.arcadiasolutions.com/' target='_blank'>Arcadia Healthcare Solutions</a></div>"
            },
            {
            "cardName": "measures",
            "visualState": "figure",
            "cardTitle": "Quality Measures",
            "cardFilters": [
                {
                    "field":"measure",
                    "filter": [
                        "Cervical Cancer Screening","Breast Cancer Screening","Tobacco Cessation","Colorectal Cancer Screen",
                        "Influenza Imm","Depression Screen","Adult BMI Assessment","HTN BP Control","DM Eye Exam","DM Nephropathy",
                        "DM BP Control","DM HbA1c Testing","DM HbA1c <8%"
                    ],
                    "exclude": false
                }
            ],
            "groupers": [
                {
                    "name": "Measure",
                    "field": "measure",
                    "enabled": true,
                    "rank": 1
                }
            ],
            "layout": {
                "dimensions": {
                    "height": 16,
                    "width": 30
                },
                "position": {
                    "x": 3,
                    "y": 6
                }
            },
            "columns": [
                {"key": "measure", "label": "Measure"},
                {"key": "period", "label": "Period"},
                {"key": "denominator", "label": "Denom"},
                {"key": "numerator", "label": "Num"},
                {"key": "performance", "label": "Rate"},
                {"key": "target1", "label": "Target Rate"},
                {"key": "performanceCompare", "label": "Bench Rate"}
            ]
        },{
                "cardName": "measures",
                "visualState": "figure",
                "cardTitle": "Quality Measures - Children Breakout",
                "cardFilters": [
                    {
                        "field":"measure",
                        "filter": [
                            "Cervical Cancer Screening","Breast Cancer Screening","Tobacco Cessation","Colorectal Cancer Screen",
                            "Influenza Imm","Depression Screen","Adult BMI Assessment","HTN BP Control","DM Eye Exam","DM Nephropathy",
                            "DM BP Control","DM HbA1c Testing","DM HbA1c <8%"
                        ],
                        "exclude": false
                    },
                    {
                        "field":"planPayer",
                        "filter": [ "BCBS", "HPHC" ],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Measure",
                        "field": "measure",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 16,
                        "width": 14
                    },
                    "position": {
                        "x": 3,
                        "y": 23
                    }
                },
                "columns": [
                    {"key": "measure", "label": "Measure"},
                    {"key": "period", "label": "Period"},
                    {"key": "denominator", "label": "Denom"},
                    {"key": "numerator", "label": "Num"},
                    {"key": "performance", "label": "Rate"},
                    {"key": "target1", "label": "Target Rate"},
                    {"key": "performanceCompare", "label": "Bench Rate"}
                ]
            },{
                "cardName": "measures",
                "visualState": "figure",
                "cardTitle": "Quality Measures - Children Breakout",
                "cardFilters": [
                    {
                        "field":"measure",
                        "filter": [
                            "Cervical Cancer Screening","Breast Cancer Screening","Tobacco Cessation","Colorectal Cancer Screen",
                            "Influenza Imm","Depression Screen","Adult BMI Assessment","HTN BP Control","DM Eye Exam","DM Nephropathy",
                            "DM BP Control","DM HbA1c Testing","DM HbA1c <8%"
                        ],
                        "exclude": false
                    },
                    {
                        "field":"planPayer",
                        "filter": [ "Tufts", "Medicare" ],
                        "exclude": false
                    }
                ],
                "groupers": [
                    {
                        "name": "Measure",
                        "field": "measure",
                        "enabled": true,
                        "rank": 1
                    }
                ],
                "layout": {
                    "dimensions": {
                        "height": 16,
                        "width": 14
                    },
                    "position": {
                        "x": 19,
                        "y": 23
                    }
                },
                "columns": [
                    {"key": "measure", "label": "Measure"},
                    {"key": "period", "label": "Period"},
                    {"key": "denominator", "label": "Denom"},
                    {"key": "numerator", "label": "Num"},
                    {"key": "performance", "label": "Rate"},
                    {"key": "target1", "label": "Target Rate"},
                    {"key": "performanceCompare", "label": "Bench Rate"}
                ]
            }
        ]
    },
{
  "rank": 9,
        "pageNumber": true,
  "cards": [
            {
                "cardName": "textObject",
                "layout": {
                    "dimensions": {
                        "height": 2,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 3
                    }
                },
                "textObjectContent": "<div style='width:50%; float:left;'><h2 style='margin:0;padding:0;'>BMC Report Book</h2><h4 style='margin: 0;padding:0;'>YTD December 2017</h4></div><div style='width:50%; float:left; text-align: right;'><img src='http://arcadia-assets.s3-website-us-west-2.amazonaws.com/arcadia-logo.png' style='width:100px;' /></div>"
            },
            {
                "cardName": "textObject",
                "layout": {
                    "dimensions": {
                        "height": 2,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 41
                    }
                },
                "textObjectContent": "<div style='width:100%; text-align:center'>&copy; 2017 <a href='http://www.arcadiasolutions.com/' target='_blank'>Arcadia Healthcare Solutions</a></div>"
            },{
      "cardName": "conditions",
      "visualState": "table",
      "cardTitle": "Top 10 Conditions: BCBS",
      "cardFilters": [{
        "field": "planPayer",
        "filter": ["BCBS"],
        "exclude": false
      }, {
                    "field": "condition",
                    "filter": ["Demographics"],
                    "exclude": true
                }],
                "configuration": [
                    {"name":"riskAlg", "value": "HCC"},
                    {"name":"rows", "value": "10"}
                ],
      "groupers": [{
        "name": "Condition",
        "field": "condition",
        "enabled": true,
        "rank": 1
      }],
      "layout": {
        "dimensions": {
          "height": 10,
          "width": 30
        },
        "position": {
          "x": 3,
          "y": 6
        }
      },
                "columns": [{
                    "key": "groupName",
                    "label": "Condition"
                },
                    {
                        "key": "members",
                        "label": "Members"
                    },
                    {
                        "key": "prevalence",
                        "label": "Prevalence"
                    },
                    {
                        "key": "pmpm",
                        "label": "PMPM"
                    },
                    {
                        "key": "risk",
                        "label": "Risk"
                    },
                    {
                        "key": "ipVisitsPerK",
                        "label": "IP/K"
                    },
                    {
                        "key": "edAdmitsPerK",
                        "label": "ED/K"
                    },
                    {
                        "key": "los",
                        "label": "Avg LOS"
                    },
                    {
                        "key": "prevalenceCompare",
                        "label": "Comparison Prevalence"
                    },
                    {
                        "key": "pmpmCompare",
                        "label": "Comparison PMPM"
                    },
                    {
                        "key": "riskCompare",
                        "label": "Comparison Risk"
                    },
                    {
                        "key": "ipVisitsPerKCompare",
                        "label": "Comparison IP/K"
                    },
                    {
                        "key": "edAdmitsPerKCompare",
                        "label": "Comparison ED/K"
                    },
                    {
                        "key": "losCompare",
                        "label": "Comparison Avg LOS"
                    }
                ]
    },
    {
      "cardName": "conditions",
      "visualState": "table",
                "cardTitle": "Top 10 Conditions: HPHC",
                "cardFilters": [{
                    "field": "planPayer",
                    "filter": ["HPHC"],
                    "exclude": false
                }, {
                    "field": "condition",
                    "filter": ["Demographics"],
                    "exclude": true
                }],
                "configuration": [
                    {"name":"riskAlg", "value": "HCC"},
                    {"name":"rows", "value": "10"}
                ],
      "groupers": [{
        "name": "Condition",
        "field": "condition",
        "enabled": true,
        "rank": 1
      }],
      "layout": {
        "dimensions": {
          "height": 10,
          "width": 30
        },
        "position": {
          "x": 3,
          "y": 6
        }
      },
                "columns": [{
                    "key": "groupName",
                    "label": "Condition"
                },
                    {
                        "key": "members",
                        "label": "Members"
                    },
                    {
                        "key": "prevalence",
                        "label": "Prevalence"
                    },
                    {
                        "key": "pmpm",
                        "label": "PMPM"
                    },
                    {
                        "key": "risk",
                        "label": "Risk"
                    },
                    {
                        "key": "ipVisitsPerK",
                        "label": "IP/K"
                    },
                    {
                        "key": "edAdmitsPerK",
                        "label": "ED/K"
                    },
                    {
                        "key": "los",
                        "label": "Avg LOS"
                    },
                    {
                        "key": "prevalenceCompare",
                        "label": "Comparison Prevalence"
                    },
                    {
                        "key": "pmpmCompare",
                        "label": "Comparison PMPM"
                    },
                    {
                        "key": "riskCompare",
                        "label": "Comparison Risk"
                    },
                    {
                        "key": "ipVisitsPerKCompare",
                        "label": "Comparison IP/K"
                    },
                    {
                        "key": "edAdmitsPerKCompare",
                        "label": "Comparison ED/K"
                    },
                    {
                        "key": "losCompare",
                        "label": "Comparison Avg LOS"
                    }
                ]
    },
    {
      "cardName": "conditions",
      "visualState": "table",
                "cardTitle": "Top 10 Conditions: BCBS-SR",
                "cardFilters": [{
                    "field": "planPayer",
                    "filter": ["BCBS-SR"],
                    "exclude": false
                }, {
                    "field": "condition",
                    "filter": ["Demographics"],
                    "exclude": true
                }],
                "configuration": [
                    {"name":"riskAlg", "value": "HCC"},
                    {"name":"rows", "value": "10"}
                ],
      "groupers": [{
        "name": "Condition",
        "field": "condition",
        "enabled": true,
        "rank": 1
      }],
      "layout": {
        "dimensions": {
          "height": 10,
          "width": 30
        },
        "position": {
          "x": 3,
          "y": 6
        }
      },
                "columns": [{
                    "key": "groupName",
                    "label": "Condition"
                },
                    {
                        "key": "members",
                        "label": "Members"
                    },
                    {
                        "key": "prevalence",
                        "label": "Prevalence"
                    },
                    {
                        "key": "pmpm",
                        "label": "PMPM"
                    },
                    {
                        "key": "risk",
                        "label": "Risk"
                    },
                    {
                        "key": "ipVisitsPerK",
                        "label": "IP/K"
                    },
                    {
                        "key": "edAdmitsPerK",
                        "label": "ED/K"
                    },
                    {
                        "key": "los",
                        "label": "Avg LOS"
                    },
                    {
                        "key": "prevalenceCompare",
                        "label": "Comparison Prevalence"
                    },
                    {
                        "key": "pmpmCompare",
                        "label": "Comparison PMPM"
                    },
                    {
                        "key": "riskCompare",
                        "label": "Comparison Risk"
                    },
                    {
                        "key": "ipVisitsPerKCompare",
                        "label": "Comparison IP/K"
                    },
                    {
                        "key": "edAdmitsPerKCompare",
                        "label": "Comparison ED/K"
                    },
                    {
                        "key": "losCompare",
                        "label": "Comparison Avg LOS"
                    }
                ]
    }

  ]
},
    {
        "rank": 10,
        "pageNumber": true,
        "cards": [
            {
                "cardName": "textObject",
                "layout": {
                    "dimensions": {
                        "height": 2,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 3
                    }
                },
                "textObjectContent": "<div style='width:50%; float:left;'><h2 style='margin:0;padding:0;'>BMC Report Book</h2><h4 style='margin: 0;padding:0;'>YTD December 2017</h4></div><div style='width:50%; float:left; text-align: right;'><img src='http://arcadia-assets.s3-website-us-west-2.amazonaws.com/arcadia-logo.png' style='width:100px;' /></div>"
            },
            {
                "cardName": "textObject",
                "layout": {
                    "dimensions": {
                        "height": 2,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 41
                    }
                },
                "textObjectContent": "<div style='width:100%; text-align:center'>&copy; 2017 <a href='http://www.arcadiasolutions.com/' target='_blank'>Arcadia Healthcare Solutions</a></div>"
            },{
            "cardName": "conditions",
            "visualState": "table",
            "cardTitle": "Top 10 Conditions: Tufts",
            "cardFilters": [{
                "field": "planPayer",
                "filter": ["Tufts"],
                "exclude": false
            }, {
                "field": "condition",
                "filter": ["Demographics"],
                "exclude": true
            }],
            "configuration": [
                {"name":"riskAlg", "value": "HCC"},
                {"name":"rows", "value": "10"}
            ],
            "groupers": [{
                "name": "Condition",
                "field": "condition",
                "enabled": true,
                "rank": 1
            }],
            "layout": {
                "dimensions": {
                    "height": 10,
                    "width": 30
                },
                "position": {
                    "x": 3,
                    "y": 6
                }
            },
                "columns": [{
                    "key": "groupName",
                    "label": "Condition"
                },
                    {
                        "key": "members",
                        "label": "Members"
                    },
                    {
                        "key": "prevalence",
                        "label": "Prevalence"
                    },
                    {
                        "key": "pmpm",
                        "label": "PMPM"
                    },
                    {
                        "key": "risk",
                        "label": "Risk"
                    },
                    {
                        "key": "ipVisitsPerK",
                        "label": "IP/K"
                    },
                    {
                        "key": "edAdmitsPerK",
                        "label": "ED/K"
                    },
                    {
                        "key": "los",
                        "label": "Avg LOS"
                    },
                    {
                        "key": "prevalenceCompare",
                        "label": "Comparison Prevalence"
                    },
                    {
                        "key": "pmpmCompare",
                        "label": "Comparison PMPM"
                    },
                    {
                        "key": "riskCompare",
                        "label": "Comparison Risk"
                    },
                    {
                        "key": "ipVisitsPerKCompare",
                        "label": "Comparison IP/K"
                    },
                    {
                        "key": "edAdmitsPerKCompare",
                        "label": "Comparison ED/K"
                    },
                    {
                        "key": "losCompare",
                        "label": "Comparison Avg LOS"
                    }
                ]
        },
            {
                "cardName": "conditions",
                "visualState": "table",
                "cardTitle": "Top 10 Conditions: Medicare",
                "cardFilters": [{
                    "field": "planPayer",
                    "filter": ["Medicare"],
                    "exclude": false
                }, {
                    "field": "condition",
                    "filter": ["Demographics"],
                    "exclude": true
                }],
                "configuration": [
                    {"name":"riskAlg", "value": "HCC"},
                    {"name":"rows", "value": "10"}
                ],
                "groupers": [{
                    "name": "Condition",
                    "field": "condition",
                    "enabled": true,
                    "rank": 1
                }],
                "layout": {
                    "dimensions": {
                        "height": 10,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 6
                    }
                },
                "columns": [{
                    "key": "groupName",
                    "label": "Condition"
                },
                    {
                        "key": "members",
                        "label": "Members"
                    },
                    {
                        "key": "prevalence",
                        "label": "Prevalence"
                    },
                    {
                        "key": "pmpm",
                        "label": "PMPM"
                    },
                    {
                        "key": "risk",
                        "label": "Risk"
                    },
                    {
                        "key": "ipVisitsPerK",
                        "label": "IP/K"
                    },
                    {
                        "key": "edAdmitsPerK",
                        "label": "ED/K"
                    },
                    {
                        "key": "los",
                        "label": "Avg LOS"
                    },
                    {
                        "key": "prevalenceCompare",
                        "label": "Comparison Prevalence"
                    },
                    {
                        "key": "pmpmCompare",
                        "label": "Comparison PMPM"
                    },
                    {
                        "key": "riskCompare",
                        "label": "Comparison Risk"
                    },
                    {
                        "key": "ipVisitsPerKCompare",
                        "label": "Comparison IP/K"
                    },
                    {
                        "key": "edAdmitsPerKCompare",
                        "label": "Comparison ED/K"
                    },
                    {
                        "key": "losCompare",
                        "label": "Comparison Avg LOS"
                    }
                ]
            },
            {
                "cardName": "conditions",
                "visualState": "table",
                "cardTitle": "Top 10 Conditions: TMP",
                "cardFilters": [{
                    "field": "planPayer",
                    "filter": ["TMP"],
                    "exclude": false
                }, {
                    "field": "condition",
                    "filter": ["Demographics"],
                    "exclude": true
                }],
                "configuration": [
                    {"name":"riskAlg", "value": "HCC"},
                    {"name":"rows", "value": "10"}
                ],
                "groupers": [{
                    "name": "Condition",
                    "field": "condition",
                    "enabled": true,
                    "rank": 1
                }],
                "layout": {
                    "dimensions": {
                        "height": 10,
                        "width": 30
                    },
                    "position": {
                        "x": 3,
                        "y": 6
                    }
                },
                "columns": [{
                    "key": "groupName",
                    "label": "Condition"
                },
                    {
                        "key": "members",
                        "label": "Members"
                    },
                    {
                        "key": "prevalence",
                        "label": "Prevalence"
                    },
                    {
                        "key": "pmpm",
                        "label": "PMPM"
                    },
                    {
                        "key": "risk",
                        "label": "Risk"
                    },
                    {
                        "key": "ipVisitsPerK",
                        "label": "IP/K"
                    },
                    {
                        "key": "edAdmitsPerK",
                        "label": "ED/K"
                    },
                    {
                        "key": "los",
                        "label": "Avg LOS"
                    },
                    {
                        "key": "prevalenceCompare",
                        "label": "Comparison Prevalence"
                    },
                    {
                        "key": "pmpmCompare",
                        "label": "Comparison PMPM"
                    },
                    {
                        "key": "riskCompare",
                        "label": "Comparison Risk"
                    },
                    {
                        "key": "ipVisitsPerKCompare",
                        "label": "Comparison IP/K"
                    },
                    {
                        "key": "edAdmitsPerKCompare",
                        "label": "Comparison ED/K"
                    },
                    {
                        "key": "losCompare",
                        "label": "Comparison Avg LOS"
                    }
                ]
            }

        ]
    }
  ]
}`
