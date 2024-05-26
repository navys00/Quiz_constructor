import express from 'express'
import * as fs from 'fs'
import cors from "cors"
import path from 'path'
import * as excel from "exceljs"
import * as client from 'pg'
import * as dotenv from 'dotenv'

const app = express()
app.use(cors())
app.use(express.json())


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', '*')
    next()
})

app.post("/add_questions/:doc_id", (req, res) => {
    //fs.writeFileSync("./files/ааа.json", 'aa')
    // let doc_data = req.body
    //let name = req.params.doc_id
    let data = JSON.stringify(req.body)
    try {
        if (fs.existsSync(`./files/${req.params.doc_id}.json`)) {
            fs.openSync(`./files/${req.params.doc_id}.json`, 'w+')
            fs.writeFileSync(`./files/${req.params.doc_id}.json`, data)
        }
        else {
            fs.writeFileSync(`./files/${req.params.doc_id}.json`, data)
        }

        res.send({ message: 'success' })
    }
    catch (err) {
        console.log(err)
    }

})

app.post("/student_response/:doc_id", (req, res) => {
    try {
        let date = new Date()
        let workbook = new excel.Workbook()
        let worksheet = workbook.addWorksheet(`${req.params.doc_id}`)

        worksheet.columns = [{ header: 'Time: ', 'key': 'datetime' }, ...req.body.column]
        worksheet.columns.forEach(column => {
            column.width = column.header.length < 12 ? 12 : column.header.length
        })
        worksheet.getRow(1).font = { bold: true }
        req.body.answer_data.forEach((e, index) => {
            const rowIndex = index + 2
            worksheet.addRow({
                date, ...e
            })
        })
        workbook.xlsx.writeFile(`${req.params.doc_id}.xlsx`)
        res.send({ msg: "success" })
    }
    catch (err) {
        console.log(err)
    }

})

app.get("/data/:doc_id", (req, res) => {
    let doc_id = req.params.doc_id
    fs.readFile(`./files/${doc_id}.json`, (err, data) => {
        try {
            let ques_data = JSON.parse(data)
            res.send({ message: 'success', ques_data })
        }
        catch (err) {
            console.log(err)
        }
    })
})

app.get('/get_all_filenames', (req, res) => {
    const directoryPath = './files'

    fs.readdir(directoryPath, function (err, files) {
        try {
            res.send(files)
        }
        catch (err) {
            console.log(err)
        }
    })
    //res.send({ message: 'success' })
})

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server OK')
})