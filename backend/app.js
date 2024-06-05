// import express from 'express'
// import * as fs from 'fs'
// import cors from "cors"
// import * as path from 'path'

const cors = require('cors')
const fs = require('fs')
const express = require('express')
const path = require('path')
const Pool = require('pg').Pool
const app = express()
app.use(cors())
app.use(express.json())


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', '*')
    next()
})


app.post("/post_questions/:doc_id", (req, res) => {

    console.log(req.body)
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

    let data = JSON.stringify(req.body)
    try {
        if (fs.existsSync(`./answers/${req.params.doc_id}.json`)) {
            fs.openSync(`./answers/${req.params.doc_id}.json`, 'w+')
            fs.writeFileSync(`./answers/${req.params.doc_id}.json`, data)
        }
        else {
            fs.writeFileSync(`./answers/${req.params.doc_id}.json`, data)
        }

        res.send({ message: 'success' })
    }
    catch (err) {
        console.log(err)
    }

})

app.get("/get_data/:doc_id", (req, res) => {
    try {
        let doc_id = path.parse(req.params.doc_id).name
        let data = JSON.parse(fs.readFileSync(`./files/${doc_id}.json`, 'utf8'))
        res.send(data)
    }
    catch (err) {
        console.log(err)
    }

})

app.get('/get_all_filenames', (req, res) => {
    const directoryPath = './files'
    fs.readdir(directoryPath, function (err, files) {
        try {
            const data = [];
            files.forEach(file => {

                const obj = { doc_name: '', doc_desc: '', filename: '' }
                const filePath = path.join(directoryPath, file);
                const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'))
                obj.doc_id = fileData.doc_id
                obj.doc_name = fileData.document_name
                obj.doc_name = fileData.doc_desc
                data.push(fileData)
            });
            res.send(data)

        }
        catch (err) {
            console.log(err)
        }
    })
})

app.delete('/get_all_filenames/:id', (req, res) => {
    console.log(req.params)
    let filePath = `./files/${req.params.id}.json`
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(`Не удалось удалить файл: ${err}`);
            return;
        }

        console.log('Файл успешно удален');
    });
    res.send({ msg: 'success' })

})

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: '5432'

})
const testConnection = async () => {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT NOW()');
        console.log('Результат:', res.rows);
    } catch (err) {
        console.error('Ошибка при выполнении запроса', err);
    } finally {
        client.release();
        await pool.end();
    }
};

testConnection();
// const connect = pool.connect()
// try {
//     const res = await client.query('SELECT NOW()');
//     console.log('Результат:', res.rows);
// } catch (err) {
//     console.error('Ошибка при выполнении запроса', err);
// } finally {
//     client.release();
//     await pool.end();
// }
// pool.query('SELECT NOW()', (err, res) => {
//     if (err) {
//         console.error('Ошибка при выполнении запроса', err);
//     }
//     console.log('Результат:', res.rows);
//     pool.end();
// });

app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server OK')
})