var posts=["posts/56716.html","posts/2.html","posts/4490.html","posts/2.html","posts/26620.html","posts/3.html","posts/28503.html","posts/ec06750e.html","posts/33087111.html","posts/37361.html","posts/62006.html","posts/e4f71320.html","posts/3122407b.html","posts/4.html","posts/17b27233.html","posts/ec6e7548.html","posts/28504.html","posts/f70f2e4e.html","posts/8bc504c6.html","posts/bb026fe7.html","posts/3e5b9f05.html","posts/ae7287a1.html","posts/2.html","posts/8aad4253.html","posts/7986f38c.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };