import claimDSCall from './claimDS.js';

    export default async function getClaimScore(id) {
        const [claimData] = await claimDSCall(id);
        if(claimData) {
            const stringData = convertToString(claimData);
            return stringData;
        } else {
            return 'NO DATA FOUND'
        }
    };

    function convertToString(data) {
        var noteString='';
        for( const eachNote of data.notes) {
            for( const eachTopicNote of eachNote.note) {
                if(noteString) {
                    noteString=noteString+' ';
                }
                noteString = noteString.concat(eachTopicNote);
            }
        }
        return noteString;
    };
