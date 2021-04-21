const getters = {
  // headerShow: state => state.app.headerShow,
  // defaultImg: state => state.app.defaultImg,
  // defaultHeadImg: state => state.app.defaultHeadImg,

  personList: state => state.app.personList,
  editIndexStr: state => state.app.editIndexStr,
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  loginStatus: state => state.user.loginStatus
}
export default getters
