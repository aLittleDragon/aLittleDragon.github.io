//省略代码……
$.fn.aCalendar.defaults = {
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dayOfWeekShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    postsMonthTip: 'Posts published in LMM yyyy',
    titleFormat: 'yyyy LMM',
    titleLinkFormat: '/archives/yyyy/MM/', //这里我添加了我的博客根目录 blog
    headArrows: {previous: '<span class="cal-prev"></span>', next: '<span class="cal-next"></span>'},
    footArrows: {previous: '« ', next: ' »'},
    weekOffset: 0,
    single: true,
    root: '/calendar/',
    url: '/calendar.json' //这里我添加了我的博客根目录 blog
};
