function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

function initClient() {
    gapi.client.init({
        clientId: CLIENT_ID,
        scope: SCOPES.join(' ')
    }).then(function () {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        // Handle initial sign in state. Subsequent changes are passed to the listener.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
}
