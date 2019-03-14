import {
    FILL_MEETING_DATA,
    CREATE_MEETING
} from './types';
import meetingsData from './meetingsData';
import createMeeting from './createMeeting';

export const meetingDetailPageFill = (index) => {
    return {
        type: FILL_MEETING_DATA, 
        payload: meetingsData[index]
    }
}

export const createMeeting = (meeting) => {
    return {
        type: CREATE_MEETING, 
        payload: meeting
    }
}

