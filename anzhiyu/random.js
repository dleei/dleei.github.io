var posts=["2023/07/05/Alist网盘挂载/","2023/07/20/DOM事件/","2023/07/05/css盒子居中方法总结/","2023/07/29/JavaScript数组对象常用方法总结/","2023/08/07/ajax/","2023/07/09/flex布局/","2023/07/01/git基本使用及命令/","2022/05/07/http强缓存和协商缓存/","2020/07/23/html基础入门/","2023/07/01/js基础入门/","2023/08/09/javasript里的事件循环/","2023/08/02/js垃圾回收机制/","2022/07/27/js常用简写技巧/","2023/07/01/typora笔记搭配图床/","2023/07/09/为什么0.1+0.2不等于0.3/","2022/07/27/作用域与作用域链/","2021/07/27/全网最通俗易懂的讲解 git rebase和git merge的原理和区别/","2021/06/25/初始vue（上）/","2023/07/27/程序员提高效率的 10 个方法/","2021/07/17/初识vue（下）/","2021/09/27/那些年用过的css奇妙用法之能用css就不用js技巧系列/","2021/07/10/初识vue（中）/","2024/07/26/老奶奶都会的重装系统教程/","2023/01/14/前端常见面试题合集/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };