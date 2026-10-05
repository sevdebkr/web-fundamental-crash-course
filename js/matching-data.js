const MATCHING_ITEMS = {
  tr: [
    {id:'thin-client',term:'Thin Client',definition:'Yerelde çok az işlem yapar; çoğunlukla sunucunun gönderdiği içeriği görüntüler.'},
    {id:'json-schema',term:'JSON Schema',definition:'Bir JSON verisinin beklenen yapısını, veri tiplerini ve zorunlu alanlarını tanımlar.'},
    {id:'sso',term:'SSO (Single Sign-On)',definition:'Kullanıcının bir kez giriş yaparak birden fazla ilişkili uygulamaya erişmesini sağlar.'},
    {id:'samesite',term:'SameSite Attribute',definition:'Cookie’nin siteler arası isteklerde gönderilip gönderilmeyeceğini kontrol eder.'},
    {id:'etag',term:'ETag',definition:'Önbellekteki verinin güncel olup olmadığını kontrol etmek için kullanılan içerik parmak izidir.'},
    {id:'blue-green',term:'Blue-Green Deployment',definition:'İki paralel ortam çalıştırılır ve trafik doğrulanan yeni ortama geçirilir.'},
    {id:'kubernetes',term:'Kubernetes',definition:'Container’ları bir makine kümesi üzerinde çalıştıran ve ölçekleyen orkestrasyon sistemidir.'},
    {id:'pull-request',term:'Pull Request',definition:'Bir branch’teki değişikliklerin incelenerek başka bir branch’e birleştirilmesi talebidir.'},
    {id:'multiplexing',term:'Multiplexing',definition:'Birden fazla HTTP akışının aynı bağlantıyı eşzamanlı paylaşmasını sağlar.'},
    {id:'idempotency',term:'Idempotency',definition:'Bir işlemin bir veya birçok kez uygulanmasının aynı nihai sonucu üretmesi özelliğidir.'}
  ],
  en: [
    {id:'thin-client',term:'Thin Client',definition:'Does little processing locally and mostly displays what the server sends.'},
    {id:'json-schema',term:'JSON Schema',definition:'Formally describes the expected shape, types, and required fields of JSON data.'},
    {id:'sso',term:'SSO (Single Sign-On)',definition:'Lets a user sign in once and access multiple related applications.'},
    {id:'samesite',term:'SameSite Attribute',definition:'Controls whether a cookie is sent with cross-site requests.'},
    {id:'etag',term:'ETag',definition:'A content fingerprint used to determine whether a cached resource is still current.'},
    {id:'blue-green',term:'Blue-Green Deployment',definition:'Runs two parallel environments and switches traffic to the verified new environment.'},
    {id:'kubernetes',term:'Kubernetes',definition:'An orchestration system that runs and scales containers across a cluster.'},
    {id:'pull-request',term:'Pull Request',definition:'A request to review and merge changes from one branch into another.'},
    {id:'multiplexing',term:'Multiplexing',definition:'Allows multiple HTTP streams to share one connection at the same time.'},
    {id:'idempotency',term:'Idempotency',definition:'The property that repeating an operation produces the same final result.'}
  ]
};
