function log(text) {
    if ((window['console'] === undefined)) return;
    console.log(text);
};

function handleError(jqXhr, textStatus, errorThrown, onError) {
    var code = 'error-connection-';
    var message = '';
    if (jqXhr.status === 0) {
        code += 'unavailable';
        message = 'No connection available. Verify Network.';
    } else if (jqXhr.status == 404) {
        code += 'resource-not-found';
        message = 'Requested resource not found. [404]';
    } else if (jqXhr.status == 500) {
        code += 'internal-server';
        message = 'Internal server error [500].';
    } else if (errorThrown === 'parsererror') {
        code += 'json-parse';
        message = 'Parse error.';
    } else if (errorThrown === 'timeout') {
        code += 'timeout';
        message = 'Time out error.';
    } else if (errorThrown === 'abort') {
        code += 'aborted';
        message = 'Ajax request aborted.';
    } else {
        code += 'uncaught';
        message = 'Uncaught error [" + jqXhr.responseText + "].';
    }

    log('Ajax Error:');
    log('  jqXhr.status: ' + jqXhr.status);
    log('  textStatus: ' + jqXhr.status);
    log('  errorThrown: ' + errorThrown);
    log('  message: ' + message);

    var data = $.parseJSON(jqXhr.responseText);
    log('  data: ' + JSON.stringify(data));

    if (onError) {
        onError(data);
    } else {
        if (jqXhr.status == 500) {
            var errorDetail = '';
            for (var i = 0; i < data.errors.length; i++) {
                errorDetail = '- ' + data.errors[i].message + '\n';
            }
            alert(data.message + '\n' + errorDetail);
        } else {
            alert('[' + code + ']:\n' + errorThrown);
        }
    };
}

function ajax(settings, onSuccess, onErrors) {
    var jqxhr = $.ajax(settings).done(onSuccess).fail(onErrors);
    return jqxhr;
}

function post(url, payload, callback, fail) {
    var settings = {
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        url: url,
        dataType: 'json',
        data: JSON.stringify(payload),
        success: callback,
        error: fail,
        cache: false,
    };
    var jqxhr = ajax(settings);
    return jqxhr;
};

function postFiles(url, payload, callback, fail) {
    var settings = {
        url: url,
        type: 'POST',
        data: payload,
        cache: false,
        processData: false,
        contentType: false,
        success: callback,
        error: fail
    };
    var jqxhr = ajax(settings);
    return jqxhr;
};
