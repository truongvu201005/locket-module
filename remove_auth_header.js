let headers = $request.headers;
delete headers['Authorization'];
$done({ headers });
