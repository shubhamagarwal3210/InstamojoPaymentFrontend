const axios = require('axios').default;
const configuration = require('../config/config.json');

const getAllInvoice = async () => {
    console.log("configuration",configuration.server);
    try {
        var config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: configuration.server + '/instamojo/invoice',
            headers: {}
        };

        return Promise.resolve(
            axios(config)
        )
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                return listArrayPayload(response.data._materializedDocs);
            })
            .catch(function (error) {
                console.log(error);
                return [];
            });

    } catch (ex) {
        console.log(`Error in getAllInvoice : err : ${ex}`);
        return [];
    }
}

const listArrayPayload = async (list) => {
    try {
        let finalList = []
        list.forEach(function (arrayItem) {
            let data = arrayItem._fieldsProto;
            let contactObj = {};
            for (const key in data) {
                const valueType = data[key].valueType;
                contactObj[key] = data[key][valueType]
            }
            finalList = [...finalList, contactObj];
        });
        finalList.sort(function (x, y) {
            return y.created_at - x.created_at;
        })
        return finalList;
    } catch (err) {
        console.log(`Error in listArrayPayload : err : ${err}`)
        return [];
    }

}


export {
    getAllInvoice,
}
