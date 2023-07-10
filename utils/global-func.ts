import axios from 'axios';
import https from 'https';

export const removeVietnameseAccent = (str: string) => {
    if (!str) return str;
    // Các ký tự tiếng Việt có dấu
    var from = 'àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ';
    // Các ký tự tiếng Việt không dấu tương ứng
    var to = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeediiiiiooooooooooooooooouuuuuuuuuuuyyyyy';
    // Thực hiện việc thay thế ký tự có dấu bằng ký tự không dấu
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    return str.toLowerCase();
};

export const downFile = (fullPath: string, fileName: string) => {
    fetch(fullPath)
        .then((resp) => resp.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            // the filename you want

            document.body.appendChild(a);
            a.download = fileName;
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(() => alert('An error sorry'));
};

export function formatVND(amount: any) {
    if (amount.length <= 0) return;
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

export function formatPhoneNumber(phone: string) {
    if (phone.length <= 0) return phone;
    let newFormat = '(' + phone.slice(0, 3) + ') ' + phone.slice(3, 7) + ' - ' + phone.slice(7, 10);
    return newFormat;
}

export function hidePartialPhone(phone: string) {
    if (phone.length <= 0) return phone;
    let newFormat = '(' + phone.slice(0, 3) + ') **** ' + phone.slice(7, 10);
    return newFormat;
}

export async function urlExists(url: string): Promise<boolean> {
    try {
        const response = await axios.head(url, {
            httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        });
        return response.status === 200;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export async function isImageUrl(url: string): Promise<boolean> {
    try {
        const response = await axios.head(url, {
            responseType: 'arraybuffer',
            httpsAgent: new https.Agent({ rejectUnauthorized: false }),
        });
        const contentType = response.headers['content-type'];
        return contentType.startsWith('image/');
    } catch (error) {
        console.error(error);
        return false;
    }
}
