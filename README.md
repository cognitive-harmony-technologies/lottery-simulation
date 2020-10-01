# Illinois Dispensary Tie Breaker Lottery Simulator

## Introduction

[Perception Farms, Inc](https://www.perceptionfarms.com) has developed this lottery simulator for the Illinois Dispensary Tie Breaker process.  This allows the user to determine their probability of winning a license given a few assumptions.  We provide this free of use to the applicant pool and legislators in order to showcase the unfairness of unlimited applications per entity.

## Prerequisites:

node.js

## How to use:
Enter the following at the command line:
``` sh
node lottery.js [NUM_SIMULATIONS] [APP_DENSITY] [NUM_ADD_PARTICIPANTS] [YOUR_COMPANY_NAME] [YOUR_APP_COUNT]
```
Parameter|Description
NUM_SIMULATIONS|Number of simulations per BLS region.
APP_DENSITY|Number of apps per additional participant.
NUM_ADD_PARTICIPANTS|Number of additional participants.
YOUR_COMPANY_NAME|Name of YOUR company in the results output.
YOUR_APP_COUNT|Number of apps YOU have in the lottery.

## Example:
Console input:
``` sh
node lottery.js 1000 3.5 20 "Your Company, INC" 4
```

Console output:
``` sh
Starting simulator with parameters:
Number Simulations: 1000
Application Density: 3.5
Number Additional Participants: 20
Company Name: Your Company, INC
Our App Count: 4
Generating Players...
Playing field:
Simulating...
{
  'Your Company, INC': 1.108,
  '127 IL LLC': 0.3,
  'Alchemy Curations LLC': 0.299,
  'AmeriCanna Dream LLC': 3.56,
  'Black Rain LLC': 0.294,
  'Clean Slate Opco LLC': 2.505,
  'Dealership LLC': 2.607,
  'Deer Park Partners LLC': 1.361,
  'EHR Holdings LLC': 0.87,
  'Fortunate Son Partners LLC': 2.527,
  'Green Equity Ventures 1 LLC': 0.769,
  'GRI Holdings LLC': 4.475,
  'Mint IL LLC': 1.31,
  'SB IL LLC': 1.108,
  'So Baked Too LLC': 0.574,
  'Suite Greens LLC': 1.075,
  'Terra House LLC': 1.634,
  'TPFB LLC': 0.292,
  'V3 Illinois Vending LLC': 1.323,
  'Vertical Management LLC': 2.501,
  'NPC1 INC': 0.811,
  'NPC2 INC': 0.798,
  'NPC3 INC': 0.815,
  'NPC4 INC': 0.775,
  'NPC5 INC': 0.847,
  'NPC6 INC': 0.844,
  'NPC7 INC': 0.84,
  'NPC8 INC': 0.864,
  'NPC9 INC': 0.845,
  'NPC10 INC': 0.84,
  'NPC11 INC': 0.825,
  'NPC12 INC': 0.845,
  'NPC13 INC': 0.822,
  'NPC14 INC': 0.783,
  'NPC15 INC': 0.821,
  'NPC16 INC': 0.792,
  'NPC17 INC': 0.828,
  'NPC18 INC': 0.85,
  'NPC19 INC': 0.868,
  'NPC20 INC': 0.795
}
```
