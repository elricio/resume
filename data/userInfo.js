/*个人信息说明，数据格式为对象
	*   {
	*       userName: @value String               *         姓名
			userPortrait: @value String           *         头像
	*       jobWant: @value String                *         求职意向
	*       userQQ: @value String|Number          *         QQ号码
	*       userEmail: @value String              *         邮箱地址
	*       motto: @value String                  []         激励格言
	*       userPhone: @value String|Number       *          手机号码
	*       userOrignPlace: @value String         *         籍贯
	*       userSeatPlace: @value String          *         所在地
	*       userWeibo：@value String              []         微博地址
	*       userAssessment: @value String         []        自我评价
	*       userHobby: @value Array              []          爱好
	*       userAward:@value Array               []          奖项
	*
	*
	*   }
*/

var userInfo = {
  userName: 'elric',
  userPortrait: 'images/icon/header.jpg',
  jobWant: 'WEB前端开发工程师',
  userQQ: '1318245851',
  userEmail: 'elric@linux.do',
  motto: '如果用JS来表示我们的一生，那将会是一个超级无限长的嵌套。',
  userPhone: 18810609069,
  userOrignPlace: '河南省周口市',
  userSeatPlace: '北京市',
  //  userWeibo: "javascript@miaov.com",
  userHobby: ['运动', '游戏', '电影', '音乐'],
  userAssessment: '富有探索精神，精通各种JS技巧与实现，为人和善。'
  //  userAward: ["最佳前端架构奖"]
}
