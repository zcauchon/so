import {FILL_MEETING_DETAIL} from '@actions/types';

const INITIAL_STATE = {
    meetingId: "1239ss",
    meetingName: "Design Meeting To Finzalize Prototype",
    meetingTime: {
        date: "2/28/2019",
        startTime: "11:30 AM",
        endTime: "12:30 PM"
    },
    roomInfo: {
        roomName: "3B Chestnut",
        beaconID: "123123123",
        beaconNumber: 1233
    },
    attendees: [
        { userId: "1232"},
        { userId: "12j3"},
        { userId: "d9s21"},
        { userId: "s01k2"},
    ],
    invited: [
        { userId: "1232"},
        { userId: "12j3"},
        { userId: "d9s21"},
        { userId: "s01k2"},
        { userId: "123s"},
        { userId: "sdf92"},
        { userId: "sls0"},
        { userId: "102k1"},
    ],
    agendaPoints: [
        "Go over wireframes and user flow",
        "Discuss needed components",
        "Have Pizza",
        "Discuss next steps"
    ],
    files: [
        {
            fileName: "notesForDonut.pdf",
            uri: "www.localhost:1200/notesForDonut"
        },
        {
            fileName: "notes.pdf",
            uri: "www.localhost:1200/notesForDonut"
        },
        {
            fileName: "meeting.pdf",
            uri: "www.localhost:1200/notesForDonut"
        },
        {
            fileName: "done.pdf",
            uri: "www.localhost:1200/notesForDonut"
        },
    ]
}

export default function(state=INITIAL_STATE, action) {
    const {type, payload}  = action;
    switch(type) {
        case FILL_MEETING_DETAIL:
            return {
                ...state,
                meetingId: payload.meetingId,
                meetingName: payload.meetingName,
                meetingTime: payload.meetingTime,
                roomInfo: payload.roomInfo,
                attendees: payload.attendees,
                invited: payload.invited,
                agendaPoints: payload.agendaPoints,
                files: payload.files
            }
        default:
            return state;
    }
}