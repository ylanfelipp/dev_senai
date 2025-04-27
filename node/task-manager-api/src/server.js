const express = require('express');
const { promises: fs } = require('fs');
const fsSync = require('fs');
const path = require('path');

const app = express();
const PORT = 8080;

const DATA_FILE = path.join(__dirname, 'baseDeDados.json');
const LOG_FILE = path.join(__dirname, 'log.txt');

app.use(express.json());

async function readTasks() {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        return JSON.parse(data || '[]');
    } catch (err) {
        return [];
    }
}

async function writeTasks(tasks) {
    await fs.writeFile(DATA_FILE, JSON.stringify(tasks, null, 2), 'utf-8');
}

function log(message) {
    const timestamp = new Date().toISOString();
    fsSync.appendFileSync(LOG_FILE, `[${timestamp}] ${message}\n`, 'utf-8');
}

app.get('/tarefas', async (req, res) => {
    const limit = parseInt(req.query.limit, 10) || 10;
    let tasks = await readTasks();
    if (req.query.sprint) tasks = tasks.filter(t => t.sprint === Number(req.query.sprint));
    if (req.query.responsavel) tasks = tasks.filter(t => t.responsavel === req.query.responsavel);
    res.json(tasks.slice(0, limit));
});

app.get('/tarefas/:id', (req, res) => {
    try {
        const data = fsSync.readFileSync(DATA_FILE, 'utf-8');
        const tasks = JSON.parse(data || '[]');
        const task = tasks.find(t => t.id === req.params.id);
        if (!task) {
            log(`GET /tarefas/${req.params.id} - not found`);
            return res.status(404).json({ message: 'Tarefa não encontrada.' });
        }
        res.json(task);
    } catch (err) {
        log(`GET /tarefas/${req.params.id} - error: ${err.message}`);
        res.status(500).json({ message: 'Erro ao ler tarefas.' });
    }
});

app.post('/tarefas', async (req, res) => {
    const required = ['titulo', 'descricao', 'responsavel', 'prazo', 'sprint', 'prioridade'];
    for (const field of required) {
        if (!(field in req.body)) {
            log(`POST /tarefas - missing field: ${field}`);
            return res.status(400).json({ message: `Campo '${field}' é obrigatório.` });
        }
    }
    const newTask = {
        id: Date.now().toString(),
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        concluida: false,
        responsavel: req.body.responsavel,
        prazo: req.body.prazo,
        sprint: Number(req.body.sprint),
        prioridade: req.body.prioridade
    };
    const tasks = await readTasks();
    tasks.push(newTask);
    await writeTasks(tasks);
    log(`POST /tarefas - created id ${newTask.id}`);
    res.status(201).json(newTask);
});

app.put('/tarefas/:id', async (req, res) => {
    const required = ['titulo', 'descricao', 'concluida', 'responsavel', 'prazo', 'sprint', 'prioridade'];
    for (const field of required) {
        if (!(field in req.body)) {
            log(`PUT /tarefas/${req.params.id} - missing field: ${field}`);
            return res.status(400).json({ message: `Campo '${field}' é obrigatório.` });
        }
    }
    const tasks = await readTasks();
    const idx = tasks.findIndex(t => t.id === req.params.id);
    if (idx === -1) {
        log(`PUT /tarefas/${req.params.id} - not found`);
        return res.status(404).json({ message: 'Tarefa não encontrada.' });
    }
    tasks[idx] = { id: req.params.id, ...req.body };
    await writeTasks(tasks);
    log(`PUT /tarefas/${req.params.id} - updated`);
    res.json(tasks[idx]);
});

app.delete('/tarefas/:id', async (req, res) => {
    const tasks = await readTasks();
    const filtered = tasks.filter(t => t.id !== req.params.id);
    if (filtered.length === tasks.length) {
        log(`DELETE /tarefas/${req.params.id} - not found`);
        return res.status(404).json({ message: 'Tarefa não encontrada.' });
    }
    await writeTasks(filtered);
    log(`DELETE /tarefas/${req.params.id} - deleted`);
    res.status(204).end();
});

app.delete('/tarefas/responsavel/:responsavel', async (req, res) => {
    const tasks = await readTasks();
    const filtered = tasks.filter(t => t.responsavel !== req.params.responsavel);
    if (filtered.length === tasks.length) {
        log(`DELETE /tarefas/responsavel/${req.params.responsavel} - none found`);
        return res.status(404).json({ message: 'Nenhuma tarefa encontrada para este responsável.' });
    }
    await writeTasks(filtered);
    log(`DELETE /tarefas/responsavel/${req.params.responsavel} - deleted all`);
    res.status(204).end();
});

app.patch('/tarefas/:id/concluir', async (req, res) => {
    const tasks = await readTasks();
    const task = tasks.find(t => t.id === req.params.id);
    if (!task) {
        log(`PATCH /tarefas/${req.params.id}/concluir - not found`);
        return res.status(404).json({ message: 'Tarefa não encontrada.' });
    }
    task.concluida = true;
    await writeTasks(tasks);
    log(`PATCH /tarefas/${req.params.id}/concluir - marked as concluded`);
    res.json(task);
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
