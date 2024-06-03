import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchDocs = createAsyncThunk(
    'questions/fetchDocs',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('http://localhost:4444/get_all_filenames');

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();
            //console.log(data)
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const fetchDocsData = createAsyncThunk(
    'questions/fetchDocsData',
    async function (id, { rejectWithValue }) {
        try {
            const response = await fetch(`http://localhost:4444/get_data/${id}`);

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();
            //console.log(data)
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const DeleteDoc = createAsyncThunk(
    'questions/DeleteDoc',
    async function (id, { rejectWithValue, dispatch }) {
        try {
            const response = await axios.delete(`http://localhost:4444/get_all_filenames/${id}`, {
                "id": id
            });

            // if (!response.ok) {
            //     throw new Error('Server Error!');
            // }
            const data = await response.json();
            console.log(data)
            dispatch(removeDoc({ id }))
            return data;



        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const AddNewDoc = createAsyncThunk(
    'questions/AddNewDoc',
    async function ({ id, doc_name, doc_desc, questions }, { rejectWithValue, dispatch }) {
        try {
            const response = await axios.post(`http://localhost:4444/post_questions/${id}`, {
                "doc_id": id,
                "document_name": doc_name ? doc_name : 'Новая форма',
                "doc_desc": doc_desc ? doc_desc : '',
                "questions": questions
            })

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();
            dispatch(AddNewDoc({ id, doc_name, doc_desc, questions }))
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);


export const AddNewAnswers = createAsyncThunk(
    'questions/AddNewAnswers',
    async function ({ id, answer_id, doc_name, answers }, { rejectWithValue, dispatch }) {
        try {
            const response = await axios.post(`http://localhost:4444/student_response/${answer_id}`, {
                "Answer_id": answer_id,
                "doc_id": id,
                "document_name": doc_name ? doc_name : 'Новая форма',
                "Answers": answers
            })

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();
            //dispatch(AddNewDoc({ id, doc_name, doc_desc, questions }))
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const addNewQuestion = createAsyncThunk(
    'questions/addNewQuestion',
    async function (tmp, { rejectWithValue, dispatch }) {
        try {
            //const response =await fetch('')
            const question = {
                questionText: "Question", qustionType: "radio",
                options: [
                    { optionText: "Option" },
                ],
                open: true,
                required: false,
            }
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }

)

export const fetchTodos = createAsyncThunk(
    'questions/fetchTodos',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

            if (!response.ok) {
                throw new Error('Server Error!');
            }

            const data = await response.json();

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const initialState = {

}

const questionSlice = createSlice({
    name: 'questions',
    initialState: {
        forms: [],
        //answer_forms:[],
        //questions: [],
        //doc_names: [],
        state: null,
        //  doc_name: 'Untitled form',
        //  doc_desc: 'Add description'
    },
    reducers: {
        // addTodo(state, action) {
        //     state.asdf.push(action.payload);
        // },
        // toggleComplete(state, action) {
        //     const toggledTodo = state.asdf.find(todo => todo.id === action.payload.id);
        //     toggledTodo.completed = !toggledTodo.completed;
        // },
        addNewDoc(state, action) {
            state.forms.push(action.payload)
            //console.log(state.forms)
        },
        removeDoc(state, action) {
            // state.forms.map((item,key)=>(

            // ))
            //state.asdf = state.asdf.filter(todo => todo.id !== action.payload.id);
            // const index = state.forms.findIndex(obj => obj.doc_id === action.payload.id)
            // state.forms.splice(index, 1)
            state.forms = state.forms.filter(obj => obj.doc_id !== action.payload.id)
            // state.forms.splice(state.forms.findIndex(obj => obj.doc_id === action.payload.id), 1);
            // state.forms.map((item, key) => {
            //     item.doc_id.filter(todo => todo.id !== action.payload.id);
            // })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDocs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDocs.fulfilled, (state, action) => {
                state.status = 'resolved';
                state.forms = action.payload
            })
            .addCase(fetchDocs.rejected, (state) => {
                state.data = null
                state.status = 'error';
            })
        // [fetchTodos.pending]: (state) => {
        //     state.status = 'loading';
        //     state.error = null
        // },
        // [fetchTodos.fulfilled]: (state, action) => {
        //     state.status = 'resolved';
        //     state.asdf = action.payload;
        // },
        // [fetchTodos.rejected]: (state, action) => { },
    }
});

const { removeDoc, addNewDoc } = questionSlice.actions;

export default questionSlice.reducer;