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
      "default": "Primary Phone",
      "ta": "முதன்மை தொலைபேசி"
     },
     "isRequired": true
    },
    {
     "type": "radiogroup",
     "name": "checkPermission",
     "width": "10",
     "title": {
      "default": "I am calling from Vodafone, I would like to talk to you about Vodafone' new plan which suits for you",
      "ta": "வணக்கம், நான் வோடஃபோனில் இருந்து பேசுகிறேன், புதிய வோடஃபோன் பிளானைப் பற்றி நான் உங்களுடன் பேச விரும்புகிறேன், உங்கள் நேரத்தை தயவுசெய்து நான் பெற முடியுமா?"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "permission",
       "text": {
        "default": "Permission",
        "ta": "அனுமதி"
       }
      },
      {
       "value": "denied",
       "text": {
        "default": "Denied",
        "ta": "அனுமதி இல்லை"
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
      "default": "May I know call back date and time?",
      "ta": "உங்களை மீண்டும் அழைக்கும் தேதி மற்றும் நேரத்தை என்னிடம் சொல்ல முடியுமா?"
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
      "default": "May I know the reason why you are not interested?",
      "ta": "நீங்கள் ஆர்வமில்லாமல் இருப்பதற்கான காரணம் எனக்குத் தெரியுமா?"
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
   
  Personaldetail=[{
   "PrimaryPhone":(survey.data.PrimaryPhone.length > 0 ?survey.data.PrimaryPhone:null), 
   "SecondaryPhone":(survey.data.customerPersonalDetails.SecondaryPhone.length > 0?survey.data.customerPersonalDetails.customerSecondaryPhone:null),  
   "FirstName":(survey.data.customerPersonalDetails.FirstName.length > 0?survey.data.customerPersonalDetails.customerFirstName:null),  
   "LastName":(survey.data.customerPersonalDetails.LastName.length > 0?survey.data.customerPersonalDetails.customerLastName:null)  
   }]; 

  if(survey.data.checkPermission=='permission'){
      ProductsUsageDetails =[{
        "User of Connection":survey.data.AreYouUserOfConnection,
        "Connection Type":survey.data.TypeOfConnecton,
        "Handset Type":survey.data.typesOfHandset,
        "Network Type":survey.data.NetworkType,    
        "Spending for Call":survey.data.SpendOnCallUsage,   
        "Spending for Internet":survey.data.SpendOnInternetUsage,  
        "Use STD":survey.data.UseStd,  
        "Usage Minutes of STD":survey.data.UsageOfStd,  
        "Use ISD":survey.data.UseIsd,  
        "Usage Minutes of ISD":survey.data.UsageOfIsd,  
        "Roaming Days in Month":survey.data.TotalMonthlyRomingDays
      }] 
  }
  if(survey.data.checkPermission=='denied'){
      ProductsNotInterestedCallbackDetails=[{
        "When customer denies to continue call get Callback Date and Time ":survey.data.CallBackTimeWhenDenied,
        "Connection Type":survey.data.TypeOfConnecton,
        "Handset Type":survey.data.typesOfHandset,
        "Network Type":survey.data.NetworkType,    
        "Spending for Call":survey.data.SpendOnCallUsage,   
        "Spending for Internet":survey.data.SpendOnInternetUsage,  
        "Use STD":survey.data.UseStd,  
        "Usage Minutes of STD":survey.data.UsageOfStd,  
        "Use ISD":survey.data.UseIsd,  
        "Usage Minutes of ISD":survey.data.UsageOfIsd,  
        "Roaming Days in Month":survey.data.TotalMonthlyRomingDays
      }]
    }
  if(survey.data.checkCustomerInterest=='interested'){
    ProductsInterestedDetails=[{
      "Occupation Type":survey.data.OccupationType,
      "Convert To CUG":survey.data.convertToCUG,
      "Staying On":survey.data.ProofOfStay,
      "Distanc To Vodafone Store":survey.data.distanceToVodafoneStore,    
      "Spending for Call":survey.data.monthlyIncome,   
      "Staying Type":survey.data.StayingType,  
      "House Type":survey.data.houseType,  
      "PreviousBill Copy Available":survey.data.previousBillCopyAvailable,  
      "Usage Of Number On Current Network":survey.data.usageOfNumberOnCurrentNetwork,  
      "Company Name":survey.data.CompanyName
    }]
  }
  if(survey.data.checkCustomerInterest=='notInterested'){
    ProductsNotInterestedDetails=[{
    "Reason For Not Interested":survey.data.reasonForNotInterested,
      "Residing Location":survey.data.residingLocation,
      "Explain Plan":survey.data.explainPlan,
      "Out Of City Limit Pay":survey.data.OutOfCityLimitPay,    
      "Bachelor Deposit":survey.data.BachelorDeposit,   
      "Monthly Affordable Bill":survey.data.MonthlyAffordBill,  
      "Usage Pattern":survey.data.UsagePattern,  
      "Offer By Exiting Network":survey.data.OfferByExitingnetwork,  
      "Authorised Persion Contact":survey.data.AuthorisedPersionContact,  
      "Interested For New Postpaid":survey.data.InterestedForNewPostpaid, 
      "Current Plan In Use":survey.data.CurrentPlanInUse,  
      "Currently Using Network":survey.data.CurrentlyUsingNetwork,  
      "Monthly Recharge Amount":survey.data.MonthlyRechargeAmount,  
      "Amount Inclusive For Voice And Data":survey.data.AmountInclusiveForVoiceAndData,  
      "Explain Postpaid Benefits":survey.data.ExplainPostpaidBenefits,
      "Issues Faced":survey.data.IssuesFaced
    }]
  }
  if(survey.data.checkCustomerInterest=='callback'){
    ProductsInterestedCallbackDetails=[{
      "Available In Town":survey.data.availableInTown,
      "Callback When In Town":survey.data.callbackWhenInTown,
      "Explain Plan":survey.data.explainPlan,
      "Out Of City Limit Pay":survey.data.OutOfCityLimitPay,    
      "Bachelor Deposit":survey.data.BachelorDeposit,   
      "Monthly Affordable Bill":survey.data.MonthlyAffordBill,  
      "Usage Pattern":survey.data.UsagePattern,  
      "Offer By Exiting Network":survey.data.OfferByExitingnetwork,  
      "Authorised Persion Contact":survey.data.AuthorisedPersionContact,  
      "Interested For New Postpaid":survey.data.InterestedForNewPostpaid, 
      "Current Plan In Use":survey.data.CurrentPlanInUse,  
      "Currently Using Network":survey.data.CurrentlyUsingNetwork,  
      "Monthly Recharge Amount":survey.data.MonthlyRechargeAmount,  
      "Amount Inclusive For Voice And Data":survey.data.AmountInclusiveForVoiceAndData,  
      "Explain Postpaid Benefits":survey.data.ExplainPostpaidBenefits,
      "Issues Faced":survey.data.IssuesFaced
    }]
  }
  if(survey.data.checkEligible=='eligible'){  
    PermanentAddressJson.PermanentAddress={
      "DoorNumber":survey.data.PermanentAddress.doorNo,
      "BuildingNumber":survey.data.PermanentAddress.buildingNumber,
      "BuildingName":survey.data.PermanentAddress.doorNo,
      "Street":survey.data.PermanentAddress.street,
      "Area":survey.data.PermanentAddress.area,
      "City":survey.data.PermanentAddress.city,
      "Taluk":survey.data.PermanentAddress.taluk,
      "District":survey.data.PermanentAddress.district,
      "Zone":survey.data.PermanentAddress.zone,
      "State":survey.data.PermanentAddress.state, 
      "Pincode":survey.data.PermanentAddress.pincode,
      "Landmark":survey.data.PermanentAddress.landmark
    }
  }
// AddressProofJson.AddressProof={
//   "Driving Licence":survey.data.AddressProof.drivinglicence,
//   "Ration Card":survey.data.AddressProof.rationcard,
//   "Passport":survey.data.AddressProof.passport,
//   "Bank Passbook":survey.data.AddressProof.bankpassbook,
//   "Aadhar":survey.data.AddressProof.aadhar,
//   "Voter ID":survey.data.AddressProof.voterid
// }
  if(survey.data.IsPermanentContactAddressSame=='no'){
     ContactAddressJson.ContactAddress={
      "DoorNumber":survey.data.PermanentAddress.doorNo,
      "BuildingNumber":survey.data.PermanentAddress.buildingNumber,
      "BuildingName":survey.data.PermanentAddress.doorNo,
      "Street":survey.data.PermanentAddress.street,
      "Area":survey.data.PermanentAddress.area,
      "City":survey.data.PermanentAddress.city,
      "Taluk":survey.data.PermanentAddress.taluk,
      "District":survey.data.PermanentAddress.district,
      "Zone":survey.data.PermanentAddress.zone,
      "State":survey.data.PermanentAddress.state, 
      "Pincode":survey.data.PermanentAddress.pincode,
      "Landmark":survey.data.PermanentAddress.landmark
    }
  }

var feebackObject = document.all;


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

var customerProfile = $.extend(Personaldetail,PermanentAddressJson,ContactAddressJson);
createCustomerProfile(customerProfile);

}
function createCustomerProfile(customerProfile){
  $.ajax({
        url: "http://localhost:3000/customer/profile", 
        type: "POST",
        crossDomain: true,
        data: customerProfile,
        dataType: "json",
        success:function(result){
            createIndustryProfile(IndustryProfileJson);
        },
        error:function(xhr,status,error){
            alert(status);
        }
    });
  } 

function createIndustryProfile(IndustryProfileJson){
    $.ajax({
            url: "http://localhost:3000/customer/feedback", 
            type: "POST",
            crossDomain: true,
            data:IndustryProfileJson,
            dataType: "json",
            success:function(result){
                alert(JSON.stringify(result));
            },
            error:function(xhr,status,error){
                alert(status);
            }
        });
}

// $(function(){

//   $(".dropdown-menu li a").click(function(){

//     $(".btn:first-child").text($(this).text());
//     $(".btn:first-child").val($(this).text());

//  });
// }

// });
