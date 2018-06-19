export const config = {
    domain: '.yandex.ru',
    path: '/',
    items: {
        login: 'yandex_login',
        sessionId: 'Session_id',
        uid: 'yandexuid',
    },
};

async function getCookieByName(name) {
    return new Promise(resolve => {
        chrome.cookies.getAll({
            domain: config.domain,
            path: config.path,
            name,
        }, res => {
            resolve(
                Array.isArray(res) &&
                res[0] &&
                res[0].value,
            );
        });
    });
}

export function getUid() {
    return getCookieByName(config.items.uid);
}

export function getSessionId() {
    return getCookieByName(config.items.sessionId);
}
