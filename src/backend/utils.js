// Пример инициализации todos.txt через код
function writeTodosToFile(todos) {
        try {
            fs.writeFileSync(TODO_FILE, JSON.stringify(todos, null, 2));
            return true;
        } catch (error) {
            console.error('Ошибка при записи файла:', error);
            return false;
        }
    }
    
    const initialTodos = [
        { id: 1, title: 'Покормить кота' },
        { id: 2, title: 'Купить хлеб' },
        { id: 3, title: 'Оплатить интернет' },
        { id: 4, title: 'Забрать посылку с WB' },
        { id: 5, title: 'Отнести в ремонт сапоги' }
    ];
writeTodosToFile(initialTodos);