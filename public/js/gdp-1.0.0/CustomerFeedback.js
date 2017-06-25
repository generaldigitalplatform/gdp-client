function init() {
    // $.material.init();

    var surveyJSON ={
 "completedHtml": "<p><h4>Thank you for completing customer feedback</h4>",
 "pages": [
  {
   "elements": [
    {
     "type": "text",
     "isRequired": true,
     "name": "PrimaryPhone",
     "title": "Primary Phone",
     "width": "10"
    },
    {
     "type": "radiogroup",
     "choices": [
      {
       "value": "permission",
       "text": "Permission"
      },
      {
       "value": "denied",
       "text": "Denied"
      }
     ],
     "colCount": 0,
     "isRequired": true,
     "name": "checkPermission",
     "title": "I am calling from Vodafone, I would like to talk to you about Vodafone' new plan which suits for you",
     "width": "10"
    },
    {
     "type": "text",
     "inputType": "datetime-local",
     "name": "deniedCallbackDateTime",
     "title": "May I know call back date and time?",
     "visible": false,
     "visibleIf": "{checkPermission}='denied''",
     "width": "10"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "exit",
     "title": "EXIT CALL?",
     "visible": false,
     "visibleIf": "{checkPermission}='denied'",
     "width": "10"
    },
    {
     "type": "panel",
     "elements": [
      {
       "type": "radiogroup",
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
       "colCount": 2,
       "name": "reasonForNotInterested",
       "title": "May I know the reason why you are not interested?",
       "visible": false,
       "visibleIf": "{exit}='yes' and {checkPermission}='denied'"
      },
      {
       "type": "multipletext",
       "colCount": 2,
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
       "name": "residingLocationAndArea",
       "title": "Can you tell me the location & area in which you are residing now ?",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithOtherNetwork'",
       "width": "10"
      },
      {
       "type": "radiogroup",
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
       "colCount": 0,
       "name": "whatNetworkUsing",
       "title": "May I know whether you are using 2G/3G/4G?",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithOtherNetwork'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "suggestedPlan",
       "title": "Based on your usage we have suggested this plan, \nif you are not satisfied with this can we suggest some other plan?\nif yes need to explain some other plan",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='notHappyWithSuggestPlan'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "outOfCityLimit",
       "title": "OCL - As your area is Out of City Limit, so Rs.______ is mandate ",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='notReadyToPayDeposit'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "bachelorDeposit",
       "title": "If Bachelor - Bachelor deposit is mandate, by paying the deposit, the credit limit will be increased",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='notReadyToPayDeposit'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "affordableMonthlyBill",
       "title": "May I know your affordability for your monthly bill?",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='abilityToMakePayment'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "usagePattern",
       "title": "May I know your usage pattern - Voice, SMS & Data?, suggest the plan based on the usage",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='abilityToMakePayment'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "offerbyExistingNetwork",
       "title": "What was the offer provided by existing network?",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithCurrentNetworkRetentionPlan'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "authPersonContactNumber",
       "title": "Can I have your authorised Person's contact number to discuss about the Vodafone postpaid offers",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='companyLinkedConnection'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "interestedToTakeNewConnection",
       "title": "Are you interested to take new postpaid connnection for your personal purpose?",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithCurrentNetworkRetentionPlan'",
       "width": "10"
      },
      {
       "type": "multipletext",
       "colCount": 2,
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
       "name": "currentPlanAndNetwork",
       "title": "What is the current plan your are using and its network?",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithExistingNetworkOffer'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "rechargePerMonth",
       "title": "How much you are spending per month for your recharge",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithPrepaid'",
       "width": "10"
      },
      {
       "type": "radiogroup",
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
       "colCount": 0,
       "name": "amountIncludeVoiceAndData",
       "title": "Is the amount inclusive of Voice & Data",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithPrepaid'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "postpaidBenefits",
       "title": "If you have taken the postpaid connection you need not worry about the frequent recharge (need to explain the benefits of postpaid based on the profile/profession)",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithPrepaid'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "IssueFacedWithPostpaid",
       "title": "May I know what was the issue you have faced?",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='previousBadExpInPostpaid'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "others",
       "title": "Others",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='others'",
       "width": "10"
      }
     ],
     "name": "NotInterestedReasons",
     "title": "Reason for Not Interested",
     "visible": false,
     "visibleIf": "{exit}='yes'"
    }
   ],
   "name": "Greetings",
   "navigationButtonsVisibility": "show",
   "title": "Greetings!!!"
  },
  {
   "elements": [
    {
     "type": "multipletext",
     "itemSize": 20,
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
     "name": "customerPersonalDetails",
     "title": "Sir/Madam, May I know your Name and Secondary Phone number?",
     "width": "10"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "AreYouUserOfConnection",
     "title": "Are you the user of the connection?",
     "width": "10"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "TypeOfConnecton",
     "title": "Are you using a prepaid number or postpaid?",
     "width": "10"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "typesOfHandset",
     "title": "Are you using a 3G Handset or a 4G handset?",
     "width": "10"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "NetworkType",
     "title": "May I know which network you are using?",
     "width": "10"
    },
    {
     "type": "text",
     "name": "SpendOnCallUsage",
     "title": "How much do you spend for your mobile phone usage in a month?",
     "width": "10"
    },
    {
     "type": "text",
     "name": "SpendOnInternetUsage",
     "title": "May I know How much Internet do you use?",
     "width": "10"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "UseStd",
     "title": "Do you use STD?",
     "width": "10"
    },
    {
     "type": "text",
     "name": "UsageOfStd",
     "startWithNewLine": false,
     "title": "Approximately, How many minutes do you use?",
     "visible": false,
     "visibleIf": "{UseStd}='yes'",
     "width": "10"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "UseIsd",
     "title": "Do you use ISD?",
     "width": "10"
    },
    {
     "type": "text",
     "name": "UsageOfIsd",
     "startWithNewLine": false,
     "title": "Approximately, How many minutes do you use?",
     "visible": false,
     "visibleIf": "{UseIsd}='yes'",
     "width": "10"
    },
    {
     "type": "text",
     "name": "TotalMonthlyRomingDays",
     "startWithNewLine": false,
     "title": "How many days in a month you will be in Roaming?",
     "visible": false,
     "visibleIf": "{useIsd}='yes'",
     "width": "10"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "exit",
     "title": "EXIT CALL?",
     "width": "10"
    }
   ],
   "innerIndent": 3,
   "name": "Basics",
   "navigationButtonsVisibility": "show"
  },
  {
   "elements": [
    {
     "type": "html",
     "name": "customerBasicData",
     "html": "<h5>Customer Basic Data</h5>\n"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "checkCustomerInterest",
     "title": "check whether the customer is interested/not interested/call back?"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "exit",
     "title": "EXIT CALL?",
     "visible": false,
     "visibleIf": "{checkPermission}='denied'",
     "width": "10"
    }
   ],
   "innerIndent": 3,
   "name": "ProductPitch",
   "navigationButtonsVisibility": "show",
   "title": "Product Best Fit Plan Pitch"
  },
  {
   "elements": [
    {
     "type": "radiogroup",
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
     "colCount": 4,
     "name": "OccupationType",
     "title": "May I know your occupation?",
     "width": "10"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "convertToCUG",
     "title": "Do you use any other number which you can change to vodafone postpaid and make CUG?",
     "width": "10"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "ProofOfStay",
     "title": "Does your proof contains the current address or different address?",
     "width": "10"
    },
    {
     "type": "text",
     "name": "distanceToVodafoneStore",
     "title": "What is the distance between your residence and Vodafone store?",
     "width": "10"
    },
    {
     "type": "text",
     "name": "monthlyIncome",
     "title": "May I know your current monthly income?",
     "width": "10"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "StayingType",
     "title": "May I know whether you are staying with your family or in bachelor stay?",
     "width": "10"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "houseType",
     "title": "Are you living in a concrete builing or a hut house?",
     "width": "10"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "previousBillCopyAvailable",
     "title": "Can I get your previous bill copy?",
     "width": "10"
    },
    {
     "type": "text",
     "name": "usageOfNumberOnCurrentNetwork",
     "title": "May I know how long you are using this number with your current Network?",
     "width": "10"
    },
    {
     "type": "text",
     "name": "CompanyName",
     "title": "May I  know your company name?",
     "width": "10"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "exit",
     "title": "EXIT CALL?",
     "width": "10"
    }
   ],
   "name": "Interested",
   "navigationButtonsVisibility": "show",
   "title": "Intrested",
   "visible": false,
   "visibleIf": "{checkCustomerInterest}='interested'"
  },
  {
   "elements": [
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "checkEligible",
     "title": "Check whether the customer is eligible? "
    }
   ],
   "name": "EvaluateCustomer",
   "visible": false,
   "visibleIf": "{checkCustomerInterest}='interested'"
  },
  {
   "elements": [
    {
     "type": "multipletext",
     "colCount": 3,
     "itemSize": 30,
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
     "name": "PermanentAddress",
     "title": "May I know your full address  with Landmark?",
     "width": "10"
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
     "colCount": 0,
     "name": "IsPermanentContactAddressSame",
     "title": "Is the address you have mentioned is the address to meet you in person?",
     "width": "10"
    },
    {
     "type": "multipletext",
     "colCount": 2,
     "itemSize": 30,
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
     "name": "ContactAddress",
     "title": "Please share the Contact Address",
     "visible": false,
     "visibleIf": "{IsPermanentMeetingAddressSame}='no'",
     "width": "10"
    },
    {
     "type": "text",
     "inputType": "datetime-local",
     "name": "meetingDateTime",
     "title": "May I know the Date and time when our executive can meet you?",
     "width": "10"
    },
    {
     "type": "text",
     "name": "numberOfConnectionReq",
     "title": "How many connections do you require?",
     "width": "10"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "exit",
     "title": "EXIT CALL",
     "width": "10"
    }
   ],
   "name": "EligibleCustomer",
   "title": "Eligible Customer",
   "visible": false,
   "visibleIf": "{checkEligible}='eligible'"
  },
  {
   "elements": [
    {
     "type": "radiogroup",
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
     "colCount": 2,
     "name": "ifDecideAndCallback",
     "title": "If Decide and Call back",
     "width": "10"
    },
    {
     "type": "text",
     "name": "availableInTown",
     "title": "When will you be available in the home town",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}='outOfStation'",
     "width": "10"
    },
    {
     "type": "text",
     "inputType": "datetime-local",
     "name": "callbackWhenInTown",
     "startWithNewLine": false,
     "title": "Get the call back Date & time",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}='outOfStation'",
     "width": "10"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "canArrangeNecessaryProof",
     "title": "Can you able to arrange the necessary proof?",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}='noProof'",
     "width": "10"
    },
    {
     "type": "text",
     "inputType": "datetime-local",
     "name": "callbackWhenProofReady",
     "startWithNewLine": false,
     "title": "Get Call back date & time",
     "visible": false,
     "visibleIf": "{canArrangeNecessaryProof}='yes'",
     "width": "10"
    },
    {
     "type": "text",
     "name": "necessaryOfHavingProof",
     "title": "Explain the customer about the necessity of proof & close the call",
     "visible": false,
     "visibleIf": "{canArrangeNecessaryProof}='no'",
     "width": "10"
    },
    {
     "type": "text",
     "inputType": "datetime-local",
     "name": "question23",
     "title": "Get the call back Date & time",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=4",
     "width": "10"
    },
    {
     "type": "text",
     "name": "question24",
     "title": "Based on the customer's situation close the call ",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=5",
     "width": "10"
    },
    {
     "type": "text",
     "inputType": "datetime-local",
     "name": "question25",
     "title": "If possible get the Call back time",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=5",
     "width": "10"
    },
    {
     "type": "text",
     "inputType": "datetime-local",
     "name": "question26",
     "title": "When can get back to you, get the call back date & time",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=6",
     "width": "10"
    },
    {
     "type": "text",
     "name": "question27",
     "title": "Convince the customer that he can able to carry forward the balance with the postpaid i.e, the amount will be credited with the first month bill",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=7",
     "width": "10"
    },
    {
     "type": "text",
     "inputType": "datetime-local",
     "name": "question28",
     "title": "Collect the Bill date & payment date , fix a time to call back the customer",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=8",
     "width": "10"
    },
    {
     "type": "text",
     "inputType": "datetime-local",
     "name": "question29",
     "title": "When can get back to you, get the call back date & time",
     "visible": false,
     "visibleIf": "{ifDecideAndCallback}=9",
     "width": "10"
    },
    {
     "type": "radiogroup",
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
     "colCount": 0,
     "name": "exit",
     "title": "EXIT CALL?",
     "width": "10"
    }
   ],
   "innerIndent": 3,
   "name": "DecideAndCallback",
   "navigationButtonsVisibility": "show",
   "title": "DecideAndCallback",
   "visible": false,
   "visibleIf": "{checkCustomerInterest}='callback'"
  },
  {
   "elements": [
    {
     "type": "panel",
     "elements": [
      {
       "type": "radiogroup",
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
       "colCount": 2,
       "name": "reasonForNotInterested",
       "title": "May I know the reason why you are not interested?"
      },
      {
       "type": "multipletext",
       "colCount": 2,
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
       "name": "residingLocationAndArea",
       "title": "Can you tell me the location & area in which you are residing now ?",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithOtherNetwork'",
       "width": "10"
      },
      {
       "type": "radiogroup",
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
       "colCount": 0,
       "name": "whatNetworkUsing",
       "title": "May I know whether you are using 2G/3G/4G?",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithOtherNetwork'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "notHappyWithSuggestPlan",
       "title": "Based on your usage we have suggested this plan, \nif you are not satisfied with this can we suggest some other plan?\nif yes need to explain some other plan",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='notHappyWithSuggestPlan'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "outOfCityLimit",
       "title": "OCL - As your area is Out of City Limit, so Rs.______ is mandate ",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='notReadyToPayDeposit'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "bachelorDeposit",
       "title": "If Bachelor - Bachelor deposit is mandate, by paying the deposit, the credit limit will be increased",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='notReadyToPayDeposit'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "others",
       "title": "May I know your affordability for your monthly bill?",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='abilityToMakePayment'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "MonthlyBillAffordability",
       "title": "May I know your usage pattern - Voice, SMS & Data?, suggest the plan based on the usage",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='abilityToMakePayment'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "offerbyExistingNetwork",
       "title": "What was the offer provided by existing network?",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithCurrentNetworkRetentionPlan'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "authPersonContactNumber",
       "title": "Can I have your authorised Person's contact number to discuss about the Vodafone postpaid offers",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='companyLinkedConnection'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "interestedToTakeNewConnection",
       "title": "Are you interested to take new postpaid connnection for your personal purpose?",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithCurrentNetworkRetentionPlan'",
       "width": "10"
      },
      {
       "type": "multipletext",
       "colCount": 2,
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
       "name": "currentPlanAndNetwork",
       "title": "What is the current plan your are using and its network?",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithExistingNetworkOffer'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "rechargePerMonth",
       "title": "How much you are spening per month for your recharge",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithPrepaid'",
       "width": "10"
      },
      {
       "type": "radiogroup",
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
       "colCount": 0,
       "name": "amountIncludeVoiceAndData",
       "title": "Is the amount inclusive of Voice & Data",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithPrepaid'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "suggestedPlan",
       "title": "If you have taken the postpaid connection you need not worry about the frequent recharge (need to explain the benefits of postpaid based on the profile/profession)",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithPrepaid'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "IssueFacedWithPostpaid",
       "title": "May I know what was the issue you have faced?",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='previousBadExpInPostpaid'",
       "width": "10"
      },
      {
       "type": "text",
       "name": "question11",
       "title": "Others",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='others'",
       "width": "10"
      }
     ],
     "title": "Reason for Not Interested"
    }
   ],
   "name": "NotInterested",
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



// Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
// Survey.Survey.cssType = "bootstrapmaterial";


Survey.defaultBootstrapCss.navigationButton = "btn btn-primary";
Survey.Survey.cssType = "bootstrap"; //bootstrapmaterial

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
function collectProductNotInterestedReasons(data){
    var deniedCallbackDateTime;
    if("deniedCallbackDateTime" in data){
     deniedCallbackDateTime = {"DeniedCallbackDateTime" : data.deniedCallbackDateTime}
   }
    if(data.reasonForNotInterested=='happyWithOtherNetwork'){
      if("residingLocationAndArea" in data){
                  HappyWithotherNetwork={
                    area:data.residingLocationAndArea.area,
                    city:data.residingLocationAndArea.city,
                    location:data.residingLocationAndArea.location,
                    zone:data.residingLocationAndArea.zone,
                    state:data.residingLocationAndArea.state
                  }
            }
            HappyWithOtherNetworkJson={
              HappyWithotherNetwork
            }
            ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,HappyWithOtherNetworkJson);
    }
    if(data.reasonForNotInterested=='notReadyToPayDeposit'){
      NotreadyToDeposit={
        outOfCityLimit:data.outOfCityLimit,
        bachelorDeposit:data.bachelorDeposit

      }
      NotreadyToDepositJson={
      NotreadyToDeposit
      }
      ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,NotreadyToDepositJson);
    }
    if(data.reasonForNotInterested=='happyWithCurrentNetworkRetentionPlan'){
      HappyWithCurrentNetworkRetentionPlan={
        offerbyExistingNetwork:data.offerbyExistingNetwork,
        interestedToTakeNewConnection:data.interestedToTakeNewConnection

      }
      HppyWithCurrentNetworkRetentionPlanJson={
      HappyWithCurrentNetworkRetentionPlan
      }
       ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,HppyWithCurrentNetworkRetentionPlanJson);
    } 
    if(data.reasonForNotInterested=='happyWithExistingNetworkOffer'){
      if("currentPlanAndNetwork" in data){    
      HappyWithExistingNetworkOffer={
        currentNetwork:data.currentPlanAndNetwork.currentNetwork,
        currentPlan:data.bachelorDeposit.currentPlan
      }
      HappyWithExistingNetworkOfferJson={
      HappyWithExistingNetworkOffer
      }      
    } 
     ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,HappyWithExistingNetworkOfferJson);
    }
    if(data.reasonForNotInterested=='previousBadExpInPostpaid'){
      PreviousBadExpInPostpaid={
        IssueFacedWithPostpaid:data.IssueFacedWithPostpaid
      }
      PreviousBadExpInPostpaidJson={
      PreviousBadExpInPostpaid
      }
      ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,PreviousBadExpInPostpaidJson);
    } 
     
    if(data.reasonForNotInterested=='notHappyWithSuggestPlan'){
      SuggestedPlan={
        suggestedPlan:data.suggestedPlan

      }
      SuggestedPlanJson={
      SuggestedPlan
      }
       ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,SuggestedPlanJson);
    }   
    if(data.reasonForNotInterested=='abilityToMakePayment'){
      abilityToMakePayment={
        affordableMonthlyBill:data.affordableMonthlyBill,
        usagePattern:data.usagePattern
      }
      AbilityToMakePaymentJson={
      abilityToMakePayment
      }
      ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,AbilityToMakePaymentJson);
    }  
    if(data.reasonForNotInterested=='companyLinkedConnection'){
        CompanyLinkedConnection={
          authPersonContactNumber:data.authPersonContactNumber
        }
        CompanyLinkedConnectionJson={
        CompanyLinkedConnection
        }

        ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,CompanyLinkedConnectionJson);
      }  

    if(data.reasonForNotInterested=='happyWithPrepaid'){
      HappyWithPrepaid={
        postpaidBenefits:data.postpaidBenefits,
        amountIncludeVoiceAndData:data.amountIncludeVoiceAndData,
        rechargePerMonth:data.rechargePerMonth
      }
      HappyWithPrepaidJson={
      HappyWithPrepaid
      }
      ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,HappyWithPrepaidJson);
    }  
    if(data.reasonForNotInterested=='others'){
      Others={
        others:data.others,
      }
      OthersJson={
      Others
      }
      ProductsDeniedCallbackDetails = $.extend(deniedCallbackDateTime,OthersJson);
    } 
    return ProductsDeniedCallbackDetails;
}
function collectProductUsageData(data){
  var areYouUserOfConnection,typeOfConnecton,typesOfHandset,networkType,spendOnCallUsage,spendOnInternetUsage,useStd,usageOfStd,useIsd,usageOfIsd,totalMonthlyRomingDays;
  if("AreYouUserOfConnection" in data) areYouUserOfConnection = {"UserOfConnection" : data.AreYouUserOfConnection}
  if("TypeOfConnecton" in data) typeOfConnecton = {"ConnectionType" : data.TypeOfConnecton}
  if("typesOfHandset" in data) typesOfHandset = {"HandsetType" : data.typesOfHandset}
  if("NetworkType" in data) networkType = {"NetworkType" : data.NetworkType}
  if("SpendOnCallUsage" in data) spendOnCallUsage = {"SpendingforCall" : data.SpendOnCallUsage}
  if("SpendOnInternetUsage" in data) spendOnInternetUsage = {"SpendingforInternet" : data.SpendOnInternetUsage}
  if("UseStd" in data) useStd = {"UseSTD" : data.UseStd}
  if("UsageOfStd" in data) usageOfStd = {"UsageMinutesofSTD" : data.UsageOfStd}
  if("UseIsd" in data) useIsd = {"Use ISD" : data.UseIsd}
  if("UsageOfIsd" in data) usageOfIsd = {"UsageMinutesofISD" : data.UsageOfIsd}
  if("TotalMonthlyRomingDays" in data) totalMonthlyRomingDays = {"UserofConnection" : data.TotalMonthlyRomingDays}
  return ProductsUsageDetails = $.extend(areYouUserOfConnection,typeOfConnecton,typesOfHandset,networkType,spendOnCallUsage,spendOnInternetUsage,useStd,usageOfStd,useIsd,usageOfIsd,totalMonthlyRomingDays);
}
function collectProductInterestedData(data){
  var occupationType,convertToCUG,proofOfStay,distanceToVodafoneStore,monthlyIncome,stayingType,houseType,previousBillCopyAvailable,usageOfNumberOnCurrentNetwork,companyName;
  if("OccupationType" in data) occupationType = {"OccupationType" : data.OccupationType}
  if("convertToCUG" in data) convertToCUG = {"ConvertToCUG" : data.convertToCUG}
  if("ProofOfStay" in data) proofOfStay = {"StayingOn" : data.ProofOfStay}
  if("distanceToVodafoneStore" in data) distanceToVodafoneStore = {"DistanceToVodafoneStore" : data.distanceToVodafoneStore}
  if("monthlyIncome" in data) monthlyIncome = {"MonthlyIncome" : data.monthlyIncome}
  if("StayingType" in data) stayingType = {"StayingType" : data.StayingType}
  if("houseType" in data) houseType = {"HouseType" : data.houseType}
  if("previousBillCopyAvailable" in data) previousBillCopyAvailable = {"PreviousBillCopyAvailable" : data.previousBillCopyAvailable}
  if("usageOfNumberOnCurrentNetwork" in data) usageOfNumberOnCurrentNetwork = {"UsageOfNumberOnCurrentNetwork" : data.usageOfNumberOnCurrentNetwork}
  if("CompanyName" in data) companyName = {"Company" : data.CompanyName}
  return ProductsInterestedDetails = $.extend(occupationType,convertToCUG,proofOfStay,distanceToVodafoneStore,monthlyIncome,stayingType,houseType,previousBillCopyAvailable,usageOfNumberOnCurrentNetwork,companyName);
}
function collectPermanentAddress(data){
  var doorNo,buildingNumber,buildingName,street,area,city,taluk,district,zone,state,pincode,landmark;
  if("doorNo" in data.PermanentAddress) doorNo = {"DoorNumber" : data.PermanentAddress.doorNo}
  if("buildingNumber" in data.PermanentAddress) buildingNumber = {"BuildingNumber" : data.PermanentAddress.buildingNumber}
  if("buildingName" in data.PermanentAddress) buildingName = {"BuildingName" : data.PermanentAddress.buildingName}
  if("street" in data.PermanentAddress) street = {"Street" : data.PermanentAddress.street}
  if("area" in data.PermanentAddress) area = {"Area" : data.PermanentAddress.area}
  if("city" in data.PermanentAddress) city = {"City" : data.PermanentAddress.city}
  if("taluk" in data.PermanentAddress) taluk = {"Taluk" : data.PermanentAddress.taluk}
  if("district" in data.PermanentAddress) district = {"District" : data.PermanentAddress.district}
  if("state" in data.PermanentAddress) state = {"State" : data.PermanentAddress.state}
  if("pincode" in data.PermanentAddress) pincode = {"Pincode" : data.PermanentAddress.pincode}
  if("landmark" in data.PermanentAddress) landmark = {"Landmark" : data.PermanentAddress.landmark}
  return PermanentAddressJson.PermanentAddress = $.extend(doorNo,buildingNumber,buildingName,street,area,city,taluk,district,zone,state,pincode,landmark);
}
function collectAddressProof(data){
  var drivinglicence,rationcard,passport,bankpassbook,aadhar,voterid;  
  if("drivinglicence" in data.AddressProof) drivinglicence = {"DrivingLicence" : data.AddressProof[0]};//.drivinglicence}
  if("rationcard" in data.AddressProof) rationcard = {"RationCard" : data.PermanentAddress[1]}//.rationcard}
  if("passport" in data.AddressProof) passport = {"Passport" : data.AddressProof.passport}
  if("bankpassbook" in data.AddressProof) bankpassbook = {"BankPassbook" : data.AddressProof.bankpassbook}
  if("aadhar" in data.AddressProof) aadhar = {"Aadhar" : data.AddressProof.aadhar}
  if("voterid" in data.AddressProof) voterid = {"VoterID" : data.AddressProof.voterid}
  return AddressProof = $.extend(drivinglicence,rationcard,passport,bankpassbook,aadhar,voterid);
}
function collectDecideAndCallbackReasons(data){
  if("outOfStation"==data.ifDecideAndCallback){
    availableInTown = {"AvailableInTown" : data.availableInTown}
    callbackDateAndTime = {"CallbackDateAndTime" : data.callbackWhenInTown}
    OutOfStation = $.extend(availableInTown,callbackDateAndTime); 
    return OutOfStatioJson = {OutOfStation};
  }
  if("haveTocheck"==data.ifDecideAndCallback){
    return {"DecideAndCallbackReason" : data.ifDecideAndCallback}   
  }
  if("busy"==data.ifDecideAndCallback){
    return {"DecideAndCallbackReason" : data.ifDecideAndCallback}   
  }
  if("activateAfterCompleteBalance"==data.ifDecideAndCallback){
    return {"DecideAndCallbackReason" : data.ifDecideAndCallback}   
  }
  if("afterDataOfferCompleted"==data.ifDecideAndCallback){
    return {"DecideAndCallbackReason" : data.ifDecideAndCallback}   
  }
  if("afterBCPlanCompleted" ==data.ifDecideAndCallback){
    return {"DecideAndCallbackReason" : data.ifDecideAndCallback}   
  }
  if("noProof"==data.ifDecideAndCallback){
    DecideAndCallbackReason = {"CanArrangeNecessaryProof" : data.canArrangeNecessaryProof} 
    return NoProof={
      DecideAndCallbackReason
    }
  }
  if("haveToArrangeDeposit"==data.ifDecideAndCallback){
    return {"DecideAndCallbackReason" : data.ifDecideAndCallback}   
  }
  if("needtimeToDecide"==data.ifDecideAndCallback){
    return {"DecideAndCallbackReason" : data.ifDecideAndCallback}   
  }
  if("others"==data.ifDecideAndCallback){
    return {"DecideAndCallbackReason" : data.ifDecideAndCallback}   
  }

}

function sendDataToServer(survey) {
var PersonalDetails=[];
var ProductsUsageDetails=[];
var ProductsInterestedDetails=[];
var ProductsNotInterestedDetails=[];
var ProductsDeniedCallbackDetails=[];
var ProductsDecidesCallbackDetails=[];
var ProductsInterestedCallbackDetails=[];
var ProductsNotInterestedCallbackDetails=[];
var AddressProof=[];
var ProductFeedbackJson={Industry:{Company:{Products:{ProductFeedback:[]}}}};
var PermanentAddressJson = PermanentAddress=[];
var ContactAddressJson = ContactAddress=[];

var primaryPhone,secondaryPhone,firstName,lastName;
    if("PrimaryPhone" in survey.data) primaryPhone = {"PrimaryPhone" : survey.data.PrimaryPhone}
    if("customerPersonalDetails" in survey.data){    
    if("customerSecondaryPhone" in survey.data.customerPersonalDetails) secondaryPhone = {"SecondaryPhone" : survey.data.customerPersonalDetails.customerSecondaryPhone}
    if("customerFirstName" in survey.data.customerPersonalDetails) firstName = {"FirstName" : survey.data.customerPersonalDetails.customerFirstName}
    if("customerLastName" in survey.data.customerPersonalDetails) lastName = {"LastName" : survey.data.customerPersonalDetails.customerLastName}
  }
var PersonalDetail = $.extend(primaryPhone,secondaryPhone,firstName,lastName);

if("checkPermission" in survey.data){
  if("permission"==survey.data.checkPermission){
    ProductsUsageDetails = collectProductUsageData(survey.data);
  }
}
if("checkPermission" in survey.data){ 
  if("denied"==survey.data.checkPermission){ 
    if("reasonForNotInterested" in survey.data){ 
      ProductsDeniedCallbackDetails = collectProductNotInterestedDetails(survey.data);
    }
  }
}
if("checkCustomerInterest" in survey.data){
  if("interested"==survey.data.checkCustomerInterest){
    ProductsNotInterestedDetails = collectProductInterestedData(survey.data);
  }
}

var residingLocation,convertToCUG,explainPlan,outOfCityLimitPay,bachelorDeposit,monthlyAffordBill,usagePattern,offerByExitingnetwork,authorisedPersionContact,interestedForNewPostpaid,
    currentPlanInUse,currentlyUsingNetwork,monthlyRechargeAmount,amountInclusiveForVoiceAndData,explainPostpaidBenefits,issuesFaced;
if(survey.data.checkCustomerInterest=='notInterested'){   
  ProductsNotInterestedDetails = collectProductNotInterestedReasons(survey.data);
}

if("checkCustomerInterest" in survey.data){
  if("callback"==survey.data.checkCustomerInterest){
    ProductsDecidesCallbackDetails = collectDecideAndCallbackReasons(survey.data);
  }
}
if("checkEligible" in survey.data){  
  if("eligible"==survey.data.checkEligible){
    PermanentAddressJson.PermanentAddress = collectPermanentAddress(survey.data);
  }
}
if("AddressProof" in survey.data){   
   AddressProof = collectAddressProof(survey.data);
}
var doorNo,buildingNumber,buildingName,street,area,city,taluk,district,zone,state,pincode,landmark;
if("IsPermanentContactAddressSame" in survey.data){
  if("no"==survey.data.IsPermanentContactAddressSame){  
    ContactAddressJson.ContactAddress = collectPermanentAddress(survey.data);
  }
}   

var JobDateTime;
if("meetingDateTime" in survey.data) JobDateTime = {"JobDateTime" : survey.data.meetingDateTime};

var JobDetails ={
  JobTitle:"",
  JobDescription:"",
  JobStatus:"Unassigned",
  JobDateTime,
  Joblocation:street + "," + area
}

ProductFeedbackJson.Industry={"Name":"Tele"};
ProductFeedbackJson.Industry.Company={"Name":"Vodafone"};
ProductFeedbackJson.Industry.Company.Products={"Name":"PreToPost"};

ProductFeedbackJson.Industry.Company.Products.ProductFeedback ={
  ProductsDeniedCallbackDetails,
  ProductsDecidesCallbackDetails,
  ProductsUsageDetails,
  ProductsInterestedDetails,
  ProductsInterestedCallbackDetails,
  ProductsNotInterestedDetails,
  ProductsNotInterestedCallbackDetails  
}
var CustomerProfileJson = $.extend(PersonalDetail,PermanentAddressJson,ContactAddressJson);

createCustomerProfile(JobDetails,CustomerProfileJson,ProductFeedbackJson);

}
function createCustomerProfile(jobDetails,customerProfile,productFeedback){
  $.ajax({
        url: "https://gdp-server-manikandanmuthuv.c9users.io/customer/profile", 
        type: "POST",
        crossDomain: true,
        data: customerProfile,
        dataType: "json",
        success:function(customerProfileResponse){
          var customerModel = JSON.parse(JSON.stringify(customerProfileResponse));
          var CustomerId="CustomerId";
          productFeedback[CustomerId] = customerModel._id;
          jobDetails[CustomerId] = customerModel._id;
          createTask(jobDetails);          
          createProductFeedback(productFeedback);
        },
        error:function(xhr,status,error){
           // alert(status);
        }
    });
  } 
function createProductFeedback(productFeedback){
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
            data:productFeedback,
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