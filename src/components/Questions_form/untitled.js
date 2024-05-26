<DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId={1}>
                            {(provided, snapshot) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>


                    <Draggable key={index} draggableId={index + 'id'} index={index}>
                {(provided, snapshot) => (
                    <div ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps}>
                        <div>
                            <div style={{ marginBottom: '0px' }}>
                                <div style={{ width: '100%', marginBottom: "0px" }}>
                                    <DragIndicatorIcon style={{ transform: 'rotate(-90deg)', color: "#dae0e2", position: 'relative' }}>

                                    </DragIndicatorIcon>
                                </div>

                                </Draggable>













                                :(

                                    <Add_question >
                                        <Top_header>
                                            Choose correct answer
                                        </Top_header>
                                        <Add_question_top>
                                            <Question type="text" placeholder='Question' value={ques.questionText} disabled></Question>
                                            <Points type="number" min={0} step={1} placeholder='0' onChange={(e) => { setquestionPoints(e.target.value, index) }}></Points>
                                        </Add_question_top>
                                        {ques.options.map((op, j) => (
                                            <Add_question_body key={j} style={{ marginLeft: '8px', marginBottom: '10px', marginTop: '5px' }}>
                                                <div key={j}>
                                                    <div style={{ display: 'flex' }}>
                                                        <div className='form-check'>
                                                            <label style={{ fontSize: '13px' }} onClick={() => { setquestionAnswer(ques.options[j].optionText, index) }}>
                                                                {(ques.qustionType !== 'text') ?
                                                                    <input
                                                                        style={{ marginRight: '10px', marginBottom: '10px', marginTop: '5px' }}
                                                                        type={ques.qustionType}
                                                                        name={ques.questionText}
                                                                        value="option 3"
                                                                        className='form-check-input'
                                                                        required={ques.required}
                                                                    /> : <ShortTextIcon style={{ marginRight: '10px' }} />}
                                                                {ques.options[j].optionText}
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Add_question_body>
                                        ))}
                                    </Add_question>
                                    )










                                    {!questions[index].answer ? (
                                        <Question_boxes>
                                            <Add_question>
                                                <Add_question_top>
                                                    <Question type="text" placeholder='Question' value={ques.questionText} onChange={(e) => { ChangeQuestion(e.target.value, index) }}></Question>
                                                    <CropOriginalIcon style={{ color: '#5f6368' }} />
                                                    <Select_ style={{ color: '#5f6368', fontSize: "13px" }}>
                                                        <MenuItem_ id='text' value="Text" onClick={() => { addQuestionType(index, 'text') }} ><SubjectIcon style={{ marginRight: "10px" }} />Paragraph</MenuItem_>
                                                        <MenuItem_ id='checkbox' value="checkbox" onClick={() => { addQuestionType(index, 'checkbox') }}><CheckBoxIcon style={{ marginRight: "10px", color: "#70757a" }} />CheckBox</MenuItem_>
                                                        <MenuItem_ id='radio' value="Radio" onClick={() => { addQuestionType(index, 'radio') }}><Radio style={{ marginRight: "10px", color: "#70757a" }} />Multiple choice</MenuItem_>
                                                    </Select_>
                                                </Add_question_top>
                                                {ques.options.map((op, j) => (
                                                    <Add_question_body key={j}>
                                                        {
                                                            (ques.qustionType != "text") ?
                                                                <input type={ques.qustionType} style={{ marginRight: "10px" }} /> :
                                                                <ShortTextIcon style={{ marginRight: "10px" }} />
                                                        }
                                                        <div>
                                                            <input type='text' placeholder='option' value={ques.options[j].optionText} onChange={(e) => { ChangeOptionValue(e.target.value, index, j) }}></input>
                                                        </div>
                                                        <CropOriginalIcon style={{ color: "5f6368" }} />
                                                        <IconButton onClick={() => { deleteOption(index, j) }} aria-label='delete'>
                                                            <CloseIcon />
                                                        </IconButton>
                                                    </Add_question_body>
                                                ))}
                                                {ques.options.length < 5 ? (
                                                    <Add_question_body>
                                                        <FormControlLabel disabled control={
                                                            (ques.qustionType !== 'text') ?
                                                                <input type={ques.qustionType} color='primary' style={{ marginLeft: '10px', marginRight: '10px' }} disabled /> :
                                                                <ShortTextIcon style={{ marginRight: '10px' }} />
                                                        } label={
                                                            <div>
                                                                <Text_input type='text' style={{ fontSize: '13px', width: '60px' }} placeholder='Add other'></Text_input>
                                                                <Button onClick={() => { AddOption(index) }} size='small' style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px', fontWeight: '600' }}>Add option</Button>
                                                            </div>
                                                        }
                                                        />
                    
                    
                                                    </Add_question_body>
                                                ) : ""}
                    
                    
                    
                                                <Add_footer>
                                                    <Add_question_bottom_left>
                                                        <Button size='small' style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px', fontWeight: '600' }}>
                                                            <FcRightUp style={{ border: '2px solid #4285f4', padding: '2px', marginRight: '8px' }} />
                                                            Answer key
                                                        </Button>
                                                    </Add_question_bottom_left>
                                                    <Add_question_bottom>
                                                        <IconButton onClick={() => { copyQuestion(index) }} aria-label='copy'>
                                                            <FilterNoneIcon />
                                                        </IconButton>
                                                        <IconButton onClick={() => { deleteQuestion(index) }} aria-label='delete'>
                                                            <BsTrash />
                                                        </IconButton>
                                                        <span style={{ color: '#5f6368', fontSize: '13px' }}>Required</span><Switch name='checkedA' color='primary' onClick={() => { requiredQuestion(index) }} checked={questions[index].required}></Switch>
                                                        <IconButton>
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </Add_question_bottom>
                                                </Add_footer>
                                            </Add_question>
                    
                                            <Add_question >
                                                <Top_header>
                                                    Choose correct answer
                                                </Top_header>
                                                <Add_question_top>
                                                    <Question type="text" placeholder='Question' value={ques.questionText} disabled></Question>
                                                    <Points type="number" min={0} step={1} placeholder='0' onChange={(e) => { setquestionPoints(e.target.value, index) }}></Points>
                                                </Add_question_top>
                                                {ques.options.map((op, j) => (
                                                    <Add_question_body key={j} style={{ marginLeft: '8px', marginBottom: '10px', marginTop: '5px' }}>
                                                        <div key={j}>
                                                            <div style={{ display: 'flex' }}>
                                                                <div className='form-check'>
                                                                    <label style={{ fontSize: '13px' }} onClick={() => { setquestionAnswer(ques.options[j].optionText, index) }}>
                                                                        {(ques.qustionType !== 'text') ?
                                                                            <input
                                                                                style={{ marginRight: '10px', marginBottom: '10px', marginTop: '5px' }}
                                                                                type={ques.qustionType}
                                                                                name={ques.questionText}
                                                                                value="option 3"
                                                                                className='form-check-input'
                                                                                required={ques.required}
                                                                            /> : <ShortTextIcon style={{ marginRight: '10px' }} />}
                                                                        {ques.options[j].optionText}
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Add_question_body>
                                                ))}
                                                <Add_question_body >
                                                    <Button size='small' style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px', fontWeight: '600' }}>
                                                        <BsFileText style={{ fontSize: '20px', marginRight: '8px' }} />
                                                        Add answer feedback
                                                    </Button>
                                                </Add_question_body>
                                                <Add_question_bottom>
                                                    <Button onClick={() => { doneAnswer(index) }} variant='outlined' color='primary' style={{ textTransform: 'none', color: '#4285f4', fontSize: '12px', fontWeight: '600' }}>
                                                        Done
                                                    </Button>
                                                </Add_question_bottom>
                                            </Add_question>
                    
                    
                                            <Question_edit>
                                                <IconButton onClick={AddNewQuestion}>
                                                    <AddCircleOutlineIcon style={{ padding: '8px 5px', color: '#5f6368' }} />
                                                </IconButton>
                                                {/* <OndemandVideoIcon/> */}
                                                <CropOriginalIcon style={{ padding: '8px 5px', color: '#5f6368' }} />
                                                <TextFieldsIcon style={{ padding: '8px 5px', color: '#5f6368' }} />
                                            </Question_edit>
                                        </Question_boxes>
                                    ) : ""}


                                    /*{questions[index].answer ? (<div>ffff</div>) : (<div>eeee</div>)}*/</div>