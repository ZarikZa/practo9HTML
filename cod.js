let unuitazs = [];

function addUnitaz() {
    const Name = document.getElementById('name');
    const Model = document.getElementById('model');
    const Price = document.getElementById('price');

    const name = Name.value.trim();
    const model = Model.value.trim();
    const price = parseInt(Price.value);

    if (!name ||  !model || isNaN(price)) {
        alert('Поля заполнены неправильно');
        return;
    }

    const unit = {
        name: name,
        model: model,
        price: price,
        displayInfo: function () {
            return `Название: ${this.name} Модель: ${this.model} Цена: ${this.price}`;
        }
    };

    unuitazs.push(unit);
    updateUnitList();
    Name.value = '';
    Model.value = '';
    Price.value = '';
}

function deleteUnit(index) {
    unuitazs.splice(index, 1);
    updateUnitList();
}

function editUnit(index) {
    const unit = unuitazs[index];
    const newName = prompt('Введите новый бренд:', unit.name);
    const newModel = prompt('Введите новую модель:', unit.model);
    const newPrice = parseInt(prompt('Введите новый год:', unit.price));

    if (!newName || !newModel || isNaN(newPrice)) {
        alert('Пожалуйста, правильно заполните все поля.');
        return;
    }

    unit.name = newName;
    unit.model = newModel;
    unit.price = newPrice;

    updateUnitList();
}

function updateUnitList() {
    const unitList = document.getElementById('unit-list');
    unitList.innerHTML = '';
    unuitazs.forEach((unit, index) => {
        const li = document.createElement('li');
        li.classList.add('unit-item');
        li.textContent = unit.displayInfo();

        const editButton = document.createElement('button');
        editButton.textContent = 'Изменить';
        editButton.onclick = function() {
            editUnit(index);
        };
        li.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = function() {
            deleteUnit(index);
        };
        li.appendChild(deleteButton);

        unitList.appendChild(li);
    });
}

