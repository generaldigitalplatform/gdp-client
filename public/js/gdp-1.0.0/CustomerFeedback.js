function init() {
    // $.material.init();

    var surveyJSON ={
 "completedHtml": "<p><h4>Thank you for completing customer feedback</h4>",
 "pages": [
  {
   "name": "Greetings",
   "elements": [
    {
     "type": "text",
     "name": "PrimaryPhone",
     "width": "10",
     "title": {
      "default": "Primary Phone"
      // "ta": "முதன்மை தொலைபேசி"
     },
     "isRequired": true
    },
    {
     "type": "radiogroup",
     "name": "checkPermission",
     "width": "10",
     "title": {
      "default": "I am calling from Vodafone, I would like to talk to you about Vodafone' new plan which suits for you"    
     },
     "isRequired": true,
     "choices": [
      {
       "value": "permission",
       "text": {
        "default": "Permission"
        // "ta": "அனுமதி"
       }
      },
      {
       "value": "denied",
       "text": {
        "default": "Denied"
        // "ta": "அனுமதி இல்லை"
       }
      }
     ],
     "colCount": 0
    },
    {
     "type": "text",
     "visible": false,
     "visibleIf": "{checkPermission}='denied''",
     "width": "10",
     "title": {
      "default": "May I know call back date and time?"
      // "ta": "உங்களை மீண்டும் அழைக்கும் தேதி மற்றும் நேரத்தை என்னிடம் சொல்ல முடியுமா?"
     },
     "inputType": "datetime-local"
    },
    {
     "type": "radiogroup",
     "name": "exit",
     "visible": false,
     "visibleIf": "{checkPermission}='denied'",
     "width": "10",
     "title": "EXIT CALL?",
     "choices": [
      {
       "value": "yes",
       "text": "YES"
      },
      {
       "value": "no",
       "text": "NO"
      }
     ],
     "colCount": 0
    },
    {
     "type": "panel",
     "elements": [
      {
       "type": "radiogroup",
       "name": "reasonForNotInterested",
       "visible": false,
       "visibleIf": "{exit}='yes' and {checkPermission}='denied'",
       "title": {
      "default": "May I know the reason why you are not interested?"
      // "ta": "நீங்கள் ஆர்வமில்லாமல் இருப்பதற்கான காரணம் எனக்குத் தெரியுமா?"
        },
        "choices": [
        {
         "value": "happyWithOtherNetwork",
          "text": {
          "default": "Happy with other Network",
          "ta": "பிற நெட்வொர்க் கவரேஜ் மூலம் மகிழ்ச்சி"
            }         
        },
        {
         "value": "notHappyWithSuggestPlan",
         "text": "Not happy with the suggested plan"
        },
        {
         "value": "notReadyToPayDeposit",
         "text": "Not ready to pay the Deposit"
        },
        {
         "value": "abilityToMakePayment",
         "text": "Ability to make payment"
        },
        {
         "value": "happyWithCurrentNetworkRetentionPlan",
         "text": "Happy with the current networks's retention plan"
        },
        {
         "value": "companyLinkedConnection",
         "text": "Company linked connections"
        },
        {
         "value": "happyWithExistingNetworkOffer",
         "text": "Happy with the existing network's offer"
        },
        {
         "value": "happyWithPrepaid",
         "text": "Happy with prepaid"
        },
        {
         "value": "previousBadExpInPostpaid",
         "text": "Previous bad experience in Postpaid"
        },
        {
         "value": "others",
         "text": "Others"
        }
       ],
       "colCount": 2
      },
      {
       "type": "multipletext",
       "name": "residingLocationAndArea",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithOtherNetwork'",
       "width": "10",
       "title": "Can you tell me the location & area in which you are residing now ?",
       "items": [
        {
         "name": "location",
         "title": "Location"
        },
        {
         "name": "area",
         "title": "Area"
        },
        {
         "name": "city",
         "title": "City"
        },
        {
         "name": "zone",
         "title": "Zone"
        },
        {
         "name": "state",
         "title": "State"
        }
       ],
       "colCount": 2
      },
      {
       "type": "radiogroup",
       "name": "whatNetworkUsing",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithOtherNetwork'",
       "width": "10",
       "title": "May I know whether you are using 2G/3G/4G?",
       "choices": [
        {
         "value": "2g",
         "text": "2G"
        },
        {
         "value": "3g",
         "text": "3G"
        },
        {
         "value": "4g",
         "text": "4G"
        }
       ],
       "colCount": 0
      },
      {
       "type": "text",
       "name": "question1",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='notHappyWithSuggestPlan'",
       "width": "10",
       "title": "Based on your usage we have suggested this plan, \nif you are not satisfied with this can we suggest some other plan?\nif yes need to explain some other plan"
      },
      {
       "type": "text",
       "name": "outOfCityLimit",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='notReadyToPayDeposit'",
       "width": "10",
       "title": "OCL - As your area is Out of City Limit, so Rs.______ is mandate "
      },
      {
       "type": "text",
       "name": "bachelorDeposit",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='notReadyToPayDeposit'",
       "width": "10",
       "title": "If Bachelor - Bachelor deposit is mandate, by paying the deposit, the credit limit will be increased"
      },
      {
       "type": "text",
       "name": "question2",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='abilityToMakePayment'",
       "width": "10",
       "title": "May I know your affordability for your monthly bill?"
      },
      {
       "type": "text",
       "name": "MonthlyBillAffordability",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='abilityToMakePayment'",
       "width": "10",
       "title": "May I know your usage pattern - Voice, SMS & Data?, suggest the plan based on the usage"
      },
      {
       "type": "text",
       "name": "question3",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithCurrentNetworkRetentionPlan'",
       "width": "10",
       "title": "What was the offer provided by existing network?"
      },
      {
       "type": "text",
       "name": "question5",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='companyLinkedConnection'",
       "width": "10",
       "title": "Can I have your authorised Person's contact number to discuss about the Vodafone postpaid offers"
      },
      {
       "type": "text",
       "name": "question4",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithCurrentNetworkRetentionPlan'",
       "width": "10",
       "title": "Are you interested to take new postpaid coonnection for your personal purpose?"
      },
      {
       "type": "multipletext",
       "name": "question6",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithExistingNetworkOffer'",
       "width": "10",
       "title": "What is the current plan your are using and its network?",
       "items": [
        {
         "name": "currentPlan",
         "title": "Current Plan"
        },
        {
         "name": "currentNetwork",
         "title": "Current Network"
        }
       ],
       "colCount": 2
      },
      {
       "type": "text",
       "name": "question8",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithPrepaid'",
       "width": "10",
       "title": "How much you are spening per month for your recharge"
      },
      {
       "type": "radiogroup",
       "name": "question9",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithPrepaid'",
       "width": "10",
       "title": "Is the amount inclusive of Voice & Data",
       "choices": [
        {
         "value": "yesq",
         "text": "YES"
        },
        {
         "value": "no",
         "text": "NO"
        }
       ],
       "colCount": 0
      },
      {
       "type": "text",
       "name": "question7",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithPrepaid'",
       "width": "10",
       "title": "If you have taken the postpaid connection you need not worry about the frequent recharge (need to explain the benefits of postpaid based on the profile/profession)"
      },
      {
       "type": "text",
       "name": "question10",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='previousBadExpInPostpaid'",
       "width": "10",
       "title": "May I know what was the issue you have faced?"
      },
      {
       "type": "text",
       "name": "question11",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='others'",
       "width": "10",
       "title": "Others"
      }
     ],
     "visible": false,
     "visibleIf": "{exit}='yes'",
     "title": "Reason for Not Interested"
    }
   ],
   "title": "Greeting",
   "navigationButtonsVisibility": "show"
  },
  {
   "name": "Basics",
   "elements": [
    {
     "type": "multipletext",
     "name": "customerPersonalDetails",
     "width": "10",
     "title": "Sir/Madam, May I know your Name and Secondary Phone number?",
     "items": [
      {
       "name": "customerFirstName",
       "title": "First Name"
      },
      {
       "name": "customerLastName",
       "title": "Last Name"
      },
      {
       "name": "customerSecondaryPhone",
       "title": "Secondary Phone"
      }
     ],
     "itemSize": "20"
    },
    {
     "type": "radiogroup",
     "name": "AreYouUserOfConnection",
     "width": "10",
     "title": "Are you the user of the connection?",
     "choices": [
      {
       "value": "yes",
       "text": "Yes"
      },
      {
       "value": "no",
       "text": "No"
      }
     ],
     "colCount": 0
    },
    {
     "type": "radiogroup",
     "name": "TypeOfConnecton",
     "width": "10",
     "title": "Are you using a prepaid number or postpaid?",
     "choices": [
      {
       "value": "prepaid",
       "text": "Pre Paid"
      },
      {
       "value": "postpaid",
       "text": "Post Paid"
      }
     ],
     "colCount": 0
    },
    {
     "type": "radiogroup",
     "name": "typesOfHandset",
     "width": "10",
     "title": "Are you using a 3G Handset or a 4G handset?",
     "choices": [
      {
       "value": "3g",
       "text": "3G"
      },
      {
       "value": "4g",
       "text": "4G"
      }
     ],
     "colCount": 0
    },
    {
     "type": "radiogroup",
     "name": "NetworkType",
     "width": "10",
     "title": "May I know which network you are using?",
     "choices": [
      {
       "value": "vodafone",
       "text": "Vodafone"
      },
      {
       "value": "airtel",
       "text": "Airtel"
      },
      {
       "value": "bsnl",
       "text": "BSNL"
      },
      {
       "value": "idea",
       "text": "IDEA"
      },
      {
       "value": "aircel",
       "text": "Aircel"
      },
      {
       "value": "jio",
       "text": "Jio"
      }
     ],
     "colCount": 0
    },
    {
     "type": "text",
     "name": "SpendOnCallUsage",
     "width": "10",
     "title": "How much do you spend for your mobile phone usage in a month?"
    },
    {
     "type": "text",
     "name": "SpendOnInternetUsage",
     "width": "10",
     "title": "May I know How much Internet do you use?"
    },
    {
     "type": "radiogroup",
     "name": "UseStd",
     "width": "10",
     "title": "Do you use STD?",
     "choices": [
      {
       "value": "yes",
       "text": "YES"
      },
      {
       "value": "no",
       "text": "NO"
      }
     ],
     "colCount": 0
    },
    {
     "type": "text",
     "name": "UsageOfStd",
     "visible": false,
     "visibleIf": "{UseStd}='yes'",
     "width": "10",
     "startWithNewLine": false,
     "title": "Approximately, How many minutes do you use?"
    },
    {
     "type": "radiogroup",
     "name": "UseIsd",
     "width": "10",
     "title": "Do you use ISD?",
     "choices": [
      {
       "value": "yes",
       "text": "YES"
      },
      {
       "value": "no",
       "text": "NO"
      }
     ],
     "colCount": 0
    },
    {
     "type": "text",
     "name": "UsageOfIsd",
     "visible": false,
     "visibleIf": "{UseIsd}='yes'",
     "width": "10",
     "startWithNewLine": false,
     "title": "Approximately, How many minutes do you use?"
    },
    {
     "type": "text",
     "name": "TotalMonthlyRomingDays",
     "visible": false,
     "visibleIf": "{useIsd}='yes'",
     "width": "10",
     "startWithNewLine": false,
     "title": "How many days in a month you will be in Roaming?"
    },
    {
     "type": "radiogroup",
     "name": "exit",
     "width": "10",
     "title": "EXIT CALL?",
     "choices": [
      {
       "value": "yes",
       "text": "YES"
      },
      {
       "value": "no",
       "text": "NO"
      }
     ],
     "colCount": 0
    }
   ],
   "innerIndent": 3,
   "navigationButtonsVisibility": "show"
  },
  {
   "name": "ProductPitch",
   "elements": [
    {
     "type": "html",
     "name": "customerBasicData",
     "html": "<h5>Customer Basic Data</h5>\n"
    },
    {
     "type": "radiogroup",
     "name": "checkCustomerInterest",
     "title": "check whether the customer is interested/not interested/call back?",
     "choices": [
      {
       "value": "interested",
       "text": "Interested"
      },
      {
       "value": "notInterested",
       "text": "Not Interested"
      },
      {
       "value": "callback",
       "text": "Callback"
      }
     ],
     "colCount": 0
    },
    {
     "type": "radiogroup",
     "name": "exit",
     "visible": false,
     "visibleIf": "{checkPermission}='denied'",
     "width": "10",
     "title": "EXIT CALL?",
     "choices": [
      {
       "value": "yes",
       "text": "YES"
      },
      {
       "value": "no",
       "text": "NO"
      }
     ],
     "colCount": 0
    }
   ],
   "title": "Product Best Fit Plan Pitch",
   "innerIndent": 3,
   "navigationButtonsVisibility": "show"
  },
  {
   "name": "Interested",
   "elements": [
    {
     "type": "radiogroup",
     "name": "OccupationType",
     "width": "10",
     "title": "May I know your occupation?",
     "choices": [
      {
       "value": "salaried",
       "text": "Salaried"
      },
      {
       "value": "professional",
       "text": "Professional"
      },
      {
       "value": "ownBusiness",
       "text": "Own Business"
      },
      {
       "value": "agriculture",
       "text": "Agriculture"
      },
      {
       "value": "retired",
       "text": "Retired"
      },
      {
       "value": "student",
       "text": "Student"
      },
      {
       "value": "housewife",
       "text": "House Wife"
      },
      {
       "value": "others",
       "text": "Others"
      }
     ],
     "colCount": 4
    },
    {
     "type": "radiogroup",
     "name": "convertToCUG",
     "width": "10",
     "title": "Do you use any other number which you can change to vodafone postpaid and make CUG?",
     "choices": [
      {
       "value": "yes",
       "text": "Yes"
      },
      {
       "value": "no",
       "text": "No"
      }
     ],
     "colCount": 0
    },
    {
     "type": "radiogroup",
     "name": "ProofOfStay",
     "width": "10",
     "title": "Does your proof contains the current address or different address?",
     "choices": [
      {
       "value": "currentAddress",
       "text": "Current Address"
      },
      {
       "value": "differentAddress",
       "text": "Different Address"
      }
     ],
     "colCount": 0
    },
    {
     "type": "text",
     "name": "distanceToVodafoneStore",
     "width": "10",
     "title": "What is the distance between your residence and Vodafone store?"
    },
    {
     "type": "text",
     "name": "monthlyIncome",
     "width": "10",
     "title": "May I know your current monthly income?"
    },
    {
     "type": "radiogroup",
     "name": "StayingType",
     "width": "10",
     "title": "May I know whether you are staying with your family or in bachelor stay?",
     "choices": [
      {
       "value": "familyStay",
       "text": "Family Stay"
      },
      {
       "value": "bachelorStay",
       "text": "Bachelor Stay"
      }
     ],
     "colCount": 0
    },
    {
     "type": "radiogroup",
     "name": "houseType",
     "width": "10",
     "title": "Are you living in a concrete builing or a hut house?",
     "choices": [
      {
       "value": "concreteHouse",
       "text": "Concrete House"
      },
      {
       "value": "hutHouse",
       "text": "Hut House"
      }
     ],
     "colCount": 0
    },
    {
     "type": "radiogroup",
     "name": "previousBillCopyAvailable",
     "width": "10",
     "title": "Can I get your previous bill copy?",
     "choices": [
      {
       "value": "yes",
       "text": "Yes"
      },
      {
       "value": "no",
       "text": "No"
      }
     ],
     "colCount": 0
    },
    {
     "type": "text",
     "name": "usageOfNumberOnCurrentNetwork",
     "width": "10",
     "title": "May I know how long you are using this number with your current Network?"
    },
    {
     "type": "text",
     "name": "CompanyName",
     "width": "10",
     "title": "May I  know your company name?"
    },
    {
     "type": "radiogroup",
     "name": "exit",
     "width": "10",
     "title": "EXIT CALL?",
     "choices": [
      {
       "value": "yes",
       "text": "YES"
      },
      {
       "value": "no",
       "text": "NO"
      }
     ],
     "colCount": 0
    }
   ],
   "visible": false,
   "visibleIf": "{checkCustomerInterest}='interested'",
   "title": "Intrested",
   "navigationButtonsVisibility": "show"
  },
  {
   "name": "EvaluateCustomer",
   "elements": [
    {
     "type": "radiogroup",
     "name": "checkEligible",
     "title": "Check whether the customer is eligible? ",
     "choices": [
      {
       "value": "eligible",
       "text": "Eligible"
      },
      {
       "value": "noteligible",
       "text": "Not Eligible"
      }
     ],
     "colCount": 0
    }
   ],
   "visible": false,
   "visibleIf": "{checkCustomerInterest}='interested'"
  },
  {
   "name": "EligibleCustomer",
   "elements": [
    {
     "type": "multipletext",
     "name": "PermanentAddress",
     "width": "10",
     "title": "May I know your full address  with Landmark?",
     "items": [
      {
       "name": "doorNo",
       "title": "Door Number"
      },
      {
       "name": "buildingNumber",
       "title": "Building Number"
      },
      {
       "name": "street",
       "title": "Street"
      },
      {
       "name": "area",
       "title": "Area"
      },
      {
       "name": "city",
       "title": "City"
      },
      {
       "name": "taluk",
       "title": "Taluk"
      },
      {
       "name": "district",
       "title": "District"
      },
      {
       "name": "zone",
       "title": "Zone/Circle"
      },
      {
       "name": "state",
       "title": "State"
      },
      {
       "name": "pincode",
       "title": "Pincode"
      },
      {
       "name": "landmark",
       "title": "LandMark"
      }
     ],
     "itemSize": "30",
     "colCount": 3
    },
    {
     "type": "checkbox",
     "name": "AddressProof",
     "width": "10",
     "title": "May I know What is the ID and Address Proof you have? ",
     "choices": [
      {
       "value": "drivinglicence",
       "text": "Driving Licence"
      },
      {
       "value": "rationcard",
       "text": "Ration Card"
      },
      {
       "value": "passport",
       "text": "Passport"
      },
      {
       "value": "bankpassbook",
       "text": "Bank Passbook"
      },
      {
       "value": "aadhar",
       "text": "Aadhar "
      },
      {
       "value": "voterid",
       "text": "Voter ID"
      }
     ],
     "colCount": 2
    },
    {
     "type": "radiogroup",
     "name": "IsPermanentContactAddressSame",
     "width": "10",
     "title": "Is the address you have mentioned is the address to meet you in person?",
     "choices": [
      {
       "value": "yes",
       "text": "Yes"
      },
      {
       "value": "no",
       "text": "No"
      }
     ],
     "colCount": 0
    },
    {
     "type": "multipletext",
     "name": "ContactAddress",
     "visible": false,
     "visibleIf": "{IsPermanentMeetingAddressSame}='no'",
     "width": "10",
     "title": "Please share the Contact Address",
     "items": [
      {
       "name": "doorNo",
       "title": "Door Number"
      },
      {
       "name": "buildingNumber",
       "title": "Building Number"
      },
      {
       "name": "street",
       "title": "Street"
      },
      {
       "name": "area",
       "title": "Area"
      },
      {
       "name": "city",
       "title": "City"
      },
      {
       "name": "taluk",
       "title": "Taluk"
      },
      {
       "name": "district",
       "title": "District"
      },
      {
       "name": "state",
       "title": "State"
      },
      {
       "name": "landMark",
       "title": "LandMark"
      },
      {
       "name": "pinCode",
       "title": "Pincode"
      }
     ],
     "itemSize": "30",
     "colCount": 2
    },
    {
     "type": "text",
     "name": "meetingDateTime",
     "width": "10",
     "title": "May I know the Date and time when our executive can meet you?",
     "inputType": "datetime-local"
    },
    {
     "type": "text",
     "name": "numberOfConnectionReq",
     "width": "10",
     "title": "How many connections do you require?"
    },
    {
     "type": "radiogroup",
     "name": "exit",
     "width": "10",
     "title": "EXIT CALL",
     "choices": [
      {
       "value": "yes",
       "text": "YES"
      },
      {
       "value": "no",
       "text": "NO"
      }
     ],
     "colCount": 0
    }
   ],
   "visible": false,
   "visibleIf": "{checkEligible}='eligible'",
   "title": "Eligible Customer"
  },
  {
   "name": "DecideAndCallback",
   "elements": [
    {
     "type": "radiogroup",
     "name": "ifDecideAndCallback",
     "width": "10",
     "title": "If Decide and Call back",
     "choices": [
      {
       "value": "outOfStation",
       "text": "Out of station"
      },
      {
       "value": "noProof",
       "text": "No Proof currently"
      },
      {
       "value": "haveTocheck",
       "text": "Have to decide checking with family and Friends"
      },
      {
       "value": "haveToArrangeDeposit",
       "text": "Have to arrange deposit amount"
      },
      {
       "value": "busy",
       "text": "Currently Busy"
      },
      {
       "value": "needtimeToDecide",
       "text": "Need time to decide"
      },
      {
       "value": "activateAfterCompleteBalance",
       "text": "Will activate once the current balance get completed"
      },
      {
       "value": "afterBCPlanCompleted",
       "text": "MNP Customer will change once the BC gets completed"
      },
      {
       "value": "afterDataOfferCompleted",
       "text": "MNP Customer wil change once the data offer is completed"
      },
      {
       "value": "others",
       "text": "Others"
      }
     ],
     "colCount": 2
    },
    {
     "type": "text",
     "name": "availableInTown",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}='outOfStation'",
     "width": "10",
     "title": "When will you be available in the home town"
    },
    {
     "type": "text",
     "name": "callbackWhenInTown",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}='outOfStation'",
     "width": "10",
     "startWithNewLine": false,
     "title": "Get the call back Date & time",
     "inputType": "datetime-local"
    },
    {
     "type": "radiogroup",
     "name": "canArrangeNecessaryProof",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}='noProof'",
     "width": "10",
     "title": "Can you able to arrange the necessary proof?",
     "choices": [
      {
       "value": "yes",
       "text": "Yes"
      },
      {
       "value": "no",
       "text": "No"
      }
     ],
     "colCount": 0
    },
    {
     "type": "text",
     "name": "callbackWhenProofReady",
     "visible": false,
     "visibleIf": "{canArrangeNecessaryProof}='yes'",
     "width": "10",
     "startWithNewLine": false,
     "title": "Get Call back date & time",
     "inputType": "datetime-local"
    },
    {
     "type": "text",
     "name": "necessaryOfHavingProof",
     "visible": false,
     "visibleIf": "{canArrangeNecessaryProof}='no'",
     "width": "10",
     "title": "Explain the customer about the necessity of proof & close the call"
    },
    {
     "type": "text",
     "name": "question23",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=4",
     "width": "10",
     "title": "Get the call back Date & time",
     "inputType": "datetime-local"
    },
    {
     "type": "text",
     "name": "question24",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=5",
     "width": "10",
     "title": "Based on the customer's situation close the call "
    },
    {
     "type": "text",
     "name": "question25",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=5",
     "width": "10",
     "title": "If possible get the Call back time",
     "inputType": "datetime-local"
    },
    {
     "type": "text",
     "name": "question26",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=6",
     "width": "10",
     "title": "When can get back to you, get the call back date & time",
     "inputType": "datetime-local"
    },
    {
     "type": "text",
     "name": "question27",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=7",
     "width": "10",
     "title": "Convince the customer that he can able to carry forward the balance with the postpaid i.e, the amount will be credited with the first month bill"
    },
    {
     "type": "text",
     "name": "question28",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=8",
     "width": "10",
     "title": "Collect the Bill date & payment date , fix a time to call back the customer",
     "inputType": "datetime-local"
    },
    {
     "type": "text",
     "name": "question29",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=9",
     "width": "10",
     "title": "When can get back to you, get the call back date & time",
     "inputType": "datetime-local"
    },
    {
     "type": "radiogroup",
     "name": "exit",
     "width": "10",
     "title": "EXIT CALL?",
     "choices": [
      {
       "value": "yes",
       "text": "YES"
      },
      {
       "value": "no",
       "text": "NO"
      }
     ],
     "colCount": 0
    }
   ],
   "visible": false,
   "visibleIf": "{checkCustomerInterest}='callback'",
   "title": "DecideAndCallback",
   "innerIndent": 3,
   "navigationButtonsVisibility": "show"
  },
  {
   "name": "NotInterested",
   "elements": [
    {
     "type": "panel",
     "elements": [
      {
       "type": "radiogroup",
       "name": "reasonForNotInterested",
       "title": "May I know the reason why you are not interested?",
       "choices": [
        {
         "value": "happyWithOtherNetwork",
         "text": "Happy with other network Coverage"
        },
        {
         "value": "notHappyWithSuggestPlan",
         "text": "Not happy with the suggested plan"
        },
        {
         "value": "notReadyToPayDeposit",
         "text": "Not ready to pay the Deposit"
        },
        {
         "value": "abilityToMakePayment",
         "text": "Ability to make payment"
        },
        {
         "value": "happyWithCurrentNetworkRetentionPlan",
         "text": "Happy with the current networks's retention plan"
        },
        {
         "value": "companyLinkedConnection",
         "text": "Company linked connections"
        },
        {
         "value": "happyWithExistingNetworkOffer",
         "text": "Happy with the existing network's offer"
        },
        {
         "value": "happyWithPrepaid",
         "text": "Happy with prepaid"
        },
        {
         "value": "previousBadExpInPostpaid",
         "text": "Previous bad experience in Postpaid"
        },
        {
         "value": "others",
         "text": "Others"
        }
       ],
       "colCount": 2
      },
      {
       "type": "multipletext",
       "name": "residingLocationAndArea",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithOtherNetwork'",
       "width": "10",
       "title": "Can you tell me the location & area in which you are residing now ?",
       "items": [
        {
         "name": "location",
         "title": "Location"
        },
        {
         "name": "area",
         "title": "Area"
        },
        {
         "name": "city",
         "title": "City"
        },
        {
         "name": "zone",
         "title": "Zone"
        },
        {
         "name": "state",
         "title": "State"
        }
       ],
       "colCount": 2
      },
      {
       "type": "radiogroup",
       "name": "whatNetworkUsing",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithOtherNetwork'",
       "width": "10",
       "title": "May I know whether you are using 2G/3G/4G?",
       "choices": [
        {
         "value": "2g",
         "text": "2G"
        },
        {
         "value": "3g",
         "text": "3G"
        },
        {
         "value": "4g",
         "text": "4G"
        }
       ],
       "colCount": 0
      },
      {
       "type": "text",
       "name": "question1",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='notHappyWithSuggestPlan'",
       "width": "10",
       "title": "Based on your usage we have suggested this plan, \nif you are not satisfied with this can we suggest some other plan?\nif yes need to explain some other plan"
      },
      {
       "type": "text",
       "name": "outOfCityLimit",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='notReadyToPayDeposit'",
       "width": "10",
       "title": "OCL - As your area is Out of City Limit, so Rs.______ is mandate "
      },
      {
       "type": "text",
       "name": "bachelorDeposit",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='notReadyToPayDeposit'",
       "width": "10",
       "title": "If Bachelor - Bachelor deposit is mandate, by paying the deposit, the credit limit will be increased"
      },
      {
       "type": "text",
       "name": "question2",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='abilityToMakePayment'",
       "width": "10",
       "title": "May I know your affordability for your monthly bill?"
      },
      {
       "type": "text",
       "name": "MonthlyBillAffordability",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='abilityToMakePayment'",
       "width": "10",
       "title": "May I know your usage pattern - Voice, SMS & Data?, suggest the plan based on the usage"
      },
      {
       "type": "text",
       "name": "question3",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithCurrentNetworkRetentionPlan'",
       "width": "10",
       "title": "What was the offer provided by existing network?"
      },
      {
       "type": "text",
       "name": "question5",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='companyLinkedConnection'",
       "width": "10",
       "title": "Can I have your authorised Person's contact number to discuss about the Vodafone postpaid offers"
      },
      {
       "type": "text",
       "name": "question4",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithCurrentNetworkRetentionPlan'",
       "width": "10",
       "title": "Are you interested to take new postpaid coonnection for your personal purpose?"
      },
      {
       "type": "multipletext",
       "name": "question6",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithExistingNetworkOffer'",
       "width": "10",
       "title": "What is the current plan your are using and its network?",
       "items": [
        {
         "name": "currentPlan",
         "title": "Current Plan"
        },
        {
         "name": "currentNetwork",
         "title": "Current Network"
        }
       ],
       "colCount": 2
      },
      {
       "type": "text",
       "name": "question8",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithPrepaid'",
       "width": "10",
       "title": "How much you are spening per month for your recharge"
      },
      {
       "type": "radiogroup",
       "name": "question9",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithPrepaid'",
       "width": "10",
       "title": "Is the amount inclusive of Voice & Data",
       "choices": [
        {
         "value": "yesq",
         "text": "YES"
        },
        {
         "value": "no",
         "text": "NO"
        }
       ],
       "colCount": 0
      },
      {
       "type": "text",
       "name": "question7",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithPrepaid'",
       "width": "10",
       "title": "If you have taken the postpaid connection you need not worry about the frequent recharge (need to explain the benefits of postpaid based on the profile/profession)"
      },
      {
       "type": "text",
       "name": "question10",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='previousBadExpInPostpaid'",
       "width": "10",
       "title": "May I know what was the issue you have faced?"
      },
      {
       "type": "text",
       "name": "question11",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='others'",
       "width": "10",
       "title": "Others"
      }
     ],
     "title": "Reason for Not Interested"
    }
   ],
   "visible": false,
   "visibleIf": "{checkCustomerInterest}='notInterested'"
  }
 ],
 "showProgressBar": "top",
 "showQuestionNumbers": "off",
 "triggers": [
  {
   "type": "complete",
   "operator": "equal",
   "value": "yes",
   "name": "exit"
  }
 ]
};



//Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
//Survey.Survey.cssType = "bootstrapmaterial";
//Survey.Survey.cssType = "bootstrap";

// Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
// Survey.Survey.cssType = "bootstrapmaterial";
// //Survey.Survey.cssType = "bootstrap";

// var survey = new Survey.Model(surveyJSON);
// $("#surveyElement").Survey({
//     model:survey,
//     onComplete:sendDataToServer
// });

Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
//Survey.Survey.cssType = "bootstrapmaterial";
Survey.Survey.cssType = "bootstrap";

var model = new Survey.Model(surveyJSON);

window.survey = model;
model.showTitle = false;

$("#surveyElement").Survey({
  model:model,
  onComplete:sendDataToServer //SearchCustomerData
});

// Survey.Survey.cssType = "bootstrap";
// var survey = new Survey.Model(json);
// $("#surveyElement").SurveyWindow({
//     model:survey,
//     onComplete:sendDataToServer
// });

// $("#surveyElement").Survey({
//   model:model,
//   onComplete:sendDataToServer //SearchCustomerData
// });
 /*
    survey.onComplete.add(function (s) { 
    var result = "\nThe results are:\n" + JSON.stringify(survey.data);
    document.getElementById('survey_result').innerHTML = result; 
    document.getElementById('survey_oncomplete').style.display = '';
});
*/

}

if(!window["%hammerhead%"]) {
    init();
}
function sendDataToServer(survey) {
  console.log("Send data called");
var PersonalDetails=[];
var ProductsUsageDetails=[];
var ProductsInterestedDetails=[];
var ProductsNotInterestedDetails=[];
var ProductsInterestedCallbackDetails=[];
var ProductsNotInterestedCallbackDetails=[];
var AddressProof=[];
var IndustryProfileJson={Industry:{Company:{Products:{ProductFeedback:[]}}}};
var PermanentAddressJson = PermanentAddress=[];
var ContactAddressJson = ContactAddress=[];

var primaryPhone,secondaryPhone,firstName,lastName;
    if("PrimaryPhone" in survey.data) primaryPhone = {"PrimaryPhone" : survey.data.PrimaryPhone}
    if("customerSecondaryPhone" in survey.data.customerPersonalDetails) secondaryPhone = {"SecondaryPhone" : survey.data.customerPersonalDetails.customerSecondaryPhone}
    if("customerFirstName" in survey.data.customerPersonalDetails) firstName = {"FirstName" : survey.data.customerPersonalDetails.customerFirstName}
    if("customerLastName" in survey.data.customerPersonalDetails) lastName = {"LastName" : survey.data.customerPersonalDetails.customerLastName}
var PersonalDetail = $.extend(primaryPhone,secondaryPhone,firstName,lastName);

var areYouUserOfConnection,typeOfConnecton,typesOfHandset,networkType,spendOnCallUsage,spendOnInternetUsage,useStd,usageOfStd,useIsd,usageOfIsd,totalMonthlyRomingDays;
if(survey.data.checkPermission=='permission'){
    if("AreYouUserOfConnection" in survey.data) areYouUserOfConnection = {"User of Connection" : survey.data.AreYouUserOfConnection}
    if("TypeOfConnecton" in survey.data) typeOfConnecton = {"Connection Type" : survey.data.TypeOfConnecton}
    if("typesOfHandset" in survey.data) typesOfHandset = {"Handset Type" : survey.data.typesOfHandset}
    if("NetworkType" in survey.data) networkType = {"Network Type" : survey.data.NetworkType}
    if("SpendOnCallUsage" in survey.data) spendOnCallUsage = {"Spending for Call" : survey.data.SpendOnCallUsage}
    if("SpendOnInternetUsage" in survey.data) spendOnInternetUsage = {"Spending for Internet" : survey.data.SpendOnInternetUsage}
    if("UseStd" in survey.data) useStd = {"Use STD" : survey.data.UseStd}
    if("UsageOfStd" in survey.data) usageOfStd = {"Usage Minutes of STD" : survey.data.UsageOfStd}
    if("UseIsd" in survey.data) useIsd = {"Use ISD" : survey.data.UseIsd}
    if("UsageOfIsd" in survey.data) usageOfIsd = {"Usage Minutes of ISD" : survey.data.UsageOfIsd}
    if("TotalMonthlyRomingDays" in survey.data) totalMonthlyRomingDays = {"User of Connection" : survey.data.TotalMonthlyRomingDays}
  ProductsUsageDetails = $.extend(areYouUserOfConnection,typeOfConnecton,typesOfHandset,networkType,spendOnCallUsage,spendOnInternetUsage,useStd,usageOfStd,useIsd,usageOfIsd,totalMonthlyRomingDays);
}

var typeOfConnecton,typesOfHandset,networkType,spendOnCallUsage,spendOnInternetUsage,useStd,usageOfStd,useIsd,usageOfIsd,totalMonthlyRomingDays;
if(survey.data.checkPermission=='denied'){   
    if("TypeOfConnecton" in survey.data) typeOfConnecton = {"Connection Type" : survey.data.TypeOfConnecton}
    if("typesOfHandset" in survey.data) typesOfHandset = {"Handset Type" : survey.data.typesOfHandset}
    if("NetworkType" in survey.data) networkType = {"Network Type" : survey.data.NetworkType}
    if("SpendOnCallUsage" in survey.data) spendOnCallUsage = {"Spending for Call" : survey.data.SpendOnCallUsage}
    if("SpendOnInternetUsage" in survey.data) spendOnInternetUsage = {"Spending for Internet" : survey.data.SpendOnInternetUsage}
    if("UseStd" in survey.data) useStd = {"Use STD" : survey.data.UseStd}
    if("UsageOfStd" in survey.data) usageOfStd = {"Usage Minutes of STD" : survey.data.UsageOfStd}
    if("UseIsd" in survey.data) useIsd = {"Use ISD" : survey.data.UseIsd}
    if("UsageOfIsd" in survey.data) usageOfIsd = {"Usage Minutes of ISD" : survey.data.UsageOfIsd}
    if("TotalMonthlyRomingDays" in survey.data) totalMonthlyRomingDays = {"User of Connection" : survey.data.TotalMonthlyRomingDays}
  ProductsNotInterestedCallbackDetails = $.extend(typeOfConnecton,typesOfHandset,networkType,spendOnCallUsage,spendOnInternetUsage,useStd,usageOfStd,useIsd,usageOfIsd,totalMonthlyRomingDays);
}

var occupationType,convertToCUG,proofOfStay,distanceToVodafoneStore,monthlyIncome,stayingType,houseType,previousBillCopyAvailable,usageOfNumberOnCurrentNetwork,companyName;
if(survey.data.checkCustomerInterest=='interested'){   
    if("OccupationType" in survey.data) occupationType = {"Occupation Type" : survey.data.OccupationType}
    if("convertToCUG" in survey.data) convertToCUG = {"Convert To CUG" : survey.data.convertToCUG}
    if("ProofOfStay" in survey.data) proofOfStay = {"Staying On" : survey.data.ProofOfStay}
    if("distanceToVodafoneStore" in survey.data) distanceToVodafoneStore = {"Distance To Vodafone Store" : survey.data.distanceToVodafoneStore}
    if("monthlyIncome" in survey.data) monthlyIncome = {"Monthly Income" : survey.data.monthlyIncome}
    if("StayingType" in survey.data) stayingType = {"Staying Type" : survey.data.StayingType}
    if("houseType" in survey.data) houseType = {"House Type" : survey.data.houseType}
    if("previousBillCopyAvailable" in survey.data) previousBillCopyAvailable = {"Previous Bill Copy Available" : survey.data.previousBillCopyAvailable}
    if("usageOfNumberOnCurrentNetwork" in survey.data) usageOfNumberOnCurrentNetwork = {"Usage Of Number On Current Network" : survey.data.usageOfNumberOnCurrentNetwork}
    if("CompanyName" in survey.data) companyName = {"Company" : survey.data.CompanyName}
  ProductsInterestedDetails = $.extend(occupationType,convertToCUG,proofOfStay,distanceToVodafoneStore,monthlyIncome,stayingType,houseType,previousBillCopyAvailable,usageOfNumberOnCurrentNetwork,companyName);
}

var residingLocation,convertToCUG,explainPlan,outOfCityLimitPay,bachelorDeposit,monthlyAffordBill,usagePattern,offerByExitingnetwork,authorisedPersionContact,interestedForNewPostpaid,
    currentPlanInUse,currentlyUsingNetwork,monthlyRechargeAmount,amountInclusiveForVoiceAndData,explainPostpaidBenefits,issuesFaced;
if(survey.data.checkCustomerInterest=='notInterested'){   
    if("residingLocation" in survey.data) residingLocation = {"Residing Location" : survey.data.residingLocation}
    if("explainPlan" in survey.data) explainPlan = {"Explain Plan" : survey.data.explainPlan}
    if("OutOfCityLimitPay" in survey.data) outOfCityLimitPay = {"Out Of City Limit Pay" : survey.data.OutOfCityLimitPay}
    if("BachelorDeposit" in survey.data) bachelorDeposit = {"Bachelor Deposit" : survey.data.BachelorDeposit}
    if("MonthlyAffordableBill" in survey.data) monthlyAffordBill = {"Monthly Affordable Bill" : survey.data.MonthlyAffordBill}
    if("UsagePattern" in survey.data) usagePattern = {"Usage Pattern" : survey.data.UsagePattern}
    if("OfferByExitingnetwork" in survey.data) offerByExitingnetwork = {"Offer By Exiting Network" : survey.data.OfferByExitingnetwork}
    if("AuthorisedPersionContact" in survey.data) authorisedPersionContact = {"Authorised Persion Contact" : survey.data.AuthorisedPersionContact}
    if("InterestedForNewPostpaid" in survey.data) interestedForNewPostpaid = {"Interested For New Postpaid" : survey.data.InterestedForNewPostpaid}
    if("CurrentPlanInUse" in survey.data) currentPlanInUse = {"Current Plan In Use" : survey.data.CurrentPlanInUse}
    if("CurrentlyUsingNetwork" in survey.data) currentlyUsingNetwork = {"Currently Using Network" : survey.data.CurrentlyUsingNetwork}
    if("MonthlyRechargeAmount" in survey.data) monthlyRechargeAmount = {"Monthly Recharge Amount" : survey.data.MonthlyRechargeAmount}
    if("AmountInclusiveForVoiceAndData" in survey.data) amountInclusiveForVoiceAndData = {"Amount Inclusive For Voice And Data" : survey.data.AmountInclusiveForVoiceAndData}
    if("ExplainPostpaidBenefits" in survey.data) explainPostpaidBenefits = {"Explain Postpaid Benefits" : survey.data.ExplainPostpaidBenefits}
    if("IssuesFaced" in survey.data) issuesFaced = {"Issues Faced" : survey.data.IssuesFaced}
  ProductsNotInterestedDetails = $.extend(residingLocation,convertToCUG,explainPlan,outOfCityLimitPay,bachelorDeposit,monthlyAffordBill,usagePattern,offerByExitingnetwork,authorisedPersionContact,interestedForNewPostpaid,
    currentPlanInUse,currentlyUsingNetwork,monthlyRechargeAmount,amountInclusiveForVoiceAndData,explainPostpaidBenefits,issuesFaced);
}

var availableInTown,callbackWhenInTown,explainPlan,outOfCityLimitPay,bachelorDeposit,monthlyAffordBill,usagePattern,offerByExitingnetwork,authorisedPersionContact,interestedForNewPostpaid,
    currentPlanInUse,currentlyUsingNetwork,monthlyRechargeAmount,amountInclusiveForVoiceAndData,explainPostpaidBenefits,issuesFaced;
if(survey.data.checkCustomerInterest=='callback'){   
    if("availableInTown" in survey.data) availableInTown = {"Available In Town" : survey.data.availableInTown}
    if("callbackWhenInTown" in survey.data) callbackWhenInTown = {"Callback When In Town" : survey.data.callbackWhenInTown}
    if("explainPlan" in survey.data) explainPlan = {"Explain Plan" : survey.data.explainPlan}
    if("OutOfCityLimitPay" in survey.data) outOfCityLimitPay = {"Out Of City Limit Pay" : survey.data.OutOfCityLimitPay}
    if("BachelorDeposit" in survey.data) bachelorDeposit = {"Bachelor Deposit" : survey.data.BachelorDeposit}
    if("MonthlyAffordableBill" in survey.data) monthlyAffordBill = {"Monthly Affordable Bill" : survey.data.MonthlyAffordBill}
    if("UsagePattern" in survey.data) usagePattern = {"Usage Pattern" : survey.data.UsagePattern}
    if("OfferByExitingnetwork" in survey.data) offerByExitingnetwork = {"Offer By Exiting Network" : survey.data.OfferByExitingnetwork}
    if("AuthorisedPersionContact" in survey.data) authorisedPersionContact = {"Authorised Persion Contact" : survey.data.AuthorisedPersionContact}
    if("InterestedForNewPostpaid" in survey.data) interestedForNewPostpaid = {"Interested For New Postpaid" : survey.data.InterestedForNewPostpaid}
    if("CurrentPlanInUse" in survey.data) currentPlanInUse = {"Current Plan In Use" : survey.data.CurrentPlanInUse}
    if("CurrentlyUsingNetwork" in survey.data) currentlyUsingNetwork = {"Currently Using Network" : survey.data.CurrentlyUsingNetwork}
    if("MonthlyRechargeAmount" in survey.data) monthlyRechargeAmount = {"Monthly Recharge Amount" : survey.data.MonthlyRechargeAmount}
    if("AmountInclusiveForVoiceAndData" in survey.data) amountInclusiveForVoiceAndData = {"Amount Inclusive For Voice And Data" : survey.data.AmountInclusiveForVoiceAndData}
    if("ExplainPostpaidBenefits" in survey.data) explainPostpaidBenefits = {"Explain Postpaid Benefits" : survey.data.ExplainPostpaidBenefits}
    if("IssuesFaced" in survey.data) issuesFaced = {"Issues Faced" : survey.data.IssuesFaced}
 ProductsInterestedCallbackDetails = $.extend(availableInTown,callbackWhenInTown,explainPlan,outOfCityLimitPay,bachelorDeposit,monthlyAffordBill,usagePattern,offerByExitingnetwork,authorisedPersionContact,interestedForNewPostpaid,
    currentPlanInUse,currentlyUsingNetwork,monthlyRechargeAmount,amountInclusiveForVoiceAndData,explainPostpaidBenefits,issuesFaced);
}

var doorNo,buildingNumber,buildingName,street,area,city,taluk,district,zone,state,pincode,landmark;
if(survey.data.checkEligible=='eligible'){   
    if("doorNo" in survey.data.PermanentAddress) doorNo = {"DoorNumber" : survey.data.PermanentAddress.doorNo}
    if("buildingNumber" in survey.data.PermanentAddress) buildingNumber = {"BuildingNumber" : survey.data.PermanentAddress.buildingNumber}
    if("buildingName" in survey.data.PermanentAddress) buildingName = {"BuildingName" : survey.data.PermanentAddress.buildingName}
    if("street" in survey.data.PermanentAddress) street = {"Street" : survey.data.PermanentAddress.street}
    if("area" in survey.data.PermanentAddress) area = {"Area" : survey.data.PermanentAddress.area}
    if("city" in survey.data.PermanentAddress) city = {"City" : survey.data.PermanentAddress.city}
    if("taluk" in survey.data.PermanentAddress) taluk = {"Taluk" : survey.data.PermanentAddress.taluk}
    if("district" in survey.data.PermanentAddress) district = {"District" : survey.data.PermanentAddress.district}
    if("zone" in survey.data.PermanentAddress) zone = {"Zone" : survey.data.PermanentAddress.zone}
    if("state" in survey.data.PermanentAddress) state = {"State" : survey.data.PermanentAddress.state}
    if("pincode" in survey.data.PermanentAddress) pincode = {"Pincode" : survey.data.PermanentAddress.pincode}
    if("landmark" in survey.data.PermanentAddress) landmark = {"Landmark" : survey.data.PermanentAddress.landmark}
PermanentAddressJson.PermanentAddress = $.extend(doorNo,buildingNumber,buildingName,street,area,city,taluk,district,zone,state,pincode,landmark);
}

var drivinglicence,rationcard,passport,bankpassbook,aadhar,voterid;
if("AddressProof" in survey.data){   
    if("drivinglicence" in survey.data.AddressProof) drivinglicence = {"Driving Licence" : survey.data.AddressProof[0]};//.drivinglicence}
    if("rationcard" in survey.data.AddressProof) rationcard = {"Ration Card" : survey.data.PermanentAddress[1]}//.rationcard}
    if("passport" in survey.data.AddressProof) passport = {"Passport" : survey.data.AddressProof.passport}
    if("bankpassbook" in survey.data.AddressProof) bankpassbook = {"Bank Passbook" : survey.data.AddressProof.bankpassbook}
    if("aadhar" in survey.data.AddressProof) aadhar = {"Aadhar" : survey.data.AddressProof.aadhar}
    if("voterid" in survey.data.AddressProof) voterid = {"Voter ID" : survey.data.AddressProof.voterid}
  AddressProof = $.extend(drivinglicence,rationcard,passport,bankpassbook,aadhar,voterid);
}
var doorNo,buildingNumber,buildingName,street,area,city,taluk,district,zone,state,pincode,landmark;
if(survey.data.IsPermanentContactAddressSame=='no'){  
    if("doorNo" in survey.data.PermanentAddress) doorNo = {"DoorNumber" : survey.data.PermanentAddress.doorNo}
    if("buildingNumber" in survey.data.PermanentAddress) buildingNumber = {"BuildingNumber" : survey.data.PermanentAddress.buildingNumber}
    if("buildingName" in survey.data.PermanentAddress) buildingName = {"BuildingName" : survey.data.PermanentAddress.buildingName}
    if("street" in survey.data.PermanentAddress) street = {"Street" : survey.data.PermanentAddress.street}
    if("area" in survey.data.PermanentAddress) area = {"Area" : survey.data.PermanentAddress.area}
    if("city" in survey.data.PermanentAddress) city = {"City" : survey.data.PermanentAddress.city}
    if("taluk" in survey.data.PermanentAddress) taluk = {"Taluk" : survey.data.PermanentAddress.taluk}
    if("district" in survey.data.PermanentAddress) district = {"District" : survey.data.PermanentAddress.district}
    if("zone" in survey.data.PermanentAddress) zone = {"Zone" : survey.data.PermanentAddress.zone}
    if("state" in survey.data.PermanentAddress) state = {"State" : survey.data.PermanentAddress.state}
    if("pincode" in survey.data.PermanentAddress) pincode = {"Pincode" : survey.data.PermanentAddress.pincode}
    if("landmark" in survey.data.PermanentAddress) landmark = {"Landmark" : survey.data.PermanentAddress.landmark}
  ContactAddressJson.ContactAddress = $.extend(doorNo,buildingNumber,buildingName,street,area,city,taluk,district,zone,state,pincode,landmark);
}

IndustryProfileJson.Industry={"Name":"Tele"};
IndustryProfileJson.Industry.Company={"Name":"Vodafone"};
IndustryProfileJson.Industry.Company.Products={"Name":"PreToPost"};

IndustryProfileJson.Industry.Company.Products.ProductFeedback ={
  ProductsUsageDetails,
  ProductsInterestedDetails,
  ProductsInterestedCallbackDetails,
  ProductsNotInterestedDetails,
  ProductsNotInterestedCallbackDetails  
}
var CustomerProfileJson = $.extend(PersonalDetail,PermanentAddressJson,ContactAddressJson);

createCustomerProfile(CustomerProfileJson,IndustryProfileJson);

}
function createCustomerProfile(customerProfile,IndustryProfile){
  $.ajax({
        url: "https://gdp-server-manikandanmuthuv.c9users.io/customer/profile", 
        type: "POST",
        crossDomain: true,
        data: customerProfile,
        dataType: "json",
        success:function(customerProfile){
           var customerDetails = JSON.stringify(result);
          var customerModel = JSON.parse(customerDetails);
          var CustomerId="CustomerId";
          IndustryProfile[CustomerId] = customerModel._id;
          taskDetails[CustomerId] = customerModel._id;
          createTask(taskDetails);          
          createIndustryProfile(IndustryProfile);
        },
        error:function(xhr,status,error){
           // alert(status);
        }
    });
  } 
function createIndustryProfile(IndustryProfile){
  //  const options = {  
  //   method: 'POST',
  //   uri: 'https://gdp-server-manikandanmuthuv.c9users.io/customer/feedback',
  //   body:IndustryProfile,
  //   json: true       
  // }
  // request(options)  
  //   .then(function (response) {
  //     // Handle the response
  //   })
  //   .catch(function (err) {
  //     // Deal with the error
  //   })
    $.ajax({
            url: "https://gdp-server-manikandanmuthuv.c9users.io/customer/feedback", 
            type: "POST",
            crossDomain: true,
            data:IndustryProfile,
            dataType: "json",
            success:function(result){
               // alert(JSON.stringify(result));
            },
            error:function(xhr,status,error){
              //  alert(status);
            }
        });
}
function createTask(taskDetails){
  // const options = {  
  //   method: 'POST',
  //   uri: 'https://gdp-server-manikandanmuthuv.c9users.io/employee/job',
  //   body:taskDetails,
  //   json: true       
  // }
  // request(options)  
  //   .then(function (response) {
  //     // Handle the response
  //   })
  //   .catch(function (err) {
  //     // Deal with the error
  //   })
    $.ajax({
            url: "https://gdp-server-manikandanmuthuv.c9users.io/employee/job", 
            type: "POST",
            crossDomain: true,
            data:taskDetails,
            dataType: "json",
            success:function(result){
               // alert(JSON.stringify(result));
            },
            error:function(xhr,status,error){
              //  alert(status);
            }
        });
}