let baseUrl;
if(process.env.NODE_ENV === 'development'){
    baseUrl='http://121.41.113.243'//proxyApi 
}else{
    baseUrl='https://ht.zjhjjk.com'
}

export{baseUrl}