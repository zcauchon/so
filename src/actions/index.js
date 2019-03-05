import {
    FILL_MEETING_DATA
} from './types';
import meetingsData from './meetingsData';

export const meetingDetailPageFill = (index) => {
    return {type: FILL_MEETING_DATA, payload: meetingsData[index]}
}