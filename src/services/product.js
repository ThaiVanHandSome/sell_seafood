import get from '~/utils/request';

const findAll = async () => {
    try {
        const res = await get('/seafoods');
        return res;
    } catch (err) {
        console.error(err);
    }
};

export { findAll };
