'use strict';

module.exports = ({ axios }) => {
    const getAdressData = async (zipCode) => {
        const { data } = await axios.get(`viacep.com.br/ws/${cep}/json/`);
        return data;
    };
    return getAdressData;
}

