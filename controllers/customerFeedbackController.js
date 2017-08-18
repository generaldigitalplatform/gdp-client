function init() {

    var surveyJSON ={
 "completedHtml": "<p><h4>Thank you for completing customer feedback</h4>",
 "pages": [
  {
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
      "ta": "சார், நான் வோடஃபோனில் இருந்து போன் செய்கிறேன்,நான் உங்களிடம் பேசலாமா?"
     },
     "isRequired": true,
     "choices": [
      {
       "value": "permission",
       "text": {
        "default": "Permission",
        "ta": "அனுமதி வழங்கப்பட்டது"
       }
      },
      {
       "value": "denied",
       "text": {
        "default": "Denied",
        "ta": "அனுமதி வழங்கப்படவில்லை"
       }
      }
     ],
     "colCount": 0
    },
    {
     "type": "text",
     "name": "deniedCallbackDateTime",
     "visible": false,
     "visibleIf": "{checkPermission}='denied''",
     "width": "10",
     "title": {
      "default": "May I know call back date and time?",
      "ta": "சார், நான் உங்களுக்கு எப்போ திரும்ப கூப்பிடலாங்க?"
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
     "name": "NotInterestedReasons",
     "elements": [
      {
       "type": "radiogroup",
       "name": "reasonForNotInterested",
       "visible": false,
       "visibleIf": "{exit}='yes' and {checkPermission}='denied'",
       "title": "May I know the reason why you are not interested?",
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
         "text": {"default":"Not happy with the suggested plan","ta":"பரிந்துரைக்கப்பட்ட திட்டத்துடன் மகிழ்ச்சியாக இல்லை"}
        },
        {
         "value": "notReadyToPayDeposit",
         "text": {"default":"Not ready to pay the Deposit","ta":"டெபாசிட் பணம் செலுத்தத் தயாராக இல்லை"}
        },
        {
         "value": "abilityToMakePayment",
         "text": {"default":"Ability to make payment","ta":"கட்டணம் செலுத்துவதற்கான திறன் இல்லை"}
        },
        {
         "value": "happyWithCurrentNetworkRetentionPlan",
         "text": {"default":"Happy with the current network's retention plan","ta":"தற்போதைய நெட்வொர்க்கின் வைத்திருத்தல் திட்டத்துடன் மகிழ்ச்சியாக உள்ளார்"}
        },
        {
         "value": "companyLinkedConnection",
         "text": {"default":"Company linked connections","ta":"நிறுவனத்துடன் இணைக்கப்பட்ட இணைப்புகள்"}
        },
        {
         "value": "happyWithExistingNetworkOffer",
         "text": {"default":"Happy with the existing network's offer","ta":"நடப்பு நெட்வொர்க்கின் வாயிலாக மகிழ்ச்சியாக உள்ளார்"}
        },
        {
         "value": "happyWithPrepaid",
         "text": {"default":"Happy with prepaid","ta":"ப்ரீபெய்ட் உடன் சந்தோஷமாக உள்ளார்"}
        },
        {
         "value": "previousBadExpInPostpaid",
         "text": {"default":"Previous bad experience in Postpaid","ta":"Postpaid முந்தைய மோசமான அனுபவம்"}
        },
        {
         "value": "others",
         "text": {"default":"Others","ta":"மற்றவை"}
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
       "name": "suggestedPlan",
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
       "name": "affordableMonthlyBill",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='abilityToMakePayment'",
       "width": "10",
       "title": "May I know your affordability for your monthly bill?"
      },
      {
       "type": "text",
       "name": "usagePattern",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='abilityToMakePayment'",
       "width": "10",
       "title": "May I know your usage pattern - Voice, SMS & Data?, suggest the plan based on the usage"
      },
      {
       "type": "text",
       "name": "offerbyExistingNetwork",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithCurrentNetworkRetentionPlan'",
       "width": "10",
       "title": "What was the offer provided by existing network?"
      },
      {
       "type": "text",
       "name": "authPersonContactNumber",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='companyLinkedConnection'",
       "width": "10",
       "title": "Can I have your authorised Person's contact number to discuss about the Vodafone postpaid offers"
      },
      {
       "type": "text",
       "name": "interestedToTakeNewConnection",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithCurrentNetworkRetentionPlan'",
       "width": "10",
       "title": "Are you interested to take new postpaid connnection for your personal purpose?"
      },
      {
       "type": "multipletext",
       "name": "currentPlanAndNetwork",
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
       "name": "rechargePerMonth",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithPrepaid'",
       "width": "10",
       "title": "How much you are spending per month for your recharge"
      },
      {
       "type": "radiogroup",
       "name": "amountIncludeVoiceAndData",
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
       "name": "postpaidBenefits",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithPrepaid'",
       "width": "10",
       "title": "If you have taken the postpaid connection you need not worry about the frequent recharge (need to explain the benefits of postpaid based on the profile/profession)"
      },
      {
       "type": "text",
       "name": "IssueFacedWithPostpaid",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='previousBadExpInPostpaid'",
       "width": "10",
       "title": "May I know what was the issue you have faced?"
      },
      {
       "type": "text",
       "name": "others",
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
   "name": "Greetings",
   "navigationButtonsVisibility": "show",
   "title": "Greetings!!!"
  },
  {
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
     "itemSize": 20
    },
    {
     "type": "radiogroup",
     "name": "AreYouUserOfConnection",
     "width": "10",
     "title": {
      "default": "Are you the user of the connection?",
      "ta": "சார்/மேடம், நீங்க தான் இந்த கொன்னேக்ஷன் யூஸ் பண்ணிட்டு இருக்கீங்களா ?"
     },
     "choices": [
      {
       "value": "yes",
       "text": {
        "default": "Yes",
        "ta": "ஆம்"
       }
      },
      {
       "value": "no",
       "text": {
        "default": "No",
        "ta": "இல்லை"
       }
      }
     ],
     "colCount": 0
    },
    {
     "type": "radiogroup",
     "name": "TypeOfConnecton",
     "width": "10",
     "title": {
      "default": "Are you using a prepaid number or postpaid?",
      "ta": "சார்/மேடம், நீங்க ப்ரீபெய்ட் யூஸ் பண்ணிட்டு இருக்கீங்களா இல்லே போஸ்ட்பாய்ட் யூஸ் பண்ணிட்டு இருக்கீங்களா ?"
     },
     "choices": [
      {
       "value": "prepaid",
       "text": {
        "default": "Pre Paid",
        "ta": "ப்ரீபெய்ட்"
       }
      },
      {
       "value": "postpaid",
       "text": {
        "default": "Post Paid",
        "ta": "போஸ்ட்பாய்ட்"
       }
      }
     ],
     "colCount": 0
    },
    {
     "type": "radiogroup",
     "name": "typesOfHandset",
     "width": "10",
     "title": {
      "default": "Are you using a 3G Handset or a 4G handset?",
      "ta": "சார்/மேடம், நீங்க 3G போன் யூஸ் பண்றீங்களா இல்லே 4G போன் யூஸ் பண்றீங்களா ?"
     },
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
     "title": {
      "default": "May I know which network you are using?",
      "ta": "சார்/மேடம், நீங்க எந்த நெட்ஒர்க் யூஸ் பண்ணிட்டு இருக்கீங்கன்னு தெரிஞ்சிக்கலங்களா?"
     },
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
      },
      {
       "value": "reliance",
       "text": "Reliance"
      },
      {
       "value": "tatadocomo",
       "text": "Tata Docomo"
      }
     ],
     "colCount": 0
    },
    {
     "type": "text",
     "name": "SpendOnCallUsage",
     "width": "10",
     "title": {
      "default": "How much do you spend for your mobile phone usage in a month?",
      "ta": "சார்/மேடம், நீங்க ஒரு மாசத்துக்கு போனுக்கு எவ்ளோ செலவு பண்ணுவீங்கன்னு தெரிஞ்சிக்கலங்களா?"
     }
    },
    {
     "type": "text",
     "name": "SpendOnInternetUsage",
     "width": "10",
     "title": {
      "default": "May I know How much Internet do you use?",
      "ta": "சார்/மேடம், நீங்க ஒரு மாசத்துக்கு இன்டர்நெட் பண்ணுவீங்கன்னு தெரிஞ்சிக்கலங்களா?"
     }
    },
    {
     "type": "radiogroup",
     "name": "UseStd",
     "width": "10",
     "title": {
      "default": "Do you use STD?",
      "ta": "சார்/மேடம், நீங்க STD யூஸ் பண்ணுவீங்களா ?"
     },
     "choices": [
      {
       "value": "yes",
       "text": {
        "default": "YES",
        "ta": "ஆம்"
       }
      },
      {
       "value": "no",
       "text": {
        "default": "NO",
        "ta": "இல்லை"
       }
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
     "title": {
      "default": "Approximately, How many minutes do you use?",
      "ta": "எவ்ளோ நிமிஷம் யூஸ் பண்ணுவீங்க ?"
     }
    },
    {
     "type": "radiogroup",
     "name": "UseIsd",
     "width": "10",
     "title": {
      "default": "Do you use ISD?",
      "ta": "சார்/மேடம், நீங்க ISD யூஸ் பண்ணுவீங்களா ?"
     },
     "choices": [
      {
       "value": "yes",
       "text": {
        "default": "YES",
        "ta": "ஆம்"
       }
      },
      {
       "value": "no",
       "text": {
        "default": "NO",
        "ta": "இல்லை"
       }
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
     "title": {
      "default": "Approximately, How many minutes do you use?",
      "ta": "எவ்ளோ நிமிஷம் யூஸ் பண்ணுவீங்க ?"
     }
    },
    {
     "type": "text",
     "name": "TotalMonthlyRomingDays",
     "visible": false,
     "visibleIf": "{useIsd}='yes'",
     "width": "10",
     "startWithNewLine": false,
     "title": {
      "default": "How many days in a month you will be in Roaming?",
      "ta": "சார்/மேடம், நீங்க ஒரு மாசத்துல எவ்ளோ நாள் சார் ரோமிங் லே இருப்பீங்க ?"
     }
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
   "name": "Basics",
   "navigationButtonsVisibility": "show"
  },
  {
   "elements": [
    {
     "type": "html",
     "name": "customerBasicData",
     "html": "<h3>Explain Customer about Product Best Fit based on customer Basic Data</h3>\n"
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
   "innerIndent": 3,
   "name": "ProductPitch",
   "navigationButtonsVisibility": "show",
   "title": "Product Best Fit Plan Pitch"
  },
  {
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
   "name": "EvaluateCustomer",
   "visible": false,
   "visibleIf": "{checkCustomerInterest}='interested'"
  },
  {
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
     "itemSize": 30,
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
     "visibleIf": "{IsPermanentContactAddressSame}='no'",
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
     "itemSize": 30,
     "colCount": 2
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
   "name": "EligibleCustomer",
   "title": "Eligible Customer",
   "visible": false,
   "visibleIf": "{checkEligible}='eligible'"
  },
  {
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
       "name": "reasonForNotInterested",
       "title": {"default":"May I know the reason why you are not interested?","ta":"சார்/மேடம், நீங்க எதனாலே வேண்டான்னு சொல்றீங்கனு தெரிஞ்சிக்கலங்களா ?"},
       "choices": [
        {
         "value": "happyWithOtherNetwork",
         "text": {"default":"Happy with other network Coverage","ta":"பிற நெட்வொர்க் கவரேஜ் மூலம் மகிழ்ச்சி"}
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
       "name": "notHappyWithSuggestPlan",
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
       "name": "others",
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
       "name": "offerbyExistingNetwork",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithCurrentNetworkRetentionPlan'",
       "width": "10",
       "title": "What was the offer provided by existing network?"
      },
      {
       "type": "text",
       "name": "authPersonContactNumber",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='companyLinkedConnection'",
       "width": "10",
       "title": "Can I have your authorised Person's contact number to discuss about the Vodafone postpaid offers"
      },
      {
       "type": "text",
       "name": "interestedToTakeNewConnection",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithCurrentNetworkRetentionPlan'",
       "width": "10",
       "title": "Are you interested to take new postpaid connnection for your personal purpose?"
      },
      {
       "type": "multipletext",
       "name": "currentPlanAndNetwork",
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
       "name": "rechargePerMonth",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithPrepaid'",
       "width": "10",
       "title": "How much you are spening per month for your recharge"
      },
      {
       "type": "radiogroup",
       "name": "amountIncludeVoiceAndData",
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
       "name": "suggestedPlan",
       "visible": false,
       "visibleIf": "{reasonForNotInterested}='happyWithPrepaid'",
       "width": "10",
       "title": "If you have taken the postpaid connection you need not worry about the frequent recharge (need to explain the benefits of postpaid based on the profile/profession)"
      },
      {
       "type": "text",
       "name": "IssueFacedWithPostpaid",
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
   "name": "NotInterested",
   "visible": false,
   "visibleIf": "{checkCustomerInterest}='notInterested'"
  },
  {
   "elements": [
    {
     "type": "text",
     "name": "meetingDateTime",
     "width": "10",
     "title": "May I know the Date and time when our executive can meet you?",
     "inputType": "datetime-local"
    },
    {
     "type": "panel",
     "name": "jobDetails",
     "elements": [
      {
       "type": "dropdown",
       "name": "JobTitle",
       "width": "25",
       "title": "Job Title",
       "choices": [
        "NewConnection",
        "CUG",
        "PreToPost"
       ]
      },
      {
       "type": "text",
       "name": "JobDescription",
       "width": "10",
       "title": "Job Description",
       "size": 55
      }
     ],
     "title": "JobDetails"
    }
   ],
   "name": "ScheduleMeeting"
  }
 ],
 "showProgressBar": "top",
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
  return PermanentAddress = $.extend(doorNo,buildingNumber,buildingName,street,area,city,taluk,district,zone,state,pincode,landmark);
}
function collectContactAddress(data){
  var doorNo,buildingNumber,buildingName,street,area,city,taluk,district,zone,state,pincode,landmark;
  if("doorNo" in data.ContactAddress) doorNo = {"DoorNumber" : data.ContactAddress.doorNo}
  if("buildingNumber" in data.ContactAddress) buildingNumber = {"BuildingNumber" : data.ContactAddress.buildingNumber}
  if("buildingName" in data.ContactAddress) buildingName = {"BuildingName" : data.ContactAddress.buildingName}
  if("street" in data.ContactAddress) street = {"Street" : data.ContactAddress.street}
  if("area" in data.ContactAddress) area = {"Area" : data.ContactAddress.area}
  if("city" in data.ContactAddress) city = {"City" : data.ContactAddress.city}
  if("taluk" in data.ContactAddress) taluk = {"Taluk" : data.ContactAddress.taluk}
  if("district" in data.ContactAddress) district = {"District" : data.ContactAddress.district}
  if("state" in data.ContactAddress) state = {"State" : data.ContactAddress.state}
  if("pincode" in data.ContactAddress) pincode = {"Pincode" : data.ContactAddress.pincode}
  if("landmark" in data.ContactAddress) landmark = {"Landmark" : data.ContactAddress.landmark}
  return ContactAddress = $.extend(doorNo,buildingNumber,buildingName,street,area,city,taluk,district,zone,state,pincode,landmark);
}
function collectAddressProof(data){
  var drivinglicence,rationcard,passport,bankpassbook,aadhar,voterid; 
  for(var key in data.AddressProof){
    var value = data.AddressProof[key];
    if(value == "drivinglicence"){
      drivinglicence = {"DrivingLicence": value}
    }
    if(value == "rationcard"){
      rationcard = {"RationCard": value}
    }
    if(value == "passport"){
      passport = {"Passport": value}
    }
    if(value == "bankpassbook"){
      bankpassbook = {"BankPassbook": value}
    }
    if(value == "aadhar"){
      aadhar = {"AadharId": value}
    }
    if(value == "voterid"){
      voterid = {"VoterId": value}
    }    
  }  
  // if("0" in data.AddressProof) drivinglicence = {"DrivingLicence" : data.AddressProof[0]} //drivinglicence
  // if("1" in data.AddressProof) rationcard = {"RationCard" : data.AddressProof[1]}//.rationcard}
  // if("2" in data.AddressProof) passport = {"Passport" : data.AddressProof[2]} //passport
  // if("3" in data.AddressProof) bankpassbook = {"BankPassbook" : data.AddressProof[3]} //bankpassbook
  // if("4" in data.AddressProof) aadhar = {"Aadhar" : data.AddressProof[4]} //aadhar
  // if("5" in data.AddressProof) voterid = {"VoterID" : data.AddressProof[5]} //voterid
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
var jobId,jobDateTime,jobTitle,jobDescription,jobStatus,JobDetails,jobCreatedTime,jobLocation,JobDetailsJson;
function getJobDetails(data){
  var currentdate = new Date(); 
  var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

  var JobIdGen = TaskIdGenerator(); 
  jobId = {"JobId" : JobIdGen}
    jobDateTime = {"JobDateTime" : data.meetingDateTime}
    jobTitle = {"JobTitle" : data.JobTitle}
    jobDescription = {"JobDescription" : data.JobDescription}
    jobStatus = {JobStatus:"Unassigned"}
    jobLocation = {Joblocation:data.PermanentAddress.street + "," + data.PermanentAddress.area}
    jobCreatedTime = {JobCreatedTime:datetime}
    JobDetails = $.extend(jobId,jobDateTime,jobTitle,jobDescription,jobStatus,jobLocation,jobCreatedTime); 
    return JobDetailsJson = {JobDetails};  
}
function sendDataToServer(survey) {
var PersonalDetailsJson=PersonalDetails=[];
var ProductsUsageDetails=[];
var ProductsInterestedDetails=[];
var ProductsNotInterestedDetails=[];
var ProductsDeniedCallbackDetails=[];
var ProductsDecidesCallbackDetails=[];
var ProductsInterestedCallbackDetails=[];
var ProductsNotInterestedCallbackDetails=[];
var AddressProofJson=AddressProof=[];
var ProductFeedbackJson={Feedback:{Industry:{Company:{Product:{ProductFeedback:[]}}}}};
var PermanentAddressJson = PermanentAddress=[];
var ContactAddressJson = ContactAddress=[];
var JobDetailsjson = JobDetails=[];
var CustomerProfileJson = CustomerProfile=[];

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
    ProductsInterestedDetails = collectProductInterestedData(survey.data);
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
   AddressProofJson.AddressProof = collectAddressProof(survey.data);
}
var doorNo,buildingNumber,buildingName,street,area,city,taluk,district,zone,state,pincode,landmark;
if("IsPermanentContactAddressSame" in survey.data){
  if("no"==survey.data.IsPermanentContactAddressSame){  
    ContactAddressJson.ContactAddress = collectContactAddress(survey.data);
  }
}   

if("meetingDateTime" in survey.data)
{ 
  if(survey.data.meetingDateTime !== 'null'){
  JobDetailsjson.JobDetails = getJobDetails(survey.data);
  }
}
  //JobDateTime = {"JobDateTime" : survey.data.meetingDateTime};
  //if(JobDateTime[JobDateTime] !== 'null'){
//   if(survey.data.meetingDateTime !== 'null'){
//   var JobId = TaskIdGenerator();
//   // JobDetailsjson={
//   //   "JobId":JobId
//   // }
//   JobDetailsjson.JobDetails={
//     "JobId":JobId,
//     JobTitle:"",
//     JobDescription:"",
//     JobStatus:"Unassigned",
//     "JobDateTime" : survey.data.meetingDateTime,
//     Joblocation:street + "," + area
//   }
// }
// }


ProductFeedbackJson.Feedback.Industry={"Name":"Tele"};
ProductFeedbackJson.Feedback.Industry.Company={"Name":"Vodafone"};
ProductFeedbackJson.Feedback.Industry.Company.Product={"Name":"PreToPost"};

ProductFeedbackJson.Feedback.Industry.Company.Product.ProductFeedback ={
  ProductsDeniedCallbackDetails,
  ProductsDecidesCallbackDetails,
  ProductsUsageDetails,
  ProductsInterestedDetails,
  ProductsInterestedCallbackDetails,
  ProductsNotInterestedDetails,
  ProductsNotInterestedCallbackDetails  
}

var CustomerProfile = $.extend(PersonalDetail,PermanentAddressJson,ContactAddressJson,AddressProofJson);
CustomerProfileJson= {
 CustomerProfile
}

var surveyProfile = $.extend(CustomerProfileJson,JobDetailsjson,ProductFeedbackJson);

$.ajax({
  url:"http://localhost:3001/savesurvey",
  type: "POST",
    crossDomain: true,
    data: surveyProfile,
    dataType: "json",
    success:function(){
       $.ajax({
              url:"http://localhost:3001/telesales",
              type: "POST",
                crossDomain: true,
                data: surveyProfile,
                dataType: "json",
                success:function(){
                  
                },
                error:function(){}
            });      
    },
    error:function(){

    }
});
}
function createCustomerProfile(jobDetails,customerProfile,productFeedback){
  $.ajax({
        url: "https://gdp-test-server.herokuapp.com/customer/profile", 
        type: "POST",
        crossDomain: true,
        data: customerProfile,
        dataType: "json",
        success:function(customerProfileResponse){
          var customerModel = JSON.parse(JSON.stringify(customerProfileResponse));
          var CustomerId="CustomerId";
          productFeedback[CustomerId] = customerModel._id;
          if(jobDetails.length !== 0){
          jobDetails[CustomerId] = customerModel._id;
          createTask(jobDetails); 
         }
          createProductFeedback(productFeedback);
        },
        error:function(xhr,status,error){
            //alert(status);
        }
    });
  } 
function createProductFeedback(productFeedback){
    $.ajax({
            url: "https://gdp-test-server.herokuapp.com/api/customer/feedback", 
            type: "POST",
            crossDomain: true,
            data:productFeedback,
            dataType: "json",
            success:function(result){
                //alert(JSON.stringify(result));
            },
            error:function(xhr,status,error){
               //alert(status);
            }
        });
}
function createTask(taskDetails){
    $.ajax({
            url: "https://gdp-test-server.herokuapp.com/api/employee/job", 
            type: "POST",
            crossDomain: true,
            data:taskDetails,
            dataType: "json",
            success:function(result){
                //alert(JSON.stringify(result));
            },
            error:function(xhr,status,error){
               // alert(status);
            }
        });
}

function TaskIdGenerator() {
     
    this.length = 6;
    this.timestamp = +new Date;

    var getRandomInt = function( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
    }

    var ts = this.timestamp.toString();
    var parts = ts.split( "" ).reverse();
    var id = "";

    for( var i = 0; i < this.length; ++i ) {
    var index = getRandomInt( 0, parts.length - 1 );
    id += parts[index];  
    }     
    return id;       
         
}

//$(document).ready(function(){
                // this approach is interesting if you need to dynamically create data in Javascript 
              // this approach is interesting if you need to dynamically create data in Javascript 
  //       var jsonData = {
  //       var metadata = [];
  //       metadata.push({ name: "name", label: "NAME", datatype: "string", editable: true});
  //       metadata.push({ name: "firstname", label:"FIRSTNAME", datatype: "string", editable: true});
  //       metadata.push({ name: "age", label: "AGE", datatype: "integer", editable: true});
  //       metadata.push({ name: "height", label: "HEIGHT", datatype: "double(m,2)", editable: true});
  //       metadata.push({ name: "country", label: "COUNTRY", datatype: "string", editable: true});
  //       metadata.push({ name: "email", label: "EMAIL", datatype: "email", editable: true});
  //       metadata.push({ name: "freelance", label: "FREELANCE", datatype: "boolean", editable: true});
  //       metadata.push({ name: "lastvisit", label: "LAST VISIT", datatype: "date", editable: true});

  //       // a small example of how you can manipulate the object in javascript
  //       // metadata[4].values = {};
  //       // metadata[4].values["Europe"] = {"be":"Belgium","fr":"France","uk":"Great-Britain","nl":"Nederland"};
  //       // metadata[4].values["America"] = {"br":"Brazil","ca":"Canada","us":"USA"};
  //       // metadata[4].values["Africa"] = {"ng":"Nigeria","za":"South-Africa","zw":"Zimbabwe"};

  //       var data = [];
  //       data.push({id: 1, values: {"country":"uk","age":33,"name":"Duke","firstname":"Patience","height":1.842,"email":"patience.duke@gmail.com","lastvisit":"11\/12\/2002"}});
  //       data.push({id: 2, values: ["Rogers","Denise",59,1.627,"us","rogers.d@gmail.com","","07\/05\/2003"]});
  //       data.push({id: 3, values: {"name":"Dujardin","firstname":"Antoine","age":21,"height":1.73,"country":"fr","email":"felix.compton@yahoo.fr","freelance":true,"lastvisit":"21\/02\/1999"}});
  //       data.push({id: 4, values: {"name":"Conway","firstname":"Coby","age":47,"height":1.96,"country":"za","email":"coby@conwayinc.com","freelance":true,"lastvisit":"01\/12\/2007"}});
  //       data.push({id: 5, values: {"name":"Shannon","firstname":"Rana","age":24,"height":1.56,"country":"nl","email":"ranna.shannon@hotmail.com","freelance":false,"lastvisit":"07\/10\/2009"}});
  //       data.push({id: 6, values: {"name":"Benton","firstname":"Jasmine","age":61,"height":1.71,"country":"ca","email":"jasmine.benton@yahoo.com","freelance":false,"lastvisit":"13\/01\/2009"}});
  //       data.push({id: 7, values: {"name":"Belletoise","firstname":"André","age":31,"height":1.84,"country":"be","email":"belletoise@kiloutou.be","freelance":true,"lastvisit":""}});
  //       data.push({id: 8, values: {"name":"Santa-Maria","firstname":"Martin","age":37,"height":1.80,"country":"br","email":"martin.sm@gmail.com","freelance":false,"lastvisit":"12\/06\/1995"}});
  //       data.push({id: 9, values: {"name":"Dieumerci","firstname":"Amédé","age":37,"height":1.81,"country":"ng","email":"dieumerci@gmail.com","freelance":true,"lastvisit":"05\/07\/2009"}});
  //       data.push({id: 10,values: {"name":"Morin","firstname":"Wanthus","age":46,"height":1.77,"country":"zw","email":"morin.x@yahoo.jsdata.com","freelance":false,"lastvisit":"04\/03\/2004"}});
             

  //     }
        
  //       editableGrid = new EditableGrid("DemoGridJsData");
  //       editableGrid.load({"metadata": jsonData.metadata, "data": jsonData.data});
  //       editableGrid.renderGrid("tablecontent", "testgrid");
    
  // }); 

 // $(".form_datetime").datetimepicker({
 //        format: "dd MM yyyy - HH:ii P",
 //        showMeridian: true,
 //        autoclose: true,
 //        todayBtn: true
 //    });

//  $(".btn[data-target='#myModal']").click(function() {
//   var JobId;
//        var columnHeadings = $("thead th").map(function() {
//                  return $(this).text();
//               }).get();
//        columnHeadings.pop();
//        var columnValues = $(this).parent().siblings().map(function() {
//                  return $(this).text();
//        }).get();
//   var modalBody = $('<div id="modalContent"></div>');
//   var modalForm = $('<form role="form" name="modalForm" action="https://gdp-test-server.herokuapp.com/api/employee/job/'+JobId+'" method="put"></form>');
//   $.each(columnHeadings, function(i, columnHeader) {
//       // if(columnHeader == 'JobId')
//       // {
//       //   columnValues[i]
//       // }
//       if(columnHeader == 'JobID'){
//         JobId = Number(columnValues[i]);
//       }
//        var formGroup = $('<div class="form-group"></div>');
//        formGroup.append('<label class="control-label col-sm-6 required" for="'+columnHeader+'">'+columnHeader+'</label>');
//        var col = $('<div class="col-sm-6"></div>');
//        col.append('<input class="form-control" name="'+columnHeader+'" id="'+columnHeader+'" value="'+columnValues[i]+'" />'); 
//        formGroup.append(col);
//        modalForm.append(formGroup);
//   });
//   modalBody.append(modalForm);
//   $('.modal-body').html(modalBody);
// });
// $('.modal-footer .btn-primary').click(function() {
//    $('form[name="modalForm"]').submit();
// });

// }); 

 $(".form_datetime").datetimepicker({
        format: "dd MM yyyy HH:ii P",
        showMeridian: true,
        autoclose: true,
        todayBtn: true
    });

$(function() {
    $('.picker').datetimepicker({ format:'Y-m-d H:i' });
});

$(document).ready(function(){
  $('#jobmanagement').Tabledit({
      url: 'https://gdp-test-server.herokuapp.com/api/employee/job/edit/',
      columns: {
          identifier: [0, 'JobID'],
          editable: [[1, 'JobDescription'], [2, 'JobLocation'], [3, 'JobTime'],[4, 'JobStatus']]
      },
      onDraw: function() {
      //Select all inputs of second column and apply datepicker each of them
      // $('table tr td:nth-child(4) input').each(function() {
      //   $(this).datepicker({
      //     format: 'dd-mm-yyyy',
      //     todayHighlight: true
      //   });
      // });
       
      },
      onSuccess: function(data, textStatus, jqXHR) {
          console.log('onSuccess(data, textStatus, jqXHR)');
          console.log(data);
          console.log(textStatus);
          console.log(jqXHR);
      },
      onFail: function(jqXHR, textStatus, errorThrown) {
          console.log('onFail(jqXHR, textStatus, errorThrown)');
          console.log(jqXHR);
          console.log(textStatus);
          console.log(errorThrown);
      },
      onAlways: function() {
          console.log('onAlways()');
      },
      onAjax: function(action, serialize) {
          console.log('onAjax(action, serialize)');
          console.log(action);
          console.log(serialize);
      }
  });
});


// $("#addrows").click(function () { 

//     $("#jobmanagement").each(function () {
       
//         var tds = '<tr>';
//         jQuery.each($('tr:last td', this), function () {
//             tds += '<td>' + $(this).html() + '</td>';
//         });
//         tds += '</tr>';
//         if ($('tbody', this).length > 0) {
//             $('tbody', this).append(tds);
//         } else {
//             $(this).append(tds);
//         }
//     });
// });

// $(".form_datetime").datetimepicker({
//         format: "dd MM yyyy - HH:ii P",
//         showMeridian: true,
//         autoclose: true,
//         todayBtn: true
//     });

// $('table').Tabledit({
//   url: 'example.php',
//   columns: {
//     identifier: [0, 'id'],
//     editable: [[1, 'date'], [2, 'name']]
//   },
//   onSuccess: function(data) {
//     // Example of response from PHP script:
//     // json_encode(array('type' => 'error', 'message' => 'Example.')); 
//     if (data.type && data.message) {
//       $('.alert-container').Alertiny(data.type, data.message);
//     }
//   },
//   onDraw: function() {
//     // Select all inputs of second column and apply datepicker each of them
//     $('table tr td:nth-child(2) input').each(function() {
//       $(this).datepicker({
//         format: 'yyyy-mm-dd',
//         todayHighlight: true
//       });
//     });
//   }
// });

// high charts
// Highcharts.chart('container', {
//     chart: {
//         plotBackgroundColor: null,
//         plotBorderWidth: null,
//         plotShadow: false,
//         type: 'pie'
//     },
//     title: {
//         text: 'Browser market shares January, 2015 to May, 2015'
//     },
//     tooltip: {
//         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//     },
//     plotOptions: {
//         pie: {
//             allowPointSelect: true,
//             cursor: 'pointer',
//             dataLabels: {
//                 enabled: true,
//                 format: '<b>{point.name}</b>: {point.percentage:.1f} %',
//                 style: {
//                     color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
//                 }
//             }
//         }
//     },
//     series: [{
//         name: 'Brands',
//         colorByPoint: true,
//         data: [{
//             name: 'Microsoft Internet Explorer',
//             y: 56.33
//         }, {
//             name: 'Chrome',
//             y: 24.03,
//             sliced: true,
//             selected: true
//         }, {
//             name: 'Firefox',
//             y: 10.38
//         }, {
//             name: 'Safari',
//             y: 4.77
//         }, {
//             name: 'Opera',
//             y: 0.91
//         }, {
//             name: 'Proprietary or Undetectable',
//             y: 0.2
//         }]
//     }]
// });