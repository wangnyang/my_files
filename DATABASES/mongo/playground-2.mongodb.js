use('sirius')

db.employees.drop()

db.createCollection('employees', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            properties: {
                _id: {
                    bsonType: 'number'
                },
                first_name: {
                    bsonType: 'string'
            },
            degree: {
                bsonType:'string'
            },
            // one-to-one
            passport: {    // вложенный объект
                bsonType: 'object',
                properties: {
                    series: {
                        bsonType: 'number'
                    },
                    number: {
                        bsonType: 'number'
                    }
                },
                additionalProperties: false,
                required: ['series', 'number']
            }
        },
        additionalProperties: false,
        required: ['first_name', 'last_name']
    },
    // one-to-many
    education: {
        bsonType: 'array',
        items: {
            bsonType: 'object',   // не обязательно object, может быть str/int
            properties: {
                university: {bsonType: 'string'},
                completion_date: {bsonType: 'number'}
            }
        }
    }
}
})

db.employees.insertOne({
    _id: 1,
    first_name: 'Ivan',
    last_name: 'Ivanov',
    degree: 'PhD',
    passport: { series: 1234, number: 567890},
    education: [{university: 'МГУ', completion_date: 2015}, {university: 'СПбГУ', completion_date: 2017}]
    // birth_date: new Date('1999-01-30')
})


db.employees.find()   // select * from employees

// Варианты связей:
// 1. employer_id: 1 напрямую указать в insert
// 2. если не надо никаких ссылок, то просто хранить вложенные объекты


// one-to-many, аля postgres

db.actors.insertMany([
    {_id: 1, name: 'Tom Hanks', birth_date: new Date('1956-07-07')},
    {_id: 2, name: 'Al Pacino', birth_date: new Date('1956-07-31')},
    {_id: 3, name: 'Robert de Niro', birth_date: new Date('1943-08-17')}
])

db.awards.insertMany([
    {title: 'Tom Hanks', year: 1990, actor_id: 1},
    {title: 'Al Pacino', year: 1980, actor_id: 2},
    {title: 'Robert de Niro', year: 2000, actor_id: 1}
])

// oid - object id - это id генерится, если мы его не задаем, как выше

db.actors.aggregate([
    {
        $lookup: {
            from: 'awards',
            localField: '_id',
            foreignField: 'actor_id',
            as: 'awards'
        }
    }
])

// many-to-many

db.actors.drop()

db.actors.insertMany([
    {_id: 1, name: 'Tom Hanks', birth_date: new Date('1956-07-07'), film_ids: [1, 4]},
    {_id: 2, name: 'Al Pacino', birth_date: new Date('1956-07-31'), film_ids: [2, 3]},
    {_id: 3, name: 'Robert de Niro', birth_date: new Date('1943-08-17'), film_ids: [3, 4]}
])

db.films.drop()

db.filmns.insertMany([
    {_id: 1, title: 'Grin Mile', release_year: 1964},
    {_id: 2, title: 'God Father', release_year: 1964},
    {_id: 3, title: 'God Father: Part II', release_year: 1964},
    {_id: 4, title: 'The Irishman', release_year: 1964},
])

db.actors.aggregate([{
    $lookup: {
        from: 'films',   // агрегация актеров К фильмам
        localField: 'film_ids',
        foreignField: '_id',
        as: 'films'   // как будет называться поле
    }}
])


db.films.aggregate([{
    $lookup: {
        from: 'actors',
        localField: '_id',
        foreignField: 'film_ids',
        as: 'actors'
    }}
])
