var express = require('express')
var path = require('path')
var port = process.env.PORT || 3000
var app = express()

app.set('views','./views/pages')
app.set('view engine', 'jade')
// app.use(express.bodyParser())
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

console.log('node saart on port' + port)

// index page
app.get('/', function(req, res) {
    res.render('index', {
        title: 'haozhide 首页',
        movies: [{
            title: '机械战警',
            _id: 1,
            poster: 'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2170735207.webp'
        },{
            title: '机械战警',
            _id: 1,
            poster: 'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2170735207.webp'
        },{
            title: '机械战警',
            _id: 1,
            poster: 'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2170735207.webp'
        },{
            title: '机械战警',
            _id: 1,
            poster: 'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2170735207.webp'
        },{
            title: '机械战警',
            _id: 1,
            poster: 'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2170735207.webp'
        },{
            title: '机械战警',
            _id: 1,
            poster: 'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2170735207.webp'
        }]
    })
})

// list page
app.get('/admin/list', function(req, res) {
    res.render('list', {
        title: 'haozhide 列表页',
        movies: [{
            _id: 1,
            title: '机械战警',
            doctor: '若泽·帕迪里亚',
            country: '美国',
            year: 2014,
            poster: 'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2170735207.webp',
            language: '英语',
            flash: 'imgcache.qq.com/minivideo_v1/vd/res/skins/nologo_loading.swf',
            summary: '2028年，专事军火开发的机器人公司Omni Corp.生产了大量装备精良的机械战警，他们被投入到维和和惩治犯罪等行动中，取得显著的效果。罪犯横行的底特律市，嫉恶如仇、正义感十足的警察亚历克斯·墨菲（乔尔·金纳曼 Joel Kinnaman 饰）遭到仇家暗算，身体受到毁灭性破坏。借助于Omni公司天才博士丹尼特·诺顿（加里·奥德曼 Gary Oldman 饰）最前沿的技术，墨菲以机械战警的形态复活。数轮严格的测试表明，墨菲足以承担起维护社会治安的重任，他的口碑在民众中直线飙升，而墨菲的妻子克拉拉（艾比·考尼什 Abbie Cornish 饰）和儿子大卫却再难从他身上感觉亲人的温暖。'
        }]
    })
})

// detail page
app.get('/movie/:id', function(req, res) {
    res.render('detail', {
        title: 'haozhide 详情页',
        movie: {
            doctor: '若泽·帕迪里亚',
            country: '美国',
            title: '机械战警',
            year: 2014,
            poster: 'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2170735207.webp',
            language: '英语',
            flash: 'imgcache.qq.com/minivideo_v1/vd/res/skins/nologo_loading.swf',
            summary: '2028年，专事军火开发的机器人公司Omni Corp.生产了大量装备精良的机械战警，他们被投入到维和和惩治犯罪等行动中，取得显著的效果。罪犯横行的底特律市，嫉恶如仇、正义感十足的警察亚历克斯·墨菲（乔尔·金纳曼 Joel Kinnaman 饰）遭到仇家暗算，身体受到毁灭性破坏。借助于Omni公司天才博士丹尼特·诺顿（加里·奥德曼 Gary Oldman 饰）最前沿的技术，墨菲以机械战警的形态复活。数轮严格的测试表明，墨菲足以承担起维护社会治安的重任，他的口碑在民众中直线飙升，而墨菲的妻子克拉拉（艾比·考尼什 Abbie Cornish 饰）和儿子大卫却再难从他身上感觉亲人的温暖。'
        }
    })
})

// index page
app.get('/admin/update/:id', function(req, res) {
    res.render('admin', {
        title: 'haozhide 后台录入页',
        movie: {
            title: '',
            doctor: '',
            country: '',
            year: '',
            poster: '',
            flash: '',
            summary: '',
            language: ''
        }
    })
})