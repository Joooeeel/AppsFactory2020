import Schema from './schema';

export const create = (username, alta) => Schema.create({
    username,
    alta,
});

export const update = (id, data) => Schema.update(data, { where: { id } });

export const remove = id => Schema.destroy({ where: { id } });

export const getByEmailAndPassword = (username, alta) => Schema.findOne({
    where: {
        username,
        alta
    }
});

export const getById = (id) => Schema.findOne({
    where: {
        id
    }
});

export const get = () => Schema.findAll();
