export const initialState = {
    questions: [{
        questionText: "Question", qustionType: "radio",
        options: [
            { optionText: "Option" },
        ],
        open: true,
        required: false,
    }],
    questionType: 'radio',
    doc_name: 'Untitled form',
    doc_desc: 'Add description'
}

export const ActionTypes = {
    SET_QUESTION: 'SET_QUESTIONS',
    CHANGE_TYPE: 'CHANGE_TYPE',
    SET_DOC_NAME: 'SET_DOC_NAME',
    SET_DOC_DESC: 'SET_DOC_DESC'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_QUESTION:
            return {
                ...state, questions: action.questions
            }
        case ActionTypes.CHANGE_TYPE:
            return {
                ...state, questionType: action.qustionType
            }
        case ActionTypes.SET_DOC_NAME:
            return {
                ...state, doc_name: action.doc_name
            }
        case ActionTypes.SET_DOC_DESC:
            return {
                ...state, doc_desc: action.doc_desc
            }
        default: return state
    }
}

export default reducer