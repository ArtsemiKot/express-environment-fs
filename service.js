const fs = require('fs');
const path = './storage/environment.json';

function getAllEnvironment() {
    const array = JSON.parse(fs.readFileSync(path))
    return array;
}

function getEnvironmentById(id) {
    const array = JSON.parse(fs.readFileSync(path));
    const filtered = array.filter((el) => el.id == id);
    if (filtered.length == 0) throw new Error('Элемент не найден с таким ID')
    return filtered;
}

function createEnvironment(label, category, priority) {
    const filtered = array.filter((el) => el.label == label)
    if (filtered.length > 0) throw new Error('Элемент с таким label  уже существует')
    const item = {
        id: label.toLowerCase(),
        label: label,
        category: category,
        priority: priority
    };
    const array = JSON.parse(fs.readFileSync(path));
    array.push(item);
    fs.writeFileSync(path, JSON.stringify(array));
    return array;
}

function updateEnvironment(id, label, category, priority) {
    const array = JSON.parse(fs.readFileSync(path));
    const filtered = array.filter((el) => el.id != id);
    if (filtered.length == array.length) throw new Error('ID is not found');
    const item = {
        id: id,
        label: label,
        category: category,
        priority: priority
    };
    filtered.push(item);
    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered;
}

function deleteEnvironment(id) {
    const array = JSON.parse(fs.readFileSync(path));
    const filtered = array.filter((el) => el.id != id);
    if (newArr.length == arr.length) throw new Error('Элемента с таким ID не существует');
    fs.writeFileSync(path, JSON.stringify(filtered));
    return filtered;
}

module.exports = { getAllEnvironment, getEnvironmentById, createEnvironment, updateEnvironment, deleteEnvironment };