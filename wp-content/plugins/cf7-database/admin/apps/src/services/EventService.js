import axios from "axios";
const nonce = window.njt_cfd_data.nonce;

export default {
    saveEditSetting(data) {
        data.append("nonce", nonce);
        const response = axios({
            method: "post",
            url: ajaxurl,
            data: data,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response;
    },
    getDataTable(data) {
        data.append("nonce", nonce);
        const response = axios({
            method: "post",
            url: ajaxurl,
            data: data,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response;
    },
    filterDate(data) {
        data.append("nonce", nonce);
        const response = axios({
            method: "post",
            url: ajaxurl,
            data: data,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response; 
    },
    seTypeSomething(data) {
        data.append("nonce", nonce);
        const response = axios({
            method: "post",
            url: ajaxurl,
            data: data,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response; 
    },
    removeRow(data) {
        data.append("nonce", nonce);
        const response = axios({
            method: "post",
            url: ajaxurl,
            data: data,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response; 
    },
    editRow(data) {
        data.append("nonce", nonce);
        const response = axios({
            method: "post",
            url: ajaxurl,
            data: data,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response; 
    },
    export_to_csv(data) {
        data.append("nonce", nonce);
        const response = axios({
            method: "post",
            url: ajaxurl,
            data: data,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response; 
    }
};