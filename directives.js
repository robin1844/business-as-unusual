"use strict";

var DIRECTIVES = [
  {
    "id": "directive-001",
    "number": 1,
    "heading": "EXECUTIVE JUDGEMENT",
    "text": "Whenever someone presses a lift button - any button - say, “Excellent choice.”"
  },
  {
    "id": "directive-002",
    "number": 2,
    "heading": "PREMIUM MOBILITY",
    "text": "When you are waiting for a lift with a colleague and it arrives, gesture grandly towards it and say, “Your transport awaits.”"
  },
  {
    "id": "directive-003",
    "number": 3,
    "heading": "POINT OF NO RETURN",
    "text": "When you are sharing a lift with other people, wait until the doors begin to close, then quietly say, “And so it begins.”"
  },
  {
    "id": "directive-004",
    "number": 4,
    "heading": "CONFIDENT MISDIRECTION",
    "text": "When riding in a lift with other people, say, “This is us,” whenever it reaches a floor - and then make no move to get out."
  },
  {
    "id": "directive-005",
    "number": 5,
    "heading": "FIELD DEPLOYMENT",
    "text": "As someone gets out of a lift, say, “Good luck out there.”"
  },
  {
    "id": "directive-006",
    "number": 6,
    "heading": "STAKEHOLDER ENGAGEMENT",
    "text": "When leaving a lift after an entirely silent journey with other passengers, say, “We should do this again.”"
  },
  {
    "id": "directive-007",
    "number": 7,
    "heading": "INSTITUTIONAL CONFIDENCE",
    "text": "When someone holds the lift for you, say, “You’ve restored my faith in humanity.”"
  },
  {
    "id": "directive-008",
    "number": 8,
    "heading": "HEADCOUNT VARIANCE",
    "text": "When you are waiting with a colleague and an empty lift arrives, inspect it and say, “Perfect - it'll just be the two of us” and rub your hands together."
  },
  {
    "id": "directive-009",
    "number": 9,
    "heading": "LAUNCH EXCELLENCE",
    "text": "As a lift begins moving, turn to the other passengers, nod approvingly and say, “Textbook departure.”"
  },
  {
    "id": "directive-012",
    "number": 10,
    "heading": "STRATEGIC ALIGNMENT",
    "text": "When someone selects the same floor as you, say, “Great minds…”"
  },
  {
    "id": "directive-013",
    "number": 11,
    "heading": "PREDICTIVE INFRASTRUCTURE",
    "text": "When approaching automatic doors with a colleague, wait for them to open and quietly say, “It knows.”"
  },
  {
    "id": "directive-014",
    "number": 12,
    "heading": "LONG-TERM GRATITUDE",
    "text": "When someone holds a door for you, turn to them and earnestly say, “I won’t forget this.”"
  },
  {
    "id": "directive-016",
    "number": 13,
    "heading": "CREDENTIAL CONFIDENCE",
    "text": "When someone uses their pass to let you through a secure door, say, “At last! I've gained entry!”"
  },
  {
    "id": "directive-017",
    "number": 14,
    "heading": "ORGANISATIONAL DIVERGENCE",
    "text": "When you and a colleague separate at a corridor junction, say, “We part ways here.”"
  },
  {
    "id": "directive-018",
    "number": 15,
    "heading": "COORDINATED MOVEMENT",
    "text": "When someone is walking in the same direction as you, say, “Good. Strength in numbers.”"
  },
  {
    "id": "directive-019",
    "number": 16,
    "heading": "ADVANCE PARTY",
    "text": "When overtaking someone in a corridor, say, “I’ll scout ahead - you bring up the rear.”"
  },
  {
    "id": "directive-020",
    "number": 17,
    "heading": "CAPACITY COLLISION",
    "text": "When two people nearly collide in a doorway, say, “Classic architectural bottleneck situation.”"
  },
  {
    "id": "directive-021",
    "number": 18,
    "heading": "INFLUENCE NETWORK",
    "text": "Whenever someone asks you to do a trivial task, look a tiny bit sceptical and say, “I should be able to pull some strings.”"
  },
  {
    "id": "directive-022",
    "number": 19,
    "heading": "EXECUTIVE OWNERSHIP",
    "text": "When asked to move something a few inches, say, “Leave it with me.”"
  },
  {
    "id": "directive-024",
    "number": 20,
    "heading": "DELIVERY EXCELLENCE",
    "text": "When a colleague asks you to click on something, crack your knuckles and say, “Let me work my magic.”"
  },
  {
    "id": "directive-025",
    "number": 21,
    "heading": "FEASIBILITY REVIEW",
    "text": "When asked to close a window, say, “I’ll see what I can do.”"
  },
  {
    "id": "directive-026",
    "number": 22,
    "heading": "SENIOR CONTACTS",
    "text": "When a colleague asks you if they should switch on a light, say, “Have you got clearance?”"
  },
  {
    "id": "directive-027",
    "number": 23,
    "heading": "SERVICE COMMITMENT",
    "text": "When asked to pass someone a pen, say, “OK - but that was given to me by my grandmother.”"
  },
  {
    "id": "directive-028",
    "number": 24,
    "heading": "UPWARD MOBILITY",
    "text": "When asked to put something on a shelf, say, “I’ll take it upstairs.”"
  },
  {
    "id": "directive-029",
    "number": 25,
    "heading": "MODERN CAPABILITY",
    "text": "When using a stapler in front of a colleague, say, “We have the technology.”"
  },
  {
    "id": "directive-030",
    "number": 26,
    "heading": "CRISIS EXPERIENCE",
    "text": "When colleagues are waiting for a jammed printer, step forward and say, “Stand aside. I’ve dealt with this kind of situation before.”"
  },
  {
    "id": "directive-032",
    "number": 27,
    "heading": "DELIVERY ESTIMATE",
    "text": "When someone asks you to rename a file, say, “OK, but I’m going to need a few minutes.”"
  },
  {
    "id": "directive-033",
    "number": 28,
    "heading": "RELATIONSHIP CAPITAL",
    "text": "When someone asks whether you can find a colleague’s details, open Outlook to bring them up and say, “We have contact.”"
  },
  {
    "id": "directive-035",
    "number": 29,
    "heading": "RAPID MOBILISATION",
    "text": "When someone asks you to make tea, start towards the kettle and say, “The wheels are already in motion.”"
  },
  {
    "id": "directive-036",
    "number": 30,
    "heading": "GOVERNANCE COMPLETE",
    "text": "When borrowing a chair/pen/charger etc, say, “Don't worry, I’ve secured the necessary approvals.”"
  },
  {
    "id": "directive-037",
    "number": 31,
    "heading": "DELIVERY MILESTONE",
    "text": "After opening stubborn packaging for someone, hand it back and say, “Objective achieved. Package delivered.”"
  },
  {
    "id": "directive-040",
    "number": 32,
    "heading": "RESTRICTED CIRCULATION",
    "text": "Before sharing a completely ordinary spreadsheet, say, “Let’s keep this between ourselves.”"
  },
  {
    "id": "directive-041",
    "number": 33,
    "heading": "FULL READINESS",
    "text": "When everyone has arrived for a meeting, say, “The pieces are in position. Let the game begin.”"
  },
  {
    "id": "directive-044",
    "number": 34,
    "heading": "POWER POSITIONING",
    "text": "Before sitting down in a meeting room, ask, “Is this the strategic end of the table?”"
  },
  {
    "id": "directive-045",
    "number": 35,
    "heading": "CONFIDENTIAL SESSION",
    "text": "When someone closes the meeting-room door, say, “Good. Now we can speak freely.”"
  },
  {
    "id": "directive-046",
    "number": 36,
    "heading": "EVIDENCE SECURED",
    "text": "When someone's camera switches on, say, “Good. We have visual contact.”"
  },
  {
    "id": "directive-047",
    "number": 37,
    "heading": "MILESTONE RECOGNITION",
    "text": "Whenever a presentation advances to a new slide, quietly say, “There it is.”"
  },
  {
    "id": "directive-048",
    "number": 38,
    "heading": "STRATEGIC REVELATION",
    "text": "When someone makes an extremely obvious point, nod gravely and say, “That changes everything.”"
  },
  {
    "id": "directive-049",
    "number": 39,
    "heading": "MULTICHANNEL CONFIRMATION",
    "text": "When asked whether you can see someone’s screen, reply, “Loud and clear.”"
  },
  {
    "id": "directive-051",
    "number": 40,
    "heading": "EFFICIENCY DIVIDEND",
    "text": "When a meeting finishes early, say, “Unprecedented efficiency. Good work everyone.”"
  },
  {
    "id": "directive-052",
    "number": 41,
    "heading": "ACCEPTABLE LOSSES",
    "text": "When a meeting runs late, say, “We always knew there would be casualties.”"
  },
  {
    "id": "directive-053",
    "number": 42,
    "heading": "IMPLICIT CONSENSUS",
    "text": "When nobody has any questions, say, “The silence speaks volumes.”"
  },
  {
    "id": "directive-054",
    "number": 43,
    "heading": "DEFERRED ACTION",
    "text": "When someone says, “Let’s take that offline,” look impressed and write it down."
  },
  {
    "id": "directive-055",
    "number": 44,
    "heading": "SECONDARY OPERATIONS",
    "text": "When refreshments arrive during a meeting, rub your hands and say, “Excellent - reinforcements.”"
  },
  {
    "id": "directive-056",
    "number": 45,
    "heading": "RISK ESCALATION",
    "text": "Introduce a completely ordinary agenda item by saying, “Now we reach the difficult part.”"
  },
  {
    "id": "directive-057",
    "number": 46,
    "heading": "CONTINUITY MEASURES",
    "text": "When someone temporarily leaves a meeting, say, “We’ll continue in their absence.”"
  },
  {
    "id": "directive-058",
    "number": 47,
    "heading": "SHARED UNDERSTANDING",
    "text": "At the end of an inconclusive meeting, say, “I think we all know what we have to do. Good luck everyone.”"
  },
  {
    "id": "directive-059",
    "number": 48,
    "heading": "FORMAL RESOLUTION",
    "text": "When closing your notebook at the end of a meeting, say, “Then it’s settled.”"
  },
  {
    "id": "directive-061",
    "number": 49,
    "heading": "CHANNEL OPEN",
    "text": "When someone unmutes during a video call, say, “Arthur, you have the floor.”"
  },
  {
    "id": "directive-062",
    "number": 50,
    "heading": "COMMS RESTORED",
    "text": "When someone on a video call asks, “Can you hear me?” just nod and give a thumbs-up."
  },
  {
    "id": "directive-064",
    "number": 51,
    "heading": "CONNECTION CASUALTY",
    "text": "When someone freezes during a video call, say, “We’ve lost them.”"
  },
  {
    "id": "directive-066",
    "number": 52,
    "heading": "BANDWIDTH CONFLICT",
    "text": "When two people speak simultaneously on a video call, say, “Don't cross the streams!”"
  },
  {
    "id": "directive-067",
    "number": 53,
    "heading": "TRANSPARENCY EVENT",
    "text": "When someone accidentally shares the wrong window on a video call, say, “Interesting - very revealing.”"
  },
  {
    "id": "directive-068",
    "number": 54,
    "heading": "RESILIENCE PROVEN",
    "text": "When screen sharing works on the first attempt, say, “We have the technology.”"
  },
  {
    "id": "directive-070",
    "number": 55,
    "heading": "WELFARE CONCERN",
    "text": "When someone joins a video call late, say, “We were beginning to fear the worst.”"
  },
  {
    "id": "directive-071",
    "number": 56,
    "heading": "EXTERNAL ADVISORY",
    "text": "When a pet appears during a video call, say, “I see you’ve brought back up.”"
  },
  {
    "id": "directive-072",
    "number": 57,
    "heading": "EMERGING TALENT",
    "text": "When a child appears during a video call, say, “Our newest stakeholder has joined us.”"
  },
  {
    "id": "directive-074",
    "number": 58,
    "heading": "CEREMONIAL CLOSURE",
    "text": "When everyone waves goodbye at the end of a video call, perform an unnecessarily solemn salute."
  },
  {
    "id": "directive-075",
    "number": 59,
    "heading": "PRIVATE DEBRIEF",
    "text": "When you are the last person left on a video call, wait two seconds and say, “Finally. I have it all to myself” and laugh softly."
  },
  {
    "id": "directive-076",
    "number": 60,
    "heading": "COURTESY CONTINUITY",
    "text": "Whenever an email exchange reaches “Thanks,” reply with “No problem” and keep the ceremony going for as long as possible."
  },
  {
    "id": "directive-077",
    "number": 61,
    "heading": "EXECUTIVE CORRESPONDENCE",
    "text": "End a routine email with, “Yours in operational readiness.”"
  },
  {
    "id": "directive-078",
    "number": 62,
    "heading": "EVIDENCE-LED OPENING",
    "text": "Begin a one-line email with, “Following extensive internal consultation…”"
  },
  {
    "id": "directive-079",
    "number": 63,
    "heading": "RESTRICTED EVIDENCE",
    "text": "Whenever attaching an ordinary file, refer to it as “the supporting dossier.”"
  },
  {
    "id": "directive-080",
    "number": 64,
    "heading": "AUDIT AMENDMENT",
    "text": "After correcting a minor typo in a multi-user document, add a comment saying, “The record has been amended.”"
  },
  {
    "id": "directive-081",
    "number": 65,
    "heading": "PASSIVE BRIEFING",
    "text": "When forwarding an unimportant email, write, “For situational awareness.”"
  },
  {
    "id": "directive-083",
    "number": 66,
    "heading": "MISSION CONTROL",
    "text": "Whenever referring to any workplace group chat, call it “the command channel.”"
  },
  {
    "id": "directive-084",
    "number": 67,
    "heading": "URGENT ESCALATION",
    "text": "When someone posts a photograph of their lunch, reply, “This issue has been escalated.”"
  },
  {
    "id": "directive-085",
    "number": 68,
    "heading": "SUPPORTING MATERIAL",
    "text": "When someone sends an emoji in a work chat, reply, “Useful context, thank you.”"
  },
  {
    "id": "directive-086",
    "number": 69,
    "heading": "POSITIVE FORECAST",
    "text": "When asked a simple yes-or-no question, reply, “All indicators point to yes.”"
  },
  {
    "id": "directive-087",
    "number": 70,
    "heading": "STEADY-STATE OPERATIONS",
    "text": "When someone gives you an ordinary update, reply, “Understood. Maintain course.”"
  },
  {
    "id": "directive-089",
    "number": 71,
    "heading": "MANDATORY ATTENDANCE",
    "text": "Whenever someone sends you a calendar invitation, confirm with “I have accepted your formal summons.”"
  },
  {
    "id": "directive-090",
    "number": 72,
    "heading": "PRIORITY INVERSION",
    "text": "Mark a thoroughly unimportant message, “For immediate de-prioritisation.”"
  },
  {
    "id": "directive-091",
    "number": 73,
    "heading": "CONDUCT REMINDER",
    "text": "Finish a routine workplace announcement with, “So please all conduct yourselves accordingly.”"
  },
  {
    "id": "directive-092",
    "number": 74,
    "heading": "SCOPE MISALIGNMENT",
    "text": "When someone includes you in an email by mistake, reply, “I believe I have been inducted into the inner circle in error.”"
  },
  {
    "id": "directive-094",
    "number": 75,
    "heading": "MEDIA ALERT",
    "text": "Write “BREAKING” in the group chat before announcing that biscuits have arrived."
  },
  {
    "id": "directive-095",
    "number": 76,
    "heading": "FORMAL NOTICE",
    "text": "After posting an ordinary message in Teams or Slack, tell nearby colleagues, “I’ve issued a communiqué.”"
  },
  {
    "id": "directive-096",
    "number": 77,
    "heading": "HUMAN CAPITAL STABILISATION",
    "text": "When someone makes coffee/tea, say, “Good. Morale was becoming an issue.”"
  },
  {
    "id": "directive-097",
    "number": 78,
    "heading": "OUTPUT RESTORED",
    "text": "When you discover fresh coffee while other people are in the kitchen, announce, “Good! Normal productivity can resume.”"
  },
  {
    "id": "directive-098",
    "number": 79,
    "heading": "TARGET CONDITION",
    "text": "When waiting beside the kettle with a colleague, wait for it to boil and say, “Good. We have achieved optimal thermal output.”"
  },
  {
    "id": "directive-099",
    "number": 80,
    "heading": "POLICY REVIEW",
    "text": "When someone offers you a biscuit, ask, “Have these been signed off upstairs?”"
  },
  {
    "id": "directive-100",
    "number": 81,
    "heading": "EXECUTIVE ASSORTMENT",
    "text": "When presented with a selection of biscuits, inspect them and say, “Hmmm. A strong portfolio.”"
  },
  {
    "id": "directive-101",
    "number": 82,
    "heading": "SUPPLY DISRUPTION",
    "text": "When you discover the milk carton is empty while someone else is in the kitchen, announce, “We have a dairy supply-chain disruption.”"
  },
  {
    "id": "directive-102",
    "number": 83,
    "heading": "SUPPLY NORMALISATION",
    "text": "When bringing fresh milk into the office kitchen, announce to everyone there, “Dairy disruption now under control.”"
  },
  {
    "id": "directive-103",
    "number": 84,
    "heading": "ASSET DISPOSAL",
    "text": "When a colleague opens the office fridge and you both find it empty, say, “Damn that economic recession.”"
  },
  {
    "id": "directive-106",
    "number": 85,
    "heading": "PROCUREMENT QUALITY",
    "text": "When someone chooses a mug from a selection of similar/identical mugs, say, “Strong choice.”"
  },
  {
    "id": "directive-108",
    "number": 86,
    "heading": "TIMELY DELIVERY",
    "text": "When toast pops out while someone else is in the kitchen, say, “Right on schedule.”"
  },
  {
    "id": "directive-109",
    "number": 87,
    "heading": "PERIMETER BREACH",
    "text": "When someone spills a tiny amount of water/tea/coffee, announce, “Uh-oh. Containment has failed.”"
  },
  {
    "id": "directive-110",
    "number": 88,
    "heading": "MATTER RESOLVED",
    "text": "After wiping up a small spill that colleagues witnessed, say, “This unfortunate incident is now closed.”"
  },
  {
    "id": "directive-111",
    "number": 89,
    "heading": "CORE OUTPUT",
    "text": "Whenever discussing lunch, refer to it as “the midday deliverable.”"
  },
  {
    "id": "directive-112",
    "number": 90,
    "heading": "FIELD REVIEW",
    "text": "When someone returns from lunch, ask, “Was the mission successful?”"
  },
  {
    "id": "directive-113",
    "number": 91,
    "heading": "SPECIALIST SUPPORT",
    "text": "When a takeaway delivery arrives for the team, announce, “Our external suppliers have delivered on schedule yet again.”"
  },
  {
    "id": "directive-114",
    "number": 92,
    "heading": "EXECUTIVE HOTLINE",
    "text": "In view of your colleagues, hold a banana to your ear and say, “I’m afraid I have to take this.”"
  },
  {
    "id": "directive-115",
    "number": 93,
    "heading": "VALUES ALIGNMENT",
    "text": "Occasionally end a mundane instruction with “Amen,” then continue as though nothing unusual happened."
  },
  {
    "id": "directive-116",
    "number": 94,
    "heading": "EXCEPTIONAL PERFORMANCE",
    "text": "When the printer works on the first attempt, turn to colleagues and say, “We are witnessing history.”"
  },
  {
    "id": "directive-117",
    "number": 95,
    "heading": "APPROVAL WITHHELD",
    "text": "When the printer fails while someone is waiting for it, say, “It has rejected our proposal.”"
  },
  {
    "id": "directive-118",
    "number": 96,
    "heading": "SYSTEM APPEASEMENT",
    "text": "When a colleague is waiting for you to print something, pause before pressing Print and say, “Let’s see if it accepts our humble offering.”"
  },
  {
    "id": "directive-119",
    "number": 97,
    "heading": "AUTHORISED OUTPUT",
    "text": "When a colleague is watching the printer and a page emerges, announce, “The documents have been released.”"
  },
  {
    "id": "directive-120",
    "number": 98,
    "heading": "SPECIALIST INTERVENTION",
    "text": "When someone clears a printer jam, address them thereafter as “Engineering.”"
  },
  {
    "id": "directive-121",
    "number": 99,
    "heading": "INFORMATION GOVERNANCE",
    "text": "Whenever feeding documents to the shredder, call it “Into the spinning blades of death.”"
  },
  {
    "id": "directive-122",
    "number": 100,
    "heading": "STANDARDS COMPLIANCE",
    "text": "Before using a stapler in front of someone, ask, “Is this the approved fastening solution?”"
  },
  {
    "id": "directive-123",
    "number": 101,
    "heading": "CUSTODIAL RESPONSIBILITY",
    "text": "When handing someone a pen, say, “Use it wisely.”"
  },
  {
    "id": "directive-124",
    "number": 102,
    "heading": "END-OF-SERVICE HONOURS",
    "text": "When a pen runs out as you are writing in front of a colleague, hold it solemnly and say, “It gave everything it had.”"
  },
  {
    "id": "directive-125",
    "number": 103,
    "heading": "FITNESS FOR PURPOSE",
    "text": "When someone asks whether a pen works, test it, nod seriously and say, “Yes. It’s fully operational.”"
  },
  {
    "id": "directive-126",
    "number": 104,
    "heading": "ASSET REPATRIATION",
    "text": "When someone borrows your scissors, say, “Treat them well and bring them home safely.”"
  },
  {
    "id": "directive-127",
    "number": 105,
    "heading": "ENTERPRISE SPECIFICATION",
    "text": "When a colleague shows you an unusually large paperclip, describe it as “industrial grade.”"
  },
  {
    "id": "directive-128",
    "number": 106,
    "heading": "POWER DEPENDENCY",
    "text": "When plugging in your laptop beside a colleague, say, “Commencing life support.”"
  },
  {
    "id": "directive-129",
    "number": 107,
    "heading": "INFRASTRUCTURE RECOVERY",
    "text": "When the office Wi-Fi reconnects after an outage, announce to nearby colleagues, “We’re back! It's been a tough time, but we made it through together.”"
  },
  {
    "id": "directive-130",
    "number": 108,
    "heading": "MISSION-CRITICAL SUPPORT",
    "text": "When an IT colleague fixes a minor problem, say, “You’ve saved more than you know.”"
  },
  {
    "id": "directive-131",
    "number": 109,
    "heading": "LEGACY METHODOLOGY",
    "text": "After fixing a colleague’s problem by turning something off and on again, say, “The ancient protocol remains effective. All praise to the gods.”"
  },
  {
    "id": "directive-132",
    "number": 110,
    "heading": "INNOVATION TRIAL",
    "text": "Put a removable “VOICE ACTIVATED” sign on a suitable office appliance that is in no way able to be controlled by voice."
  },
  {
    "id": "directive-133",
    "number": 111,
    "heading": "SYSTEM READINESS",
    "text": "Put a sticky note on a keyboard saying, “Please wait - keyboard updating.”"
  },
  {
    "id": "directive-134",
    "number": 112,
    "heading": "COMPATIBILITY REVIEW",
    "text": "When someone asks to borrow a charger, lower your voice and ask, “What connector?”"
  },
  {
    "id": "directive-135",
    "number": 113,
    "heading": "STRATEGIC CONNECTION",
    "text": "When connecting a laptop to a meeting-room display, hold up the HDMI cable and say, “We have found the missing link.”"
  },
  {
    "id": "directive-136",
    "number": 114,
    "heading": "RESOURCE LOCATED",
    "text": "When a colleague arrives for work, look relieved and say, “There they are.”"
  },
  {
    "id": "directive-137",
    "number": 115,
    "heading": "TIMING EXCELLENCE",
    "text": "When a colleague arrives exactly on time, look at the clock and say, “Impeccable.”"
  },
  {
    "id": "directive-138",
    "number": 116,
    "heading": "COMPLIANCE REMINDER",
    "text": "When a colleague arrives one minute late for work, silently tap your watch."
  },
  {
    "id": "directive-139",
    "number": 117,
    "heading": "INTERIM STEWARDSHIP",
    "text": "When someone returns from the toilet, say, “Welcome back. We covered for you.”"
  },
  {
    "id": "directive-140",
    "number": 118,
    "heading": "EXIT INDICATORS",
    "text": "Whenever someone puts on their coat, ask, “Going somewhere?”"
  },
  {
    "id": "directive-141",
    "number": 119,
    "heading": "ARCHIVAL MILESTONE",
    "text": "As you and your remaining colleagues prepare to leave at the end of the working day, say, “Another one for the history books.”"
  },
  {
    "id": "directive-142",
    "number": 120,
    "heading": "ESCAPE WINDOW",
    "text": "When a colleague leaves work early, say, “Get out while you still can.”"
  },
  {
    "id": "directive-143",
    "number": 121,
    "heading": "SKELETON OPERATIONS",
    "text": "When only you and one colleague remain in the office, say, “We’re the last line of defence.”"
  },
  {
    "id": "directive-144",
    "number": 122,
    "heading": "COMPULSORY RETURN",
    "text": "On Monday morning, once the team has gathered, say, “I see we’ve all been recalled for duty.”"
  },
  {
    "id": "directive-146",
    "number": 123,
    "heading": "BUSINESS RESUMPTION",
    "text": "When someone returns from holiday, say, “Your desk has been preserved exactly as you left it.”"
  },
  {
    "id": "directive-147",
    "number": 124,
    "heading": "MISSION HOMECOMING",
    "text": "Welcome a colleague back from lunch as though they have returned from a dangerous expedition."
  },
  {
    "id": "directive-148",
    "number": 125,
    "heading": "CASE LOGGED",
    "text": "When someone sitting near you sneezes once, say, “Noted.” When someone sneezes more than once, say, “We heard you the first time.”"
  },
  {
    "id": "directive-150",
    "number": 126,
    "heading": "BRAND ALIGNMENT",
    "text": "When three colleagues wear the same colour, announce, “Good - you got the colour memo.”"
  },
  {
    "id": "directive-151",
    "number": 127,
    "heading": "PORTFOLIO SELECTION",
    "text": "When someone chooses a sandwich, describe it as “a good strategic procurement decision.”"
  },
  {
    "id": "directive-152",
    "number": 128,
    "heading": "STRUCTURAL REALIGNMENT",
    "text": "When people change desks, describe it as “an organisational transformation.”"
  },
  {
    "id": "directive-153",
    "number": 129,
    "heading": "CLIMATE STRATEGY",
    "text": "When someone opens a window, ask if they've undertaken an environmental impact assessment."
  },
  {
    "id": "directive-154",
    "number": 130,
    "heading": "CAPACITY OPTIMISATION",
    "text": "When someone changes seats, call it “a resource reallocation.”"
  },
  {
    "id": "directive-157",
    "number": 131,
    "heading": "PERIMETER REVIEW",
    "text": "Before going for a walk around the block, announce to your colleagues, “I’m heading out. I may be some time.”"
  },
  {
    "id": "directive-158",
    "number": 132,
    "heading": "UNOFFICIAL BRIEFING",
    "text": "Whenever someone shares office gossip, describe it as “informal market intelligence.”"
  },
  {
    "id": "directive-159",
    "number": 133,
    "heading": "RESIDUAL VALUE",
    "text": "When discussing leftovers, refer to them as “legacy assets.”"
  },
  {
    "id": "directive-160",
    "number": 134,
    "heading": "TEMPORARY ALLIANCE",
    "text": "When borrowing a pen, describe the arrangement as “a short-term equipment reallocation.”"
  },
  {
    "id": "directive-164",
    "number": 135,
    "heading": "CLIMATE ADJUSTMENT",
    "text": "When opening a window, say, “We’re implementing a thermal strategy pivot.”"
  },
  {
    "id": "directive-167",
    "number": 136,
    "heading": "PREVENTIVE SERVICING",
    "text": "When a colleague sees you washing a mug, say, “Just carrying out some routine asset maintenance.”"
  },
  {
    "id": "directive-168",
    "number": 137,
    "heading": "SUSTAINABILITY PROGRAMME",
    "text": "When moving an office plant, call it “a green asset reallocation.”"
  },
  {
    "id": "directive-170",
    "number": 138,
    "heading": "SEASONAL GOVERNANCE",
    "text": "Whenever discussing the office Christmas party, call it “the annual stakeholder summit.”"
  },
  {
    "id": "directive-171",
    "number": 139,
    "heading": "LEADERSHIP APPOINTMENT",
    "text": "Give the office plant a formal job title and occasionally ask for its opinion."
  },
  {
    "id": "directive-172",
    "number": 140,
    "heading": "REGIONAL EXPANSION",
    "text": "Choose an underused meeting room and refer to it exclusively as “the Thinkbunker.”"
  },
  {
    "id": "directive-173",
    "number": 141,
    "heading": "PERFORMANCE METRICS",
    "text": "Maintain a completely serious league table for trivial workplace achievements."
  },
  {
    "id": "directive-174",
    "number": 142,
    "heading": "INSTANT RECOGNITION",
    "text": "Award someone “Employee of the Minute” for a tiny act of competence."
  },
  {
    "id": "directive-175",
    "number": 143,
    "heading": "CULTURAL SYMBOL",
    "text": "Select an ordinary office object as the department’s ceremonial artefact."
  },
  {
    "id": "directive-176",
    "number": 144,
    "heading": "ENDWEEK FRAMEWORK",
    "text": "Every Friday morning, once colleagues have arrived, announce, “Casual protocols are now in effect.”"
  },
  {
    "id": "directive-177",
    "number": 145,
    "heading": "FAILURE TAXONOMY",
    "text": "Like storms, give every recurring printer fault an official incident name."
  },
  {
    "id": "directive-178",
    "number": 146,
    "heading": "MORALE MONITORING",
    "text": "Update a “Days Since Last gift of Biscuits” sticky note for all to see on your door/partition."
  },
  {
    "id": "directive-180",
    "number": 147,
    "heading": "HONOURABLE DISCHARGE",
    "text": "When a pen runs out, hold a ten-second retirement ceremony and invite any colleagues who may have borrowed it to add their words."
  },
  {
    "id": "directive-181",
    "number": 148,
    "heading": "APPROVED PROVIDER",
    "text": "Designate one coffee brand as “the organisation’s preferred beverage supplier.”"
  },
  {
    "id": "directive-182",
    "number": 149,
    "heading": "LEADERSHIP ACCOMMODATION",
    "text": "Choose one ordinary office chair and refer to it as “the executive chair.”"
  },
  {
    "id": "directive-183",
    "number": 150,
    "heading": "CAREER ACCELERATION",
    "text": "Whenever someone solves a minor problem, immediately promote them to team leader for the day with full privileges - but do not tell them what this means."
  },
  {
    "id": "directive-184",
    "number": 151,
    "heading": "STRATEGIC INFLUENCE",
    "text": "Introduce a colleague as “the person behind it all” without further explanation."
  },
  {
    "id": "directive-185",
    "number": 152,
    "heading": "RECOGNITION CYCLE",
    "text": "Refer to whoever most recently made tea as “this quarter’s outstanding contributor.”"
  },
  {
    "id": "directive-186",
    "number": 153,
    "heading": "EXECUTIVE RESEARCH",
    "text": "Carry a clipboard containing nothing except strongly held lunch opinions."
  },
  {
    "id": "directive-187",
    "number": 154,
    "heading": "AUTHORISATION GATE",
    "text": "Ask for verbal sign-off before opening a new packet of biscuits."
  },
  {
    "id": "directive-188",
    "number": 155,
    "heading": "LOGISTICS HUB",
    "text": "Whenever discussing stationery with colleagues, refer to the stationery cupboard exclusively as “Central Stores.”"
  },
  {
    "id": "directive-189",
    "number": 156,
    "heading": "CUSTODY ZONE",
    "text": "Refer to the coat rack exclusively as “The personal Effects framework.”"
  },
  {
    "id": "directive-192",
    "number": 157,
    "heading": "MEDIA RELATIONS",
    "text": "Whenever someone returns from an errand, say to the room, \"Well, that about wraps it up. Same time next week.\" as if you're just finishing an important meeting."
  },
  {
    "id": "directive-193",
    "number": 158,
    "heading": "PROGRAMME BRANDING",
    "text": "Give every mundane office task an unnecessarily dramatic project name - i.e. the coffee run would be a 'Caffeine mercy dash.\"."
  },
  {
    "id": "directive-194",
    "number": 159,
    "heading": "POLICY FINALISATION",
    "text": "After explaining a routine process, finish with, “And this is the doctrine.”"
  },
  {
    "id": "directive-195",
    "number": 160,
    "heading": "INFORMATION SECURITY",
    "text": "Give a trivial task a secret code name and politely refuse to explain it."
  },
  {
    "id": "directive-196",
    "number": 161,
    "heading": "LAUNCH APPROVAL",
    "text": "When you are about to use the microwave, take a pace back before pressing the button at full arms length, saying, “Everyone clear.”"
  },
  {
    "id": "directive-197",
    "number": 162,
    "heading": "INFRASTRUCTURE APPRECIATION",
    "text": "When automatic lights switch on, look upwards and say, “Thank you.”"
  },
  {
    "id": "directive-198",
    "number": 163,
    "heading": "DELIVERY RECOGNITION",
    "text": "When the microwave finishes, pat it gently and say, “Outstanding work.”"
  },
  {
    "id": "directive-199",
    "number": 164,
    "heading": "RELATIONSHIP MANAGEMENT",
    "text": "After successfully printing something while colleagues are waiting, pat the printer and say, “Same time tomorrow.”"
  },
  {
    "id": "directive-200",
    "number": 165,
    "heading": "CAPACITY EXHAUSTED",
    "text": "At precisely 5 p.m., when colleagues begin preparing to leave, close your laptop and say, “They can’t ask any more of us.”"
  },
  {
    "id": "directive-201",
    "number": 166,
    "heading": "FLUENCY RECOGNITION",
    "text": "After a colleague forgets what they were about to say, respond with, “I know. It's the pressure. It's getting to us all.”"
  },
  {
    "id": "directive-204",
    "number": 167,
    "heading": "DELIVERY COMPLEXITY",
    "text": "After a colleague trips over a sentence, say, “That’s easy for you to say.”"
  },
  {
    "id": "directive-205",
    "number": 168,
    "heading": "RECOVERY OPERATION",
    "text": "When someone arrives late at the office, say, “Cancel the search party.”"
  },
  {
    "id": "directive-206",
    "number": 169,
    "heading": "SYSTEMS HANDOVER",
    "text": "When asking to take control of someones computer, say, “Mind if I drive?”"
  },
  {
    "id": "directive-207",
    "number": 170,
    "heading": "ACTING LEADERSHIP",
    "text": "When leaving your desk to go to the toilet, tell a colleague, “You’re in charge while I’m gone.”"
  },
  {
    "id": "directive-208",
    "number": 171,
    "heading": "SUCCESSION PLANNING",
    "text": "When leaving for lunch, tell a colleague, “If I don’t make it back, I hope people will remember me fondly.”"
  },
  {
    "id": "directive-209",
    "number": 172,
    "heading": "BACKGROUND CASTING",
    "text": "When someone asks whether you have any questions in a meeting, say, “I don’t have any speaking lines in this one.”"
  },
  {
    "id": "directive-210",
    "number": 173,
    "heading": "COMPOSURE MAINTAINED",
    "text": "Immediately after completely losing your cool in front of colleagues, say, “Whoa, almost lost my cool there.”"
  },
  {
    "id": "directive-211",
    "number": 174,
    "heading": "SUBJECT-MATTER EXPERTISE",
    "text": "When asked to complete a very straightforward task, say, “Boy, did you come to the right person.”"
  },
  {
    "id": "directive-212",
    "number": 175,
    "heading": "EXECUTIVE DISCRETION",
    "text": "When asked to complete a very minor task, sigh and say, “Only because it’s you.”"
  },
  {
    "id": "directive-213",
    "number": 176,
    "heading": "SEASONAL SANCTIONS",
    "text": "After any minor inconvenience at work, turn to the nearest colleague and say, “That’s it - Christmas is cancelled.” This is especially effective nowhere near Christmas."
  },
  {
    "id": "directive-214",
    "number": 177,
    "heading": "RISK APPETITE",
    "text": "Whenever a colleague offers you something such as tea or coffee, say, “Why the hell not? I’m not driving.”"
  },
  {
    "id": "directive-215",
    "number": 178,
    "heading": "TALENT MARKET SIGNAL",
    "text": "When a colleague arrives looking slightly smarter than usual, say, “Nice. What time is the interview?”"
  },
  {
    "id": "directive-216",
    "number": 179,
    "heading": "SHARED ACCOUNTABILITY",
    "text": "When colleagues discover that something was entirely your fault, say, “I can’t help but feel partially responsible.”"
  },
  {
    "id": "directive-217",
    "number": 180,
    "heading": "PROCEEDINGS CONCLUDED",
    "text": "Immediately after asking a question in a meeting, say, “No further questions, Your Honour.”"
  },
  {
    "id": "directive-218",
    "number": 181,
    "heading": "SAFE EXPERIMENTATION",
    "text": "After someone offers the first idea in a brainstorming session, say, “That’s great - let’s get the bad ideas out of the way first.”"
  },
  {
    "id": "directive-219",
    "number": 182,
    "heading": "JUDICIAL ACCESS",
    "text": "Whenever you need to speak to someone at their desk, ask, “Permission to approach the bench?”"
  },
  {
    "id": "directive-220",
    "number": 183,
    "heading": "PUBLIC RELATIONS",
    "text": "Whenever you are asked to sign something at work, say, “Anything for a fan.”"
  },
  {
    "id": "directive-221",
    "number": 184,
    "heading": "ATTENDANCE CLASSIFICATION",
    "text": "If anyone leaves the office even a minute before 5 p.m., ask, “Half day?”"
  },
  {
    "id": "directive-222",
    "number": 185,
    "heading": "ALIGNMENT FAILURE",
    "text": "When a colleague says something you disagree with, say, “I’d love to agree with you, but then we’d both be wrong.”"
  },
  {
    "id": "directive-223",
    "number": 186,
    "heading": "MOTIVATION DISCLOSURE",
    "text": "When you arrive late at the office or a meeting, say, “Sorry I’m late. I didn’t want to come.”"
  },
  {
    "id": "directive-224",
    "number": 187,
    "heading": "HABIT REDUCTION",
    "text": "When a colleague tries to hand you something, say, “No thanks, I’m trying to quit.”"
  },
  {
    "id": "directive-225",
    "number": 188,
    "heading": "PLACEMENT FLEXIBILITY",
    "text": "When someone accidentally drops something, say, “Oh, yeah - just put that anywhere.”"
  },
  {
    "id": "directive-226",
    "number": 189,
    "heading": "OPPORTUNISTIC ACQUISITION",
    "text": "When someone accidentally drops something, immediately pick it up and say, “Finders keepers.”"
  },
  {
    "id": "directive-227",
    "number": 190,
    "heading": "STANDARDS VIOLATION",
    "text": "When someone accidentally drops something large, say, “Oh, we actually don’t do that here.”"
  },
  {
    "id": "directive-228",
    "number": 191,
    "heading": "RECURRING ENGAGEMENT",
    "text": "When helping someone pick up something they dropped, say, “We’ve got to stop meeting like this.”"
  },
  {
    "id": "directive-229",
    "number": 192,
    "heading": "SERVICE-LEVEL REVIEW",
    "text": "When someone tells you to have a nice day, reply, “I’ll think about it.”"
  },
  {
    "id": "directive-230",
    "number": 193,
    "heading": "BOUNDARY SETTING",
    "text": "When a friendly colleague tells you to have a nice day, reply, “Don’t tell me what to do” and scowl at them fiercely."
  },
  {
    "id": "directive-231",
    "number": 194,
    "heading": "PROFESSIONAL INTERRUPTION",
    "text": "Whenever you need to speak to a co-worker, begin with, “Sorry to bother you at work…”"
  },
  {
    "id": "directive-232",
    "number": 195,
    "heading": "EPISTEMIC CAUTION",
    "text": "When someone asks a question with an objectively correct answer, such as when today’s meeting starts, say, “As yet there’s no way to know.”"
  }
];
