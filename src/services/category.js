import get from '~/utils/request';
const findAll = async () => {
    try {
        const res = await get('/categories');
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

export { findAll };
